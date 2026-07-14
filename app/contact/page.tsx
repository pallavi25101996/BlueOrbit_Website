import type { Metadata } from "next";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { OrbitBackground } from "@/components/ui/OrbitBackground";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Bring us the mandate — a product to build, a market to enter, or a system to fix. Talk to the BlueOrbit team.",
};

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-40">
      <OrbitBackground />
      <div className="container-bo relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: pitch + contact details */}
          <div>
            <Reveal>
              <span className="eyebrow">Contact Us</span>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-off-white sm:text-5xl">
                Bring us the mandate.
                <br />
                We bring the execution.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                Whether it&apos;s a product to build, a market to enter, or a
                system to fix — tell us what you&apos;re trying to move, and
                we&apos;ll bring the right team to the table.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4">
                <ContactItem icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={SITE.phone}
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Follow BlueOrbit"
                  href={SITE.linkedin}
                  external
                />
                {/* TODO(client): add office address(es) if you want them shown. */}
                <ContactItem
                  icon={MapPin}
                  label="Group"
                  value="Part of MyAsia Consulting Group"
                  href="https://myasiaconsultingindia.com"
                  external
                />
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-navy-800/50 p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-4"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-teal/10 text-electric-blue-bright ring-1 ring-inset ring-electric-blue/20 transition-colors group-hover:bg-blue-teal/20">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wide text-slate-muted">
            {label}
          </span>
          <span className="block text-off-white transition-colors group-hover:text-electric-blue-bright">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}
