import { Bot, Boxes, LineChart } from "lucide-react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { HeroOrchestrator } from "./HeroOrchestrator";
import { HeroBackdrop } from "./HeroBackdrop";
import { WordCycler } from "./WordCycler";
import { SITE } from "@/content/site";

// Request Demo opens an email to the company address.
const DEMO_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Demo Request — BlueOrbit"
)}&body=${encodeURIComponent(
  "Hi BlueOrbit team,\n\nI'd like to request a demo. Here's a bit about us:\n\nCompany:\nRole:\nWhat we're trying to solve:\n\nThanks,"
)}`;

// Professional side-summary rows (replaces the earlier check-mark list).
const SUMMARY = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    body: "Agents that plan, execute, and report — with guardrails and audit trails.",
  },
  {
    icon: Boxes,
    title: "Intelligent Platforms",
    body: "Enterprise products with AI in the architecture, not bolted on.",
  },
  {
    icon: LineChart,
    title: "Measurable Outcomes",
    body: "Productivity, ROI, and quality you can actually track.",
  },
];

/**
 * Homepage hero — light background (kept, per client) with a subtle animated
 * backdrop. Cycling-verb headline + subhead/CTAs on top; a rich BlueOrbit
 * AI-orchestrator dashboard mockup with a summary panel beside it below.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-24">
      <HeroBackdrop />

      <div className="container-bo relative">
        {/* Headline + subhead/CTAs */}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric-blue" />
                The Technology Innovation Arm of MyAsia Consulting
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.05] tracking-tighter text-text-primary sm:text-5xl lg:text-[3.5rem]">
                Building Smarter Systems &amp; AI Agents that{" "}
                <WordCycler words={["Execute", "Manage", "Support", "Scale"]} />
              </h1>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.12}>
              <p className="max-w-xl text-lg leading-relaxed text-text-body">
                BlueOrbit Autonomous AI Agents and Intelligent Platforms drive
                productivity, accelerate innovation, and create measurable
                business outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={DEMO_MAILTO}>Request Demo</ButtonLink>
                <ButtonLink href="/solutions/ai" variant="light">
                  Explore Solutions
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dashboard mockup + side summary */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.7fr_1fr]">
          <Reveal delay={0.1}>
            <HeroOrchestrator />
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col rounded-2xl border border-black/[0.07] bg-surface/80 p-6 shadow-card backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                What BlueOrbit brings
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-5">
                {SUMMARY.map((s) => (
                  <li key={s.title} className="flex gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue ring-1 ring-inset ring-electric-blue/15">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{s.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-text-body">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-black/[0.07] pt-4">
                <span className="text-xs text-text-muted">Blended enterprise ROI</span>
                <span className="font-display text-lg font-extrabold text-text-primary">
                  Up to 3:1
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
