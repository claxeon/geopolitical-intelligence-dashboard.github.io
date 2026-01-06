import { OilImportSnapshot } from "@/types/energy";

// EIA International Energy Data API
const EIA_API_BASE = "https://api.eia.gov/v2/international/data";
const EIA_API_KEY = process.env.NEXT_PUBLIC_EIA_API_KEY || "DEMO_KEY";

// Mock data for development/testing
// Note: EIA data typically lags by ~20-30 days, so December 2025 is most recent available as of Jan 2026
const MOCK_OIL_DATA: OilImportSnapshot[] = [
  { country: "Mexico", date: "2025-12", importsBarrelsPerDay: 660000 },
  { country: "Saudi Arabia", date: "2025-12", importsBarrelsPerDay: 430000 },
  { country: "Russia", date: "2025-12", importsBarrelsPerDay: 175000 },
  { country: "Colombia", date: "2025-12", importsBarrelsPerDay: 330000 },
  { country: "Venezuela", date: "2025-12", importsBarrelsPerDay: 135000 },
  { country: "Ecuador", date: "2025-12", importsBarrelsPerDay: 220000 },
  { country: "Iraq", date: "2025-12", importsBarrelsPerDay: 200000 },
  { country: "Brazil", date: "2025-12", importsBarrelsPerDay: 290000 },
  { country: "Nigeria", date: "2025-12", importsBarrelsPerDay: 250000 },
  { country: "Kazakhstan", date: "2025-12", importsBarrelsPerDay: 130000 },
];

export async function fetchOilImports(): Promise<OilImportSnapshot[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const queryParams = new URLSearchParams({
      api_key: EIA_API_KEY,
      frequency: "monthly",
      "data[0]": "value",
    });

    const url = `${EIA_API_BASE}?${queryParams.toString()}`;
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 604800 }, // weekly cache
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(
        `EIA API [${res.status}]: Using mock data. API key check required at: ${url}`
      );
      return MOCK_OIL_DATA;
    }

    const json = await res.json();

    if (!json.response?.data || !Array.isArray(json.response.data)) {
      console.warn("EIA data structure invalid, using mock");
      return MOCK_OIL_DATA;
    }

    const data = json.response.data
      .map((row: any) => ({
        country: row.country || row.name || "unknown",
        date: row.period || "unknown",
        importsBarrelsPerDay: Number(row.value) || 0,
      }))
      .filter((row: OilImportSnapshot) => row.importsBarrelsPerDay > 0);

    if (data.length > 0) {
      console.log("✓ EIA oil data fetched successfully");
      return data;
    }

    console.warn("EIA returned no valid records, using mock");
    return MOCK_OIL_DATA;
  } catch (error) {
    console.error(
      "EIA fetch error:",
      error instanceof Error ? error.message : error
    );
    return MOCK_OIL_DATA;
  }
}
