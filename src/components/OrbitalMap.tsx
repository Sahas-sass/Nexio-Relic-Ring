"use client";
import React from 'react';
import { getConfig } from '../utils/configLoader';

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