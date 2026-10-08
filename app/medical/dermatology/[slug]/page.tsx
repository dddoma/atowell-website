import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dermatologyArticles, getDermatologyPublication } from "@/data/dermatologyArticles";
import { handProtectionMessage, handProtectionPath } from "@/data/handProtectionMessage";
import { atopicCareMessage, atopicCarePath } from "@/data/atopicCareMessage";
import PatientGuideActions from "@/components/PatientGuideActions";
import styles from "./article.module.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return dermatologyArticles.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };
const basePath = "/medical/dermatology";
const formatDate = (date: string) => { const [year, month, day] = date.split("-"); return `${year}년 ${Number(month)}월 ${Number(day)}일`; };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = dermatologyArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const publication = getDermatologyPublication(article);
  const url = `${basePath}/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: "article", publishedTime: article.draft ? undefined : publication.publishedAt, modifiedTime: publication.modifiedAt },
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
  const publication = getDermatologyPublication(article);
  const url = `https://atowell.kr${basePath}/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage", "@id": url, url,
        name: article.title, description: article.description, inLanguage: "ko-KR",
        datePublished: article.draft ? undefined : publication.publishedAt,
        dateModified: publication.modifiedAt,
        publisher: { "@type": "MedicalClinic", name: "아토웰의원", url: "https://atowell.kr" },
        citation: article.references.map(({ url: referenceUrl }) => referenceUrl),
        lastReviewed: article.draft ? undefined : publication.medicalReviewCompleted ? publication.reviewedAt : undefined,
        reviewedBy: article.draft ? undefined : publication.medicalReviewCompleted ? { "@type": "Person", name: publication.reviewerName, jobTitle: "원장", url: "https://atowell.kr/about" } : undefined,
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
        {!article.draft && !publication.medicalReviewCompleted && <p role="status">의학적 검토 대기 · 일반 의료정보</p>}
        <h1>{article.title}</h1>
        <p className="lead">{article.answer}</p>
      </div>
    </section>
    <article className={`wrap section article ${styles.body}`}>
      {article.alert && <aside className={styles.alert} aria-labelledby="urgent-heading"><h2 id="urgent-heading">{article.alert.title}</h2><p>{article.alert.text}</p><Sources numbers={article.alert.sources ?? [2]} /></aside>}
      {slug === "dermatitis-eczema" && <aside id="hand-protection" className={styles.guideIntro} aria-labelledby="hand-guide-intro">
        <span className={styles.guideLabel}>생활 속 손 관리</span>
        <h2 id="hand-guide-intro">손이 자주 가렵고 갈라지나요?</h2>
        <p>손 씻기부터 보습·장갑 사용까지, 일상에서 손을 보호하는 방법을 정리했습니다.</p>
        <PatientGuideActions href={handProtectionPath} copyText={handProtectionMessage} />
      </aside>}
      {slug === "atopic-dermatitis" && <aside id="atopic-care" className={styles.guideIntro} aria-labelledby="atopic-guide-intro">
        <span className={styles.guideLabel}>매일 실천하는 아토피 관리</span>
        <h2 id="atopic-guide-intro">가려움·염증·보습, 이렇게 관리하세요</h2>
        <p>처방받은 항히스타민제의 역할, 스테로이드 연고 사용법, 피부 장벽을 위한 보습을 한눈에 확인하세요.</p>
        <PatientGuideActions href={atopicCarePath} copyText={atopicCareMessage} viewLabel="아토피 관리 안내문 바로 보기" />
      </aside>}
      <nav aria-label="이 글의 내용" className={styles.contents}><strong>이 글에서 확인할 내용</strong><ul>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul></nav>
      {article.sections.map((section) => <section key={section.id} id={section.id} className={`${styles.section}${section.guide ? ` ${styles.handGuide}` : ""}`}>
        {section.guide && <span className={styles.guideLabel}>손의 자극성피부염 · 환자 안내</span>}
        <h2>{section.title}</h2>
        {section.table && <div className={styles.tableScroll} role="region" aria-label={section.title} tabIndex={0}><table><caption className={styles.caption}>{section.title} — 진단을 돕는 참고 정보</caption><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map(([label, ...cells]) => <tr key={label}><th scope="row">{label}</th>{cells.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {section.guide && <>
          <ul className={styles.guidePrinciples} aria-label="기억할 세 가지">{section.guide.summary.map((item) => <li key={item}>{item}</li>)}</ul>
          <ol className={styles.guideSteps}>{section.guide.steps.map((step, index) => <li key={step.title}>
            <h3><span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>{step.title}</h3>
            <ul>{step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </li>)}</ol>
          <h3 className={styles.guideSubheading}>일상에서는 이렇게 해보세요</h3>
          <dl className={styles.guideSituations}>{section.guide.situations.map((situation) => <div key={situation.title}><dt>{situation.title}</dt><dd>{situation.advice}</dd></div>)}</dl>
          <div className={styles.guideAftercare}><h3>좋아진 뒤에도 손 보호를 계속하세요</h3><p>{section.guide.aftercare}</p></div>
          <p className={styles.guideVisit}>고름·심한 통증·열감·부기, 빠르게 번지는 붉어짐이나 발열이 있으면 빠른 진료가 필요합니다. 관리를 해도 낫지 않거나 자주 재발할 때도 다시 상담해 주세요. <a href="#visit">진료가 필요한 증상 보기 →</a></p>
        </>}
        <Sources numbers={section.sources} />
      </section>)}
      {article.faq.length > 0 && <section className={styles.section}><h2>자주 묻는 질문</h2><div className="faq">{article.faq.map((faq) => <article key={faq.question} id={faq.id} className={styles.faqItem}><h3>{faq.question}</h3><p>{faq.answer}</p><Sources numbers={faq.sources} />{faq.links && <ul className={styles.related}>{faq.links.map((link) => <li key={link.href}><Link href={link.href}>{link.title} →</Link></li>)}</ul>}</article>)}</div></section>}
      <section className={styles.section}><h2>함께 읽어보세요</h2><ul className={styles.related}>{article.related.map((link) => <li key={link.href}><Link href={link.href}>{link.title} →</Link></li>)}</ul></section>
      <section className={styles.section} aria-labelledby="references-heading"><h2 id="references-heading">참고문헌·근거자료</h2><ol className={`milia-sources ${styles.references}`}>{article.references.map((reference, index) => <li id={`reference-${index + 1}`} key={reference.url}><a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.title}</a></li>)}</ol></section>
      <footer className="meta medical-article-meta" aria-label="게시 및 작성 정보">
        {article.draft ? <p>최초 작성: {formatDate(article.draftDates?.createdAt ?? publication.modifiedAt)} · 최종 수정: {formatDate(publication.modifiedAt)} · 게시 전</p> : <p className="medical-article-dates"><span>최초 게시: <time dateTime={publication.publishedAt}>{formatDate(publication.publishedAt)}</time></span><span>최종 수정: <time dateTime={publication.modifiedAt}>{formatDate(publication.modifiedAt)}</time></span></p>}
        <p>작성: AI 보조 작성 · 근거자료 확인: <time dateTime={publication.sourceCheckedAt}>{formatDate(publication.sourceCheckedAt)}</time></p>
        {publication.medicalReviewCompleted && <><p>이 글은 아토웰의원 {publication.reviewerName} 원장이 의학적으로 검토했습니다.</p>
        <p>최근 의학적 검토: <time dateTime={publication.reviewedAt}>{formatDate(publication.reviewedAt)}</time></p>
        </>}
        {!publication.medicalReviewCompleted && <p>의학적 검토: 대기 중</p>}
        <p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p>
      </footer>
      <div className="actions"><Link className="button secondary" href={basePath}>피부질환 의료정보로 돌아가기</Link><Link className="button primary" href="/location#reservation">진료 예약 안내</Link></div>
    </article>
  </>;
}
