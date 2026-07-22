import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { HeroDashboard } from "./HeroDashboard";
import { ParticleWave } from "./ParticleWave";
import { WordCycler } from "./WordCycler";
import { SITE } from "@/content/site";

// Request Demo opens an email to the company address.
const DEMO_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Demo Request — BlueOrbit"
)}&body=${encodeURIComponent(
  "Hi BlueOrbit team,\n\nI'd like to request a demo. Here's a bit about us:\n\nCompany:\nRole:\nWhat we're trying to solve:\n\nThanks,"
)}`;

/**
 * Homepage hero — dark theme with an itcart.ai-style animated particle
 * wave. Cycling-verb headline + subhead/CTAs on the left, and the concise
 * live AI-trends dashboard on the right.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* animated particle background + soft glows */}
      <ParticleWave className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-electric-blue/10 blur-[130px]" />
        <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-teal/10 blur-[130px]" />
      </div>

      <div className="container-bo relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Left: copy */}
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
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-body">
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

        {/* Right: concise live AI-trends dashboard */}
        <Reveal delay={0.15} className="relative">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
