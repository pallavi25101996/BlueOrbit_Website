import {
  Boxes,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Workflow,
  Gavel,
  Cpu,
  Scale,
  Users2,
  Lock,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceRows, type ServiceRow } from "@/components/ui/ServiceRows";
import { FeaturedWorks, type Work } from "@/components/ui/FeaturedWorks";
import { BenefitTabs, type Benefit } from "@/components/ui/BenefitTabs";
import { StatBand, type Stat } from "@/components/ui/StatBand";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/ui/TestimonialCarousel";
import { FAQ, type FaqItem } from "@/components/ui/FAQ";
import { TRUST_LOGOS } from "@/content/site";

// Six-pillar "What We Do" — copy verbatim from content file Section 2.
const PILLARS: ServiceRow[] = [
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
  NOTE(client): PLACEHOLDER case studies — illustrative, written to reflect
  BlueOrbit's solution areas. Replace with real, permission-cleared project
  stories (and cover images if available) before publish.
*/
const WORKS: Work[] = [
  {
    title: "Multilingual Collections Assistant",
    description:
      "Voice-to-voice AI agents that handle routine collections conversations across languages, escalating cleanly to human agents.",
    deliverables: "AI strategy, Voice AI, CRM integration",
    industry: "BFSI / Fintech",
  },
  {
    title: "Procurement Intelligence",
    description:
      "An ERP-connected copilot that surfaces the right vendors, flags contract risk, and speeds approvals.",
    deliverables: "Use-case mapping, ERP integration, RAG",
    industry: "Manufacturing",
  },
  {
    title: "Patient Intake Copilot",
    description:
      "A HIMS-integrated assistant that answers pre-visit questions and streamlines front-desk operations.",
    deliverables: "AI UX flows, LLM agent, HIMS integration",
    industry: "Healthcare",
  },
  {
    title: "Tender Discovery Engine",
    description:
      "Continuous monitoring that shortlists high-fit public tenders and assembles the compliance case.",
    deliverables: "Data pipelines, search, advisory",
    industry: "Government / Public Sector",
  },
];

const BENEFITS: Benefit[] = [
  {
    key: "ai-native",
    title: "AI-Native",
    icon: <Cpu className="h-5 w-5" aria-hidden="true" />,
    body: "AI is in the architecture from day one — not stapled on as a chatbot after the fact. That's why adoption takes days, not quarters.",
    points: [
      "Intelligence built into every product, not a bolt-on module",
      "From packaged products to custom AI applications",
      "Strategy that becomes something teams actually use",
    ],
  },
  {
    key: "vendor-neutral",
    title: "Vendor-Neutral",
    icon: <Scale className="h-5 w-5" aria-hidden="true" />,
    body: "We prioritize by your actual business impact, not a reseller quota. The recommendation you get is the one that's right for you.",
    points: [
      "Independent advice, built for your business",
      "Risk-based prioritization over vendor hype",
      "Enterprise-ready and governed from day one",
    ],
  },
  {
    key: "operator-led",
    title: "Operator-Led",
    icon: <Users2 className="h-5 w-5" aria-hidden="true" />,
    body: "Built by people who've run the business processes they're now automating — not just the technology underneath them.",
    points: [
      "Deep domain experience across regulated sectors",
      "Delivery that starts, not stops, at go-live",
      "Backed by the MyAsia Consulting Group",
    ],
  },
  {
    key: "secure",
    title: "Secure by Design",
    icon: <Lock className="h-5 w-5" aria-hidden="true" />,
    body: "Governance, access control, and data protection are part of the build — not something bolted on after adoption gets ahead of oversight.",
    points: [
      "Role-based access, audit trails, encryption",
      "Responsible-AI frameworks and governance",
      "Compliance-aware from the first prototype",
    ],
  },
];

/*
  NOTE(client): PLACEHOLDER stats — the content file flags real proof
  numbers (years operating, markets, engagements) as NOT yet available.
  These are illustrative and MUST be replaced with verified figures before
  publish. "6 solution areas" is factual (the six pillars above).
*/
const STATS: Stat[] = [
  { value: "6", label: "Solution areas" },
  { value: "10+", label: "Years of Group experience" },
  { value: "8–10 wks", label: "Idea to production" },
  { value: "4+", label: "Industries served" },
];

const HOW_WE_WORK = [
  { title: "Discover", description: "Align on the problem, data reality, and success metrics." },
  { title: "Design", description: "Shape the solution, UX, and architecture around your workflows." },
  { title: "Build", description: "Engineer and integrate — with governance from the first prototype." },
  { title: "Deploy", description: "Ship to production with evals, security, and change management." },
  { title: "Optimize", description: "Measure impact and keep improving after go-live." },
];

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

      <LogoStrip logos={TRUST_LOGOS} />

      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Six ways we move a business forward"
          intro="Each capability stands alone, or connects into one system — strategy, products, and delivery under one roof."
        />
        <div className="mt-12">
          <ServiceRows items={PILLARS} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Featured Work"
          title="From idea to production"
          intro="A snapshot of the kind of work we deliver across industries."
        />
        <div className="mt-12">
          <FeaturedWorks works={WORKS} />
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="Why BlueOrbit"
          title="Outcomes over output"
          intro="Every engagement is measured by business value — not features shipped."
          tone="dark"
        />
        <div className="mt-12">
          <BenefitTabs benefits={BENEFITS} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="By the Numbers"
          title="Built to run, built to grow"
          align="center"
        />
        <div className="mt-12">
          <StatBand stats={STATS} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from idea to impact"
          align="center"
        />
        <div className="mt-14">
          <ProcessSteps steps={HOW_WE_WORK} />
        </div>
      </Section>

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
        <SectionHeading eyebrow="FAQ" title="Questions, answered" align="center" />
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
