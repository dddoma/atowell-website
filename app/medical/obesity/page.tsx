import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비만·체중관리 의료정보",
  description: "아토웰의원이 준비하는 환자용 비만·체중관리 의료정보.",
  alternates: { canonical: "/medical/obesity" },
};

const topics = [
  ["비만은 어떻게 진단하나요?", "BMI와 허리둘레, 건강 위험을 함께 보는 이유"],
  ["체중감량 목표는 어떻게 정하나요?", "현재 체중과 건강상태에 맞춘 현실적인 목표"],
  ["비만 약물치료는 언제 고려하나요?", "생활관리와 약물치료의 역할"],
  ["마운자로·위고비의 흔한 이상반응은?", "치료 중 관찰할 증상과 진료가 필요한 경우"],
  ["체중감량 정체기는 왜 생기나요?", "정체기의 의미와 식사·활동 점검"],
];

export default function Page() {
  return (
    <div className="wrap section library-page">
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>비만·체중관리 의료정보</h1>
      <p className="lead">체중과 약물치료에 관해 진료실에서 자주 설명하는 내용을 준비하고 있습니다. 원장 검토를 마친 글부터 차례로 공개합니다.</p>
      <div className="topic-list">
        {topics.map(([title, text]) => <article key={title}><span>준비 중</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
      </div>
    </div>
  );
}
