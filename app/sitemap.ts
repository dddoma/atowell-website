import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atowell.kr";
  const routes = [
    ["", 1],
    ["/about", 0.7],
    ["/clinic/dermatology", 0.9],
    ["/clinic/aesthetic", 0.8],
    ["/clinic/obesity", 0.9],
    ["/clinic/mounjaro", 0.9],
    ["/clinic/wegovy", 0.9],
    ["/medical/obesity", 0.8],
    ["/medical/dermatology", 0.8],
    ["/medical/dermatology/seborrheic-dermatitis", 0.8],
    ["/price", 0.9],
    ["/location", 0.9],
  ] as const;

  return routes.map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-09-24"),
    changeFrequency: path.includes("/medical/") ? "weekly" : "monthly",
    priority,
  }));
}