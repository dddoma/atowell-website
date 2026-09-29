import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clinic } from "@/data/clinic";
import { skinTreatmentArticles, skinTreatmentSources, canReadSkinTreatment, getSkinTreatmentArticle, getSkinSourceKeys, type SkinTreatmentArticle, type SkinSourceKey } from "@/data/skinTreatmentArticles";
import styles from "../../obesity/obesity.module.css";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return skinTreatmentArticles.filter(canReadSkinTreatment).map((article) => ({ slug: article.slug }));
}
function requireArticle(slug: string): SkinTreatmentArticle {
  const article = getSkinTreatmentArticle(slug);
  if (!article || !canReadSkinTreatment(article)) notFound();
  return article;
}
function formatDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = requireArticle((await params).slug);
  const indexable = article.review.status === "published" && process.env.VERCEL_ENV !== "preview";
  const path = `/medical/skin-treatments/${article.slug}`;
  return {
    title: article.title, description: article.description, alternates: { canonical: path },
    robots: { index: indexable, follow: indexable },
    openGraph: { title: article.title, description: article.description, url: path, type: "article",
      ...(article.review.status === "published" ? { publishedTime: article.review.publishedAt, modifiedTime: article.review.modifiedAt } : {}),
    },
  };
}
function References({ refs, all }: { refs: SkinSourceKey[]; all: SkinSourceKey[] }) {
  return <p className={styles.refs}><span>근거</span>{refs.map((key) => <a key={key} href={`#source-${key}`} aria-label={`참고 자료 ${all.indexOf(key) + 1}: ${skinTreatmentSources[key].name}`}>[{all.indexOf(key) + 1}]</a>)}</p>;
}
export default async function Page({ params }: PageProps) {
  const article = requireArticle((await params).slug);
  const review = article.review;
  const sources = getSkinSourceKeys(article);
  const related = article.related.map(getSkinTreatmentArticle).filter((item): item is SkinTreatmentArticle => Boolean(item && canReadSkinTreatment(item)));
  const path = `/medical/skin-treatments/${article.slug}`;
  const schema = review.status === "published" ? {
    "@context": "https://schema.org", "@graph": [
      { "@type": "MedicalWebPage", name: article.title, description: article.description, url: `https://atowell.kr${path}`, inLanguage: "ko-KR", datePublished: review.publishedAt, dateModified: review.modifiedAt, lastReviewed: review.reviewedAt, reviewedBy: { "@type": "Person", name: review.reviewerName, jobTitle: "원장", url: "https://atowell.kr/about" }, publisher: { "@type": "MedicalClinic", name: clinic.name, url: "https://atowell.kr" }, about: { "@type": "MedicalProcedure", name: article.topic }, citation: sources.map((key) => skinTreatmentSources[key].url) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://atowell.kr/" }, { "@type": "ListItem", position: 2, name: "피부치료 의료정보", item: "https://atowell.kr/medical/skin-treatments" }, { "@type": "ListItem", position: 3, name: article.title, item: `https://atowell.kr${path}` }] },
    ],
  } : null;
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/">홈</Link><span aria-hidden="true">/</span><Link href="/medical/skin-treatments">피부치료 의료정보</Link><span aria-hidden="true">/</span><span aria-current="page">{article.topic}</span></nav>
        <header className={styles.header}><div className="kicker">피부치료 의료정보 · {article.topic}</div><h1>{article.title}</h1><p className={styles.lead}>{article.lead}</p><span className={styles.scope}>시술을 이해하기 위한 일반 의료정보 · {clinic.name}</span></header>
        {review.status === "draft" && <aside className={styles.reviewBanner} aria-label="의학적 검토 상태"><strong>공개 전 검토용 · 원장 검토 대기</strong><p>의학적 검토를 마치지 않은 초안입니다. 환자에게 전달하는 공개 자료로 사용하지 마세요.</p><details className={styles.reviewDetails}><summary>원장 검토 시 확인할 사항</summary><p>{article.reviewNote}</p></details></aside>}
        <div className={styles.answer}><strong>먼저 답하면</strong><p>{article.answer}</p><References refs={article.answerRefs} all={sources} /></div>
        {article.urgentLink && <aside className={`${styles.note} ${styles.urgent}`}><a className="text-link" href="#urgent">{article.urgentLink}</a></aside>}
        <nav className={styles.toc} aria-label="이 글의 목차"><strong>이 글에서 확인할 내용</strong><ol>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>
        {article.sections.map((section) => <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul className={styles.bullets}>{section.bullets.map((bullet) => <li key={bullet.label}><strong>{bullet.label}</strong>{bullet.text}</li>)}</ul>}
          {section.note && <aside className={`${styles.note} ${section.note.urgent ? styles.urgent : ""}`}><strong>{section.note.title}</strong><p>{section.note.text}</p></aside>}
          <References refs={section.refs} all={sources} />
        </section>)}
        <aside className={styles.takeHome}><strong>기억할 한 문장</strong><p>{article.takeHome}</p></aside>
        <section className={styles.consult} aria-labelledby="consultation-title"><h2 id="consultation-title">상담할 때 알려주세요</h2><p>{article.consultation}</p><p className={styles.sourceNote}>이 글에 소개된 모든 치료를 원내에서 시행한다는 뜻은 아닙니다. 실제 시술 가능 여부와 필요한 진료 방향은 진찰 후 확인합니다.</p><Link className="text-link" href="/location">진료시간·예약·오시는 길 →</Link></section>
        <nav className={styles.related} aria-labelledby="related-title"><h2 id="related-title">이어서 읽기</h2><div className={styles.relatedLinks}>{related.map((item) => <Link key={item.slug} href={`/medical/skin-treatments/${item.slug}`}>{item.title} →</Link>)}<Link href="/medical/skin-treatments">피부치료 의료정보 전체 보기 →</Link></div></nav>
        <section className={styles.sources} aria-labelledby="sources-title"><h2 id="sources-title">참고 자료</h2><ol>{sources.map((key) => <li id={`source-${key}`} key={key}><a href={skinTreatmentSources[key].url} target="_blank" rel="noreferrer">{skinTreatmentSources[key].name}</a><small>{skinTreatmentSources[key].note}</small></li>)}</ol><p className={styles.sourceNote}>자료 확인일: <time dateTime={article.sourcesCheckedAt}>{formatDate(article.sourcesCheckedAt)}</time>. 일반적인 원리와 안전수칙을 위한 참고자료입니다. 해외의 허가 범위나 약물 용량을 국내에 그대로 적용하지 않으며, 실제 시술에는 국내 제품별 허가사항과 개인별 진료 지침을 따릅니다.</p></section>
        <footer className={styles.footer} aria-label="게시 및 의학적 검토 정보">
          <p className={styles.dates}><span>최초 게시: {review.status === "published" ? <time dateTime={review.publishedAt}>{formatDate(review.publishedAt)}</time> : "공개 전"}</span><span>최종 수정: <time dateTime={review.modifiedAt}>{formatDate(review.modifiedAt)}</time></span>{review.status === "published" && <span>최근 의학적 검토: <time dateTime={review.reviewedAt}>{formatDate(review.reviewedAt)}</time></span>}</p>
          {review.status === "draft" && <p>초안 작성: AI 보조 · <time dateTime={review.createdAt}>{formatDate(review.createdAt)}</time></p>}
          <p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p>
          <p>{review.status === "published" ? `이 글은 ${clinic.name} ${review.reviewerName} 원장이 의학적으로 검토했습니다.` : "의학적 검토: 아토웰의원 원장 검토 대기 중입니다."}</p>
        </footer>
        <Link className={styles.back} href="/medical/skin-treatments">← 피부치료 의료정보 목록</Link>
      </article>
    </>
  );
}
