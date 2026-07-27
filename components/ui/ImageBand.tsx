import { Check } from "lucide-react";
import { BlueImage } from "./BlueImage";
import { Reveal } from "./Reveal";

/**
 * Two-column image + copy band for solution/product pages — the same
 * blue-gradient photo treatment used elsewhere, extended into page bodies.
 * `reverse` flips the image to the right for visual rhythm between pages.
 */
export function ImageBand({
  image,
  alt,
  eyebrow,
  title,
  body,
  points,
  reverse = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-4xl border border-black/[0.07] shadow-card">
          <BlueImage
            src={image}
            alt={alt}
            className="aspect-[16/11] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-text-body">{body}</p>
        {points && points.length > 0 && (
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-text-body">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </div>
  );
}
