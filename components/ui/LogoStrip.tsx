/* eslint-disable @next/next/no-img-element */
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import type { TrustLogo } from "@/content/site";

/**
 * Horizontal trust band — a continuous marquee of client logos on a light
 * section. Real marks sit on a white chip so any colour logo stays crisp;
 * organizations without a clean logo fall back to a wordmark chip. SVGs use
 * a plain <img> (no next/image SVG config needed).
 *
 * NOTE(client): logos are third-party trademarks used as trust indicators —
 * confirm final usage rights before public launch.
 */
export function LogoStrip({
  label = "Trusted by organizations including",
  logos,
}: {
  label?: string;
  logos: readonly TrustLogo[];
}) {
  return (
    <section className="border-y border-black/[0.06] bg-surface-2 py-12">
      <Reveal className="container-bo text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
          {label}
        </p>
      </Reveal>
      <div className="mt-8">
        <Marquee>
          {logos.map((item) =>
            item.logo ? (
              <span
                key={item.name}
                className="flex h-16 shrink-0 items-center rounded-xl border border-black/[0.06] bg-white px-6 shadow-card"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-7 w-auto object-contain sm:h-9"
                  loading="lazy"
                />
              </span>
            ) : (
              <span
                key={item.name}
                className="flex h-16 shrink-0 items-center rounded-xl border border-black/[0.06] bg-white px-6 font-display text-xl font-bold tracking-tight text-text-primary shadow-card sm:text-2xl"
              >
                {item.name}
              </span>
            )
          )}
        </Marquee>
      </div>
    </section>
  );
}
