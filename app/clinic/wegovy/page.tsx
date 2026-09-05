import Link from "next/link";
import { wegovyPrices } from "@/data/clinic";
import { ServicePage } from "@/components/ServicePage";
import { PriceTable, PriceNotice } from "@/components/PriceTable";
import { pageMetadata } from "@/lib/metadata";
const title = "경주 위고비 상담·가격 안내";
export const metadata = pageMetadata(title, "경주 황성동 아토웰의원의 위고비 처방 상담, 공개 용량별 비급여 가격과 별도 진료비 안내.", "/clinic/wegovy");
export default function Page() { return <ServicePage title={title} path="/clinic/wegovy">
  <p className="lead">아토웰의원에서는 위고비 비만치료 상담을 제공합니다. 실제 처방 여부와 용량은 진료 후 의료진이 결정합니다.</p>
  <h2>현재 비급여 가격</h2><PriceTable name="위고비" rows={wegovyPrices}/><PriceNotice/>
  <p>표에 없는 용량의 가격과 진료 관련 문의는 병원으로 연락해 주세요.</p>
  <h2>상담 안내</h2><p>진료시간과 위치를 확인한 뒤 방문해 주세요. 상담을 통해 처방 가능 여부와 비용을 안내받으실 수 있습니다.</p>
  <h2>자주 묻는 질문</h2><div className="faq"><article><h3>표에 나온 가격에 진료비가 포함되나요?</h3><p>표의 약제 가격과 비급여 진료비는 별도입니다. 진료비는 가격표 아래 안내를 확인해 주세요.</p></article><article><h3>원하는 용량을 선택할 수 있나요?</h3><p>처방 여부와 용량은 의료진이 진료 후 결정합니다.</p></article></div>
  <p><Link className="text-link" href="/clinic/obesity">비만진료 안내</Link></p>
</ServicePage>; }
