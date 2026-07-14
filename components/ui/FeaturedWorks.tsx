import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type Work = {
  title: string;
  description: string;
  deliverables: string;
  industry: string;
};

/**
 * Featured works / case-study cards (reference "Featured Works" style).
 * Cover art is ORIGINAL abstract gradient + orbit motif (no third-party
 * imagery). Each gradient is derived from the card index for variety.
 *
 * TODO(client): these are PLACEHOLDER case studies. Replace with real,
 * permission-cleared project stories (and cover images if available).
 */
const GRADIENTS = [
  "from-electric-blue to-teal",
  "from-electric-blue-dim to-electric-blue-bright",
  "from-teal to-electric-blue",
  "from-electric-blue to-ink",
];

function Cover({ index }: { index: number }) {
  return (
    <div
      className={`relative h-44 overflow-hidden bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-dots-light opacity-40" />
      {/* orbit motif */}
      <svg className="absolute -right-8 -top-8 h-40 w-40 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="50" cy="4" r="3" fill="white" />
      </svg>
    </div>
  );
}

export function FeaturedWorks({ works }: { works: Work[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {works.map((work, i) => (
        <Reveal key={work.title} delay={i * 0.06}>
          <article className="group h-full overflow-hidden rounded-4xl border border-black/[0.07] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
            <Cover index={i} />
            <div className="p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  {work.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue" />
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                {work.description}
              </p>
              <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/[0.07] pt-4 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-text-muted">
                    Deliverables
                  </dt>
                  <dd className="mt-0.5 text-text-body">{work.deliverables}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-text-muted">
                    Industry
                  </dt>
                  <dd className="mt-0.5 text-text-body">{work.industry}</dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
