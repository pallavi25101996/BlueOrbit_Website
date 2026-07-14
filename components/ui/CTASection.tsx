import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { OrbitMark } from "./Logo";

export type Cta = { label: string; href: string };

/**
 * Full-width closing band used at the bottom of EVERY page — no dead ends.
 * Rendered as a bold dark rounded block on the light canvas for contrast.
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
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* Decorative texture + bloom */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots-light opacity-60" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-blue/20 blur-[100px]"
          />
          <div aria-hidden="true" className="absolute -right-10 -top-10 -z-10 opacity-[0.15]">
            <OrbitMark className="h-48 w-48 animate-spin-slower" />
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tighter text-on-dark sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          {body && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-dark-muted">
              {body}
            </p>
          )}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta && (
              <ButtonLink href={secondaryCta.href} variant="light">
                {secondaryCta.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
