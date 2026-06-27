# Zeta-26: The Relic Ring Protocol

## Overview

The **Relic Ring Protocol** is a resilient, physics-aware routing
solution designed to restore communication across the **Zeta-26** star
system. Following the catastrophic **Hyper-Flare of 3704**, which
destroyed the quantum **Aether-Net**, the protocol reconnects fragmented
planetary nodes using legacy fiber and laser infrastructure.

------------------------------------------------------------------------

## Technical Implementation

This project simulates a communication network based on the provided
`universe-config.json`.

### 1. Core Mechanisms

#### Dynamic Configuration

-   The system dynamically loads `universe-config.json`.
-   No planetary values are hardcoded into the routing logic.

#### Latency Engine

Total latency (**T**) is calculated using four physical components:

1.  **Fiber Transit**
    -   Data propagates through the equatorial fiber ring at **0.67 ×
        c**.
2.  **Tower Processing**
    -   Every routing tower adds a fixed **7 ms** processing delay.
3.  **Atmospheric Refraction**
    -   Delay is computed using atmospheric thickness (**h**) and
        refractive index (**n**).
4.  **Void Transmission**
    -   Laser communication through vacuum over distance (**L**) at the
        speed of light (**c = 300,000 km/s**).

#### Codex Conversion

-   Automatic translation between planetary dialects.
-   Binary stream serialization enables interoperability across
    heterogeneous planetary systems.

------------------------------------------------------------------------

### 2. Routing & Resilience

#### Shortest Path Routing

-   Uses **Dijkstra's Algorithm** to compute the minimum-latency route.
-   Enforces the maximum transmission constraint:

```{=html}
<!-- -->
```
    Lmax = 50,000,000 km

#### Dynamic Rerouting

-   Detects node failures in real time.
-   Automatically reroutes traffic around failed nodes ("dead zones")
    without packet loss.

------------------------------------------------------------------------

## System Constants & Assumptions

-   Planets are modeled as **2D circles**.
-   Routing towers are equally spaced around each planet.
-   Void distance is calculated as:

```{=html}
<!-- -->
```
    Center-to-center distance
    − Planetary radii
    − Atmospheric shell thickness

-   Coordinates are scaled using:

```{=html}
<!-- -->
```
    coordinate_scale_unit_km

------------------------------------------------------------------------

## Demonstration Milestones

### M1 -- Universe Initialization

-   Load `universe-config.json`
-   Initialize planetary network and routing architecture

### M2 -- Multi-Hop Proof

-   Demonstrate packet traversal across multiple planets
-   Display Codex translation between planetary dialects

### M3 -- Latency Breakdown

-   Show detailed latency contribution from:
    -   Fiber transit
    -   Tower processing
    -   Atmospheric refraction
    -   Void transmission

### M4 -- Chaos Test

-   Manually disable ("kill") routing nodes
-   Demonstrate successful automatic rerouting

------------------------------------------------------------------------

## Setup & Running

### Clone the Repository

``` bash
git clone [your-repo-link]
cd [repository-name]
```

### Install Dependencies

``` bash
npm install
```

### Start the Development Server

``` bash
npm run dev
```

### Open the Application

Navigate to:

    http://localhost:3000

to access the **Control Terminal**.

------------------------------------------------------------------------

## Developed For

**Launch26**

**IEEE Computer Society Chapter**\
**University of Kelaniya**

**Team:** *\[Your Team Name\]*
