import Link from "next/link";
import { clinic, mounjaroPrices } from "@/data/clinic";
import { PriceTable, PriceNotice } from "@/components/PriceTable";
import { ClinicHours } from "@/components/ClinicHours";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(clinic.name + " | 경주 황성동 피부·비만 진료", "경주 황성동 아토웰의원의 피부·비만 진료, 마운자로·위고비 상담, 비급여 가격과 진료시간·위치를 안내합니다.", "/");
export default function Home() { return <>
  <section className="hero"><div className="wrap"><p className="kicker">ATOWELL CLINIC · 경주 황성동</p><h1>피부 건강과<br/>비만 진료를 한곳에서</h1><p className="lead">경주 황성동 {clinic.name}입니다. 피부질환 진료와 피부미용, 비만치료 상담을 제공합니다.</p><div className="actions"><a className="btn primary" href={"tel:" + clinic.phone}>전화 문의</a><Link className="btn" href="/price">비급여 가격</Link><Link className="btn" href="/location">진료시간·위치</Link></div></div></section>
  <section className="section"><div className="wrap"><p className="kicker">진료 안내</p><h2>어떤 진료가 필요하신가요?</h2><div className="grid"><Link className="card card-link" href="/clinic/dermatology"><h3>피부진료 →</h3><p>피부질환과 피부미용 상담 안내</p></Link><Link className="card card-link" href="/clinic/obesity"><h3>비만진료 →</h3><p>체중관리와 비만치료 상담 안내</p></Link><Link className="card card-link" href="/about"><h3>병원·의료진 →</h3><p>{clinic.doctor}</p></Link></div><div className="actions"><Link className="btn" href="/clinic/mounjaro">마운자로 상담·가격</Link><Link className="btn" href="/clinic/wegovy">위고비 상담·가격</Link></div></div></section>
  <section className="section soft"><div className="wrap"><h2>마운자로 공개 가격</h2><p>처방 여부와 용량은 진료 후 의료진이 결정합니다.</p><PriceTable name="마운자로 · 일부 용량" rows={mounjaroPrices.slice(0, 3)}/><PriceNotice/><div className="actions"><Link className="btn" href="/price">마운자로·위고비 전체 가격 보기</Link></div></div></section>
  <section className="section"><div className="wrap two-columns"><div><h2>방문 안내</h2><p>{clinic.address}</p><p>{clinic.parking}</p><a className="text-link" href={"tel:" + clinic.phone}>전화 {clinic.phone}</a><div className="actions"><Link className="btn" href="/location">오시는 길</Link></div></div><ClinicHours/></div></section>
  <section className="section"><div className="wrap"><h2>피부·비만 의료정보</h2><p className="lead">의료진 검토를 마친 글부터 공개할 예정입니다. 현재 공개된 의료정보 글은 없습니다.</p><div className="grid"><Link className="card card-link" href="/medical/obesity"><h3>비만 의료정보 →</h3><p>준비 중</p></Link><Link className="card card-link" href="/medical/dermatology"><h3>피부 의료정보 →</h3><p>준비 중</p></Link></div></div></section>
</>; }
