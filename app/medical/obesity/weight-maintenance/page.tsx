import type { Metadata } from "next";
import Link from "next/link";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { weightMaintenanceGuide } from "@/data/weightPhaseGuides";
import styles from "../obesity.module.css";
export const metadata: Metadata = {
  title: "마운자로 목표 체중 도달 후 체중 유지기 안내",
  description: "유지체중 범위와 식사·운동, 약물치료 계획, 체중 재증가에 대응하는 방법을 정리한 환자 안내문입니다.",
  alternates: { canonical: weightMaintenanceGuide.href }, robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
};
const sections = [
  { id: "range", title: "① 목표 숫자 대신 유지할 범위를 정하세요", paragraphs: ["체중은 수분, 짠 음식, 변비, 생리 등에 따라 일시적으로 달라집니다. 하루의 숫자에 맞춰 식사나 약을 바꾸지 마세요.", "진료실에서 유지체중 범위, 병원에 연락할 체중·증상 기준, 다음 진료일을 함께 정합니다.", "예를 들어 목표 체중이 65kg이라면 64~67kg을 유지 범위로 정할 수 있습니다. 이는 설명을 위한 예시이며, 모든 사람에게 같은 범위를 적용하지 않습니다.", "유지 범위 아래로 계속 빠지는 경우도 점검이 필요합니다. 식사가 부족하거나 근육이 줄고 있지는 않은지 확인하세요."] },
  { id: "meals", title: "② 약을 사용하는 동안 만든 식사 습관을 이어가세요", paragraphs: ["약의 효과가 줄면 이전보다 배가 고프거나 음식 생각이 자주 날 수 있습니다. 그때마다 즉흥적으로 먹기보다, 미리 정한 식사 규칙을 유지하세요."], bullets: ["가능하면 세 끼를 일정한 시간에 드세요.", "먹기 전에 한 끼 분량을 덜어 놓고 천천히 드세요.", "매 끼니에 달걀·생선·살코기·두부·콩 등 단백질 식품을 포함하세요.", "채소와 적당량의 밥·통곡물 등을 함께 드세요.", "간식이 필요하면 시간과 양을 정하세요. 봉지째 먹거나 조금씩 계속 집어 먹는 습관을 줄이세요.", "달콤한 음료, 잦은 술자리와 야식이 다시 늘고 있지 않은지 살펴보세요."], after: ["유지기에는 감량할 때의 적은 식사량을 무조건 고집할 필요는 없습니다. 체중이 계속 줄거나 기운이 없다면, 영양을 충분히 섭취하도록 식사량과 치료 계획을 조정해야 합니다.", "외식이나 모임에서 많이 먹었더라도 다음 날 굶지 말고, 다음 끼니부터 평소 식사로 돌아오세요."] },
  { id: "exercise", title: "③ 걷기와 근력운동을 함께 하세요", paragraphs: ["체중계 숫자가 같아도 근육이 줄면 몸의 힘과 건강은 달라질 수 있습니다. 단백질을 챙겨 먹는 것과 함께 근육을 사용하는 운동이 필요합니다."], bullets: ["걷기 등 유산소 운동: 우선 주 150분을 목표로 시작하고, 건강상태와 체력에 따라 주 200~300분까지 늘려보세요.", "근력운동: 주 2~3회, 가능하면 서로 다른 날에 하세요. 의자에서 앉았다 일어나기, 벽 밀기, 밴드·아령 운동 등으로 시작할 수 있습니다.", "일상 움직임: 오래 앉아 있는 시간을 줄이고, 식후 걷기나 가까운 거리 걸어가기 등을 이어가세요."], after: ["관절통이나 심장질환이 있거나 운동이 익숙하지 않다면, 할 수 있는 강도부터 의료진과 상의하세요.", "체중뿐 아니라 계단 오르기, 의자에서 일어나기, 장보기 같은 일상이 수월한지도 함께 살펴보세요."] },
  { id: "tracking", title: "④ 체중은 규칙적으로 재되, 흐름을 보세요", paragraphs: ["주 1~2회처럼 정해진 요일에, 같은 체중계로 비슷한 조건에서 측정하세요. 가능하면 아침에 화장실에 다녀온 뒤 식사 전에 재는 것이 비교하기 편합니다.", "기록은 간단해도 충분합니다."], bullets: ["이번 주 체중", "배고픔이나 간식·야식의 변화", "걷기·근력운동을 한 정도", "주사 용량과 불편한 증상"], after: ["매일 측정한다면 하루의 오르내림보다 주간 평균과 몇 주간의 흐름을 보세요. 체중 측정 때문에 불안하거나 식사를 지나치게 제한하게 된다면 측정 빈도를 상담하세요."] },
  { id: "medicine", title: "⑤ 주사 유지·조정·중단은 함께 결정하세요", paragraphs: ["목표 체중에 도달했다고 반드시 주사를 끊어야 하는 것은 아닙니다. 체중 유지 효과, 식욕, 부작용, 혈당과 건강상태, 비용 등을 함께 고려해 치료 계획을 정합니다."], bullets: ["치료를 계속하는 것이 도움이 되는 분도 있습니다.", "더 이상 체중이 빠지지 않도록 식사와 약물치료를 조정해야 하는 분도 있습니다.", "중단을 선택한다면 중단 후 체중 점검과 재상담 계획까지 정해 두세요."], after: ["마운자로는 주 1회 투여가 기본입니다. 10일·14일 간격으로 늘리는 방법은 표준 유지요법으로 충분히 검증된 방식이 아니므로 스스로 변경하지 마세요. 천천히 줄이거나 간격을 늘린다고 체중 재증가가 확실히 예방되는 것도 아닙니다.", "한동안 중단한 뒤 다시 시작할 때도 이전 용량을 그대로 맞지 말고 처방의와 상의하세요. 당뇨병 치료를 함께 받고 있다면 체중뿐 아니라 혈당 변화도 고려해야 합니다."] },
  { id: "regain", title: "⑥ 체중이 다시 오르면, 많이 늘기 전에 점검하세요", paragraphs: ["하루 이틀의 증가만으로 치료 실패라고 판단하지 마세요. 다만 유지 범위의 상한을 반복해서 넘거나, 2~4주 동안 계속 오르는 흐름이 보이면 식사와 활동을 점검하고 진료 일정을 앞당기세요. 상담 기준은 개인별 계획에 맞춥니다."], bullets: ["한 끼 양이나 간식·야식·술이 늘었나요?", "운동과 일상 움직임이 줄었나요?", "수면 부족이나 스트레스가 심해졌나요?", "약을 변경한 뒤 배고픔이 크게 늘었나요?", "변비나 부종 등 체중에 영향을 줄 변화가 있나요?"], after: ["폭식 충동이나 조절하기 어려운 배고픔이 생기면 체중이 많이 늘 때까지 기다리지 마세요. 생활관리 보완이나 약물치료 조정·재시작이 필요한지 상담할 수 있습니다.", "체중이 다시 늘었다면 계획을 조정할 시점입니다. 혼자 굶거나 주사 용량을 올려 해결하려 하지 마세요."] },
  { id: "health", title: "⑦ 몸의 변화도 정기적으로 확인하세요", paragraphs: ["유지기 진료에서는 체중뿐 아니라 허리둘레, 혈압, 혈당, 영양 섭취와 근력 등을 필요에 따라 확인합니다. 특히 다음 경우에는 예정된 진료일까지 기다리지 말고 상담하세요."], bullets: ["목표보다 계속 체중이 빠지거나 식사를 충분히 못 하는 경우", "기운이 없고 근력이 떨어지거나 어지러움이 반복되는 경우", "구토·설사·변비 등 불편감이 지속되는 경우", "혈압약·당뇨약을 복용하면서 저혈압이나 저혈당이 의심되는 경우"], after: ["심한 복통, 반복되는 구토, 호흡곤란 등 급한 증상은 체중관리 상담을 기다리지 말고 즉시 진료받으세요."] },
];
export default function Page() {
 return <article className={styles.article}>
  <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/mounjaro">마운자로 처방상담</Link><span aria-hidden="true">/</span><span>체중 유지기</span></nav>
  <PatientMessageCopy message={weightMaintenanceGuide.message} />
  <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내 · 체중 유지기</div><h1>마운자로 치료로 목표 체중에 도달했다면</h1><p className={styles.lead}>이제는 체중을 계속 줄이기보다 적절한 식사를 하면서 근육과 건강을 지키고, 감량한 체중을 유지하는 것이 중요합니다.</p></header>
  <div className={styles.answer}><strong>유지기에도 관리 계획이 필요합니다</strong><p>약을 줄이거나 중단하면 배고픔이 커지면서 체중이 다시 증가할 수 있습니다. 이것은 의지가 약해서만 생기는 일이 아닙니다. 감량 후에는 몸이 이전 체중으로 돌아가려는 변화가 나타나므로, 유지기에도 관리 계획이 필요합니다.</p></div>
  <nav className={styles.toc} aria-label="목차"><strong>유지기 관리 방법</strong><ol>{sections.map(s=><li key={s.id}><a href={`#${s.id}`}>{s.title.slice(2)}</a></li>)}</ol></nav>
  {sections.map(s=><section key={s.id} id={s.id} className={styles.section}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.bullets && <ul className={styles.bullets}>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}{s.after?.map(p=><p key={p}>{p}</p>)}</section>)}
  <section className={styles.section}><h2>나의 유지기 계획</h2><p>진료실에서 함께 정하고, 인쇄한 안내문에 적어 두세요.</p><div className={styles.tableWrap}><table><caption>개인별 유지 계획</caption><thead><tr><th scope="col">항목</th><th scope="col">함께 정할 내용</th></tr></thead><tbody>{["유지체중 범위 (kg)","병원에 연락할 체중·증상 기준","유지할 식사 규칙","걷기·근력운동 계획","주사 치료 계획","다음 진료일"].map(label=><tr key={label}><th scope="row">{label}</th><td>____________________</td></tr>)}</tbody></table></div></section>
  <aside className={styles.takeHome}><strong>기억할 한 문장</strong><p>유지기의 목표는 체중을 더 낮추는 것이 아니라, 감량한 체중과 건강을 오래 지키는 것입니다.</p></aside>
  <section className={styles.sources}><h2>참고 자료</h2><ol>
   <li><a href="https://jamanetwork.com/journals/jama/fullarticle/2812936">SURMOUNT-4: 티르제파타이드 지속 치료와 중단 후 체중 변화 (JAMA, 2024)</a></li>
   <li><a href="https://www.nice.org.uk/guidance/ta1026/resources/a-practical-guide-to-using-medicines-to-manage-overweight-and-obesity-15299628589/chapter/prescribing-reviewing-and-stopping-tirzepatide">NICE: 티르제파타이드 치료 검토와 중단 후 지원</a></li>
   <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12264624/">GLP-1 비만 치료의 영양관리 공동 권고 (2025)</a></li>
   <li><a href="https://doi.org/10.2337/dc26-s008">미국당뇨병학회: 체중관리 지침 (2026)</a></li>
   <li><a href="https://www.lilly.com/kr/our-medicines/mounjaro-faq">한국릴리: 마운자로 용법·용량 안내</a></li>
  </ol><p className={styles.sourceNote}>자료 확인일: 2026년 10월 23일. 해외 지침은 보조 근거이며 국내 처방에는 국내 허가사항을 따릅니다. 유지체중 범위와 재상담 시점은 개인별로 정할 실무 예시입니다. 임상시험에서 주사 간격을 10일·14일로 늘리는 방법을 검증한 것은 아닙니다.</p></section>
  <footer className={styles.footer}><p>작성: AI 보조 · 의학적 검토: 권병현 원장 · 2026년 10월 23일</p><p>최초 작성·최종 수정: 2026년 10월 23일 · 최초 게시: 2026년 10월 23일</p><p>이 안내문은 일반적인 의료정보이며, 개인의 진단이나 처방을 대신하지 않습니다.</p><p>아토웰의원 <a href="tel:054-776-0294">054-776-0294</a></p></footer>
  <Link className={styles.back} href="/clinic/mounjaro">← 마운자로 처방상담</Link>
 </article>;
}
