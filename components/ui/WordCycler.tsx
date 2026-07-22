"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Cycles a word in place (Agentra-style hero verb rotator). Reserves the
 * width of the longest word to avoid layout shift, and respects
 * reduced-motion (shows the first word statically). The animating word is
 * rendered in the brand gradient.
 */
export function WordCycler({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || words.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [reduce, words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={`relative inline-grid align-baseline ${className}`}>
      {/* invisible sizer reserves the widest word's width */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 text-gradient">
        {longest}
      </span>
      <span className="col-start-1 row-start-1 whitespace-nowrap">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={i}
            className="text-gradient inline-block"
            initial={reduce ? false : { y: "0.45em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: "-0.45em", opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
