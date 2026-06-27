import { Node, UniverseMetadata } from './types';

// Formula 1: Void Distance (L) [cite: 3]
export const calculateVoidDistance = (n1: Node, n2: Node, meta: UniverseMetadata): number => {
  const dx = (n2.x - n1.x) * meta.coordinate_scale_unit_km;
  const dy = (n2.y - n1.y) * meta.coordinate_scale_unit_km;
  const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  
  return distance - (n1.radius_km + n1.atmosphere_thickness_km) - (n2.radius_km + n2.atmosphere_thickness_km);
};

// Formula 2: Void Travel Time (Tv) [cite: 10]
export const calculateVoidTime = (n1: Node, n2: Node, L: number, meta: UniverseMetadata): number => {
  const numerator = (n1.atmosphere_thickness_km * n1.refraction_index) + 
                    (n2.atmosphere_thickness_km * n2.refraction_index) + L;
  return numerator / meta.speed_of_light_kms;
};

// Formula 3: Internal Crust Transit Time (Tp) [cite: 17]
export const calculateCrustTime = (
  node: Node, 
  segments: number, 
  meta: UniverseMetadata
): number => {
  const C = meta.speed_of_light_kms;
  const f = meta.fiber_speed_fraction;
  const dt = meta.tower_processing_delay_ms / 1000; // Convert to seconds [cite: 28]

  // Rule: m = s + 1 generally, but m = 1 if entry == exit (s = 0) 
  const m = segments === 0 ? 1 : segments + 1;

  // Fiber transit distance along the arc [cite: 17, 21]
  const fiberDistance = (2 * Math.PI * node.radius_km) * (segments / node.active_towers);
  const fiberTime = fiberDistance / (f * C);

  return fiberTime + (m * dt);
};
