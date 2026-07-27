import { Sparkles, Check } from "lucide-react";
import type { PillarKind } from "./PillarArt";

/**
 * Clean, original product-UI mockups used as pillar/card visuals — in the
 * same style as the approved hero console. One variant per pillar.
 *
 * Rollout in progress: implemented variants render a mockup; kinds without
 * one fall back to a photo (see PillarCard). Decorative.
 */

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF2FF] to-white p-5">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]"
      />
      <div className="relative w-full max-w-[300px]">{children}</div>
    </div>
  );
}

/** AI Solutions & Products — an "AI copilot" panel. */
function AiMockup() {
  return (
    <Panel>
      <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_12px_32px_-16px_rgba(10,10,11,0.25)]">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-electric-blue text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-bold text-text-primary">AI Copilot</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Live
          </span>
        </div>

        {/* user query */}
        <div className="mt-3 ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-electric-blue px-3 py-2">
          <span className="text-[11px] font-medium text-white">
            Summarise this account
          </span>
        </div>

        {/* AI response */}
        <div className="mt-2 w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-surface-2 px-3 py-2.5">
          <span className="block h-1.5 w-40 rounded-full bg-black/15" />
          <span className="mt-1.5 block h-1.5 w-32 rounded-full bg-black/10" />
          <span className="mt-1.5 block h-1.5 w-36 rounded-full bg-black/10" />
        </div>

        {/* suggested actions */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Draft reply", "Create task", "Next best action"].map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] bg-white px-2 py-1 text-[10px] font-medium text-text-body"
            >
              <Check className="h-2.5 w-2.5 text-electric-blue" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

const REGISTRY: Partial<Record<PillarKind, () => JSX.Element>> = {
  ai: AiMockup,
};

export function hasMockup(kind: PillarKind): boolean {
  return Boolean(REGISTRY[kind]);
}

export function PillarMockup({ kind }: { kind: PillarKind }) {
  const M = REGISTRY[kind];
  return M ? <M /> : null;
}
