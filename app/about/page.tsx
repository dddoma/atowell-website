import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "병원·의료진 소개",
  description: "경주 황성동 아토웰의원의 진료 방향과 의료진을 소개합니다.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <div className="kicker">ABOUT ATOWELL</div>
          <h1>환자가 이해하고 선택할 수 있는 진료</h1>
          <p className="lead">아토웰의원은 피부질환·피부미용·비만치료를 중심으로 일상 가까이에서 필요한 진료를 제공합니다.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap profile-grid">
          <div className="profile-mark" aria-hidden="true">A</div>
          <div>
            <div className="eyebrow">의료진</div>
            <h2>권병현 원장</h2>
            <ul className="clean-list credentials">
              <li>아토웰의원 원장</li>
              <li>방사선종양학과 전문의</li>
              <li>의학박사</li>
            </ul>
            <p className="body-large">환자의 질문을 단순히 해결하는 데 그치지 않고, 현재 문제와 앞으로의 관리 방향을 함께 이해할 수 있도록 설명하는 진료를 지향합니다.</p>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap split-section">
          <div><div className="eyebrow">진료 방향</div><h2>가까이에서<br />오래 돕는 의원</h2></div>
          <div className="statement">
            <p>흔한 피부 문제부터 피부 상태에 맞춘 미용 상담, 체중과 건강을 함께 살피는 비만치료까지 환자의 생활과 연결된 진료를 제공합니다.</p>
            <p>앞으로 의료정보와 진료 후 안내를 축적해, 홈페이지도 진료의 연장선으로 발전시켜 가겠습니다.</p>
            <Link className="button primary" href="/location">진료시간·오시는 길</Link>
          </div>
        </div>
      </section>
    </>
  );
}
