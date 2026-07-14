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
import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/ui/TestimonialCarousel";
import { FAQ, type FaqItem } from "@/components/ui/FAQ";
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

/*
  NOTE(client): PLACEHOLDER testimonials — these are illustrative, written
  to reflect BlueOrbit's positioning. Replace with real, permission-cleared
  client quotes (name, role, company, ideally a headshot) before publish.
*/
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "BlueOrbit didn't hand us another dashboard to babysit — they wired AI into the workflows our teams already run. Adoption took days, not quarters.",
    name: "Placeholder Name",
    role: "Chief Operating Officer",
    company: "Enterprise Client",
  },
  {
    quote:
      "They brought the strategy and the execution. We went from a proof of concept to something in production without the usual gap in between.",
    name: "Placeholder Name",
    role: "Head of Digital",
    company: "Manufacturing Group",
  },
  {
    quote:
      "Vendor-neutral advice we could actually trust. Every recommendation was tied to our business impact, not someone's licence quota.",
    name: "Placeholder Name",
    role: "CISO",
    company: "Financial Services Firm",
  },
];

/*
  NOTE(client): PLACEHOLDER FAQ — confirm or replace these answers. They're
  written from the site copy and the BlueOrbit/MyAsia relationship context.
*/
const FAQS: FaqItem[] = [
  {
    question: "What exactly does BlueOrbit do?",
    answer:
      "BlueOrbit builds enterprise AI products, runs technology delivery, and opens new markets. We span six areas: AI Solutions & Products, Innovation Labs, Cybersecurity, Global Market Expansion, Managed Business Services, and Tenders & Government Advisory.",
  },
  {
    question: "How is BlueOrbit related to MyAsia Consulting?",
    answer:
      "BlueOrbit is the technology innovation arm of MyAsia Consulting. We bring the products, engineering, and delivery capability behind the Group's established relationships and market presence.",
  },
  {
    question: "Do you build custom solutions or only packaged products?",
    answer:
      "Both. Our product suite (CRM, ERP, HRMS, HIMS, FMS) stands alone or connects as one system, and our Innovation Labs and GenAI practice build custom AI applications where the shelf doesn't fit.",
  },
  {
    question: "Are you tied to specific technology vendors?",
    answer:
      "No. We're vendor-neutral by principle. Recommendations are prioritized by your actual business impact, not a reseller quota.",
  },
  {
    question: "How do we start working with you?",
    answer:
      "Get in touch through the contact form with a short note on what you're trying to move — a product to build, a market to enter, or a system to fix — and we'll bring the right team to the table.",
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
            <span className="text-gradient">ambitious businesses</span> run on.
          </>
        }
        subhead="BlueOrbit builds enterprise AI products, runs technology delivery, and opens new markets — for companies who've stopped waiting for permission to grow."
        primaryCta={{ label: "Talk to Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions/ai" }}
        highlights={[
          "AI-native architecture",
          "Vendor-neutral",
          "Operator-led delivery",
        ]}
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

      <Section>
        <SectionHeading
          eyebrow="What Clients Say"
          title="Execution people remember"
          align="center"
        />
        <div className="mt-12">
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          align="center"
        />
        <div className="mt-12">
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTASection
        headline="You didn't come this far to stay generic."
        body="Whether it's a product to build, a market to enter, or a system to fix — bring us the mandate. We bring the execution."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
