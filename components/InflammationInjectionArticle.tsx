import Link from "next/link";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { inflammationInjection as guide, inflammationInjectionMessage, inflammationInjectionPublished, inflammationSources } from "@/data/inflammationInjection";
import styles from "@/app/medical/obesity/obesity.module.css";
import local from "@/app/medical/skin-treatments/ipl/guide.module.css";

const explanation = [
  ["어떤 주사인가요?", "흔히 ‘염증주사’라고 부르는 치료는 트리암시놀론 아세토니드라는 코르티코스테로이드를 병변에 소량 주입하는 치료입니다. 국소 염증반응을 억제해 부기·통증·붉은 기와 솟아오른 정도를 줄이는 것이 목적입니다. 항생제나 고름을 제거하는 약은 아닙니다."],
  ["어떤 여드름에 도움이 되나요?", "크고 깊게 만져지며 통증이 있는 염증성 여드름 결절·낭종성 병변에서 고려합니다. 좁쌀여드름이나 블랙헤드를 모두 주사로 치료하지는 않습니다. 반복해서 생기는 여드름은 바르는 약·먹는 약 등 전체적인 치료가 필요합니다. NICE는 심한 염증성 낭종에 이 치료를 고려하도록 권고하지만 임상시험 근거는 제한적입니다."],
  ["모낭염에도 같은 주사를 맞나요?", "모낭염처럼 보여도 여드름·염증성 낭종·종기 등 원인이 다를 수 있습니다. 세균·곰팡이·바이러스 등에 의한 활동성 피부 감염 부위에는 스테로이드 병변내주사를 피합니다. 감염을 치료하지 못하고 악화시키거나 증상을 가릴 수 있기 때문입니다. 고름이나 감염이 의심되면 항균치료·배농 등이 필요한지 먼저 판단합니다."],
  ["언제 좋아지고 다시 맞아도 되나요?", "즉시 사라지는 치료는 아니며 보통 수일에 걸쳐 변화를 살핍니다. 크기·깊이·진단에 따라 반응이 다르고 효과가 없거나 재발할 수도 있습니다. 빨리 가라앉지 않는다고 같은 부위에 바로 반복하지 마세요. 재주사 여부와 시점은 이전 반응과 피부 상태를 확인한 뒤 정합니다."],
  ["부작용은 무엇인가요?", "주사 부위가 움푹 패이는 피부·피하조직 위축, 피부색이 밝아지거나 어두워지는 변화, 실핏줄이 도드라지는 변화가 생길 수 있습니다. 패임과 색 변화는 수주 뒤 나타나고 오래 지속되거나 남기도 합니다. 통증·멍·소량의 출혈, 드물게 감염·알레르기 반응도 가능합니다. 소량의 국소 주사는 전신 부작용 위험이 낮지만 없다고 단정할 수는 없습니다."],
  ["주사 전에 무엇을 알려야 하나요?", "이전 주사 후 패임·색 변화, 약물 알레르기, 주사 부위의 감염·상처, 복용약과 기저질환을 알려주세요. 임신·수유 여부도 말씀해 주세요. 혈액응고에 영향을 주는 약을 포함해 복용약을 임의로 끊지 마세요. 농도·양·주입 깊이는 병변에 맞게 의료진이 결정합니다."],
];
const aftercare = [
  ["오늘은 짜거나 문지르지 마세요", "병변을 손으로 짜거나 바늘로 건드리지 말고, 마사지하거나 세게 누르지 마세요. 소량의 피가 나면 깨끗한 거즈로 가볍게 압박합니다. 붙여드린 드레싱이 있다면 병원에서 안내한 시점에 제거하세요."],
  ["세안·화장은 피부 상태에 맞추세요", "출혈이 멎은 뒤에는 주사 자리를 문지르지 않고 부드럽게 씻습니다. 열린 상처·진물·출혈이 있는 곳에는 화장품을 직접 바르지 마세요. 압출·배농 등 다른 처치를 함께 받았다면 해당 상처 관리 안내를 우선합니다."],
  ["처방받은 치료는 이어가세요", "주사를 맞았다고 여드름이나 모낭염의 원인 치료가 끝난 것은 아닙니다. 바르는 약·먹는 약은 처방대로 사용하고, 자극이 심하면 사용법을 문의하세요. 항생제·스테로이드 연고를 임의로 추가하거나 중단하지 마세요."],
  ["가벼운 반응과 악화 신호를 구분하세요", "주사 직후 약간의 따끔함·소량의 출혈·멍이 있을 수 있습니다. 보통 수일에 걸쳐 변화를 살피지만, 통증과 붓기가 더 심해지는 것을 정상적인 회복 과정으로 넘기지 마세요. 좋아지지 않거나 같은 자리에서 반복되면 진단과 치료 계획을 다시 확인합니다."],
  ["수주 뒤의 피부 변화도 확인하세요", "뒤늦게 주사 자리가 움푹 패이거나 하얗게 또는 짙게 변하고, 실핏줄이 도드라질 수 있습니다. 사진을 남겨 병원에 알려주세요. 회복에는 시간이 걸리고 변화가 남을 수도 있으므로, 같은 부위에 다시 주사하기 전에 확인이 필요합니다."],
];

