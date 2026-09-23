import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "피부질환 의료정보",
  description: "아토웰의원이 준비하는 환자용 피부질환 의료정보.",
  alternates: { canonical: "/medical/dermatology" },
};

const topics = [
  ["얼굴 지루성피부염, 어떻게 관리하나요?", "세안·보습·피부장벽 관리와 여드름과의 차이", "/medical/dermatology/seborrheic-dermatitis"],
] as const;

const preparing = [
  ["여드름은 언제 치료해야 하나요?", "염증 정도와 흉터 예방을 고려한 치료 시점"],
  ["두드러기가 생기면 무엇을 봐야 하나요?", "급성·만성 두드러기와 진료가 필요한 경우"],
  ["무좀과 습진은 어떻게 다른가요?", "비슷해 보이는 발 피부질환의 구분"],
  ["사마귀와 티눈은 어떻게 구분하나요?", "모양과 통증, 치료 접근의 차이"],
];

export default function Page() {
  return (
    <div className="wrap section library-page">
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>피부질환 의료정보</h1>
      <p className="lead">진료실에서 자주 받는 질문을 환자가 이해하기 쉬운 의료정보로 정리합니다.</p>
      <div className="topic-list">
        {topics.map(([title, text, href]) => <article key={title}><span>의료정보</span><div><h2><Link href={href}>{title}</Link></h2><p>{text}</p><Link className="text-link" href={href}>읽어보기 →</Link></div></article>)}
        {preparing.map(([title, text]) => <article key={title}><span>준비 중</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
      </div>
    </div>
  );
}
