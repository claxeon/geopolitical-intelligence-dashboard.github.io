import { TreasuryTICSnapshot } from "@/types/treasury";

export interface TreasuryConfidenceSignal {
  date: string;
  totalHoldingsUSD: number;
  topHolderConcentration: number; // 0–1
}

export function deriveTreasuryConfidenceSignal(
  snapshot: TreasuryTICSnapshot
): TreasuryConfidenceSignal {
  const top10Total = snapshot.topHolders.reduce(
    (sum, h) => sum + h.holdingsUSD,
    0
  );

  return {
    date: snapshot.date,
    totalHoldingsUSD: snapshot.totalForeignHoldingsUSD,
    topHolderConcentration:
      snapshot.totalForeignHoldingsUSD === 0
        ? 0
        : top10Total / snapshot.totalForeignHoldingsUSD,
  };
}
