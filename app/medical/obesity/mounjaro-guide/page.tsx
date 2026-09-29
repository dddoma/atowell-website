import type { Metadata } from "next";
import Link from "next/link";
import Guide from "./Guide";

export const metadata: Metadata = {
  title: "마운자로로 체중을 줄이고 유지하는 방법",
  description: "감량기부터 유지기까지, 용량 조절·식사 루틴·유지 전략·이상반응을 함께 살펴보는 아토웰의원 상담자료입니다.",
  alternates: { canonical: "/medical/obesity/mounjaro-guide" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <div className="wrap" style={{ paddingBlock: 32 }}>
    <nav aria-label="현재 위치" style={{ fontSize: 14, marginBottom: 20 }}><Link href="/clinic/obesity">비만치료</Link> / <Link href="/clinic/mounjaro">마운자로 처방상담</Link> / 상담자료</nav>
    <Guide />
    <details style={{ marginTop: 32 }}>
      <summary>참고자료 및 작성 정보</summary>
      <ul className="milia-sources">
        <li><a href="https://www.lilly.com/kr/our-medicines/mounjaro-faq">한국릴리: 마운자로 용법·용량 및 투여 방법</a></li>
        <li><a href="https://www.lilly.com/kr/our-medicines/mounjaro">한국릴리: 국내 제품정보 및 허가사항 연결</a></li>
        <li><a href="https://pi.lilly.com/us/mounjaro-uspi.pdf">Lilly: 미국 처방정보 — 이상반응·안전성 참고</a> (국내 처방은 국내 허가사항을 따릅니다.)</li>
      </ul>
      <p>아토웰의원 상담자료를 바탕으로 AI가 편집하고 원장이 검토한 자료입니다. 식사 루틴은 개별 상담을 위한 예시이며 모든 환자에게 동일하게 적용하지 않습니다.</p>
      <p>최초 게시·최종 수정: 2026년 9월 29일 · 의학적 검토: 아토웰의원 원장 · 최근 의학적 검토: 2026년 9월 29일</p>
    </details>
    <p className="meta">이 자료는 일반적인 정보 제공과 상담을 돕기 위한 것으로 개인의 진단이나 처방을 대신하지 않습니다.</p>
  </div>;
}
