import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canReadIplGuide, iplGuide } from "@/data/iplGuide";
import styles from "../../obesity/obesity.module.css";
import local from "./guide.module.css";
import CopyLink from "./CopyLink";

export const metadata: Metadata = {
  title: iplGuide.title,
  description: iplGuide.description,
  alternates: { canonical: iplGuide.href },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
  openGraph: { title: iplGuide.title, description: iplGuide.description, url: iplGuide.href, type: "article" },
};

const sources = [
  { name: "차앤박피부과 이야기 · IPL(광선 치료)", url: "https://cnpstory.com/treatments/ipl/", note: "사용자가 지정한 구성 참고자료. 기존 칼럼을 재정리한 페이지이며, 타 기관의 시술 시간·횟수·병행 프로그램을 아토웰의 진료 기준으로 옮기지 않았습니다." },
  { name: "DermNet · Intense pulsed light therapy", url: "https://dermnetnz.org/topics/intense-pulsed-light-therapy", note: "여러 파장의 빛과 필터를 이용하는 원리, 색소·혈관성 병변과 시술 과정." },
  { name: "미국피부과학회(AAD) · Melasma: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/melasma-treatment", note: "기미의 진단, 광선 차단·약물치료와 시술 선택의 한계." },
  { name: "미국피부과학회(AAD) · Lasers and lights: How well do they treat rosacea?", url: "https://www.aad.org/public/diseases/rosacea/treatment/lasers-lights", note: "혈관과 붉은기 치료, 복합 관리, 시술 전 병력·약물 확인. 모든 레이저의 결과를 IPL에 동일하게 적용하지 않았습니다." },
  { name: "British Cosmetic Dermatology Group · IPL 환자 안내 (2025)", url: "https://britishcosmderm.com/resources-tag/resources-for-the-public/", note: "페이지의 ‘What is IPL?’ 항목: 준비, 회복, 화장, 색소 변화와 개인별 치료계획." },
  { name: "호주 방사선방호·원자력안전청(ARPANSA) · 광선 미용치료 소비자 안내", url: "https://www.arpansa.gov.au/understanding-radiation/sources-radiation/more-radiation-sources/lasers-and-intense-pulsed-light-0", note: "눈 보호, 피부색·태닝에 따른 위험, 화상·물집·색소 변화 및 이상반응 시 진료." },
];
function Refs({ numbers }: { numbers: number[] }) {
  return <p className={styles.refs}>근거: {numbers.map(n => <a key={n} href={`#source-${n}`}>[{n}]</a>)}</p>;
}
const sections = [
  { id: "about", title: "IPL은 어떤 치료인가요?", paragraphs: ["IPL은 Intense Pulsed Light의 약자로, 여러 파장대의 강한 빛을 짧게 나누어 피부에 전달하는 광선치료입니다. 한 가지 파장을 사용하는 레이저와는 다릅니다.", "필터와 조사 설정을 조절해 멜라닌 색소나 혈관 속 혈색소 등에 빛이 흡수되도록 합니다. 이때 생기는 열을 이용해 치료합니다. 여러 파장을 쓴다고 모든 병변을 한 번에 치료하거나 피부 손상이 전혀 없는 것은 아닙니다."], refs: [1, 2] },
  { id: "targets", title: "잡티와 붉은기에 모두 도움이 되나요?", paragraphs: ["주근깨·일광흑자처럼 비교적 얕은 갈색 반점이나 일부 늘어난 실핏줄·지속적인 붉은기에 IPL을 고려할 수 있습니다. 겉보기 색이 비슷해도 원인이 다르므로 진찰이 먼저입니다.", "혈관 치료가 주사 피부염의 염증·건조함까지 모두 해결하지는 않습니다. 피부관리와 약물 등 다른 치료를 함께 검토할 수 있습니다. 모공·잔주름·피부결 개선은 부가적인 기대효과일 수 있으나, 깊은 흉터나 처짐까지 해결하는 치료로 설명하지 않습니다."], refs: [2, 4, 5] },
  { id: "melasma", title: "기미는 IPL로 바로 지울 수 있나요?", paragraphs: ["기미는 주근깨나 일광흑자와 치료 계획이 다릅니다. 광선 차단과 피부에 맞는 약물치료가 기본이며, 상태에 따라 시술을 추가합니다. 빛·열 자극으로 오히려 더 진해질 가능성도 고려해야 합니다.", "기미와 다른 잡티가 섞여 있다면 무엇을 먼저 치료할지 상담하세요. IPL과 레이저 토닝은 같은 치료가 아니며, 무조건 함께 받거나 강도를 높인다고 더 좋은 것은 아닙니다."], refs: [3, 5] },
  { id: "before", title: "시술 전 무엇을 알려야 하나요?", paragraphs: ["최근 태닝·햇볕 화상, 쉽게 색소침착이 남는 피부, 이전 광선·레이저 시술과 이상반응을 알려주세요. 피부색과 최근 햇빛 노출에 따라 위험이 달라져 치료를 미루거나 다른 방법을 선택할 수 있습니다.", "복용약·바르는 약·화장품 목록을 가져오세요. 이소트레티노인 등 여드름약, 빛에 민감해질 수 있는 약, 항응고제 등을 임의로 중단하지 말고 의료진과 상의합니다. 임신·수유, 광과민성 질환, 입술포진이나 시술 부위의 감염·상처도 미리 알립니다.", "최근 커지거나 모양·색이 변한 반점, 저절로 피가 나는 병변은 잡티로 단정해 조사하지 않고 진단부터 받으세요."], refs: [4, 5, 6] },
  { id: "process", title: "치료는 어떻게 진행되고 몇 번 받나요?", paragraphs: ["피부 상태와 치료 목표를 확인하고 세안한 뒤, 필요에 따라 냉각 젤이나 장비의 냉각 기능을 사용합니다. 적절한 눈 보호구를 착용한 상태에서 빛을 조사합니다. 단순히 눈을 감는 것으로 눈 보호를 대신할 수 없습니다.", "순간적으로 따끔하거나 고무줄이 튕기는 듯한 느낌과 열감이 있을 수 있습니다. 예상보다 심하게 아프면 참지 말고 즉시 알려주세요. 필요하면 일부 부위의 반응을 먼저 확인합니다.", "반복 치료를 계획하는 경우가 있지만 횟수·간격은 병변, 피부색, 장비와 이전 반응에 맞춰 정합니다. 첫 시술 뒤 변화와 회복 상태를 보고 조정하며, 한 번의 치료나 정해진 패키지로 완치를 보장하지 않습니다. 중요한 일정이 있다면 회복 여유를 두고 상담하세요."], refs: [1, 2, 5, 6] },
];

