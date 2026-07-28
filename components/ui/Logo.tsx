import Link from "next/link";
import Image from "next/image";

/**
 * Original SVG orbit-mark + wordmark for BlueOrbit.
 *
 * TODO(client): swap in the official brand logo as a transparent SVG.
 * The provided asset (public/assets/logo/blueorbit-logo.jpeg) is a raster
 * file on a WHITE background; this original orbit mark is a clean,
 * theme-safe placeholder that keeps the "BlueOrbit" orbit motif.
 *
 * `tone` controls wordmark color: "dark" for light backgrounds (default),
 * "light" for dark blocks (e.g. the footer).
 */
export function OrbitMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="bo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E86FF" />
          <stop offset="100%" stopColor="#12B5A6" />
        </linearGradient>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="url(#bo-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="94 32"
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="none"
        stroke="url(#bo-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="52 24"
        opacity="0.75"
      />
      <circle cx="24" cy="24" r="5" fill="url(#bo-grad)" />
    </svg>
  );
}

export function Logo({
  className = "",
  showWordmark = true,
  tone = "dark",
}: {
  className?: string;
  showWordmark?: boolean;
  tone?: "dark" | "light";
}) {
  // Official transparent brand logo (mark + wordmark in one asset).
  return (
    <Link
      href="/"
      aria-label="BlueOrbit home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/assets/logo/blueorbit-logo-v2.png"
        alt="BlueOrbit — tech innovation"
        width={1220}
        height={409}
        priority
        // Full-colour brand logo on every surface; `tone` kept for callers.
        // Source PNG is trimmed of transparent padding so this height is the
        // actual mark, not empty space.
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
