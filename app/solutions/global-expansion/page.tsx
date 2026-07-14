import type { Metadata } from "next";
import { Plane, Globe2, Check } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Global Market Expansion",
  description:
    "We put international companies on the ground in India — and put Indian companies in front of the world. Market entry, partnerships, compliance, and go-to-market execution.",
};

const INBOUND = [
  "Market entry strategy, enterprise sales, and government introductions",
  "Channel partners, strategic alliances, and localization",
  "Regulatory compliance, vendor identification, and day-to-day operations",
  "Customer success, partner networks, and local go-to-market execution",
];

const OUTBOUND = [
  "International sales representation and distributor networks",
  "Market research, positioning, and go-to-market strategy",
  "Investor introductions and trade delegations",
  "Cross-border partnerships, export enablement, and global-readiness consulting",
];

function Panel({
  icon: Icon,
  eyebrow,
  title,
  intro,
  items,
  delay = 0,
}: {
  icon: typeof Plane;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-4xl border border-black/[0.07] bg-surface p-8 shadow-card">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-blue/10 text-electric-blue">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="mt-4 text-2xl font-bold text-text-primary">{title}</h3>
        <p className="mt-3 text-text-body">{intro}</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">
          What we handle
        </p>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-body">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function GlobalExpansionPage() {
  return (
    <>
      <Hero
        eyebrow="Global Market Expansion"
        headline={
          <>
            Expand beyond borders.
            <br />
            Scale without limits.
          </>
        }
        subhead="We put international companies on the ground in India — and put Indian companies in front of the world."
        primaryCta={{ label: "Talk to Our Global Expansion Experts", href: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel
            icon={Plane}
            eyebrow="For International Companies"
            title="Enter India With Confidence"
            intro="Technology company, healthcare provider, manufacturer, SaaS business — whoever you are, we become your operating partner on the ground."
            items={INBOUND}
          />
          <Panel
            icon={Globe2}
            eyebrow="For Indian Companies"
            title="Take Your Business Global"
            intro="We plug Indian startups, SMEs, and enterprises into a live international partner ecosystem — not a spreadsheet of contacts."
            items={OUTBOUND}
            delay={0.1}
          />
        </div>
      </Section>

      <CTASection
        headline="Ready to cross a border?"
        body="Whether you're entering India or taking an Indian business global, we bring the network and the execution."
        primaryCta={{ label: "Talk to Our Global Expansion Experts", href: "/contact" }}
      />
    </>
  );
}
