import { TreasuryConfidenceSignal } from "./treasuryConfidence";
import { BandedSignal } from "@/types/signals";

export function bandTreasuryConfidence(
  signal: TreasuryConfidenceSignal
): BandedSignal<TreasuryConfidenceSignal> {
  let band: BandedSignal["band"] = "MODERATE";
  let rationale = "Foreign Treasury participation remains within historical norms.";

  if (signal.totalHoldingsUSD < 7000) {
    band = "ELEVATED";
    rationale = "Sustained reduction in foreign Treasury holdings.";
  }

  if (signal.totalHoldingsUSD < 6000) {
    band = "HIGH";
    rationale = "Significant contraction in foreign Treasury demand.";
  }

  return {
    date: signal.date,
    value: signal,
    band,
    rationale,
  };
}
