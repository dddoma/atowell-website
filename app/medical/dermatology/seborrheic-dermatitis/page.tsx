import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "얼굴 지루성피부염 | 세안·보습·피부장벽 관리",
  description: "얼굴 지루성피부염의 붉음, 각질, 가려움과 피부장벽 관리법을 아토웰의원 진료실 설명 방식으로 정리했습니다.",
  alternates: { canonical: "/medical/dermatology/seborrheic-dermatitis" },
};

const avoid = ["각질 제거제·스크럽", "마사지·필링·팩", "여드름을 말리는 강한 제품", "여러 기능성 화장품을 한꺼번에 사용", "과도한 세안·뜨거운 물·세게 문지르기"];

export default function Page() {
  return (
    <>
      <section className="page-hero care-hero">
        <div className="wrap article">
          <div className="kicker">SKIN GUIDE</div>
          <h1>얼굴 지루성피부염,<br />피지를 없애기보다 피부장벽을 지켜주세요</h1>
          <p className="lead">여드름처럼 오돌토돌하고 붉어 보여도, 피부가 건조하고 자극받아 생기는 피부염은 관리 방향이 다릅니다. 덜 자극하고 충분히 보습하는 것이 치료의 기본입니다.</p>
        </div>
      </section>

      <main className="wrap section article">
        <h2>왜 반복될까요?</h2>
        <p>우리 피부 표면에는 피지와 보습막이 얇게 코팅되어 있습니다. 이 보호막은 피부 속 수분이 쉽게 날아가지 않도록 돕습니다. 환절기, 잦은 세안, 각질 제거, 마사지나 팩처럼 반복적인 자극이 더해지면 보호막이 약해지고 코 주변·눈가·이마·수염 부위 등이 붉고 거칠어질 수 있습니다.</p>
        <div className="notice">기름기가 보인다고 무조건 없애야 하는 것은 아닙니다. 피부 보호막이 약해진 상태에서는 물이나 평소 쓰던 화장품에도 쉽게 가렵고 따갑거나 화끈거릴 수 있습니다.</div>

        <h2>이런 모습으로 나타날 수 있습니다</h2>
        <ul>
          <li>코 주변, 눈가, 이마, 수염 부위의 붉음과 각질</li>
          <li>오돌토돌한 작은 피부 병변</li>
          <li>가려움, 따가움 또는 화끈거림</li>
          <li>좋아졌다가 다시 올라오는 반복적인 경과</li>
        </ul>

        <h2>세안은 ‘먼지만 가볍게’ 씻는다는 느낌으로</h2>
        <p>얼굴이 뽀득뽀득해질 때까지 씻을 필요는 없습니다. 클렌저나 비누는 최소한으로 사용하고 문지르거나 스크럽하지 마세요. 세안 횟수도 지나치게 많지 않게 하는 것이 좋습니다.</p>

        <h2>세안 후 3분 이내에 보습하세요</h2>
        <p>물기가 완전히 마르기 전에 처방받은 외용제가 있다면 필요한 부위에 얇게 바르고, 그 위에 크림 형태의 보습제를 얼굴 전체에 충분히 바릅니다. 목도 건조하다면 함께 보습합니다.</p>
        <div className="process-grid">
          <div><span>01</span><h3>아침</h3><p>가벼운 세안 → 보습제 → 선크림</p></div>
          <div><span>02</span><h3>저녁</h3><p>가벼운 세안 → 필요한 외용제 → 보습제</p></div>
          <div><span>03</span><h3>화장한 날</h3><p>세게 문지르지 말고 가볍게 지운 뒤 보습을 더 충분히 합니다.</p></div>
        </div>

        <h2>당분간 이런 자극은 피해주세요</h2>
        <ul>{avoid.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>여드름과 헷갈릴 수 있습니다</h2>
        <p>여드름은 면포(화이트헤드·블랙헤드)나 모낭을 중심으로 염증성 구진·농포가 생기는 경우가 많습니다. 반면 지루성·자극성 피부염은 붉음, 각질, 가려움이나 따가움이 중심이고 자극적인 피부관리 후 악화되는 경우가 많습니다.</p>
        <div className="notice">피부염을 여드름으로 생각해 계속 말리고 벗겨내면 오히려 악화될 수 있습니다. 모양이 비슷하거나 두 질환이 함께 있는 경우도 있으므로 진찰을 통해 구분하는 것이 좋습니다.</div>

        <h2>기억할 것은 세 가지입니다</h2>
        <div className="service-list">
          <article><span>01</span><div><h3>덜 건드리기</h3><p>씻고, 밀고, 벗겨내는 행동을 줄입니다.</p></div></article>
          <article><span>02</span><div><h3>많이 보습하기</h3><p>세안 후 바로, 아침·저녁 꾸준히 보습합니다.</p></div></article>
          <article><span>03</span><div><h3>염증은 필요한 기간 치료하기</h3><p>붉고 가렵거나 따가울 때는 진료 후 처방받은 약을 사용하고, 호전되면 보습과 자극 회피를 중심으로 관리합니다.</p></div></article>
        </div>

        <h2>언제 다시 진료를 받아야 하나요?</h2>
        <p>보습과 자극 회피를 해도 계속 악화되거나, 진물·통증·심한 부종이 생기거나, 눈 주변 증상이 심해지는 경우에는 다른 피부질환이나 감염 여부를 확인하기 위해 진료가 필요합니다.</p>

        <p className="meta">이 글은 일반적인 환자 교육을 위한 의료정보이며 개인의 진단이나 처방을 대신하지 않습니다. 증상과 피부 상태에 따라 치료 방법은 달라질 수 있습니다.</p>
        <div className="actions">
          <Link className="button secondary" href="/medical/dermatology">피부질환 의료정보로 돌아가기</Link>
          <Link className="button primary" href="/location#reservation">진료 예약 안내</Link>
        </div>
      </main>
    </>
  );
}
