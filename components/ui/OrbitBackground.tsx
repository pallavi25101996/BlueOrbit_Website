"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract orbit + aurora background art for hero sections.
 * Original geometric artwork — animated aurora blooms (blue/teal),
 * concentric orbit rings with orbiting nodes, and a faint blueprint grid.
 * No stock "AI" clichés. Purely decorative (aria-hidden).
 */
export function OrbitBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Faint blueprint grid, fading downward */}
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,#000_0%,transparent_65%)]" />

      {/* Aurora blooms */}
      <motion.div
        className="absolute left-1/2 top-[-25%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-electric-blue/20 blur-[120px]"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-teal/15 blur-[120px]"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-6%] top-[30%] h-[360px] w-[360px] rounded-full bg-electric-blue-dim/15 blur-[120px]"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.15, 1], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit rings */}
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.3]"
      >
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E86FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[320, 240, 160].map((r, i) => (
          <motion.circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1.25"
            strokeDasharray="6 14"
            initial={false}
            animate={reduce ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
        ))}
        {/* Orbiting nodes */}
        <motion.g
          initial={false}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <circle cx="400" cy="80" r="5" fill="#4DA3FF" />
        </motion.g>
        <motion.g
          initial={false}
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <circle cx="400" cy="160" r="4" fill="#2DD4BF" />
        </motion.g>
      </svg>
    </div>
  );
}
