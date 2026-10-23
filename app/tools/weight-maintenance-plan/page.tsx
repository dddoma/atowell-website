import type { Metadata } from "next";
import Link from "next/link";
import MaintenancePlan from "./MaintenancePlan";
import styles from "../../medical/obesity/obesity.module.css";

export const metadata: Metadata = {
  title: "나의 계획 문자 상담 | 체중 유지기",
  description: "상담 중 목표 체중과 식사·운동·주사 계획을 정하고 환자에게 보낼 문자 내용을 만듭니다.",
  alternates: { canonical: "/tools/weight-maintenance-plan" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <article className={styles.article}>
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/mounjaro">마운자로 처방상담</Link><span aria-hidden="true">/</span><Link href="/medical/obesity/weight-maintenance">체중 유지기 안내</Link><span aria-hidden="true">/</span><span>나의 계획 문자 상담</span></nav>
    <header className={styles.header}><div className="kicker">진료실에서 함께 작성하는 체중 유지기 계획</div><h1>나의 계획 문자 상담</h1><p className={styles.lead}>목표 체중과 생활·치료 계획을 함께 정하고, 완성된 내용을 복사해 환자에게 문자로 전달하세요.</p></header>
    <MaintenancePlan />
    <Link className={styles.back} href="/medical/obesity/weight-maintenance">← 체중 유지기 안내문으로 돌아가기</Link>
  </article>;
}
