import type { Metadata } from "next";
import Link from "next/link";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { glp1CareGuide } from "@/data/glp1CareGuide";
import styles from "../obesity.module.css";

export const metadata: Metadata = {
  title: glp1CareGuide.title,
  description: "위고비·마운자로 치료 중 흔한 불편감의 대처법과 바로 진료가 필요한 증상을 정리한 환자용 안내문입니다.",
  alternates: { canonical: glp1CareGuide.href },
  robots: { index: false, follow: false },
};
const sections = [
  { id: "nausea", title: "① 메스껍고 토할 것 같아요", intro: "평소 먹던 양도 치료 중에는 많게 느껴질 수 있습니다.", items: ["식사 전에 덜어 놓고, 평소보다 적은 양을 천천히 드세요.", "배가 부르기 시작하면 남아 있어도 그만 드세요.", "튀김·기름진 고기·크림 음식, 매운 음식과 술은 줄이세요.", "냄새가 강한 음식이 불편하면 담백하고 냄새가 적은 음식을 선택하세요.", "한 끼를 먹기 어렵다면 소량씩 나누어 드세요. 억지로 한 번에 먹거나 하루 종일 굶지는 마세요.", "물은 한꺼번에 많이 마시지 말고 조금씩 자주 드세요."], end: "반복해서 토하거나 식사·수분 섭취가 어려우면 당일 병원에 연락하세요. 필요하면 증상 완화 치료나 주사 용량 조정이 필요합니다." },
  { id: "reflux", title: "② 속이 더부룩하고 트림·신물이 올라와요", items: ["한 번에 먹는 양을 줄이고 천천히 씹어 드세요.", "탄산음료, 과식, 야식과 기름진 음식을 피하세요.", "식사 후 바로 눕지 말고, 잠들기 2~3시간 전에는 식사를 마치세요.", "커피나 술을 마신 뒤 심해진다면 줄이거나 피하세요.", "식후에는 무리하지 않는 범위에서 가볍게 걸어보세요."], end: "속쓰림이 계속되면 약사나 의사에게 상담하세요. 통증이 심하거나 음식을 먹지 못할 정도라면 소화제만 복용하며 버티지 마세요." },
  { id: "constipation", title: "③ 변비가 생겼어요", intro: "식사량이 줄면 대변의 양도 줄어들 수 있습니다. 매일 보지 않는 것보다 변이 딱딱하고 힘을 많이 주어야 하거나 배변 후에도 불편한지가 중요합니다.", items: ["채소·콩·통곡물·적당량의 과일을 챙기되, 식이섬유는 조금씩 늘리세요.", "물도 함께 조금씩 자주 드세요. 수분 제한을 안내받았다면 기존 지침을 따르세요.", "아침 식사 후처럼 일정한 시간에 화장실에 가보세요.", "나오지 않으면 일어나세요. 오래 앉아 있거나 억지로 힘주지 마세요.", "불편함이 계속되면 약국에서 변비약을 상담하고, 그래도 호전되지 않으면 진료받으세요."], end: "배가 심하게 부풀고 아프거나 구토가 동반된다면 식이섬유와 변비약을 더 먹기 전에 진료가 필요합니다." },
  { id: "diarrhea", title: "④ 설사를 해요", intro: "설사할 때는 수분이 부족해지지 않도록 하는 것이 우선입니다.", items: ["물을 조금씩 자주 마시세요. 묽은 설사가 반복되면 약국에서 경구수분보충액을 상담하세요.", "기름진 음식·술·과도한 커피를 피하세요.", "우유를 먹고 심해지면 잠시 줄이세요.", "무설탕 사탕·껌에 들어 있는 소르비톨 같은 당알코올도 설사를 악화시킬 수 있습니다.", "먹을 수 있는 범위에서 담백한 음식을 소량씩 드세요."], end: "설사가 반복되거나 지속되면 병원에 알려주세요. 열·혈변·심한 복통이 있으면 지사제를 임의로 복용하기보다 진료를 먼저 받으세요. 소변이 줄거나 심하게 어지러우면 당일 진료가 필요합니다." },
  { id: "dizziness", title: "⑤ 어지럽고 기운이 없어요", intro: "음식이나 수분 섭취 부족, 혈압 저하, 저혈당 등 여러 원인이 있을 수 있습니다. 모두 주사의 흔한 부작용이라고 단정하지 마세요.", items: ["우선 앉거나 누워 쉬고, 어지러운 동안 운전하지 마세요.", "끼니를 지나치게 줄이거나 거르지 않았는지 확인하세요.", "물을 조금씩 마시고, 일어설 때는 천천히 움직이세요.", "혈압계가 있다면 혈압을, 당뇨병이 있다면 혈당도 확인하세요."], end: "혈압약이나 당뇨약을 복용 중이라면 체중감량 과정에서 약 조절이 필요할 수 있습니다. 임의로 약을 끊지 말고 측정값과 증상을 병원에 알려주세요." },
  { id: "injection", title: "⑥ 주사 부위가 붉거나 가려워요", intro: "주사 부위에 작은 붉은 자국이나 가려움이 생길 수 있습니다.", items: ["문지르거나 긁지 말고, 천으로 감싼 차가운 팩을 잠깐 대세요.", "다음 주사는 제품에서 안내하는 부위 안에서 위치를 바꾸어 맞으세요.", "붉고 붓거나 멍든 피부에는 주사하지 마세요."], end: "붉은 범위가 점점 넓어지거나 열감·통증·고름·발열이 있으면 진료받으세요. 전신 두드러기와 함께 호흡곤란이나 입술·혀 부종이 나타나면 즉시 응급 도움을 받으세요." },
];

