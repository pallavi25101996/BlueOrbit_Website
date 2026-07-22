import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

/**
 * Icon card used in service/capability grids across the site.
 * `tone="dark"` styles it for placement on dark (ink) sections.
 */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  delay = 0,
  tone = "light",
}: Service & { delay?: number; tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  const inner = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "border border-white/10 bg-ink-soft hover:border-white/20"
          : "border border-white/[0.08] bg-surface shadow-card hover:shadow-card-hover"
      }`}
    >
      <div
        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${
          dark
            ? "bg-white/10 text-electric-blue-bright"
            : "bg-electric-blue/10 text-electric-blue"
        }`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3
        className={`flex items-start justify-between gap-2 text-lg font-bold ${
          dark ? "text-on-dark" : "text-text-primary"
        }`}
      >
        {title}
        {href && (
          <ArrowUpRight
            className={`h-5 w-5 shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              dark ? "text-on-dark-muted" : "text-text-muted group-hover:text-electric-blue"
            }`}
          />
        )}
      </h3>
      <p
        className={`mt-2.5 text-sm leading-relaxed ${
          dark ? "text-on-dark-muted" : "text-text-body"
        }`}
      >
        {description}
      </p>
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
