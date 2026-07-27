import type { Metadata } from "next";
import {
  Target,
  Scale,
  Radar,
  Landmark,
  Cloud,
  KeyRound,
  Mail,
  Swords,
  Siren,
  BrainCircuit,
  Building2,
} from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { HeroArt } from "@/components/ui/PillarArt";
import { ImageBand } from "@/components/ui/ImageBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type Service } from "@/components/ui/ServiceCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Cybersecurity",
  description:
    "Business-first, vendor-neutral security consulting — strategy, risk & compliance, cloud, identity, offensive security, SecOps, and AI security. Secure. Transform. Stay ahead.",
};

const WHY = [
  {
    icon: Target,
    title: "Business-Centric Security",
    description: "Security aligned to strategy, not bolted on beside it.",
  },
  {
    icon: Scale,
    title: "Risk-Based",
    description: "We prioritize by actual business impact, not vendor hype.",
  },
  {
    icon: Radar,
    title: "Modern Threat Readiness",
    description:
      "Ransomware, identity attacks, cloud, insider risk, supply chain, and AI-enabled threats — covered.",
  },
  {
    icon: Building2,
    title: "Independent",
    description:
      "Vendor-neutral advice, built for your business, not a reseller quota.",
  },
] satisfies Service[];

const CAPABILITIES: Service[] = [
  {
    icon: Landmark,
    title: "Strategy & Governance",
    description: "Roadmaps, policy, virtual CISO, and executive advisory.",
  },
  {
    icon: Scale,
    title: "Risk & Compliance",
    description:
      "Assessments, ISO 27001, NIST CSF, SOC readiness, PCI DSS, GDPR, DPDP Act.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Architecture, posture management, and DevSecOps across every major cloud.",
  },
  {
    icon: KeyRound,
    title: "Identity Security",
    description: "Access management, privileged access, SSO, MFA, and Zero Trust.",
  },
  {
    icon: Mail,
    title: "Email & Human-Centric Security",
    description:
      "Phishing defense, business email compromise protection, and awareness programs that actually change behavior.",
  },
  {
    icon: Swords,
    title: "Offensive Security",
    description:
      "Penetration testing, red team, and social engineering — before someone else finds the gap.",
  },
  {
    icon: Siren,
    title: "Security Operations",
    description:
      "SOC advisory, threat hunting, detection engineering, and incident response.",
  },
  {
    icon: BrainCircuit,
    title: "AI Security",
    description:
      "Risk assessment, LLM security review, and governance for the systems you're deploying right now.",
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Government",
  "Education",
  "Technology",
  "Logistics",
  "Energy",
  "Professional Services",
];

const FRAMEWORK = [
  { title: "Assess" },
  { title: "Identify" },
  { title: "Prioritize" },
  { title: "Implement" },
  { title: "Optimize" },
];

export default function CybersecurityPage() {
  return (
    <>
      <Hero
        eyebrow="Cybersecurity"
        headline="Secure. Transform. Stay ahead."
        subhead="Cybersecurity isn't just about stopping attacks anymore — it's what lets you move fast without breaking something important. BlueOrbit strengthens your defenses and accelerates secure transformation at the same time."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Security Assessment", href: "/contact" }}
        visual={<HeroArt kind="cybersecurity" alt="Secure systems and infrastructure" />}
      />

      <Section>
        <SectionHeading
          eyebrow="Cybersecurity Is a Business Priority"
          title="The threat landscape isn't slowing down."
          intro="Attacks are more sophisticated every year, identity is the most targeted entry point in the enterprise, and regulatory pressure isn't slowing down."
        />
        {/* TODO(client): replace the qualitative statement above with VERIFIED
            statistics (IBM, Verizon DBIR, Microsoft, WEF, or Gartner) and add
            inline citations before publish. Left uncited deliberately rather
            than fabricating numbers. */}
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Why BlueOrbit" title="Security that enables growth" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <ServiceCard key={w.title} {...w} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Where We Work" title="Eight areas, one program" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <ServiceCard key={c.title} {...c} delay={i * 0.04} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Industries We Serve" title="Deep across regulated sectors" />
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-black/10 bg-surface px-4 py-2 text-sm text-text-body shadow-pill transition-colors hover:border-electric-blue/40 hover:text-text-primary"
              >
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="How We Work" title="A repeatable, risk-driven engagement" align="center" />
        <div className="mt-14">
          <ProcessSteps steps={FRAMEWORK} />
        </div>
      </Section>

      <Section tone="muted">
        <ImageBand
          image="/assets/images/managed.jpg"
          alt="Security operations monitoring"
          eyebrow="Security that enables growth"
          title="Defend and transform at the same time"
          body="Business-first, vendor-neutral security — prioritized by real business impact and ready for modern, AI-era threats."
          points={[
            "Risk-based, not vendor-driven",
            "Cloud, identity, offensive & SecOps",
            "AI security for what you're deploying now",
          ]}
        />
      </Section>

      <CTASection
        headline="Build cyber resilience with BlueOrbit."
        body="Whether you're standing up a security program from zero or preparing for AI-era threats, we bring the strategy and the execution."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Request a Cybersecurity Assessment", href: "/contact" }}
      />
    </>
  );
}
