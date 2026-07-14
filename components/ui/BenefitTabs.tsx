"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

export type Benefit = {
  key: string;
  title: string;
  body: string;
  points: string[];
  // Pre-rendered icon element (Server Components can't pass function
  // components across the client boundary).
  icon: ReactNode;
};

/**
 * Tabbed "Why choose us" panel (reference "Benefits" style): a vertical
 * tab rail on the left, animated content panel on the right. Rendered on
 * a dark (ink) block for contrast. Keyboard-operable tablist.
 */
export function BenefitTabs({ benefits }: { benefits: Benefit[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const b = benefits[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      {/* Tab rail */}
      <div role="tablist" aria-label="Benefits" className="flex flex-col gap-2">
        {benefits.map((benefit, i) => {
          const selected = i === active;
          return (
            <button
              key={benefit.key}
              role="tab"
              aria-selected={selected}
              id={`benefit-tab-${i}`}
              aria-controls={`benefit-panel-${i}`}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                selected
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 hover:border-white/15 hover:bg-white/[0.03]"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  selected
                    ? "bg-electric-blue text-white"
                    : "bg-white/10 text-electric-blue-bright"
                }`}
              >
                {benefit.icon}
              </span>
              <span
                className={`text-lg font-bold ${
                  selected ? "text-on-dark" : "text-on-dark-muted"
                }`}
              >
                {benefit.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`benefit-panel-${active}`}
        aria-labelledby={`benefit-tab-${active}`}
        className="rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={b.key}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-on-dark sm:text-3xl">
              {b.title}
            </h3>
            <p className="mt-4 leading-relaxed text-on-dark-muted">{b.body}</p>
            <ul className="mt-6 space-y-3">
              {b.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-on-dark-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
