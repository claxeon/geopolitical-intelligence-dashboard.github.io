import { BandedSignal } from "@/types/signals";

export function explainSignal(signal: BandedSignal<any>): string {
  return `${signal.band}: ${signal.rationale}`;
}
