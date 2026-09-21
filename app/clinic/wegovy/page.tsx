import type { Metadata } from "next";
import Link from "next/link";
import { wegovyPrices, nonCoveredVisitFee, priceUpdatedAt } from "@/data/clinic";

export const metadata: Metadata = {
  title: "경주 위고비 처방 상담·가격 안내",
  description: "경주 황성동 아토웰의원의 위고비(세마글루타이드) 비만치료 상담과 비급여 가격 안내.",
  alternates: { canonical: "/clinic/wegovy" },
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
      <div className="kicker">비만치료 · 약물치료</div>
      <h1>경주 위고비<br />처방 상담·가격 안내</h1>
      <p className="lead">아토웰의원에서는 위고비(세마글루타이드) 비만치료 상담을 시행합니다. 처방 여부와 적절한 용량은 진료 후 결정됩니다.</p>
      <h2>현재 비급여 가격</h2>
      <div className="table-scroll"><table><thead><tr><th>용량</th><th>수량</th><th>가격</th></tr></thead><tbody>{wegovyPrices.map((item) => <tr key={item.dose}><td>{item.dose}</td><td>{item.quantity}</td><td>{item.price.toLocaleString()}원</td></tr>)}</tbody></table></div>
      <p className="notice">비급여 진료비 {nonCoveredVisitFee.toLocaleString()}원 별도 · 가격 최종 업데이트 {priceUpdatedAt}</p>
      <h2>처방 전 확인할 내용</h2>
      <p>현재 건강상태와 체중 변화, 복용 중인 약, 이전 체중감량 치료 경험을 확인합니다. 치료 시작 여부와 증량은 진료 후 의료진이 판단합니다.</p>
      <div className="actions"><Link className="button secondary" href="/clinic/obesity">비만치료 안내</Link><Link className="button primary" href="/location">진료시간 확인</Link></div>
      <div className="meta">가격 최종 업데이트 {priceUpdatedAt}<br />이 페이지는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.</div>
    </div>
  );
}
