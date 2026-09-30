import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dermatologyArticles, dermatologyPublication } from "@/data/dermatologyArticles";
import styles from "./article.module.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return dermatologyArticles.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };
const basePath = "/medical/dermatology";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = dermatologyArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const url = `${basePath}/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: "article", publishedTime: article.draft ? undefined : dermatologyPublication.publishedAt, modifiedTime: dermatologyPublication.modifiedAt },
    ...((article.draft || process.env.VERCEL_ENV === "preview") ? { robots: { index: false, follow: false } } : {}),
  };
}

function Sources({ numbers }: { numbers: number[] }) {
  return <p className={styles.sources}>근거: {numbers.map((number, index) => <span key={number}>{index > 0 && ", "}<a href={`#reference-${number}`} aria-label={`참고문헌 ${number}`}>[{number}]</a></span>)}</p>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = dermatologyArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const url = `https://atowell.kr${basePath}/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage", "@id": url, url,
        name: article.title, description: article.description, inLanguage: "ko-KR",
        datePublished: article.draft ? undefined : dermatologyPublication.publishedAt,
        dateModified: dermatologyPublication.modifiedAt,
        publisher: { "@type": "MedicalClinic", name: "아토웰의원", url: "https://atowell.kr" },
        citation: article.references.map(({ url: referenceUrl }) => referenceUrl),
        lastReviewed: article.draft ? undefined : dermatologyPublication.reviewedAt,
        reviewedBy: article.draft ? undefined : { "@type": "Person", name: dermatologyPublication.reviewerName, jobTitle: "원장", url: "https://atowell.kr/about" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: "https://atowell.kr" },
          { "@type": "ListItem", position: 2, name: "피부질환 의료정보", item: `https://atowell.kr${basePath}` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="page-hero care-hero">
      <div className={`wrap article ${styles.hero}`}>
        <nav aria-label="현재 위치" className={styles.breadcrumb}><Link href="/">홈</Link><span> / </span><Link href={basePath}>피부질환 의료정보</Link></nav>
        <div className="kicker">SKIN GUIDE</div>
        {article.draft && <p role="status">검토용 초안 · 원장 의학적 검토 대기 · 아직 게시되지 않은 자료입니다.</p>}
        <h1>{article.title}</h1>
        <p className="lead">{article.answer}</p>
      </div>
    </section>
    <article className={`wrap section article ${styles.body}`}>
      {article.alert && <aside className={styles.alert} aria-labelledby="urgent-heading"><h2 id="urgent-heading">{article.alert.title}</h2><p>{article.alert.text}</p><Sources numbers={[2]} /></aside>}
      <nav aria-label="이 글의 내용" className={styles.contents}><strong>이 글에서 확인할 내용</strong><ul>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul></nav>
      {article.sections.map((section) => <section key={section.id} id={section.id} className={styles.section}>
        <h2>{section.title}</h2>
        {section.table && <div className={styles.tableScroll} role="region" aria-label={section.title} tabIndex={0}><table><caption className={styles.caption}>{section.title} — 진단을 돕는 참고 정보</caption><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map(([label, ...cells]) => <tr key={label}><th scope="row">{label}</th>{cells.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        <Sources numbers={section.sources} />
      </section>)}
      <section className={styles.section}><h2>자주 묻는 질문</h2><div className="faq">{article.faq.map((faq) => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p><Sources numbers={faq.sources} /></article>)}</div></section>
      <section className={styles.section}><h2>함께 읽어보세요</h2><ul className={styles.related}>{article.related.map((link) => <li key={link.href}><Link href={link.href}>{link.title} →</Link></li>)}</ul></section>
      <section className={styles.section} aria-labelledby="references-heading"><h2 id="references-heading">참고문헌·근거자료</h2><ol className={`milia-sources ${styles.references}`}>{article.references.map((reference, index) => <li id={`reference-${index + 1}`} key={reference.url}><a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.title}</a></li>)}</ol></section>
      <footer className="meta medical-article-meta" aria-label="게시 및 작성 정보">
        {article.draft ? <p>최초 작성·최종 수정: 2026년 9월 30일 · 게시 전</p> : <p className="medical-article-dates"><span>최초 게시: <time dateTime={dermatologyPublication.publishedAt}>2026년 9월 30일</time></span><span>최종 수정: <time dateTime={dermatologyPublication.modifiedAt}>2026년 9월 30일</time></span></p>}
        <p>작성: AI 보조 작성 · 근거자료 확인: <time dateTime={dermatologyPublication.sourceCheckedAt}>2026년 9월 30일</time></p>
        {!article.draft && <><p>이 글은 아토웰의원 {dermatologyPublication.reviewerName} 원장이 의학적으로 검토했습니다.</p>
        <p>최근 의학적 검토: <time dateTime={dermatologyPublication.reviewedAt}>2026년 9월 30일</time></p>
        </>}
        {article.draft && <p>의학적 검토: 대기 중</p>}
        <p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p>
      </footer>
      <div className="actions"><Link className="button secondary" href={basePath}>피부질환 의료정보로 돌아가기</Link><Link className="button primary" href="/location#reservation">진료 예약 안내</Link></div>
    </article>
  </>;
}
