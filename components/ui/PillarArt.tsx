import Image from "next/image";

export type PillarKind =
  | "ai"
  | "innovation"
  | "cybersecurity"
  | "global"
  | "managed"
  | "tenders";

/**
 * Client-supplied solution artwork. These are already on-brand (deep navy +
 * blue), so they render as-is — no colour overlay, which would double-tint
 * them.
 *
 * NOTE(client): the AI Solutions artwork has a LIGHT background while the
 * other five are dark; on the dark theme it reads as a bright contrast card.
 * Supply a dark-background version if you'd prefer it to match exactly.
 */
export const PILLAR_IMAGE: Record<PillarKind, string> = {
  ai: "/assets/images/pillar-ai.png",
  innovation: "/assets/images/pillar-innovation.png",
  cybersecurity: "/assets/images/pillar-cybersecurity.png",
  global: "/assets/images/pillar-global.png",
  managed: "/assets/images/pillar-managed.png",
  tenders: "/assets/images/pillar-publicsector.png",
};

/** Framed hero visual — solution artwork in a rounded card. */
export function HeroArt({ kind, alt }: { kind: PillarKind; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-xl overflow-hidden rounded-[20px] border border-black/[0.07] bg-surface-2 shadow-card-hover">
      <Image
        src={PILLAR_IMAGE[kind]}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority
        className="object-cover"
      />
    </div>
  );
}
