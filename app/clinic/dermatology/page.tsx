import Link from "next/link";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";
const title = "경주 피부진료 안내";
export const metadata = pageMetadata(title, "경주 황성동 아토웰의원의 피부질환 진료와 피부미용 상담, 진료시간·위치 안내.", "/clinic/dermatology");
export default function Page() { return <ServicePage title={title} path="/clinic/dermatology"><p className="lead">아토웰의원은 피부질환 진료와 피부미용 상담을 제공합니다.</p><h2>피부질환 진료</h2><p>아토피, 습진, 두드러기, 티눈, 사마귀, 무좀, 여드름 등 피부질환을 진료합니다.</p><h2>피부미용 상담</h2><p>레이저, IPL, 토닝, 프락셀, 보톡스, 필러 등에 대해 상담하실 수 있습니다. 시술 가능 여부와 비용은 병원으로 문의해 주세요.</p><h2>피부질환 의료정보</h2><p>질환에 대한 환자용 설명은 의료진 검토를 마친 후 별도 의료정보 영역에 공개할 예정입니다.</p><Link className="text-link" href="/medical/dermatology">피부 의료정보 준비 현황</Link></ServicePage>; }
