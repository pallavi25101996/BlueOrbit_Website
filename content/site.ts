/**
 * Site-wide configuration: navigation, footer, and company metadata.
 *
 * Page body copy lives in each page file (pulled verbatim from
 * BlueOrbit-Website-Content-v2.md). This module holds only the
 * cross-cutting structure so nav/footer stay consistent everywhere.
 */

export const SITE = {
  name: "BlueOrbit",
  tagline: "BlueOrbit — Built to Run Your Business, Built to Grow It.",
  parent: "The Technology Innovation Arm of MyAsia Consulting.",
  // TODO(client): confirm public contact details for the footer + contact page.
  email: "info@myasiaconsultingindia.com",
  phone: "+91 00000 00000", // TODO(client): real phone number
  linkedin: "https://www.linkedin.com/company/myasia-consulting/", // TODO(client): confirm BlueOrbit LinkedIn URL
  url: "https://blueorbit.example.com", // TODO(client): production domain
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions/ai",
    children: [
      {
        label: "AI Solutions & Products",
        href: "/solutions/ai",
        description: "Enterprise products with AI in the architecture.",
      },
      {
        label: "Cybersecurity",
        href: "/solutions/cybersecurity",
        description: "Business-first, vendor-neutral security consulting.",
      },
      {
        label: "Innovation Labs",
        href: "/solutions/innovation-labs",
        description: "The consulting & R&D engine behind what's next.",
      },
      {
        label: "Global Market Expansion",
        href: "/solutions/global-expansion",
        description: "On the ground in India, and out into the world.",
      },
      {
        label: "Managed Business Services",
        href: "/solutions/managed-services",
        description: "IT, HR, and operations in one connected system.",
      },
      {
        label: "Tenders & Government Advisory",
        href: "/solutions/tenders",
        description: "Find the opportunity, prepare the bid, win it.",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// Footer navigation — pulled straight from Section 10 of the content file.
export const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI Solutions & Products", href: "/solutions/ai" },
      { label: "Innovation Labs", href: "/solutions/innovation-labs" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "Managed Business Services", href: "/solutions/managed-services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Global Market Expansion", href: "/solutions/global-expansion" },
      { label: "Tenders & Government Advisory", href: "/solutions/tenders" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      // External Group link — opens MyAsia's site.
      { label: "MyAsia Consulting Group", href: "https://myasiaconsultingindia.com" },
      { label: "Careers", href: "/contact" }, // TODO(client): dedicated careers page/URL
      { label: "Contact", href: "/contact" },
    ],
  },
];

// Homepage proof band. Text wordmarks for now — see LogoStrip note.
export const TRUST_LOGOS = [
  "NTPC",
  "GAIL",
  "Indian Oil",
  "Air India",
  "Kirloskar",
  "IRCON",
  "Fuji Healthcare",
] as const;
