import React from 'react';

// 1. Define the props based on the data Module 3 will give you
export interface Planet {
  id: string;
  x: number;
  y: number;
  isAlive: boolean;
}

interface MapCanvasProps {
  planets: Planet[];
  activeRoute: string[]; // e.g., ["Aegis", "Boreas", "Caelum"]
  onPlanetClick: (planetId: string) => void;
}

export default function MapCanvas({ planets, activeRoute, onPlanetClick }: MapCanvasProps) {
  // 2. Scaling factors to ensure the grid fits on a standard screen
  const scale = 1.2;
  const offsetX = 50;
  const offsetY = 250; // Shifted down specifically because 'Fenix' has a Y of -100

  // Helper function to find a planet's screen coordinates by its ID
  const getPlanetCoords = (id: string) => {
    const p = planets.find(p => p.id === id);
    if (!p) return { x: 0, y: 0 };
    return { x: p.x * scale + offsetX, y: p.y * scale + offsetY };
  };

  return (
    <div className="w-full h-[600px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative shadow-2xl">
      <svg width="100%" height="100%" className="absolute inset-0">
        
        {/* 3. DRAW THE LASER ROUTES (Background) */}
        {activeRoute.map((planetId, index) => {
          // If we are on the last planet in the route, there is no "next" planet to draw a line to
          if (index === activeRoute.length - 1) return null; 
          
          const current = getPlanetCoords(planetId);
          const next = getPlanetCoords(activeRoute[index + 1]);

          return (
            <line
              key={`route-${planetId}-${activeRoute[index + 1]}`}
              x1={current.x}
              y1={current.y}
              x2={next.x}
              y2={next.y}
              stroke="#10b981" // Emerald green laser
              strokeWidth="4"
              strokeDasharray="8 4" // Creates a dashed line effect
              className="animate-pulse" // Simple CSS animation to make it glow/pulse
            />
          );
        })}

        {/* 4. DRAW THE PLANETS (Foreground) */}
        {planets.map((planet) => {
          const screenX = planet.x * scale + offsetX;
          const screenY = planet.y * scale + offsetY;
          
          return (
            <g key={planet.id} transform={`translate(${screenX}, ${screenY})`}>
              
              {/* The clickable planet body */}
              <circle
                r={24}
                fill={planet.isAlive ? "#3b82f6" : "#ef4444"} // Blue if alive, Red if dead
                stroke={planet.isAlive ? "#60a5fa" : "#fca5a5"}
                strokeWidth="3"
                className="cursor-pointer transition-all duration-200 hover:scale-110"
                onClick={() => onPlanetClick(planet.id)}
              />
              
              {/* The planet name label */}
              <text
                y={45}
                textAnchor="middle"
                fill="white"
                className="text-sm font-bold tracking-wider pointer-events-none select-none"
              >
                {planet.id}
              </text>
              
              {/* Optional: Add an offline warning label if the planet is killed */}
              {!planet.isAlive && (
                <text y={65} textAnchor="middle" fill="#ef4444" className="text-xs font-bold pointer-events-none select-none">
                  OFFLINE
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}