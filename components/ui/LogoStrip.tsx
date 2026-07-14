import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";

/**
 * Horizontal trust band — a continuous marquee of client wordmarks.
 *
 * TODO(client): swap these text wordmarks for permission-cleared logo
 * image files once available. Keep the "Trusted by organizations
 * including" framing (relationship-level) unless BlueOrbit has delivered
 * technology work to these accounts directly — see content file note.
 */
export function LogoStrip({
  label = "Trusted by organizations including",
  logos,
}: {
  label?: string;
  logos: readonly string[];
}) {
  return (
    <section className="border-y border-black/[0.06] bg-surface py-12">
      <Reveal className="container-bo text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
          {label}
        </p>
      </Reveal>
      <div className="mt-8">
        <Marquee>
          {logos.map((name) => (
            <span
              key={name}
              className="shrink-0 font-display text-2xl font-bold tracking-tight text-text-muted/60 transition-colors hover:text-text-primary sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
