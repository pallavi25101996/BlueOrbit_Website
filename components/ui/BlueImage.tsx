import Image from "next/image";

/**
 * A photo under a BlueOrbit blue-gradient overlay (duotone-style), so
 * curated stock photography reads as cohesive, on-brand imagery.
 *
 * TODO(client): the photos in /public/assets/images are curated free stock
 * (Unsplash) placeholders — review on the live site and replace with real,
 * permission-cleared brand photography where you have it.
 */
export function BlueImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 40vw",
  priority = false,
  overlay = "medium",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: "medium" | "strong";
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {/* Blue duotone tint */}
      <div
        className="absolute inset-0 bg-electric-blue/40 mix-blend-multiply"
        aria-hidden="true"
      />
      {/* Directional blue→ink gradient for depth + legibility */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${
          overlay === "strong"
            ? "from-ink/85 via-electric-blue-dim/60 to-electric-blue/25"
            : "from-ink/70 via-electric-blue-dim/40 to-electric-blue/10"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
