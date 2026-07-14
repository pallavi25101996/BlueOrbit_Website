"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle orbit + soft-bloom background art for LIGHT hero sections.
 * Original geometric artwork — faint dotted texture, soft blue/teal
 * blooms, and slowly rotating orbit rings. Decorative (aria-hidden).
 */
export function OrbitBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Dotted texture, fading downward */}
      <div className="absolute inset-0 bg-dots [mask-image:linear-gradient(to_bottom,#000_0%,transparent_60%)]" />

      {/* Soft color blooms */}
      <motion.div
        className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-electric-blue/15 blur-[130px]"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6%] top-[6%] h-[380px] w-[380px] rounded-full bg-teal/12 blur-[130px]"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.18, 1], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit rings */}
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-[0.5]"
      >
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E86FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#12B5A6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[320, 230].map((r, i) => (
          <motion.circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="1.25"
            strokeDasharray="4 12"
            initial={false}
            animate={reduce ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 70 + i * 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "400px 400px" }}
          />
        ))}
        <motion.g
          initial={false}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        >
          <circle cx="400" cy="80" r="5" fill="#2E86FF" />
        </motion.g>
      </svg>
    </div>
  );
}
