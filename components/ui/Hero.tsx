import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { OrbitBackground } from "./OrbitBackground";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export type HeroCta = { label: string; href: string };

/**
 * Shared hero. Centered by default; when a `visual` is provided it becomes
 * a two-column, left-aligned layout with the visual on the right.
 */
export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  highlights,
  visual,
  compact = false,
}: {
  eyebrow?: string;
  headline: ReactNode;
  subhead: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  highlights?: string[];
  visual?: ReactNode;
  compact?: boolean;
}) {
  const hasVisual = Boolean(visual);
  const align = hasVisual ? "" : "mx-auto max-w-4xl text-center";

  const copy = (
    <div className={align}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h1
          className={`mt-6 font-extrabold leading-[1.04] tracking-tighter text-text-primary ${
            compact
              ? "text-4xl sm:text-5xl"
              : hasVisual
                ? "text-[2.5rem] sm:text-5xl lg:text-6xl"
                : "text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          }`}
        >
          {headline}
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p
          className={`mt-6 text-lg leading-relaxed text-text-body ${
            hasVisual ? "max-w-xl" : "mx-auto max-w-2xl sm:text-xl"
          }`}
        >
          {subhead}
        </p>
      </Reveal>
      {(primaryCta || secondaryCta) && (
        <Reveal delay={0.18}>
          <div
            className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${
              hasVisual ? "" : "justify-center"
            }`}
          >
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
          <ul
            className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 ${
              hasVisual ? "" : "justify-center"
            }`}
          >
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
  );

  return (
    <section
      className={`relative isolate overflow-hidden ${
        compact ? "pt-36 pb-16 sm:pt-40 sm:pb-20" : "pt-40 pb-20 sm:pt-44 sm:pb-24"
      }`}
    >
      <OrbitBackground />
      <div className="container-bo relative">
        {hasVisual ? (
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            {copy}
            <Reveal delay={0.15}>{visual}</Reveal>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}
