import { PressureBar } from "./PressureBar";

interface PressurePanelProps {
  confidence: number;
  enforcement: number;
  alternatives: number;
}

export function PressurePanel({
  confidence,
  enforcement,
  alternatives,
}: PressurePanelProps) {
  return (
    <div className="border border-neutral-800 rounded px-4 py-3 bg-neutral-900">
      <div className="text-xs font-semibold text-neutral-400 mb-3">SYSTEM PRESSURES</div>
      <PressureBar label="Confidence" value={confidence} />
      <PressureBar label="Enforcement" value={enforcement} />
      <PressureBar label="Alternatives" value={alternatives} />
    </div>
  );
}
