import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
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
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-on-dark-muted transition-colors hover:text-on-dark"
            >
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-on-dark-muted transition-colors hover:text-on-dark"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-dark-muted transition-colors hover:text-on-dark"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <p className="text-xs text-on-dark-muted/70">
            © {new Date().getFullYear()} BlueOrbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
