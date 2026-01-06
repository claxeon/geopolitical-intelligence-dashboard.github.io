import { NodeState } from "@/types/system";
import { PressureBar } from "./PressureBar";

interface NodeCardProps extends NodeState {}

export function NodeCard({
  name,
  economicWeight,
  politicalInsulation,
  escalationCost,
}: NodeCardProps) {
  return (
    <div className="border border-neutral-800 rounded px-4 py-3 bg-neutral-900">
      <div className="font-semibold text-white mb-3">{name}</div>
      <PressureBar label="Economic Weight" value={economicWeight} />
      <PressureBar label="Political Insulation" value={politicalInsulation} />
      <PressureBar label="Escalation Cost" value={escalationCost} />
    </div>
  );
}
