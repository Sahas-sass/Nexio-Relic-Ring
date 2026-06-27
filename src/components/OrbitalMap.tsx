"use client";
import React from 'react';
import { getConfig } from '../utils/configLoader';

export const OrbitalMap = () => {
  const { nodes } = getConfig();

  // 1. Find the extreme edges of our universe based on the JSON data
  const minX = Math.min(...nodes.map(n => n.x));
  const maxX = Math.max(...nodes.map(n => n.x));
  const minY = Math.min(...nodes.map(n => n.y));
  const maxY = Math.max(...nodes.map(n => n.y));

  // 2. Add padding so planets don't get cut off on the edges
  const padding = 80;
  
  // 3. Calculate the exact viewBox dimensions needed to fit everything
  const viewBoxX = minX - padding;
  const viewBoxY = minY - padding;
  const viewBoxWidth = (maxX - minX) + (padding * 2);
  const viewBoxHeight = (maxY - minY) + (padding * 2);

  return (
    <svg 
      viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`} 
      className="w-full h-full bg-[#0B0E14] rounded-2xl"
    >
      {/* Draw Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {/* I slightly increased the radius and adjusted the text so it looks better on a scaled map */}
          <circle cx={node.x} cy={node.y} r="12" fill="#0062FF" />
          <text 
            x={node.x} 
            y={node.y + 30} 
            fill="#8A8D98" 
            fontSize="16" 
            textAnchor="middle"
          >
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
};