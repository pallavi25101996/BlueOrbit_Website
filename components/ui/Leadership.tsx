import { Reveal } from "./Reveal";

/**
 * Leadership Ecosystem — profiles of the MyAsia/BlueOrbit leadership.
 * Titles and bios are summarized from myasiaindia.com (Leadership Ecosystem).
 *
 * Avatars use initials on a brand gradient. TODO(client): drop in real
 * headshots (add an `image` field) and confirm/expand the bios marked below.
 */
export type Leader = {
  name: string;
  title: string;
  bio: string;
};

const LEADERS: Leader[] = [
  {
    name: "K.M. Noorul Ameen",
    title: "Founder Director",
    bio: "A business strategist with 20+ years across financial services, technology, and infrastructure — advising governments and multinationals on strategic transformation.",
  },
  {
    name: "Dr. Sudhirr Paatil",
    title: "Founder Director",
    // TODO(client): confirm/expand bio.
    bio: "A founding director of the MyAsia Consulting Group, helping steer the strategy behind BlueOrbit's growth.",
  },
  {
    name: "Mr. Dhaval Joshi",
    title: "Sr. Advisor — Products & AI",
    bio: "A technology strategist with 20+ years at global and emerging-market firms — a former Tencent and Microsoft leader holding multiple AI and UX patents.",
  },
  {
    name: "Mr. Krishna Kumar",
    title: "Partner & Functional Head — IT & Automation",
    // TODO(client): confirm/expand bio.
    bio: "Leads IT and automation solutions, bringing deep enterprise delivery and process-automation expertise to client engagements.",
  },
  {
    name: "Dr. Mannmathaya Swamie",
    title: "Founder Director",
    // TODO(client): confirm/expand bio.
    bio: "A founding director of the MyAsia Consulting Group, part of the leadership steering BlueOrbit's growth.",
  },
  {
    name: "Pallavi Singh",
    title: "Business Head — Future Growth & Innovation",
    bio: "9+ years leading US HealthTech and India's BFSI sector, with deep experience across major EHR platforms and go-to-market strategy.",
  },
];

function initials(name: string) {
  // Take the first letters of the two most name-like words (skip honorifics).
  const parts = name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|K\.M\.)\s*/i, "")
    .split(/[\s.]+/)
    .filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export function Leadership() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {LEADERS.map((l, i) => (
        <Reveal key={l.name} delay={i * 0.05} className="h-full">
          <article className="flex h-full flex-col rounded-4xl border border-black/[0.07] bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-teal font-display text-lg font-bold uppercase text-white"
              >
                {initials(l.name)}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight text-text-primary">
                  {l.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-electric-blue">
                  {l.title}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-text-body">{l.bio}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
