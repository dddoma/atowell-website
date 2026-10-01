import { herpesArticles } from "./herpesArticles";

export type DermatologyArticle = {
  slug: string;
  draft?: boolean;
  draftDates?: { createdAt: string; modifiedAt: string; sourceCheckedAt: string };
  publication?: { publishedAt: string; modifiedAt: string; reviewedAt: string };
  title: string;
  description: string;
  answer: string;
  alert?: { title: string; text: string; sources?: number[] };
  sections: { id: string; title: string; paragraphs?: string[]; bullets?: string[]; sources: number[]; table?: { headers: string[]; rows: string[][] } }[];
  faq: { question: string; answer: string; sources: number[] }[];
  references: { title: string; url: string }[];
  related: { title: string; href: string }[];
};

// Publication authorization is separate from physician medical review.
// The owner confirmed review of all published articles on 2026-09-30.
export const dermatologyPublication = {
  publishedAt: "2026-09-30",
  modifiedAt: "2026-09-30",
  sourceCheckedAt: "2026-09-30",
  medicalReviewCompleted: true,
  reviewerName: "권병현",
  reviewedAt: "2026-09-30",
} as const;

const publishedArticles: DermatologyArticle[] = [
  {
    slug: "acne",
    title: "여드름은 언제 치료해야 하나요?",
    description: "여드름의 염증 정도와 흉터 위험에 따른 치료 시점, 치료 경과와 집에서 지킬 관리법을 안내합니다.",
    answer: "붉고 아픈 여드름이 반복되거나 흉터가 생기기 시작한다면 치료를 미루지 않는 것이 좋습니다. 개수가 적어도 깊은 염증이 있거나 일상에 부담을 준다면 진료를 받을 이유가 됩니다.",
    sections: [
      { id: "timing", title: "흉터가 남을 때까지 기다리지 마세요", paragraphs: ["여드름은 모공이 피지와 각질로 막히고 염증이 더해지는 질환입니다. 단순히 덜 씻어서 생기는 문제가 아니며, 세게 씻거나 짜는 행동은 자극과 흉터를 늘릴 수 있습니다."], bullets: ["붉은 뾰루지나 고름이 든 병변이 반복됩니다.", "피부 속에 깊고 단단한 덩어리가 만져지며 아픕니다.", "패이거나 튀어나온 흉터가 생기고 있습니다.", "얼굴뿐 아니라 가슴·등까지 넓게 생깁니다.", "피부 때문에 사람을 피하거나 학교·직장생활이 힘듭니다."], sources: [1, 2] },
      { id: "assessment", title: "진료에서는 무엇을 확인하나요?", paragraphs: ["화이트헤드·블랙헤드 같은 면포, 염증의 깊이와 범위, 흉터를 함께 봅니다. 지금 쓰는 화장품·연고·먹는 약, 치료 기간과 임신 가능성도 알려주세요.", "모낭염이나 입 주위 피부염도 여드름처럼 보일 수 있습니다. 특히 가려움·각질·따가움이 두드러지면 모양만 보고 여드름약을 계속 추가하기보다 진단을 확인하는 것이 좋습니다."], sources: [2, 3, 5] },
      { id: "treatment", title: "치료는 염증과 피부 상태에 맞춥니다", paragraphs: ["면포와 가벼운 염증에는 바르는 치료를, 넓거나 깊은 염증에는 필요에 따라 먹는 약을 함께 고려합니다. 항생제는 내성 문제 때문에 단독·장기 사용을 피하고, 다른 치료와의 조합 및 사용 기간을 진료에서 정합니다.", "심하거나 기존 치료에 잘 반응하지 않는 경우에는 이소트레티노인 등을 검토할 수 있지만, 임신 관련 위험과 부작용을 확인해야 합니다. 임신 중이거나 임신을 계획한다면 바르는 약을 포함해 반드시 먼저 알리세요."], sources: [3] },
      { id: "course", title: "며칠 만에 효과를 판단하지 마세요", paragraphs: ["치료 효과가 눈에 띄기까지 보통 6~8주가 걸릴 수 있으며, 약 12주에 반응과 부작용을 평가해 치료를 조정합니다. 다만 악화하거나 심하게 따갑고 붓는다면 예정된 방문일까지 기다리지 말고 상담하세요.", "호전 후에도 재발을 줄이는 유지 치료가 필요할 수 있습니다. 좋아졌다고 약을 임의로 반복 중단하거나, 효과가 더딘 것 같다고 여러 제품을 한꺼번에 바르지 마세요."], sources: [3] },
      { id: "care", title: "집에서는 자극을 줄이고 꾸준히 관리하세요", bullets: ["순한 세안제로 하루 두 번 정도 부드럽게 씻고, 스크럽과 반복 압출을 피합니다.", "모공을 막지 않는다고 표시된 보습제와 자외선차단제를 선택합니다.", "처방받은 약은 안내받은 부위·횟수로 사용합니다. 건조하거나 따가우면 사용법을 상담합니다.", "변화를 비교하고 싶다면 같은 조명에서 사진을 남겨 진료 때 보여주세요."], sources: [2, 3] },
    ],
    faq: [
      { question: "몇 개 안 나는데도 치료해야 하나요?", answer: "개수만으로 결정하지 않습니다. 깊고 아프거나 흉터가 남는 병변, 반복되는 병변이면 적은 수라도 치료를 고려합니다.", sources: [1, 2] },
      { question: "흉터 치료부터 받으면 되나요?", answer: "새 여드름이 계속 생긴다면 먼저 염증을 조절해 새로운 흉터를 줄이는 것이 중요합니다. 남은 흉터의 치료는 피부 상태를 확인한 뒤 계획합니다.", sources: [1, 4] },
    ],
    references: [
      { title: "미국피부과학회(AAD) — 7 reasons to treat acne early", url: "https://www.aad.org/public/diseases/acne/diy/treat-early" },
      { title: "영국 NHS — Acne", url: "https://www.nhs.uk/conditions/acne/" },
      { title: "NICE NG198 — Acne vulgaris: management, Recommendations", url: "https://www.nice.org.uk/guidance/ng198/chapter/Recommendations" },
      { title: "미국피부과학회(AAD) — Acne scars: Consultation and treatment", url: "https://www.aad.org/public/diseases/acne/derm-treat/scars/treatment" },
      { title: "NICE CKS — Acne vulgaris: Differential diagnosis", url: "https://cks.nice.org.uk/topics/acne-vulgaris/diagnosis/differential-diagnosis/" },
    ],
    related: [{ title: "얼굴 지루성피부염, 어떻게 관리하나요?", href: "/medical/dermatology/seborrheic-dermatitis" }, { title: "눈 밑 하얀 좁쌀, 비립종일까요?", href: "/medical/dermatology/milia" }],
  },
  {
    slug: "urticaria",
    title: "두드러기가 생기면 무엇을 봐야 하나요?",
    description: "두드러기에서 먼저 확인할 응급 증상, 한 병변의 지속 시간, 급성·만성의 차이와 진료 준비 방법을 안내합니다.",
    answer: "먼저 숨쉬기·삼키기 어려움이나 갑작스러운 부종이 있는지 확인하세요. 그다음 한 부위의 발진이 얼마나 오래 남는지, 전체 증상이 몇 주째 반복되는지 살펴보면 진료에 도움이 됩니다.",
    alert: { title: "이런 증상은 즉시 119", text: "입술·입안·혀·목이 갑자기 붓거나, 숨이 차고 쌕쌕거리거나, 목이 조여 삼키기 어렵거나, 심한 어지럼·실신이 나타나면 심한 알레르기 반응일 수 있습니다. 항히스타민제를 먹고 기다리지 말고 즉시 119에 연락하세요." },
    sections: [
      { id: "duration", title: "‘한 병변’과 ‘전체 기간’을 따로 봅니다", paragraphs: ["두드러기는 피부가 부풀어 오르면서 가렵고, 모양과 위치가 달라질 수 있습니다. 개별 팽진은 보통 24시간 안에 흔적 없이 사라지지만, 다른 곳에 새로 생겨 전체 증상은 더 오래 이어질 수 있습니다."], table: { headers: ["확인할 시간", "어떻게 기록하나요?"], rows: [["같은 자리의 발진", "언제 올라왔고 언제 사라졌는지"], ["전체 증상의 기간", "처음 시작한 날부터 반복된 기간"], ["급성·만성 구분", "6주 미만은 급성, 6주 이상 지속·반복되면 만성으로 평가"]] }, sources: [1] },
      { id: "cause", title: "모든 두드러기가 음식 알레르기는 아닙니다", paragraphs: ["음식이나 약물 외에도 감염, 더위·추위, 땀, 압박 등이 관련될 수 있습니다. 특히 만성 두드러기는 특정 음식 하나로 설명되지 않는 경우가 많습니다.", "진료에서는 반복 양상과 병력을 바탕으로 필요한 검사를 선택합니다. 의심되는 음식과 발생 시간의 관계를 기록하되, 근거 없이 여러 음식을 제한하거나 광범위한 알레르기 검사부터 받을 필요는 없습니다."], sources: [2, 4] },
      { id: "visit", title: "이럴 때는 진료를 받으세요", bullets: ["발진이 반복되거나 수면·일상생활을 방해합니다. 6주가 될 때까지 기다릴 필요는 없습니다.", "한 자리의 발진이 24시간 넘게 남고, 통증이나 멍·자색 자국이 동반됩니다.", "발열·관절통 등 다른 증상이 함께 있습니다.", "눈꺼풀 등 피부 깊은 부위의 부종이 새로 생기거나 반복됩니다. 입술·입안·혀·목의 갑작스러운 부종은 위 응급 안내를 따르세요.", "새 약을 복용한 뒤 발생했습니다. 약 이름과 복용 시간을 알려주세요."], sources: [1, 2, 3] },
      { id: "treatment", title: "치료는 가려움과 팽진을 조절하는 데서 시작합니다", paragraphs: ["대개 졸림이 적은 2세대 항히스타민제가 기본 치료입니다. 만성 두드러기에서는 처방한 일정에 맞춰 규칙적으로 복용하기도 하며, 조절이 부족하면 의사가 치료를 조정합니다.", "약에 따라 졸릴 수 있으므로 운전·음주에 주의하고, 임신·수유 여부와 다른 복용약을 알리세요. 임의로 용량을 늘리거나 남은 스테로이드를 반복 복용하지 마세요."], sources: [1, 3] },
      { id: "prepare", title: "진료 전에는 사진과 짧은 기록을 준비하세요", bullets: ["발진이 보일 때 사진을 찍고 발생·소실 시간을 적습니다.", "새로 복용한 약·건강기능식품과 최근 감염 여부를 정리합니다.", "특정 음식, 운동, 사우나, 추위, 꽉 끼는 옷과 반복적인 관계가 있는지 적습니다.", "확인된 악화 요인은 피하고, 과열과 심한 마찰을 줄입니다."], sources: [2, 5] },
    ],
    faq: [
      { question: "병원에 오면 발진이 없어져요. 괜찮나요?", answer: "두드러기는 진료 때 사라져 있을 수 있습니다. 사진과 지속 시간 기록이 도움이 됩니다. 다만 응급 증상이 있으면 사진을 남기느라 도움 요청을 늦추지 마세요.", sources: [2, 5] },
      { question: "6주가 넘으면 평생 가나요?", answer: "6주는 만성 두드러기를 구분하는 기준이며 평생 지속된다는 뜻은 아닙니다. 경과에는 개인차가 있어 증상 조절과 추적 진료가 중요합니다.", sources: [1] },
    ],
    references: [
      { title: "영국피부과학회(BAD) — Urticaria and angioedema", url: "https://www.bad.org.uk/pils/urticaria-and-angioedema/" },
      { title: "영국 NHS — Hives", url: "https://www.nhs.uk/conditions/hives/" },
      { title: "NHS South West London — Management of chronic urticaria in adults", url: "https://swlimo.southwestlondon.icb.nhs.uk/wp-content/uploads/SWL-Guidelines-for-the-management-of-chronic-urticaria-in-adults-visual-summary-April-22-V1.0.pdf" },
      { title: "국제 두드러기 진료지침 — Allergy (2026)", url: "https://doi.org/10.1111/all.70210" },
      { title: "NHS Sandwell and West Birmingham — Urticaria and angioedema", url: "https://www.swbh.nhs.uk/wp-content/uploads/2024/01/Urticaria-and-angioedema-ML3634.pdf" },
    ],
    related: [{ title: "피부질환 진료 안내", href: "/clinic/dermatology" }],
  },
  {
    slug: "athletes-foot-eczema",
    title: "무좀과 습진은 어떻게 다른가요?",
    description: "발의 가려움·각질·물집을 만드는 무좀과 습진의 차이, 진균 검사와 바르는 약의 주의점을 안내합니다.",
    answer: "무좀은 곰팡이 감염이고, 습진은 자극·알레르기 등과 관련된 피부 염증입니다. 둘 다 가렵고 벗겨지거나 물집이 생길 수 있어 겉모양만으로 구분하기 어려우며, 필요하면 각질의 진균 검사를 합니다.",
    sections: [
      { id: "comparison", title: "비슷해 보여도 원인과 치료가 다릅니다", table: { headers: ["구분", "무좀", "습진"], rows: [["원인", "피부사상균 등 곰팡이 감염", "반복 자극·접촉 알레르기 등 피부 염증"], ["흔한 모습", "발가락 사이 짓무름·각질, 발바닥 각질이나 물집", "붉음·가려움·갈라짐, 진물이나 작은 물집"], ["분포의 단서", "한쪽이 더 심할 수 있음", "양쪽에 비슷하게 생기기도 함"], ["치료의 중심", "항진균제", "자극 회피·보습과 필요한 항염증 치료"]] }, paragraphs: ["이 표는 진찰을 돕는 단서입니다. 무좀도 양쪽에 생길 수 있고, 습진도 한쪽만 생길 수 있습니다. 두 질환이 함께 있거나 다른 발 피부질환일 수도 있습니다."], sources: [1, 3] },
      { id: "diagnosis", title: "진료에서는 곰팡이가 있는지 확인합니다", paragraphs: ["발가락 사이·발바닥뿐 아니라 발톱과 다른 부위의 변화, 사용한 연고를 함께 확인합니다. 필요하면 각질을 조금 채취해 현미경으로 곰팡이를 확인하는 KOH 검사나 배양 검사를 고려합니다.", "검사와 경과를 함께 판단하므로, 한 번 검사에서 곰팡이가 안 보였다는 이유만으로 항상 무좀을 배제하지는 않습니다. 사용 중인 연고의 이름이나 사진을 가져오면 도움이 됩니다."], sources: [1, 2] },
      { id: "medicine", title: "가렵다고 같은 연고를 쓰면 안 됩니다", paragraphs: ["무좀은 항진균제로 치료하며, 바르는 횟수와 기간은 성분·제품과 병변에 따라 다릅니다. 가려움이 줄어도 안내받은 기간을 지키세요. 넓게 퍼졌거나 바르는 치료에 반응하지 않으면 먹는 약의 필요성을 평가합니다.", "습진은 원인 자극을 줄이고 건조한 피부를 보습하며, 필요하면 스테로이드 등의 항염증 외용제를 사용합니다. 무좀을 습진으로 생각해 스테로이드만 바르면 감염을 가리거나 악화시킬 수 있습니다. 염증이 심한 무좀에서 의사가 항진균제와 함께 짧게 처방하는 경우와는 다릅니다."], sources: [1, 2, 3, 4] },
      { id: "care", title: "발가락 사이는 말리고, 건조한 부위는 보습하세요", bullets: ["씻은 뒤 발가락 사이의 물기를 부드럽게 닦고 충분히 말립니다.", "땀에 젖은 양말은 갈아 신고, 신발은 잘 말려 번갈아 신습니다.", "수건·신발을 함께 쓰지 말고 공용 샤워실에서는 개인 슬리퍼를 사용합니다.", "건조하고 갈라지는 부위는 보습하되, 축축하게 짓무른 발가락 사이에 크림을 두껍게 바르거나 밀폐하지 않습니다.", "물집을 터뜨리거나 각질을 뜯지 말고, 식초·표백제 같은 자극성 민간요법은 피합니다."], sources: [2, 3] },
      { id: "visit", title: "붓고 뜨겁거나 아프면 빨리 확인하세요", paragraphs: ["붉음·열감·부종·통증이 퍼지거나 고름·발열이 생기면 세균 감염이 동반됐을 수 있어 신속한 진료가 필요합니다. 당뇨병, 혈액순환 장애, 면역저하가 있으면 작은 상처도 일찍 확인하세요.", "권장 기간 동안 치료해도 낫지 않거나 자꾸 재발하면 진단과 사용법, 발톱무좀 동반 여부를 다시 살펴봐야 합니다."], sources: [1, 2] },
    ],
    faq: [
      { question: "물집이 있으면 습진인가요?", answer: "무좀과 한포진 같은 습진 모두 물집을 만들 수 있습니다. 물집 유무만으로 연고를 선택하지 마세요.", sources: [1] },
      { question: "무좀약을 발랐는데 안 나으면 습진인가요?", answer: "그렇게 단정할 수 없습니다. 사용 기간, 재감염, 발톱무좀, 다른 진단 등을 함께 확인해야 합니다.", sources: [1, 2] },
    ],
    references: [
      { title: "DermNet — Tinea pedis", url: "https://dermnetnz.org/topics/tinea-pedis" },
      { title: "영국 NHS — Athlete’s foot", url: "https://www.nhs.uk/conditions/athletes-foot/" },
      { title: "영국 NHS — Contact dermatitis: Treatment", url: "https://www.nhs.uk/conditions/contact-dermatitis/treatment/" },
      { title: "DermNet — Tinea incognito", url: "https://dermnetnz.org/topics/tinea-incognito" },
    ],
    related: [{ title: "사마귀와 티눈은 어떻게 구분하나요?", href: "/medical/dermatology/warts-corns" }],
  },
  {
    slug: "warts-corns",
    title: "사마귀와 티눈은 어떻게 구분하나요?",
    description: "사마귀와 티눈의 원인, 피부선·검은 점·통증의 차이와 진찰 및 치료 시 주의점을 안내합니다.",
    answer: "사마귀는 바이러스 감염, 티눈은 반복되는 압력과 마찰 때문에 생깁니다. 검은 점이나 피부선, 통증이 단서가 되지만 하나만으로 확진할 수는 없습니다. 깎거나 티눈약을 붙이기 전에 무엇인지 확인하는 것이 좋습니다.",
    sections: [
      { id: "comparison", title: "어떤 점이 다른가요?", table: { headers: ["구분", "사마귀", "티눈"], rows: [["원인", "사람유두종바이러스(HPV) 감염", "같은 부위에 반복되는 압력·마찰"], ["표면", "거칠고 작은 검은 점이 보이기도 함", "각질이 두꺼워지고 중심에 단단한 핵이 생김"], ["피부선", "병변 부위에서 끊겨 보일 수 있음", "대체로 이어져 보일 수 있음"], ["통증", "옆에서 누르거나 직접 눌러도 아플 수 있음", "중심을 수직으로 누를 때 아픈 경우가 많음"], ["번짐", "주변이나 다른 사람에게 전파 가능", "전염되지 않지만 압력이 계속되면 재발"]] }, paragraphs: ["검은 점은 흔히 작은 혈관과 관련된 소견이며 ‘뿌리’가 아닙니다. 점이 없다고 사마귀를 배제하거나, 통증 방향만으로 구분할 수 없습니다."], sources: [1, 2, 4] },
      { id: "diagnosis", title: "진찰로 표면과 분포를 확인합니다", paragraphs: ["언제 생겼는지, 개수가 늘었는지, 신발이 닿는 위치인지 등을 확인합니다. 필요하면 확대 관찰이나 의료진의 조심스러운 각질 정리로 특징을 살펴봅니다.", "빠르게 커지거나 반복해서 피가 나고, 상처처럼 헐거나 색이 변하면 다른 병변일 수 있습니다. 오래 치료해도 낫지 않는 경우도 진단을 다시 확인하고 필요하면 조직검사를 고려합니다."], sources: [1, 3] },
      { id: "treatment", title: "치료 목표도 서로 다릅니다", paragraphs: ["사마귀는 병변의 위치·크기·연령에 따라 살리실산 외용제, 냉동치료 등을 고려합니다. 여러 차례 치료가 필요하거나 재발할 수 있으며, 통증·물집·색 변화·흉터 가능성을 함께 설명받습니다. 증상이 적은 일부 사마귀는 경과를 관찰하기도 합니다.", "티눈은 두꺼운 각질을 치료하는 것과 함께 압력을 줄여야 합니다. 발에 맞는 신발, 보호 패드나 깔창 등을 검토합니다. 각질만 제거하고 압력 원인을 그대로 두면 다시 생기기 쉽습니다."], sources: [2, 3, 4] },
      { id: "care", title: "집에서 깊이 파내지 마세요", bullets: ["칼·손톱깎이로 파내면 출혈·감염·흉터가 생길 수 있습니다.", "사마귀를 뜯거나 긁지 말고, 사용한 각질 제거 도구를 다른 피부나 다른 사람에게 쓰지 않습니다.", "티눈약·사마귀약은 정상 피부에도 손상을 줄 수 있습니다. 진단과 사용 가능한 부위를 확인한 뒤 설명서나 의료진 안내에 따릅니다.", "얼굴·성기·상처 부위에는 일반 손발용 제거제를 임의로 사용하지 마세요."], sources: [1, 2, 3] },
      { id: "visit", title: "이런 경우는 자가 치료보다 진료가 먼저입니다", bullets: ["당뇨병, 발의 감각 저하·혈액순환 장애, 면역저하가 있습니다.", "통증 때문에 걷기 어렵거나 출혈·진물·고름이 생깁니다.", "병변이 빠르게 늘거나 모양·색이 변합니다.", "사마귀인지 티눈인지 확실하지 않거나 치료해도 반복됩니다."], sources: [2, 3, 4] },
    ],
    faq: [
      { question: "뿌리를 뽑아야 낫나요?", answer: "티눈의 단단한 핵과 사마귀의 점상 혈관을 뿌리로 생각하기 쉽습니다. 깊이 파내는 것으로 해결하려 하지 말고, 티눈은 압력 원인까지, 사마귀는 감염 병변의 범위까지 평가받으세요.", sources: [1, 2] },
      { question: "한 번 제거하면 다시 안 생기나요?", answer: "사마귀는 치료 후에도 재발할 수 있고, 티눈은 압력·마찰이 계속되면 다시 생길 수 있습니다. 치료 후 관리와 필요한 재진이 중요합니다.", sources: [1, 2, 3] },
    ],
    references: [
      { title: "DermNet — Viral wart", url: "https://dermnetnz.org/topics/viral-wart" },
      { title: "영국 NHS — Corns and calluses", url: "https://www.nhs.uk/conditions/corns-and-calluses/" },
      { title: "미국피부과학회(AAD) — Warts: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/warts-treatment" },
      { title: "미국피부과학회(AAD) — How to treat corns and calluses", url: "https://www.aad.org/public/everyday-care/injured-skin/burns/treat-corns-calluses" },
    ],
    related: [{ title: "티눈·사마귀 제거: 치료 전후 알아둘 점", href: "/medical/skin-treatments/corns-warts" }, { title: "무좀과 습진은 어떻게 다른가요?", href: "/medical/dermatology/athletes-foot-eczema" }],
  },
];

