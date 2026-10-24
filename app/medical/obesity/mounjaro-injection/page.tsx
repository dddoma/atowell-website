import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { canReadMounjaroInjection, mounjaroInjectionPublished, mounjaroInjectionGuide as guide, injectionSources as sources } from "@/data/mounjaroInjection";
import styles from "../obesity.module.css";

export const metadata: Metadata = {
  title: guide.title,
  description: "국내 일회용 마운자로 프리필드펜의 주사 순서, 완료 확인, 보관과 투여를 잊었을 때의 대처. 한국릴리 공식 한국어 동영상 연결.",
  alternates: { canonical: guide.href },
  robots: { index: mounjaroInjectionPublished && process.env.VERCEL_ENV !== "preview", follow: true },
};

const steps = [
  ["1. 잠긴 상태에서 회색 캡을 빼세요", "주사할 준비가 되면 회색 바닥 캡을 똑바로 당겨 뺍니다. 캡을 다시 끼우거나 바늘을 만지지 마세요."],
  ["2. 피부에 댄 뒤 잠금을 푸세요", "투명한 바닥면을 주사 부위에 평평하게 밀착한 다음 잠금 링을 돌립니다. 피부에 대기 전에 버튼을 누르지 마세요."],
  ["3. 버튼을 누르고 최대 10초간 유지하세요", "보라색 버튼을 누른 채 펜을 안정적으로 유지하세요. 첫 번째 딸깍 소리는 시작, 두 번째 딸깍 소리는 완료를 뜻합니다. 첫 소리에 바로 떼지 마세요."],
  ["4. 회색 플런저를 확인하세요", "약을 밀어내는 회색 막대가 보이면 주사가 완료된 것입니다. 완료를 확인하고 펜을 뗍니다. 피가 조금 나면 거즈로 가볍게 누르고 문지르지 마세요."],
];

