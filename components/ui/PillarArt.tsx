import Image from "next/image";

export type PillarKind =
  | "ai"
  | "innovation"
  | "cybersecurity"
  | "global"
  | "managed"
  | "tenders";

/**
 * Client-supplied solution artwork, rendered as-is (no colour overlay).
 *
 * All six share a white background, soft blue gradients and the same icon
 * language, so the set reads as one system. Exported as optimized WebP.
 */
export const PILLAR_IMAGE: Record<PillarKind, string> = {
  ai: "/assets/images/pillar-ai.webp",
  innovation: "/assets/images/pillar-innovation.webp",
  cybersecurity: "/assets/images/pillar-cybersecurity.webp",
  global: "/assets/images/pillar-global.webp",
  managed: "/assets/images/pillar-managed.webp",
  tenders: "/assets/images/pillar-publicsector.webp",
};

/** Framed hero visual — solution artwork in a rounded card. */
export function HeroArt({ kind, alt }: { kind: PillarKind; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-xl overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-4 shadow-card-hover">
      <Image
        src={PILLAR_IMAGE[kind]}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority
        className="object-contain"
      />
    </div>
  );
}
