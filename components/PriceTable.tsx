import { nonCoveredVisitFee, priceUpdatedAt } from "@/data/clinic";
export type PriceRow = { dose: string; quantity: string; price: number };
export const formatWon = (price: number) => price.toLocaleString("ko-KR") + "원";
export function PriceTable({ name, rows }: { name: string; rows: PriceRow[] }) {
  return <table><caption>{name} 비급여 가격</caption><thead><tr><th scope="col">용량</th><th scope="col">수량</th><th scope="col">가격</th></tr></thead><tbody>{rows.map(row => <tr key={row.dose}><th scope="row">{row.dose}</th><td>{row.quantity}</td><td>{formatWon(row.price)}</td></tr>)}</tbody></table>;
}
export function PriceNotice() { return <p className="notice">비급여 진료비 방문당 {formatWon(nonCoveredVisitFee)} 별도 · 가격 최종 업데이트 <time dateTime={priceUpdatedAt}>{priceUpdatedAt}</time></p>; }
