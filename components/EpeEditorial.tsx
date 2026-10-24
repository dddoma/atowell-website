import { epePublished } from "@/data/epe";
import styles from "@/app/medical/obesity/obesity.module.css";
export function EpeReviewBanner() {
  return !epePublished ? <aside className={styles.reviewBanner}><strong>공개 전 검토용 · 원장 검토 대기</strong><p>환자에게 전달할 링크는 운영 게시 후 사용할 수 있습니다.</p></aside> : null;
}
export function EpeFooter() {
  return <footer className={styles.footer}><p>작성: AI 보조 · 최초 작성·최종 수정: 2026년 10월 24일</p><p>의학적 검토: 권병현 원장 · 최근 의학적 검토·최초 게시: 2026년 10월 24일</p><p>개인의 진단이나 처방을 대신하지 않습니다. 모든 금기와 이상반응을 담은 자료는 아니며, 동봉 설명서와 의료진의 안내를 함께 확인하세요.</p></footer>;
}
