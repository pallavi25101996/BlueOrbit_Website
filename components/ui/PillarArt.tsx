/**
 * Original technology vector illustrations, one per solution pillar.
 * A mix of product-UI motifs (AI, managed) and conceptual tech art
 * (innovation, cybersecurity, global, tenders). No third-party imagery —
 * every scene is authored SVG in the BlueOrbit palette. Decorative.
 *
 * Each scene sits on a tinted rounded panel so it reads as an image tile.
 */

export type PillarKind =
  | "ai"
  | "innovation"
  | "cybersecurity"
  | "global"
  | "managed"
  | "tenders";

const BLUE = "#2E86FF";
const BLUE_BRIGHT = "#4DA3FF";
const TEAL = "#12B5A6";
const INK = "#100F12";
const LINE = "#E4E7EC";
const MUTED = "#98A2B3";

function Panel({
  children,
  tint = "blue",
}: {
  children: React.ReactNode;
  tint?: "blue" | "teal";
}) {
  const from = tint === "teal" ? "#EAFBF7" : "#EAF2FF";
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`bg-${tint}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0A0A0B" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill={`url(#bg-${tint})`} />
      <rect width="400" height="260" fill="url(#dots)" />
      {children}
    </svg>
  );
}

function AiArt() {
  return (
    <Panel tint="blue">
      {/* agent chat card */}
      <g>
        <rect x="48" y="42" width="220" height="150" rx="16" fill="#fff" stroke={LINE} />
        <circle cx="72" cy="68" r="10" fill={BLUE} />
        <rect x="90" y="63" width="90" height="8" rx="4" fill={INK} opacity="0.8" />
        <rect x="64" y="92" width="150" height="8" rx="4" fill={MUTED} opacity="0.5" />
        <rect x="64" y="108" width="120" height="8" rx="4" fill={MUTED} opacity="0.5" />
        <rect x="64" y="140" width="180" height="30" rx="10" fill="#F1F5FF" stroke={BLUE} strokeOpacity="0.3" />
        <rect x="76" y="151" width="90" height="8" rx="4" fill={BLUE} opacity="0.7" />
        <circle cx="228" cy="155" r="12" fill={BLUE} />
        <path d="M223 155 h10 M229 151 l4 4 -4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* floating node cluster */}
      <g>
        <line x1="300" y1="80" x2="340" y2="60" stroke={BLUE} strokeWidth="2" opacity="0.5" />
        <line x1="300" y1="80" x2="340" y2="120" stroke={TEAL} strokeWidth="2" opacity="0.5" />
        <line x1="300" y1="80" x2="300" y2="150" stroke={BLUE} strokeWidth="2" opacity="0.5" />
        <circle cx="300" cy="80" r="14" fill={BLUE} />
        <circle cx="344" cy="58" r="8" fill={BLUE_BRIGHT} />
        <circle cx="344" cy="122" r="8" fill={TEAL} />
        <circle cx="300" cy="156" r="8" fill={INK} />
      </g>
    </Panel>
  );
}

function InnovationArt() {
  return (
    <Panel tint="teal">
      {/* flask */}
      <g transform="translate(150,40)">
        <path d="M40 0 v40 L12 96 a10 10 0 0 0 9 15 h58 a10 10 0 0 0 9 -15 L69 40 V0" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M27 70 L83 70 L96 96 a10 10 0 0 1 -9 15 h-58 a10 10 0 0 1 -9 -15 Z" fill={TEAL} opacity="0.85" />
        <rect x="34" y="-8" width="42" height="10" rx="5" fill={INK} />
        <circle cx="46" cy="90" r="5" fill="#fff" opacity="0.8" />
        <circle cx="66" cy="80" r="4" fill="#fff" opacity="0.8" />
      </g>
      {/* spark */}
      <g transform="translate(250,60)">
        <path d="M0 -18 L5 -5 L18 0 L5 5 L0 18 L-5 5 L-18 0 L-5 -5 Z" fill={BLUE} />
      </g>
      {/* prototype blocks */}
      <g>
        <rect x="60" y="176" width="60" height="40" rx="8" fill="#fff" stroke={LINE} />
        <rect x="130" y="176" width="60" height="40" rx="8" fill="#fff" stroke={LINE} />
        <rect x="200" y="176" width="60" height="40" rx="8" fill={BLUE} opacity="0.15" stroke={BLUE} strokeOpacity="0.4" />
        <line x1="120" y1="196" x2="130" y2="196" stroke={MUTED} strokeWidth="2" />
        <line x1="190" y1="196" x2="200" y2="196" stroke={MUTED} strokeWidth="2" />
      </g>
    </Panel>
  );
}

function CyberArt() {
  return (
    <Panel tint="blue">
      {/* shield */}
      <g transform="translate(160,44)">
        <path d="M40 0 L80 16 V70 C80 108 56 140 40 150 C24 140 0 108 0 70 V16 Z" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M40 12 L68 23 V70 C68 98 51 124 40 132 V12 Z" fill={BLUE} opacity="0.9" />
        <path d="M26 74 l10 11 20 -26" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* scan lines / nodes */}
      <g opacity="0.6">
        <line x1="40" y1="70" x2="150" y2="70" stroke={TEAL} strokeWidth="2" strokeDasharray="4 6" />
        <line x1="260" y1="120" x2="360" y2="120" stroke={BLUE} strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="40" cy="70" r="5" fill={TEAL} />
        <circle cx="360" cy="120" r="5" fill={BLUE} />
      </g>
      {/* lock badge */}
      <g transform="translate(286,150)">
        <rect x="0" y="10" width="34" height="26" rx="6" fill={INK} />
        <path d="M6 10 v-5 a11 11 0 0 1 22 0 v5" fill="none" stroke={INK} strokeWidth="4" />
        <circle cx="17" cy="22" r="4" fill={TEAL} />
      </g>
    </Panel>
  );
}

