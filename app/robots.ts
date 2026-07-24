import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

// TODO(client): SITE.url in content/site.ts is a placeholder — set the real
// production domain so the sitemap URL below is correct.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
