import { NextResponse } from "next/server";
import { AI_TRENDS, type AiTrendsData } from "@/content/ai-trends";

/**
 * GET /api/ai-trends — SRS §4.2 single internal endpoint.
 *
 * Returns normalized JSON for the dashboard widget. The frontend is
 * agnostic to where the data comes from (SRS §6): today it's the curated
 * config in content/ai-trends.ts; a licensed vendor-API connector can be
 * substituted here later without a UI rewrite (Phase 2).
 *
 * §6.1 fallback: if a future live refresh throws, we serve the last
 * known-good snapshot rather than an error or a fabricated figure.
 *
 * §4.3: short-TTL caching so the page stays fast while data can still
 * update on a defined interval (ISR-style revalidate).
 */
export const revalidate = 3600; // seconds

// Stand-in for a scheduled ingestion/aggregation step. Swap the body for a
// real source-connector call behind the same return contract.
async function loadFromConnectors(): Promise<AiTrendsData> {
  return AI_TRENDS;
}

export async function GET() {
  let data: AiTrendsData;
  try {
    data = await loadFromConnectors();
  } catch {
    // §6.1 — never show a broken/empty state; serve last known-good.
    data = AI_TRENDS;
  }

  return NextResponse.json(
    { ok: true, data },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
