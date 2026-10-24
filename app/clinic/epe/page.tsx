import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canReadEpe, epePublished, epeDoseSchedule, epeFaqCategories, epeInjectionGuide, epeSources } from "@/data/epe";
import VaccinationGuideLinks from "@/components/VaccinationGuideLinks";
import { EpeReviewBanner, EpeFooter } from "@/components/EpeEditorial";
export const metadata: Metadata = { title: "에페(에페글레나타이드) 치료 안내와 FAQ", description: "에페의 치료 대상, 증량 일정, 주사 방법과 자주 묻는 질문. 국내 허가사항을 바탕으로 정리한 환자용 안내입니다.", alternates: { canonical: "/clinic/epe" }, robots: { index: epePublished && process.env.VERCEL_ENV !== "preview", follow: epePublished } };
export default function Page() {
  if (!canReadEpe()) notFound();
  return <div className="wrap section article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: "에페 치료 안내와 자주 묻는 질문", url: "https://atowell.kr/clinic/epe", dateModified: "2026-10-24", about: { "@type": "Drug", name: "에페", activeIngredient: "efpeglenatide" }, citation: epeSources.slice(0,3).map(s => s.url) }) }} />
    <div className="kicker">비만·체중관리 · 약물치료</div><h1>에페<br />치료 안내와 자주 묻는 질문</h1>
    <p className="lead">에페글레나타이드 성분의 주 1회 비만치료 주사제입니다. 치료 대상과 사용 방법을 확인하고 개인에게 맞는 치료를 상담하세요.</p>
    <EpeReviewBanner />
    <section className="notice"><h2>처방·가격 안내</h2><p>아토웰의 에페 처방 시작일과 가격은 확인 후 안내할 예정입니다. 이 페이지는 제품의 의료정보를 제공하며 현재 공급이나 처방 가능 여부를 보장하지 않습니다.</p></section>
    <h2>치료 전 확인하세요</h2><p>당뇨를 동반하지 않은 성인의 비만·과체중 치료에 허가된 약입니다. BMI와 동반질환, 현재 복용약과 병력을 확인해 처방 여부를 결정합니다.</p><Link className="text-link" href="/medical/obesity/epe-faq/before-starting">구체적인 치료 대상과 주의사항 →</Link>
    <h2>주 1회, 단계적으로 증량합니다</h2><div className="table-scroll"><table><caption>에페의 허가된 증량 일정</caption><thead><tr><th scope="col">기간</th><th scope="col">주 1회 용량</th></tr></thead><tbody>{epeDoseSchedule.map(([period,dose]) => <tr key={period}><td>{period}</td><td>{dose}</td></tr>)}</tbody></table></div><p>증량 시점은 불편한 증상과 치료 반응에 따라 의료진과 조정합니다. <a className="text-link" href={epeSources[1].url} target="_blank" rel="noreferrer">공식 제품정보 ↗</a></p>
    <h2>체중 감량·유지</h2><div className="actions"><Link className="button secondary" href="/medical/obesity/goals">감량 목표 세우기</Link><Link className="button secondary" href="/medical/obesity/weight-maintenance">유지기 생활관리</Link></div>
    <section className="notice"><h2>에페 주사 놓는 방법</h2><p>복부 주사, 완료 확인과 보관 방법을 공식 그림 설명서와 함께 확인하세요.</p><VaccinationGuideLinks guides={[epeInjectionGuide]} /></section>
    <section id="faq"><h2>자주 묻는 질문</h2><p>18개 질문을 6개 주제로 정리했습니다.</p><nav className="faq-category-grid" aria-label="에페 질문 카테고리">{epeFaqCategories.map((category,i) => <Link className="quick-card" key={category.slug} href={`/medical/obesity/epe-faq/${category.slug}`}><span className="quick-icon" aria-hidden="true">{i+1}</span><span><strong>{category.title}</strong><small>질문 {category.items.length}개 · 답변 읽기</small></span><span className="quick-arrow" aria-hidden="true">→</span></Link>)}</nav></section>
    <div className="actions"><Link className="button secondary" href="/clinic/obesity">비만·체중관리 안내</Link><Link className="button secondary" href="/location">진료시간·예약</Link></div><EpeFooter />
  </div>;
}
