Relic Ring Protocol: Core & Dashboard Documentation

This repository contains the core logic and interface for the Zeta-26 multi-hop optimization
system.

Module 1: Physics & Routing Engine (/src/utils)

The brain of the system, responsible for calculating optimal transmission paths while respecting
physical constraints.

O physics. ts : Implements the core relay equations, including Void Distance (L) and
Crust Transit Time (Tp).

o routing. ts : Provides the graph-builder and pathfinding solver.

o Graph Builder: Dynamically converts nodes into a weighted latency graph. It
supports "Chaos Testing" by filtering out offline nodes.

o Dijkstra Solver: Finds the absolute lowest-latency route between two nodes.

o Verification: Run npx tsx src/utils/testRouting. ts to confirm the engine correctly
bypasses failed nodes.

Module 5: UI & Dashboard (/src/app)
The visual interface for monitoring network health and initiating transmissions.

O page. tsx : The main control terminal.

o State Management: Uses useState to track node health ( deadNodes ).

o Responsiveness: Built with Tailwind CSS, utilizing a mobile-first grid system.

o Dashboard Features:

o Pathfinder: Triggers the routing engine and displays the optimal route path.

o Chaos Test Panel: Allows live toggling of planetary node status. Nodes can be
killed/restored, forcing the routing engine to recalculate paths in real-time.

Developer Quick-Start

To extend these modules:

1.To add new physics constants: Update universe-config. json in the /data folder.

2.To add new UI functionality: If adding new UI components, please maintain the standard
bg-[#151822] and border-[#1E222D] theme to ensure consistency.

3.To Test: Always run the testRouting. ts script after modifying any physics or routing
code to ensure the pathfinding remains stable.

Understanding the Routing Logic
The system visualizes your network as a set of interconnected nodes where the pathfinding
algorithm continuously seeks the lowest-latency bridge:

Final Milestone Checklist

o [x] Physics Engine Verified: Formulas match the protocol specs.
o [x] Routing Engine Verified: Dijkstra solver correctly bypasses failed nodes.
o [x] UI Responsive: Dashboard layout adapts to mobile and desktop screens.
O [x] Chaos Testing Enabled: Users can toggle node status and reroute in real-time.


This README is clear, professional, and provides your team with exactly what they need to
succeed. You have effectively completed your modules!