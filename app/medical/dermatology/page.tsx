import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("피부질환 의료정보", "피부질환 의료정보 준비 현황. 의료진 검토를 마친 글부터 공개합니다.", "/medical/dermatology", false);
export default function Page() { return <div className="wrap section article"><Breadcrumbs title="피부질환 의료정보" path="/medical/dermatology"/><p className="kicker">의료정보</p><h1>피부질환 의료정보</h1><p className="lead">의료진 검토를 마친 글부터 공개할 예정입니다.</p><p className="notice">현재 공개된 의료정보 글은 없습니다.</p><p>공개하는 글에는 작성자, 의학적 검토자, 실제 검토일과 참고문헌을 표시합니다.</p><Link className="btn" href="/clinic/dermatology">진료 안내 보기</Link></div>; }
