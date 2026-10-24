import { canReadWegovyFaq, wegovyFaqCategories, wegovyFaqPublished } from "@/data/wegovyFaq";
import VaccinationGuideLinks from "@/components/VaccinationGuideLinks";
import { canReadWegovyInjection, wegovyInjectionGuide } from "@/data/wegovyInjection";
import type { Metadata } from "next";
import Link from "next/link";
import { wegovyPrices, nonCoveredVisitFee, priceUpdatedAt } from "@/data/clinic";

export const metadata: Metadata = {
  title: "경주 위고비 처방 상담·가격 안내",
  description: "경주 황성동 아토웰의원의 위고비(세마글루타이드) 비만치료 상담과 비급여 가격 안내.",
  alternates: { canonical: "/clinic/wegovy" },
  ...(process.env.VERCEL_ENV === "preview" ? { robots: { index: false, follow: false } } : {}),
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "경주 위고비 처방 상담·가격 안내",
    dateModified: priceUpdatedAt,
    about: { "@type": "Drug", name: "위고비", activeIngredient: "semaglutide" },
  };

  return (
    <div className="wrap section article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="kicker">비만·체중관리 · 약물치료</div>
      <h1>경주 위고비<br />처방 상담·가격 안내</h1>
      <p className="lead">아토웰의원에서는 위고비(세마글루타이드) 비만치료 상담을 시행합니다. 처방 여부와 적절한 용량은 진료 후 결정됩니다.</p>
      {canReadWegovyFaq() && <>
        {!wegovyFaqPublished && <aside className="notice"><strong>신규 안내·FAQ는 공개 전 검토용입니다.</strong><p>원장 검토 후 운영 사이트에 반영합니다.</p></aside>}
        <h2>체중 감량·유지</h2>
        <div className="medical-grid"><section className="notice"><h3>감량 계획</h3><p>목표 체중과 생활관리 방법을 함께 정합니다.</p><Link className="text-link" href="/medical/obesity/goals">체중감량 목표 알아보기 →</Link></section><section className="notice"><h3>생활관리와 유지</h3><p>식사·운동을 이어가고 치료 지속 여부를 상담합니다.</p><Link className="text-link" href="/medical/obesity/wegovy-faq/food-and-exercise">식사와 운동 →</Link><br /><Link className="text-link" href="/medical/obesity/wegovy-faq/effects-and-weight">효과와 체중 유지 →</Link></section></div>
      </>}
      <h2>현재 비급여 가격</h2>
      <div className="table-scroll"><table><thead><tr><th>용량</th><th>수량</th><th>가격</th></tr></thead><tbody>{wegovyPrices.map((item) => <tr key={item.dose}><td>{item.dose}</td><td>{item.quantity}</td><td>{item.price.toLocaleString()}원</td></tr>)}</tbody></table></div>
      <p className="notice">비급여 진료비 {nonCoveredVisitFee.toLocaleString()}원 별도 · 가격 최종 업데이트 {priceUpdatedAt}</p>
      {canReadWegovyInjection() && <section className="notice"><h2>위고비 주사 놓는 방법</h2><p>새 바늘 장착부터 주사 완료·보관까지, 공식 영상과 함께 확인하세요.</p><VaccinationGuideLinks guides={[wegovyInjectionGuide]} /></section>}
      {canReadWegovyFaq() && <section id="faq"><h2>자주 묻는 질문</h2><p>진료실에서 자주 나누는 {wegovyFaqCategories.reduce((sum, category) => sum + category.items.length, 0)}개 질문을 6개 주제로 정리했습니다.</p><nav className="faq-category-grid" aria-label="위고비 질문 카테고리">{wegovyFaqCategories.map((category, index) => <Link className="quick-card" key={category.slug} href={`/medical/obesity/wegovy-faq/${category.slug}`}><span className="quick-icon" aria-hidden="true">{index + 1}</span><span><strong>{category.title}</strong><small>질문 {category.items.length}개 · 답변 읽기</small></span><span className="quick-arrow" aria-hidden="true">→</span></Link>)}</nav></section>}
      <h2>처방 전 확인할 내용</h2>
      <p>현재 건강상태와 체중 변화, 복용 중인 약, 이전 체중감량 치료 경험을 확인합니다. 치료 시작 여부와 증량은 진료 후 의료진이 판단합니다.</p>
      <div className="actions"><Link className="button secondary" href="/clinic/obesity">비만·체중관리 안내</Link><Link className="button primary" href="/location">진료시간 확인</Link></div>
      <div className="meta">가격 최종 업데이트 {priceUpdatedAt}<br />이 페이지는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.</div>
    </div>
  );
}
