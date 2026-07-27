import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export type ServiceRow = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

/**
 * Big numbered editorial rows (reference "services" style): large index,
 * title, description, and an arrow — each row a full-width divided line
 * that highlights on hover. More premium than a plain card grid.
 */
export function ServiceRows({ items }: { items: ServiceRow[] }) {
  return (
    <div className="border-t border-black/10">
      {items.map((item, i) => {
        const Row = (
          <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-black/10 py-7 transition-colors sm:gap-8 sm:py-9">
            <span className="font-display text-lg font-bold text-text-muted transition-colors group-hover:text-electric-blue sm:text-xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-electric-blue sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-body sm:text-base">
                {item.description}
              </p>
            </div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-text-muted transition-all duration-300 group-hover:border-electric-blue group-hover:bg-electric-blue group-hover:text-white">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        );

        return (
          <Reveal key={item.title} delay={i * 0.05}>
            {item.href ? (
              <Link href={item.href} className="block">
                {Row}
              </Link>
            ) : (
              Row
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
