import Link from "next/link";

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
  return (
    <Link
      href="/"
      aria-label="BlueOrbit home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="transition-transform duration-500 group-hover:rotate-45">
        <OrbitMark className="h-8 w-8" />
      </span>
      {showWordmark && (
        <span
          className={`font-display text-xl font-extrabold tracking-tight ${
            tone === "light" ? "text-on-dark" : "text-text-primary"
          }`}
        >
          blue<span className="text-electric-blue">orbit</span>
        </span>
      )}
    </Link>
  );
}
