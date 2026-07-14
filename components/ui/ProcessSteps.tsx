import { Reveal } from "./Reveal";

export type Step = { title: string; description?: string };

/**
 * Numbered step sequence with a connecting line.
 * Horizontal on desktop, vertical on mobile.
 * `tone="dark"` for placement on dark (ink) sections.
 */
export function ProcessSteps({
  steps,
  tone = "light",
}: {
  steps: Step[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const cols =
    steps.length >= 5
      ? "lg:grid-cols-5"
      : steps.length === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <ol className={`relative grid gap-8 sm:grid-cols-2 ${cols} lg:gap-6`}>
      <div
        aria-hidden="true"
        className={`absolute left-0 right-0 top-7 hidden h-px lg:block ${
          dark
            ? "bg-gradient-to-r from-white/25 to-transparent"
            : "bg-gradient-to-r from-electric-blue/40 via-teal/30 to-transparent"
        }`}
      />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-bold ${
              dark
                ? "bg-white/10 text-electric-blue-bright"
                : "bg-electric-blue text-white shadow-glow"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3
            className={`mt-5 text-base font-bold ${
              dark ? "text-on-dark" : "text-text-primary"
            }`}
          >
            {step.title}
          </h3>
          {step.description && (
            <p
              className={`mt-1.5 text-sm leading-relaxed ${
                dark ? "text-on-dark-muted" : "text-text-body"
              }`}
            >
              {step.description}
            </p>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
