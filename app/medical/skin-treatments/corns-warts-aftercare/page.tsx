import type { Metadata } from "next";
import Link from "next/link";
import PatientMessageCopy from "@/components/PatientMessageCopy";
import { cornsWartsAftercare } from "@/data/cornsWartsAftercare";
import styles from "../../obesity/obesity.module.css";

export const metadata: Metadata = {
  title: cornsWartsAftercare.title,
  description: cornsWartsAftercare.description,
  alternates: { canonical: cornsWartsAftercare.href },
  openGraph: { title: cornsWartsAftercare.title, description: cornsWartsAftercare.description, url: cornsWartsAftercare.href },
};

export default function Page() {
  return <article className={styles.article}>
    <PatientMessageCopy message={cornsWartsAftercare.message} />
    <nav className={styles.breadcrumb} aria-label="현재 위치"><Link href="/clinic/aesthetic">피부치료</Link><span aria-hidden="true">/</span><span aria-current="page">제거 후 관리</span></nav>
    <header className={styles.header}><div className="kicker">시술 후 환자 안내</div><h1>{cornsWartsAftercare.title}</h1><p className={styles.scope}>아토웰의원 · 시술 후 관리 안내</p></header>
    <section className={styles.section}>
<p>티눈이나 사마귀를 제거한 뒤에는 <strong>상처가 깨끗하게 아물도록 관리하고, 발바닥이나 발가락의 경우 치료 부위에 지나친 압력이 가해지지 않도록 하는 것</strong>이 중요합니다.</p>
<p>시술 방법과 상처의 깊이·위치에 따라 관리 방법이 조금 다를 수 있으므로, 진료실에서 별도로 안내받은 내용이 있다면 그 안내를 우선해 주세요.</p>
</section><section className={styles.section}><h2>1. 시술 당일과 처음 1~2일</h2>
<p>시술 부위에는 약간의 통증, 붓기, 진물 또는 소량의 출혈이 있을 수 있습니다.</p>
<ul><li>붙여드린 거즈나 밴드는 가능한 한 <strong>깨끗하고 마른 상태로 유지</strong>해 주세요.</li><li>물에 젖거나 더러워지면 새 드레싱으로 교체해야 합니다.</li><li>발바닥이나 발가락을 치료했다면 당일에는 오래 걷거나 뛰는 것을 줄이는 것이 좋습니다.</li><li>치료 부위를 자꾸 만지거나 딱지를 억지로 떼지 마세요.</li><li>통증이 있다면 평소 복용 가능한 일반 진통제를 사용할 수 있습니다.</li></ul>
</section><section className={styles.section}><h2>2. 상처 소독과 드레싱은 어떻게 하나요?</h2>
<p>상처가 잘 아물도록 <strong>가능하면 2일에 한 번 병원에 방문하여 소독과 드레싱을 받으세요.</strong></p>
<p>병원에서는 상처의 회복 상태와 감염 여부를 확인하고, 필요한 처치를 시행합니다. 상처 상태에 따라 드레싱 간격은 조정될 수 있습니다.</p>
<p><strong>병원 방문이 어려운 경우에는 의료진에게 집에서 직접 상처를 관리하는 방법을 안내받으세요.</strong></p>
<p>상처의 크기와 깊이에 따라 세척 방법, 연고 사용 여부, 드레싱 교체 방법이 달라질 수 있으므로 안내받은 방법에 따라 관리하는 것이 중요합니다.</p>
<p>특히 드레싱이 젖거나 오염되었다면 다음 방문일까지 그대로 두지 말고 의료진에게 교체 방법을 문의해 주세요.</p>
</section><section className={styles.section}><h2>3. 샤워는 언제부터 할 수 있나요?</h2>
<p><strong>상처가 깊거나 넓고 진물이 많이 나는 경우에는 상처에 물이 들어가지 않도록 관리하는 것이 중요합니다.</strong></p>
<p>샤워할 때에는 필요에 따라 방수 드레싱 등을 이용해 치료 부위를 보호하세요.</p>
<p>상처가 비교적 작고 회복이 양호한 경우에는 물로 가볍게 씻을 수 있지만, 물에 닿아도 되는 시점은 상처 상태에 따라 다릅니다.</p>
<p><strong>샤워할 때 상처에 물이 닿아도 되는지는 의료진과 상의해 주세요.</strong></p>
<p>상처가 충분히 아물기 전에는 목욕탕, 수영장, 족욕 등 장시간 물에 담그는 활동을 피하는 것이 좋습니다.</p>
</section><section className={styles.section}><h2>4. 피가 나면 어떻게 하나요?</h2>
<p>소량의 피가 묻어나는 것은 있을 수 있습니다.</p>
<p>피가 계속 나면 깨끗한 거즈를 대고 <strong>10~15분 정도 중간에 확인하지 말고 지속적으로 눌러주세요.</strong></p>
<p>그래도 출혈이 멈추지 않거나 피가 많이 난다면 병원에 연락하거나 진료를 받으세요.</p>
</section><section className={styles.section}><h2>5. 발바닥 티눈·사마귀를 제거했다면</h2>
<p>발바닥은 걸을 때마다 체중이 실리기 때문에 다른 부위보다 불편감이 오래갈 수 있습니다.</p>
<p>특히 상처가 아물 때까지는</p>
<ul><li>장시간 걷기나 달리기를 줄이고</li><li>꽉 끼거나 딱딱한 신발을 피하고</li><li>치료 부위를 직접 압박하지 않는 편안한 신발을 신는 것이 좋습니다.</li></ul>
<p>티눈은 단순히 두꺼워진 피부를 제거하는 것만으로 끝나는 것이 아니라 <strong>같은 부위에 반복적으로 압력이나 마찰이 가해지는 원인을 줄이는 것</strong>이 재발 예방에 중요합니다.</p>
</section><section className={styles.section}><h2>6. 사마귀는 제거하면 완전히 없어지나요?</h2>
<p>사마귀는 인유두종바이러스(HPV)에 의해 생기기 때문에 눈에 보이는 병변을 제거해도 다시 생기거나 주변에 새로운 병변이 나타날 수 있습니다.</p>
<p>상처가 아문 뒤에도 치료 부위를 관찰해 주세요. 다시 딱딱해지거나 작은 점 모양의 병변이 생기거나 주변으로 번지는 것 같다면 다시 진료를 받는 것이 좋습니다.</p>
<p>사마귀 부위를 뜯거나 긁으면 주변 피부로 번질 수 있으므로 피해주세요.</p>
</section><section className={styles.section}><h2>7. 이런 경우에는 병원에 연락하거나 진료받으세요</h2>
<p>다음과 같은 변화가 있다면 상처 상태를 확인하는 것이 좋습니다.</p>
<ul><li>시간이 지날수록 통증이 심해지는 경우</li><li>주변의 붉은 부위나 붓기가 점점 넓어지는 경우</li><li>노란색 또는 녹색의 고름이 나오는 경우</li><li>상처에서 좋지 않은 냄새가 나는 경우</li><li>압박해도 출혈이 계속되는 경우</li><li>발열이나 몸살 같은 전신 증상이 동반되는 경우</li><li>상처가 잘 아물지 않는 경우</li></ul>
<p>특히 <strong>당뇨병이 있거나 발의 혈액순환이 좋지 않은 분, 면역력이 저하된 분</strong>은 작은 발 상처도 문제가 될 수 있으므로 이상이 있으면 일찍 진료받는 것이 좋습니다.</p>
</section><section className={styles.section}><h2>기억해 주세요</h2>
<p><strong>2일에 한 번 병원 드레싱 → 상처 상태에 따른 물 접촉 제한 → 압력과 마찰 줄이기 → 감염 징후 확인하기</strong></p>
<p>병원 방문이 어렵거나 상처 관리 방법이 궁금한 경우에는 의료진에게 문의해 주세요.</p>
<p>티눈은 압력과 마찰의 원인을 줄이는 것이 재발 예방에 중요하고, 사마귀는 치료 후에도 재발할 수 있으므로 상처가 아문 뒤에도 치료 부위를 한동안 관찰해 주세요.</p>
    </section>
    <div className="actions"><a className="button primary" href="tel:054-776-0294">병원에 문의하기</a><Link className="button secondary" href="/location">진료시간·오시는 길</Link></div>
    <footer className={styles.footer}><p>작성: AI 보조 · 최초 작성·최종 수정: 2026년 11월 4일</p><p>의학적 검토: 권병현 원장 · 최근 의학적 검토·최초 게시: 2026년 11월 4일</p><p>진료실에서 별도로 안내받은 내용이 있다면 그 안내를 우선해 주세요.</p></footer>
  </article>;
}

