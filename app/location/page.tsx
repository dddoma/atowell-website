import { clinic } from "@/data/clinic";
import { ClinicHours } from "@/components/ClinicHours";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("진료시간·오시는 길", clinic.address + " · " + clinic.phone + " · 요일별 진료시간과 주차 안내.", "/location");
export default function Page() { return <ServicePage title="진료시간·오시는 길" path="/location"><p className="lead">{clinic.address}</p><ClinicHours/><h2>연락처</h2><p><a className="text-link" href={"tel:" + clinic.phone}>{clinic.phone}</a></p><h2>주차 안내</h2><p>{clinic.parking}</p></ServicePage>; }
