import type { PillarKind } from "./PillarArt";

/**
 * Domain product-UI mockups used as the pillar card visuals.
 *
 * These are real rendered interface (tables, status pills, meters, charts)
 * rather than illustration, so each card reads as a screenshot of the
 * product for that vertical. Everything is CSS/SVG in the brand palette:
 * sharp at any size and tiny to load. Decorative — the card supplies the
 * accessible name.
 */

const BLUE = "#2E86FF";

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#F7FAFF] text-[10px] leading-tight text-[#0B1B2B]">
      <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-white px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 truncate font-semibold text-[#41576B]">{title}</span>
      </div>
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}

function Row({
  label,
  meta,
  pill,
  tone = "ok",
}: {
  label: string;
  meta: string;
  pill: string;
  tone?: "ok" | "warn" | "info";
}) {
  const tones = {
    ok: "bg-[#E8F7F0] text-[#0E7C5A]",
    warn: "bg-[#FEF3E2] text-[#B45309]",
    info: "bg-[#E8F1FF] text-[#1E64C8]",
  };
  return (
    <div className="flex items-center gap-2 border-b border-black/[0.05] py-1.5 last:border-0">
      <span className="h-5 w-5 shrink-0 rounded bg-[#E8F1FF]" />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold">{label}</span>
        <span className="block truncate text-[#6B8296]">{meta}</span>
      </span>
      <span className={`shrink-0 rounded-full px-1.5 py-0.5 font-semibold ${tones[tone]}`}>
        {pill}
      </span>
    </div>
  );
}

function Stat({ v, l, accent = false }: { v: string; l: string; accent?: boolean }) {
  return (
    <div className="rounded-md border border-black/[0.06] bg-white px-2 py-1.5">
      <div className={`text-[13px] font-extrabold ${accent ? "text-[#2E86FF]" : ""}`}>{v}</div>
      <div className="truncate text-[#6B8296]">{l}</div>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 120 34" className="h-8 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="pm-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.25" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 26 L20 22 L40 24 L60 15 L80 18 L100 9 L120 5" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M0 26 L20 22 L40 24 L60 15 L80 18 L100 9 L120 5 L120 34 L0 34 Z" fill="url(#pm-f)" />
    </svg>
  );
}

function Ring({ pct, label }: { pct: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="relative h-11 w-11 shrink-0 rounded-full"
        style={{ background: `conic-gradient(${BLUE} ${pct * 3.6}deg, #E3EAF2 0deg)` }}
      >
        <div className="absolute inset-[4px] flex items-center justify-center rounded-full bg-white text-[10px] font-extrabold">
          {pct}%
        </div>
      </div>
      <span className="text-[#6B8296]">{label}</span>
    </div>
  );
}

const SCREENS: Record<PillarKind, () => JSX.Element> = {
  ai: () => (
    <Shell title="Enterprise Suite">
      <div className="grid grid-cols-3 gap-1.5">
        <Stat v="6" l="Modules live" />
        <Stat v="4,281" l="Records synced" accent />
        <Stat v="99.9%" l="Uptime" />
      </div>
      <div className="mt-2 rounded-md border border-black/[0.06] bg-white p-2">
        <div className="mb-1 flex justify-between font-semibold">
          <span>Adoption</span>
          <span className="text-[#0E7C5A]">+38%</span>
        </div>
        <Spark />
      </div>
      <div className="mt-2">
        <Row label="CRM" meta="Sales & service" pill="Live" />
        <Row label="ERP" meta="Finance & supply" pill="Live" />
      </div>
    </Shell>
  ),
  innovation: () => (
    <Shell title="Innovation Pipeline">
      <div className="grid grid-cols-3 gap-1.5">
        <Stat v="12" l="In discovery" />
        <Stat v="5" l="Prototyping" accent />
        <Stat v="3" l="Scaling" />
      </div>
      <div className="mt-2">
        <Row label="Document intake PoC" meta="Week 2 of 6" pill="Validating" tone="info" />
        <Row label="Forecast model" meta="Pilot · 2 sites" pill="On track" />
        <Row label="Workflow copilot" meta="Awaiting sign-off" pill="Review" tone="warn" />
      </div>
      <div className="mt-2 rounded-md border border-black/[0.06] bg-white p-2">
        <Ring pct={78} label="Pilots meeting success criteria" />
      </div>
    </Shell>
  ),
  cybersecurity: () => (
    <Shell title="Security Posture">
      <div className="flex items-center justify-between rounded-md border border-black/[0.06] bg-white p-2">
        <Ring pct={96} label="Compliance score" />
        <div className="text-right">
          <div className="text-[13px] font-extrabold">24,569</div>
          <div className="text-[#6B8296]">Threats blocked</div>
        </div>
      </div>
      <div className="mt-2">
        <Row label="Privileged access review" meta="Identity · 12 accounts" pill="Open" tone="warn" />
        <Row label="Endpoint protection" meta="1,204 devices" pill="Enabled" />
        <Row label="Data encryption" meta="At rest & in transit" pill="Enabled" />
        <Row label="Phishing simulation" meta="Q3 campaign" pill="Passed" />
      </div>
    </Shell>
  ),
  global: () => (
    <Shell title="Market Entry Tracker">
      <div className="grid grid-cols-3 gap-1.5">
        <Stat v="7" l="Markets" />
        <Stat v="24" l="Partners" accent />
        <Stat v="9" l="In diligence" />
      </div>
      <div className="mt-2">
        <Row label="India" meta="Entity + GTM live" pill="Operating" />
        <Row label="ASEAN" meta="Distributor signed" pill="Launch" tone="info" />
        <Row label="Middle East" meta="Regulatory review" pill="In progress" tone="warn" />
        <Row label="Europe" meta="Partner shortlist" pill="Scoping" tone="info" />
      </div>
    </Shell>
  ),
  managed: () => (
    <Shell title="Service Desk">
      <div className="grid grid-cols-3 gap-1.5">
        <Stat v="128" l="Open tickets" />
        <Stat v="1.6h" l="Avg response" accent />
        <Stat v="96%" l="Resolved" />
      </div>
      <div className="mt-2 rounded-md border border-black/[0.06] bg-white p-2">
        <div className="mb-1 flex justify-between font-semibold">
          <span>Resolution trend</span>
          <span className="text-[#0E7C5A]">+18%</span>
        </div>
        <Spark />
      </div>
      <div className="mt-2">
        <Row label="INC-2841 · Access request" meta="HR onboarding" pill="SLA ok" />
        <Row label="INC-2839 · VPN latency" meta="Network" pill="Breach risk" tone="warn" />
      </div>
    </Shell>
  ),
  tenders: () => (
    <Shell title="Tender Pipeline">
      <div className="grid grid-cols-3 gap-1.5">
        <Stat v="128" l="Active tenders" />
        <Stat v="46" l="Bids submitted" accent />
        <Stat v="28%" l="Win rate" />
      </div>
      <div className="mt-2">
        <Row label="Smart city infrastructure" meta="Public works · ₹48 Cr" pill="Open" tone="info" />
        <Row label="Hospital equipment supply" meta="Health dept · ₹23 Cr" pill="Evaluating" tone="warn" />
        <Row label="Digital learning platform" meta="Education · ₹15 Cr" pill="Submitted" />
        <Row label="Road development" meta="Transport · ₹67 Cr" pill="Won" />
      </div>
    </Shell>
  ),
};

export function PillarMockup({ kind }: { kind: PillarKind }) {
  const Screen = SCREENS[kind];
  return <Screen />;
}
