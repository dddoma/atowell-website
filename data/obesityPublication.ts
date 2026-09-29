import { obesityArticles as content, type ObesityArticle, type ObesityReview } from "./obesityArticles";

// Public consumers use this module. Approval records are separate from the reviewed text.
// Physician approval received on 2026-09-29 for the five articles in PR #11.
const approved: Extract<ObesityReview, { status: "published" }> = {
  status: "published", publishedAt: "2026-09-29", modifiedAt: "2026-09-29",
  reviewedAt: "2026-09-29", reviewerName: "권병현",
};
const publications: Partial<Record<string, ObesityReview>> = {
  diagnosis: { ...approved }, goals: { ...approved }, medication: { ...approved },
  "side-effects": { ...approved }, plateau: { ...approved },
};
export const obesityArticles: ObesityArticle[] = content.map((article) => ({
  ...article, review: publications[article.slug] ?? article.review,
}));
export function getObesityArticle(slug: string): ObesityArticle | undefined {
  return obesityArticles.find((article) => article.slug === slug);
}
export { obesitySources, canReadObesityArticle, isObesityArticlePublished, getObesitySourceKeys } from "./obesityArticles";
export type { ObesityArticle, ObesitySourceKey } from "./obesityArticles";
