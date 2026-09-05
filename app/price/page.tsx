import { mounjaroPrices, wegovyPrices } from "@/data/clinic";
import { PriceTable, PriceNotice } from "@/components/PriceTable";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("비급여 가격 안내", "아토웰의원의 마운자로·위고비 용량별 비급여 가격, 별도 진료비와 가격 업데이트 날짜 안내.", "/price");
export default function Page() { return <ServicePage title="비급여 가격 안내" path="/price"><p className="lead">마운자로·위고비의 홈페이지 공개 가격입니다. 처방 여부와 용량은 진료 후 결정됩니다.</p><PriceNotice/><h2>마운자로</h2><PriceTable name="마운자로" rows={mounjaroPrices}/><h2>위고비</h2><PriceTable name="위고비" rows={wegovyPrices}/><p>표에 없는 약제·용량이나 기타 비급여 항목은 병원으로 문의해 주세요.</p></ServicePage>; }
