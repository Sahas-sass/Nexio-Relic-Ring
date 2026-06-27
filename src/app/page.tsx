"use client";
import React from 'react';

// --- Reusable SVG Icons to match the UI ---
const Icons = {
  Dashboard: () => (
    <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    </svg>
  ),
  Map: () => (
    <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
    </svg>
  ),
  Logs: () => (
    <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" className="shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" className="shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
    </svg>
  ),
};

export default function Dashboard() {
  return (
    // Main Background (Deepest Dark Navy/Black)
    <div className="flex h-screen bg-[#07090E] text-white font-sans overflow-hidden selection:bg-[#0062FF] selection:text-white">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] bg-[#07090E] border-r border-[#1E222D] flex flex-col justify-between py-6 px-4 shrink-0">
        <div>
          {/* Logo Area */}
          <div className="flex items-center gap-3 px-4 mb-10">
            <div className="w-6 h-6 rounded bg-[#0062FF] flex items-center justify-center">
              <span className="font-bold text-xs">Z</span>
            </div>
            <h1 className="text-lg font-semibold tracking-wide">Zeta-26</h1>
          </div>

          {/* Welcome Text */}
          <div className="px-4 mb-8">
            <h2 className="text-xl font-medium mb-1">Welcome, <span className="font-semibold text-[#0062FF]">Admin</span></h2>
            <p className="text-[11px] text-[#8A8D98]">Here's your network overview</p>
          </div>

          {/* Navigation Menu */}
          <div className="mb-4 px-4">
            <p className="text-[10px] uppercase font-semibold text-[#5A5D68] tracking-widest mb-3">Main Menu</p>
            <nav className="flex flex-col gap-1">
              <button className="w-full flex items-center gap-3 bg-[#0062FF] text-white px-4 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(0,98,255,0.3)]">
                <Icons.Dashboard />
                <span className="text-sm font-medium">Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 text-[#8A8D98] hover:text-white hover:bg-[#151822] px-4 py-3 rounded-xl transition-all">
                <Icons.Map />
                <span className="text-sm font-medium">Orbital Map</span>
              </button>
              <button className="w-full flex items-center gap-3 text-[#8A8D98] hover:text-white hover:bg-[#151822] px-4 py-3 rounded-xl transition-all">
                <Icons.Logs />
                <span className="text-sm font-medium">Network Logs</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Support/Controls */}
        <div className="px-4">
           <p className="text-[10px] uppercase font-semibold text-[#5A5D68] tracking-widest mb-3">System Controls</p>
           <button className="w-full text-left text-[#8A8D98] hover:text-white px-4 py-2 text-sm">Force Reboot</button>
           <button className="w-full text-left text-[#8A8D98] hover:text-white px-4 py-2 text-sm">Protocol v1.0.4</button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top Header Row */}
        <header className="h-[80px] flex items-center justify-between px-8 shrink-0">
          {/* Top Tabs */}
          <div className="flex gap-2 bg-[#151822] p-1 rounded-full border border-[#1E222D]">
            <button className="px-5 py-1.5 rounded-full bg-[#202532] text-sm font-medium text-white">Relics</button>
            <button className="px-5 py-1.5 rounded-full text-sm font-medium text-[#8A8D98] hover:text-white">Fiber</button>
            <button className="px-5 py-1.5 rounded-full text-sm font-medium text-[#8A8D98] hover:text-white">Nodes</button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="flex items-center gap-2 bg-[#151822] border border-[#1E222D] rounded-full px-4 py-2">
              <Icons.Search />
              <input 
                type="text" 
                placeholder="Ask network.ai anything..." 
                className="bg-transparent border-none focus:outline-none text-sm text-white w-full placeholder-[#5A5D68]"
              />
            </div>
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#151822] border border-[#1E222D] flex items-center justify-center">
              <Icons.Bell />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-[#0062FF]"></div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Team Leader</p>
                <p className="text-[10px] text-[#8A8D98]">University of Kelaniya</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid Content */}
        <div className="p-8 pt-2 flex flex-col gap-6">
          
          {/* ROW 1: Top Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Total Holding / Network Status */}
            <div className="bg-[#151822] rounded-[24px] border border-[#1E222D] p-6 flex flex-col justify-between shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#8A8D98] text-sm font-medium">Global Network Status</h3>
                <div className="bg-[#1E222D] rounded-full px-3 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-[10px] font-mono text-gray-300">Q-Align</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-2">Operational</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] text-xs font-medium bg-[#10B981]/10 px-2 py-0.5 rounded text-center">
                    Fiber Rings Active
                  </span>
                  <span className="text-[#8A8D98] text-xs">At 0.67c speed</span>
                </div>
              </div>
            </div>

            {/* My Portfolio / Active Nodes Slider */}
            <div className="lg:col-span-2 bg-[#151822] rounded-[24px] border border-[#1E222D] p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#8A8D98] text-sm font-medium">Active Planetary Nodes</h3>
                <button className="text-xs border border-[#1E222D] rounded-full px-4 py-1.5 hover:bg-[#1E222D]">See all</button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {/* Planet Cards */}
                {['Aegis', 'Boreas', 'Dawn', 'Elysium'].map((planet, i) => (
                  <div key={planet} className="min-w-[140px] bg-[#1E222D]/50 border border-[#2A2E39] rounded-2xl p-4 flex flex-col justify-center">
                    <p className="text-lg font-semibold text-white mb-1">{planet}</p>
                    <p className="text-[11px] text-[#8A8D98] mb-3">Codex {8 + i}</p>
                    <div className="flex items-center gap-2 text-xs">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]"></span>
                       <span>Towers: {4 + (i*2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2: The Map Placeholder (Taking the large chart space) */}
          <div className="bg-[#151822] rounded-[24px] border border-[#1E222D] p-6 shadow-lg min-h-[350px] flex flex-col">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-white text-sm font-medium">Orbital Projection Map</h3>
                <div className="flex gap-1 border border-[#1E222D] rounded-full p-1">
                  <button className="text-xs px-4 py-1 rounded-full text-[#8A8D98] hover:text-white">Focus</button>
                  <button className="text-xs px-4 py-1 rounded-full bg-[#0062FF] text-white">Full System</button>
                </div>
             </div>
             <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-[#1E222D] rounded-xl bg-[#0B0E14]/50 relative overflow-hidden">
                {/* Visualizer Target */}
                <div className="w-2 h-2 bg-[#0062FF] rounded-full shadow-[0_0_30px_10px_rgba(0,98,255,0.4)] animate-ping"></div>
                <p className="text-[#8A8D98] text-xs font-mono mt-6 uppercase tracking-widest">Awaiting Map Component...</p>
             </div>
          </div>

          {/* ROW 3: Hop Logs Table (Taking the Portfolio Overview space) */}
          <div className="bg-[#151822] rounded-[24px] border border-[#1E222D] p-6 shadow-lg mb-8">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-sm font-medium">Transmission Logs</h3>
                <div className="flex gap-2">
                  <button className="text-xs border border-[#0062FF] bg-[#0062FF]/10 text-[#0062FF] rounded-full px-4 py-1">All Routes</button>
                  <button className="text-xs border border-[#1E222D] text-[#8A8D98] rounded-full px-4 py-1">Failures</button>
                </div>
             </div>
             
             {/* Table Structure */}
             <div className="w-full text-left">
                <div className="grid grid-cols-4 text-[11px] uppercase tracking-wider text-[#5A5D68] border-b border-[#1E222D] pb-3 mb-3">
                  <div>Source → Dest</div>
                  <div>Payload Convert (Hex/Base)</div>
                  <div>Latency Cost</div>
                  <div className="text-right">Status</div>
                </div>
                
                {/* Table Row Example 1 */}
                <div className="grid grid-cols-4 items-center text-sm py-3 border-b border-[#1E222D]/50 hover:bg-[#1E222D]/30 transition-colors rounded-lg px-2 -mx-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    Aegis <span className="text-[#5A5D68]">→</span> Boreas
                  </div>
                  <div className="text-[#8A8D98] font-mono text-xs truncate pr-4">[242, 401, 413...]</div>
                  <div className="text-white">12.4s</div>
                  <div className="text-right text-[#10B981] flex justify-end items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    Delivered
                  </div>
                </div>

                 {/* Table Row Example 2 */}
                 <div className="grid grid-cols-4 items-center text-sm py-3 hover:bg-[#1E222D]/30 transition-colors rounded-lg px-2 -mx-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0062FF]"></span>
                    Boreas <span className="text-[#5A5D68]">→</span> Dawn
                  </div>
                  <div className="text-[#8A8D98] font-mono text-xs truncate pr-4">[52, 73, 7A, 7A...]</div>
                  <div className="text-white">--</div>
                  <div className="text-right text-[#0062FF] flex justify-end items-center gap-2">
                     <div className="w-2 h-2 bg-[#0062FF] rounded-full animate-pulse"></div>
                    In Transit
                  </div>
                </div>

             </div>
          </div>

        </div>
      </main>
    </div>
  );
}