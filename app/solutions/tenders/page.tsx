import type { Metadata } from "next";
import { Search, FileText, Building } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { HeroArt } from "@/components/ui/PillarArt";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Tenders & Government Advisory",
  description:
    "We research, track, and help you win government and private tenders — from opportunity identification to documentation, compliance, and submission.",
};

const SERVICES: Service[] = [
  {
    icon: Search,
    title: "Tender Research & Tracking",
    description:
      "Continuous monitoring across sectors, so the right opportunity never passes you by.",
  },
  {
    icon: FileText,
    title: "Bidding Support",
    description: "Documentation, compliance, and submission, handled end to end.",
  },
  {
    icon: Building,
    title: "Sector & Project Advisory",
    description:
      "Deep research and advisory for large infrastructure and industrial projects.",
  },
];

const STEPS = [
  { title: "Identify", description: "We shortlist the tenders worth your time." },
  {
    title: "Prepare",
    description: "We build the documentation and the compliance case.",
  },
  { title: "Bid", description: "We stay through submission and follow-through." },
];

export default function TendersPage() {
  return (
    <>
      <Hero
        eyebrow="Tenders & Government Advisory"
        headline="Turning public opportunity into won contracts."
        subhead="Government and private tenders are one of the most opportunity-rich, process-heavy spaces in enterprise growth. We research it, track it, and help you win it."
        primaryCta={{ label: "Talk to Our Tenders Team", href: "/contact" }}
        visual={<HeroArt kind="tenders" alt="Tender documentation and bidding" />}
      />

      <Section>
        <SectionHeading eyebrow="What We Do" title="From opportunity to submission" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How We Work" title="Three steps to a won contract" align="center" />
        <div className="mt-14 mx-auto max-w-4xl">
          <ProcessSteps steps={STEPS} />
        </div>
      </Section>

      <CTASection
        headline="Explore tender opportunities with us."
        body="Bring us your capability and we'll find the contracts worth bidding for — then help you win them."
        primaryCta={{ label: "Explore Tender Opportunities With Us", href: "/contact" }}
      />
    </>
  );
}
