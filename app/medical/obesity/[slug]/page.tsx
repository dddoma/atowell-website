import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clinic } from "@/data/clinic";
import { obesityArticles, obesitySources, canReadObesityArticle, getObesityArticle, getObesitySourceKeys, type ObesityArticle, type ObesitySourceKey } from "@/data/obesityArticles";
import styles from "../obesity.module.css";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return obesityArticles.filter(canReadObesityArticle).map((article) => ({ slug: article.slug }));
}
function requireArticle(slug: string): ObesityArticle {
  const article = getObesityArticle(slug);
  if (!article || !canReadObesityArticle(article)) notFound();
  return article;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = requireArticle((await params).slug);
  const published = article.review.status === "published";
  const path = `/medical/obesity/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    robots: { index: published, follow: published },
    openGraph: {
      title: article.title, description: article.description, url: path, type: "article",
      ...(article.review.status === "published" ? { publishedTime: article.review.publishedAt, modifiedTime: article.review.modifiedAt } : {}),
    },
  };
}
function formatDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}
function References({ refs, all }: { refs: ObesitySourceKey[]; all: ObesitySourceKey[] }) {
  return <p className={styles.refs}><span>근거</span>{refs.map((key) => <a key={key} href={`#source-${key}`} aria-label={`참고 자료 ${all.indexOf(key) + 1}: ${obesitySources[key].name}`}>[{all.indexOf(key) + 1}]</a>)}</p>;
}
export default async function Page({ params }: PageProps) {
  const article = requireArticle((await params).slug);
  const sourceKeys = getObesitySourceKeys(article);
  const review = article.review;
  const related = article.related.map(getObesityArticle).filter((item): item is ObesityArticle => Boolean(item && canReadObesityArticle(item)));
  const path = `/medical/obesity/${article.slug}`;
  const schema = review.status === "published" ? {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalWebPage", name: article.title, description: article.description, url: `https://atowell.kr${path}`, inLanguage: "ko-KR", datePublished: review.publishedAt, dateModified: review.modifiedAt, lastReviewed: review.reviewedAt, reviewedBy: { "@type": "Person", name: review.reviewerName, jobTitle: "원장", url: "https://atowell.kr/about" }, publisher: { "@type": "MedicalClinic", name: clinic.name, url: "https://atowell.kr" }, about: { "@type": "MedicalCondition", name: "비만" }, citation: sourceKeys.map((key) => obesitySources[key].url) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: "https://atowell.kr/" }, { "@type": "ListItem", position: 2, name: "비만·체중관리 의료정보", item: "https://atowell.kr/medical/obesity" }, { "@type": "ListItem", position: 3, name: article.title, item: `https://atowell.kr${path}` }] },
    ],
  } : null;
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/">홈</Link><span aria-hidden="true">/</span><Link href="/medical/obesity">비만·체중관리 의료정보</Link></nav>
        <header className={styles.header}>
          <div className="kicker">{article.category}</div>
          <h1>{article.title}</h1>
          <p className={styles.lead}>{article.lead}</p>
          <span className={styles.scope}>성인 환자를 위한 일반 의료정보 · 아토웰의원</span>
        </header>
        {review.status === "draft" && <aside className={styles.reviewBanner} aria-label="의학적 검토 상태"><strong>공개 전 검토용 · 원장 검토 대기</strong><p>아직 의학적 검토를 마치지 않은 초안입니다. 환자에게 전달하는 공개 자료로 사용하지 마세요.</p>{article.reviewNote && <details className={styles.reviewDetails}><summary>원장 검토 시 확인할 사항</summary><p>{article.reviewNote}</p></details>}</aside>}
        <div className={styles.answer}><strong>먼저 답하면</strong><p>{article.answer}</p><References refs={article.answerRefs} all={sourceKeys} /></div>
        <nav className={styles.toc} aria-label="이 글의 목차"><strong>이 글에서 확인할 내용</strong><ol>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>
        {article.sections.map((section) => <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul className={styles.bullets}>{section.bullets.map((bullet) => <li key={bullet.label}><strong>{bullet.label}</strong>{bullet.text}</li>)}</ul>}
          {section.table && <div className={styles.tableWrap}><table><caption>{section.table.caption}</caption><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, i) => <td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.note && <aside className={`${styles.note} ${section.note.urgent ? styles.urgent : ""}`}><strong>{section.note.title}</strong><p>{section.note.text}</p></aside>}
          <References refs={section.refs} all={sourceKeys} />
        </section>)}
        <aside className={styles.takeHome}><strong>기억할 한 문장</strong><p>{article.takeHome}</p></aside>
        <section className={styles.consult} aria-labelledby="consultation-title"><h2 id="consultation-title">다음 진료에서 함께 이야기해요</h2><p>{article.consultation}</p><Link className="text-link" href="/location">진료시간·예약·오시는 길 →</Link></section>
        {related.length > 0 && <nav className={styles.related} aria-labelledby="related-title"><h2 id="related-title">이어서 읽기</h2><div className={styles.relatedLinks}>{related.map((item) => <Link key={item.slug} href={`/medical/obesity/${item.slug}`}>{item.title} →</Link>)}<Link href="/medical/obesity">비만·체중관리 의료정보 전체 보기 →</Link></div></nav>}
        <section className={styles.sources} aria-labelledby="sources-title"><h2 id="sources-title">참고 자료</h2><ol>{sourceKeys.map((key) => <li id={`source-${key}`} key={key}><a href={obesitySources[key].url} target="_blank" rel="noreferrer">{obesitySources[key].name}</a><small>{obesitySources[key].note}</small></li>)}</ol><p className={styles.sourceNote}>자료 확인일: 2026년 9월 29일. 해외 자료는 일반 원리와 안전수칙을 설명하는 보조 근거이며, 국내 처방에는 최신 식품의약품안전처 허가사항을 우선합니다. 이 글에 모든 이상반응과 금기·주의사항이 포함된 것은 아닙니다.</p></section>
        <footer className={styles.footer} aria-label="게시 및 의학적 검토 정보">
          <p className={styles.dates}><span>최초 게시: {review.status === "published" ? <time dateTime={review.publishedAt}>{formatDate(review.publishedAt)}</time> : "공개 전"}</span><span>최종 수정: <time dateTime={review.modifiedAt}>{formatDate(review.modifiedAt)}</time></span></p>
          <p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p>
          <p>{review.status === "published" ? `이 글은 ${clinic.name} ${review.reviewerName} 원장이 의학적으로 검토했습니다.` : "의학적 검토: 아토웰의원 원장 검토 대기 중입니다."}</p>
        </footer>
        <Link href="/medical/obesity" className={styles.back}>← 비만·체중관리 의료정보 목록</Link>
      </article>
    </>
  );
}
