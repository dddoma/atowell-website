import type { Metadata } from "next"; import { clinic } from "@/data/clinic";
export const metadata:Metadata={title:"의료진·병원 소개",alternates:{canonical:"/about"}};
export default function Page(){return <div className="wrap section article"><div className="kicker">About</div><h1>{clinic.name}</h1><p className="lead">피부 건강을 위한 피부과 중점 진료와 비만치료 상담을 제공하는 경주 황성동 의원입니다.</p><h2>권병현 MD, PhD</h2><p>부산대학교 의과대학 졸업<br/>부산대학교병원 전공의 및 전임의 수료<br/>전 부산대학교 의과대학 부교수</p></div>}
