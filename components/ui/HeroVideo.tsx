"use client";

import { useEffect, useRef } from "react";

/**
 * Brand hero animation, shown as the hero's right-hand visual (it replaces
 * the earlier "AI Adoption · Live" card). Muted, looping and inline so it
 * autoplays on mobile; paused for reduced-motion users and when scrolled
 * out of view. Decorative.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[20px] border border-black/[0.07] bg-surface-2 shadow-card-hover">
      <video
        ref={ref}
        src="/assets/video/blueorbit-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="BlueOrbit brand animation"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