export default function Page() {
  if (!canReadMounjaroInjection()) notFound();
  const schema = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: guide.title, url: `https://atowell.kr${guide.href}`, dateModified: "2026-10-24", datePublished: "2026-10-24", lastReviewed: "2026-10-24", reviewedBy: { "@type": "Person", name: "권병현" }, about: { "@type": "Drug", name: "마운자로", activeIngredient: "tirzepatide" }, citation: Object.values(sources) };
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/mounjaro">마운자로 처방상담</Link><span>/</span><span>주사 방법</span></nav>
    <PatientMessageCopy message={guide.message} />
    {!mounjaroInjectionPublished && <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 검토 대기</strong><p>의학적 검토 및 운영 게시 전입니다. 환자에게 전달할 링크는 게시 승인 후 사용할 수 있습니다.</p></aside>}
    <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내</div><h1>{guide.title}</h1><p className={styles.lead}>처음에는 의료진에게 사용법을 배우고, 집에서는 공식 영상과 아래 순서로 다시 확인하세요.</p></header>
    <div className={styles.answer}><strong>한 펜으로 한 번 주사합니다</strong><p>이 안내는 국내 일회용 프리필드펜 기준입니다. 바늘을 따로 끼우거나 용량을 돌려 맞추는 펜이 아닙니다. 해외 퀵펜(KwikPen) 영상과 혼동하지 마세요.</p></div>

    <section id="video" className={styles.section}><h2>먼저 공식 동영상을 보세요</h2><p>한국릴리의 한국어 영상 페이지에 다음 세 편이 있습니다. 처음 사용한다면 순서대로 시청하세요.</p>
      <ol className={styles.bullets}><li><strong>① 준비 단계 · 2분 2초</strong>주사 전 준비 과정</li><li><strong>② 주사 방법 · 3분 2초</strong>실제 펜의 사용 순서</li><li><strong>③ 투여 시 주의사항 · 1분 46초</strong>투여할 때 확인할 사항</li></ol>
      <a className="button primary" href={sources.video} target="_blank" rel="noopener noreferrer">한국릴리 공식 동영상 보기 ↗</a><p className={styles.sourceNote}>새 창에서 한국릴리 영상 목록이 열립니다. 이 페이지에 영상을 복제하지 않고 원본으로 연결합니다.</p>
    </section>
    <nav className={styles.toc} aria-label="목차"><strong>주사할 때 확인하세요</strong><ol><li><a href="#prepare">준비와 주사 부위</a></li><li><a href="#steps">주사하는 순서</a></li><li><a href="#check">잘 들어갔는지 불확실할 때</a></li><li><a href="#storage">보관과 폐기</a></li><li><a href="#schedule">주사 날짜를 놓쳤을 때</a></li></ol></nav>
    <section id="prepare" className={styles.section}><h2>준비와 주사 부위</h2><ul className={styles.bullets}>
      <li>손을 씻고 펜의 약 이름·처방 용량·사용기한과 손상 여부를 확인하세요. 얼었거나 입자가 보이는 등 이상이 있으면 사용하지 말고 문의하세요.</li>
      <li>배 또는 허벅지에 피하주사합니다. 위팔 뒤쪽은 주사법 교육을 받은 보호자가 놓아야 합니다.</li>
      <li>매번 주사 위치를 바꾸세요. 주사 부위를 알코올 솜으로 닦았다면 마른 뒤 주사하세요.</li>
      <li>처방된 용량으로 주 1회 사용하며, 식사와 관계없이 투여할 수 있습니다. 용량이나 투여 간격을 임의로 바꾸지 마세요.</li>
    </ul><p className={styles.refs}>근거: <a href={sources.product}>국내 허가사항</a> · <a href={sources.ifu}>일회용 펜 설명서</a></p></section>
    <section id="steps" className={styles.section}><h2>주사하는 순서</h2><ol className={styles.bullets}>{steps.map(([title, text]) => <li key={title}><strong>{title}</strong>{text}</li>)}</ol><p className={styles.refs}>근거: <a href={sources.ifu}>Lilly 일회용 펜 사용설명서</a></p></section>
    <section id="check" className={styles.section}><h2>잘 들어갔는지 불확실한가요?</h2><p>아프지 않았거나 바늘 자국·피가 없다는 이유만으로 주사 실패라고 판단하지 마세요. 한국릴리는 <strong>보라색 버튼이 눌려 있고, 잠금 링이 해제되어 있으며, 회색 플런저가 라벨 아래로 내려왔는지</strong> 확인하도록 안내합니다.</p>
      <aside className={styles.note}><strong>불확실하면 추가로 한 펜 더 맞지 마세요</strong><p>도중에 펜을 떼었거나 약이 많이 샜거나 완료 여부가 불확실하면 펜을 안전하게 보관하고 처방 의료기관 또는 한국릴리에 문의하세요.</p></aside><p className={styles.refs}>근거: <a href={sources.faq}>한국릴리 작동 확인 안내</a></p></section>
    <section id="storage" className={styles.section}><h2>보관과 폐기</h2><ul className={styles.bullets}>
      <li>상자에 넣어 빛을 차단하고 <strong>2~8℃ 냉장 보관</strong>하세요. 냉기가 직접 닿는 곳은 피하고, 얼었던 펜은 녹여 사용하지 마세요.</li>
      <li>냉장이 어려운 경우 <strong>30℃ 이하에서 최대 21일</strong> 보관할 수 있습니다. 냉장고 밖에 보관한 날짜를 기록하고, 온도나 기간이 불확실하면 사용 전 문의하세요.</li>
      <li>사용한 펜은 재사용하지 않습니다. 바늘에 찔리지 않도록 뚫리지 않는 뚜껑 있는 용기에 모아 어린이 손이 닿지 않게 두고, 최종 배출 방법은 처방기관·약국 또는 관할 보건소에 확인하세요.</li>
    </ul><p className={styles.refs}>근거: <a href={sources.faq}>한국릴리 보관 안내</a> · <a href={sources.ifu}>펜 취급·폐기 원칙</a></p></section>
    <section id="schedule" className={styles.section}><h2>주사 날짜를 놓쳤다면</h2><ul className={styles.bullets}><li><strong>예정일에서 4일(96시간) 이내</strong>가능한 한 빨리 투여합니다.</li><li><strong>4일(96시간)이 지났다면</strong>놓친 주사는 건너뛰고 다음 예정일에 투여합니다. 두 번 분량을 한꺼번에 맞지 마세요.</li><li><strong>두 주사 사이에는 최소 3일(72시간)</strong>요일을 바꾸거나 놓친 주사를 보충할 때도 이 간격을 지키세요. 오래 중단했다면 재시작 전 상담하세요.</li></ul><p className={styles.refs}>근거: <a href={sources.product}>국내 용법·용량</a></p></section>
    <aside className={`${styles.note} ${styles.urgent}`}><strong>바로 진료가 필요한 증상</strong><p>호흡곤란, 얼굴·입술·혀의 부종이나 실신이 나타나면 즉시 119 또는 응급실의 도움을 받으세요. 지속되는 심한 복통, 반복되는 구토로 물도 마시기 어려운 경우에는 다음 투여를 보류하고 신속히 진료받으세요.</p></aside>
    <section className={styles.sources}><h2>공식 자료와 참고문헌</h2><ol>
      <li><a href={sources.video}>한국릴리 · 마운자로 주사법 동영상 3편</a></li>
      <li><a href={sources.faq}>한국릴리 · 마운자로 자주 묻는 질문</a><small>펜 작동 확인, 투여 일정, 보관 방법</small></li>
      <li><a href={sources.product}>한국릴리 · 국내 제품정보 및 식약처 허가사항 연결</a><small>용량별 제품 상세정보의 Link를 누르면 의약품안전나라로 연결됩니다.</small></li>
      <li><a href={sources.ifu}>Lilly · 일회용 프리필드펜 사용설명서 (영문 PDF)</a><small>2026년 4월 개정. 동일한 일회용 펜의 조작 순서를 확인한 보조 자료입니다. 미국의 폐기 제도를 국내에 그대로 적용하지 않습니다.</small></li>
    </ol><p className={styles.sourceNote}>자료 확인: 2026년 10월 24일. 실제 사용하는 제품에 동봉된 국내 설명서와 의료진의 안내를 우선하세요.</p></section>
    <section className={styles.related}><h2>함께 읽기</h2><div className={styles.relatedLinks}><Link href="/medical/obesity/glp1-side-effects-care">치료 중 불편한 증상 관리 →</Link><Link href="/medical/obesity/mounjaro-guide">체중 감량·유지 상담자료 →</Link></div></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 최초 작성·최종 수정: 2026년 10월 24일</p><p>의학적 검토: 권병현 원장 · 최근 의학적 검토·최초 게시: 2026년 10월 24일</p><p>이 안내는 개인의 진단이나 처방을 대신하지 않습니다.</p><p>아토웰의원 <a href="tel:054-776-0294">054-776-0294</a></p></footer>
  </article>;
}
