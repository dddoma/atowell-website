import { skinTreatmentArticles as reviewedArticles, type SkinTreatmentArticle } from "./skinTreatmentArticles";

export { skinTreatmentSources, isSkinTreatmentPublished, canReadSkinTreatment, getSkinSourceKeys } from "./skinTreatmentArticles";
export type { SkinTreatmentArticle, SkinTreatmentReview, SkinTreatmentSection, SkinSourceKey } from "./skinTreatmentArticles";

// Physician approval: 2026-09-29, PR #12.
// Preserve the reviewed article content verbatim; only publication metadata changes.
// This explicit list must not publish future drafts automatically.
const approvedSlugs = new Set([
  "mole-removal",
  "corns-warts",
  "benign-tumors",
  "botox-fillers",
  "ipl-toning",
]);

export const skinTreatmentArticles: SkinTreatmentArticle[] = reviewedArticles.map((article) => (
  approvedSlugs.has(article.slug)
    ? {
        ...article,
        review: {
          ...article.review,
          status: "published",
          publishedAt: "2026-09-29",
          modifiedAt: "2026-09-29",
          reviewedAt: "2026-09-29",
          reviewerName: "권병현",
        },
      }
    : article
));

export function getSkinTreatmentArticle(slug: string): SkinTreatmentArticle | undefined {
  return skinTreatmentArticles.find((article) => article.slug === slug);
}
