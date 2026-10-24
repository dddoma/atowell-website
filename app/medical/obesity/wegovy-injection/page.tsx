import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { canReadWegovyInjection, wegovyInjectionPublished, wegovyInjectionGuide as guide, wegovyInjectionSources as sources } from "@/data/wegovyInjection";
import styles from "../obesity.module.css";

export const metadata: Metadata = {
  title: guide.title,
  description: "국내 다회용 위고비 펜의 바늘 장착, 흐름 확인, 용량 설정, 주사 완료와 보관 방법. 노보 노디스크 공식 한국어 동영상 연결.",
  alternates: { canonical: guide.href },
  robots: { index: wegovyInjectionPublished && process.env.VERCEL_ENV !== "preview", follow: true },
};
const steps = [
  ["1. 새 바늘을 끼우세요", "손을 씻고 약 이름·처방 용량·사용기한을 확인합니다. 약액은 맑고 무색이어야 합니다. 새 바늘을 똑바로 돌려 끼우고 두 바늘 캡을 모두 벗기세요. 큰 바깥 캡은 보관하고 작은 안쪽 캡은 버립니다."],
  ["2. 새 펜의 첫 주사 전에 흐름을 확인하세요", "다이얼을 흐름 확인 기호에 맞추고 바늘을 위로 향하게 합니다. 버튼을 눌러 표시창이 0이 되고 바늘 끝에 약액이 맺히는지 확인하세요. 사용 중인 펜은 매번 확인하지 않습니다. 방울이 안 나오면 동봉 설명서의 재확인 절차를 따르고, 계속 안 나오면 사용하지 말고 문의하세요."],
  ["3. 처방 용량을 표시창으로 확인하세요", "다이얼을 돌려 처방 용량을 용량 지시선에 맞춥니다. 딸깍 소리 횟수로 용량을 맞추거나 임의로 나누지 마세요."],
  ["4. 0이 된 뒤에도 천천히 6까지 세세요", "바늘을 피부에 넣고 표시창이 보이도록 잡습니다. 버튼을 끝까지 눌러 0이 되면, 바늘을 그대로 둔 채 버튼을 계속 누르며 천천히 6까지 세고 뺍니다."],
  ["5. 바늘을 제거하고 펜 뚜껑을 닫으세요", "평평한 곳에 둔 큰 바깥 캡 안으로 바늘을 조심스럽게 넣어 덮은 뒤 돌려 분리하세요. 작은 안쪽 캡은 다시 씌우지 않습니다. 바늘을 끼운 채 보관하지 마세요."],
];
export default function Page() {
  if (!canReadWegovyInjection()) notFound();
  const schema = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: guide.title, url: `https://atowell.kr${guide.href}`, dateModified: "2026-10-24", datePublished: "2026-10-24", lastReviewed: "2026-10-24", reviewedBy: { "@type": "Person", name: "권병현" }, about: { "@type": "Drug", name: "위고비", activeIngredient: "semaglutide" }, citation: Object.values(sources) };
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/wegovy">위고비 처방상담</Link><span>/</span><span>주사 방법</span></nav>
    <PatientMessageCopy message={guide.message} />
    {!wegovyInjectionPublished && <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 검토 대기</strong><p>운영 게시 전입니다. 환자에게 전달할 링크는 게시 승인 후 사용할 수 있습니다.</p></aside>}
    <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내</div><h1>{guide.title}</h1><p className={styles.lead}>처음에는 의료진에게 사용법을 배우고, 집에서는 공식 영상과 아래 순서를 확인하세요.</p></header>
    <div className={styles.answer}><strong>한 펜으로 주 1회씩, 총 4회 사용합니다</strong><p>국내 위고비는 매번 새 바늘을 끼우는 다이얼형 펜입니다. 마운자로 일회용 펜이나 해외 위고비 일회용 자동주사기와 사용법이 다릅니다.</p></div>
    <section id="video" className={styles.section}><h2>먼저 공식 동영상을 보세요</h2><p>노보 노디스크 코리아가 처방받은 환자를 위해 제공하는 영상입니다. 열린 페이지의 <strong>‘위고비 프리필드펜’ 영상</strong>을 선택하세요. 같은 페이지 아래에는 삭센다 영상도 있습니다.</p><a className="button primary" href={sources.video} target="_blank" rel="noopener noreferrer">위고비 공식 동영상 보기 ↗</a><p className={styles.sourceNote}>제조사 원본 페이지가 새 창에서 열립니다.</p></section>
    <nav className={styles.toc} aria-label="목차"><strong>주사할 때 확인하세요</strong><ol><li><a href="#site">주사 부위</a></li><li><a href="#steps">주사하는 순서</a></li><li><a href="#check">주사가 불확실할 때</a></li><li><a href="#storage">보관과 폐기</a></li><li><a href="#schedule">주사 날짜를 놓쳤을 때</a></li></ol></nav>
    <section id="site" className={styles.section}><h2>어디에 놓나요?</h2><p>배·허벅지·위팔의 피부 아래에 놓습니다. 매번 같은 점을 피하세요. 혈관이나 근육에 주사하지 않습니다. 혼자 놓기 어려우면 교육받은 보호자에게 도움을 요청하세요.</p><p className={styles.refs}>근거: <a href={sources.label}>국내 허가사항</a></p></section>
    <section id="steps" className={styles.section}><h2>주사하는 순서</h2><ol className={styles.bullets}>{steps.map(([title, text]) => <li key={title}><strong>{title}</strong>{text}</li>)}</ol><p className={styles.refs}>근거: <a href={sources.ifu}>제조사 FlexTouch 사용설명서</a> · <a href={sources.safety}>국내 안전 사용 안내</a></p></section>
    <section id="check" className={styles.section}><h2>주사가 불확실하면 추가 투여하지 마세요</h2><p>표시창이 0으로 돌아오지 않거나, 도중에 바늘을 뺐거나, 약이 많이 샜다면 임의로 다시 맞지 말고 의료진·약사에게 문의하세요. 원인에 따라 대응이 달라집니다.</p><aside className={styles.note}><strong>펜과 바늘은 다른 사람과 공유하지 마세요</strong><p>바늘을 교체해도 펜은 본인만 사용합니다. 4회 투여 후 남아 보이는 약을 모으거나 다른 주사기로 빼내 추가 투여하지 마세요.</p></aside></section>
    <section id="storage" className={styles.section}><h2>보관과 폐기</h2><ul className={styles.bullets}><li><strong>처음 사용 전: 2~8℃ 냉장</strong>냉각부에 직접 닿지 않게 보관하세요. 얼었던 펜은 사용하지 않습니다.</li><li><strong>개봉 후: 최대 6주</strong>30℃ 이하 또는 2~8℃ 냉장 보관합니다. 개봉일을 적어 두고, 바늘을 제거한 뒤 펜 뚜껑을 닫아 빛을 차단하세요. 남았더라도 6주가 지나면 사용하지 않습니다.</li><li><strong>사용한 바늘은 안전하게 모으세요</strong>뚫리지 않는 뚜껑 있는 용기에 담아 어린이 손이 닿지 않게 두세요. 바늘과 다 쓴 펜의 최종 배출은 처방기관·약국 또는 관할 보건소 안내를 따르세요.</li></ul><p className={styles.refs}>근거: <a href={sources.label}>국내 보관·취급 기준</a></p></section>
    <section id="schedule" className={styles.section}><h2>주사 날짜를 놓쳤다면</h2><ul className={styles.bullets}><li><strong>예정일에서 5일 이내</strong>가능한 빨리 투여하고 이후 예정된 주 1회 일정으로 돌아갑니다.</li><li><strong>5일을 초과했다면</strong>놓친 주사는 건너뛰고 다음 예정일에 투여합니다. 한꺼번에 두 번 분량을 맞지 마세요.</li><li><strong>2회 이상 놓쳤다면</strong>재시작 용량을 낮춰야 할 수 있으므로 먼저 상담하세요.</li><li><strong>정기 투여 요일을 변경하려면</strong>직전 주사와 새 요일의 주사 사이를 72시간보다 길게 띄웁니다. 누락 보충 뒤 다음 날짜가 헷갈리면 처방기관에 확인하세요.</li></ul><p className={styles.refs}>근거: <a href={sources.label}>국내 용법·용량</a></p></section>
    <aside className={`${styles.note} ${styles.urgent}`}><strong>바로 진료가 필요한 증상</strong><p>호흡곤란이나 얼굴·혀의 부종, 실신이 있으면 119 또는 응급실의 도움을 받으세요. 지속되는 심한 복통이나 물도 마시기 어려운 반복 구토가 있으면 다음 투여를 보류하고 신속히 진료받으세요.</p></aside>
    <section className={styles.sources}><h2>공식 자료와 참고문헌</h2><ol><li><a href={sources.video}>노보 노디스크 코리아 · 위고비 사용법 동영상</a></li><li><a href={sources.safety}>노보 노디스크 코리아 · 위고비 안전 사용 안내</a></li><li><a href={sources.label}>식품의약품안전처 · 위고비 국내 허가사항</a></li><li><a href={sources.product}>노보 노디스크 코리아 · 용량별 제품정보</a></li><li><a href={sources.ifu}>Novo Nordisk · Wegovy FlexTouch 환자용 설명서 (영문)</a><small>다회용 펜 조작법을 확인한 보조 자료입니다. 해외 적응증·고용량 요법은 국내에 적용하지 않았습니다.</small></li></ol><p className={styles.sourceNote}>자료 확인: 2026년 10월 24일. 실제 제품에 동봉된 국내 사용설명서와 의료진의 안내를 우선하세요.</p></section>
    <section className={styles.related}><h2>함께 읽기</h2><div className={styles.relatedLinks}><Link href="/medical/obesity/glp1-side-effects-care">치료 중 불편한 증상 관리 →</Link><Link href="/clinic/wegovy">위고비 처방상담 →</Link></div></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 최초 작성·최종 수정: 2026년 10월 24일</p><p>의학적 검토: 권병현 원장 · 최근 의학적 검토·최초 게시: 2026년 10월 24일</p><p>이 안내는 개인의 진단이나 처방을 대신하지 않습니다.</p><p>아토웰의원 <a href="tel:054-776-0294">054-776-0294</a></p></footer>
  </article>;
}
