"use client";
import React from 'react';

export interface Planet {
  id: string;
  x: number;
  y: number;
  isAlive: boolean;
}

interface MapCanvasProps {
  planets: Planet[];
  activeRoute: string[];
  onPlanetClick: (id: string) => void;
}

export default function MapCanvas({ planets, activeRoute, onPlanetClick }: MapCanvasProps) {
  
  // Wait until planets data is loaded to draw the map
  if (!planets || planets.length === 0) {
    return <div className="w-full h-[300px] flex items-center justify-center text-slate-500">Loading map data...</div>;
  }

  // --- NEW DYNAMIC SCALING LOGIC ---
  const minX = Math.min(...planets.map(p => p.x));
  const maxX = Math.max(...planets.map(p => p.x));
  const minY = Math.min(...planets.map(p => p.y));
  const maxY = Math.max(...planets.map(p => p.y));

  const padding = 80;
  
  const viewBoxX = minX - padding;
  const viewBoxY = minY - padding;
  const viewBoxWidth = (maxX - minX) + (padding * 2);
  const viewBoxHeight = (maxY - minY) + (padding * 2);
  // ---------------------------------

  // Function to draw the routing lines
  const drawRouteLines = () => {
    if (!activeRoute || activeRoute.length < 2) return null;

    const lines = [];
    for (let i = 0; i < activeRoute.length - 1; i++) {
      const p1 = planets.find(p => p.id === activeRoute[i]);
      const p2 = planets.find(p => p.id === activeRoute[i+1]);

      if (p1 && p2) {
        lines.push(
          <line
            key={`line-${i}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="#10B981" // Green laser line
            strokeWidth="3"
            strokeDasharray="5,5" // Makes it look like an active transmission
            className="animate-pulse" // Simple CSS pulse
          />
        );
      }
    }
    return lines;
  };

  return (
    <svg 
      viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`} 
      className="w-full h-full bg-[#0B0E14] rounded-2xl cursor-crosshair min-h-[400px]"
    >
      {/* 1. Draw connecting lines first so they are underneath the planets */}
      {drawRouteLines()}

      {/* 2. Draw the Planets */}
      {planets.map((planet) => (
        <g 
          key={planet.id} 
          onClick={() => onPlanetClick(planet.id)}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <circle 
            cx={planet.x} 
            cy={planet.y} 
            r="12" 
            fill={planet.isAlive ? "#0062FF" : "#EF4444"} // Blue if alive, Red if dead
            className="transition-colors duration-300"
          />
          <text 
            x={planet.x} 
            y={planet.y + 30} 
            fill="#8A8D98" 
            fontSize="16" 
            textAnchor="middle"
          >
            {planet.id}
          </text>
        </g>
      ))}
    </svg>
  );
}