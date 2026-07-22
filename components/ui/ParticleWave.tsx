"use client";

import { useEffect, useRef } from "react";

/**
 * itcart.ai-style flowing particle-wave background (canvas). A field of
 * blue/teal dots drifting in a sine wave, low opacity, over the dark
 * canvas. Respects reduced-motion (draws a single static frame) and
 * pauses when off-screen. Purely decorative.
 */
export function ParticleWave({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      raf = 0,
      t = 0,
      visible = true;
    type P = {
      x: number;
      baseY: number;
      phase: number;
      amp: number;
      speed: number;
      r: number;
      o: number;
      teal: boolean;
    };
    let particles: P[] = [];

    const init = () => {
      particles = [];
      const count = Math.min(Math.floor(w / 8), 190);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          baseY: h * 0.32 + Math.random() * h * 0.5,
          phase: Math.random() * Math.PI * 2,
          amp: 16 + Math.random() * 70,
          speed: 0.15 + Math.random() * 0.45,
          r: 0.6 + Math.random() * 1.9,
          o: 0.12 + Math.random() * 0.5,
          teal: Math.random() > 0.45,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const y = p.baseY + Math.sin(t * p.speed + p.phase + p.x * 0.006) * p.amp;
        const x = p.x + Math.sin(t * 0.18 + p.phase) * 10;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.teal
          ? `rgba(45,212,191,${p.o})`
          : `rgba(77,163,255,${p.o})`;
        ctx.fill();
      }
    };

    const loop = () => {
      t += 0.016;
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver(
      ([e]) => (visible = e.isIntersecting),
      { threshold: 0 }
    );
    io.observe(canvas);

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
