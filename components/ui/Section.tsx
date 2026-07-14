import type { ReactNode } from "react";

/** Vertical-rhythm wrapper for page sections. */
export function Section({
  children,
  className = "",
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-navy-800/20" : ""} py-16 sm:py-24 ${className}`}
    >
      <div className="container-bo">{children}</div>
    </section>
  );
}
