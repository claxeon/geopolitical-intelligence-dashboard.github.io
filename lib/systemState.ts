import { SystemState } from "@/types/system";

export const systemState: SystemState = {
  confidence: 0.412,
  enforcement: 0.673,
  alternatives: 0.558,
  phase: "CB-B",
  nodes: [
    {
      name: "Venezuela",
      economicWeight: 0.82,
      politicalInsulation: 0.31,
      escalationCost: 0.29,
    },
    {
      name: "Hormuz",
      economicWeight: 0.91,
      politicalInsulation: 0.48,
      escalationCost: 0.77,
    },
    {
      name: "Taiwan",
      economicWeight: 0.88,
      politicalInsulation: 0.72,
      escalationCost: 0.94,
    },
  ],
};
