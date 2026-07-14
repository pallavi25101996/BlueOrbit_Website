"use client";

import type { ReactNode } from "react";

/**
 * Seamless horizontal marquee. Duplicates children so the loop is
 * continuous; pauses on hover; respects reduced-motion (falls back to a
 * static, wrapping row). Edges are masked for a soft fade.
 */
export function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden mask-fade-edges ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {children}
        {/* duplicate for seamless loop (hidden from AT) */}
        <div className="flex items-center gap-12 pr-12 motion-reduce:hidden" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
