import { BlueImage } from "./BlueImage";

export type PillarKind =
  | "ai"
  | "innovation"
  | "cybersecurity"
  | "global"
  | "managed"
  | "tenders";

/** Each pillar → a curated, blue-gradient-overlaid photo. */
export const PILLAR_IMAGE: Record<PillarKind, string> = {
  ai: "/assets/images/ai.jpg",
  innovation: "/assets/images/innovation.jpg",
  cybersecurity: "/assets/images/cybersecurity.jpg",
  global: "/assets/images/global.jpg",
  managed: "/assets/images/managed.jpg",
  tenders: "/assets/images/tenders.jpg",
};

/** Framed hero visual — a curated blue-gradient photo in a rounded card. */
export function HeroArt({ kind, alt }: { kind: PillarKind; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[20px] border border-white/[0.08] shadow-card-hover">
      <BlueImage
        src={PILLAR_IMAGE[kind]}
        alt={alt}
        className="aspect-[16/11] w-full"
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority
        overlay="strong"
      />
    </div>
  );
}
