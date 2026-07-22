import { Activity, Bot, Cpu, Shield, Sparkles } from "lucide-react";
import { OrbitMark } from "./Logo";

/**
 * Original product-console mockup used as the hero visual. Built from
 * layered UI cards + an inline SVG area chart — an original "technology"
 * vector illustration (no third-party imagery). Purely decorative.
 */
export function HeroConsole() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      {/* Main console card */}
      <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-surface shadow-card-hover">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.07] bg-surface-2/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-text-primary ring-1 ring-white/[0.08]">
            <OrbitMark className="h-3.5 w-3.5" />
            BlueOrbit
          </span>
        </div>

        <div className="grid grid-cols-[76px_1fr]">
          {/* Sidebar */}
          <nav className="flex flex-col items-center gap-4 border-r border-white/[0.07] bg-surface-2/40 py-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-blue text-white">
              <Cpu className="h-4 w-4" />
            </span>
            {[Bot, Activity, Shield, Sparkles].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-text-muted"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </nav>

          {/* Main panel */}
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-text-muted">Overview</p>
                <p className="font-display text-lg font-bold text-text-primary">
                  AI Operations
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Live
              </span>
            </div>

            {/* Chart card */}
            <div className="mt-4 rounded-2xl border border-white/[0.07] bg-surface p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-text-muted">Throughput</span>
                <span className="font-display text-sm font-bold text-text-primary">
                  +38%
                </span>
              </div>
              <svg viewBox="0 0 280 90" className="mt-2 h-24 w-full" role="img" aria-label="">
                <defs>
                  <linearGradient id="hc-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E86FF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#2E86FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 70 L40 60 L80 64 L120 44 L160 50 L200 28 L240 34 L280 14"
                  fill="none"
                  stroke="#2E86FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 70 L40 60 L80 64 L120 44 L160 50 L200 28 L240 34 L280 14 L280 90 L0 90 Z"
                  fill="url(#hc-fill)"
                />
              </svg>
            </div>

            {/* Stat tiles */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.07] bg-surface p-3">
                <p className="text-[11px] text-text-muted">Agents live</p>
                <p className="font-display text-xl font-extrabold text-text-primary">
                  12
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-surface p-3">
                <p className="text-[11px] text-text-muted">Resolved</p>
                <p className="font-display text-xl font-extrabold text-electric-blue">
                  4,281
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card: agent deployed */}
      <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-white/[0.08] bg-surface px-4 py-3 shadow-card sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 text-teal">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-text-primary">Agent deployed</p>
            <p className="text-[11px] text-text-muted">Support · 2s ago</p>
          </div>
        </div>
      </div>

      {/* Floating card: uptime */}
      <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/[0.08] bg-surface px-4 py-3 shadow-card sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
            <Activity className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-sm font-extrabold text-text-primary">
              99.9%
            </p>
            <p className="text-[11px] text-text-muted">Uptime, key flows</p>
          </div>
        </div>
      </div>
    </div>
  );
}
