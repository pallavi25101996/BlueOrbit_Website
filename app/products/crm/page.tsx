import type { Metadata } from "next";
import {
  SlidersHorizontal,
  Sparkles,
  UserSquare2,
  Lock,
  Filter,
  Users,
  Megaphone,
  Headphones,
  Bot,
  BarChart3,
  Cloud,
  Server,
  Layers,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "BlueOrbit CRM",
  description:
    "One platform, every customer, unlimited growth. AI-powered, unified CRM built to adapt to how your business actually works — cloud, on-premises, or hybrid.",
};

const WHY: Service[] = [
  {
    icon: SlidersHorizontal,
    title: "Built Around You",
    description: "Configured to your workflows, not a rigid template.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Built-in intelligence that automates the routine and surfaces what matters.",
  },
  {
    icon: UserSquare2,
    title: "One Customer View",
    description: "Every interaction, communication, and transaction, in one place.",
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Role-based access, audit trails, and enterprise-grade protection.",
  },
];

const FEATURES: Service[] = [
  {
    icon: Filter,
    title: "Lead & Pipeline Management",
    description:
      "Capture, score, and move leads through a fully visible sales process.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "A true 360° customer profile for every account.",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Targeted campaigns and lead nurturing, running on autopilot.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Ticketing, SLA monitoring, and self-service that actually resolves issues.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Drafts emails, summarizes calls, recommends next-best actions, and answers business questions on demand.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    description: "Real-time visibility into sales, revenue, and team performance.",
  },
];

const DEPLOYMENT: Service[] = [
  { icon: Cloud, title: "Cloud", description: "Cloud for speed." },
  { icon: Server, title: "On-Premises", description: "On-Premises for control." },
  { icon: Layers, title: "Hybrid", description: "Hybrid for both." },
];

const STEPS = [
  { title: "Discover" },
  { title: "Configure" },
  { title: "Migrate" },
  { title: "Train" },
  { title: "Optimize" },
];

export default function CrmPage() {
  return (
    <>
      <Hero
        eyebrow="BlueOrbit CRM"
        headline={
          <>
            One platform. Every customer.
            <br />
            Unlimited growth.
          </>
        }
        subhead="BlueOrbit CRM is built to adapt to how your business actually works — not the other way around. AI-powered, unified, and built to scale from your first hundred customers to your millionth."
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <Section>
        <SectionHeading eyebrow="Why BlueOrbit CRM" title="A CRM that adapts to you" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <ServiceCard key={w.title} {...w} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="What It Does" title="Everything a revenue team needs" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <ServiceCard key={f.title} {...f} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Deployment, Your Way" title="Cloud for speed. On-premises for control. Hybrid for both." />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {DEPLOYMENT.map((d, i) => (
            <ServiceCard key={d.title} {...d} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Our Implementation Approach"
          title="Live faster, with less risk"
          align="center"
        />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </Section>

      <CTASection
        headline="Experience a smarter CRM."
        body="Whether you're replacing a legacy system or standing up your first one, BlueOrbit CRM gives you the intelligence and scale to grow with confidence."
        primaryCta={{ label: "Request a Live Demo", href: "/contact" }}
        secondaryCta={{ label: "Start Your CRM Journey", href: "/contact" }}
      />
    </>
  );
}
