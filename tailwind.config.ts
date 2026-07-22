import type { Config } from "tailwindcss";

/**
 * BlueOrbit design system — LIGHT / bold agency aesthetic.
 *
 * Direction (per client): match the AgenAI reference template's feel —
 * warm off-white canvas, near-black contrast blocks, big bold Urbanist
 * headings with tight tracking, generous rounding, pill buttons — but
 * carrying BlueOrbit's electric-blue accent instead of the template's coral.
 *
 * Use these semantic tokens everywhere — do NOT hardcode hex in components.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (DARK theme — deep navy)
        canvas: "#080B14", // page background
        surface: "#111A2B", // cards / raised panels
        "surface-2": "#0D1421", // muted alternating sections
        // Raised "block" panels (CTA, footer, dashboard) — a touch lighter
        ink: "#0F1828", // feature blocks / footer
        "ink-soft": "#182338", // raised card on ink
        "ink-line": "rgba(255,255,255,0.08)", // borders on dark
        // Text (light on dark)
        "text-primary": "#F4F7FB", // headings
        "text-body": "#AEB8C7", // body
        "text-muted": "#7C8699", // captions / meta
        "on-dark": "#F4F7FB", // headings/text on ink blocks
        "on-dark-muted": "#96A0B2", // muted text on ink
        // Accents (BlueOrbit brand)
        "electric-blue": {
          DEFAULT: "#2E86FF",
          bright: "#4DA3FF",
          dim: "#1E64C8",
        },
        teal: {
          DEFAULT: "#12B5A6",
          dim: "#0F9E8C",
        },
      },
      fontFamily: {
        display: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em", // matches reference headline tracking
      },
      borderRadius: {
        "4xl": "2rem", // 32px — big soft cards
      },
      backgroundImage: {
        "blue-teal": "linear-gradient(135deg, #2E86FF 0%, #12B5A6 100%)",
        "orbit-radial":
          "radial-gradient(circle at 50% 0%, rgba(46,134,255,0.16), transparent 60%)",
      },
      boxShadow: {
        // Elevation for dark surfaces (deep shadow + faint inner top light)
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -28px rgba(0,0,0,0.7)",
        "card-hover":
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 32px 64px -28px rgba(0,0,0,0.8)",
        glow: "0 12px 36px -8px rgba(46,134,255,0.5)",
        pill: "0 1px 0 0 rgba(255,255,255,0.04) inset",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-slower": "spin-slow 80s linear infinite",
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
