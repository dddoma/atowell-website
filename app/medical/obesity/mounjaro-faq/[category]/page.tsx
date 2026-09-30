import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canReadMounjaroFaq, faqSources, mounjaroFaqCategories, mounjaroFaqPublished, mounjaroFaqReview } from "@/data/mounjaroFaq";
import styles from "../../obesity.module.css";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return canReadMounjaroFaq() ? mounjaroFaqCategories.map(({ slug }) => ({ category: slug })) : [];
}
function getCategory(slug: string) {
  const category = mounjaroFaqCategories.find((item) => item.slug === slug);
  if (!category || !canReadMounjaroFaq()) notFound();
  return category;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category);
  return { title: `마운자로 질문 · ${category.title}`, description: category.intro,
    alternates: { canonical: `/medical/obesity/mounjaro-faq/${category.slug}` },
    robots: { index: mounjaroFaqPublished && process.env.VERCEL_ENV !== "preview", follow: mounjaroFaqPublished && process.env.VERCEL_ENV !== "preview" } };
}
export default async function Page({ params }: Props) {
  const category = getCategory((await params).category);
  const used = [...new Set(category.items.flatMap((item) => item.refs))].sort((a,b) => a-b);
  const path = `/medical/obesity/mounjaro-faq/${category.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: category.title,
    url: `https://atowell.kr${path}`, inLanguage: "ko-KR", datePublished: mounjaroFaqReview.publishedAt,
    dateModified: mounjaroFaqReview.modifiedAt, lastReviewed: mounjaroFaqReview.reviewedAt,
    reviewedBy: { "@type": "Person", name: mounjaroFaqReview.reviewerName, url: "https://atowell.kr/about" },
    citation: used.map((ref) => faqSources[ref-1].url) };
  return <article className={styles.article}>
    {mounjaroFaqPublished && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/mounjaro#faq">마운자로 상담</Link><span>/</span><span>자주 묻는 질문</span></nav>
    <header className={styles.header}><div className="kicker">마운자로 · 자주 묻는 질문</div><h1>{category.title}</h1><p className={styles.lead}>{category.intro}</p></header>
    {!mounjaroFaqPublished && <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 검토 대기</strong><p>AI 작성 초안입니다. 의학적 검토 후 공개합니다.</p></aside>}
    <nav className={styles.toc} aria-label="질문 목차"><strong>이 카테고리의 9개 질문</strong><ol>{category.items.map((item,i) => <li key={item.question}><a href={`#q-${i+1}`}>{item.question}</a></li>)}</ol></nav>
    {category.items.map((item,i) => <section className={styles.section} id={`q-${i+1}`} key={item.question}><h2>{i+1}. {item.question}</h2><p>{item.answer}</p><p className={styles.refs}><span>근거</span>{item.refs.map((ref) => <a key={ref} href={`#source-${ref}`} aria-label={`참고 자료 ${ref}`}>[{ref}]</a>)}</p></section>)}
    <nav className={styles.related} aria-label="다른 카테고리"><h2>다른 질문도 살펴보세요</h2><div className={styles.relatedLinks}>{mounjaroFaqCategories.filter((item) => item.slug !== category.slug).map((item) => <Link key={item.slug} href={`/medical/obesity/mounjaro-faq/${item.slug}`}>{item.title} →</Link>)}</div></nav>
    <section className={styles.sources}><h2>참고 자료</h2><ol>{used.map((ref) => <li id={`source-${ref}`} value={ref} key={ref}><a href={faqSources[ref-1].url} target="_blank" rel="noreferrer">{faqSources[ref-1].name}</a></li>)}</ol><p className={styles.sourceNote}>자료 확인일: 2026년 9월 30일. 국내 처방에는 식품의약품안전처 허가사항을 우선합니다. 해외 학회 자료와 연구는 생활관리·장기 관리의 보조 근거입니다. 모든 금기와 이상반응을 담은 자료는 아닙니다.</p></section>
    <footer className={styles.footer}><p>의학적 검토: {mounjaroFaqReview.reviewerName} 원장 · 검토 완료</p><p>최초 게시·최근 의학적 검토·최종 수정: 2026년 9월 30일</p><p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p></footer>
    <Link className={styles.back} href="/clinic/mounjaro#faq">← 마운자로 자주 묻는 질문으로</Link>
  </article>;
}