const newlyReviewedArticles: DermatologyArticle[] = [
  {
    "slug": "dermatitis-eczema",
    "draft": false,
    "publication": { "publishedAt": "2026-10-01", "modifiedAt": "2026-10-01", "reviewedAt": "2026-10-01" },
    "title": "피부염·습진, 왜 반복되고 어떻게 관리하나요?",
    "description": "피부염·습진의 흔한 원인, 보습과 연고 사용법, 다시 진료가 필요한 증상을 안내합니다.",
    "answer": "피부염·습진은 가려움과 붉음, 각질 등이 나타나는 피부 염증입니다. 원인이 다양하므로 반복되는 자극을 찾고, 보습과 필요한 염증 치료를 함께 하는 것이 기본입니다.",
    "sections": [
      {
        "id": "cause",
        "title": "습진은 한 가지 원인으로 생기는 병이 아닙니다",
        "paragraphs": [
          "세제·물·화장품 등에 의한 접촉피부염, 아토피피부염 등 여러 유형이 있습니다. 모든 습진이 알레르기 때문에 생기는 것은 아니며, 습진 자체가 다른 사람에게 옮는 병은 아닙니다.",
          "시작 시점과 부위, 새로 쓴 제품, 손을 자주 씻는 작업, 사용한 연고를 알려주세요. 반복되거나 치료에 반응하지 않으면 진단을 다시 살피고 필요한 검사를 결정합니다."
        ],
        "sources": [
          1,
          3
        ]
      },
      {
        "id": "care",
        "title": "생활에서는 자극을 줄이고 보습하세요",
        "paragraphs": [
          "씻은 뒤 부드럽게 물기를 닦고 보습제를 바르세요. 향이나 특정 제품 사용 후 따갑고 악화하면 사용을 중단하고 상담합니다.",
          "물·세제 작업에는 장갑을 사용하되 안에 땀이 차면 쉬고 말립니다. 가렵다고 세게 문지르거나 뜨거운 물로 씻는 것은 피하세요."
        ],
        "sources": [
          1,
          2,
          3
        ]
      },
      {
        "id": "treatment",
        "title": "연고는 부위와 염증 정도에 맞춰 사용합니다",
        "paragraphs": [
          "보습만으로 염증이 충분히 가라앉지 않으면 스테로이드 등 바르는 치료가 필요할 수 있습니다. 약의 강도·횟수·기간은 얼굴인지 손발인지, 나이와 증상에 따라 달라집니다.",
          "처방된 방법으로 사용하고, 다른 부위에 남은 연고를 임의로 오래 바르지 마세요. 호전되지 않거나 다시 악화하면 사용법과 진단을 확인합니다."
        ],
        "sources": [
          2
        ]
      },
      {
        "id": "visit",
        "title": "아프고 붓거나 빠르게 악화하면 진료를 받으세요",
        "paragraphs": [
          "고름·열감·통증이 생기거나 갑자기 넓어지고 발열이 동반되면 감염 여부를 신속히 확인해야 합니다. 반복되는 증상이 수면이나 일상을 방해해도 진료가 필요합니다."
        ],
        "sources": [
          3
        ]
      }
    ],
    "faq": [
      {
        "question": "보습제만 바르면 되나요?",
        "answer": "가벼운 건조에는 도움이 되지만 붉음·가려움이 지속되면 염증 치료가 함께 필요할 수 있습니다.",
        "sources": [
          2
        ]
      }
    ],
    "references": [
      {
        "title": "NHS — Contact dermatitis",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/"
      },
      {
        "title": "NHS — Contact dermatitis: Treatment",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/treatment/"
      },
      {
        "title": "NHS — Atopic eczema",
        "url": "https://www.nhs.uk/conditions/atopic-eczema/"
      }
    ],
    "related": [
      {
        "title": "얼굴 지루성피부염 관리",
        "href": "/medical/dermatology/seborrheic-dermatitis"
      },
      {
        "title": "무좀과 습진의 차이",
        "href": "/medical/dermatology/athletes-foot-eczema"
      }
    ]
  },
  {
    "slug": "folliculitis",
    "draft": false,
    "publication": { "publishedAt": "2026-10-01", "modifiedAt": "2026-10-01", "reviewedAt": "2026-10-01" },
    "title": "여드름처럼 보이는 모낭염, 어떻게 관리하나요?",
    "description": "모낭염의 원인과 여드름과의 구분, 면도·마찰 관리와 진료가 필요한 경우를 안내합니다.",
    "answer": "모낭염은 털이 나오는 모낭에 염증이 생긴 상태입니다. 여드름처럼 붉거나 고름이 찬 뾰루지로 보이지만, 세균·효모균·면도 자극 등 원인에 따라 치료가 달라집니다.",
    "sections": [
      {
        "id": "cause",
        "title": "뾰루지 모양만으로 원인을 단정하지 않습니다",
        "paragraphs": [
          "털 주변에 붉은 돌기나 고름이 생기고 가렵거나 아플 수 있습니다. 면도·제모, 땀과 마찰, 꽉 끼는 옷이 관련될 수 있습니다.",
          "여드름과 비슷해 진찰로 구분하며, 반복되거나 잘 낫지 않으면 고름의 배양검사 등 원인 확인을 고려합니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "treatment",
        "title": "모든 모낭염에 항생제가 필요한 것은 아닙니다",
        "paragraphs": [
          "자극을 줄이는 것으로 호전되는 경우도 있습니다. 세균성은 필요한 경우 항생제를, 효모균과 관련된 경우는 항진균 치료를 고려합니다.",
          "남은 항생제나 스테로이드 연고를 반복 사용하지 마세요. 잘 낫지 않으면 약을 더하기 전에 원인을 다시 확인해야 합니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "care",
        "title": "짜지 말고 면도와 마찰을 줄이세요",
        "paragraphs": [
          "염증이 있는 동안 면도·왁싱·털 뽑기를 쉬고, 운동 후에는 젖은 옷을 갈아입으세요. 피부를 부드럽게 씻고 통풍이 잘되는 옷을 입습니다.",
          "고름을 손으로 짜거나 바늘로 터뜨리지 마세요. 면도를 재개할 때는 피부 자극을 줄이는 방법을 상담하세요."
        ],
        "sources": [
          1,
          3
        ]
      },
      {
        "id": "visit",
        "title": "깊게 붓고 아프거나 열이 나면 빨리 확인하세요",
        "paragraphs": [
          "붉음과 통증이 빠르게 퍼지거나 발열·오한이 동반되면 신속히 진료받으세요. 큰 종기처럼 깊게 붓거나 반복되는 경우, 면역이 저하된 경우에도 확인이 필요합니다."
        ],
        "sources": [
          2,
          3
        ]
      }
    ],
    "faq": [
      {
        "question": "여드름약을 그대로 발라도 되나요?",
        "answer": "겉모양이 비슷해도 원인이 다를 수 있습니다. 사용 중인 약을 알려주고 진단에 맞게 치료를 조정하세요.",
        "sources": [
          1,
          2
        ]
      }
    ],
    "references": [
      {
        "title": "AAD — Acne-like breakouts could be folliculitis",
        "url": "https://www.aad.org/public/diseases/a-z/folliculitis"
      },
      {
        "title": "DermNet — Folliculitis",
        "url": "https://dermnetnz.org/topics/folliculitis"
      },
      {
        "title": "Mayo Clinic — Folliculitis: Symptoms and causes",
        "url": "https://www.mayoclinic.org/diseases-conditions/folliculitis/symptoms-causes/syc-20361634"
      }
    ],
    "related": [
      {
        "title": "여드름은 언제 치료해야 하나요?",
        "href": "/medical/dermatology/acne"
      }
    ]
  },
  {
    "slug": "nail-fungus",
    "draft": false,
    "publication": { "publishedAt": "2026-10-01", "modifiedAt": "2026-10-01", "reviewedAt": "2026-10-01" },
    "title": "손발톱무좀, 왜 치료가 오래 걸리나요?",
    "description": "손발톱무좀의 진단 확인, 바르는 약과 먹는 약의 선택, 치료 경과와 재감염 예방을 안내합니다.",
    "answer": "곰팡이를 치료해도 이미 변한 손발톱이 바로 정상으로 돌아오지는 않습니다. 건강한 손발톱이 자라 나오는 시간이 필요하므로, 약을 쓰는 기간과 외관이 회복되는 기간은 다를 수 있습니다.",
    "sections": [
      {
        "id": "diagnosis",
        "title": "두껍고 누렇다고 모두 무좀은 아닙니다",
        "paragraphs": [
          "손발톱이 두꺼워지고 부스러지거나 들뜨는 변화는 곰팡이 감염 외에도 외상·건선 등에서 생길 수 있습니다. 특히 먹는 치료를 시작하기 전에는 손발톱 검체로 감염 여부를 확인하는 것이 중요합니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "treatment",
        "title": "범위와 건강상태에 따라 치료를 고릅니다",
        "paragraphs": [
          "일부 가벼운 경우에는 손발톱용 항진균 외용제를 사용하며, 넓거나 여러 손발톱에 생긴 경우에는 먹는 약을 고려합니다. 일반 피부 무좀 크림과 손발톱용 약은 다릅니다.",
          "먹는 약을 정할 때는 간질환 등 기저질환, 복용약과의 상호작용, 임신·수유 여부를 확인합니다. 약에 따라 치료 전·중 혈액검사가 필요할 수 있습니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "course",
        "title": "새로 자라는 부분을 보며 경과를 확인합니다",
        "paragraphs": [
          "호전은 손발톱 뿌리 쪽에서 건강한 부분이 자라나는 모습으로 확인합니다. 손발톱, 특히 발톱은 자라는 속도가 느려 외관 회복에 수개월 이상 걸릴 수 있습니다.",
          "겉모양만 보고 약을 임의로 중단하거나 계속 연장하지 마세요. 정해진 시점에 반응을 확인하고 치료 종료 여부를 상담합니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "care",
        "title": "발의 무좀도 함께 관리하세요",
        "paragraphs": [
          "발가락 사이 무좀을 방치하지 말고 발을 깨끗하고 건조하게 유지하세요. 양말은 갈아 신고 공용 샤워실에서는 개인 슬리퍼를 사용합니다.",
          "손발톱깎이·수건·신발을 함께 쓰지 마세요. 손발톱을 과도하게 깎거나 파내지 않습니다."
        ],
        "sources": [
          1
        ]
      },
      {
        "id": "visit",
        "title": "당뇨병이 있거나 아프고 붓는다면 일찍 상담하세요",
        "paragraphs": [
          "당뇨병·면역저하가 있거나 손발톱 주변에 통증·부종이 생기면 진료받으세요. 치료가 듣지 않거나 다른 손발톱으로 퍼져도 다시 확인해야 합니다."
        ],
        "sources": [
          1
        ]
      }
    ],
    "faq": [
      {
        "question": "먹는 약을 끝냈는데 발톱은 아직 두꺼워요.",
        "answer": "손상된 부분이 자라서 교체되기까지 시간이 걸립니다. 다만 감염이 남았는지는 별도 판단이 필요하므로 새로 자라는 부분과 검사·진찰 결과로 확인합니다.",
        "sources": [
          2
        ]
      }
    ],
    "references": [
      {
        "title": "NHS — Fungal nail infection",
        "url": "https://www.nhs.uk/conditions/fungal-nail-infection/"
      },
      {
        "title": "AAD — Nail fungus: Diagnosis and treatment",
        "url": "https://www.aad.org/public/diseases/a-z/nail-fungus-treatment"
      }
    ],
    "related": [
      {
        "title": "무좀과 습진의 차이",
        "href": "/medical/dermatology/athletes-foot-eczema"
      }
    ]
  }
];

// Unreviewed articles are accessible only in Preview or local development.
export const dermatologyDraftsVisible = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const dermatologyArticles = [...publishedArticles, ...newlyReviewedArticles, ...herpesArticles]
  .filter((article) => !article.draft || dermatologyDraftsVisible);

export function getDermatologyPublication(article: DermatologyArticle) {
  return {
    ...dermatologyPublication,
    ...article.publication,
    ...(article.draft ? {
      publishedAt: "", reviewedAt: "", reviewerName: "", medicalReviewCompleted: false,
      modifiedAt: article.draftDates?.modifiedAt ?? dermatologyPublication.modifiedAt,
      sourceCheckedAt: article.draftDates?.sourceCheckedAt ?? dermatologyPublication.sourceCheckedAt,
    } : {}),
  };
}
