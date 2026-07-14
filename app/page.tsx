import {
  Boxes,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Workflow,
  Gavel,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { TRUST_LOGOS } from "@/content/site";

// Six-pillar "What We Do" grid — copy verbatim from content file Section 2.
const PILLARS: Service[] = [
  {
    icon: Boxes,
    title: "AI Solutions & Products",
    description:
      "Enterprise software with AI built in, not bolted on. CRM, ERP, HRMS, HIMS, FMS, and the GenAI layer that runs across all of them.",
    href: "/solutions/ai",
  },
  {
    icon: FlaskConical,
    title: "Innovation Labs",
    description:
      "Our consulting arm for what's next — proof of concepts, emerging AI capability, and new solutions built before the market asks for them.",
    href: "/solutions/innovation-labs",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Business-first security consulting — from strategy and compliance to offensive testing and AI risk. Vendor-neutral, risk-driven, built to enable growth instead of blocking it.",
    href: "/solutions/cybersecurity",
  },
  {
    icon: Globe2,
    title: "Global Market Expansion",
    description:
      "We put international companies on the ground in India, and put Indian companies on the map overseas.",
    href: "/solutions/global-expansion",
  },
  {
    icon: Workflow,
    title: "Managed Business Services",
    description:
      "One connected system for IT, HR, and operations — deployed fast, and kept running.",
    href: "/solutions/managed-services",
  },
  {
    icon: Gavel,
    title: "Tenders & Government Advisory",
    description:
      "We find the opportunity, prepare the bid, and help you win it.",
    href: "/solutions/tenders",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="The Technology Innovation Arm of MyAsia Consulting"
        headline={
          <>
            Building the systems
            <br />
            ambitious businesses run on.
          </>
        }
        subhead="BlueOrbit builds enterprise AI products, runs technology delivery, and opens new markets — for companies who've stopped waiting for permission to grow."
        primaryCta={{ label: "Talk to Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions/ai" }}
      />

      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Six ways we move a business forward"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <ServiceCard key={p.title} {...p} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <LogoStrip logos={TRUST_LOGOS} />

      {/*
        NOTE(client): The content file marks headline proof NUMBERS
        (years operating, markets active, engagements delivered) as not yet
        available — MyAsia's own site shows them as "00+" placeholders. A
        numeric <StatBand /> is intentionally omitted here rather than
        fabricating figures. Provide real numbers and we'll drop a StatBand
        in above the closing CTA.
      */}

      <CTASection
        headline="You didn't come this far to stay generic."
        body="Whether it's a product to build, a market to enter, or a system to fix — bring us the mandate. We bring the execution."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
