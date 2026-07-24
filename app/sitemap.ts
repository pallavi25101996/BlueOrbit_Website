import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

// TODO(client): set the real production domain in content/site.ts (SITE.url).
const ROUTES = [
  "",
  "/about",
  "/contact",
  "/solutions/ai",
  "/solutions/innovation-labs",
  "/solutions/cybersecurity",
  "/solutions/global-expansion",
  "/solutions/managed-services",
  "/solutions/tenders",
  "/products/crm",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
