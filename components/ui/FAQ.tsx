"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

/**
 * Accessible FAQ accordion. One item open at a time. Each trigger is a
 * real <button> with aria-expanded / aria-controls, keyboard-operable.
 *
 * TODO(client): confirm/replace the placeholder Q&A passed from the page.
 */
export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/[0.08]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-semibold text-off-white sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-electric-blue-bright transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-electric-blue/15" : ""
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-12 leading-relaxed text-slate">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
