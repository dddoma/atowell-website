import Link from "next/link";
import { clinic } from "@/data/clinic";
import { medicalClinicSchema } from "@/lib/schema";

const careAreas = [
  {
    number: "01",
    title: "피부질환",
    description: "피부염, 여드름, 두드러기, 무좀, 사마귀 등 일상에서 자주 만나는 피부 문제를 진료합니다.",
    href: "/clinic/dermatology",
  },
  {
    number: "02",
    title: "피부미용",
    description: "피부 상태와 환자의 필요를 먼저 살피고, 적절한 관리와 시술 여부를 상담합니다.",
    href: "/clinic/aesthetic",
  },
  {
    number: "03",
    title: "비만치료",
    description: "체중과 건강상태를 평가하고 생활관리와 필요한 경우 약물치료를 함께 계획합니다.",
    href: "/clinic/obesity",
  },
];

const quickLinks = [
  { label: "비급여 가격", text: "치료와 약제의 비급여 비용 확인", href: "/price", icon: "₩" },
  { label: "진료시간·문의", text: "진료시간을 확인하고 전화로 문의", href: "/location", icon: "◷" },
  { label: "오시는 길", text: "주소와 주차 안내 확인", href: "/location#directions", icon: "⌖" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />

      <section className="hero">
        <div className="hero-orb" aria-hidden="true" />
        <div className="wrap hero-content">
          <div className="kicker">ATOWELL CLINIC · GYEONGJU</div>
          <h1>일상 가까이에서<br />피부와 건강을 돌봅니다</h1>
          <p className="lead">
            경주 황성동 아토웰의원은 피부질환·피부미용·비만치료를 세 축으로,
            환자의 현재 상태와 필요를 살펴 진료합니다.
          </p>
          <div className="actions">
            <Link className="button primary" href="#care">진료 분야 보기</Link>
            <Link className="button secondary" href="/location">진료시간·오시는 길</Link>
          </div>
        </div>
      </section>

      <section className="section" id="care">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">진료 안내</div>
              <h2>아토웰의 세 가지 진료</h2>
            </div>
            <p>특정 약제나 시술보다 먼저, 지금 어떤 도움이 필요한지 살펴봅니다.</p>
          </div>
          <div className="care-grid">
            {careAreas.map((area) => (
              <Link className="care-card" href={area.href} key={area.title}>
                <span className="card-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="text-link">자세히 보기 <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="quick-title">
        <div className="wrap">
          <div className="eyebrow">이용안내</div>
          <h2 id="quick-title">찾으시는 정보를 바로 확인하세요</h2>
          <div className="quick-grid">
            {quickLinks.map((item) => (
              <Link className="quick-card" href={item.href} key={item.label}>
                <span className="quick-icon" aria-hidden="true">{item.icon}</span>
                <span><strong>{item.label}</strong><small>{item.text}</small></span>
                <span className="quick-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split-section">
          <div>
            <div className="eyebrow">진료의 기준</div>
            <h2>설명하고,<br />함께 결정합니다</h2>
          </div>
          <div className="statement">
            <p>증상과 고민을 듣고 현재 상태를 확인한 뒤, 필요한 치료와 선택지를 이해하기 쉽게 설명합니다.</p>
            <p>환자가 진료 후에도 자신의 상태와 관리 방법을 이해할 수 있도록 돕는 것을 중요하게 생각합니다.</p>
            <Link className="text-link" href="/about">아토웰의원 소개 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section medical-section" id="medical">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">의료정보</div>
              <h2>진료실의 설명을 집에서도</h2>
            </div>
            <p>진료 중 자주 받는 질문을 환자가 다시 읽기 쉬운 자료로 차근차근 정리합니다.</p>
          </div>
          <div className="medical-grid">
            <Link className="medical-card" href="/medical/dermatology">
              <span>피부질환</span>
              <h3>흔한 피부질환을<br />이해하는 데 필요한 정보</h3>
              <p>피부염, 여드름, 두드러기 등 환자용 의료정보</p>
              <b aria-hidden="true">→</b>
            </Link>
            <Link className="medical-card accent-card" href="/medical/obesity">
              <span>비만·체중관리</span>
              <h3>체중과 약물치료를<br />올바르게 이해하는 정보</h3>
              <p>체중관리, 비만치료와 약물치료 관련 의료정보</p>
              <b aria-hidden="true">→</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="section closing-section">
        <div className="wrap closing-card">
          <div>
            <span className="eyebrow">아토웰의원</span>
            <h2>방문 전 궁금한 점이 있으신가요?</h2>
            <p>{clinic.address}</p>
          </div>
          <div className="actions">
            <a className="button primary" href={`tel:${clinic.phone}`}>전화 {clinic.phone}</a>
            <Link className="button secondary" href="/location">진료시간 확인</Link>
          </div>
        </div>
      </section>
    </>
  );
}
