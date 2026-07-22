/* eslint-disable @next/next/no-img-element */
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import type { TrustLogo } from "@/content/site";

/**
 * Horizontal trust band — a continuous marquee of client logos.
 *
 * Real marks are placed on a light chip so any colour logo stays legible on
 * the dark band; organizations without a clean logo fall back to a wordmark.
 * SVGs are rendered with a plain <img> (no next/image SVG config needed).
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
    <section className="border-y border-white/[0.07] bg-surface-2 py-12">
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
                className="flex h-14 shrink-0 items-center rounded-xl bg-white px-5 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-7 w-auto object-contain sm:h-8"
                  loading="lazy"
                />
              </span>
            ) : (
              <span
                key={item.name}
                className="flex h-14 shrink-0 items-center rounded-xl border border-white/10 bg-white/[0.04] px-5 font-display text-xl font-bold tracking-tight text-text-primary sm:text-2xl"
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
