import { wegovyInjectionSources } from "./wegovyInjection";
export const wegovyFaqPublished = false;
export const canReadWegovyFaq = () => wegovyFaqPublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const wegovyFaqSources = [
  { name: "식품의약품안전처 · 위고비 국내 허가사항", url: wegovyInjectionSources.label },
  { name: "노보 노디스크 코리아 · 제품정보 및 안전 사용 안내", url: wegovyInjectionSources.product },
  { name: "Novo Nordisk · FlexTouch 환자용 설명서 (영문, 조작법 보조 근거)", url: wegovyInjectionSources.ifu },
  { name: "미국 NIDDK · 비만 약물치료와 장기 관리", url: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity" },
  { name: "미국 NIDDK · 체중 감량·유지를 위한 식사와 활동", url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/eating-physical-activity" },
];
export const wegovyFaqCategories = [
  { slug: "before-starting", title: "시작하기 전", intro: "치료 대상과 진료 전에 알려야 할 내용을 확인합니다.", items: [
    { question: "누가 위고비 치료를 받을 수 있나요?", answer: "성인 체중관리 허가 기준은 BMI 30 이상, 또는 BMI 27 이상이면서 체중 관련 동반질환이 있는 경우입니다. 해당해도 건강상태를 확인해 처방합니다.", refs: [1] },
    { question: "임신을 계획 중이라면요?", answer: "임신·수유 중 사용하지 않습니다. 임신 계획이 있으면 적어도 2개월 전에 중단하도록 상담하세요.", refs: [3] },
    { question: "진료할 때 무엇을 알려야 하나요?", answer: "현재 복용약과 주사제, 과거질환, 임신 가능성, 이전 체중치료 경험을 알려주세요. 효과뿐 아니라 부작용·비용·지속 가능성을 함께 검토합니다.", refs: [4] },
  ] },
  { slug: "effects-and-weight", title: "효과와 체중 유지", intro: "감량 반응을 평가하고 목표 체중 이후를 준비합니다.", items: [
    { question: "몇 kg이나 빠지나요?", answer: "개인별 반응이 달라 일정한 감량을 보장할 수 없습니다. 체중 변화와 생활관리, 충분한 치료 기간을 함께 보고 효과를 판단합니다.", refs: [4] },
    { question: "체중이 멈추면 약이 안 듣는 건가요?", answer: "체중 한 번의 측정만으로 판단하지 않습니다. 식사·활동 기록과 몇 주간의 흐름을 보며 치료 계획을 다시 점검하세요.", refs: [4,5] },
    { question: "목표 체중이면 바로 끊나요?", answer: "효과와 부작용을 보며 지속 여부를 정합니다. 중단 후 체중이 다시 늘 수 있으므로 생활관리와 추적 진료 계획을 함께 세우세요.", refs: [4] },
  ] },
  { slug: "dose-and-schedule", title: "용량과 주사 일정", intro: "처방 용량과 누락 시 대처를 확인합니다.", items: [
    { question: "처음부터 높은 용량을 맞아도 되나요?", answer: "아닙니다. 주 1회 0.25mg부터 단계적으로 증량합니다. 위장관 증상이 심하면 증량을 미루거나 낮출 수 있으므로 처방대로 사용하세요.", refs: [1] },
    { question: "주사 날짜를 잊었다면요?", answer: "5일 이내면 가능한 빨리 투여하고, 5일이 넘으면 건너뛰어 다음 예정일에 맞습니다. 두 번 분량을 함께 맞지 마세요.", refs: [1] },
    { question: "쉬었다가 이전 용량으로 다시 시작해도 되나요?", answer: "2회 이상 놓쳤다면 재시작 용량을 낮춰야 할 수 있습니다. 마지막 주사일과 용량을 알리고 상담하세요.", refs: [1] },
  ] },
  { slug: "injection-and-storage", title: "주사 방법과 보관", intro: "국내 다회용 펜을 정확하게 사용합니다.", items: [
    { question: "한 펜을 몇 번 쓰나요?", answer: "처방 용량으로 주 1회씩 총 4회분입니다. 매번 바늘을 교체하고 펜은 본인만 사용합니다.", refs: [2,1] },
    { question: "클릭 수로 용량을 나눠도 되나요?", answer: "임의 분할하지 마세요. 제품에 표시된 처방 용량을 표시창으로 확인합니다. 정확한 사용 순서는 주사법 안내와 공식 영상을 보세요.", refs: [2] },
    { question: "개봉한 펜은 얼마나 보관하나요?", answer: "개봉 후 최대 6주 동안 30℃ 이하 또는 냉장(2~8℃) 보관합니다. 개봉일을 적고 바늘을 제거해 뚜껑을 닫으세요.", refs: [1,2] },
  ] },
  { slug: "side-effects", title: "불편한 증상과 안전", intro: "흔한 불편감과 바로 진료받아야 할 상황을 구분합니다.", items: [
    { question: "메스꺼움·구토·변비가 생길 수 있나요?", answer: "생길 수 있습니다. 증상이 지속되거나 식사·수분 섭취가 어렵다면 다음 주사 전에 상담하세요. 심한 증상을 참고 증량하지 마세요.", refs: [1,3] },
    { question: "어떤 증상은 바로 진료받아야 하나요?", answer: "지속되는 심한 복통, 반복 구토 또는 갑작스러운 시력 저하는 신속한 진료가 필요합니다. 호흡곤란·혀나 얼굴 부종·실신은 119 또는 응급실 도움을 받으세요.", refs: [3] },
    { question: "수술이나 수면내시경 전에도 알려야 하나요?", answer: "네. 위 배출이 느려질 수 있으므로 시술·마취 의료진에게 약 이름과 마지막 투여일을 알리세요. 중단 여부는 의료진이 결정합니다.", refs: [3] },
  ] },
  { slug: "food-and-exercise", title: "식사와 운동", intro: "치료 중에도 이어갈 수 있는 생활 습관을 만듭니다.", items: [
    { question: "약을 맞으면 식사관리는 필요 없나요?", answer: "약물은 식사·활동 관리에 더하는 치료입니다. 꾸준히 유지할 수 있는 식사 계획을 함께 만드세요.", refs: [4] },
    { question: "무엇을 먹는 것이 좋나요?", answer: "채소·통곡물과 생선·살코기·두부·콩 같은 단백질 식품을 골고루 드세요. 단 음료와 과도한 열량을 줄이되 극단적인 식사 제한은 피하세요.", refs: [5] },
    { question: "운동은 어떻게 시작하나요?", answer: "가능한 범위부터 시작해 주 150분의 중강도 활동과 주 2회 이상 근력운동을 목표로 조절하세요. 질환이나 체력 제한이 있으면 먼저 상담합니다.", refs: [5] },
  ] },
];
