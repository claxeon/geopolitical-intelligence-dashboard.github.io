import { OilImportSnapshot } from "@/types/energy";
import { BandedSignal } from "@/types/signals";

export function deriveOilDependencySignal(
  imports: OilImportSnapshot[]
): BandedSignal<number> {
  const totalImports = imports.reduce(
    (sum, r) => sum + r.importsBarrelsPerDay,
    0
  );

  let band: BandedSignal["band"] = "MODERATE";
  let rationale = "Oil import dependency remains within normal range.";

  if (totalImports > 10000000) {
    band = "ELEVATED";
    rationale = "High aggregate oil import dependency.";
  }

  if (totalImports > 15000000) {
    band = "HIGH";
    rationale = "Extreme reliance on external oil supply.";
  }

  return {
    date: imports[0]?.date ?? "unknown",
    value: totalImports,
    band,
    rationale,
  };
}
