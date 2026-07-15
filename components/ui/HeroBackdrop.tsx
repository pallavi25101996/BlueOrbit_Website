"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated hero background: drifting color blooms, a slowly rotating orbit
 * ring, and floating particles over a faint dotted grid. Respects
 * reduced-motion (renders the static composition). Decorative.
 */
export function HeroBackdrop() {
  const reduce = useReducedMotion();

  // Deterministic particle positions (no hydration mismatch).
  const particles = [
    { left: "12%", top: "26%", d: 7 },
    { left: "24%", top: "68%", d: 9 },
    { left: "46%", top: "18%", d: 6 },
    { left: "63%", top: "72%", d: 8 },
    { left: "82%", top: "34%", d: 10 },
    { left: "90%", top: "60%", d: 7 },
    { left: "36%", top: "48%", d: 11 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* dotted grid, fading down */}
      <div className="absolute inset-0 bg-dots [mask-image:linear-gradient(to_bottom,#000,transparent_75%)]" />

      {/* drifting blooms */}
      <motion.div
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-electric-blue/15 blur-[130px]"
        initial={false}
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-[6%] h-[460px] w-[460px] rounded-full bg-teal/15 blur-[130px]"
        initial={false}
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 h-[420px] w-[420px] rounded-full bg-electric-blue-bright/10 blur-[130px]"
        initial={false}
        animate={reduce ? undefined : { x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* rotating orbit rings */}
      <motion.svg
        viewBox="0 0 600 600"
        className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.5]"
        initial={false}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="hb-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E86FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#12B5A6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="240" fill="none" stroke="url(#hb-ring)" strokeWidth="1.5" strokeDasharray="3 12" />
        <circle cx="300" cy="300" r="180" fill="none" stroke="url(#hb-ring)" strokeWidth="1.5" strokeDasharray="3 12" />
        <circle cx="300" cy="60" r="5" fill="#2E86FF" />
      </motion.svg>

      {/* floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-electric-blue/40"
          style={{ left: p.left, top: p.top }}
          initial={false}
          animate={reduce ? undefined : { y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}
