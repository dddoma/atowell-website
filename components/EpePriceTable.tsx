import { epePrices, epePriceUpdatedAt, nonCoveredVisitFee } from "@/data/clinic";

export default function EpePriceTable() {
  return <>
    <div className="price-title"><h2>에페</h2><span>비급여진료비 세트당<br />{nonCoveredVisitFee.toLocaleString("ko-KR")}원 별도</span></div>
    <div className="table-scroll"><table aria-label="에페 비급여 가격표">
      <thead><tr><th scope="col">용량</th><th scope="col">수량</th><th scope="col">가격</th></tr></thead>
      <tbody>{epePrices.map(item => <tr key={item.dose}><td>{item.dose}</td><td>{item.quantity}</td><td>{item.price === null ? "미정" : item.price.toLocaleString("ko-KR") + "원"}</td></tr>)}</tbody>
    </table></div>
    <p className="table-note">가격 최종 업데이트 {epePriceUpdatedAt}</p>
  </>;
}
