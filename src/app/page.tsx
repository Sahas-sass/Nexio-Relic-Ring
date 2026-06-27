"use client";
import React, { useState, useEffect } from "react";
import { buildNetworkGraph, findShortestPath } from "../utils/routing";
import { textToAscii, asciiToCodex } from '../utils/codex';
import { getConfig } from '../utils/configLoader';
import MapCanvas, { Planet } from '../components/MapCanvas';

export default function Dashboard() {
  const [result, setResult] = useState<string>("System standing by...");
  const [message, setMessage] = useState<string>("Hello world");
  const [encodedPayload, setEncodedPayload] = useState<string>("");
  
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [activeRoute, setActiveRoute] = useState<string[]>([]);

  // Dynamic selection state
  const [startNode, setStartNode] = useState<string>("Aegis");
  const [endNode, setEndNode] = useState<string>("Elysium");

  useEffect(() => {
    try {
      const { nodes } = getConfig(); 
      const realPlanets: Planet[] = nodes.map((node: any) => ({
        id: node.id,
        x: node.x,
        y: node.y,
        isAlive: true
      }));
      setPlanets(realPlanets);
    } catch (error) {
      setResult("CRITICAL ERROR: Unable to load configuration.");
    }
  }, []);

  const runRouting = () => {
    if (startNode === endNode) {
      setResult("ERROR: Source and Destination cannot be the same.");
      setEncodedPayload("");
      setActiveRoute([]);
      return;
    }

    const deadNodes = planets.filter(p => !p.isAlive).map(p => p.id);
    const graph = buildNetworkGraph(deadNodes);

    if (!graph[startNode] || !graph[endNode]) {
      setResult(`CRITICAL: ${startNode} or ${endNode} is offline!`);
      setEncodedPayload("");
      setActiveRoute([]);
      return;
    }

    const path = findShortestPath(startNode, endNode, graph);

    if (path.length <= 1) {
      setResult("ALERT: Network partitioned. No viable path to target.");
      setEncodedPayload("");
      setActiveRoute([]);
    } else {
      setResult(`Optimal Route: ${path.join(" → ")}`);
      setActiveRoute(path); 
      
      const asciiArray = textToAscii(message);
      const codexArray = asciiToCodex(asciiArray, 10); 
      setEncodedPayload(`[${codexArray.join(', ')}]`);
    }
  };

  const toggleNodeStatus = (nodeId: string) => {
    setPlanets(prevPlanets => {
      const updated = prevPlanets.map(planet => 
        planet.id === nodeId ? { ...planet, isAlive: !planet.isAlive } : planet
      );
      setResult(`System: Node ${nodeId} status updated.`);
      setActiveRoute([]); 
      return updated;
    });
  };

  return (
    <div className="flex min-h-screen bg-[#07090E] text-white font-sans">
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
            <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6 space-y-4">
              <h3 className="text-[#8A8D98] text-xs">Pathfinder Engine</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#5A5D68] mb-1 block">Origin</label>
                  <select value={startNode} onChange={(e) => setStartNode(e.target.value)} className="w-full bg-[#0B0E14] border border-[#1E222D] rounded-xl px-3 py-2 text-sm text-white focus:outline-none">
                    {planets.map(p => <option key={p.id} value={p.id}>{p.id}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#5A5D68] mb-1 block">Destination</label>
                  <select value={endNode} onChange={(e) => setEndNode(e.target.value)} className="w-full bg-[#0B0E14] border border-[#1E222D] rounded-xl px-3 py-2 text-sm text-white focus:outline-none">
                    {planets.map(p => <option key={p.id} value={p.id}>{p.id}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#5A5D68] mb-1 block">Payload Message</label>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-[#0B0E14] border border-[#1E222D] rounded-xl px-4 py-2 text-sm text-white focus:outline-none" placeholder="Enter message..." />
              </div>

              <button onClick={runRouting} className="w-full bg-[#0062FF] py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                Transmit Payload
              </button>
            </div>

            <div className="md:col-span-2 bg-[#151822] rounded-3xl border border-[#1E222D] p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-[#8A8D98] text-xs mb-4">Transmission Output</h3>
                <div className="bg-[#0B0E14] p-4 rounded-xl font-mono text-sm text-[#10B981] border border-[#1E222D]/50 shadow-inner">{result}</div>
              </div>
              {encodedPayload && (
                <div className="mt-4">
                  <h3 className="text-[#8A8D98] text-xs mb-2">Encoded Data Stream</h3>
                  <div className="bg-[#0B0E14] p-4 rounded-xl font-mono text-xs text-[#5A5D68] break-all border border-[#1E222D]/50">{encodedPayload}</div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6">
            <h3 className="text-[#8A8D98] text-xs mb-4">Chaos Test: Force Node Failure</h3>
            <div className="flex gap-4 flex-wrap">
              {planets.map((planet) => (
                <button key={planet.id} onClick={() => toggleNodeStatus(planet.id)} className={`px-4 py-2 rounded-xl text-sm border transition-all ${!planet.isAlive ? "bg-red-900/20 border-red-500 text-red-500" : "bg-[#1E222D] border-[#2A2E39] text-white hover:border-[#0062FF]"}`}>
                  {!planet.isAlive ? `Restore ${planet.id}` : `Kill ${planet.id}`}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6">
            <h3 className="text-[#8A8D98] text-xs mb-4">Orbital Projection Map</h3>
            <div className="border border-[#1E222D] rounded-2xl overflow-hidden shadow-inner">
              <MapCanvas planets={planets} activeRoute={activeRoute} onPlanetClick={toggleNodeStatus} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}