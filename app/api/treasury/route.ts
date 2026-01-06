import { fetchTreasuryTIC } from "@/lib/data/treasury";
import { deriveTreasuryConfidenceSignal } from "@/lib/signals/treasuryConfidence";

export async function GET() {
  const snapshot = await fetchTreasuryTIC();
  const signal = deriveTreasuryConfidenceSignal(snapshot);

  return Response.json({ snapshot, signal });
}
