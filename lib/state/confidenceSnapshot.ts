import { BandedSignal } from "@/types/signals";
import { TreasuryConfidenceSignal } from "@/lib/signals/treasuryConfidence";

export interface ConfidenceSnapshot {
  treasury: BandedSignal<TreasuryConfidenceSignal>;
  oilDependency: BandedSignal<number>;
}
