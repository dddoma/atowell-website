import type { Metadata } from "next";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";
const path = "/medical/dermatology/male-pattern-hair-loss";
export const metadata: Metadata = {
 title:"경주 남성형 탈모 치료 안내 | 피나스테리드·두타스테리드·미녹시딜 | 아토웰의원",
 description:"남성형 탈모의 특징, 약물치료 효과와 부작용, 치료 기간, 주의사항을 환자 눈높이로 설명합니다.",
 alternates:{canonical:path}
};
const faq=[
 ["탈모약은 평생 먹어야 하나요?","약을 복용하는 동안 효과가 유지되는 치료입니다. 중단하면 수개월에 걸쳐 다시 탈모가 진행할 수 있어 장기 계획을 상담합니다."],
 ["약을 먹으면 언제 효과가 나타나나요?","대개 3~6개월 이후 변화를 평가하며, 충분한 효과 판단에는 6~12개월 이상이 필요할 수 있습니다."],
 ["성기능 부작용이 반드시 생기나요?","반드시 발생하는 것은 아닙니다. 일부에서 성욕 감소·발기 또는 사정 관련 증상이 보고되며, 증상이 생기면 의료진과 상의해야 합니다."],
 ["미녹시딜을 바르면 처음에 더 빠질 수 있나요?","초기 몇 주간 일시적인 탈락 증가가 나타날 수 있습니다. 심하거나 오래 지속되면 다른 원인을 확인해야 합니다."],
 ["약을 두 가지 함께 사용해도 되나요?","먹는 5α-환원효소 억제제와 바르는 미녹시딜은 병용할 수 있습니다. 약 선택은 진단, 기저질환, 부작용 위험에 따라 결정합니다."]
];
export default function Page(){
 return <><section className="page-hero care-hero"><div className="wrap article">
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}><span className="kicker">피부질환 의료정보 · 모발·탈모</span><CopyLinkButton/></div>
 <h1>남성형 탈모, 어떻게 치료하나요?</h1>
 <p className="lead">남성형 탈모는 유전적 소인과 남성호르몬의 작용으로 모발이 점차 가늘어지는 질환입니다. 조기에 진단하고 꾸준히 치료하면 진행을 늦추고 모발 밀도를 개선하는 데 도움이 됩니다.</p>
 </div></section><article className="wrap section article">
 <h2>개요</h2><p>남성형 탈모(안드로겐성 탈모)는 이마 양옆의 M자 부위나 정수리에서 시작하는 경우가 많습니다. 모낭이 점차 작은 모발을 만드는 ‘모낭 소형화’가 특징입니다. 갑자기 전체적으로 많이 빠지는 휴지기 탈모나 원형탈모와 구별해야 합니다.</p>
 <h2>증상 및 원인</h2><ul><li>이마 양옆 헤어라인이 뒤로 이동하거나 정수리의 두피가 점차 비칩니다.</li><li>굵고 긴 모발이 점차 가늘고 짧은 모발로 바뀝니다.</li><li>유전적 소인과 모낭의 디하이드로테스토스테론(DHT) 민감성이 관여합니다.</li><li>하루에 빠지는 머리카락 개수만으로 남성형 탈모를 판단하지 않습니다.</li></ul>
 <h2>검사 및 진단</h2><p>탈모 시작 시점과 가족력, 약물 복용, 최근 체중 변화 등을 확인하고 두피 및 모발 굵기를 관찰합니다. 필요하면 확대경 검사로 모발 굵기 차이와 소형화 여부를 평가합니다. 전형적인 남성형 탈모에서는 혈액검사가 항상 필요한 것은 아니지만, 갑작스러운 미만성 탈모나 다른 증상이 있으면 원인 검사를 고려합니다.</p>
 <h2>치료 및 관리</h2>
 <h3>1. 먹는 약: 피나스테리드·두타스테리드</h3><p>두 약은 테스토스테론이 DHT로 전환되는 과정을 억제해 탈모 진행을 늦춥니다. 남성형 탈모에 피나스테리드 1mg 1일 1회가 널리 사용되며, 두타스테리드 0.5mg 1일 1회도 의사의 판단에 따라 사용됩니다. 처방 전 적응증과 환자 상태를 확인합니다.</p>
 <p>성욕 감소, 발기·사정 관련 변화, 유방 통증 또는 비대, 기분 변화 등이 나타날 수 있습니다. 우울감이나 자살 사고 등 심각한 기분 변화가 생기면 즉시 진료를 받으세요. 이 약들은 PSA 수치를 낮출 수 있으므로 전립선 검사를 받을 때 복용 사실을 알려야 합니다. 임신 중이거나 임신 가능성이 있는 여성은 부서지거나 새는 정제·캡슐의 약물에 노출되지 않도록 주의해야 합니다. 약을 다른 사람에게 나누어 주지 마세요.</p>
 <h3>2. 바르는 약: 미녹시딜</h3><p>미녹시딜 5% 외용제는 두피에 규칙적으로 사용하며, 제품별 사용법과 용량을 지킵니다. 두피 자극·가려움·접촉피부염, 얼굴 등 원치 않는 부위의 털 증가가 나타날 수 있습니다. 시작 초기에 일시적으로 탈락량이 늘기도 합니다. 두피가 아닌 곳에 흘러내리지 않도록 사용하고, 바른 뒤 손을 씻으세요.</p>
 <h3>3. 다른 치료</h3><p>약물치료로 충분하지 않거나 원하는 모발 형태에 따라 모발이식 등을 상담할 수 있습니다. 저출력 레이저 등 보조 치료는 효과와 비용을 개별적으로 검토합니다. PRP·주사 치료 등의 효과는 방법마다 근거가 다르므로 표준 약물치료를 대체한다고 단정하지 않습니다.</p>
 <h3>4. 치료 효과 확인</h3><p>치료 전 이마·정수리 사진을 남기고 비슷한 조명과 각도에서 3~6개월 간격으로 비교하는 것이 좋습니다. 6~12개월 정도 꾸준히 사용한 뒤 반응을 평가합니다. 중단하면 치료로 유지되던 효과가 사라질 수 있습니다.</p>
 <h2>자주 묻는 질문</h2><div className="faq">{faq.map(([q,a])=><section key={q}><h3>{q}</h3><p>{a}</p></section>)}</div>
 <h2>핵심체크 10개</h2><ol><li>남성형 탈모는 모발이 점차 가늘어지는 진행성 질환입니다.</li><li>이마 양옆과 정수리의 모발 변화가 흔한 특징입니다.</li><li>조기 치료는 탈모 진행을 늦추는 데 도움이 됩니다.</li><li>피나스테리드와 두타스테리드는 DHT 생성을 억제하는 약입니다.</li><li>미녹시딜 외용제는 모발 성장을 돕는 치료제입니다.</li><li>치료 효과는 보통 수개월 이상 관찰해야 합니다.</li><li>약물치료는 중단하면 효과가 줄어들 수 있는 장기 치료입니다.</li><li>약물 부작용과 개인별 위험은 처방 전에 확인해야 합니다.</li><li>갑작스럽거나 불규칙한 탈모는 다른 질환을 감별해야 합니다.</li><li>정기적인 사진 비교는 치료 경과 평가에 도움이 됩니다.</li></ol>
 <h2>관련 사이트</h2><ul><li><a href="https://www.aad.org/public/diseases/hair-loss/types/male-pattern" target="_blank" rel="noopener noreferrer">https://www.aad.org/public/diseases/hair-loss/types/male-pattern</a></li><li><a href="https://dermnetnz.org/topics/male-pattern-hair-loss" target="_blank" rel="noopener noreferrer">https://dermnetnz.org/topics/male-pattern-hair-loss</a></li><li><a href="https://www.nhs.uk/conditions/hair-loss/" target="_blank" rel="noopener noreferrer">https://www.nhs.uk/conditions/hair-loss/</a></li></ul>
 <h2>요약</h2><p>남성형 탈모는 진행을 늦추고 모발을 유지하는 것이 치료의 핵심입니다. 먹는 약과 바르는 약을 중심으로 장기간 관리하며, 부작용과 치료 반응을 정기적으로 확인합니다.</p>
 <p className="meta">이 내용은 일반적인 환자 안내이며 개인의 진단·처방을 대신하지 않습니다. 의료진 검토 후 게시하는 안내 초안입니다.</p>
 <div className="actions"><Link className="button secondary" href="/clinic/dermatology#hair-loss">피부질환 진료 안내</Link><Link className="button primary" href="/location">진료시간·오시는 길</Link></div>
 </article></>;
}