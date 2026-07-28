import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PILLAR_IMAGE, type PillarKind } from "./PillarArt";

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
          {/*
            Solution artwork. Source images vary in aspect ratio (1.39–2.46),
            so `object-contain` on white shows each one whole — nothing
            important is cropped — while the fixed 16:10 box keeps every card
            identical in height.
          */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/[0.06] bg-white p-3">
            <Image
              src={PILLAR_IMAGE[kind]}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
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
