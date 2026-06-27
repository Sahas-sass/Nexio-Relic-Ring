"use client";
import React from 'react';

// --- Reusable SVG Icons ---
const Icons = {
  Dashboard: () => <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>,
  Map: () => <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>,
  Logs: () => <svg width="20" height="20" className="shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>,
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#07090E] text-white font-sans">
      
      {/* SIDEBAR: Hidden on mobile, fixed on desktop */}
      <aside className="hidden md:flex w-[260px] bg-[#07090E] border-r border-[#1E222D] flex-col py-6 px-4 shrink-0">
        <div className="flex items-center gap-3 px-4 mb-10">
          <div className="w-8 h-8 rounded-lg bg-[#0062FF] flex items-center justify-center font-bold text-sm">Z</div>
          <h1 className="text-xl font-bold">Zeta-26</h1>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          <button className="flex items-center gap-3 bg-[#0062FF] px-4 py-3 rounded-xl"><Icons.Dashboard /> Dashboard</button>
          <button className="flex items-center gap-3 text-[#5A5D68] hover:text-white px-4 py-3 rounded-xl transition-all"><Icons.Map /> Orbital Map</button>
          <button className="flex items-center gap-3 text-[#5A5D68] hover:text-white px-4 py-3 rounded-xl transition-all"><Icons.Logs /> Network Logs</button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <header className="mb-8">
            <h2 className="text-2xl font-bold">Welcome, Admin</h2>
            <p className="text-sm text-[#5A5D68]">Network Core Active</p>
          </header>

          {/* Grid Layout: Responsive 1 column on mobile, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6">
              <h3 className="text-[#8A8D98] text-xs mb-2">Global Network Status</h3>
              <p className="text-2xl font-bold">Operational</p>
            </div>
            <div className="md:col-span-2 bg-[#151822] rounded-3xl border border-[#1E222D] p-6">
              <h3 className="text-[#8A8D98] text-xs mb-4">Active Planetary Nodes</h3>
              <div className="flex gap-4 flex-wrap">
                {['Aegis', 'Boreas', 'Dawn', 'Elysium'].map(p => (
                  <div key={p} className="bg-[#1E222D] px-4 py-2 rounded-xl text-sm border border-[#2A2E39]">{p}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#151822] rounded-3xl border border-[#1E222D] p-6 min-h-[300px]">
            <h3 className="text-[#8A8D98] text-xs mb-4">Orbital Projection Map</h3>
            <div className="h-48 border border-dashed border-[#1E222D] rounded-2xl flex items-center justify-center text-[#5A5D68] text-sm">
              AWAITING MAP COMPONENT
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}