import type { Metadata } from "next";
import {
  aestheticPrices,
  documentPrices,
  injectionPrices,
  lesionRemovalPrices,
  mounjaroPrices,
  nonCoveredVisitFee,
  priceUpdatedAt,
  vaccinationPrices,
  wegovyPrices,
} from "@/data/clinic";

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

function GeneralPriceTable({ items }: { items: { item: string; detail: string; price: string }[] }) {
  return (
    <div className="table-scroll">
      <table>
        <thead><tr><th>항목</th><th>부위·횟수</th><th>가격</th></tr></thead>
        <tbody>{items.map((item, index) => <tr key={`${item.item}-${item.detail}-${index}`}><td>{item.item}</td><td>{item.detail}</td><td>{item.price}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function DrugTitle({ children }: { children: string }) {
  return <div className="price-title"><h2>{children}</h2><span>비급여진료비 셋트 당<br />{nonCoveredVisitFee.toLocaleString()}원 별도</span></div>;
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
          <article className="price-card"><div className="eyebrow">비만 약물치료</div><DrugTitle>마운자로</DrugTitle><PriceTable items={mounjaroPrices} /></article>
          <article className="price-card"><div className="eyebrow">비만 약물치료</div><DrugTitle>위고비</DrugTitle><PriceTable items={wegovyPrices} /></article>
        </div>
        <div className="wrap"><p className="notice price-notice">비급여 진료비는 약품비와 별도입니다. 실제 비용은 진료 내용에 따라 달라질 수 있습니다.</p></div>
        <div className="wrap price-grid price-section">
          <article className="price-card"><div className="eyebrow">예방의학</div><h2>예방접종</h2><GeneralPriceTable items={vaccinationPrices} /></article>
        </div>
        <div className="wrap price-grid price-section">
          <article className="price-card"><div className="eyebrow">피부미용</div><h2>피부미용 시술</h2><GeneralPriceTable items={aestheticPrices} /></article>
          <article className="price-card"><div className="eyebrow">주사 치료</div><h2>영양수액주사</h2><GeneralPriceTable items={injectionPrices} /><p className="table-note">비타민 칵테일은 베이스 30,000원에 선택한 약제 비용이 추가됩니다.</p></article>
          <article className="price-card"><div className="eyebrow">피부 치료</div><h2>점·사마귀 제거</h2><GeneralPriceTable items={lesionRemovalPrices} /><p className="table-note">1개 제거 비용은 크기에 따라 달라지며, 첫 1개는 최소 20,000원입니다.</p></article>
          <article className="price-card"><div className="eyebrow">제증명</div><h2>서류 발급</h2><GeneralPriceTable items={documentPrices} /></article>
        </div>
      </section>
    </>
  );
}
