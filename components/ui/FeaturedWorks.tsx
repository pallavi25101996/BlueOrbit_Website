import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BlueImage } from "./BlueImage";

export type Work = {
  title: string;
  description: string;
  deliverables: string;
  industry: string;
  image: string;
};

/**
 * Featured works / case-study cards. Covers are curated blue-gradient
 * photos with a subtle orbit motif overlay for brand continuity.
 *
 * TODO(client): these are PLACEHOLDER case studies + stock photos. Replace
 * with real, permission-cleared project stories and imagery before publish.
 */
export function FeaturedWorks({ works }: { works: Work[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {works.map((work, i) => (
        <Reveal key={work.title} delay={i * 0.06}>
          <article className="group h-full overflow-hidden rounded-4xl border border-white/[0.08] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
            <div className="relative">
              <BlueImage
                src={work.image}
                alt={work.title}
                className="h-48 w-full"
                sizes="(max-width: 640px) 100vw, 50vw"
                overlay="strong"
              />
              {/* orbit motif overlay for brand continuity */}
              <svg
                className="absolute -right-6 -top-6 h-32 w-32 opacity-30"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
                <circle cx="50" cy="4" r="3" fill="white" />
              </svg>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                {work.industry}
              </span>
            </div>
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
              <dl className="mt-5 border-t border-white/[0.08] pt-4 text-xs">
                <dt className="font-semibold uppercase tracking-wide text-text-muted">
                  Deliverables
                </dt>
                <dd className="mt-0.5 text-text-body">{work.deliverables}</dd>
              </dl>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
