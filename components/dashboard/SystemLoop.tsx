import { CBPhase } from "@/types/system";

interface SystemLoopProps {
  phase: CBPhase;
}

export function SystemLoop({ phase }: SystemLoopProps) {
  const description: Record<CBPhase, string> = {
    "CB-A": "Structural imbalance identified",
    "CB-B": "System under pressure",
    "CB-C": "Escalation risk increasing",
    "CB-D": "Critical instability threshold",
    "CB-E": "System collapse or resolution",
  };

  return (
    <div className="border border-neutral-800 rounded px-4 py-3 bg-neutral-900">
      <div className="text-xs font-semibold text-neutral-400 mb-2">CYCLE STATE</div>
      <div className="text-sm text-neutral-300 font-mono">
        {description[phase]}
      </div>
    </div>
  );
}
