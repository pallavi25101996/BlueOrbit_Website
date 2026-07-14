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
    <section className="border-y border-white/[0.06] bg-navy-800/30 py-10">
      <div className="container-bo">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {logos.map((name) => (
              <li
                key={name}
                className="font-display text-lg font-semibold tracking-tight text-slate/60 grayscale transition-all duration-300 hover:text-off-white hover:grayscale-0 sm:text-xl"
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
