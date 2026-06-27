"use client";
import React, { useState } from "react";
import { buildNetworkGraph, findShortestPath } from "../utils/routing";
import { getConfig } from '../utils/configLoader';
import { textToAscii, asciiToCodex } from '../utils/codex';

// Map Component
export const OrbitalMap = () => {
  const { nodes } = getConfig();

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full bg-[#0B0E14] rounded-2xl">
      {/* Draw Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r="8" fill="#0062FF" />
          <text x={node.x + 12} y={node.y + 4} fill="#8A8D98" fontSize="12">
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default function Dashboard() {
  const [result, setResult] = useState<string>("System standing by...");
  const [deadNodes, setDeadNodes] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("ZETA_PROTOCOL_INIT");
  const [encodedPayload, setEncodedPayload] = useState<string>("");
  const nodes = ["Aegis", "Boreas", "Dawn", "Elysium"]; 

  const runRouting = () => {
    const graph = buildNetworkGraph(deadNodes);

    if (!graph["Aegis"] || !graph["Elysium"]) {
      setResult("CRITICAL: Start or Destination node is offline!");
      setEncodedPayload("");
      return;
    }

    const path = findShortestPath("Aegis", "Elysium", graph);

    if (path.length <= 1) {
      setResult("ALERT: Network partitioned. No viable path to target.");
      setEncodedPayload("");
    } else {
      
      setResult(`Optimal Route: ${path.join(" → ")}`);
      
      const asciiArray = textToAscii(message);
      const codexArray = asciiToCodex(asciiArray, 16); 
      setEncodedPayload(`[${codexArray.join(', ')}]`);
    }
  };

  const toggleNodeStatus = (nodeId: string) => {
    setDeadNodes((prev) =>
      prev.includes(nodeId)
        ? prev.filter((id) => id !== nodeId)
        : [...prev, nodeId],
    );

    const status = deadNodes.includes(nodeId) ? "online" : "offline";
    setResult(`System: Node ${nodeId} status updated to ${status}.`);
  };

  return (
    <div className="flex min-h-screen bg-[#07090E] text-white font-sans">
      {/* Sidebar removed, main content now spans full width */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto space-y-6">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Control Terminal</h2>
              <p className="text-sm text-[#5A5D68] mt-1">Zeta-26 Network Core</p>
            </div>
            <div className="flex items-center gap-2 bg-[#151822] border border-[#1E222D] px-4 py-2 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
              <span className="text-xs text-[#8A8D98]">System Online</span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* UPDATED: Pathfinder Card with Payload Input */}
            <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6 space-y-4">
              <h3 className="text-[#8A8D98] text-xs">Pathfinder</h3>
              
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#5A5D68] mb-1 block">Payload Message</label>
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0B0E14] border border-[#1E222D] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#0062FF]"
                  placeholder="Enter message..."
                />
              </div>

              <button
                onClick={runRouting}
                className="w-full bg-[#0062FF] py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(0,98,255,0.3)]"
              >
                Transmit Payload
              </button>
            </div>

            {/* UPDATED: Transmission Output with Encoded Payload */}
            <div className="md:col-span-2 bg-[#151822] rounded-3xl border border-[#1E222D] p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-[#8A8D98] text-xs mb-4">Transmission Output</h3>
                <div className="bg-[#0B0E14] p-4 rounded-xl font-mono text-sm text-[#10B981] border border-[#1E222D]/50 shadow-inner">
                  {result}
                </div>
              </div>
              
              {encodedPayload && (
                <div className="mt-4">
                  <h3 className="text-[#8A8D98] text-xs mb-2">Encoded Data Stream (Hex/Base16)</h3>
                  <div className="bg-[#0B0E14] p-4 rounded-xl font-mono text-xs text-[#5A5D68] break-all border border-[#1E222D]/50">
                    {encodedPayload}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chaos Test Panel */}
          <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6">
            <h3 className="text-[#8A8D98] text-xs mb-4">
              Chaos Test: Force Node Failure
            </h3>
            <div className="flex gap-4 flex-wrap">
              {nodes.map((node) => {
                const isDead = deadNodes.includes(node);
                return (
                  <button
                    key={node}
                    onClick={() => toggleNodeStatus(node)}
                    className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                      isDead
                        ? "bg-red-900/20 border-red-500 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                        : "bg-[#1E222D] border-[#2A2E39] text-white hover:border-[#0062FF]"
                    }`}
                  >
                    {isDead ? `Restore ${node}` : `Kill ${node}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Visualization Section */}
          <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6 min-h-[300px]">
            <h3 className="text-[#8A8D98] text-xs mb-4">Orbital Projection Map</h3>
            <div className="h-[300px] border border-[#1E222D] rounded-2xl overflow-hidden shadow-inner">
              <OrbitalMap />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}