function GlobalArt() {
  return (
    <Panel tint="teal">
      {/* globe */}
      <g transform="translate(200,130)">
        <circle r="70" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <ellipse rx="70" ry="26" fill="none" stroke={MUTED} strokeWidth="1.5" />
        <ellipse rx="26" ry="70" fill="none" stroke={MUTED} strokeWidth="1.5" />
        <ellipse rx="50" ry="70" fill="none" stroke={MUTED} strokeWidth="1.5" opacity="0.6" />
        <path d="M-70 0 H70 M0 -70 V70" stroke={MUTED} strokeWidth="1.5" opacity="0.6" />
        {/* orbit ring */}
        <ellipse rx="92" ry="40" fill="none" stroke={BLUE} strokeWidth="2" strokeDasharray="4 8" transform="rotate(-20)" />
        <circle cx="88" cy="-30" r="6" fill={BLUE} />
        {/* pins */}
        <g fill={TEAL}>
          <circle cx="-30" cy="-18" r="6" />
          <circle cx="34" cy="10" r="6" />
          <circle cx="-8" cy="40" r="6" />
        </g>
      </g>
    </Panel>
  );
}

function ManagedArt() {
  return (
    <Panel tint="blue">
      {/* kanban board */}
      <g>
        <rect x="40" y="44" width="320" height="172" rx="16" fill="#fff" stroke={LINE} />
        {[56, 156, 256].map((x, i) => (
          <g key={x}>
            <rect x={x} y="60" width="88" height="10" rx="5" fill={i === 0 ? BLUE : MUTED} opacity={i === 0 ? 0.8 : 0.5} />
            <rect x={x} y="82" width="88" height="44" rx="8" fill="#F7F9FC" stroke={LINE} />
            <rect x={x} y="132" width="88" height="44" rx="8" fill="#F7F9FC" stroke={LINE} />
            <rect x={x + 10} y="94" width="50" height="7" rx="3.5" fill={MUTED} opacity="0.6" />
            <rect x={x + 10} y="144" width="60" height="7" rx="3.5" fill={MUTED} opacity="0.6" />
          </g>
        ))}
        {/* a highlighted card */}
        <rect x="56" y="82" width="88" height="44" rx="8" fill={BLUE} opacity="0.12" stroke={BLUE} strokeOpacity="0.4" />
      </g>
      {/* connect arrow */}
      <path d="M144 104 h12" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" />
    </Panel>
  );
}

function TendersArt() {
  return (
    <Panel tint="teal">
      {/* document */}
      <g transform="translate(96,40)">
        <rect x="0" y="0" width="130" height="170" rx="12" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="20" y="26" width="70" height="9" rx="4.5" fill={INK} opacity="0.8" />
        <rect x="20" y="50" width="90" height="7" rx="3.5" fill={MUTED} opacity="0.5" />
        <rect x="20" y="66" width="90" height="7" rx="3.5" fill={MUTED} opacity="0.5" />
        <rect x="20" y="82" width="60" height="7" rx="3.5" fill={MUTED} opacity="0.5" />
        {/* check rows */}
        <g>
          <circle cx="26" cy="112" r="8" fill={TEAL} /><path d="M22 112 l3 3 5 -6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="42" y="108" width="70" height="8" rx="4" fill={MUTED} opacity="0.5" />
          <circle cx="26" cy="138" r="8" fill={TEAL} /><path d="M22 138 l3 3 5 -6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="42" y="134" width="55" height="8" rx="4" fill={MUTED} opacity="0.5" />
        </g>
      </g>
      {/* award medal */}
      <g transform="translate(268,70)">
        <circle cx="0" cy="0" r="34" fill={BLUE} />
        <circle cx="0" cy="0" r="34" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M0 -16 l5 11 12 1 -9 8 3 12 -11 -7 -11 7 3 -12 -9 -8 12 -1 Z" fill="#fff" />
        <path d="M-14 30 l-8 24 14 -8 14 8 -8 -24" fill={BLUE} />
      </g>
    </Panel>
  );
}

const MAP: Record<PillarKind, () => JSX.Element> = {
  ai: AiArt,
  innovation: InnovationArt,
  cybersecurity: CyberArt,
  global: GlobalArt,
  managed: ManagedArt,
  tenders: TendersArt,
};

export function PillarArt({
  kind,
  className = "",
}: {
  kind: PillarKind;
  className?: string;
}) {
  const Art = MAP[kind];
  return (
    <div className={`overflow-hidden ${className}`}>
      <Art />
    </div>
  );
}

/** Framed hero visual — a PillarArt in a rounded, shadowed card. */
export function HeroArt({ kind }: { kind: PillarKind }) {
  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[20px] border border-black/[0.07] shadow-card-hover">
      <div className="aspect-[16/11]">
        <PillarArt kind={kind} className="h-full w-full" />
      </div>
    </div>
  );
}
