import { fetchTreasuryTIC } from "@/lib/data/treasury";
import { deriveTreasuryConfidenceSignal } from "@/lib/signals/treasuryConfidence";
import { bandTreasuryConfidence } from "@/lib/signals/treasuryBands";
import { fetchOilImports } from "@/lib/data/energy";
import { deriveOilDependencySignal } from "@/lib/signals/oilDependency";

interface SignalResponse {
  treasurySignal: {
    date: string
    band: string
    rationale: string
    value: {
      date: string
      totalHoldingsUSD: number
      topHolderConcentration: number
    }
  }
  oilSignal: {
    date: string
    band: string
    rationale: string
    value: number
  }
}

async function getSignalData(): Promise<SignalResponse> {
  try {
    const [treasurySnapshot, oilImports] = await Promise.all([
      fetchTreasuryTIC(),
      fetchOilImports(),
    ]);

    const treasurySignal = bandTreasuryConfidence(
      deriveTreasuryConfidenceSignal(treasurySnapshot)
    );

    const oilSignal = deriveOilDependencySignal(oilImports);

    return {
      treasurySignal,
      oilSignal,
    };
  } catch (error) {
    console.error("Failed to fetch signals:", error);
    throw new Error("Failed to load signals");
  }
}

export default async function SignalsPage() {
  let data: SignalResponse | null = null;
  let error: string | null = null;

  try {
    data = await getSignalData();
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  const getBandColor = (band: string) => {
    switch (band) {
      case "LOW":
        return "bg-green-900 text-green-200"
      case "MODERATE":
        return "bg-blue-900 text-blue-200"
      case "ELEVATED":
        return "bg-yellow-900 text-yellow-200"
      case "HIGH":
        return "bg-red-900 text-red-200"
      default:
        return "bg-gray-900 text-gray-200"
    }
  }

  return (
    <main className="w-full bg-black text-white dark">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Confidence Signals</h1>
        <p className="text-neutral-400 mb-12">
          Real-time monitoring of Treasury TIC holdings and oil import dependency indicators
        </p>

        {error && (
          <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded-lg p-6 mb-8">
            <p className="text-red-300">Error: {error}</p>
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Treasury TIC Signal */}
            <div className="border border-neutral-700 rounded-lg p-8 bg-neutral-950">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Treasury TIC Holdings</h2>
                  <p className="text-sm text-neutral-500">Updated: {data.treasurySignal.date}</p>
                </div>
                <span className={`px-4 py-2 rounded-lg font-semibold ${getBandColor(data.treasurySignal.band)}`}>
                  {data.treasurySignal.band}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Total Foreign Holdings</p>
                  <p className="text-3xl font-bold text-white">
                    ${data.treasurySignal.value.totalHoldingsUSD.toLocaleString()}B
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-400 mb-1">Top 10 Holder Concentration</p>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${data.treasurySignal.value.topHolderConcentration * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    {(data.treasurySignal.value.topHolderConcentration * 100).toFixed(1)}% of total
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-2">Rationale</p>
                <p className="text-neutral-200">{data.treasurySignal.rationale}</p>
              </div>
            </div>

            {/* Oil Dependency Signal */}
            <div className="border border-neutral-700 rounded-lg p-8 bg-neutral-950">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Oil Import Dependency</h2>
                  <p className="text-sm text-neutral-500">Updated: {data.oilSignal.date}</p>
                </div>
                <span className={`px-4 py-2 rounded-lg font-semibold ${getBandColor(data.oilSignal.band)}`}>
                  {data.oilSignal.band}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Total Oil Imports</p>
                  <p className="text-3xl font-bold text-white">
                    {(data.oilSignal.value / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 })}M bpd
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">barrels per day</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-400 mb-1">Dependency Level</p>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((data.oilSignal.value / 20000000) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    {Math.min((data.oilSignal.value / 20000000) * 100, 100).toFixed(0)}% of threshold
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-2">Rationale</p>
                <p className="text-neutral-200">{data.oilSignal.rationale}</p>
              </div>
            </div>
          </div>
        )}

        {/* Explanation Section */}
        <div className="mt-16 border border-neutral-700 rounded-lg p-8 bg-neutral-950">
          <h2 className="text-2xl font-bold text-white mb-6">Signal Interpretation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-green-900 text-green-200 text-sm font-semibold mb-2">
                LOW
              </span>
              <p className="text-sm text-neutral-400">Minimal or no structural pressure</p>
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-semibold mb-2">
                MODERATE
              </span>
              <p className="text-sm text-neutral-400">Within historical norms</p>
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-900 text-yellow-200 text-sm font-semibold mb-2">
                ELEVATED
              </span>
              <p className="text-sm text-neutral-400">Notable deviation from baseline</p>
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-900 text-red-200 text-sm font-semibold mb-2">
                HIGH
              </span>
              <p className="text-sm text-neutral-400">Significant structural stress</p>
            </div>
          </div>
        </div>

        {/* Data Source Information */}
        <div className="mt-12 border border-neutral-700 rounded-lg p-6 bg-neutral-950">
          <h3 className="text-lg font-semibold text-white mb-4">Data Sources & Timing</h3>
          <div className="space-y-3 text-sm text-neutral-400">
            <div>
              <p className="font-semibold text-neutral-300">U.S. Treasury TIC Data</p>
              <p>Updated monthly with ~45 day reporting lag. Cache refreshed daily.</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-300">EIA Oil Import Data</p>
              <p>Updated monthly/quarterly with ~20-30 day reporting lag. Cache refreshed weekly.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
