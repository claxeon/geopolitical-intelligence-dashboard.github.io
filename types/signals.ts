export type SignalBand = "LOW" | "MODERATE" | "ELEVATED" | "HIGH";

export interface BandedSignal<T = unknown> {
  date: string;
  value: T;
  band: SignalBand;
  rationale: string;
}
