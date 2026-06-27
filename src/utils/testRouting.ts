import { buildNetworkGraph, findShortestPath } from './routing';

const runVerification = () => {
  console.log("--- Starting Routing Engine Verification ---");

  // 1. Build the graph while "killing" Boreas
  const deadNode = 'Boreas';
  const graph = buildNetworkGraph([deadNode]);

  // 2. Check if the graph contains Boreas
  const hasBoreas = Object.keys(graph).includes(deadNode);
  console.log(`Graph contains ${deadNode}: ${hasBoreas}`);
  
  if (hasBoreas) {
    console.error("FAILED: Boreas was not successfully removed from the graph.");
    return;
  }

  // 3. Run pathfinding from Aegis to Dawn
  const path = findShortestPath('Aegis', 'Dawn', graph);
  
  console.log("Calculated Path (Boreas bypassed):", path.join(' → '));

  // 4. Verify path integrity
  if (path.includes(deadNode)) {
    console.error("FAILED: The path still includes the dead node!");
  } else {
    console.log("SUCCESS: Pathfinding is resilient and avoids dead nodes.");
  }
};

// Execute the test
runVerification();