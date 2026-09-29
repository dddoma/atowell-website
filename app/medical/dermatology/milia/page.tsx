import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { MedicalArticleFooter } from "@/components/MedicalArticleFooter";
import { medicalArticles } from "@/data/medicalArticles";

const path = "/medical/dermatology/milia";
const articleInfo = medicalArticles.milia;
const title = "눈 밑에 하얀 좁쌀이 생겼어요. 비립종일까요?";
const description = "눈 밑·눈꺼풀의 하얀 좁쌀 같은 돌기가 비립종인지, 여드름·한관종과 어떻게 다른지, 집에서 짜도 되는지와 제거 후 관리를 설명합니다.";

const sources = [
  { name: "DermNet · Milium, milia", url: "https://dermnetnz.org/topics/milium" },
  { name: "University of Utah School of Medicine · Milia", url: "https://utahderm.med.utah.edu/diagnoses/milia/" },
  { name: "Cleveland Clinic · Milia", url: "https://my.clevelandclinic.org/health/diseases/17868-milia" },
  { name: "Cleveland Clinic · Syringoma", url: "https://my.clevelandclinic.org/health/diseases/23321-syringoma" },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article", publishedTime: articleInfo.publishedAt, modifiedTime: articleInfo.modifiedAt },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: title,
        description,
        url: `https://atowell.kr${path}`,
        inLanguage: "ko-KR",
        datePublished: articleInfo.publishedAt,
        dateModified: articleInfo.modifiedAt,
        reviewedBy: { "@type": "Person", name: articleInfo.reviewerName, jobTitle: "원장", url: "https://atowell.kr/about" },
        about: { "@type": "MedicalCondition", name: "비립종", alternateName: "Milia" },
        publisher: {
          "@type": "MedicalClinic",
          name: clinic.name,
          url: "https://atowell.kr",
          telephone: clinic.phone,
          address: clinic.address,
        },
        citation: sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: "https://atowell.kr/" },
          { "@type": "ListItem", position: 2, name: "피부질환 의료정보", item: "https://atowell.kr/medical/dermatology" },
          { "@type": "ListItem", position: 3, name: title, item: `https://atowell.kr${path}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="page-hero care-hero">
        <div className="wrap article">
          <div className="kicker">피부질환 의료정보 · 눈 주변의 흰 돌기</div>
          <h1>눈 밑에 하얀 좁쌀이 생겼어요.<br />비립종일까요?</h1>
          <p className="lead">작고 단단한 흰색 돌기는 비립종일 수 있습니다. 하지만 비슷하게 보이는 다른 병변도 있어 위치와 모양만으로 확진할 수는 없습니다.</p>
        </div>
      </section>

      <article className="wrap section article milia-article">
        <div className="notice milia-answer">
          <strong>먼저 답하면</strong>
          <p>비립종은 피부 바로 아래에 각질이 모인 작은 낭종입니다. 눈꺼풀과 눈 밑, 볼에 잘 생기며 대개 해롭지 않습니다. 통증이 없고 제거를 원하지 않는다면 꼭 치료할 필요는 없습니다.</p>
        </div>

        <h2>비립종은 어떤 모습인가요?</h2>
        <p>피부 표면 가까이에 흰색 또는 연노란색의 작은 알갱이가 박힌 듯 보입니다. 한 개만 생기기도 하고 여러 개가 모여 생기기도 합니다. 대개 가렵거나 아프지 않습니다. 성인에게는 오래 남아 있을 수도 있고, 저절로 없어지기도 합니다.</p>

        <h2>왜 생기나요?</h2>
        <p>피부에서 떨어져 나와야 할 각질이 표면 아래에 갇히면서 생깁니다. 특별한 계기 없이 생길 수 있고, 피부가 다치거나 물집·화상 등이 아문 뒤에 생기기도 합니다. 세안을 덜 해서 생기는 병변으로 단정할 수 없습니다.</p>

        <h2>여드름이나 한관종과 어떻게 다른가요?</h2>
        <div className="milia-comparison">
          <div><h3>비립종</h3><p>각질이 들어 있는 작은 낭종으로, 표면 가까이 흰 알갱이처럼 보일 수 있습니다.</p></div>
          <div><h3>여드름의 면포</h3><p>모공이 막혀 생기는 여드름 병변입니다. 겉모양이 비슷해도 발생 과정과 치료가 다릅니다.</p></div>
          <div><h3>한관종 등</h3><p>눈 주변에 피부색 또는 연노란색의 작은 돌기가 여러 개 생길 수 있습니다. 피지샘증식증 같은 다른 병변도 감별 대상입니다.</p></div>
        </div>
        <p>사진 한 장이나 색깔만으로 구분하기 어려울 때가 있습니다. 크기가 변하거나, 피가 나거나, 통증이 있다면 단순 비립종으로 여기지 말고 직접 확인받으세요.</p>

        <h2>집에서 짜거나 바늘로 빼도 되나요?</h2>
        <p>권하지 않습니다. 비립종은 여드름처럼 눌러서 쉽게 나오지 않을 수 있습니다. 손톱이나 바늘로 건드리면 피부 손상·감염·흉터가 생길 수 있고, 눈 가까이는 더욱 조심해야 합니다.</p>

        <h2>병원에서는 어떻게 확인하고 제거하나요?</h2>
        <p>아토웰의원에서는 먼저 병변을 직접 살펴 비립종인지, 비슷한 다른 병변인지 확인합니다. 비립종으로 판단되고 제거를 원하면 위치와 크기에 따라 표면을 작게 열어 안의 각질을 꺼내는 방법을 상담합니다. 필요한 경우 레이저 등으로 표면을 열 수 있습니다. 눈꺼풀 가장자리처럼 눈에 가까운 부위는 안전을 고려해 처치 방법이나 다른 진료의 필요성을 결정합니다.</p>
        <p>제거하지 않고 경과를 보는 것도 선택지입니다. 시술이 필요한지, 어떤 방법이 적절한지는 진찰 후 정합니다.</p>

        <h2>제거 후에는 어떻게 관리하나요?</h2>
        <p>세안과 화장을 언제부터 할 수 있는지는 실제 처치 범위와 상처 상태에 따라 달라집니다. 시술 후 받은 안내를 따르고, 회복 중에는 해당 부위를 문지르거나 다시 짜지 마세요. 붓기·통증·진물이 심해지면 처치받은 곳에 연락하세요.</p>

        <h2>자주 묻는 질문</h2>
        <div className="faq">
          <article><h3>비립종은 꼭 제거해야 하나요?</h3><p>아닙니다. 해롭지 않은 병변이라면 그대로 두어도 됩니다. 다만 정확한 병변이 무엇인지 불분명하거나 외관상 제거를 원하면 진료로 확인할 수 있습니다.</p></article>
          <article><h3>제거하면 다시 생기나요?</h3><p>제거한 뒤에도 같은 부위나 주변에 새 비립종이 생길 수 있습니다. 재발 여부를 단정할 수 없고, 반복된다면 피부 상태와 다른 원인을 함께 살펴봅니다.</p></article>
          <article><h3>눈 밑에 하얀 것이 여러 개면 모두 비립종인가요?</h3><p>그렇지 않습니다. 한관종, 면포 등도 비슷해 보일 수 있습니다. 모양이 서로 다르거나 개수가 늘어나는 경우에는 직접 보는 것이 좋습니다.</p></article>
        </div>

        <section className="milia-visit" aria-labelledby="milia-visit-title">
          <h2 id="milia-visit-title">경주에서 비립종 확인을 원한다면</h2>
          <p>눈 주변의 흰 돌기가 비립종인지 궁금하거나 제거를 고민한다면 아토웰의원에서 피부 상태를 직접 확인받을 수 있습니다.</p>
          <p><strong>{clinic.name}</strong> · {clinic.address}<br />전화 <a href={`tel:${clinic.phone}`}>{clinic.phone}</a></p>
          <div className="actions">
            <Link className="button primary" href="/location">진료시간·예약·오시는 길</Link>
            <Link className="button secondary" href="/clinic/dermatology">피부질환 진료 안내</Link>
          </div>
        </section>

        <section className="milia-sources" aria-labelledby="milia-sources-title">
          <h2 id="milia-sources-title">참고 자료</h2>
          <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a></li>)}</ul>
        </section>
        <MedicalArticleFooter info={articleInfo} />
        <div className="actions"><Link className="text-link" href="/medical/dermatology">← 피부질환 의료정보 목록</Link></div>
      </article>
    </>
  );
}
