import { Reveal } from "./Reveal";

/**
 * Horizontal trust band. Text wordmarks styled consistently.
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
      <div className="container-bo">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {logos.map((name) => (
              <li
                key={name}
                className="font-display text-xl font-bold tracking-tight text-text-muted/70 transition-colors duration-300 hover:text-text-primary sm:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
