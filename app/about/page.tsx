import type { Metadata } from "next";
import { Building2, Compass, ShieldCheck, Users2 } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BlueOrbit is the technology innovation arm of MyAsia Consulting — building enterprise AI products, running technology delivery, and opening new markets.",
};

/*
  NOTE(client): This About page is assembled from the MyAsia/BlueOrbit
  relationship context only. The following still need to come from your team
  before publish and are intentionally NOT invented here:
    - Leadership bios and photos
    - Founding year / company history / milestones
    - Detailed mission/vision statement, if you want specific wording
    - Any headline numbers (people, markets, engagements)
*/

const VALUES: Service[] = [
  {
    icon: Compass,
    title: "Execution over theatre",
    description:
      "Bring us the mandate — a product to build, a market to enter, a system to fix. We bring the execution.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor-neutral by principle",
    description:
      "Advice and architecture built around your business, governed from day one — not a reseller quota.",
  },
  {
    icon: Users2,
    title: "Operators, not just engineers",
    description:
      "Built by people who've run the business processes they're now automating, not just the technology underneath.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        headline="The technology innovation arm of MyAsia Consulting."
        subhead="BlueOrbit builds enterprise AI products, runs technology delivery, and opens new markets — bringing the technology capability behind the MyAsia Consulting Group to companies who've stopped waiting for permission to grow."
        primaryCta={{ label: "Work With Us", href: "/contact" }}
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Who We Are"
            title="Technology, delivery, and market access under one roof."
            intro="BlueOrbit is where MyAsia Consulting's technology ambition is built and delivered. We combine an enterprise product suite with AI in its architecture, a cybersecurity and innovation consulting practice, and the on-the-ground network to take businesses across borders — so strategy becomes something teams actually run on."
          />
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-white/[0.08] bg-surface p-8 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-blue/10 text-electric-blue">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Part of MyAsia Consulting Group
              </h3>
              <p className="mt-3 text-text-body">
                As the Group&apos;s technology innovation arm, BlueOrbit draws on
                MyAsia Consulting&apos;s established relationships and market
                presence — and adds the products, engineering, and delivery to
                turn them into working systems.
              </p>
              {/* TODO(client): confirm exact Group relationship wording and any
                  history/milestones you want stated here. */}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How We Work" title="What we hold ourselves to" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <ServiceCard key={v.title} {...v} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      {/* TODO(client): Leadership section pending real bios/photos. Placeholder
          intentionally omitted rather than fabricating names and titles. */}

      <CTASection
        headline="Bring us the mandate. We bring the execution."
        body="Whether it's a product to build, a market to enter, or a system to fix — let's talk."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions/ai" }}
      />
    </>
  );
}
