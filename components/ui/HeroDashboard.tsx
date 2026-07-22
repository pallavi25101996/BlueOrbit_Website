import { TrendingUp } from "lucide-react";
import { CountUp } from "@/components/dashboard/CountUp";
import { AI_TRENDS } from "@/content/ai-trends";

/**
 * Concise AI Trends dashboard used as the hero visual — a compact teaser of
 * the full dashboard section lower on the page. Real, sourced figures with
 * animated counters and a couple of productivity bars. Light card so it
 * sits cleanly on the light hero.
 */
const TOP = [
  { fn: "Legal", low: 50, high: 80 },
  { fn: "Finance & Accounting", low: 40, high: 70 },
  { fn: "Customer Service", low: 30, high: 60 },
];

export function HeroDashboard() {
  const u = AI_TRENDS.usage;
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* main card */}
      <div className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-surface shadow-card-hover">
        {/* header */}
        <div className="flex items-center justify-between border-b border-black/[0.06] bg-surface-2/50 px-5 py-3.5">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            AI Adoption · Live
          </span>
          <span className="text-xs text-text-muted">as of 2025</span>
        </div>

        <div className="p-5">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-black/[0.06] bg-surface-2/40 p-4">
              <p className="text-xs text-text-muted">Employees using AI weekly</p>
              <p className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-text-primary">
                <CountUp value={u.weekly.value} />%
              </p>
            </div>
            <div className="rounded-2xl border border-electric-blue/30 bg-electric-blue/[0.06] p-4">
              <p className="text-xs text-text-muted">India — daily AI use</p>
              <p className="mt-1.5 font-display text-3xl font-extrabold tracking-tight text-electric-blue">
                <CountUp value={u.indiaDaily.value} />%
              </p>
            </div>
          </div>

          {/* mini productivity bars */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-text-primary">
                Productivity impact by function
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal">
                <TrendingUp className="h-3.5 w-3.5" /> gains
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {TOP.map((r) => (
                <li key={r.fn} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 truncate text-xs text-text-body">{r.fn}</span>
                  <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                    <span
                      className="absolute inset-y-0 rounded-full bg-gradient-to-r from-electric-blue to-teal"
                      style={{ left: `${r.low}%`, width: `${r.high - r.low}%` }}
                    />
                  </span>
                  <span className="w-14 shrink-0 text-right text-xs font-bold tabular-nums text-electric-blue">
                    {r.low}–{r.high}%
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* footer stat */}
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/[0.06] bg-surface-2/40 px-4 py-3">
            <span className="text-xs text-text-muted">Blended enterprise ROI</span>
            <span className="font-display text-lg font-extrabold text-text-primary">Up to 3:1</span>
          </div>
          <p className="mt-3 text-[11px] text-text-muted">
            Sources: Microsoft Work Trend Index · McKinsey · industry research
          </p>
        </div>
      </div>

      {/* floating accent */}
      <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-black/[0.07] bg-surface px-4 py-2.5 shadow-card sm:block">
        <p className="font-display text-sm font-extrabold text-text-primary">
          +<CountUp value={15} />%
        </p>
        <p className="text-[11px] text-text-muted">Productivity uplift</p>
      </div>
    </div>
  );
}
