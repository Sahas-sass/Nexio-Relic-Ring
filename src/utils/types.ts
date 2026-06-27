export interface UniverseMetadata {
  system_name: string;
  speed_of_light_kms: number;
  max_void_hop_distance_km: number;
  coordinate_scale_unit_km: number;
  tower_processing_delay_ms: number;
  fiber_speed_fraction: number;
}

export interface Node {
  id: string;
  codex: number;
  x: number;
  y: number;
  radius_km: number;
  active_towers: number;
  atmosphere_thickness_km: number;
  refraction_index: number;
}

export interface UniverseConfig {
  universe_metadata: UniverseMetadata;
  nodes: Node[];
}