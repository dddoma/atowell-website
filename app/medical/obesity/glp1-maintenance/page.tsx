import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canReadGlp1Maintenance, glp1MaintenanceGuide as guide } from "@/data/glp1Maintenance";
import styles from "../obesity.module.css";
import CopyLink from "./CopyLink";
import copyStyles from "./copy.module.css";

export const metadata: Metadata = {
  title: guide.title,
  description: "목표 체중 도달 후 체중을 유지하면서 근력·영양·허리둘레를 함께 관리하는 성인 환자용 안내입니다.",
  alternates: { canonical: guide.href },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
};

const sources = [
  ["한국릴리. 마운자로 자주 묻는 질문 · 국내 적응증별 용법·용량", "https://www.lilly.com/kr/our-medicines/mounjaro-faq"],
  ["식품의약품안전처. 위고비 국내 허가사항 · 용법·용량 및 주의사항", "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=202301388aupdateTs2025-03-04+14%3A49%3A09.26307b"],
  ["Aronne LJ, et al. SURMOUNT-4. JAMA. 2024;331:38–48. doi:10.1001/jama.2023.24945", "https://pubmed.ncbi.nlm.nih.gov/38078870/"],
  ["Wilding JPH, et al. STEP 1 extension. Diabetes Obes Metab. 2022;24:1553–1564. doi:10.1111/dom.14725", "https://pubmed.ncbi.nlm.nih.gov/35441470/"],
  ["Mozaffarian D, et al. Nutritional priorities to support GLP-1 therapy for obesity: joint advisory. Obes Pillars. 2025;15:100181. doi:10.1016/j.obpill.2025.100181", "https://pmc.ncbi.nlm.nih.gov/articles/PMC12264624/"],
  ["WHO. Physical activity · 성인 유산소·근력운동 권고", "https://www.who.int/europe/news-room/fact-sheets/item/physical-activity"],
  ["노보 노디스크 코리아. 제품정보 · 위고비 임의 분할 투여 주의", "https://www.novonordisk.co.kr/patient/list-of-products.html"],
  ["Horn DB, et al. SURMOUNT-MAINTAIN. Lancet. 2026;407:2305–2318. doi:10.1016/S0140-6736(26)00656-2", "https://pubmed.ncbi.nlm.nih.gov/42119587/"],
  ["WHO. STEPS surveillance manual · 허리둘레 측정", "https://www.who.int/docs/default-source/ncds/ncd-surveillance/steps/steps-manual.pdf"],
];
function Refs({ numbers }: { numbers: number[] }) {
  return <p className={styles.refs}>근거: {numbers.map(n => <a href={`#ref-${n}`} key={n}>[{n}]</a>)}</p>;
}

