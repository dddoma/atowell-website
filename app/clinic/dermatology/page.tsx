import type { Metadata } from "next";
import Link from "next/link";
import { dermatologyDraftsVisible } from "@/data/dermatologyArticles";

export const metadata: Metadata = {
  title: "경주 피부질환 진료",
  description: "경주 황성동 아토웰의원의 피부염, 여드름, 두드러기, 무좀, 사마귀, 대상포진·단순포진·수두 등 흔한 피부질환 진료 안내.",
  alternates: { canonical: "/clinic/dermatology" },
};

const conditions = [
  {
    "title": "피부염·습진",
    "text": "가려움, 붉음, 각질 등 증상과 악화요인을 함께 살핍니다.",
    "links": [
      {
        "title": "피부염·습진 관리",
        "href": "/medical/dermatology/dermatitis-eczema",
        "draft": false
      },
      {
        "title": "지루성피부염",
        "href": "/medical/dermatology/seborrheic-dermatitis",
        "draft": false
      }
    ]
  },
  {
    "title": "여드름·모낭염",
    "text": "염증 정도와 피부 상태에 맞춰 치료와 관리 방법을 안내합니다.",
    "links": [
      {
        "title": "여드름 치료 시점",
        "href": "/medical/dermatology/acne",
        "draft": false
      },
      {
        "title": "모낭염 관리",
        "href": "/medical/dermatology/folliculitis",
        "draft": false
      }
    ]
  },
  {
    "title": "두드러기",
    "text": "발생 시점과 반복 양상, 동반 증상을 확인해 접근합니다.",
    "links": [
      {
        "title": "두드러기 의료정보",
        "href": "/medical/dermatology/urticaria",
        "draft": false
      }
    ]
  },
  {
    "title": "무좀·손발톱무좀",
    "text": "비슷해 보이는 다른 질환과 구분하고 치료 방향을 설명합니다.",
    "links": [
      {
        "title": "무좀과 습진의 차이",
        "href": "/medical/dermatology/athletes-foot-eczema",
        "draft": false
      },
      {
        "title": "손발톱무좀 치료",
        "href": "/medical/dermatology/nail-fungus",
        "draft": false
      }
    ]
  },
  {
    "title": "사마귀·티눈",
    "text": "병변의 성격과 위치, 생활 불편을 고려해 치료 방법을 상담합니다.",
    "links": [
      {
        "title": "사마귀와 티눈 구분",
        "href": "/medical/dermatology/warts-corns",
        "draft": false
      }
    ]
  },
  {
    title: "대상포진·단순포진·수두",
    text: "물집과 통증의 양상, 전염 가능성을 확인하고 치료 시점과 생활 주의사항을 안내합니다.",
    links: [
      { title: "대상포진 치료 시점", href: "/medical/dermatology/shingles", draft: true },
      { title: "단순포진 관리", href: "/medical/dermatology/herpes-simplex", draft: true },
      { title: "수두 증상과 전염 예방", href: "/medical/dermatology/chickenpox", draft: true },
    ],
  }
];

export default function Page() {
  return (
    <>
      <section className="page-hero care-hero">
        <div className="wrap narrow">
          <div className="kicker">피부질환</div>
          <h1>일상에서 자주 만나는<br />피부 문제를 살핍니다</h1>
          <p className="lead">겉으로 비슷해 보여도 원인과 치료가 다를 수 있습니다. 증상이 생긴 과정과 피부 상태를 함께 확인합니다.</p>
          <div className="actions"><Link className="button primary" href="/location">진료시간 확인</Link><Link className="button secondary" href="/medical/dermatology">피부질환 의료정보</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">주요 진료</div><h2>흔한 피부질환</h2></div><p>아래 항목 외의 피부 문제도 진료 후 필요한 방향을 안내합니다.</p></div>
          <div className="service-list">
            {conditions.map(({title, text, links}, index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p><div className="condition-guide-links">{links.filter((link) => !link.draft || dermatologyDraftsVisible).map((link) => <Link className="text-link" key={link.href} href={link.href}>{link.title} →</Link>)}</div></div></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap process-grid">
          <div><span>1</span><h3>증상과 경과 확인</h3><p>언제 시작됐는지, 무엇이 불편한지 먼저 듣습니다.</p></div>
          <div><span>2</span><h3>피부 상태 관찰</h3><p>병변의 모양과 분포, 필요한 병력을 확인합니다.</p></div>
          <div><span>3</span><h3>치료·관리 설명</h3><p>치료 방법과 생활에서 주의할 점을 함께 안내합니다.</p></div>
        </div>
      </section>
    </>
  );
}
