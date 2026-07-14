import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

/** Icon card used in service/capability grids across every page. */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
}: Service & { delay?: number }) {
  const inner = (
    <div className="group card-gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 hover:shadow-glow">
      {/* Corner glow that appears on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-electric-blue/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-teal/10 text-electric-blue-bright ring-1 ring-inset ring-electric-blue/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-teal/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="flex items-start justify-between gap-2 text-lg font-semibold text-off-white">
        {title}
        {href && (
          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-muted transition-all duration-200 group-hover:text-electric-blue-bright" />
        )}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );

  return (
    <Reveal delay={delay} className="h-full">
      {href ? (
        <Link href={href} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </Reveal>
  );
}
