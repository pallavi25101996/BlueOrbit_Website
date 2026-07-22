import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "light" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Brand accent pill
  primary:
    "bg-electric-blue text-white shadow-glow hover:bg-electric-blue-dim hover:-translate-y-0.5 focus-visible:ring-offset-canvas",
  // Near-black pill (reference style)
  dark: "bg-ink text-on-dark hover:bg-ink-soft hover:-translate-y-0.5 focus-visible:ring-offset-canvas",
  // Light pill for use on dark blocks or as secondary on light
  light:
    "bg-surface text-text-primary shadow-pill ring-1 ring-white/15 hover:-translate-y-0.5 hover:ring-white/25 focus-visible:ring-offset-ink",
  ghost:
    "text-text-primary hover:text-electric-blue focus-visible:ring-offset-canvas",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

/** Primary CTA element across the site. Renders as a Next.js Link. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  withArrow = true,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
