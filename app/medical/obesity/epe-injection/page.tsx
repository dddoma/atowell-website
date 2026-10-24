import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { EpeReviewBanner, EpeFooter } from "@/components/EpeEditorial";
import { canReadEpe, epePublished, epeInjectionGuide as guide, epeSources } from "@/data/epe";
import styles from "../obesity.module.css";
export const metadata: Metadata = { title: guide.title, description: "에페 일회용 오토인젝터의 복부 주사 순서와 완료 확인, 보관 안내. 한미약품 공식 그림 설명서 연결.", alternates: { canonical: guide.href }, robots: { index: epePublished && process.env.VERCEL_ENV !== "preview", follow: epePublished } };
const steps = [
  ["1. 준비와 제품 확인", "손을 씻고 약 이름·처방 용량·사용기한을 확인하세요. 냉장고에서 꺼낸 제품은 상자째 실온에 약 30분 둡니다. 흔들지 마세요. 약액이 무색투명하지 않거나 입자가 보이면 사용하지 않습니다."],
  ["2. 복부를 선택하고 소독", "배꼽에서 5cm 이내와 붉음·열감·압통·멍·흉터·손상 부위를 피하고 위치를 바꾸세요. 알코올로 닦아 말린 뒤 만지지 않습니다."],
  ["3. 캡을 빼고 수직으로 밀착", "몸통을 잡고 보호용 캡을 똑바로 당겨 벗깁니다. 확인창이 보이도록 잡고 피부에 90도로 밀착하세요."],
  ["4. 버튼을 누르고 완료 확인", "밀착한 채 버튼을 끝까지 누릅니다. 첫 딸깍은 시작 신호입니다. 두 번째 딸깍과 노란 막대가 창을 완전히 채운 것을 모두 확인한 뒤, 약 5초 더 밀착하세요."],
  ["5. 제거와 폐기", "수직으로 들어 올리고 솜·거즈로 가볍게 누르세요. 문지르지 않습니다. 사용한 기기는 재사용하지 말고 안전하게 모아 처방기관·약국의 폐기 안내를 따르세요."],
];
export default function Page() {
  if (!canReadEpe()) notFound();
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: "에페 주사 놓는 방법", url: "https://atowell.kr/medical/obesity/epe-injection", dateModified: "2026-10-24", datePublished: "2026-10-24", lastReviewed: "2026-10-24", reviewedBy: { "@type": "Person", name: "권병현" }, about: { "@type": "Drug", name: "에페", activeIngredient: "efpeglenatide" }, citation: epeSources.slice(0,3).map(s => s.url) }) }} />
    <nav className={styles.breadcrumb}><Link href="/clinic/epe">에페 안내</Link><span>/</span><span>주사 방법</span></nav>
    <PatientMessageCopy message={guide.message} /><EpeReviewBanner />
    <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내</div><h1>{guide.title}</h1><p className={styles.lead}>첫 주사는 의료인의 지도 아래 시행하세요. 이 안내는 실습 교육을 대신하지 않습니다.</p></header>
    <div className={styles.answer}><strong>1개를 한 번 사용합니다</strong><p>에페는 바늘이 내장된 일회용 오토인젝터입니다. 복부에 주사하며 다른 제품의 조작법을 적용하지 마세요.</p></div>
    <section className={styles.section}><h2>공식 그림 설명서</h2><a className="button primary" href={epeSources[2].url+"#page=2"} target="_blank" rel="noopener noreferrer">한미약품 주사 순서 그림 보기 ↗</a><p className={styles.sourceNote}>PDF 2쪽의 주사 그림을 확인하세요. 2026년 10월 24일 확인 범위에서는 에페 전용 공식 주사법 동영상의 공개 주소를 확보하지 못했습니다.</p></section>
    <section className={styles.section} id="steps"><h2>주사하는 순서</h2><ol className={styles.bullets}>{steps.map(([title,text]) => <li key={title}><strong>{title}</strong>{text}</li>)}</ol><p className={styles.refs}><a href={epeSources[2].url}>근거: 제조사 제품설명서 · 적용상의 주의</a></p></section>
    <aside className={`${styles.note} ${styles.urgent}`}><strong>주입이 불확실하면 추가 투여하지 마세요</strong><p>도중에 뺐거나 약이 샜거나 완료 표시가 불확실하면 의료진·약사에게 문의하세요.</p></aside>
    <section className={styles.section}><h2>보관과 일정</h2><p>상자에 넣어 2~8℃ 냉장 보관하고 냉동하지 마세요. 투여를 놓쳤다면 에페의 누락 기준을 확인하세요.</p><Link className="text-link" href="/medical/obesity/epe-faq/dose-and-schedule">놓친 주사·요일 변경·재시작 안내 →</Link></section>
    <section className={styles.sources}><h2>공식 자료</h2><ol>{epeSources.slice(0,3).map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>)}</ol><p className={styles.sourceNote}>자료 확인: 2026년 10월 24일. 실제 동봉 설명서와 최신 국내 허가사항을 우선하세요.</p></section>
    <section className={styles.related}><h2>함께 읽기</h2><div className={styles.relatedLinks}><Link href="/medical/obesity/epe-faq/side-effects">부작용과 진료가 필요한 증상 →</Link><Link href="/clinic/epe#faq">에페 자주 묻는 질문 →</Link></div></section><EpeFooter />
  </article>;
}
