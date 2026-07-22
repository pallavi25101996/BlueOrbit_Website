/**
 * AI Trends Dashboard — curated data source (single source of truth).
 *
 * Per the SRS (Real-Time Global AI Trends & Usage Dashboard), this is the
 * "hybrid model": curated figures from published research, served through
 * /api/ai-trends and rendered with a live-feeling UI (animated counters +
 * honest "as of" dates). Every figure carries a source + as-of date.
 *
 * NFR-07: metric values/sources are data-driven here, NOT hard-coded in the
 * view, so marketing can update them without a frontend redeploy.
 *
 * SOURCES ARE STAKEHOLDER-SUPPLIED (Appendix A of the SRS) and must be
 * re-verified against the original Microsoft / McKinsey / ADP publications
 * before public launch. Figures with no regional breakdown are labelled
 * "Global" rather than guessing a split (per the SRS risk mitigation).
 */

export type Region = "Global" | "NA" | "EU" | "APAC" | "LATAM" | "MEA";

export const REGIONS: Region[] = ["Global", "NA", "EU", "APAC", "LATAM", "MEA"];

export const REGION_LABEL: Record<Region, string> = {
  Global: "Global",
  NA: "North America",
  EU: "Europe",
  APAC: "Asia-Pacific",
  LATAM: "Latin America",
  MEA: "Middle East & Africa",
};

/** A single figure with its attribution (SRS §5 data model, condensed). */
export type Cited = {
  source: string;
  asOf: string; // "as of" date the underlying figure was published/current
  note?: string; // optional methodology caveat
};

export type ProductivityRow = {
  fn: string;
  low: number;
  high: number;
} & Cited;

export type AiTrendsData = {
  lastRefreshed: string; // ISO date the pipeline last ingested
  usage: {
    weekly: { value: number } & Cited;
    daily: { value: number } & Cited;
    indiaDaily: { value: number } & Cited;
  };
  enterprise: {
    investing: { value: string } & Cited;
    maturity: { value: number } & Cited;
    roi: { value: string } & Cited;
  };
  productivity: ProductivityRow[];
  economic: {
    productivityUplift: { value: number } & Cited;
    contribution: { value: string } & Cited;
  };
  /** Honest per-region note where a true breakdown isn't available. */
  regionNote: Partial<Record<Region, string>>;
};

const MSFT = "Microsoft Work Trend Index";
const MCK = "McKinsey State of AI";
const SURVEY = "Aggregated industry research";

export const AI_TRENDS: AiTrendsData = {
  lastRefreshed: "2026-07-22",
  usage: {
    weekly: { value: 50, source: MSFT, asOf: "2025" },
    daily: { value: 20, source: MSFT, asOf: "2025" },
    indiaDaily: {
      value: 41,
      source: MSFT,
      asOf: "2025",
      note: "India daily AI usage — highlighted within APAC.",
    },
  },
  enterprise: {
    investing: {
      value: "Nearly all",
      source: MCK,
      asOf: "2025",
      note: "Nearly all large enterprises report investing in AI.",
    },
    maturity: {
      value: 1,
      source: MCK,
      asOf: "2025",
      note: "Share reporting full AI adoption maturity.",
    },
    roi: {
      value: "Up to 3:1",
      source: SURVEY,
      asOf: "2025",
      note: "Blended ROI in leading adopters; survey-based estimate.",
    },
  },
  productivity: [
    { fn: "Customer Service", low: 30, high: 60, source: SURVEY, asOf: "2025" },
    { fn: "Software Development", low: 25, high: 55, source: SURVEY, asOf: "2025" },
    { fn: "Finance & Accounting", low: 40, high: 70, source: SURVEY, asOf: "2025" },
    { fn: "Legal Services", low: 50, high: 80, source: SURVEY, asOf: "2025" },
    { fn: "Marketing", low: 40, high: 70, source: SURVEY, asOf: "2025" },
    { fn: "Human Resources", low: 50, high: 75, source: SURVEY, asOf: "2025" },
    { fn: "Healthcare Administration", low: 20, high: 40, source: SURVEY, asOf: "2025" },
  ],
  economic: {
    productivityUplift: {
      value: 15,
      source: MCK,
      asOf: "2025",
      note: "Projected global labour-productivity uplift as adoption matures.",
    },
    contribution: {
      value: "$ trillions",
      source: MCK,
      asOf: "2025",
      note: "Cumulative global economic contribution over the coming decade.",
    },
  },
  regionNote: {
    NA: "Showing global aggregates — a North America breakdown is pending source licensing.",
    EU: "Showing global aggregates — a Europe breakdown is pending source licensing.",
    APAC: "India daily usage is called out below; other APAC figures use global aggregates.",
    LATAM: "Showing global aggregates — a Latin America breakdown is pending source licensing.",
    MEA: "Showing global aggregates — a Middle East & Africa breakdown is pending source licensing.",
  },
};
