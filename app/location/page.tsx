import type { Metadata } from "next"; import { clinic } from "@/data/clinic";
export const metadata:Metadata={title:"진료시간·오시는 길",description:`${clinic.address} · ${clinic.phone}`,alternates:{canonical:"/location"}};
export default function Page(){return <div className="wrap section"><h1>진료시간·오시는 길</h1><h2>{clinic.address}</h2><p className="lead">전화 {clinic.phone}<br/>{clinic.parking}</p><table><tbody>{clinic.hours.map(([d,h])=><tr key={d}><td>{d}</td><td>{h}</td></tr>)}</tbody></table></div>}
