"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/content/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-bo pt-3 sm:pt-4">
        <nav
          className={`flex items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-surface/85 shadow-card backdrop-blur-xl"
              : "border border-white/10 bg-surface/60 backdrop-blur-md"
          }`}
          aria-label="Primary"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenGroup(item.label)}
                onMouseLeave={() => item.children && setOpenGroup(null)}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openGroup === item.label}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-text-primary"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <AnimatePresence>
                      {openGroup === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full w-80 pt-3"
                        >
                          <ul className="overflow-hidden rounded-3xl border border-white/10 bg-surface p-2 shadow-card">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-2"
                                >
                                  <span className="block text-sm font-semibold text-text-primary">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="mt-0.5 block text-xs text-text-muted">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-text-primary"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" variant="dark" withArrow={false} className="px-5 py-2.5">
              Talk to Us
            </ButtonLink>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-text-primary lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 bg-canvas/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-bo flex h-full flex-col overflow-y-auto pb-10 pt-24">
              <ul className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-3 py-3 text-lg font-semibold text-text-primary">
                          {item.label}
                          <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="ml-3 border-l border-white/10 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block rounded-xl px-3 py-2.5 text-text-muted hover:text-text-primary"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-2xl px-3 py-3 text-lg font-semibold text-text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="dark" className="w-full">
                  Talk to Us
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
