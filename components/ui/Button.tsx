import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric-blue text-white shadow-glow hover:bg-electric-blue-bright hover:-translate-y-0.5",
  secondary:
    "hairline bg-white/[0.03] text-off-white hover:bg-white/[0.08] hover:border-white/20",
  ghost: "text-off-white hover:text-electric-blue-bright",
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
      className={`${base} ${variants[variant]} ${className} group`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
