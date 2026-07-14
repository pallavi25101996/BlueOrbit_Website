import type { ReactNode } from "react";

/**
 * Vertical-rhythm wrapper for page sections.
 * `tone`: "canvas" (default), "muted" (light gray), or "ink" (dark block).
 */
export function Section({
  children,
  className = "",
  tone = "canvas",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "muted" | "ink";
  id?: string;
}) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-on-dark"
      : tone === "muted"
        ? "bg-surface-2"
        : "";
  return (
    <section id={id} className={`${toneClass} py-16 sm:py-24 ${className}`}>
      <div className="container-bo">{children}</div>
    </section>
  );
}
