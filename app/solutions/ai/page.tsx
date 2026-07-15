import type { Metadata } from "next";
import {
  Users,
  Landmark,
  UserCog,
  HeartPulse,
  Boxes,
  LineChart,
  ShieldCheck,
  Bot,
  MessagesSquare,
  FileCog,
  Compass,
  Sparkles,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { HeroArt } from "@/components/ui/PillarArt";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Solutions & Products",
  description:
    "Enterprise software with AI in the architecture from day one — CRM, ERP, HRMS, HIMS, FMS, and a GenAI layer, plus custom AI applications, agentic AI, and governance.",
};

const PRODUCTS: Service[] = [
  {
    icon: Users,
    title: "CRM",
    description: "Every customer relationship, one system, zero blind spots.",
    href: "/products/crm",
  },
  {
    icon: Landmark,
    title: "Lending & Fintech",
    description: "Lead to disbursement, built for speed, built to pass an audit.",
  },
  {
    icon: UserCog,
    title: "HRMS",
    description: "Hire, onboard, pay, and manage performance without switching tabs.",
  },
  {
    icon: HeartPulse,
    title: "HIMS",
    description:
      "Patient records, scheduling, and hospital operations, connected and always accessible.",
  },
  {
    icon: Boxes,
    title: "ERP",
    description: "Inventory, procurement, and finance, reading from the same truth.",
  },
  {
    icon: LineChart,
    title: "FMS",
    description: "Financial visibility in real time, not at month-end.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Threat monitoring and data protection built into the system, not added after a breach.",
  },
];

const GENAI: Service[] = [
  {
    icon: Sparkles,
    title: "Custom AI Applications",
    description: "Enterprise chatbots, AI search, and intelligent document processing.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Autonomous agents for customer support, sales, HR, IT, and finance operations.",
  },
  {
    icon: MessagesSquare,
    title: "Conversational & Voice AI",
    description:
      "Multilingual chatbots and voice agents integrated across CRM, ERP, and contact centers.",
  },
  {
    icon: FileCog,
    title: "AI Automation",
    description:
      "Document, contract, invoice, and workflow automation that removes manual work at the source.",
  },
  {
    icon: Compass,
    title: "AI Strategy & Governance",
    description:
      "Readiness assessments, transformation roadmaps, and responsible-AI frameworks, so adoption doesn't outrun control.",
  },
];

const FRAMEWORK = [
  { title: "Discover" },
  { title: "Design" },
  { title: "Build" },
  { title: "Deploy" },
  { title: "Optimize" },
];

export default function AiSolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="AI Solutions & Products"
        headline="Software that thinks while it works."
        subhead="Most enterprise software waits for someone to tell it what to do. BlueOrbit builds systems that don't wait — AI is in the architecture from day one, not stapled on as a chatbot. From packaged products to custom AI applications, this is where strategy becomes something your teams actually use."
        primaryCta={{ label: "See Our Products", href: "#product-suite" }}
        secondaryCta={{
          label: "Schedule an AI Discovery Workshop",
          href: "/contact",
        }}
        visual={<HeroArt kind="ai" />}
      />

      <Section id="product-suite">
        <SectionHeading
          eyebrow="The Product Suite"
          title="Packaged products, one architecture"
          intro="Each product stands alone, or plugs into the others as one connected system."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <ServiceCard key={p.title} {...p} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="The GenAI Layer"
          title="An AI copilot woven through every product"
          intro="Drafting, summarizing, prioritizing, and answering, so your teams spend less time on the work software should be doing for them. Beyond the packaged products, we build custom AI where your business needs something the shelf doesn't offer:"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GENAI.map((g, i) => (
            <ServiceCard key={g.title} {...g} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why It's Built This Way"
            title="AI isn't a module you switch on — it's how the product was written."
            intro="Each product stands alone, or plugs into the others as one system. And it's built by people who've run the business processes they're now automating, not just the technology underneath them. Enterprise-ready, vendor-neutral, and governed from day one — not bolted on after adoption gets ahead of oversight."
          />
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-black/[0.07] bg-surface p-8 shadow-card">
              <p className="eyebrow">Our Delivery Framework</p>
              <div className="mt-8">
                <ProcessSteps steps={FRAMEWORK} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        headline="Shape the future of your business with BlueOrbit AI."
        body="AI stopped being an experiment. It's a strategic capability — and the businesses treating it that way are already ahead."
        primaryCta={{ label: "Request a Product Demo", href: "/contact" }}
        secondaryCta={{ label: "Book an AI Strategy Session", href: "/contact" }}
      />
    </>
  );
}
