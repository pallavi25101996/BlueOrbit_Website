import type { ReactNode } from "react";
import { OrbitBackground } from "./OrbitBackground";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export type HeroCta = { label: string; href: string };

/**
 * Shared hero: eyebrow, two-line bold headline, subhead, primary +
 * optional secondary CTA, over the orbit background art.
 *
 * `headline` accepts a ReactNode so pages can force the two-line break
 * with <br/> where the copy calls for it.
 */
export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  compact = false,
}: {
  eyebrow?: string;
  headline: ReactNode;
  subhead: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden ${
        compact ? "pt-36 pb-16 sm:pt-40 sm:pb-20" : "pt-40 pb-20 sm:pt-48 sm:pb-28"
      }`}
    >
      <OrbitBackground />
      <div className="container-bo relative">
        <div className={compact ? "max-w-3xl" : "max-w-4xl"}>
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1
              className={`mt-4 font-bold leading-[1.05] tracking-tight text-off-white ${
                compact
                  ? "text-4xl sm:text-5xl"
                  : "text-4xl sm:text-6xl lg:text-7xl"
              }`}
            >
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">
              {subhead}
            </p>
          </Reveal>
          {(primaryCta || secondaryCta) && (
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
                )}
                {secondaryCta && (
                  <ButtonLink href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonLink>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