export default function Page() {
  if (!canReadIplGuide()) notFound();
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: iplGuide.title, description: iplGuide.description, url: `https://atowell.kr${iplGuide.href}`, datePublished: "2026-11-02", dateModified: "2026-11-02", lastReviewed: "2026-11-02", reviewedBy: { "@type": "Person", name: "권병현" }, citation: sources.map(source => source.url) }) }} />
    <div className={local.toolbar}><nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/aesthetic">피부치료</Link><span aria-hidden="true">/</span><span aria-current="page">IPL</span></nav><CopyLink /></div>
    <header className={styles.header}><div className="kicker">진료 전후에 읽는 피부치료 안내</div><h1>IPL 치료 전후 안내</h1><p className={styles.lead}>잡티·붉은기 치료를 고민할 때,<br />기대할 수 있는 변화와 피부를 지키는 방법을 함께 확인하세요.</p><span className={styles.scope}>아토웰의원 · 일반 의료정보</span></header>
    <div className={styles.answer}><strong>먼저 기억하세요</strong><p>IPL은 일부 갈색 반점과 혈관성 붉은기에 사용하는 빛 치료입니다. 기미를 포함한 모든 색소에 같은 방법을 쓰지는 않습니다. 진단과 피부 상태에 맞춘 계획, 시술 후 광선 차단이 중요합니다.</p><Refs numbers={[2, 3, 4]} /></div>
    <nav className={styles.toc} aria-label="목차"><strong>이 글에서 확인할 내용</strong><ol>{sections.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}<li><a href="#aftercare">회복 중 반응과 집에서의 관리</a></li><li><a href="#urgent">병원에 연락해야 할 때</a></li></ol></nav>
    {sections.map(s => <section className={styles.section} id={s.id} key={s.id}><h2>{s.title}</h2>{s.paragraphs.map(p => <p key={p}>{p}</p>)}<Refs numbers={s.refs} /></section>)}
    <section className={styles.section} id="aftercare"><h2>회복 중에는 어떻게 관리하나요?</h2><p>붉음·열감·가벼운 부기, 일시적인 멍이 생길 수 있습니다. 일부 색소 부위가 더 짙어 보이거나 작은 딱지가 생긴 뒤 수일~1~2주에 걸쳐 떨어지기도 합니다. 회복 속도는 개인마다 다릅니다. 아래 반응이 심해지거나 예상 범위를 벗어나면 병원에 알려주세요.</p><ul className={styles.bullets}>
      <li><strong>열감은 부드럽게 식히기</strong>차가운 팩을 깨끗한 천으로 감싸 잠깐씩 대세요. 얼음을 피부에 직접 붙이거나 세게 누르지 마세요.</li>
      <li><strong>세안·보습은 자극 없이</strong>미지근한 물로 부드럽게 씻고 문지르지 말고 말리세요. 순한 보습제를 사용하고 딱지는 억지로 떼지 마세요. 스크럽·필링과 따가운 기능성 제품은 피부가 진정될 때까지 피하고 재개 시점을 상담하세요.</li>
      <li><strong>화장은 피부 상태를 확인한 뒤</strong>당일 화장이 모두에게 가능한 것은 아닙니다. 물집·진물·벗겨진 부위에는 화장하지 말고, 시술 후 받은 안내에 따라 재개하세요.</li>
      <li><strong>자외선과 열 자극 줄이기</strong>SPF 30 이상의 광범위 자외선 차단제와 모자·그늘을 함께 활용하세요. 피부가 벗겨졌다면 제품 사용법을 먼저 문의하세요. 회복 중 태닝은 피하고, 붉음·열감이 남아 있는 동안 사우나·뜨거운 목욕·격한 운동 등은 미룹니다.</li>
    </ul><p>처방받지 않은 연고나 각질제거제를 새로 쓰기보다 시술기관의 개별 안내를 우선하세요. 좋아진 뒤에도 햇빛이나 질환의 경과에 따라 새 색소·혈관이 생길 수 있습니다.</p><Refs numbers={[1, 3, 4, 5, 6]} /></section>
    <section className={styles.section} id="urgent"><h2>이런 변화는 병원에 알려주세요</h2><aside className={`${styles.note} ${styles.urgent}`}><strong>신속히 진료가 필요한 증상</strong><p>물집·화상처럼 벗겨진 피부, 점점 심해지는 통증이나 부기, 퍼지는 붉음·고름·발열은 시술기관에 바로 연락해 진료받으세요. 눈 통증, 갑작스러운 시야 흐림이나 시력 저하는 기다리지 말고 즉시 안과 또는 응급 진료를 받으세요.</p></aside><p>새로 하얗게 탈색된 부위가 생기거나 짙어진 색이 계속 남는 경우도 다음 시술 전에 확인이 필요합니다. 물집이나 색소 변화를 모두 ‘효과가 나타나는 과정’으로 여기고 반복 시술하지 마세요.</p><Refs numbers={[5, 6]} /></section>
    <section className={styles.consult}><h2>아토웰의원에서 상담할 때</h2><p>가장 신경 쓰이는 부위, 변화가 시작된 시점, 최근 햇빛 노출과 이전 시술 기록을 알려주세요. 실제 적용 가능한 치료와 시점은 진찰 후 정합니다. 특정 장비·병행 시술·횟수는 이 안내만으로 정하지 않습니다.</p><div className="actions"><Link className="button primary" href="/location">진료시간·오시는 길</Link><a className="button secondary" href="tel:054-776-0294">전화 문의</a></div></section>
    <nav className={styles.related} aria-label="함께 읽기"><h2>함께 읽기</h2><div className={styles.relatedLinks}><Link href="/medical/skin-treatments/ipl-toning">IPL과 토닝, 내 피부에는 어떤 치료가 맞을까요? →</Link><Link href="/clinic/aesthetic">피부치료 진료 안내 →</Link><Link href="/medical/skin-treatments">피부치료 의료정보 전체 →</Link></div></nav>
    <section className={styles.sources}><h2>참고자료</h2><ol>{sources.map((s, i) => <li id={`source-${i + 1}`} key={s.url}><a href={s.url}>{s.name}</a><small>{s.note}</small></li>)}</ol><p className={styles.sourceNote}>자료 확인일: 2026년 11월 2일. 참고 페이지의 문장·이미지를 복제하지 않고 환자 안내로 새로 정리했습니다. 해외 자료는 일반 원리와 안전관리의 근거이며, 실제 치료에는 국내 장비 허가사항과 개별 진료 지침을 따릅니다.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 의학적 검토: 권병현 원장 · 검토 완료</p><p>최초 작성·최초 게시·최종 수정·최근 의학적 검토: 2026년 11월 2일</p><p>이 글은 일반적인 의료정보로 개인의 진단과 치료를 대신하지 않습니다.</p></footer>
  </article>;
}
