import { clinic } from "@/data/clinic";
import type { MedicalArticleInfo } from "@/data/medicalArticles";

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}

export function MedicalArticleFooter({ info }: { info: MedicalArticleInfo }) {
  return (
    <footer className="meta medical-article-meta" aria-label="게시 및 의학적 검토 정보">
      <p className="medical-article-dates">
        <span>최초 게시: <time dateTime={info.publishedAt}>{formatDate(info.publishedAt)}</time></span>
        <span>최종 수정: <time dateTime={info.modifiedAt}>{formatDate(info.modifiedAt)}</time></span>
      </p>
      <p>이 글은 일반적인 의료정보로, 개인의 진단이나 처방을 대신하지 않습니다.</p>
      <p>이 글은 {clinic.name} {info.reviewerName} 원장이 의학적으로 검토했습니다.</p>
    </footer>
  );
}
