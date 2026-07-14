import type { Config } from "tailwindcss";

/**
 * BlueOrbit design system.
 *
 * Palette derived from the established MyAsia/BlueOrbit brand
 * (deep navy background, electric blue primary accent, teal secondary,
 * slate body text, off-white for light surfaces). Use these tokens
 * everywhere — do NOT hardcode hex values in components.
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
        // Backgrounds
        "deep-navy": "#081326", // primary page background
        "navy-800": "#0C1D38", // raised surface / cards
        "navy-700": "#122A4D", // hover surface / borders
        // Accents
        "electric-blue": {
          DEFAULT: "#2E86FF", // primary accent / CTA
          bright: "#4DA3FF",
          dim: "#1E64C8",
        },
        teal: {
          DEFAULT: "#2DD4BF", // secondary accent
          dim: "#0F9E8C",
        },
        // Text
        slate: {
          DEFAULT: "#94A3B8", // body text on dark
          muted: "#64748B", // captions / meta
        },
        "off-white": "#F1F5F9", // headings on dark / text on light
      },
      fontFamily: {
        // Headline: confident geometric sans. Body: clean readable sans.
        // Loaded via next/font in app/layout.tsx and exposed as CSS vars.
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "orbit-radial":
          "radial-gradient(circle at 50% 0%, rgba(46,134,255,0.18), transparent 60%)",
        "blue-teal":
          "linear-gradient(135deg, #2E86FF 0%, #2DD4BF 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(46,134,255,0.45)",
        "glow-teal": "0 0 40px -8px rgba(45,212,191,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-slower": "spin-slow 80s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
