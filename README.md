# BlueOrbit Website

Production marketing website for **BlueOrbit** — the technology innovation arm of MyAsia Consulting.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx                 Root layout: fonts, metadata, Navbar/Footer, skip-link
  page.tsx                   Homepage
  globals.css                Tailwind layers + base theme
  icon.svg                   Placeholder favicon (orbit mark)
  api/contact/route.ts       Contact form API — STUB (see flags below)
  about/page.tsx
  contact/page.tsx
  products/crm/page.tsx
  solutions/
    ai/page.tsx              AI Solutions & Products (merged flagship page)
    cybersecurity/page.tsx
    innovation-labs/page.tsx
    global-expansion/page.tsx
    managed-services/page.tsx
    tenders/page.tsx
components/
  ContactForm.tsx            Client form: validation + API + mailto fallback
  ui/                        Shared component library
    Navbar, Footer, Hero, LogoStrip, ServiceCard, ProcessSteps,
    StatBand, CTASection, Section, SectionHeading, Button, Logo,
    Reveal, OrbitBackground
content/
  site.ts                    Nav, footer columns, trust logos, company metadata
public/assets/logo/          Logo assets
```

## Design system

All brand tokens live in `tailwind.config.ts` — **never hardcode hex values in components.**

| Token | Use |
| --- | --- |
| `deep-navy` | Primary page background |
| `navy-800` / `navy-700` | Raised surfaces / hover |
| `electric-blue` (+ `-bright`, `-dim`) | Primary accent / CTA |
| `teal` | Secondary accent |
| `slate` (+ `-muted`) | Body text on dark |
| `off-white` | Headings / text on light |

Fonts: **Space Grotesk** (display) + **Inter** (body), loaded via `next/font`.

Every page ends in a shared `<CTASection />` — no dead ends. All copy is pulled
verbatim from `BlueOrbit-Website-Content-v2.md`.

## ⚠️ Client action items (placeholders & assumptions)

These were placeholdered or assumed during the build — see inline `TODO(client)`
and `NOTE(client)` comments in code:

1. **Real logo asset** — the provided file is a raster JPEG on a *white*
   background (`public/assets/logo/blueorbit-logo.jpeg`), which doesn't work on
   the dark theme. An original SVG orbit-mark placeholder is used in the
   Navbar/Footer (`components/ui/Logo.tsx`). Supply a **transparent SVG** export
   to replace it. Same for the favicon (`app/icon.svg`).
2. **Client logos** — the trust band (`content/site.ts` → `TRUST_LOGOS`) uses
   **text wordmarks** (NTPC, GAIL, etc.). Swap in permission-cleared image files.
   Keep the "Trusted by organizations including" (Group-relationship) framing
   unless BlueOrbit has delivered work to these accounts directly.
3. **Proof-band numbers** — years operating, markets active, engagements
   delivered are **not available** (MyAsia's site shows "00+" placeholders). A
   numeric `<StatBand />` is deliberately omitted from the homepage rather than
   fabricating figures. Provide numbers to add it.
4. **Cybersecurity statistics** — the "business priority" section is left
   **uncited**; add verified IBM / Verizon DBIR / Microsoft / WEF / Gartner
   figures with citations before publish (`app/solutions/cybersecurity/page.tsx`).
5. **Contact form backend** — `app/api/contact/route.ts` is a **stub** that only
   validates + logs. Wire it to a real email/CRM service before go-live. The form
   already falls back to a pre-filled `mailto:` if the API errors, so no lead is
   lost meanwhile.
6. **About page** — leadership bios/photos, founding history, and any exact
   Group-relationship wording still need to come from the client; a leadership
   section is intentionally omitted rather than invented.
7. **Contact details** — email/phone/LinkedIn/domain in `content/site.ts` are
   best-guess placeholders; confirm real values.

## Deployment

Vercel-compatible (static + SSR). The contact API route requires a Node/SSR
runtime (already configured). `npm run build` produces the optimized output.