export default function Page() {
  if (!canReadGlp1Maintenance()) notFound();
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: guide.title, url: `https://atowell.kr${guide.href}`, datePublished: "2026-11-02", dateModified: "2026-11-02", lastReviewed: "2026-11-02", reviewedBy: { "@type": "Person", name: "권병현" }, citation: sources.map(([, url]) => url) }) }} />
    <div className={copyStyles.toolbar}><nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/medical/obesity">비만·체중관리 의료정보</Link><span aria-hidden="true">/</span><span>GLP-1 유지치료</span></nav><CopyLink /></div>
    <header className={styles.header}><div className="kicker">진료 후 집에서 읽는 안내</div><h1>{guide.title}</h1><p className={styles.lead}>목표 체중에 도달했다면,<br />이제는 체중을 지키면서 근력과 생활을 돌볼 때입니다.</p><span className={styles.scope}>성인 체중관리 치료 환자를 위한 일반 의료정보</span></header>
    <div className={styles.answer}><strong>체지방률이 높다고 주사 용량부터 올리지는 마세요</strong><p>체중·허리둘레·근력·식사 상태를 함께 보고, 더 감량할지 유지할지 의료진과 정합니다. 체중이 비슷해도 지방이 줄고 근육과 기능이 좋아지는 방향을 목표로 할 수 있습니다. 변화의 속도와 정도는 사람마다 다릅니다.</p></div>
    <p>이 안내는 마운자로·위고비 등으로 감량한 뒤 체성분 개선을 원하는 분을 위한 관리 틀입니다. 별도 진료 상품이나 효과 보장을 뜻하지 않습니다. 마운자로(터제파타이드)는 GIP·GLP-1 이중 작용제, 위고비(세마글루티드)는 GLP-1 수용체 작용제입니다.</p>
    <nav className={styles.toc} aria-label="목차"><strong>집에서 실천할 순서</strong><ol><li><a href="#assessment">체중과 체성분 함께 보기</a></li><li><a href="#medicine">유지 약물치료를 정하는 방법</a></li><li><a href="#exercise">근력운동과 걷기</a></li><li><a href="#food">단백질과 충분한 식사</a></li><li><a href="#follow-up">기록과 다음 진료</a></li></ol></nav>
    <section className={styles.section} id="assessment"><h2>1. 체지방률 한 번의 숫자로 판단하지 마세요</h2><p>체지방률은 몸무게 중 지방이 차지하는 비율입니다. 지방이 많아서 높을 수도 있고, 근육 등 지방을 제외한 조직이 적어서 높을 수도 있습니다. 제지방량은 근육만을 뜻하지 않으므로 검사 수치가 줄었다고 모두 근육 손실로 해석하지 않습니다.</p><p>체성분 검사(BIA)는 수분 상태와 식사·운동 등에 영향을 받습니다. 같은 기기와 비슷한 조건에서 추세를 보고, 허리둘레와 근력을 함께 확인하세요. 정상 BMI에서 체지방률만 높다는 이유로 약을 새로 시작하거나 증량하는 것은 적절하지 않습니다.</p><ul className={styles.bullets}><li><strong>체중</strong>하나의 목표 숫자 대신 유지할 범위와 연락할 기준을 진료실에서 정합니다.</li><li><strong>허리둘레</strong>갈비뼈 아래와 골반뼈 위의 중간 높이에서 줄자를 수평으로 대고, 편하게 숨을 내쉰 뒤 잽니다. 같은 위치에서 비교하세요.</li><li><strong>근력과 일상 기능</strong>의자에서 일어나기, 계단 오르기, 운동 무게·횟수의 변화를 살펴봅니다. 필요하면 진료실에서 악력이나 의자 일어서기 검사를 합니다. 넘어질 위험이 있으면 혼자 검사하지 마세요.</li></ul><Refs numbers={[5, 9]} /></section>
    <section className={styles.section} id="medicine"><h2>2. 유지용량은 목표 체중만으로 정하지 않습니다</h2><p>감량 후에도 약물치료가 도움이 되는 분이 있습니다. 반대로 체중이 계속 빠지거나 충분히 먹지 못한다면 치료를 다시 평가해야 합니다. 유지·조정·중단은 처음 치료를 시작한 이유, 현재 체중과 건강, 식욕, 이상반응과 본인의 선호를 함께 보며 결정합니다.</p><aside className={styles.note}><strong>허가된 투여법과 개인별 판단을 구분하세요</strong><p>국내 성인 체중관리 용법에서 마운자로는 주 1회 2.5mg으로 시작해 4주 후 5mg으로 증량하며, 필요 시 의료진이 추가 조절합니다. 2.5mg을 누구에게나 적용하는 장기 유지 표준으로 안내하지 않습니다. 위고비의 성인 유지용량은 주 1회 2.4mg이며 단계적으로 증량합니다. 실제 처방에는 사용하는 제품의 최신 국내 허가사항을 확인합니다.</p></aside><p><strong>스스로 용량을 낮추거나 올리기, 10일·14일로 간격 늘리기, 펜의 클릭 수로 나눠 맞기를 하지 마세요.</strong> 이를 표준 유지요법이나 재증가를 막는 검증된 방법으로 제시할 수 없습니다. 중단 후 재시작할 때도 이전 고용량을 그대로 맞지 말고 상담하세요. 두 약을 함께 사용하지 않습니다.</p><p>중단 연구에서는 체중 재증가가 관찰됐습니다. 다만 SURMOUNT-4는 마운자로 10·15mg 지속과 중단을, STEP 1 연장은 위고비 2.4mg 치료 종료 후를 살핀 연구입니다. 정상 체중에 도달한 사람의 최적 저용량·간격 연장을 정해 주는 연구는 아닙니다. 2026년 SURMOUNT-MAINTAIN에서는 10·15mg 치료 후 주 1회 5mg으로 낮춘 군도 중단군보다 감량 유지에 유리했지만, 고용량 지속군보다 재증가가 많았습니다. 이는 누구나 감량해야 한다는 뜻이 아니며 2.5mg 유지나 간격 연장을 검증한 결과도 아닙니다. 중단을 택하더라도 추적 계획을 함께 세우세요.</p><Refs numbers={[1, 2, 3, 4, 7, 8]} /></section>
    <section className={styles.section} id="exercise"><h2>3. 걷기에 근력운동을 더하세요</h2><p>처음에는 주 2회부터 시작해, 가능하면 주 2~3회 전신 근력운동을 이어가세요. 의자에 앉았다 일어나기, 벽 밀기, 밴드 당기기처럼 익숙한 동작으로 시작할 수 있습니다. 같은 부위는 회복할 시간을 두고, 자세가 안정되면 횟수나 저항을 조금씩 늘립니다.</p><p>걷기·자전거 등 중간 강도 유산소운동은 주 150분을 향해 점차 늘리세요. 처음부터 채울 필요는 없습니다. 관절 통증·심장질환·낙상 위험이 있으면 운동 방법을 먼저 상담하세요. 흉통, 실신할 듯한 어지럼, 심한 숨참이 생기면 멈추고 진료받으세요.</p><Refs numbers={[5, 6]} /></section>
    <section className={styles.section} id="food"><h2>4. 단백질과 함께 식사 전체를 챙기세요</h2><p>매 끼니에 생선·달걀·두부·콩·살코기·유제품 등 단백질 식품을 넣고, 채소와 적당량의 밥·통곡물도 함께 드세요. 단백질 보충제만 먹거나 계속 굶으면 필요한 에너지와 영양이 부족할 수 있습니다.</p><p>하루 단백질 목표는 체격, 나이, 운동량과 신장 기능에 맞춰 정합니다. 감량기 문헌에서 제안하는 1.2~1.6g/kg/일을 모든 유지기 환자에게 그대로 적용하지 않습니다. 비만에서는 어떤 체중을 계산에 쓸지도 판단이 필요합니다. 신장질환이 있거나 단백질 제한을 안내받았다면 임의로 늘리지 마세요.</p><p>먹는 양이 너무 적거나 체중이 계속 줄면 식사량과 처방을 함께 점검하세요. 단백질만 늘리는 것으로 근력운동을 대신할 수는 없습니다.</p><Refs numbers={[5]} /></section>
    <section className={styles.section} id="follow-up"><h2>5. 기록을 가져오면 진료에 도움이 됩니다</h2><p>아래는 점검 방법의 예시입니다. 측정 때문에 불안하거나 식사 제한이 심해지면 빈도를 줄이고 상담하세요.</p><div className={styles.tableWrap}><table><caption>집에서의 기록과 진료실 점검</caption><thead><tr><th scope="col">항목</th><th scope="col">확인할 내용</th></tr></thead><tbody><tr><th scope="row">체중</th><td>주 1~2회 같은 조건에서 기록하고 하루 변화보다 몇 주의 흐름을 봅니다.</td></tr><tr><th scope="row">허리둘레·근력</th><td>허리둘레는 2~4주 간격, 운동 무게·횟수와 일상 기능은 꾸준히 기록합니다.</td></tr><tr><th scope="row">식사·약물</th><td>끼니와 단백질 식품, 식욕, 약 이름·용량·마지막 투여일, 불편한 증상을 적습니다.</td></tr><tr><th scope="row">다음 진료</th><td>유지체중 범위, 연락 기준, 단백질 목표, 운동 계획과 재진 날짜를 함께 정합니다. 필요에 따라 혈압·혈당·영양 상태를 확인합니다.</td></tr></tbody></table></div><p>체중이 범위를 반복해 벗어나거나, 계속 빠지거나, 근력이 떨어지고 기운이 없거나, 식사·수분 섭취가 어렵다면 예정일보다 일찍 연락하세요. 체중 재증가는 의지 부족으로만 설명되지 않습니다. 혼자 굶거나 주사량을 바꾸기보다 계획을 조정하세요.</p><aside className={`${styles.note} ${styles.urgent}`}><strong>이런 증상은 바로 진료가 필요합니다</strong><p>심하고 지속되는 복통, 반복 구토로 물도 유지하지 못함, 소변량의 뚜렷한 감소는 신속히 진료받으세요. 호흡곤란·입술이나 혀의 부종·의식 저하는 119 또는 응급실 도움을 받으세요.</p></aside><p>임신·임신 계획, 수술·수면내시경 예정, 함께 쓰는 당뇨약이 있다면 반드시 알려주세요. 약의 중단·조정은 담당 의료진의 안내를 받습니다.</p><Refs numbers={[1, 2, 5]} /></section>
    <section className={styles.consult}><h2>아토웰의원 진료에서 함께 정하세요</h2><p>“체중을 더 빼야 하나요?”와 함께 “식사는 충분한가요, 근력은 좋아지고 있나요?”를 확인하세요. 진료에서는 체중과 건강상태, 식욕·이상반응을 살피고 약물치료와 생활관리 방향을 상담합니다.</p><div className="actions"><Link className="button primary" href="/location">진료시간·오시는 길</Link><a className="button secondary" href="tel:054-776-0294">전화 문의</a></div></section>
    <section className={styles.related}><h2>함께 읽기</h2><div className={styles.relatedLinks}><Link href="/medical/obesity/weight-maintenance">목표 체중 도달 후, 체중 재증가를 예방하는 기본 안내 →</Link><Link href="/medical/obesity/glp1-side-effects-care">치료 중 불편한 증상 대처 →</Link><Link href="/clinic/obesity">아토웰 비만·체중관리 진료 →</Link><Link href="/medical/obesity">비만·체중관리 의료정보 전체 →</Link></div></section>
    <section className={styles.sources}><h2>참고문헌과 근거</h2><ol>{sources.map(([name, url], i) => <li id={`ref-${i + 1}`} key={url}><a href={url}>{name}</a></li>)}</ol><p className={styles.sourceNote}>자료 확인: 2026년 11월 2일. 임상시험은 치료 지속·중단의 근거이며 개인의 처방을 정하지 않습니다. 영양·운동 권고와 위 기록 주기는 개인 상태에 맞춰 조정합니다. 국내 처방에는 최신 국내 허가사항을 우선합니다.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 의학적 검토: 권병현 원장 · 검토 완료</p><p>최초 작성·최초 게시·최종 수정·최근 의학적 검토: 2026년 11월 2일</p><p>이 글은 일반 의료정보이며 개인의 진단이나 처방을 대신하지 않습니다.</p></footer>
  </article>;
}
