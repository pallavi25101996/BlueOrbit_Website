"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/**
 * Accessible, auto-advancing testimonial carousel (light theme).
 * Avatars use initials (no photos available). Pauses on hover/focus,
 * respects reduced-motion, keyboard-navigable via the controls.
 *
 * TODO(client): replace placeholder testimonials with real, permission-
 * cleared client quotes (name, role, company, ideally a headshot).
 */
export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused || reduce || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, reduce, count]);

  const active = testimonials[index];
  const initials = active.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.07] bg-surface p-8 shadow-card sm:p-12">
        <Quote className="h-10 w-10 text-electric-blue/40" aria-hidden="true" />
        <div className="mt-4 min-h-[9rem] sm:min-h-[7rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
            >
              <p className="text-xl font-semibold leading-relaxed tracking-tight text-text-primary sm:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-teal font-display text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <span>
                  <span className="block font-bold text-text-primary">
                    {active.name}
                  </span>
                  <span className="block text-sm text-text-muted">
                    {active.role}, {active.company}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-text-muted transition-colors hover:border-electric-blue/40 hover:text-text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1} of ${count}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-electric-blue"
                    : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface text-text-muted transition-colors hover:border-electric-blue/40 hover:text-text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
