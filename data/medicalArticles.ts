export type MedicalArticleInfo = {
  publishedAt: string;
  modifiedAt: string;
  reviewerName: string;
};

// Review attribution is recorded per article after the physician's confirmation.
export const medicalArticles = {
  milia: {
    publishedAt: "2026-09-29",
    modifiedAt: "2026-09-29",
    reviewerName: "권병현",
  },
  seborrheicDermatitis: {
    publishedAt: "2026-09-24",
    modifiedAt: "2026-09-29",
    reviewerName: "권병현",
  },
} satisfies Record<string, MedicalArticleInfo>;
