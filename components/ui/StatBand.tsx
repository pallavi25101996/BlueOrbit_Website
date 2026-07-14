import { Reveal } from "./Reveal";

export type Stat = { value: string; label: string };

/**
 * 3–4 large-number stat callouts. `tone="dark"` for dark sections.
 */
export function StatBand({
  stats,
  tone = "light",
}: {
  stats: Stat[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div
            className={`rounded-3xl p-7 text-center ${
              dark ? "bg-white/[0.04] ring-1 ring-white/10" : "bg-surface shadow-card"
            }`}
          >
            <div className="font-display text-4xl font-extrabold tracking-tighter text-electric-blue sm:text-5xl">
              {stat.value}
            </div>
            <div
              className={`mt-2 text-sm ${
                dark ? "text-on-dark-muted" : "text-text-body"
              }`}
            >
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
