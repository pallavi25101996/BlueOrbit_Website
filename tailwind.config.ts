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
        // Surfaces (light) — cool near-white, matching the reference
        canvas: "#F8F9FA", // page background
        surface: "#FFFFFF", // cards / raised on light
        "surface-2": "#F1F3F5", // muted alternating sections
        // Dark contrast blocks
        ink: "#100F12", // dark feature blocks / footer
        "ink-soft": "#1A191E", // raised card on dark
        "ink-line": "#2A2A30", // borders on dark
        // Text
        "text-primary": "#0A0A0B", // headings on light
        "text-body": "#3F3F46", // body on light
        "text-muted": "#71717A", // captions / meta on light
        "on-dark": "#FAFAFA", // headings/text on dark blocks
        "on-dark-muted": "#A1A1AA", // muted text on dark
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
        // Soft, layered elevation for light surfaces
        card: "0 1px 2px rgba(10,10,11,0.04), 0 12px 32px -16px rgba(10,10,11,0.18)",
        "card-hover":
          "0 2px 4px rgba(10,10,11,0.06), 0 24px 48px -20px rgba(10,10,11,0.28)",
        glow: "0 12px 32px -10px rgba(46,134,255,0.45)",
        pill: "0 1px 2px rgba(10,10,11,0.08)",
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
