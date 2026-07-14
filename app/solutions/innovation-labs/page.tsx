import type { Metadata } from "next";
import {
  Lightbulb,
  FlaskConical,
  Rocket,
  Target,
  TestTubes,
  Bot,
  Code2,
  BarChart3,
  Cloud,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Innovation Labs",
  description:
    "BlueOrbit's consulting and R&D arm — ideation workshops, proof of concepts, AI & automation, product engineering, data & analytics, and cloud innovation.",
};

const WHY: Service[] = [
  {
    icon: Target,
    title: "Innovation With Purpose",
    description:
      "Every initiative starts with a real business problem, not a technology in search of one.",
  },
  {
    icon: TestTubes,
    title: "Rapid Experimentation",
    description:
      "Proof of concepts and pilots validate ideas before you commit real budget.",
  },
  {
    icon: Rocket,
    title: "Enterprise-Ready",
    description: "Built for scale, security, and governance from the first prototype.",
  },
];

const BUILDS: Service[] = [
  {
    icon: Lightbulb,
    title: "Ideation Workshops",
    description:
      "Design thinking and innovation sprints that turn vague ambition into a real roadmap.",
  },
  {
    icon: FlaskConical,
    title: "Proof of Concept Development",
    description: "Rapid prototyping, feasibility testing, and MVPs.",
  },
  {
    icon: Bot,
    title: "AI & Automation Lab",
    description: "Generative and agentic AI applications built and validated fast.",
  },
  {
    icon: Code2,
    title: "Product Engineering Lab",
    description: "Full-stack, cloud-native product development.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Lab",
    description: "Data strategy, BI, and AI-powered insight.",
  },
  {
    icon: Cloud,
    title: "Cloud Innovation Lab",
    description: "Migration, cloud-native architecture, and platform modernization.",
  },
];

const FRAMEWORK = [
  { title: "Discover" },
  { title: "Explore" },
  { title: "Prototype" },
  { title: "Scale" },
  { title: "Optimize" },
];

export default function InnovationLabsPage() {
  return (
    <>
      <Hero
        eyebrow="Innovation Labs"
        headline="Where ideas become intelligent solutions."
        subhead="Innovation isn't optional anymore — it's the foundation of growth. BlueOrbit Innovation Labs is our consulting and R&D arm — where we explore emerging AI capability, validate new ideas, and build what goes into our product line next."
        primaryCta={{ label: "Start Your Innovation Journey", href: "/contact" }}
        secondaryCta={{ label: "Schedule an Innovation Workshop", href: "/contact" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Why BlueOrbit Innovation Labs"
          title="R&D with a business case attached"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <ServiceCard key={w.title} {...w} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What We Build" title="Six labs, one engine for what's next" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDS.map((b, i) => (
            <ServiceCard key={b.title} {...b} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Innovation Framework"
          title="From bold idea to something real"
          align="center"
        />
        <div className="mt-14">
          <ProcessSteps steps={FRAMEWORK} />
        </div>
      </Section>

      <CTASection
        headline="Innovate with confidence."
        body="Every transformative business starts with a bold idea. We help you turn it into something real."
        primaryCta={{ label: "Book an Innovation Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Innovation Opportunities", href: "/contact" }}
      />
    </>
  );
}
