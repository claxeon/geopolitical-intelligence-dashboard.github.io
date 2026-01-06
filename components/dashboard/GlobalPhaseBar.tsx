import { CBPhase } from "@/types/system";

interface GlobalPhaseBarProps {
  phase: CBPhase;
}

export function GlobalPhaseBar({ phase }: GlobalPhaseBarProps) {
  const phases: CBPhase[] = ["CB-A", "CB-B", "CB-C", "CB-D", "CB-E"];

  return (
    <div className="border border-neutral-800 rounded px-4 py-3 bg-neutral-900">
      <div className="text-xs font-semibold text-neutral-400 mb-2">PHASE</div>
      <div className="flex gap-2">
        {phases.map((p) => (
          <div
            key={p}
            className={`flex-1 text-center py-2 text-sm font-mono border rounded ${
              p === phase
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-neutral-800 text-neutral-500 border-neutral-700"
            }`}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
