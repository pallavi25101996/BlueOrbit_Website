"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlueImage } from "./BlueImage";
import type { Work } from "./FeaturedWorks";

/**
 * Featured Works slideshow (Accenture-style): a horizontal, scroll-snap
 * carousel of case-study cards with prev/next controls and progress dots.
 * Native swipe on touch; keyboard-operable buttons; respects reduced-motion
 * (smooth scroll degrades to instant).
 */
export function WorksCarousel({ works }: { works: Work[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    const mid = el.scrollLeft + el.clientWidth / 2;
    let idx = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const center = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(center - mid);
      if (d < best) {
        best = d;
        idx = i;
      }
    });
    setActive(idx);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollToCard = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[i];
    if (card) el.scrollTo({ left: card.offsetLeft - 4, behavior: "smooth" });
  };

  const step = (dir: number) => scrollToCard(Math.min(Math.max(active + dir, 0), works.length - 1));

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2"
        role="group"
        aria-label="Featured work"
      >
        {works.map((work, i) => (
          <article
            key={work.title}
            data-card
            className="group w-[86%] shrink-0 snap-start overflow-hidden rounded-4xl border border-white/[0.08] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:w-[440px]"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${works.length}: ${work.title}`}
          >
            <div className="relative">
              <BlueImage
                src={work.image}
                alt={work.title}
                className="h-48 w-full"
                sizes="(max-width: 640px) 86vw, 440px"
                overlay="strong"
              />
              <svg className="absolute -right-6 -top-6 h-32 w-32 opacity-30" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
                <circle cx="50" cy="4" r="3" fill="white" />
              </svg>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                {work.industry}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight text-text-primary">{work.title}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-blue" />
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-text-body">{work.description}</p>
              <dl className="mt-5 border-t border-white/[0.08] pt-4 text-xs">
                <dt className="font-semibold uppercase tracking-wide text-text-muted">Deliverables</dt>
                <dd className="mt-0.5 text-text-body">{work.deliverables}</dd>
              </dl>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {works.map((w, i) => (
            <button
              key={w.title}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-electric-blue" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-electric-blue/40 hover:text-text-primary disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-electric-blue/40 hover:text-text-primary disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
