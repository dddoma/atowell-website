import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "피부치료 의료정보",
  description: "피부 시술과 치료 전후에 알아둘 환자용 의료정보를 준비하고 있습니다.",
  alternates: { canonical: "/medical/skin-treatments" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div className="wrap section library-page narrow">
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>피부치료 의료정보</h1>
      <p className="lead">피부 시술과 치료 전후에 자주 묻는 질문을 준비하고 있습니다. 원장 검토를 마친 글부터 차례로 공개합니다.</p>
      <div className="notice" style={{ marginTop: 32 }}><strong>준비 중</strong><p>현재 공개된 피부치료 의료정보는 없습니다. 진료 안내와 피부질환 의료정보는 아래에서 확인하실 수 있습니다.</p></div>
      <div className="actions"><Link className="button secondary" href="/clinic/aesthetic">피부미용 진료 안내</Link><Link className="button secondary" href="/medical/dermatology">피부질환 의료정보</Link></div>
    </div>
  );
}
