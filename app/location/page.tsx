import type { Metadata } from "next";
import { clinic, reservationLinks } from "@/data/clinic";

export const metadata: Metadata = {
  title: "진료시간·예약·오시는 길",
  description: `${clinic.address} · 전화 ${clinic.phone} · 진료시간, 대면·비대면 진료예약과 주차 안내`,
  alternates: { canonical: "/location" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <div className="kicker">VISIT ATOWELL</div>
          <h1>진료시간·예약·오시는 길</h1>
          <p className="lead">진료시간을 확인하고 대면 진료 또는 비대면 전화 진료를 예약하실 수 있습니다.</p>
          <div className="actions"><a className="button primary" href={`tel:${clinic.phone}`}>전화 {clinic.phone}</a></div>
        </div>
      </section>
      <section className="section section-tint reservation-section">
        <div className="wrap">
          <div className="eyebrow">진료예약</div>
          <h2>원하시는 진료 방법을 선택하세요</h2>
          <div className="reservation-grid">
            <article className="reservation-card">
              <span className="reservation-type">대면 진료</span>
              <h3>병원 내 진료</h3>
              <p>일반 진료와 시술은 아래 방법으로 예약할 수 있습니다.</p>
              <div className="reservation-links">
                <a className="button primary" href={reservationLinks.naverVisit} target="_blank" rel="noreferrer">네이버 진료예약</a>
                <a className="button secondary" href={reservationLinks.naverProcedure} target="_blank" rel="noreferrer">네이버 시술예약</a>
                <a className="button secondary" href={reservationLinks.ddocdoc} target="_blank" rel="noreferrer">똑닥예약</a>
                <a className="button secondary" href={`tel:${clinic.phone}`}>전화예약 {clinic.phone}</a>
              </div>
              <p className="reservation-note">전화예약은 근무시간에만 가능합니다.</p>
            </article>
            <article className="reservation-card remote-card">
              <span className="reservation-type">비대면 진료</span>
              <h3>전화 진료</h3>
              <p>닥터나우에서 아토웰의원 비대면 진료를 신청할 수 있습니다.</p>
              <div className="reservation-links">
                <a className="button primary" href={reservationLinks.doctorNow} target="_blank" rel="noreferrer">닥터나우에서 예약</a>
              </div>
            </article>
          </div>
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
