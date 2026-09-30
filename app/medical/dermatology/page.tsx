import type { Metadata } from "next";
import Link from "next/link";
import { dermatologyArticles } from "@/data/dermatologyArticles";

export const metadata: Metadata = {
  title: "피부질환 의료정보",
  description: "비립종, 지루성피부염, 여드름, 두드러기, 무좀·습진, 사마귀·티눈의 환자용 의료정보.",
  alternates: { canonical: "/medical/dermatology" },
};

const topics = [
  ["눈 밑에 하얀 좁쌀이 생겼어요. 비립종일까요?", "비립종과 비슷한 병변, 자가 제거 주의점과 진료에서 확인하는 방법", "/medical/dermatology/milia"],
  ["얼굴 지루성피부염, 어떻게 관리하나요?", "세안·보습·피부장벽 관리와 여드름과의 차이", "/medical/dermatology/seborrheic-dermatitis"],
] as const;


export default function Page() {
  return (
    <div className="wrap section library-page">
      <div className="kicker">MEDICAL LIBRARY</div>
      <h1>피부질환 의료정보</h1>
      <p className="lead">진료실에서 자주 받는 질문을 환자가 이해하기 쉬운 의료정보로 정리합니다.</p>
      <div className="topic-list">
        {topics.map(([title, text, href]) => <article key={title}><span>의료정보</span><div><h2><Link href={href}>{title}</Link></h2><p>{text}</p><Link className="text-link" href={href}>읽어보기 →</Link></div></article>)}
        {dermatologyArticles.map(({ slug, title, description }) => <article key={slug}><span>의료정보</span><div><h2><Link href={`/medical/dermatology/${slug}`}>{title}</Link></h2><p>{description}</p><Link className="text-link" href={`/medical/dermatology/${slug}`}>읽어보기 →</Link></div></article>)}
      </div>
    </div>
  );
}
