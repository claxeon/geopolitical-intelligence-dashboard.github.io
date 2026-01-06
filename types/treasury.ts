export interface TreasuryHolding {
  country: string;
  date: string; // ISO YYYY-MM
  holdingsUSD: number; // billions USD
}

export interface TreasuryTICSnapshot {
  date: string; // YYYY-MM
  totalForeignHoldingsUSD: number;
  topHolders: TreasuryHolding[];
}
