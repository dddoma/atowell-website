import { dermatologyArticles, dermatologyPublication } from "@/data/dermatologyArticles";
import type { MetadataRoute } from "next";
import { medicalArticles } from "@/data/medicalArticles";
import { obesityArticles } from "@/data/obesityPublication";
import { skinTreatmentArticles } from "@/data/skinTreatmentPublication";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atowell.kr";
  const routes = [
    ["", 1], ["/about", 0.7], ["/clinic/dermatology", 0.9], ["/clinic/aesthetic", 0.8],
    ["/clinic/obesity", 0.9], ["/clinic/mounjaro", 0.9], ["/clinic/wegovy", 0.9],
    ["/medical/obesity", 0.8], ["/medical/obesity/mounjaro-guide", 0.8],
    ["/medical/dermatology", 0.8], ["/medical/dermatology/milia", 0.8],
    ["/medical/dermatology/seborrheic-dermatitis", 0.8], ["/price", 0.9], ["/location", 0.9],
  ] as const;
  const medicalUpdateDates: Record<string, string> = {
    "/clinic/dermatology": "2026-09-29", "/clinic/aesthetic": "2026-09-29", "/clinic/obesity": "2026-09-29",
    "/medical/obesity": "2026-09-29", "/medical/obesity/mounjaro-guide": "2026-09-29",
    "/medical/dermatology": dermatologyPublication.modifiedAt,
    "/medical/dermatology/milia": medicalArticles.milia.modifiedAt,
    "/medical/dermatology/seborrheic-dermatitis": medicalArticles.seborrheicDermatitis.modifiedAt,
  };
  const entries: MetadataRoute.Sitemap = routes.map(([path, priority]) => ({
    url: `${base}${path}`, lastModified: new Date(medicalUpdateDates[path] ?? "2026-09-24"),
    changeFrequency: path.includes("/medical/") ? "weekly" : "monthly", priority,
  }));
  for (const article of obesityArticles) {
    if (article.review.status !== "published") continue;
    entries.push({ url: `${base}/medical/obesity/${article.slug}`, lastModified: new Date(article.review.modifiedAt), changeFrequency: "monthly", priority: 0.8 });
  }
  let skinLastModified = "";
  for (const article of skinTreatmentArticles) {
    if (article.review.status !== "published") continue;
    entries.push({ url: `${base}/medical/skin-treatments/${article.slug}`, lastModified: new Date(article.review.modifiedAt), changeFrequency: "monthly", priority: 0.8 });
    if (article.review.modifiedAt > skinLastModified) skinLastModified = article.review.modifiedAt;
  }
  if (skinLastModified) entries.push({ url: `${base}/medical/skin-treatments`, lastModified: new Date(skinLastModified), changeFrequency: "monthly", priority: 0.8 });
  for (const article of dermatologyArticles) {
    entries.push({ url: `${base}/medical/dermatology/${article.slug}`, lastModified: new Date(dermatologyPublication.modifiedAt), changeFrequency: "monthly", priority: 0.8 });
  }
  return entries;
}
