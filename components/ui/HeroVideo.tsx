"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video (client-supplied brand animation). Muted, looping,
 * and inline so it autoplays on mobile. Paused for users who prefer reduced
 * motion, and when scrolled out of view. Decorative — a dark scrim keeps the
 * headline legible on top.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={ref}
        src="/assets/video/blueorbit-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover opacity-60"
      />
      {/* Scrim: keeps headline contrast and blends the video into the page. */}
      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/50" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
