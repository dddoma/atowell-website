import type { Metadata } from "next";
import Link from "next/link";
import { obesityArticles, canReadObesityArticle, isObesityArticlePublished } from "@/data/obesityPublication";
import styles from "./obesity.module.css";

const hasDraftPreview = obesityArticles.some((article) => canReadObesityArticle(article) && !isObesityArticlePublished(article));
export const metadata: Metadata = {
  title: "비만·체중관리 의료정보",
  description: "비만 진단, 체중감량 목표, 약물치료, 이상반응과 정체기에 관한 아토웰의원의 환자용 의료정보.",
  alternates: { canonical: "/medical/obesity" },
  ...(hasDraftPreview || process.env.VERCEL_ENV === "preview" ? { robots: { index: false, follow: false } } : {}),
};

export default function Page() {
  return (
    <div className={`wrap section library-page ${styles.index}`}>
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>비만·체중관리 의료정보</h1>
      <p className="lead">체중과 약물치료에 관해 진료실에서 자주 나누는 질문을 정리했습니다. 내 몸을 이해하고, 진료 후 집에서도 다시 읽을 수 있는 자료입니다.</p>
      {hasDraftPreview && <aside className={styles.reviewBanner} aria-label="공개 전 검토 안내"><strong>공개 전 검토용 · 원장 검토 대기</strong><p>검토와 승인 전에는 운영 사이트에 공개하지 않습니다.</p></aside>}
      <div className={styles.cards}>
        {obesityArticles.map((article, index) => {
          const readable = canReadObesityArticle(article);
          const content = <><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><span className={styles.status}>{isObesityArticlePublished(article) ? "의료정보" : readable ? "검토용 초안" : "준비 중"}</span><h2>{article.title}</h2><p>{article.description}</p></div><span className={styles.arrow} aria-hidden="true">{readable ? "→" : ""}</span></>;
          return readable ? <Link className={styles.card} key={article.slug} href={`/medical/obesity/${article.slug}`}>{content}</Link> : <article className={styles.card} key={article.slug}>{content}</article>;
        })}
      </div>
      <p className={styles.guide}>진료실에서 함께 보는 자료: <Link href="/medical/obesity/mounjaro-guide">체중 감량·유지 상담자료 →</Link></p>
    </div>
  );
}
