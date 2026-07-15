import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PillarArt, type PillarKind } from "./PillarArt";

export type Pillar = {
  kind: PillarKind;
  title: string;
  description: string;
  href: string;
};

/**
 * Image-forward pillar card: an original technology illustration on top,
 * title + description below. Replaces the earlier icon-square treatment.
 */
export function PillarCard({
  kind,
  title,
  description,
  href,
  delay = 0,
}: Pillar & { delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link href={href} className="group block h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-black/[0.07] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
          <div className="aspect-[16/10] border-b border-black/[0.06]">
            <PillarArt kind={kind} className="h-full w-full" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight text-text-primary transition-colors group-hover:text-electric-blue">
                {title}
              </h3>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue" />
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-text-body">
              {description}
            </p>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
