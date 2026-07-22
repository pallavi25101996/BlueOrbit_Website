import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_COLUMNS, SITE } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <footer className="bg-ink text-on-dark-muted">
      <div className="container-bo py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand + tagline */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm font-semibold text-on-dark">
              {SITE.tagline}
            </p>
            <p className="mt-1 text-sm text-on-dark-muted">{SITE.parent}</p>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                      {...(isExternal(link.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Get in touch */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-muted">
              Work with us
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-on-dark transition-colors hover:text-electric-blue-bright"
            >
              <Mail className="h-4 w-4 shrink-0" /> {SITE.email}
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-muted">
              Call us
            </h3>
            <ul className="mt-3 space-y-1.5">
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-sm text-on-dark transition-colors hover:text-electric-blue-bright"
                  >
                    <Phone className="h-4 w-4 shrink-0" /> {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-muted">
              Address
            </h3>
            <p className="mt-3 flex gap-2 text-sm leading-relaxed text-on-dark">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {SITE.address}
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-on-dark-muted transition-colors hover:text-on-dark"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-on-dark-muted/70">
          © {new Date().getFullYear()} BlueOrbit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