export default function InflammationInjectionArticle({ aftercareOnly = false }: { aftercareOnly?: boolean }) {
  const title = aftercareOnly ? guide.aftercareTitle : guide.title;
  const href = aftercareOnly ? guide.aftercareHref : guide.href;
  const sections = aftercareOnly ? aftercare : explanation;
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: title, url: `https://atowell.kr${href}`, dateModified: "2026-11-04", citation: inflammationSources.map(s => s.url) }) }} />
    <div className={local.toolbar}><nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/aesthetic">피부치료</Link><span>/</span><span aria-current="page">{aftercareOnly ? "주사 후 안내" : "염증 주사"}</span></nav><PatientMessageCopy message={inflammationInjectionMessage} /></div>
    {!inflammationInjectionPublished && <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 검토 대기</strong><p>의료 내용과 병원의 실제 시술 후 안내를 확인하기 위한 초안입니다.</p></aside>}
    <header className={styles.header}><div className="kicker">{aftercareOnly ? "집에서 다시 읽는 환자 안내" : "피부치료 의료정보"}</div><h1>{title}</h1><p className={styles.lead}>{aftercareOnly ? "주사 후 무엇을 지키고, 어떤 변화가 있을 때 연락해야 하는지 확인하세요." : "트리암시놀론 병변내주사의 효과와 한계, 주사 전후에 알아둘 내용을 정리했습니다."}</p></header>
    <div className={styles.answer}><strong>먼저 기억하세요</strong><p>{aftercareOnly ? "주사 부위를 짜거나 세게 문지르지 마세요. 붓기·통증·열감이 점점 심해지면 기다리지 말고 병원에 연락하세요. 개별 진료에서 받은 안내가 이 자료보다 우선합니다." : "크고 아픈 염증성 여드름을 진정시키는 보조치료입니다. 모든 여드름·모낭염에 필요한 것은 아니며 감염 여부와 병변 상태를 먼저 확인합니다."}</p></div>
    <div className="actions"><Link className="button primary" href={aftercareOnly ? guide.href : guide.aftercareHref}>{aftercareOnly ? "염증 주사 자세히 알아보기" : "주사 후 집에서의 관리 바로가기"} →</Link></div>
    <nav className={styles.toc} aria-label="목차"><strong>이 안내에서 확인할 내용</strong><ol>{sections.map(([heading], i) => <li key={heading}><a href={`#section-${i}`}>{heading}</a></li>)}<li><a href="#urgent">병원에 연락해야 할 때</a></li></ol></nav>
    {sections.map(([heading, text], i) => <section className={styles.section} id={`section-${i}`} key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
    <section className={styles.section} id="urgent"><h2>이런 증상은 병원에 연락하세요</h2><aside className={`${styles.note} ${styles.urgent}`}><strong>점점 심해지는 붓기·열감·통증, 퍼지는 붉음, 고름·발열</strong><p>감염 여부 등을 확인해야 하므로 당일 병원에 연락해 진료받으세요. 호흡곤란, 입술·혀·목의 부종, 실신할 듯한 느낌이 있으면 119 또는 응급실을 이용하세요.</p></aside><p>패임이나 피부색 변화도 병원에 알려주세요. 주사 부위를 다시 짜거나 임의로 약을 추가해 해결하려 하지 마세요.</p><div className="actions"><a className="button primary" href="tel:054-776-0294">아토웰의원 054-776-0294</a><Link className="button secondary" href="/location">진료시간·오시는 길</Link></div></section>
    <section className={styles.sources}><h2>참고자료</h2><ol>{inflammationSources.map(s => <li key={s.url}><a href={s.url}>{s.title}</a></li>)}</ol><p className={styles.sourceNote}>자료 확인일: 2026년 11월 4일. 시술의 적응증·부작용은 위 자료를 참고했으며, 일상 관리 안내는 원장 검토 후 병원의 실제 지침에 맞춰 확정합니다.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 최초 작성·최종 수정: 2026년 11월 4일</p><p>의학적 검토: 대기 · 최근 의학적 검토일: 미확정</p><p>이 안내는 일반적인 의료정보이며 개인의 진단과 치료를 대신하지 않습니다.</p></footer>
  </article>;
}
