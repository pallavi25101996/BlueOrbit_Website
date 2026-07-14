import Link from "next/link";

/**
 * Original SVG orbit-mark + wordmark for BlueOrbit.
 *
 * TODO(client): swap in the official brand logo as a transparent SVG.
 * The provided asset (public/assets/logo/blueorbit-logo.jpeg) is a raster
 * file on a WHITE background, which does not sit well on the dark theme —
 * this original orbit mark is used as a dark-theme-safe placeholder that
 * keeps the "BlueOrbit" orbit motif. Export the real mark to
 * /public/assets/logo/blueorbit-logo.svg (transparent) to replace it.
 */
export function OrbitMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="bo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4DA3FF" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      {/* Outer orbit ring */}
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="url(#bo-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="94 32"
      />
      {/* Inner orbit ring */}
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="none"
        stroke="url(#bo-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="52 24"
        opacity="0.7"
      />
      {/* Core */}
      <circle cx="24" cy="24" r="5" fill="url(#bo-grad)" />
    </svg>
  );
}

export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
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
        <span className="font-display text-xl font-bold tracking-tight text-off-white">
          blue<span className="text-electric-blue-bright">orbit</span>
        </span>
      )}
    </Link>
  );
}
