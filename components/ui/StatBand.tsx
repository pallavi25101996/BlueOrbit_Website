import { Reveal } from "./Reveal";

export type Stat = { value: string; label: string };

/** 3–4 large-number stat callouts in a row. */
export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="rounded-2xl border border-white/[0.06] bg-navy-800/40 p-6 text-center">
            <div className="bg-blue-teal bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-slate">{stat.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
