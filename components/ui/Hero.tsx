import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { OrbitBackground } from "./OrbitBackground";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export type HeroCta = { label: string; href: string };

/**
 * Shared hero: badge eyebrow, big bold headline, subhead, primary +
 * optional secondary pill CTA, over subtle orbit background art.
 * Light theme, centered for a bold agency feel.
 */
export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  highlights,
  compact = false,
}: {
  eyebrow?: string;
  headline: ReactNode;
  subhead: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  highlights?: string[];
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
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1
              className={`mt-6 font-extrabold leading-[1.02] tracking-tighter text-text-primary ${
                compact
                  ? "text-4xl sm:text-5xl"
                  : "text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
              }`}
            >
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-body sm:text-xl">
              {subhead}
            </p>
          </Reveal>
          {(primaryCta || secondaryCta) && (
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
                )}
                {secondaryCta && (
                  <ButtonLink href={secondaryCta.href} variant="light">
                    {secondaryCta.label}
                  </ButtonLink>
                )}
              </div>
            </Reveal>
          )}
          {highlights && highlights.length > 0 && (
            <Reveal delay={0.24}>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-body"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-electric-blue/15 text-electric-blue">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
