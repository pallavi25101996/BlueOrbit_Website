import { Check } from "lucide-react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { HeroDashboard } from "./HeroDashboard";
import { HeroBackdrop } from "./HeroBackdrop";
import { WordCycler } from "./WordCycler";

/**
 * Homepage hero — two-column layout: bold headline with a cycling verb on
 * the left, and a concise live AI-trends dashboard on the right.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <HeroBackdrop />

      <div className="container-bo relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
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
              BlueOrbit builds enterprise AI products, runs technology delivery,
              and opens new markets — for companies who&apos;ve stopped waiting
              for permission to grow.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Talk to Us</ButtonLink>
              <ButtonLink href="/solutions/ai" variant="light">
                Explore Solutions
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["AI-native architecture", "Vendor-neutral", "Operator-led delivery"].map(
                (item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-body"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-electric-blue/15 text-electric-blue">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
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
