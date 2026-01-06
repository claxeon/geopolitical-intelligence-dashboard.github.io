import { TreasuryTICSnapshot } from "@/types/treasury";

// Use the official Treasury International Capital data endpoint
const TIC_CSV_URL =
  "https://home.treasury.gov/sites/default/files/data/International%20Capital/debtholdings.csv";

// Mock data for development/testing when API unavailable
// Note: Treasury TIC data typically lags by ~45 days, so December 2025 is most recent available as of Jan 2026
const MOCK_TREASURY_DATA: TreasuryTICSnapshot = {
  date: "2025-12",
  totalForeignHoldingsUSD: 7920,
  topHolders: [
    { country: "China", date: "2025-12", holdingsUSD: 840 },
    { country: "Japan", date: "2025-12", holdingsUSD: 1120 },
    { country: "United Kingdom", date: "2025-12", holdingsUSD: 695 },
    { country: "Luxembourg", date: "2025-12", holdingsUSD: 415 },
    { country: "Canada", date: "2025-12", holdingsUSD: 390 },
    { country: "Switzerland", date: "2025-12", holdingsUSD: 370 },
    { country: "Germany", date: "2025-12", holdingsUSD: 320 },
    { country: "France", date: "2025-12", holdingsUSD: 300 },
    { country: "Netherlands", date: "2025-12", holdingsUSD: 395 },
    { country: "India", date: "2025-12", holdingsUSD: 275 },
  ],
};

export async function fetchTreasuryTIC(): Promise<TreasuryTICSnapshot> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    // Try primary endpoint first
    let res = await fetch(TIC_CSV_URL, {
      signal: controller.signal,
      next: { revalidate: 86400 }, // daily cache
      headers: {
        "Accept": "text/csv, text/plain",
        "User-Agent": "Mozilla/5.0",
      },
    });

    clearTimeout(timeoutId);

    // If primary fails, log and return mock
    if (!res.ok) {
      console.warn(
        `Treasury API [${res.status}]: Using mock data. Real data endpoint: ${TIC_CSV_URL}`
      );
      return MOCK_TREASURY_DATA;
    }

    const text = await res.text();

    if (!text || text.length < 100) {
      console.warn("Treasury data too small, using mock");
      return MOCK_TREASURY_DATA;
    }

    // NOTE: Parsing logic intentionally minimal and defensive
    // This file should only normalize, not interpret trends

    const lines = text.split("\n").filter((line) => line.trim());
    const records = lines
      .slice(1) // skip header
      .map((line) => line.split(",").map((col) => col.trim()))
      .filter((cols) => cols.length > 2 && cols[2] && !isNaN(Number(cols[2])));

    if (records.length === 0) {
      console.warn("No valid Treasury records parsed, using mock");
      return MOCK_TREASURY_DATA;
    }

    const topHolders = records.slice(0, 10).map((cols) => ({
      country: cols[0] || "unknown",
      date: cols[1] || "unknown",
      holdingsUSD: Number(cols[2]) || 0,
    }));

    const totalForeignHoldingsUSD = records.reduce(
      (sum, cols) => sum + (Number(cols[2]) || 0),
      0
    );

    console.log("✓ Treasury data fetched successfully");
    return {
      date: topHolders[0]?.date ?? new Date().toISOString().slice(0, 7),
      totalForeignHoldingsUSD,
      topHolders,
    };
  } catch (error) {
    console.error("Treasury fetch error:", error instanceof Error ? error.message : error);
    return MOCK_TREASURY_DATA;
  }
}
