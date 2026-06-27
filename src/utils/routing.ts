import { getConfig } from './configLoader';
import { calculateVoidDistance, calculateVoidTime } from './physics';
import { Node } from './types';

export interface Edge {
  to: string;
  latency: number;
}

export const buildNetworkGraph = (deadNodes: string[] = []) => {
  const config = getConfig();
  const graph: Record<string, Edge[]> = {};

  // Filter out dead nodes 
  const activeNodes = config.nodes.filter(n => !deadNodes.includes(n.id));

  activeNodes.forEach(node => { graph[node.id] = []; });

  activeNodes.forEach(n1 => {
    activeNodes.forEach(n2 => {
      if (n1.id === n2.id) return;

      const L = calculateVoidDistance(n1, n2, config.universe_metadata);

      // Enforce Lmax constraint [cite: 75]
      if (L <= config.universe_metadata.max_void_hop_distance_km) {
        const latency = calculateVoidTime(n1, n2, L, config.universe_metadata);
        graph[n1.id].push({ to: n2.id, latency });
      }
    });
  });
  return graph;
};


export const findShortestPath = (startId: string, endId: string, graph: Record<string, Edge[]>) => {
  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const queue = new Set<string>();

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
    queue.add(node);
  });

  distances[startId] = 0;

  while (queue.size > 0) {
    const current = Array.from(queue).reduce((min, node) => 
      distances[node] < distances[min] ? node : min
    );

    if (current === endId) break;
    queue.delete(current);

    graph[current].forEach(edge => {
      const alt = distances[current] + edge.latency;
      if (alt < distances[edge.to]) {
        distances[edge.to] = alt;
        previous[edge.to] = current;
      }
    });
    console.log("Exploring graph state:", graph);
  }

  // Backtrack to find the path
  const path = [];
  let curr = endId;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr] as string;
  }
  return path;
};