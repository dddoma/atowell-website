import type { Metadata } from "next";
import Link from "next/link";
import { mounjaroPrices, nonCoveredVisitFee, priceUpdatedAt } from "@/data/clinic";

export const metadata: Metadata = {
  title: "경주 마운자로 처방 상담·가격 안내",
  description: "경주 황성동 아토웰의원의 마운자로(티르제파타이드) 처방 상담과 2.5mg~15mg 비급여 가격 안내.",
  alternates: { canonical: "/clinic/mounjaro" },
};

const faq = [
  ["경주에서 마운자로 처방 상담을 받을 수 있나요?", "아토웰의원에서 마운자로 비만치료 상담을 받을 수 있습니다. 처방 여부와 용량은 진료 후 의료진의 의학적 판단에 따라 결정됩니다."],
  ["마운자로 가격은 얼마인가요?", `현재 공개 가격은 2.5mg 4펜 ${mounjaroPrices[0].price.toLocaleString()}원부터이며 용량에 따라 다릅니다. 비급여 진료비는 별도입니다.`],
  ["처음부터 원하는 용량을 선택할 수 있나요?", "아닙니다. 처방과 증량은 환자의 상태, 치료 반응과 이상반응 등을 고려해 의료진이 결정합니다."],
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "경주 마운자로 처방 상담·가격 안내",
    dateModified: priceUpdatedAt,
    about: { "@type": "Drug", name: "마운자로", activeIngredient: "tirzepatide" },
  };

  return (
    <div className="wrap section article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="kicker">비만치료 · 약물치료</div>
      <h1>경주 마운자로<br />처방 상담·가격 안내</h1>
      <p className="lead">아토웰의원에서는 마운자로(티르제파타이드) 비만치료 상담을 시행합니다. 처방 여부와 적절한 용량은 진료 후 결정됩니다.</p>
      <h2>현재 비급여 가격</h2>
      <div className="table-scroll">
        <table><thead><tr><th>용량</th><th>수량</th><th>가격</th></tr></thead><tbody>{mounjaroPrices.map((item) => <tr key={item.dose}><td>{item.dose}</td><td>{item.quantity}</td><td>{item.price.toLocaleString()}원</td></tr>)}</tbody></table>
      </div>
      <p className="notice">비급여 진료비 {nonCoveredVisitFee.toLocaleString()}원 별도 · 가격 최종 업데이트 {priceUpdatedAt}</p>
      <h2>자주 묻는 질문</h2>
      <div className="faq">{faq.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      <div className="actions"><Link className="button secondary" href="/clinic/obesity">비만치료 안내</Link><Link className="button primary" href="/location">진료시간 확인</Link></div>
      <div className="meta">가격 최종 업데이트 {priceUpdatedAt}<br />이 페이지는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.</div>
    </div>
  );
}
