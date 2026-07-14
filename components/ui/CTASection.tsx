import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { OrbitMark } from "./Logo";

export type Cta = { label: string; href: string };

/**
 * Full-width closing band used at the bottom of EVERY page — no dead ends.
 */
export function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
}: {
  headline: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="container-bo py-20 sm:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/[0.08] bg-navy-800/60 px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* Decorative orbit bloom */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-orbit-radial opacity-70"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 opacity-20"
          >
            <OrbitMark className="h-48 w-48 animate-spin-slower" />
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-off-white sm:text-4xl">
            {headline}
          </h2>
          {body && (
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate">
              {body}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta && (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
