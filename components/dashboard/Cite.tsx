import { Info } from "lucide-react";

/**
 * Source attribution shown under every metric (FR-07): provider + "as of"
 * date, always visible without leaving the page. An optional methodology
 * caveat is exposed via an accessible tooltip (title + aria-label).
 */
export function Cite({
  source,
  asOf,
  note,
  className = "",
}: {
  source: string;
  asOf: string;
  note?: string;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-1.5 text-[11px] leading-tight text-on-dark-muted ${className}`}>
      <span>
        {source} · as of {asOf}
      </span>
      {note && (
        <span
          tabIndex={0}
          role="note"
          aria-label={`Methodology note: ${note}`}
          title={note}
          className="inline-flex cursor-help rounded-full text-on-dark-muted/70 outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
        >
          <Info className="h-3 w-3" aria-hidden="true" />
        </span>
      )}
    </p>
  );
}
