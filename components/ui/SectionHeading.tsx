import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Consistent eyebrow + heading + optional intro block for sections.
 * `tone="dark"` renders for use on dark contrast blocks.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2
        className={`mt-5 text-3xl font-extrabold leading-[1.1] tracking-tighter sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-on-dark" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-on-dark-muted" : "text-text-body"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
