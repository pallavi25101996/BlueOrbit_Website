"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract orbit/connection-line background art for hero sections.
 * Original geometric artwork — concentric orbit rings + a soft gradient
 * bloom. No stock "AI" clichés. Purely decorative (aria-hidden).
 */
export function OrbitBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Gradient bloom */}
      <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orbit-radial blur-3xl" />
      <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-teal/10 blur-3xl" />

      {/* Orbit rings */}
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.35]"
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
        {/* Orbiting node */}
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
