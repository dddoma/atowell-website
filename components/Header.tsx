import Link from "next/link";
import Image from "next/image";
import { skinTreatmentArticles, canReadSkinTreatment } from "@/data/skinTreatmentArticles";

const careLinks = [
  ["피부질환", "/clinic/dermatology"],
  ["피부미용", "/clinic/aesthetic"],
  ["비만치료", "/clinic/obesity"],
] as const;

// The new menu stays out of Production while every skin-treatment article is a draft.
const showSkinTreatments = skinTreatmentArticles.some(canReadSkinTreatment);
const informationLinks: ReadonlyArray<readonly [string, string]> = [
  ["피부질환 의료정보", "/medical/dermatology"],
  ...(showSkinTreatments ? [["피부치료 의료정보", "/medical/skin-treatments"] as const] : []),
  ["비만·체중관리 의료정보", "/medical/obesity"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="아토웰의원 홈">
          <Image src="/icon.svg" alt="" width={38} height={38} className="clinic-logo brand-symbol" loading="eager" unoptimized />
          <span>아토웰의원<small>ATOWELL CLINIC</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <details className="nav-dropdown">
            <summary>진료</summary>
            <div className="dropdown-panel">{careLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
          </details>
          <details className="nav-dropdown">
            <summary>의료정보</summary>
            <div className="dropdown-panel">{informationLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
          </details>
          <Link href="/price">비급여 가격</Link>
          <Link href="/location">진료시간·예약·오시는 길</Link>
          <Link href="/about">병원소개</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">메뉴</summary>
          <nav aria-label="모바일 메뉴">
            <strong>진료</strong>
            {careLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <strong>의료정보</strong>
            {informationLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <strong>이용안내</strong>
            <Link href="/price">비급여 가격</Link>
            <Link href="/location">진료시간·예약·오시는 길</Link>
            <Link href="/about">병원소개</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
