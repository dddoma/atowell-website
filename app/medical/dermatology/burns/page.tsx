import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { burnsGuide, burnsMessage, canReadBurns } from "@/data/burnsGuide";
import styles from "../../obesity/obesity.module.css";
import local from "./guide.module.css";

export const metadata: Metadata = {
  title: burnsGuide.title, description: burnsGuide.description,
  alternates: { canonical: burnsGuide.href }, robots: { index: false, follow: false },
  openGraph: { title: burnsGuide.title, description: burnsGuide.description, url: burnsGuide.href, type: "article" },
};
const sources = [
  ["NHS · Burns and scalds", "https://www.nhs.uk/conditions/burns-and-scalds/"],
  ["American Burn Association · Burn Patient Referral Guidelines", "https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral"],
  ["Gateshead Health NHS · Burns and Scalds", "https://www.gatesheadhealth.nhs.uk/resources/burns-and-scalds/"],
];
function Refs({ numbers }: { numbers: number[] }) { return <p className={styles.refs}>근거: {numbers.map(n => <a key={n} href={`#source-${n}`}>[{n}] </a>)}</p>; }
export default function Page() {
  if (!canReadBurns()) notFound();
  return <article className={styles.article}>
    <div className={local.toolbar}><nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/medical/dermatology">피부질환 의료정보</Link><span aria-hidden="true">/</span><span aria-current="page">화상</span></nav><PatientMessageCopy message={burnsMessage} label="화상 진료 후 안내 문구와 링크 복사" /></div>
    <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 의학적 검토 대기</strong><p>의학적 검토와 공개 승인 전에는 환자에게 전달하지 마세요. 링크 복사 기능도 검토를 위한 시연용입니다.</p></aside>
    <header className={styles.header}><div className="kicker">피부질환 의료정보 · 진료 후 안내</div><h1>화상 치료와 관리</h1><p className={styles.lead}>처음 데었을 때의 대처부터<br />진료 후 집에서 상처를 돌보는 방법까지</p></header>
    <div className={styles.answer}><strong>처음 데었다면</strong><p>뜨거운 물·물체에 데었다면 열원에서 벗어나 화상 부위를 시원한 흐르는 물로 20분간 식히세요. 얼음이나 민간요법은 사용하지 마세요. 넓거나 깊은 화상, 호흡 이상은 즉시 응급진료가 필요합니다.</p><Refs numbers={[1, 2]} /></div>
    <nav className={styles.toc} aria-label="목차"><strong>필요한 내용 바로 찾기</strong><ol><li><a href="#first-aid">화상 초기처치</a></li><li><a href="#urgent">즉시 진료가 필요한 경우</a></li><li><a href="#blisters">물집과 병원 치료</a></li><li><a href="#aftercare">진료 후 집에서 읽는 안내문</a></li><li><a href="#revisit">예정일 전에 다시 진료받아야 할 때</a></li><li><a href="#questions">자주 묻는 질문</a></li></ol></nav>
    <section className={styles.section} id="first-aid"><h2>데었을 때 가장 먼저 무엇을 하나요?</h2><ul className={styles.bullets}>
      <li><strong>안전하게 열원에서 벗어나기</strong>전기 사고는 전원을 차단하기 전 다친 사람을 직접 만지지 마세요. 화학물질·전기 화상은 겉보기보다 깊을 수 있어 즉시 응급진료를 받으세요.</li>
      <li><strong>열에 데인 부위만 20분간 식히기</strong>가능한 빨리, 손상 후 3시간 이내에 시원한 흐르는 수돗물로 식히세요. 얼음·얼음물은 피하고 나머지 몸은 따뜻하게 유지하세요. 특히 소아·고령자와 넓은 화상은 저체온에 주의하며, 냉각 때문에 응급 도움 요청을 늦추지 마세요.</li>
      <li><strong>조이는 물건 제거하기</strong>붓기 전에 반지·시계와 붙지 않은 옷을 조심스럽게 제거하세요. 피부에 달라붙은 옷은 억지로 떼지 마세요.</li>
      <li><strong>깨끗하게 가볍게 덮기</strong>식힌 뒤 깨끗하고 상처에 달라붙지 않는 거즈 등으로 보호하세요. 접착면을 상처에 붙이거나 팔다리를 조이게 감지 마세요. 치약·된장·소주·기름을 바르지 마세요.</li>
    </ul><Refs numbers={[1, 2, 3]} /></section>
    <section className={styles.section} id="urgent"><h2>어떤 화상은 바로 진료받아야 하나요?</h2><aside className={`${styles.note} ${styles.urgent}`}><strong>호흡 이상·의식 저하는 119</strong><p>연기를 마신 뒤 숨이 차거나 목소리가 변함, 입·코 주변의 그을음, 의식 저하가 있으면 즉시 119에 연락하세요. 넓거나 깊은 화상, 얼굴·눈 주변·생식기 화상, 화학물질·전기 화상도 즉시 응급실에서 평가받으세요.</p></aside><p>손·발·관절 부위, 팔다리를 한 바퀴 두르는 화상, 하얗거나 검고 가죽처럼 보이는 상처, 감각이 둔한 상처는 작아도 신속한 평가가 필요합니다. 아프지 않다고 가벼운 화상은 아닙니다.</p><p>소아·고령자, 당뇨·혈액순환장애·면역저하가 있는 분은 작은 화상도 일찍 상담하세요. 물집이 생기거나 깊이를 모르겠다면 집에서만 지켜보기보다 진료받으세요.</p><Refs numbers={[1, 2]} /></section>
    <section className={styles.section} id="blisters"><h2>물집은 터뜨리나요? 병원에서는 무엇을 하나요?</h2><p>물집은 집에서 일부러 터뜨리지 마세요. 이미 터졌다면 남은 피부를 뜯지 말고 깨끗하게 보호하세요. 큰 물집이나 움직임을 방해하는 물집은 의료진이 상태를 확인하고 필요한 처치를 정합니다.</p><p>화상의 깊이는 처음 모습만으로 판단하기 어려울 수 있습니다. 피부 전체가 손상되면 통증이 오히려 적을 수도 있습니다. 깊이와 범위, 위치에 따라 전문기관 치료나 수술이 필요할 수 있습니다.</p><p>진료에서는 상처를 확인한 뒤 세척과 드레싱, 통증 조절 등 필요한 치료를 정합니다. 이후 상처 변화에 따라 다시 평가하고 치료를 조정할 수 있습니다.</p><Refs numbers={[1, 2, 3]} /></section>
    <section className={styles.section} id="aftercare"><h2>진료 후 집에서 읽는 환자 안내문</h2><div className={styles.answer}><strong>진료 때 받은 개별 안내를 먼저 따르세요</strong><p>드레싱 종류와 상처 상태마다 세척·교체 방법이 다릅니다. 다음 방문일과 집에서 교체해도 되는지, 물이 닿아도 되는지 확인해 두세요.</p></div><ul className={styles.bullets}>
      <li><strong>드레싱은 깨끗하고 마르게</strong>임의로 벗기지 말고 정해진 교체·재진 일정을 지키세요. 젖거나 더러워짐, 풀림, 진물이 많이 새는 경우 병원에 연락해 교체가 필요한지 확인하세요. 씻을 때는 안내받은 방법으로 보호하고 드레싱을 물에 담그지 마세요.</li>
      <li><strong>집에서 교체하도록 안내받았다면</strong>손을 씻고 지정된 재료와 방법을 따르세요. 붙은 드레싱을 힘으로 떼지 말고 병원에 문의하세요. 임의의 소독약·연고를 추가하지 말고 처방받은 치료를 안내대로 사용하세요.</li>
      <li><strong>통증·붓기 관리</strong>처방·안내받은 진통제를 정해진 방법으로 복용하세요. 같은 성분의 약을 겹쳐 먹지 마세요. 손발은 편하게 올려두면 부기에 도움이 됩니다. 관절은 의료진이 허용한 범위에서 부드럽게 움직이고 상처를 억지로 당기거나 마찰하지 마세요.</li>
      <li><strong>회복 중 피부 보호</strong>물집이나 붙어 있는 피부를 뜯지 마세요. 피부가 아물면서 건조하고 가렵다면 사용할 보습제를 의료진에게 문의하세요. 열린 상처에 일반 화장품을 바르지 마세요.</li>
    </ul><Refs numbers={[1, 3]} /></section>
    <section className={styles.section} id="revisit"><h2>예정일 전에 다시 진료받아야 할 때</h2><aside className={`${styles.note} ${styles.urgent}`}><strong>이런 변화는 당일 연락·진료가 필요합니다</strong><p>점점 심해지는 통증·붓기, 주변으로 퍼지는 붉음·열감, 고름·악취·발열, 드레싱이 젖거나 진물이 많이 새는 경우입니다. 손발이 창백하거나 차가워짐, 저림·감각 저하가 새로 생기면 즉시 응급진료를 받으세요. 열과 함께 심하게 처지거나 의식이 흐려지면 119에 연락하세요.</p></aside><p>상처가 낫지 않거나 더 깊어 보임, 움직임 제한이 생겨도 다시 확인하세요. 작은 화상은 약 2주 안에 아물기도 하지만 깊이에 따라 더 오래 걸립니다. 회복이 늦으면 재평가가 필요합니다. 증상이 좋아져도 안내받은 재진일을 지켜주세요.</p><div className="actions"><a className="button primary" href="tel:054-776-0294">아토웰의원 전화 문의</a><Link className="button secondary" href="/location">진료시간·오시는 길</Link></div><p>진료시간 밖에 악화되면 응급실을 이용하세요.</p><Refs numbers={[1, 2, 3]} /></section>
    <section className={styles.section} id="questions"><h2>자주 묻는 질문</h2><h3>매일 드레싱을 갈아야 하나요?</h3><p>상처와 드레싱마다 교체 간격이 다릅니다. 임의로 매일 벗기지 말고 진료 때 안내받은 일정을 따르세요.</p><h3>무엇을 바르면 좋을까요?</h3><p>처음 데었을 때는 충분한 냉각이 먼저입니다. 민간요법이나 임의의 크림 대신 진료 후 정한 방법으로 관리하세요. 모든 화상에 같은 약이나 연고가 필요한 것은 아닙니다.</p><Refs numbers={[1, 3]} /></section>
    <section className={styles.sources}><h2>근거 및 참고자료</h2><ol>{sources.map(([title, url], i) => <li id={`source-${i + 1}`} key={url}><a href={url}>{title}</a></li>)}</ol><p className={styles.sourceNote}>근거 확인일: 2026년 11월 4일. 해외 응급 연락처는 국내 119·응급실 안내로 조정했습니다. 전문기관 의뢰 기준은 자가진단을 위한 기준이 아닙니다.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 초안 · 의학적 검토자: 미지정(원장 검토 대기)</p><p>최초 작성·최종 수정: 2026년 11월 4일 · 최근 의학적 검토일: 미완료 · 최초 공개일: 미공개</p><p>일반 의료정보이며 개인별 진단과 치료를 대신하지 않습니다.</p></footer>
  </article>;
}
