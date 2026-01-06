import { systemState } from "@/lib/systemState";
import { GlobalPhaseBar } from "./GlobalPhaseBar";
import { SystemLoop } from "./SystemLoop";
import { PressurePanel } from "./PressurePanel";
import { NodePanel } from "./NodePanel";
import { AnnotationsPanel } from "./AnnotationsPanel";

export function SystemDashboard() {
  return (
    <div className="w-full space-y-6">
      <div className="border-b border-neutral-800 pb-6">
        <h1 className="text-2xl font-bold text-white mb-1">
          Geopolitical System State
        </h1>
        <p className="text-sm text-neutral-400">Read-only system snapshot</p>
      </div>

      <GlobalPhaseBar phase={systemState.phase} />

      <SystemLoop phase={systemState.phase} />

      <PressurePanel
        confidence={systemState.confidence}
        enforcement={systemState.enforcement}
        alternatives={systemState.alternatives}
      />

      <NodePanel nodes={systemState.nodes} />

      <AnnotationsPanel />
    </div>
  );
}
