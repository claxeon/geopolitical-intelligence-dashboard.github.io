interface PressureBarProps {
  label: string;
  value: number;
}

export function PressureBar({ label, value }: PressureBarProps) {
  const percentage = Math.round(value * 100);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold text-neutral-400">{label}</span>
        <span className="text-xs font-mono text-neutral-500">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-800 rounded h-2 overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
