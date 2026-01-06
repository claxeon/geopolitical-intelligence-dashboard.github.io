export type CBPhase = "CB-A" | "CB-B" | "CB-C" | "CB-D" | "CB-E";

export interface NodeState {
  name: string;
  economicWeight: number;       // 0.000 – 1.000
  politicalInsulation: number;  // 0.000 – 1.000
  escalationCost: number;       // 0.000 – 1.000
}

export interface SystemState {
  confidence: number;    // 0.000 – 1.000
  enforcement: number;   // 0.000 – 1.000
  alternatives: number;  // 0.000 – 1.000

  phase: CBPhase;
  nodes: NodeState[];
}
