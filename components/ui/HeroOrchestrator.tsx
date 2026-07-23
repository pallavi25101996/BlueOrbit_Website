import {
  LayoutDashboard,
  Bot,
  LineChart,
  ShieldCheck,
  Settings,
  Sparkles,
  AudioLines,
  Rocket,
  Users2,
  Landmark,
} from "lucide-react";
import { OrbitMark } from "./Logo";

/**
 * Rich "BlueOrbit AI Orchestrator" dashboard mockup used as the hero
 * visual — an original product UI (sidebar, command bar, running-agents
 * panel, business-value + quality cards). Light card that pops on the dark
 * hero. Decorative; no third-party branding.
 */
const NAV = [LayoutDashboard, Bot, LineChart, ShieldCheck, Settings];

const AGENTS = [
  { icon: Rocket, name: "GTM Agent", sub: "Pipeline & Growth", state: "Active" },
  { icon: LineChart, name: "Sales Intelligence", sub: "Leads & Opportunities", state: "Active" },
  { icon: Users2, name: "Customer Success", sub: "Onboarding & Support", state: "Active" },
  { icon: Landmark, name: "Finance Analyst", sub: "Reports & Forecasting", state: "In Review" },
];

export function HeroOrchestrator() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-surface shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-black/[0.06] bg-surface-2/50 p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 px-1.5 py-1">
              <OrbitMark className="h-6 w-6" />
              <span className="font-display text-sm font-extrabold text-text-primary">
                blue<span className="text-electric-blue">orbit</span>
              </span>
            </div>
            {NAV.map((Icon, i) => (
              <div
                key={i}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium ${
                  i === 0
                    ? "bg-electric-blue/10 text-electric-blue"
                    : "text-text-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {["Dashboard", "Agents", "Insights", "Govern", "Settings"][i]}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            {/* Command bar */}
            <div className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-surface-2/60 px-3 py-2">
              <Sparkles className="h-4 w-4 text-electric-blue" />
              <span className="flex-1 truncate text-xs text-text-muted">
                Ask BlueOrbit AI or type a command…
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-blue text-white">
                <AudioLines className="h-3.5 w-3.5" />
              </span>
            </div>

            {/* Agents-running banner */}
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/[0.06] bg-surface-2/40 px-4 py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                <Bot className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-text-primary">AI Agents are running</p>
                <p className="text-[11px] text-text-muted">12 active · 3 in review</p>
              </div>
              <span className="ml-auto rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
                Live
              </span>
            </div>

            {/* Panels */}
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {/* Agents running list */}
              <div className="rounded-xl border border-black/[0.06] bg-surface p-3.5">
                <p className="mb-2.5 text-xs font-bold text-text-primary">AI Agents Running</p>
                <ul className="space-y-2.5">
                  {AGENTS.map((a) => (
                    <li key={a.name} className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                        <a.icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold text-text-primary">
                          {a.name}
                        </p>
                        <p className="truncate text-[10px] text-text-muted">{a.sub}</p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold ${
                          a.state === "Active" ? "text-teal" : "text-text-muted"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            a.state === "Active" ? "bg-teal" : "bg-text-muted"
                          }`}
                        />
                        {a.state}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value + quality */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-black/[0.06] bg-surface p-3.5">
                  <p className="text-[11px] text-text-muted">Business Value Generated</p>
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-text-primary">
                    $2.48M
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold text-teal">↑ 32% vs last quarter</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-surface p-3.5">
                  {/* quality ring */}
                  <div
                    className="relative h-14 w-14 shrink-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#12B5A6 0deg 331deg, rgba(10,10,11,0.08) 331deg 360deg)",
                    }}
                  >
                    <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-surface">
                      <span className="font-display text-sm font-extrabold text-text-primary">92%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">Quality Score</p>
                    <p className="text-[10px] text-text-muted">
                      Compliance · accuracy · reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating accent */}
      <div className="absolute -right-3 -top-4 hidden rounded-xl border border-black/[0.07] bg-surface px-3.5 py-2 shadow-card sm:block">
        <p className="text-[10px] text-text-muted">Automations run</p>
        <p className="font-display text-sm font-extrabold text-text-primary">1,248</p>
      </div>
    </div>
  );
}
