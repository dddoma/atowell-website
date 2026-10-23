import type { Metadata } from "next";
import Link from "next/link";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { constipationGuide } from "@/data/constipationGuide";
import styles from "../obesity.module.css";

export const metadata: Metadata = {
  title: constipationGuide.title,
  description: "진료 후 집에서 읽는 변비 관리 안내. 식이섬유와 수분, 배변 습관, 약국 변비약과 의사 상담이 필요한 증상을 확인하세요.",
  alternates: { canonical: constipationGuide.href },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
};

export default function Page() {
  return <article className={styles.article}>
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/">홈</Link><span>/</span><Link href="/clinic/obesity">비만·체중관리</Link></nav>
    <PatientMessageCopy message={constipationGuide.message} />
    <header className={styles.header}>
      <div className="kicker">진료 후 집에서 읽는 안내</div>
      <h1>다이어트·GLP-1 주사 치료 중 변비,<br />이렇게 관리하세요</h1>
      <p className={styles.lead}>체중을 줄이면서 식사량이 감소하면 대변의 양도 줄어들 수 있습니다. 특히 위고비·마운자로 같은 주사 치료 중에는 변비가 생기거나 기존 변비가 심해질 수 있습니다.</p>
      <span className={styles.scope}>성인 환자를 위한 일반 의료정보 · 아토웰의원</span>
    </header>
    <div className={styles.answer}><strong>관리 순서</strong><p>식이섬유와 물 챙기기 → 규칙적으로 화장실 가기 → 약국에서 변비약 상담 → 호전되지 않으면 의사와 상담</p><p>매일 대변을 보지 않는 것보다, 변이 딱딱하고 힘을 많이 줘야 하거나 배변 후에도 불편한지가 중요합니다.</p></div>
    <section className={styles.section}>
      <h2>① 채소와 식이섬유를 챙기고, 물도 함께 드세요</h2>
      <p>식사량을 줄이더라도 채소까지 지나치게 줄이지 마세요. 채소·콩·통곡물·적당량의 과일처럼 식이섬유가 들어 있는 음식을 매 끼니에 나누어 드세요.</p>
      <ul className={styles.bullets}>
        <li>생채소가 부담스럽다면 익힌 채소부터 드셔도 좋습니다.</li>
        <li><strong>식이섬유는 조금씩 늘리세요.</strong>갑자기 많이 먹으면 가스가 차거나 더부룩할 수 있습니다.</li>
        <li>물은 하루 동안 조금씩 자주 드세요. 식이섬유만 늘리고 물을 적게 마시면 변비가 더 불편해질 수 있습니다.</li>
        <li>심장이나 신장 질환으로 수분 섭취를 제한받고 있다면 기존 안내를 따르세요.</li>
      </ul>
      <p>주사 치료로 배가 쉽게 부르다면 채소를 억지로 한꺼번에 많이 먹지 마세요. 식후 가볍게 걷는 습관도 도움이 됩니다.</p>
    </section>
    <section className={styles.section}>
      <h2>② 변의가 뚜렷하지 않아도, 일정한 시간에 화장실에 가보세요</h2>
      <p>아침 식사 후 15~45분 사이처럼 매일 비슷한 시간에 배변을 시도해 보세요. 식사 후에는 장의 움직임이 활발해져 배변하기가 수월할 수 있습니다.</p>
      <ul className={styles.bullets}><li>변기에 잠깐 편안하게 앉되, 나오지 않으면 일어나세요.</li><li>오래 앉아서 휴대전화를 보거나 억지로 힘을 주지 마세요.</li><li>발밑에 작은 받침대를 놓아 무릎을 엉덩이보다 조금 높이면 도움이 될 수 있습니다.</li><li>다른 시간에 변의가 느껴지면 참지 말고 화장실에 가세요.</li></ul>
      <p><strong>목표는 부드러운 변을 무리 없이 보는 것입니다.</strong></p>
    </section>
    <section className={styles.section}>
      <h2>③ 불편함이 계속되면 약국에서 변비약을 상담하세요</h2>
      <p>생활관리만으로 충분하지 않다면 처방전 없이 구입할 수 있는 일반의약품을 사용할 수 있습니다. 약사에게 “체중감량 주사를 사용 중이고 변비가 생겼다”고 말씀하고, 복용 중인 약과 기저질환도 알려주세요.</p>
      <ul className={styles.bullets}>
        <li><strong>락툴로오스 제제 — 예: 듀락칸이지시럽</strong>장 안으로 수분을 끌어들여 변을 부드럽게 합니다. 효과가 나타나기까지 1~2일 정도 걸릴 수 있고, 가스나 더부룩함이 생길 수 있습니다.</li>
        <li><strong>비사코딜 함유 제제 — 예: 둘코락스에스장용정</strong>장의 움직임을 자극해 배변을 돕습니다. 복통이나 설사가 생길 수 있어, 필요할 때 단기간 사용하는 방향으로 상담하세요.</li>
      </ul>
      <p>제품 설명서와 약사의 안내에 따라 복용하세요. 효과가 바로 없다고 여러 변비약을 겹쳐 먹거나 용량을 계속 늘리지 마세요. 임신·수유 중이거나 신장 질환이 있다면 약을 고르기 전에 반드시 알려주세요.</p>
    </section>
    <section className={styles.section}>
      <h2>④ 그래도 좋아지지 않으면 담당 의사와 상담하세요</h2>
      <p>약국에서 안내받은 방법으로 사용해도 호전되지 않거나, 변비약이 계속 필요하거나, 복부 불편감 때문에 식사가 어렵다면 진료를 받으세요.</p>
      <p>진료 시에는 다음 내용을 알려주시면 도움이 됩니다.</p>
      <ul className={styles.bullets}><li>마지막 배변 시점과 변의 단단한 정도</li><li>사용 중인 주사의 이름·용량, 최근 증량 여부</li><li>사용한 변비약의 이름과 복용 기간</li><li>복통·구토·복부팽만 등 동반 증상</li></ul>
      <p>변비가 심한 상태에서는 다음 주사 용량을 올리기 전에 담당 의사와 상의하세요. 필요하면 변비 치료와 함께 주사 용량이나 증량 속도를 조절할 수 있습니다.</p>
      <aside className={`${styles.note} ${styles.urgent}`}><strong>다음 증상이 있으면 위 순서를 기다리지 말고 바로 진료받으세요</strong><p>심하거나 지속되는 복통, 반복되는 구토, 배가 심하게 부풀면서 방귀도 나오지 않는 경우, 혈변이나 검은 변이 나타나는 경우입니다. 이때는 식이섬유나 변비약을 더 먹으며 버티지 마세요.</p></aside>
    </section>
    <section className={styles.sources}><h2>참고 자료</h2><ol>
      <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/treatment">미국 NIDDK · 변비 치료와 배변 습관</a></li>
      <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/eating-diet-nutrition">미국 NIDDK · 변비와 식이섬유·수분 섭취</a></li>
      <li><a href="https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/symptoms-causes">미국 NIDDK · 변비의 증상과 진료가 필요한 경우</a></li>
      <li><a href="https://pubmed.ncbi.nlm.nih.gov/36614945/">GLP-1 치료 중 위장관 이상반응 관리에 관한 전문가 합의문 (2022)</a></li>
      <li><a href="https://www.kpanet.or.kr/medicineContentList.cm?menuCd=1002080000">대한약사회 · 일반의약품 안내</a></li>
    </ol><p className={styles.sourceNote}>자료 확인일: 2026년 10월 23일. 제품별 용법과 주의사항은 국내 제품 설명서 및 약사의 안내를 따르세요.</p></section>
    <footer className={styles.footer}><p>작성: AI 보조 · 의학적 검토: 아토웰의원 권병현 원장</p><p>최초 작성·최초 게시·최종 수정·최근 의학적 검토: 2026년 10월 23일</p><p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p></footer>
    <Link href="/clinic/obesity" className={styles.back}>← 비만·체중관리 진료 안내</Link>
  </article>;
}
