export type ObesityReview =
  | { status: "draft"; modifiedAt: string }
  | { status: "published"; publishedAt: string; modifiedAt: string; reviewedAt: string; reviewerName: string };

export const obesitySources = {
  snuh: { name: "서울대학교병원 · 비만 (정의·진단/검사)", url: "https://www.snuh.org/health/nMedInfo/nView.do?category=DIS&medid=AA000263", note: "한국 성인의 BMI, 허리둘레와 비만의 건강 위험. 이 자료의 오래된 약물 목록은 본문 작성에 사용하지 않았습니다." },
  amc: { name: "서울아산병원 · 비만 (질환백과)", url: "https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31809", note: "BMI의 한계, 복부비만과 체중관리의 기본 원리." },
  goals: { name: "미국 NIDDK · Choosing a Safe & Successful Weight-loss Program", url: "https://www.niddk.nih.gov/health-information/weight-management/choosing-a-safe-successful-weight-loss-program", note: "초기 감량 목표, 개인화와 유지 계획. 자료 검토일: 2024년 2월." },
  activity: { name: "미국 NIDDK · Eating & Physical Activity to Lose or Maintain Weight", url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/eating-physical-activity", note: "균형 잡힌 식사, 유산소·근력 활동과 감량 후 유지." },
  medicines: { name: "미국 NIDDK · Prescription Medications to Treat Overweight & Obesity", url: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity", note: "약물치료의 역할과 장기 관리에 관한 보조 자료. 미국의 약품명·진단 기준을 국내 기준으로 적용하지 않았습니다." },
  mounjaro: { name: "식품의약품안전처 · 마운자로프리필드펜주 허가사항", url: "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=202301983aupdateTs2025-07-22+09%3A05%3A22.239066b", note: "한국릴리 공식 제품정보에서 연결한 국내 품목 원문. 효능·효과, 용법·용량, 사용상의 주의사항을 확인했습니다." },
  wegovy: { name: "유럽의약품청(EMA) · Wegovy", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/wegovy", note: "성인 체중관리 대상와 작용·이상반응에 관한 보조 자료. 유럽 허가정보이며 국내 허가 원문을 대신하지 않습니다." },
  semaglutide: { name: "미국 국립의학도서관 MedlinePlus · Semaglutide Injection", url: "https://medlineplus.gov/druginfo/meds/a618008.html", note: "주사제의 주의사항과 진료가 필요한 증상. 자료 개정일: 2026년 5월 15일." },
  safety: { name: "Novo Nordisk · Wegovy Safety & Side Effects", url: "https://www.wegovy.com/obesity/is-wegovy-right-for-me/safety-side-effects.html", note: "제조사의 환자용 안전정보. 미국 자료로, 국내 제형의 처방·투여 방법은 국내 허가사항을 따릅니다." },
  plateau: { name: "Mayo Clinic · Getting past a weight-loss plateau", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/weight-loss-plateau/art-20044615", note: "정체기의 생리적 변화와 식사·활동 재점검. 게시일: 2024년 4월 9일." },
  habits: { name: "서울아산병원 · 위고비를 처방하기 전에, 의사가 먼저 보는 것들", url: "https://news.amc.seoul.kr/news/con/detail.do?cntId=11766", note: "일상에 맞춘 식사·활동·수면 점검. 게시일: 2026년 4월 22일." },
} as const;
export type ObesitySourceKey = keyof typeof obesitySources;
export type ObesitySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  note?: { title: string; text: string; urgent?: boolean };
  refs: ObesitySourceKey[];
};
export type ObesityArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  lead: string;
  answer: string;
  answerRefs: ObesitySourceKey[];
  sections: ObesitySection[];
  takeHome: string;
  consultation: string;
  related: string[];
  review: ObesityReview;
  reviewNote?: string;
};

// Only explicit physician approval may change a draft to published.
const draft: ObesityReview = { status: "draft", modifiedAt: "2026-09-29" };
export const obesityArticles: ObesityArticle[] = [
  {
    slug: "diagnosis",
    title: "비만은 어떻게 진단하나요?",
    description: "BMI와 허리둘레, 건강 위험을 함께 보는 이유",
    category: "01 · 진단과 건강 위험",
    lead: "체중계의 숫자만으로 건강을 판단하지 않습니다. 키에 비해 체중이 어느 정도인지, 복부에 지방이 얼마나 쌓였는지, 건강에 어떤 영향을 주는지를 함께 봅니다.",
    answer: "한국 성인은 일반적으로 BMI 25 kg/m² 이상을 비만으로 분류합니다. 허리둘레와 혈압·혈당 등도 함께 확인해야 내 몸에 필요한 관리 수준을 정할 수 있습니다.",
    answerRefs: ["snuh", "amc"],
    sections: [
      {
        id: "bmi", title: "BMI는 키와 체중으로 계산하는 출발점입니다",
        paragraphs: ["BMI(체질량지수)는 체중(kg)을 키(m)의 제곱으로 나눈 값입니다. 예를 들어 키 170 cm, 체중 80 kg이면 80 ÷ (1.70 × 1.70) = 약 27.7 kg/m²입니다.", "숫자는 몸의 상태를 살펴보기 위한 기준이지, 외모나 자기관리 능력을 평가하는 점수가 아닙니다."],
        table: { caption: "한국 성인의 BMI를 간단히 읽는 방법", headers: ["BMI (kg/m²)", "분류"], rows: [["18.5 미만", "저체중"], ["18.5 이상 ~ 23 미만", "정상 범위"], ["23 이상 ~ 25 미만", "비만 전단계(과체중)"], ["25 이상", "비만 — 정도와 건강 영향을 추가 평가"]] },
        note: { title: "적용 범위", text: "이 표는 일반적인 성인 기준입니다. 소아·청소년은 나이와 성별에 맞는 기준을 사용하며, 임신 중 체중은 별도로 평가합니다." }, refs: ["snuh", "amc"]
      },
      {
        id: "waist", title: "허리둘레는 복부비만을 확인하는 단서입니다",
        paragraphs: ["한국 성인에서는 허리둘레가 남성 90 cm 이상, 여성 85 cm 이상이면 복부비만으로 봅니다. BMI가 높지 않아도 복부에 지방이 많이 쌓이면 건강 위험을 함께 살펴야 합니다.", "바지의 허리 치수 대신 줄자로 실제 둘레를 측정합니다. 측정 위치와 자세가 달라지면 수치가 달라질 수 있으므로, 진료실에서 방법을 확인하고 같은 조건으로 비교하세요."], refs: ["snuh", "amc"]
      },
      {
        id: "limits", title: "같은 BMI라도 몸의 구성은 다를 수 있습니다",
        paragraphs: ["BMI는 근육과 지방을 구분하지 못합니다. 근육이 많은 사람은 BMI가 높아도 체지방이 과도하지 않을 수 있고, 근육이 적은 사람은 체중이 많이 나가지 않아도 복부비만이 있을 수 있습니다.", "체성분검사는 체중을 해석하는 보조 수단입니다. 한 번의 수치만으로 진단을 확정하거나 모든 사람에게 정밀 영상검사를 시행하는 것은 아닙니다. 진찰 결과와 필요한 검사를 함께 해석합니다."], refs: ["snuh", "amc"]
      },
      {
        id: "health", title: "진료에서는 체중이 건강에 미치는 영향을 확인합니다",
        paragraphs: ["체중이 언제부터 얼마나 늘었는지, 식사·활동·수면 패턴과 복용 중인 약을 확인합니다. 비만은 유전적 요인과 생활환경, 질환 및 약물의 영향이 함께 작용할 수 있어 의지의 문제로만 설명하지 않습니다."],
        bullets: [
          { label: "혈압·혈당·지질", text: "건강검진 결과를 참고해 고혈압, 당뇨병, 이상지질혈증 등의 동반 여부를 살핍니다." },
          { label: "간·수면·관절", text: "지방간, 심한 코골이나 수면 중 무호흡, 관절 통증 등 체중과 관련된 불편을 확인합니다." },
          { label: "개인별 추가 평가", text: "증상과 진찰에 따라 원인 질환이나 추가 검사가 필요한지 결정합니다. 모든 검사를 일괄적으로 받는다는 뜻은 아닙니다." }
        ], refs: ["snuh", "amc", "habits"]
      },
      {
        id: "treatment", title: "비만 진단과 특정 약의 처방 기준은 다릅니다",
        paragraphs: ["BMI 25 이상이라는 이유만으로 마운자로나 위고비를 바로 처방하는 것은 아닙니다. 비만 진단 기준과 개별 약물의 허가 대상은 구분해야 합니다.", "생활관리부터 시작할지, 약물치료를 함께 고려할지는 건강 위험, 이전 관리 경과, 약의 효과와 주의사항을 종합해 결정합니다."], refs: ["mounjaro", "medicines"]
      }
    ],
    takeHome: "BMI는 출발점, 허리둘레는 복부비만의 단서, 건강상태는 치료 방향을 정하는 기준입니다.",
    consultation: "최근 체중 변화와 건강검진 결과, 복용약 목록을 가져오세요. 갑작스럽고 설명되지 않는 체중 변화나 부종이 있으면 단순한 살의 변화로 여기지 말고 진료로 확인하세요.",
    related: ["goals", "medication"], review: { ...draft }
  },
  {
    slug: "goals",
    title: "체중감량 목표는 어떻게 정하나요?",
    description: "현재 체중과 건강상태에 맞춘 현실적인 목표",
    category: "02 · 목표와 유지 계획",
    lead: "처음부터 최종 체중 하나를 정하기보다, 건강에 도움이 되는 첫 목표와 생활 속에서 실행할 목표를 함께 정합니다.",
    answer: "많은 성인에게 현재 체중의 5~10%를 약 6개월에 걸쳐 줄이는 목표가 출발점이 됩니다. 이것은 모든 사람이 반드시 맞춰야 하는 속도나 감량의 상한선이 아닙니다. 건강상태와 치료 반응에 따라 조정합니다.",
    answerRefs: ["goals"],
    sections: [
      {
        id: "first-goal", title: "현재 체중에서 첫 목표를 계산합니다",
        paragraphs: ["체중이 80 kg이라면 5%는 4 kg, 10%는 8 kg입니다. 우선 76 kg을 첫 이정표로 정하고, 경과를 보면서 72 kg까지의 감량이나 유지 여부를 상담할 수 있습니다."],
        table: { caption: "현재 체중 80 kg인 성인의 계산 예시", headers: ["감량 비율", "줄이는 체중", "도달 체중"], rows: [["5%", "4 kg", "76 kg"], ["10%", "8 kg", "72 kg"]] },
        note: { title: "예시이지 개인 처방은 아닙니다", text: "나이, 근육량, 동반질환, 과거 감량 경험에 따라 목표는 달라집니다. 이미 적정 체중이라면 추가 감량이 필요하지 않을 수 있습니다." }, refs: ["goals", "amc"]
      },
      {
        id: "why", title: "조금 줄어도 건강 변화는 의미가 있습니다",
        paragraphs: ["출발 체중의 5~10% 감량만으로도 혈당·혈압·중성지방 등이 개선될 수 있습니다. 곧바로 정상 BMI에 도달하지 못했다고 실패한 것은 아닙니다.", "한편 일부 동반질환은 더 큰 감량이나 별도의 치료가 필요할 수 있습니다. 체중만으로 효과를 단정하지 않고 검사 결과와 증상의 변화를 함께 봅니다."], refs: ["medicines", "amc"]
      },
      {
        id: "two-goals", title: "체중 목표 옆에 행동 목표를 적어봅니다",
        paragraphs: ["“살을 빼야지”보다 실제 생활에서 반복할 수 있는 행동을 정해보세요. 아래 예시에서 지금 바꿀 수 있는 한두 가지를 고르는 것으로 시작해도 좋습니다."],
        bullets: [
          { label: "식사", text: "먹기 전에 한 끼의 양을 정하고, 달게 마시던 음료 한 잔을 무가당 음료로 바꿉니다." },
          { label: "활동", text: "몸 상태가 허락하면 식후 10분 걷기처럼 일상에 붙일 수 있는 활동부터 시작합니다." },
          { label: "생활 리듬", text: "식사와 수면이 크게 흐트러지는 상황을 찾아, 다음 주에 바꿀 방법을 하나 정합니다." }
        ], refs: ["habits", "activity"]
      },
      {
        id: "muscle", title: "적게 먹는 것과 잘 먹는 것을 함께 생각합니다",
        paragraphs: ["감량 중에는 지방뿐 아니라 근육도 줄 수 있습니다. 끼니를 극단적으로 줄이기보다 단백질 식품과 채소 등 필요한 영양을 챙기고, 가능한 범위에서 근력 활동을 병행합니다.", "일반적인 성인 활동 목표에는 주 150분 이상의 중강도 유산소 활동과 주 2일 이상의 근력 활동이 포함됩니다. 처음부터 채우기보다 현재 체력에 맞춰 늘립니다. 질환이나 통증이 있다면 운동 종류와 강도를 먼저 상담하세요."], refs: ["activity", "amc"]
      },
      {
        id: "review", title: "체중계 밖의 변화도 함께 기록합니다",
        paragraphs: ["체중은 같은 저울과 비슷한 조건으로 정기적으로 확인합니다. 하루의 오르내림보다 여러 주의 흐름을 보고, 허리둘레·혈압·검사 결과와 일상에서 느끼는 체력 변화를 함께 살펴봅니다.", "체중은 줄었지만 어지럽고 기력이 떨어지거나 식사를 제대로 못한다면 목표와 방법을 다시 점검해야 합니다. 감량 속도를 더 높이는 것이 우선은 아닙니다."], refs: ["goals", "activity"]
      },
      {
        id: "maintenance", title: "유지 계획은 목표 체중에 도달하기 전부터 세웁니다",
        paragraphs: ["지금의 식사와 활동을 감량 후에도 이어갈 수 있는지 생각해 보세요. 감량기부터 익힌 생활 리듬과 정기적인 점검이 유지의 기반이 됩니다.", "약물치료 중이라면 목표에 도달했다고 임의로 끊거나 투여 간격을 바꾸지 마세요. 유지 치료와 중단 여부는 체중 경과, 건강상태, 이상반응과 부담을 함께 고려해 결정합니다."], refs: ["goals", "medicines"]
      }
    ],
    takeHome: "첫 목표는 현실적으로, 다음 목표는 몸의 반응을 보며, 유지 계획은 처음부터 정합니다.",
    consultation: "“몇 kg이 되어야 하나요?”와 함께 “어떤 건강 문제가 좋아지면 좋겠나요?”를 이야기해 주세요. 식사량이 지나치게 줄거나 체력 저하가 있으면 다음 목표를 올리기 전에 진료로 점검합니다.",
    related: ["diagnosis", "plateau"], review: { ...draft }
  },
  {
    slug: "medication",
    title: "비만 약물치료는 언제 고려하나요?",
    description: "생활관리와 약물치료의 역할",
    category: "03 · 약물치료의 선택",
    lead: "약은 생활관리를 대신하는 수단이 아니라, 필요한 사람이 체중과 건강을 관리하도록 돕는 치료의 한 부분입니다.",
    answer: "체중과 관련된 건강 위험, 생활관리의 경과, 약물의 허가 대상과 주의사항을 함께 살펴 약물치료를 고려합니다. 정상 체중에서 외모만을 위해 사용하는 치료는 아니며, 비만 진단을 받았다고 모두 약이 필요한 것도 아닙니다.",
    answerRefs: ["medicines", "mounjaro"],
    reviewNote: "처방 대상 수치는 마운자로 국내 허가 원문과 위고비 EMA 자료를 대조했습니다. 위고비의 최신 국내 품목허가 원문은 자동 열람이 되지 않아 공개 전 별도 대조가 필요합니다. 해외 자료의 추가 적응증·제형·용량을 국내에 적용하지 않았습니다.",
    sections: [
      {
        id: "decision", title: "생활관리와 약물치료는 함께 갑니다",
        paragraphs: ["식사·활동·수면을 조정해도 체중을 줄이거나 유지하기 어렵고, 체중과 관련된 건강 위험이 있다면 약물치료를 상담할 수 있습니다. 위험도에 따라 생활관리와 약물치료를 함께 시작하기도 하므로, 모두에게 같은 대기 기간을 적용하지 않습니다.", "식욕 조절에 도움을 받는 동안 자신의 생활에서 지속 가능한 식사와 활동을 연습합니다. 약을 사용하는 것을 의지가 약하다는 뜻으로 받아들일 필요는 없습니다."], refs: ["medicines", "habits"]
      },
      {
        id: "eligibility", title: "비만 진단 기준과 약의 허가 대상은 구분합니다",
        paragraphs: ["한국 성인의 비만 분류는 BMI 25 이상부터지만, 마운자로·위고비 같은 개별 약의 성인 체중관리 대상은 더 구체적으로 정해져 있습니다. 초기 BMI와 체중 관련 동반질환을 확인합니다."],
        table: { caption: "마운자로·위고비의 성인 체중관리 대상 범위", headers: ["초기 BMI", "함께 확인할 조건"], rows: [["30 kg/m² 이상", "비만에 대한 체중관리 필요성과 약물의 적합성 평가"], ["27 이상 ~ 30 kg/m² 미만", "고혈압·이상지질혈증·제2형 당뇨병·수면무호흡 등 체중 관련 동반질환이 한 가지 이상 있는지 확인"]] },
        note: { title: "자동 처방 기준이 아닙니다", text: "두 약 모두 식이·운동요법의 보조 치료입니다. 다른 비만치료제에는 다른 기준이 적용될 수 있습니다. 실제 처방은 약제별 최신 국내 허가사항과 진찰 결과에 따르며, 당뇨병 등 다른 적응증의 처방과도 구분합니다." }, refs: ["snuh", "mounjaro", "wegovy"]
      },
      {
        id: "mechanism", title: "마운자로와 위고비는 같은 약인가요?",
        paragraphs: ["마운자로의 성분은 터제파타이드로 GIP·GLP-1 수용체에, 위고비의 성분은 세마글루티드로 GLP-1 수용체에 작용합니다. 식욕과 음식 섭취를 조절하는 데 도움을 주지만 서로 다른 약입니다.", "한 약의 mg 수치를 다른 약에 그대로 대응시킬 수 없습니다. 두 약을 동시에 사용하거나 다른 GLP-1 계열 약과 임의로 겹쳐 사용하지 마세요. 변경이 필요하면 마지막 투여일과 현재 용량을 알리고 상담합니다."], refs: ["mounjaro", "wegovy", "safety"]
      },
      {
        id: "before", title: "시작 전에는 이런 정보를 알려주세요",
        paragraphs: ["기대 효과뿐 아니라 나에게 불리한 점이 있는지도 확인해야 합니다. 다음 정보를 빠짐없이 알려주세요."],
        bullets: [
          { label: "질환과 과거 반응", text: "췌장염·담낭질환, 심한 위장관 증상이나 위마비, 신장질환, 당뇨망막병증, 약물 알레르기 병력을 알립니다. 본인·가족의 갑상선 수질암이나 MEN2 병력도 알려야 합니다." },
          { label: "사용 중인 약", text: "인슐린·설포닐우레아계 당뇨약, 다른 체중감량 약, 경구 피임약을 포함해 처방약·일반약·보충제 목록을 보여주세요." },
          { label: "임신·수유와 예정된 시술", text: "임신 가능성·계획·수유 여부와 수술 또는 수면내시경 등 진정이 필요한 검사 일정을 알립니다." }
        ],
        note: { title: "모두 같은 금기라는 뜻은 아닙니다", text: "질환과 약제에 따라 사용을 피해야 할 수도, 주의해서 관찰하며 사용할 수도 있습니다. 갑상선 수질암은 흔한 갑상선암 전체를 뜻하지 않으므로 정확한 진단명을 알려주세요." }, refs: ["semaglutide", "mounjaro", "safety"]
      },
      {
        id: "followup", title: "용량보다 반응과 안전을 먼저 확인합니다",
        paragraphs: ["처음에는 낮은 용량으로 시작해 정해진 단계에 따라 조절합니다. 주사제의 시작 용량과 유지 용량은 역할이 다릅니다. 식욕이 줄었다는 이유만으로 모든 시작 용량이 장기 유지 용량이 되는 것은 아닙니다.", "재진에서는 체중 변화, 식사와 수분 섭취, 이상반응, 필요한 검사와 복용약을 확인합니다. 효과가 부족하거나 부담이 크다면 용량·약제·치료 계획을 재평가합니다. 평가 시점은 약물과 실제 사용 경과에 따라 다릅니다."], refs: ["mounjaro", "semaglutide", "medicines"]
      },
      {
        id: "duration", title: "얼마나 오래 사용하나요?",
        paragraphs: ["효과와 안전성, 유지 필요성에 따라 치료 기간은 달라집니다. 체중이 다시 늘기 쉬워 장기 치료가 도움이 되는 사람이 있으며, 누구에게나 동일한 중단 시점을 정할 수는 없습니다.", "사용을 줄이거나 중단할 때에도 식사·활동 계획과 추적 진료를 이어갑니다. 인터넷의 투여 간격이나 다른 사람의 용량을 그대로 따라 하지 마세요."], refs: ["medicines", "activity"]
      }
    ],
    takeHome: "어떤 약이 유명한가보다, 내 건강상태에 맞는 치료인지가 먼저입니다.",
    consultation: "최근 검진 결과, 이전 체중관리 경험, 복용약과 주사제의 정확한 이름·용량·마지막 사용일을 준비하면 상담에 도움이 됩니다. 비용과 추적 진료의 부담도 함께 이야기하세요.",
    related: ["side-effects", "goals"], review: { ...draft }
  },
  {
    slug: "side-effects",
    title: "마운자로·위고비의 흔한 이상반응은?",
    description: "치료 중 관찰할 증상과 진료가 필요한 경우",
    category: "04 · 이상반응과 안전수칙",
    lead: "흔한 위장관 불편과 빨리 확인해야 할 증상은 구분해야 합니다. 불편이 심할수록 약이 잘 듣는다는 뜻은 아닙니다.",
    answer: "메스꺼움, 구토, 설사, 변비, 복부 불편감 등이 생길 수 있습니다. 특히 시작하거나 증량한 뒤 관찰이 필요합니다. 가벼운 증상은 식사 방법을 조절하며 상담할 수 있지만, 심한 지속성 복통·반복 구토·호흡곤란은 기다리지 말고 진료를 받아야 합니다.",
    answerRefs: ["mounjaro", "wegovy", "semaglutide"],
    reviewNote: "두 주사제의 공통 안전수칙을 환자용으로 정리한 초안입니다. 위고비 최신 국내 품목허가 원문 및 아토웰의 연락·응급 안내 흐름을 공개 전에 최종 확인해 주세요.",
    sections: [
      {
        id: "common", title: "흔히 느끼는 불편은 무엇인가요?",
        paragraphs: ["속이 메스껍거나 더부룩하고, 트림·속쓰림, 설사 또는 변비가 생길 수 있습니다. 치료 초기나 용량을 올리는 시기에 더 불편할 수 있고, 시간이 지나며 줄어드는 경우도 있습니다.", "그러나 모든 증상이 저절로 괜찮아지는 것은 아닙니다. 식사나 수분 섭취를 방해하거나 오래 지속되면 처방받은 의료기관에 연락하세요. 이상반응이 없다고 효과가 없다는 뜻도 아닙니다."], refs: ["mounjaro", "semaglutide", "wegovy"]
      },
      {
        id: "mild", title: "가벼운 불편은 어떻게 줄여볼 수 있나요?",
        paragraphs: ["아래 방법은 증상이 가볍고 먹고 마실 수 있을 때의 일반적인 안내입니다. 심한 증상에 대한 진료를 대신하지 않습니다."],
        bullets: [
          { label: "식사는 천천히, 한 번에 과식하지 않기", text: "큰 식사나 기름진 음식으로 더 불편해진다면 양과 구성을 조절합니다. 배가 편안하게 찼을 때 멈추고, 식사 직후 눕는 것은 피합니다." },
          { label: "수분은 나누어 마시기", text: "물이나 적절한 수분을 조금씩 자주 마십니다. 심장·신장질환으로 수분 제한을 안내받았다면 해당 지침을 우선합니다." },
          { label: "변비도 경과를 기록하기", text: "가벼운 활동과 식사·수분 상태를 점검합니다. 변비가 지속되면 약사나 의료진과 상의하고, 심한 복통·구토가 동반되면 변비약으로 버티지 않습니다." }
        ], refs: ["safety", "semaglutide", "activity"]
      },
      {
        id: "urgent", title: "이런 증상은 즉시 도움을 받으세요",
        paragraphs: ["다음은 약물 관련 여부와 관계없이 빠른 평가가 필요한 증상입니다. 응급 증상이 있으면 다음 예약일이나 의원의 업무시간을 기다리지 마세요."],
        bullets: [
          { label: "119 또는 응급실", text: "숨쉬기 어렵거나 얼굴·입술·혀·목이 붓는 경우, 실신·의식 저하·경련이 있는 경우에는 즉시 응급 도움을 받으세요." },
          { label: "심하고 계속되는 복통", text: "등으로 퍼지는 상복부 통증, 반복 구토를 동반한 통증은 췌장염 등을 확인해야 합니다. 오른쪽 윗배 통증에 발열이나 황달이 동반되면 담낭·담도 문제도 확인합니다." },
          { label: "물을 못 마시거나 소변이 크게 줄 때", text: "반복 구토·설사와 함께 심한 어지럼, 소변 감소가 있으면 탈수와 신장 문제에 대한 평가가 필요합니다." },
          { label: "심한 팽만·구토 또는 갑작스러운 시력 변화", text: "배가 심하게 불러오면서 구토하고 대변·방귀가 나오지 않거나, 시력이 갑자기 떨어지는 경우에는 즉시 진료를 받으세요." }
        ],
        note: { title: "심한 반응이 의심되면", text: "추가 투여를 중단하고 즉시 평가받으세요. 단순한 적응 과정이라고 넘기거나 스스로 다시 투여하지 말고, 사용한 약·용량·마지막 투여일을 의료진에게 알리세요.", urgent: true }, refs: ["semaglutide", "mounjaro", "safety"]
      },
      {
        id: "hypoglycemia", title: "당뇨약을 함께 쓰면 저혈당도 확인합니다",
        paragraphs: ["인슐린이나 설포닐우레아계 약과 함께 사용하면 저혈당 위험이 커질 수 있습니다. 식은땀, 떨림, 두근거림, 어지럼이나 이상 행동이 생기면 가능하면 혈당을 확인하고 미리 안내받은 저혈당 대처법을 따르세요.", "의식이 흐리거나 삼키기 어렵다면 음식이나 물을 억지로 먹이지 말고 119에 연락하세요. 식사량이 크게 달라졌다면 기존 당뇨약의 조절이 필요한지 상담하되, 인슐린 등을 임의로 끊지는 않습니다."], refs: ["mounjaro", "semaglutide", "safety"]
      },
      {
        id: "pregnancy", title: "임신 계획과 피임약 복용은 꼭 알려주세요",
        paragraphs: ["임신 중 체중감량 목적으로 사용하지 않습니다. 임신을 확인하면 다음 투여를 하지 말고 처방 의료진에게 바로 연락하세요. 임신 계획이나 수유 중인 경우에는 사용 가능 여부와 중단 시점을 미리 상담해야 합니다.", "마운자로는 경구 호르몬 피임약의 효과에 영향을 줄 수 있습니다. 투여 시작 후 4주와 매 증량 후 4주 동안에는 비경구 피임법으로 바꾸거나 콘돔 같은 차단 피임법을 추가하도록 안내되어 있습니다. 본인에게 맞는 방법을 처방 시 확인하세요."], refs: ["mounjaro", "semaglutide"]
      },
      {
        id: "procedure", title: "수술·수면내시경 전, 그리고 다음 주사 전에는",
        paragraphs: ["이 약들은 위 배출을 늦출 수 있어, 마취나 깊은 진정이 필요한 수술·검사 전에 투여 중임을 반드시 알려야 합니다. 검사 일정, 증상과 투여 경과를 바탕으로 담당 의료진이 금식·투약 계획을 정합니다. 인터넷의 일률적인 중단 기간을 따르지 마세요.", "가벼운 이상반응이라도 계속되면 다음 증량 전에 상의하세요. 빠진 주사를 보충하려고 한꺼번에 더 맞거나, 다른 약을 겹쳐 쓰거나, 용량·간격을 임의로 바꾸지 않습니다."], refs: ["mounjaro", "semaglutide", "safety"]
      }
    ],
    takeHome: "참을 수 있느냐보다, 먹고 마실 수 있는지와 위험 신호가 있는지를 먼저 확인하세요.",
    consultation: "연락할 때에는 약 이름·용량·마지막 투여일, 증상이 시작된 때, 구토·설사 횟수와 수분 섭취·소변 상태를 알려주세요. 심한 증상은 상담 연락만 남기지 말고 응급 평가를 받으세요.",
    related: ["medication", "plateau"], review: { ...draft }
  },
  {
    slug: "plateau",
    title: "체중감량 정체기는 왜 생기나요?",
    description: "정체기의 의미와 식사·활동 점검",
    category: "05 · 정체기와 다음 단계",
    lead: "처음처럼 체중이 내려가지 않는다고 곧바로 실패한 것은 아닙니다. 몸의 변화와 현재 생활을 다시 살펴볼 시점일 수 있습니다.",
    answer: "체중이 줄면 몸이 쓰는 에너지도 줄고, 식욕과 대사의 변화가 생겨 감량 속도가 느려질 수 있습니다. 수분 변화로 체중계의 숫자가 일시적으로 멈추기도 합니다. 여러 주의 흐름을 보고 식사·활동·치료 계획을 점검합니다.",
    answerRefs: ["plateau", "activity"],
    sections: [
      {
        id: "why", title: "가벼워진 몸은 이전보다 적은 에너지를 씁니다",
        paragraphs: ["처음 감량할 때에는 지방뿐 아니라 몸에 저장된 탄수화물과 함께 있던 수분도 줄어 체중이 비교적 빠르게 내려갈 수 있습니다. 이 속도가 계속 유지되는 것은 아닙니다.", "체중이 감소하면 몸을 유지하고 움직이는 데 필요한 에너지도 달라집니다. 식욕을 비롯한 몸의 적응이 더해져, 처음에 감량되던 식사량이 이제는 체중을 유지하는 양이 될 수 있습니다. 이를 의지 부족이나 몸이 망가졌다는 뜻으로 해석할 필요는 없습니다."], refs: ["plateau", "activity"]
      },
      {
        id: "trend", title: "며칠의 숫자보다 여러 주의 흐름을 봅니다",
        paragraphs: ["체중에는 지방 외에도 수분과 장 안의 내용물 등이 포함됩니다. 따라서 며칠간 수치가 그대로라는 이유만으로 지방 감소가 완전히 멈췄다고 단정할 수 없습니다.", "같은 저울, 비슷한 시간과 옷차림으로 정기적으로 측정해 보세요. 자주 잰다면 하루 수치에 매달리기보다 주간 흐름을 참고합니다. 정체기를 며칠로 확정하는 하나의 기준은 없으며, 허리둘레와 몸 상태도 함께 봅니다."], refs: ["plateau", "goals"]
      },
      {
        id: "check", title: "더 굶기 전에 세 가지를 확인합니다",
        paragraphs: ["기록은 잘못을 찾기 위한 것이 아니라 다음 조정을 돕는 자료입니다. 예를 들어 평일과 주말을 포함한 며칠의 생활을 짧게 적어보세요."],
        bullets: [
          { label: "먹고 마신 것", text: "한 끼 양뿐 아니라 음료·술·간식·소스, 외식과 주말의 식사 패턴도 함께 봅니다. 너무 적게 먹고 기력이 떨어지는 것은 아닌지도 확인합니다." },
          { label: "실제 움직임", text: "운동 시간 외에 걷는 양과 앉아 있는 시간이 달라졌는지 살핍니다. 바쁘거나 피곤해서 일상 활동이 줄었을 수도 있습니다." },
          { label: "수면·증상·약", text: "수면 부족, 스트레스, 변비와 복용약 변화, 주사 사용 경과를 확인합니다. 다른 원인이 의심되면 진료로 평가합니다." }
        ], refs: ["plateau", "habits", "medicines"]
      },
      {
        id: "adjust", title: "현재 생활에서 한두 가지를 조정합니다",
        paragraphs: ["당이 든 음료를 줄이거나, 한 번에 먹는 양을 다시 정하거나, 가능한 범위에서 짧은 걷기를 추가하는 식으로 바꿔보세요. 단백질을 포함한 균형 잡힌 식사와 근력 활동은 계속 챙깁니다.", "장기간의 굶기, 탈수를 유도하는 방법, 무리한 운동으로 체중계의 숫자만 내리는 것은 해결책이 아닙니다. 이미 식사를 충분히 줄였거나 체력이 떨어졌다면 더 줄이기보다 의료진과 현재 계획을 점검하세요."], refs: ["activity", "amc", "habits"]
      },
      {
        id: "medicine", title: "약이 안 듣는다는 뜻인가요?",
        paragraphs: ["정체만으로 약의 효과가 사라졌다고 판단하지 않습니다. 실제 사용 기간과 용량, 체중의 전체 경과, 식욕과 이상반응을 함께 확인합니다.", "용량을 높이거나 다른 약으로 바꾸는 것은 가능한 선택지 중 하나이지 자동적인 답은 아닙니다. 현재의 감량을 유지하는 것이 더 적절할 수도 있습니다. 추가 주사를 맞거나 투여 간격을 임의로 줄이지 마세요."], refs: ["medicines", "mounjaro", "semaglutide"]
      },
      {
        id: "next", title: "언제 다시 상담하면 좋을까요?",
        paragraphs: ["여러 주 동안의 기록을 봐도 변화가 없거나 체중이 다시 늘고 있다면, 목표와 식사·활동·약물치료를 재평가합니다. 정체와 함께 심한 피로, 부종, 식사 곤란이나 지속적인 위장관 증상이 있다면 더 일찍 확인하세요.", "이미 의미 있게 줄인 체중을 유지하는 것도 치료의 성과입니다. 더 줄이는 단계로 갈지, 유지에 집중할지는 건강 위험과 현재 생활을 함께 보며 결정합니다."], refs: ["plateau", "goals", "semaglutide"]
      }
    ],
    takeHome: "정체기는 더 세게 밀어붙이라는 신호가 아니라, 지금의 몸에 맞게 계획을 다시 맞춰보라는 신호일 수 있습니다.",
    consultation: "최근 체중 기록, 며칠간의 식사·음료와 활동 기록, 사용한 약·용량을 가져오세요. 무엇을 더 줄일지뿐 아니라 무엇을 유지하고 보호해야 할지도 함께 살펴봅니다.",
    related: ["goals", "side-effects"], review: { ...draft }
  },
];

export function isObesityArticlePublished(article: ObesityArticle): boolean {
  return article.review.status === "published";
}
export function canReadObesityArticle(article: ObesityArticle): boolean {
  return isObesityArticlePublished(article) || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
}
export function getObesityArticle(slug: string): ObesityArticle | undefined {
  return obesityArticles.find((article) => article.slug === slug);
}
export function getObesitySourceKeys(article: ObesityArticle): ObesitySourceKey[] {
  return Array.from(new Set([...article.answerRefs, ...article.sections.flatMap((section) => section.refs)]));
}
