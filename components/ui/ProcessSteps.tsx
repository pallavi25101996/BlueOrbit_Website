import { Reveal } from "./Reveal";

export type Step = { title: string; description?: string };

/**
 * Numbered step sequence with a connecting line.
 * Horizontal on desktop, vertical on mobile.
 */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      {/* Connecting line (desktop) */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-electric-blue/40 via-teal/30 to-transparent lg:block"
      />
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-electric-blue/30 bg-deep-navy font-display text-lg font-bold text-electric-blue-bright shadow-glow">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-4 text-base font-semibold text-off-white">
            {step.title}
          </h3>
          {step.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-slate">
              {step.description}
            </p>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
