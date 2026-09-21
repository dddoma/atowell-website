import type { Metadata } from "next";
import { mounjaroPrices, wegovyPrices, nonCoveredVisitFee, priceUpdatedAt } from "@/data/clinic";

export const metadata: Metadata = {
  title: "비급여 가격 안내",
  description: "아토웰의원 마운자로·위고비 등 현재 공개 중인 비급여 가격 안내.",
  alternates: { canonical: "/price" },
};

function PriceTable({ items }: { items: { dose: string; quantity: string; price: number }[] }) {
  return (
    <div className="table-scroll">
      <table>
        <thead><tr><th>용량</th><th>수량</th><th>가격</th></tr></thead>
        <tbody>{items.map((item) => <tr key={item.dose}><td>{item.dose}</td><td>{item.quantity}</td><td>{item.price.toLocaleString()}원</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <div className="kicker">NON-COVERED SERVICES</div>
          <h1>비급여 가격 안내</h1>
          <p className="lead">현재 홈페이지에 공개한 비급여 항목입니다. 처방 여부와 용량은 진료 후 의료진의 판단에 따라 결정됩니다.</p>
          <p className="updated">가격 최종 업데이트 {priceUpdatedAt}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap price-grid">
          <article className="price-card"><div className="eyebrow">비만 약물치료</div><h2>마운자로</h2><PriceTable items={mounjaroPrices} /></article>
          <article className="price-card"><div className="eyebrow">비만 약물치료</div><h2>위고비</h2><PriceTable items={wegovyPrices} /></article>
        </div>
        <div className="wrap"><p className="notice price-notice">비급여 진료비는 방문당 {nonCoveredVisitFee.toLocaleString()}원으로 약제비와 별도입니다. 실제 비용은 진료 내용에 따라 달라질 수 있습니다.</p></div>
      </section>
    </>
  );
}
