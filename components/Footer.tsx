import Link from "next/link";
import { clinic } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <strong className="footer-brand">{clinic.name}</strong>
          <p>{clinic.address}<br /><a href={`tel:${clinic.phone}`}>{clinic.phone}</a></p>
        </div>
        <div>
          <strong>진료</strong>
          <Link href="/clinic/dermatology">피부질환</Link>
          <Link href="/clinic/aesthetic">피부미용</Link>
          <Link href="/clinic/obesity">비만치료</Link>
        </div>
        <div>
          <strong>이용안내</strong>
          <Link href="/price">비급여 가격</Link>
          <Link href="/location">진료시간·예약·오시는 길</Link>
          <Link href="/about">병원소개</Link>
        </div>
      </div>
      <div className="wrap footer-note">
        의료정보는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.
      </div>
    </footer>
  );
}
