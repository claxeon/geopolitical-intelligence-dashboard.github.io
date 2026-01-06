import { NodeState } from "@/types/system";
import { NodeCard } from "./NodeCard";

interface NodePanelProps {
  nodes: NodeState[];
}

export function NodePanel({ nodes }: NodePanelProps) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-neutral-400 px-4 pt-3">NODES</div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node) => (
          <NodeCard key={node.name} {...node} />
        ))}
      </div>
    </div>
  );
}
