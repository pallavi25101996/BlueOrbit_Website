import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { FOOTER_COLUMNS, SITE } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <footer className="border-t border-white/[0.06] bg-navy-800/30">
      <div className="container-bo py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand + tagline */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm font-medium text-off-white">
              {SITE.tagline}
            </p>
            <p className="mt-1 text-sm text-slate">{SITE.parent}</p>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate transition-colors hover:text-off-white"
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
        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-off-white"
            >
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-off-white"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-off-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <p className="text-xs text-slate-muted">
            © {new Date().getFullYear()} BlueOrbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
