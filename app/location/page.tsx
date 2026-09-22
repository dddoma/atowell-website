import type { Metadata } from "next";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "진료시간·오시는 길",
  description: `${clinic.address} · 전화 ${clinic.phone} · 진료시간과 주차 안내`,
  alternates: { canonical: "/location" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <div className="kicker">VISIT ATOWELL</div>
          <h1>진료시간·오시는 길</h1>
          <p className="lead">방문 전 진료시간을 확인해 주세요. 진료 및 시술 문의는 전화로 안내해 드립니다.</p>
          <div className="actions"><a className="button primary" href={`tel:${clinic.phone}`}>전화 {clinic.phone}</a></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap visit-grid">
          <div>
            <div className="eyebrow">진료시간</div>
            <h2>주간 진료 안내</h2>
            <div className="schedule">
              {clinic.hours.map(([day, hours]) => <div key={day}><strong>{day}</strong><span>{hours}</span></div>)}
            </div>
            <p className="notice">진료시간은 사정에 따라 변경될 수 있으므로 방문 전 전화 확인을 권합니다.</p>
          </div>
          <div id="directions" className="location-card">
            <div className="eyebrow">오시는 길</div>
            <h2>경주 황성동</h2>
            <p className="body-large">{clinic.address}</p>
            <dl>
              <div><dt>전화</dt><dd><a href={`tel:${clinic.phone}`}>{clinic.phone}</a></dd></div>
              <div><dt>주차</dt><dd>{clinic.parking}</dd></div>
            </dl>
            <div className="actions map-actions">
              <a className="button secondary" href={`https://map.naver.com/p/search/${encodeURIComponent(clinic.name)}`} target="_blank" rel="noreferrer">아토웰의원 지도 보기</a>
              <a className="button secondary" href={`https://map.naver.com/p/search/${encodeURIComponent(clinic.parkingMapName)}`} target="_blank" rel="noreferrer">황성동 공영주차장 지도 보기</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
