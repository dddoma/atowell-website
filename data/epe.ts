// New medical content remains preview-only until physician approval.
export const epePublished = false;
export const canReadEpe = () => epePublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const epeSources = [
  { name: "식품의약품안전처 · 에페오토인젝터주 허가사항", url: "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=202603059" },
  { name: "한미약품 · 공식 제품정보", url: "https://www.hanmi.co.kr/business/product/finder/detail-8044.hm?prodSeq=8044" },
  { name: "한미약품 · 제품설명서 PDF (2쪽에 주사 순서 그림)", url: "https://common.hanmi.co.kr/upfile/ces/product/4e167bfe-b30d-469e-a2dc-768d1f0b37aa.pdf" },
  { name: "NIDDK · 비만 약물치료와 생활관리 (일반 원칙)", url: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity" },
];
export const epeInjectionGuide = {
  title: "에페 주사 놓는 방법",
  href: "/medical/obesity/epe-injection",
  message: "[에페 주사 방법 안내]\n\n에페 일회용 오토인젝터의 주사 순서와 보관 방법을 확인해 주세요. 처음에는 의료진의 지도를 받아 사용하세요.\n\nhttps://atowell.kr/medical/obesity/epe-injection\n\n아토웰의원 054-776-0294",
};
export const epeDoseSchedule = [["1~2주", "2mg"], ["3~4주", "4mg"], ["5~8주", "6mg"], ["9~12주", "8mg"], ["13주부터 · 유지", "10mg"]];
export const epeFaqCategories = [
  { slug: "before-starting", title: "시작하기 전", intro: "치료 대상과 진료 전 확인사항입니다.", items: [
    { question: "누가 치료 대상인가요?", answer: "당뇨가 없는 성인 중 BMI 30 이상, 또는 BMI 27 이상 30 미만이면서 고혈압·이상지질혈증·수면무호흡·심혈관질환 등 체중 관련 질환이 있는 경우입니다. 진료 후 적합성을 판단합니다.", refs: [2] },
    { question: "당뇨병이 있어도 사용할 수 있나요?", answer: "현재 체중관리 허가 대상에 당뇨병 환자는 포함되지 않습니다. 당뇨병 치료제를 임의로 바꾸지 말고 별도로 상담하세요.", refs: [1,2] },
    { question: "진료 전에 무엇을 알려야 하나요?", answer: "복용약·다른 비만약과 과거 병력을 알려주세요. 성분 알레르기, 갑상선 수질암 개인력·가족력, MEN2는 금기입니다. 췌장·담낭·위장·신장·간 질환과 정신건강 병력도 확인이 필요합니다.", refs: [1] },
  ] },
  { slug: "effects-and-weight", title: "효과와 치료 선택", intro: "연구 결과와 개인의 치료 목표를 구분합니다.", items: [
    { question: "얼마나 감량되나요?", answer: "국내 허가자료의 40주 평균 체중 변화율은 에페 -9.02%, 위약 -0.89%였습니다. 식사·운동을 병행한 연구 결과이며 개인의 감량을 보장하지 않습니다.", refs: [1] },
    { question: "마운자로·위고비보다 좋은가요?", answer: "서로 다른 연구의 감량률만으로 우열을 정할 수 없습니다. 건강상태, 이상반응, 치료 경험, 비용을 함께 고려해 선택합니다.", refs: [4] },
    { question: "목표 체중에 도달하면 끊나요?", answer: "중단 뒤 체중이 다시 늘 수 있습니다. 효과와 부작용을 평가하면서 치료 지속 여부와 생활관리·추적 계획을 함께 정하세요.", refs: [4] },
  ] },
  { slug: "dose-and-schedule", title: "용량과 주사 일정", intro: "증량과 투여 누락은 에페의 기준을 따릅니다.", items: [
    { question: "어떻게 증량하나요?", answer: "주 1회 2mg(2주) → 4mg(2주) → 6mg(4주) → 8mg(4주) → 10mg 유지가 허가 일정입니다. 불편한 증상이 있으면 증량을 늦추거나 감량할 수 있으므로 처방을 따르세요.", refs: [2] },
    { question: "한 번 놓쳤다면요?", answer: "다음 예정 투여까지 72시간 이상이면 가능한 빨리 기존 용량을 맞고 원래 일정으로 돌아갑니다. 72시간 미만이면 건너뜁니다. 두 회분을 함께 맞지 마세요.", refs: [1] },
    { question: "연속으로 빠뜨렸거나 요일을 바꾸려면요?", answer: "연속 2회 누락은 요일을 다시 정해 기존 용량으로, 3회 이상은 2mg 또는 내약성이 확인된 용량으로 재시작하는 기준입니다. 재시작 전 상담하세요. 요일 변경은 직전 주사와 72시간보다 긴 간격을 둡니다.", refs: [1,2] },
  ] },
  { slug: "injection-and-storage", title: "주사 방법과 보관", intro: "일회용 오토인젝터와 공식 그림 설명서를 확인하세요.", items: [
    { question: "한 개를 여러 번 쓰나요?", answer: "1개는 1회분입니다. 바늘이 내장되어 있으며 재사용하거나 약을 나눠 쓰지 않습니다. 첫 주사는 의료인의 지도를 받으세요.", refs: [3] },
    { question: "어디에 주사하나요?", answer: "허가된 부위는 복부의 피부 아래입니다. 식사와 관계없이 주 1회 투여하며, 주사할 위치는 매번 바꿉니다.", refs: [2] },
    { question: "보관은 어떻게 하나요?", answer: "원래 상자에 넣어 빛을 막고 2~8℃ 냉장 보관합니다. 얼었던 제품은 사용하지 마세요. 실온에 오래 둔 제품은 사용 전 약사에게 확인하세요.", refs: [2,3] },
  ] },
  { slug: "side-effects", title: "불편한 증상과 안전", intro: "흔한 증상과 진료가 필요한 상황을 확인합니다.", items: [
    { question: "흔한 부작용은 무엇인가요?", answer: "구역·설사·변비·소화불량과 주사 부위 반응이 보고됐습니다. 지속되거나 수분 섭취가 어려우면 다음 투여 전에 상담하세요.", refs: [1] },
    { question: "언제 바로 진료받아야 하나요?", answer: "지속되는 심한 복통·반복 구토는 투여를 보류하고 신속히 진료받으세요. 호흡곤란·얼굴이나 혀의 부종은 119 또는 응급실의 도움을 받으세요.", refs: [3] },
    { question: "임신·수유 또는 수술 계획이 있다면요?", answer: "임신·수유 중 사용하지 않습니다. 임신 계획 최소 9주 전 중단하고 마지막 투여 후 9주 이상 효과적인 피임이 필요합니다. 피임법을 상담하세요. 수술·수면내시경 전에는 약 이름과 마지막 투여일을 알리세요.", refs: [3] },
  ] },
  { slug: "daily-life-and-cost", title: "생활관리와 비용", intro: "계속할 수 있는 관리 방법과 실제 비용을 확인합니다.", items: [
    { question: "식사·운동도 해야 하나요?", answer: "약물은 생활관리에 더하는 치료입니다. 유지할 수 있는 식사 계획을 세우고, 체력에 맞춰 주 150분 중강도 활동과 주 2회 근력운동을 목표로 조절하세요.", refs: [4] },
    { question: "비용은 얼마인가요?", answer: "제조사 제품정보에는 비급여로 안내되어 있습니다. 아토웰의 처방 시작일과 환자 부담 비용은 확인 후 안내할 예정입니다. 언론의 공급가격을 환자가 내는 가격으로 보지 마세요.", refs: [2] },
    { question: "다른 비만약에서 바로 바꿔도 되나요?", answer: "마지막 투여일·용량·부작용을 의료진에게 알리세요. 약마다 용량 기준이 달라 mg 숫자만으로 바꾸거나 겹쳐 맞지 않습니다. 전환 일정은 진료에서 정합니다.", refs: [1,4] },
  ] },
];
