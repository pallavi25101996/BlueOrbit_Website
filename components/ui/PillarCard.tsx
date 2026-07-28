import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import type { PillarKind } from "./PillarArt";
import { PillarMockup } from "./PillarMockup";

export type Pillar = {
  kind: PillarKind;
  title: string;
  description: string;
  href: string;
};

/**
 * Image-forward pillar card: a curated, blue-gradient photo on top, with
 * the title + description below.
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
        {/* White card on the dark section: the ring lifts it off the ink
            ground and the hover glow uses the brand blue. */}
        <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-surface ring-1 ring-white/10 shadow-card transition-all duration-300 hover:-translate-y-1 hover:ring-electric-blue/40 hover:shadow-glow">
          {/* Product UI for this vertical — rendered interface, not artwork,
              so it stays crisp at any size and needs no image download. */}
          <div
            aria-hidden="true"
            className="aspect-[16/10] w-full overflow-hidden border-b border-black/[0.06]"
          >
            <PillarMockup kind={kind} />
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
