import { fetchTreasuryTIC } from "@/lib/data/treasury";
import { deriveTreasuryConfidenceSignal } from "@/lib/signals/treasuryConfidence";
import { bandTreasuryConfidence } from "@/lib/signals/treasuryBands";
import { fetchOilImports } from "@/lib/data/energy";
import { deriveOilDependencySignal } from "@/lib/signals/oilDependency";

export async function GET() {
  try {
    // Fetch both data sources in parallel with timeout protection
    const [treasurySnapshot, oilImports] = await Promise.all([
      fetchTreasuryTIC(),
      fetchOilImports(),
    ]);

    const treasurySignal = bandTreasuryConfidence(
      deriveTreasuryConfidenceSignal(treasurySnapshot)
    );

    const oilSignal = deriveOilDependencySignal(oilImports);

    return Response.json(
      {
        treasurySignal,
        oilSignal,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signal aggregation error:", error);
    return Response.json(
      {
        error: "Failed to aggregate signals",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
