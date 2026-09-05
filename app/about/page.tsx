import { clinic } from "@/data/clinic";
import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/JsonLd";
import { physicianSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("병원·의료진 소개", clinic.name + "의 피부·비만 진료와 의료진 " + clinic.doctor + "의 이력을 안내합니다.", "/about");
export default function Page() { return <ServicePage title="병원·의료진 소개" path="/about"><p className="lead">{clinic.name}은 피부질환 진료와 비만치료 상담을 제공하는 경주 황성동 의원입니다.</p><h2>{clinic.doctor}</h2><ul>{clinic.doctorHistory.map(item => <li key={item}>{item}</li>)}</ul><h2>병원 위치</h2><p>{clinic.address}</p><JsonLd data={physicianSchema}/></ServicePage>; }
