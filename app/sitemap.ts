import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { absoluteUrl } from "@/lib/site";
// Empty medical-library pages and unreviewed drafts are intentionally excluded.
// Add lastModified only when an actual content modification date is tracked.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...navigation.map(item => item.href)].map(path => ({ url: absoluteUrl(path) }));
}
