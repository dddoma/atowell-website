import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "경주 비만치료·체중관리 상담",
  description: "경주 황성동 아토웰의원의 체중과 건강상태 평가, 생활관리와 필요한 경우 약물치료를 포함한 비만 진료 안내.",
  alternates: { canonical: "/clinic/obesity" },
};

const steps = [
  ["현재 상태 확인", "체중, 키, BMI와 체중 변화, 건강상태와 복용약을 확인합니다."],
  ["목표 함께 정하기", "무리한 숫자보다 건강과 생활에 맞는 현실적인 목표를 정합니다."],
  ["생활관리 계획", "식사량과 식사 패턴, 활동과 근력운동 등 지속할 수 있는 방법을 찾습니다."],
  ["필요한 경우 약물치료", "적응증과 주의사항을 살펴 마운자로·위고비 등을 포함한 치료 선택지를 상담합니다."],
  ["반응과 유지 관리", "체중 변화와 이상반응을 확인하고 감량 후 유지 방법까지 계획합니다."],
];

export default function Page() {
  return (
    <>
      <section className="page-hero obesity-hero">
        <div className="wrap narrow">
          <div className="kicker">비만치료</div>
          <h1>체중만이 아니라<br />건강과 생활을 함께 봅니다</h1>
          <p className="lead">현재 체중과 건강상태를 평가하고, 생활관리와 필요한 경우 약물치료를 포함해 지속 가능한 방향을 찾습니다.</p>
          <div className="actions"><Link className="button primary" href="/location">진료시간 확인</Link><Link className="button secondary" href="/price">비급여 가격</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">진료 과정</div><h2>평가부터 유지까지</h2></div><p>약을 먼저 정하기보다 치료가 필요한 이유와 목표를 함께 확인합니다.</p></div>
          <div className="service-list">
            {steps.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">약물치료</div><h2>진료 후 적절한 치료를 결정합니다</h2></div><p>처방 여부와 용량은 개인의 상태, 치료 반응과 이상반응을 고려해 의료진이 판단합니다.</p></div>
          <div className="medical-grid">
            <Link className="medical-card" href="/clinic/mounjaro"><span>티르제파타이드</span><h3>마운자로<br />처방 상담</h3><p>진료 과정과 현재 비급여 가격 확인</p><b aria-hidden="true">→</b></Link>
            <Link className="medical-card accent-card" href="/clinic/wegovy"><span>세마글루타이드</span><h3>위고비<br />처방 상담</h3><p>진료 과정과 현재 비급여 가격 확인</p><b aria-hidden="true">→</b></Link>
          </div>
        </div>
      </section>
    </>
  );
}
