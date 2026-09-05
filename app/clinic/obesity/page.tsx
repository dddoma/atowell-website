import Link from "next/link";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";
const title = "경주 비만진료 안내";
export const metadata = pageMetadata(title, "아토웰의원의 체중관리·비만치료 상담, 마운자로·위고비 안내와 비급여 가격 확인.", "/clinic/obesity");
export default function Page() { return <ServicePage title={title} path="/clinic/obesity"><p className="lead">경주 황성동 아토웰의원에서 체중관리와 비만치료 상담을 받으실 수 있습니다.</p><h2>진료·상담 분야</h2><p>식이요법, 인지행동치료와 약물치료에 대해 상담합니다. 구체적인 치료 방법과 처방 여부는 진료 후 결정합니다.</p><h2>약제별 상담·가격 안내</h2><div className="actions"><Link className="btn" href="/clinic/mounjaro">마운자로</Link><Link className="btn" href="/clinic/wegovy">위고비</Link></div><h2>비만 의료정보</h2><p>진료 안내와 별도로, 의료진 검토를 마친 환자용 정보를 준비하고 있습니다.</p><Link className="text-link" href="/medical/obesity">비만 의료정보 준비 현황</Link></ServicePage>; }
