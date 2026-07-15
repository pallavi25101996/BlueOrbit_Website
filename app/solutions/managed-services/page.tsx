import type { Metadata } from "next";
import { Headphones, UserPlus, Users, Plug, Zap, Rocket, LifeBuoy } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { HeroArt } from "@/components/ui/PillarArt";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Managed Business Services",
  description:
    "BlueOrbit connects IT, HR, and operations into one system where requests, approvals, and work actually move — deployed fast, and kept running.",
};

const AREAS: Service[] = [
  {
    icon: Headphones,
    title: "IT Service Management",
    description: "Every request, incident, and change, tracked and owned.",
  },
  {
    icon: UserPlus,
    title: "Employee Workflows",
    description:
      "Onboarding and approvals that don't require chasing a person down.",
  },
  {
    icon: Users,
    title: "Customer & Operations Workflows",
    description: "Front-line teams connected to the operations behind them.",
  },
  {
    icon: Plug,
    title: "Automation & Integration",
    description:
      "Your existing systems, wired together into one flow instead of five disconnected ones.",
  },
];

const REASONS: Service[] = [
  {
    icon: Zap,
    title: "Faster than DIY",
    description: "Faster than building it yourself.",
  },
  {
    icon: Rocket,
    title: "Built around you",
    description:
      "Built around how your business actually runs, not a generic template.",
  },
  {
    icon: LifeBuoy,
    title: "Support that stays",
    description: "Support that starts, not stops, at go-live.",
  },
];

export default function ManagedServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Managed Business Services"
        headline={
          <>
            Every department.
            <br />
            One connected system.
          </>
        }
        subhead="BlueOrbit connects IT, HR, and operations into a single system where requests, approvals, and work actually move — instead of dying in someone's inbox."
        primaryCta={{ label: "See How It Works", href: "#where-it-works" }}
        visual={<HeroArt kind="managed" />}
      />

      <Section id="where-it-works">
        <SectionHeading eyebrow="Where the System Works" title="One platform across the business" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {AREAS.map((a, i) => (
            <ServiceCard key={a.title} {...a} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why an Implementation Partner Matters"
          title="The difference between software and something that works"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REASONS.map((r, i) => (
            <ServiceCard key={r.title} {...r} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <CTASection
        headline="One connected system, deployed fast and kept running."
        body="Bring us the workflows that keep breaking down — we'll wire them into one flow."
        primaryCta={{ label: "Talk to Our Implementation Team", href: "/contact" }}
      />
    </>
  );
}