export default function Page() {
  return <article className={styles.article}>
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/">홈</Link><span aria-hidden="true">/</span><Link href="/clinic/obesity">비만·체중관리</Link></nav>
    <PatientMessageCopy message={glp1CareGuide.message} />
    <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내</div><h1>위고비·마운자로 치료 중 불편한 증상,<br />이렇게 대처하세요</h1><p className={styles.lead}>위고비·마운자로 같은 체중관리 주사 치료 중에는 메스꺼움, 더부룩함, 변비, 설사 등이 생길 수 있습니다. 특히 처음 시작하거나 용량을 올린 뒤 나타나기 쉽습니다.</p><span className={styles.scope}>성인 환자를 위한 일반 의료정보 · 아토웰의원</span></header>
    <aside className={styles.reviewBanner}><strong>공개 전 검토용</strong><p>원장 최종 확인 전의 안내문입니다. 아직 환자에게 전달하지 마세요.</p></aside>
    <div className={styles.answer}><strong>참기보다 조절하는 것이 중요합니다</strong><p>가벼운 증상은 식사 방법을 조절하면서 좋아지는 경우가 많습니다. 하지만 먹거나 마시기 어려울 정도라면 참지 말고 병원에 알려주세요. 부작용이 심하다고 체중감량 효과가 더 좋은 것은 아닙니다.</p></div>
    <section className={styles.section} id="urgent"><h2>먼저, 이런 증상은 바로 진료받으세요</h2><p>다음 증상은 단순한 소화불량으로 생각하고 기다리지 마세요.</p>
      <ul className={styles.bullets}><li>심하고 지속되는 복통, 특히 윗배 통증이 등으로 퍼지거나 구토가 동반되는 경우</li><li>배가 심하게 부풀고 아프면서 대변과 방귀가 모두 나오지 않는 경우</li><li>반복해서 토해 물을 마셔도 유지하지 못하거나, 소변량이 뚜렷하게 줄어드는 경우</li><li>오른쪽 윗배 통증과 함께 열이 나거나 눈·피부가 노랗게 되는 경우</li><li>피를 토하거나 혈변·검은 변이 나오는 경우</li><li>갑자기 시력이 떨어지거나 보이지 않는 경우</li></ul>
      <aside className={`${styles.note} ${styles.urgent}`}><strong>숨이 차거나 입술·혀·목이 붓는 경우, 의식을 잃거나 경련하는 경우에는 119를 부르세요.</strong><p>심한 복통이나 심한 알레르기 반응이 의심되면 추가 주사를 맞지 말고 즉시 진료받으세요.</p></aside>
    </section>
    <nav className={styles.toc} aria-label="증상별 대처법"><strong>내 증상 찾아보기</strong><ul>{sections.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}<li><a href="#next-dose">다음 주사 전 상담</a></li></ul></nav>
    {sections.map(s => <section key={s.id} id={s.id} className={styles.section}><h2>{s.title}</h2>{s.intro && <p>{s.intro}</p>}<ul className={styles.bullets}>{s.items.map(item => <li key={item}>{item}</li>)}</ul><p>{s.end}</p>
      {s.id === "constipation" && <Link className="text-link" href="/medical/obesity/constipation-care">변비 관리 방법 자세히 보기 →</Link>}
      {s.id === "dizziness" && <aside className={styles.note}><strong>식은땀·손떨림·두근거림이 함께 있다면</strong><p>위고비·마운자로만 사용할 때 저혈당 위험은 대체로 낮지만, 인슐린이나 일부 당뇨약과 함께 사용하면 위험이 높아질 수 있습니다.</p><p>혈당이 70mg/dL 미만이고 의식이 명료하며 삼킬 수 있다면, 포도당이나 당분 있는 음료로 당질 약 15g을 섭취하세요. 제로 음료는 도움이 되지 않습니다. 15분 뒤 다시 측정하고 여전히 낮으면 반복하세요. 호전되지 않거나 자꾸 재발하면 즉시 의료진의 도움을 받으세요.</p><p><strong>의식이 흐리거나 삼키기 어렵다면 입으로 음식이나 물을 주지 말고 119를 부르세요.</strong></p></aside>}
    </section>)}
    <section className={styles.section} id="next-dose"><h2>다음 주사를 맞기 전에 병원에 알려야 할 때</h2><p>메스꺼움·구토·설사·변비가 계속되거나, 식사와 수분 섭취가 어렵거나, 일상생활에 지장이 생긴다면 다음 용량을 올리기 전에 상담하세요.</p><p>용량을 빨리 올리는 것보다 몸이 견딜 수 있는 속도로 치료하는 것이 중요합니다. 의료진은 증상에 따라 증량을 늦추거나 용량 조정·일시 중단 등을 판단할 수 있습니다. 주사 용량이나 간격을 스스로 바꾸지는 마세요.</p><p>연락하실 때는 주사 이름과 용량, 마지막 주사 날짜, 증상 시작 시점, 먹고 마실 수 있는 정도, 함께 복용하는 약을 알려주세요.</p></section>
    <section className={styles.section}><h2>치료 중 꼭 알려주세요</h2><p>임신이 확인되거나 의심될 때, 수술이나 수면내시경을 앞두고 있을 때는 의료진에게 주사 사용 사실을 알려주세요. 마취·진정 전 중단 여부는 담당 의료진이 결정합니다.</p><p>마운자로를 사용하면서 먹는 피임약을 복용한다면, 치료 시작 후 4주와 매번 증량 후 4주 동안 추가 피임 또는 비경구 피임 방법이 필요한지 반드시 상담하세요.</p></section>
    <aside className={styles.consult}><h2>아토웰의원 <a href="tel:054-776-0294">054-776-0294</a></h2><p>전화 상담은 진료시간에 가능합니다. 응급 증상은 병원 연락을 기다리지 말고 119 또는 응급실을 이용하세요.</p><Link className="text-link" href="/location">진료시간·예약 안내 →</Link></aside>
    <section className={styles.sources}><h2>참고 자료</h2><ol>
      <li><a href="https://pubmed.ncbi.nlm.nih.gov/36614945/">GLP-1 치료 중 위장관 이상반응 관리 전문가 합의문 (2022)</a></li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12264624/">GLP-1 비만 치료의 영양관리 공동 권고 (2025)</a></li>
      <li><a href="https://www.wegovy.com/obesity/is-wegovy-right-for-me/safety-side-effects.html">Wegovy 공식 환자용 안전정보</a></li>
      <li><a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0">DailyMed · Mounjaro 제품정보</a></li>
      <li><a href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia">미국 NIDDK · 저혈당 대처</a></li>
      <li><a href="https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose">미국당뇨병학회 · 저혈당과 15/15 원칙</a></li>
    </ol><p className={styles.sourceNote}>자료 확인일: 2026년 10월 23일. 해외 제품정보는 안전수칙의 보조 근거이며, 국내 처방·투여에는 국내 허가사항과 담당 의료진의 안내를 따릅니다. 모든 이상반응과 금기·주의사항을 나열한 자료는 아닙니다.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 초안 · 의학적 검토: 원장 최종 확인 대기</p><p>최초 작성·최종 수정: 2026년 10월 23일 · 최초 게시: 공개 전</p><p>이 안내문은 흔한 증상에 대한 일반적인 대처법이며, 개인의 진단이나 처방을 대신하지 않습니다.</p></footer>
    <Link className={styles.back} href="/clinic/obesity">← 비만·체중관리 진료 안내</Link>
  </article>;
}
