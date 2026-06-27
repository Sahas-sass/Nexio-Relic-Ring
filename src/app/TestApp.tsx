import React, { useState } from 'react';
import MapCanvas, { Planet } from '../components/MapCanvas'; // Remove extension so TS/Node resolver can find the module

// 1. The Dummy Data from universe-config.json
const INITIAL_PLANETS: Planet[] = [
  { id: "Aegis", x: 0.0, y: 0.0, isAlive: true },
  { id: "Boreas", x: 150.0, y: 100.0, isAlive: true },
  { id: "Dawn", x: 350.0, y: 50.0, isAlive: true },
  { id: "Elysium", x: 300.0, y: 350.0, isAlive: true },
  { id: "Fenix", x: 500.0, y: -100.0, isAlive: true },
  { id: "Caelum", x: 650.0, y: 200.0, isAlive: true }
];

export default function TestApp() {
  // 2. State management for the test
  const [planets, setPlanets] = useState<Planet[]>(INITIAL_PLANETS);
  
  // A fake route to test the green laser lines
  const [route, setRoute] = useState<string[]>(["Aegis", "Boreas", "Dawn", "Caelum"]);

  // 3. The Chaos Test function
  const handlePlanetClick = (planetId: string) => {
    setPlanets(prevPlanets => 
      prevPlanets.map(planet => 
        // If this is the planet we clicked, toggle its isAlive status
        planet.id === planetId ? { ...planet, isAlive: !planet.isAlive } : planet
      )
    );
  };

  return (
    <div className="p-8 bg-slate-800 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-white mb-2">Module 4: Visualizer Test</h1>
        <p className="text-slate-400 mb-6">Click on any planet to trigger the chaos test (offline/online).</p>
        
        {/* Render your MapCanvas and pass the dummy data into it */}
        <MapCanvas 
          planets={planets} 
          activeRoute={route} 
          onPlanetClick={handlePlanetClick} 
        />
      </div>
    </div>
  );
}