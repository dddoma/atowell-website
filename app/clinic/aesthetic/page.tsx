import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "경주 피부미용 상담",
  description: "경주 황성동 아토웰의원의 피부 상태와 필요를 고려한 피부미용 상담 및 시술 안내.",
  alternates: { canonical: "/clinic/aesthetic" },
};

const principles = [
  ["피부 상태부터 확인합니다", "원하는 시술을 바로 정하기보다 현재 피부 상태와 고민을 먼저 확인합니다."],
  ["기대효과와 한계를 설명합니다", "시술로 기대할 수 있는 변화와 한계, 필요한 횟수와 회복 과정을 설명합니다."],
  ["필요한 선택지를 제안합니다", "과도한 시술보다 환자의 필요와 일상에 맞는 선택지를 함께 검토합니다."],
];

export default function Page() {
  return (
    <>
      <section className="page-hero aesthetic-hero">
        <div className="wrap narrow">
          <div className="kicker">피부미용</div>
          <h1>피부 상태와 필요에 맞춘<br />차분한 상담</h1>
          <p className="lead">피부 고민과 원하는 변화를 듣고, 현재 상태에서 적절한 관리와 시술 여부를 함께 살핍니다.</p>
          <div className="actions"><a className="button primary" href="tel:054-776-0294">시술 문의</a><Link className="button secondary" href="/location">진료시간 확인</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">상담 원칙</div><h2>먼저 충분히 살펴봅니다</h2></div><p>시술 종류와 가능 여부는 피부 상태를 확인한 뒤 결정합니다.</p></div>
          <div className="care-grid">
            {principles.map(([title, text], index) => (
              <article className="care-card static-card" key={title}><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap split-section">
          <div><div className="eyebrow">방문 전 안내</div><h2>상담하고 결정해도<br />늦지 않습니다</h2></div>
          <div className="statement"><p>현재 시행 중인 시술, 예상 비용과 시술 후 주의사항은 환자의 피부 상태와 상담 내용에 따라 달라질 수 있습니다.</p><p>원하는 시술이나 이전 시술 경험이 있다면 상담할 때 말씀해 주세요.</p><a className="text-link" href="tel:054-776-0294">전화로 문의하기 →</a></div>
        </div>
      </section>
    </>
  );
}
