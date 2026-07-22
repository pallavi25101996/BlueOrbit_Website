"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Globe2, TrendingUp } from "lucide-react";
import {
  AI_TRENDS,
  REGIONS,
  REGION_LABEL,
  type AiTrendsData,
  type Region,
} from "@/content/ai-trends";
import { CountUp } from "./CountUp";
import { Cite } from "./Cite";

/**
 * AI Trends Dashboard widget (SRS: Real-Time Global AI Trends & Usage
 * Dashboard). Hybrid model — initialized with the curated snapshot so it
 * never renders empty (§6.1 fallback), then refreshes from /api/ai-trends.
 * Region toggle, animated counters, per-metric source citations, and a CTA
 * into AI Solutions & Products (FR-09). No "ServiceNow"/"Zoho" anywhere.
 */
export function AiTrendsDashboard() {
  const [data, setData] = useState<AiTrendsData>(AI_TRENDS);
  const [region, setRegion] = useState<Region>("Global");
  const reduce = useReducedMotion();

  // §4.2 — the widget consumes a single internal endpoint. Curated snapshot
  // is the guaranteed fallback if the fetch fails (§6.1 / NFR-03).
  useEffect(() => {
    let live = true;
    fetch("/api/ai-trends")
      .then((r) => r.json())
      .then((j) => {
        if (live && j?.ok && j.data) setData(j.data);
      })
      .catch(() => {
        /* keep last known-good snapshot */
      });
    return () => {
      live = false;
    };
  }, []);

  // Deterministic format (server === client) to avoid a hydration mismatch;
  // toLocaleDateString varies by environment locale.
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const d = new Date(data.lastRefreshed);
  const lastUpdated = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  const isApac = region === "APAC";
  const regionNote = region !== "Global" ? data.regionNote[region] : undefined;

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-5 py-10 text-on-dark sm:px-10 sm:py-14">
      {/* ambient */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots-light opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-electric-blue/20 blur-[120px]"
      />

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">
            <Globe2 className="h-3.5 w-3.5" /> Live Insights · AI Trends
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tighter text-on-dark sm:text-4xl">
            The state of enterprise AI, at a glance
          </h2>
          <p className="mt-3 text-on-dark-muted">
            Global adoption, function-level productivity, and enterprise ROI —
            curated from published research and refreshed on a schedule. Every
            figure is dated and sourced.
          </p>
        </div>
        <div
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-on-dark-muted"
          aria-live="polite"
        >
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Last updated {lastUpdated}
        </div>
      </div>

      {/* Region toggle (FR-02) */}
      <div
        role="group"
        aria-label="Filter by region"
        className="mt-8 inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
      >
        {REGIONS.map((r) => {
          const active = r === region;
          return (
            <button
              key={r}
              type="button"
              aria-pressed={active}
              onClick={() => setRegion(r)}
              // Fill set inline (#2E86FF = electric-blue) so the active state
              // always wins over the button-element Preflight reset. Always
              // specify backgroundColor (not undefined) so React updates it on
              // every toggle rather than leaving a stale value.
              style={{
                backgroundColor: active ? "#2E86FF" : "transparent",
                color: active ? "#FFFFFF" : undefined,
              }}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active ? "" : "text-on-dark-muted hover:text-on-dark"
              }`}
            >
              {r === "Global" ? "Global" : r}
              <span className="sr-only"> — {REGION_LABEL[r]}</span>
            </button>
          );
        })}
      </div>
      {regionNote && (
        <p className="mt-3 text-xs text-on-dark-muted">{regionNote}</p>
      )}

      {/* Usage snapshot (FR-01) */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <KpiTile
          label="Employees using AI weekly"
          suffix="%"
          value={data.usage.weekly.value}
          cite={data.usage.weekly}
        />
        <KpiTile
          label="Employees using AI daily"
          suffix="%"
          value={data.usage.daily.value}
          cite={data.usage.daily}
        />
        <KpiTile
          label="India — daily AI usage"
          suffix="%"
          value={data.usage.indiaDaily.value}
          cite={data.usage.indiaDaily}
          highlight={isApac}
        />
      </div>

      {/* Enterprise investment & ROI (FR-04) */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <TextTile
          label="Companies investing in AI"
          value={data.enterprise.investing.value}
          cite={data.enterprise.investing}
        />
        <KpiTile
          label="Report full AI maturity"
          suffix="%"
          value={data.enterprise.maturity.value}
          cite={data.enterprise.maturity}
        />
        <TextTile
          label="Blended enterprise ROI"
          value={data.enterprise.roi.value}
          cite={data.enterprise.roi}
        />
      </div>

      {/* Productivity grid (FR-03) */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-on-dark">
          Productivity impact by business function
        </h3>
        <p className="mt-1 text-sm text-on-dark-muted">
          Estimated efficiency gains where AI is deployed, shown as a range.
        </p>
        <ul className="mt-6 space-y-4">
          {data.productivity.map((row, i) => (
            <li key={row.fn} className="grid grid-cols-1 gap-2 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6">
              <div className="flex items-baseline justify-between gap-3 sm:block">
                <span className="text-sm font-semibold text-on-dark">{row.fn}</span>
                <span className="font-display text-sm font-bold tabular-nums text-electric-blue-bright sm:hidden">
                  {row.low}–{row.high}%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]"
                  role="img"
                  aria-label={`${row.fn}: ${row.low} to ${row.high} percent`}
                >
                  <motion.div
                    className="absolute inset-y-0 rounded-full bg-gradient-to-r from-electric-blue to-teal"
                    style={{ left: `${row.low}%` }}
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: `${row.high - row.low}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                  />
                </div>
                <span className="hidden w-16 shrink-0 text-right font-display text-sm font-bold tabular-nums text-electric-blue-bright sm:inline">
                  {row.low}–{row.high}%
                </span>
              </div>
            </li>
          ))}
        </ul>
        <Cite
          className="mt-5"
          source={data.productivity[0]?.source ?? "Aggregated industry research"}
          asOf={data.productivity[0]?.asOf ?? "2025"}
          note="Ranges aggregated across multiple published studies; directional, not company-specific."
        />
      </div>

      {/* Economic impact strip (FR-05) */}
      <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/15 text-electric-blue-bright">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-3xl font-extrabold text-on-dark">
              +<CountUp value={data.economic.productivityUplift.value} />%
            </p>
            <p className="mt-1 text-sm text-on-dark-muted">
              Projected global labour-productivity uplift as adoption matures
            </p>
            <Cite
              className="mt-2"
              source={data.economic.productivityUplift.source}
              asOf={data.economic.productivityUplift.asOf}
              note={data.economic.productivityUplift.note}
            />
          </div>
        </div>
        <div className="flex items-start gap-4 sm:border-l sm:border-white/10 sm:pl-8">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
            <Globe2 className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-3xl font-extrabold text-on-dark">
              {data.economic.contribution.value}
            </p>
            <p className="mt-1 text-sm text-on-dark-muted">
              Cumulative global economic contribution over the coming decade
            </p>
            <Cite
              className="mt-2"
              source={data.economic.contribution.source}
              asOf={data.economic.contribution.asOf}
              note={data.economic.contribution.note}
            />
          </div>
        </div>
      </div>

      {/* CTA (FR-09) */}
      <div className="mt-8 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm text-on-dark-muted">
          These are the shifts we help enterprises capture — with AI built into
          the products your teams already run.
        </p>
        <Link
          href="/solutions/ai"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Explore AI Solutions & Products
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

type CiteProps = { source: string; asOf: string; note?: string };

function KpiTile({
  label,
  value,
  suffix,
  cite,
  highlight = false,
}: {
  label: string;
  value: number;
  suffix?: string;
  cite: CiteProps;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 transition-colors ${
        highlight
          ? "border-electric-blue/50 bg-electric-blue/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <p className="text-sm text-on-dark-muted">{label}</p>
      <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-on-dark sm:text-5xl">
        <CountUp value={value} />
        {suffix}
      </p>
      <Cite className="mt-3" source={cite.source} asOf={cite.asOf} note={cite.note} />
    </div>
  );
}

function TextTile({
  label,
  value,
  cite,
}: {
  label: string;
  value: string;
  cite: CiteProps;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm text-on-dark-muted">{label}</p>
      <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-on-dark sm:text-4xl">
        {value}
      </p>
      <Cite className="mt-3" source={cite.source} asOf={cite.asOf} note={cite.note} />
    </div>
  );
}
