import type { Metadata } from "next";
import Link from "next/link";
import { skinTreatmentArticles, canReadSkinTreatment, isSkinTreatmentPublished } from "@/data/skinTreatmentArticles";
import styles from "../obesity/obesity.module.css";

const readable = skinTreatmentArticles.filter(canReadSkinTreatment);
const hasDraft = readable.some((article) => !isSkinTreatmentPublished(article));
const hasPublished = skinTreatmentArticles.some(isSkinTreatmentPublished);
export const metadata: Metadata = {
  title: "피부치료 의료정보",
  description: "점 제거, 티눈·사마귀, 양성종양, 보톡스·필러, IPL·토닝의 치료 선택과 시술 전후에 알아둘 의료정보.",
  alternates: { canonical: "/medical/skin-treatments" },
  robots: { index: hasPublished && !hasDraft && process.env.VERCEL_ENV !== "preview", follow: !hasDraft },
};

export default function Page() {
  // Preserve the approved, content-free landing in Production until an article is approved.
  if (readable.length === 0) return (
    <div className="wrap section library-page narrow">
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>피부치료 의료정보</h1>
      <p className="lead">피부 시술과 치료 전후에 자주 묻는 질문을 준비하고 있습니다. 원장 검토를 마친 글부터 차례로 공개합니다.</p>
      <div className="notice" style={{ marginTop: 32 }}><strong>준비 중</strong><p>현재 공개된 피부치료 의료정보는 없습니다. 진료 안내와 피부질환 의료정보는 아래에서 확인하실 수 있습니다.</p></div>
      <div className="actions"><Link className="button secondary" href="/clinic/aesthetic">피부미용 진료 안내</Link><Link className="button secondary" href="/medical/dermatology">피부질환 의료정보</Link></div>
    </div>
  );
  return (
    <div className={`wrap section library-page ${styles.index}`}>
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>피부치료 의료정보</h1>
      <p className="lead">어떤 치료가 필요한지, 시술 전 무엇을 확인하고 이후 어떻게 관리할지 정리했습니다. 진료실에서 함께 보고, 집에서도 다시 읽는 자료입니다.</p>
      {hasDraft && <aside className={styles.reviewBanner} aria-label="공개 전 검토 안내"><strong>공개 전 검토용 · 원장 검토 대기</strong><p>새로 작성한 다섯 글과 의료정보 메뉴를 확인해 주세요. 승인 전에는 운영 사이트에 본문과 새 메뉴를 공개하지 않습니다.</p></aside>}
      <div className={styles.cards}>
        {skinTreatmentArticles.map((article, index) => {
          const available = canReadSkinTreatment(article);
          const card = <><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><span className={styles.status}>{article.topic} · {isSkinTreatmentPublished(article) ? "의료정보" : available ? "검토용 초안" : "준비 중"}</span><h2>{article.title}</h2><p>{article.description}</p></div><span className={styles.arrow} aria-hidden="true">{available ? "→" : ""}</span></>;
          return available ? <Link className={styles.card} key={article.slug} href={`/medical/skin-treatments/${article.slug}`}>{card}</Link> : <article className={styles.card} key={article.slug}>{card}</article>;
        })}
      </div>
      <p className={styles.guide}>이 자료는 일반적인 치료정보입니다. 실제 시술의 종류와 가능 여부는 진찰 후 확인합니다. <Link href="/clinic/aesthetic">피부미용 진료 안내 →</Link></p>
      <Link className={styles.back} href="/medical/dermatology">피부질환 의료정보도 살펴보기 →</Link>
    </div>
  );
}
