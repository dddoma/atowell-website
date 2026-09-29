export type SkinTreatmentReview = {
  createdAt: string;
  modifiedAt: string;
} & (
  | { status: "draft" }
  | { status: "published"; publishedAt: string; reviewedAt: string; reviewerName: string }
);

export const skinTreatmentSources = {
  moles: { name: "미국피부과학회(AAD) · Moles: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/moles-treatment", note: "점 제거 전 진단, 제거 방법과 재평가가 필요한 경우." },
  naevus: { name: "DermNet · Melanocytic naevus", url: "https://dermnetnz.org/topics/melanocytic-naevus", note: "색소성 모반의 평가, 치료 선택과 재발." },
  wound: { name: "미국피부과학회(AAD) · Skin biopsy wound care", url: "https://www.aad.org/public/diseases/a-z/skin-biopsy-wound-care", note: "피부 생검 후 상처관리 자료입니다. 공통적인 관리 원리만 참고했으며 실제 시술의 드레싱·봉합 지침을 우선합니다." },
  corns: { name: "DermNet · Corn and callus", url: "https://dermnetnz.org/topics/corn-callus", note: "압력·마찰에 의한 티눈과 굳은살, 압력 완화와 치료." },
  warts: { name: "미국피부과학회(AAD) · Warts: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/warts-treatment", note: "사마귀의 진단, 치료 선택지와 반복 치료." },
  wartCare: { name: "미국피부과학회(AAD) · Warts: At-home treatment", url: "https://www.aad.org/public/diseases/a-z/warts-self-care", note: "자가치료의 한계, 당뇨병·감각저하·혈액순환 장애 시 주의사항." },
  cyst: { name: "DermNet · Epidermoid cyst", url: "https://dermnetnz.org/topics/epidermoid-cyst", note: "표피낭종의 내용물과 낭종벽, 염증 및 제거 치료." },
  lipoma: { name: "DermNet · Lipoma", url: "https://dermnetnz.org/topics/lipoma", note: "지방종의 진단, 관찰과 제거 선택." },
  toxin: { name: "미국피부과학회(AAD) · Botulinum toxin therapy", url: "https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-overview", note: "표정주름 치료의 원리와 효과의 한계." },
  toxinPrep: { name: "미국피부과학회(AAD) · Botulinum toxin: Preparation", url: "https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-preparation", note: "시술 전 병력·복용약·이전 시술 확인과 상담." },
  toxinSafety: { name: "미국 국립의학도서관 MedlinePlus · OnabotulinumtoxinA Injection", url: "https://medlineplus.gov/druginfo/meds/a608013.html", note: "보툴리눔 독소의 주의 증상에 관한 보조 자료입니다. 특정 미국 제품의 적응증·연령·용량을 국내 제품에 적용하지 않았습니다." },
  filler: { name: "미국 식품의약국(FDA) · Dermal Fillers", url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers", note: "필러의 한계, 흔한 이상반응과 혈관 합병증의 경고 증상. 미국 승인 부위를 국내 허가 기준으로 해석하지 않습니다." },
  ipl: { name: "DermNet · Intense pulsed light therapy", url: "https://dermnetnz.org/topics/intense-pulsed-light-therapy", note: "IPL의 원리, 대상 병변과 치료 전후 주의사항." },
  melasma: { name: "미국피부과학회(AAD) · Melasma: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/melasma-treatment", note: "기미의 진단, 자외선 차단·약물과 선택적 시술 치료." },
  sunCare: { name: "미국피부과학회(AAD) · Melasma: Self-care", url: "https://www.aad.org/public/diseases/a-z/melasma-self-care", note: "일상적인 광선 차단과 자극을 줄이는 피부관리." },
  toning: { name: "Wong Y 외 · 레이저 토닝 후 저색소반점 증례, Ann Dermatol (2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26719647/", note: "Hypopigmentation Induced by Frequent Low-Fluence, Large-Spot-Size QS Nd:YAG Laser Treatments. 3명 증례 보고로, 일반적인 발생률이나 특정 장비의 위험 순위를 뜻하지 않습니다." },
} as const;
export type SkinSourceKey = keyof typeof skinTreatmentSources;
export type SkinTreatmentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
  note?: { title: string; text: string; urgent?: boolean };
  refs: SkinSourceKey[];
};
export type SkinTreatmentArticle = {
  slug: string;
  topic: string;
  title: string;
  description: string;
  lead: string;
  answer: string;
  answerRefs: SkinSourceKey[];
  urgentLink?: string;
  sections: SkinTreatmentSection[];
  takeHome: string;
  consultation: string;
  related: string[];
  review: SkinTreatmentReview;
  reviewNote: string;
  sourcesCheckedAt: string;
};

// Do not change status, publication date, or reviewer without explicit physician approval.
const draft: SkinTreatmentReview = { status: "draft", createdAt: "2026-09-29", modifiedAt: "2026-09-29" };
export const skinTreatmentArticles: SkinTreatmentArticle[] = [
  {
    slug: "mole-removal", topic: "점 제거",
    title: "점을 빼기 전에 무엇을 확인하나요?",
    description: "점의 진단, 제거 방법과 흉터·재발, 시술 후 관리",
    lead: "작은 점 하나도 먼저 무엇인지 확인한 뒤 제거 방법을 정합니다. 색을 없애는 것과 병변을 정확히 진단하는 것은 다른 일입니다.",
    answer: "점처럼 보여도 서로 다른 병변일 수 있습니다. 진찰로 상태를 확인하고, 필요하면 조직검사를 고려합니다. 제거를 결정할 때에는 레이저나 절제 등 방법별 한계와 흉터·재발 가능성도 함께 살펴야 합니다.",
    answerRefs: ["moles", "naevus"],
    sections: [
      {
        id: "check", title: "최근 모양이나 색이 바뀌었나요?",
        paragraphs: ["어릴 때부터 비슷하게 유지된 점과 최근 생겨 변하는 병변은 평가가 다릅니다. 언제부터 있었는지, 이전에 제거한 적이 있는지 알려주세요.", "빠르게 커지거나 색과 모양이 불규칙해지는 경우, 다른 점과 유난히 다른 경우, 반복해서 피가 나거나 헐어 낫지 않는 경우에는 미용 목적의 제거에 앞서 진단이 필요합니다. 이런 변화가 모두 암이라는 뜻은 아니지만 사진이나 크기만으로 안전하다고 단정할 수는 없습니다."],
        refs: ["moles", "naevus"]
      },
      {
        id: "method", title: "레이저로 빼는 것과 절제는 어떻게 다른가요?",
        paragraphs: ["양성으로 판단된 병변은 종류·깊이·위치에 따라 레이저 등으로 치료하거나, 표면을 깎는 방법 또는 절제를 선택할 수 있습니다. 모든 점에 한 가지 방법이 맞는 것은 아닙니다.", "악성이 의심되거나 진단이 불확실하면 조직을 확인할 수 있는 검사 방법을 먼저 정합니다. 조직을 파괴하는 시술을 먼저 하면 진단에 필요한 정보가 사라질 수 있습니다."],
        note: { title: "진료에서 먼저 물어볼 내용", text: "“어떤 병변으로 보이나요?”, “조직검사가 필요한가요?”, “왜 이 제거 방법을 권하나요?”를 확인하세요." },
        refs: ["moles", "naevus"]
      },
      {
        id: "expectation", title: "한 번에 없어지고 흉터도 안 남나요?",
        paragraphs: ["흉터가 전혀 남지 않거나 한 번에 완전히 제거된다고 보장할 수는 없습니다. 병변의 깊이와 위치, 피부 특성에 따라 자국이나 흉터가 남거나 색소가 다시 보일 수 있습니다.", "재발한 색소가 모두 위험한 것은 아니지만, 제거한 자리에 다시 색이 나타나거나 모양이 변하면 재시술부터 받기보다 다시 확인하세요. 과거 치료 방법이나 조직검사 결과가 있으면 도움이 됩니다."],
        refs: ["moles", "naevus"]
      },
      {
        id: "aftercare", title: "시술 후에는 상처를 보호합니다",
        paragraphs: ["처치받은 곳에서 안내한 세안·드레싱 방법을 따르세요. 상처를 문지르거나 딱지를 뜯지 말고, 처방받지 않은 제거제나 각질제거제를 바르지 않습니다. 보호재의 종류와 교체 시기는 상처에 따라 다릅니다.", "상처가 아문 뒤에는 자외선 차단을 꾸준히 합니다. 화장이나 수영 등을 다시 시작할 시점도 실제 상처 상태를 기준으로 확인하세요."],
        refs: ["wound"]
      },
      {
        id: "return", title: "어떤 때 다시 연락해야 하나요?",
        paragraphs: ["통증·붓기·붉음이 점점 심해지거나 고름·발열이 생기고, 압박해도 출혈이 계속되면 처치받은 의료기관에 연락해 확인하세요. 조직검사를 했다면 결과 확인 일정도 지켜주세요."],
        refs: ["wound", "moles"]
      }
    ],
    takeHome: "점 제거는 색을 지우기 전에 병변을 확인하는 과정부터 시작합니다.",
    consultation: "이전 사진과 제거·조직검사 이력, 흉터가 두껍게 남았던 경험을 알려주세요. 시술 가능 여부와 관리 일정은 진찰 후 확인합니다.",
    related: ["benign-tumors", "ipl-toning"], review: { ...draft }, sourcesCheckedAt: "2026-09-29",
    reviewNote: "원내에서 사용하는 점 제거 방법, 의심 병변의 조직검사·의뢰 흐름, 실제 드레싱 안내와 대조해 주세요. 흉터 없는 제거·일률적인 재시술 횟수는 약속하지 않았습니다."
  },
  {
    slug: "corns-warts", topic: "티눈·사마귀 제거",
    title: "티눈과 사마귀, 제거 방법이 다른가요?",
    description: "겉모양은 비슷해도 다른 원인, 치료 선택과 반복 관리",
    lead: "발바닥의 단단한 돌기가 모두 티눈은 아닙니다. 같은 부위를 반복해서 깎기 전에 원인부터 구분하는 것이 좋습니다.",
    answer: "티눈은 반복되는 압력·마찰에 대한 피부 반응이고, 사마귀는 바이러스에 의한 병변입니다. 티눈은 눌리는 원인을 줄이는 것이 중요하고, 사마귀는 병변과 위치에 맞는 치료를 선택하며 반복 치료가 필요할 수 있습니다.",
    answerRefs: ["corns", "warts"],
    sections: [
      {
        id: "difference", title: "겉모양만으로 구분하기 어려울 수 있습니다",
        paragraphs: ["티눈은 신발이나 보행 중 압력이 집중되는 곳에 각질이 두꺼워져 생깁니다. 사마귀도 발바닥에서는 눌려 단단한 각질처럼 보일 수 있습니다.", "작은 검은 점이나 통증의 양상은 단서일 뿐입니다. 잘라서 확인하려 하지 말고, 불분명하거나 빠르게 변하는 병변은 진찰로 확인하세요."],
        refs: ["corns", "warts"]
      },
      {
        id: "corn", title: "티눈은 각질과 압력을 함께 관리합니다",
        paragraphs: ["필요하면 두꺼운 각질을 줄이거나 각질을 부드럽게 하는 약을 사용합니다. 동시에 신발의 폭과 눌리는 위치를 확인하고 보호 패드 등으로 마찰과 압력을 줄입니다.", "겉의 각질만 제거하고 같은 압력이 계속되면 다시 생길 수 있습니다. “뿌리만 뽑으면 끝난다”기보다, 왜 그 자리에 반복해서 생기는지 살펴야 합니다."],
        refs: ["corns"]
      },
      {
        id: "wart", title: "사마귀 치료는 위치와 불편을 보고 정합니다",
        paragraphs: ["살리실산 제제나 냉동치료 등이 흔히 사용됩니다. 잘 낫지 않는 병변은 다른 치료를 고려할 수 있지만, 모든 사마귀를 레이저로 제거하는 것이 기본은 아닙니다.", "여러 차례 치료가 필요하거나 치료 후 다시 생길 수 있습니다. 냉동치료 등은 통증·물집·색소 변화가 생길 수 있으므로, 걷거나 손을 사용하는 일상도 고려해 계획합니다."],
        refs: ["warts"]
      },
      {
        id: "home", title: "집에서 잘라내거나 약을 함부로 붙이지 마세요",
        paragraphs: ["사마귀를 뜯거나, 사용한 각질 제거 도구를 다른 부위나 다른 사람과 함께 쓰지 마세요. 바르는 약은 정상 피부까지 손상시키지 않도록 안내된 부위와 방법에 맞춰 사용합니다.", "치료 후 물집이나 상처가 생기면 임의로 뜯지 말고 안내받은 방법으로 보호하세요. 통증이 심하거나 붓기·고름이 증가하면 치료받은 곳에 연락합니다."],
        note: { title: "자가치료 전에 진료가 필요한 경우", text: "당뇨병, 발의 감각저하, 혈액순환 장애가 있거나 면역이 저하된 경우에는 티눈액·사마귀 제거제나 칼을 임의로 사용하지 마세요. 얼굴·생식기 병변도 별도 평가가 필요합니다." },
        refs: ["wartCare", "warts"]
      },
      {
        id: "followup", title: "겉이 평평해졌다고 치료를 끝내도 되나요?",
        paragraphs: ["통증과 병변이 어떻게 변했는지 확인하며 치료 종료 시점을 정합니다. 계속 낫지 않거나 피가 나고 모양이 달라지면 진단과 치료 방법을 다시 평가해야 합니다."],
        refs: ["warts"]
      }
    ],
    takeHome: "티눈은 눌리는 이유를, 사마귀는 병변과 치료 경과를 함께 봅니다.",
    consultation: "언제부터 있었는지, 어떤 신발이나 활동에서 아픈지, 집에서 사용한 제거제와 이전 치료를 알려주세요. 당뇨병이나 발 감각 변화도 함께 말씀해 주세요.",
    related: ["mole-removal", "benign-tumors"], review: { ...draft }, sourcesCheckedAt: "2026-09-29",
    reviewNote: "원내 시행 치료와 반복 방문 안내, 발바닥 시술 후 보행·드레싱 지침을 확인해 주세요. 치료 선택지는 일반 정보이며 모든 방법을 원내에서 시행한다고 표시하지 않았습니다."
  },
  {
    slug: "benign-tumors", topic: "양성종양 제거",
    title: "피부의 양성종양은 꼭 제거해야 하나요?",
    description: "표피낭종·지방종의 관찰과 제거, 조직검사와 상처관리",
    lead: "피부 아래에 만져지는 덩어리는 종류에 따라 접근이 다릅니다. 이 글에서는 흔한 표피낭종과 지방종을 중심으로 설명합니다.",
    answer: "양성으로 판단되고 불편이 없다면 관찰할 수 있습니다. 통증·반복 염증·압박감이 있거나 외관상 제거를 원하면 치료를 상담합니다. 다만 만져지는 덩어리를 모두 양성이라고 단정하지 않고 먼저 진단합니다.",
    answerRefs: ["cyst", "lipoma"],
    sections: [
      {
        id: "types", title: "표피낭종과 지방종은 다른 병변입니다",
        paragraphs: ["표피낭종은 피부 아래 주머니 안에 각질 성분이 쌓이는 병변입니다. 흔히 ‘피지낭종’이라고 부르지만, 단순히 피지가 고인 것과는 다릅니다.", "지방종은 지방세포로 이루어진 양성종양입니다. 겉모양과 만지는 느낌만으로 다른 종양과 구별하기 어려우면 영상검사나 조직검사를 고려합니다."],
        refs: ["cyst", "lipoma"]
      },
      {
        id: "decision", title: "관찰할지, 제거할지 어떻게 정하나요?",
        paragraphs: ["병변의 크기·깊이·위치, 커지는 양상과 생활의 불편을 살핍니다. 증상이 없는 작은 병변은 관찰할 수 있고, 반복해서 염증이 생기거나 주변을 눌러 불편하면 제거를 고려합니다.", "진단이 불확실하거나 크고 깊은 병변은 바로 외래에서 제거하기보다 추가 검사나 적절한 진료과 의뢰가 먼저일 수 있습니다. 제거 범위와 흉터에 대해서도 미리 설명을 듣습니다."],
        refs: ["cyst", "lipoma"]
      },
      {
        id: "inflamed", title: "붓고 아픈 낭종은 바로 완전히 제거하나요?",
        paragraphs: ["염증이 심한 표피낭종은 상태에 따라 배농 등으로 급한 문제를 먼저 치료하고, 가라앉은 뒤 낭종벽의 제거를 계획할 수 있습니다. 항생제가 필요한지는 감염 여부 등을 보고 판단합니다.", "내용물만 짜내면 주머니 벽이 남아 다시 차오를 수 있습니다. 집에서 바늘로 찌르거나 짜지 말고, 붉어지고 아프거나 진물이 나면 진료로 확인하세요."],
        refs: ["cyst"]
      },
      {
        id: "pathology", title: "제거와 조직검사는 어떤 관계인가요?",
        paragraphs: ["절제한 조직은 병변의 종류와 진단 필요성에 따라 병리검사로 확인합니다. 겉으로 양성처럼 보였다는 설명과 최종 조직검사 결과는 구분해서 이해하세요.", "검사를 했다면 언제, 어떤 방법으로 결과를 확인할지 정해두세요. 연락이 없다는 이유만으로 결과가 정상이라고 추정하지 말고 예정된 확인을 마칩니다."],
        refs: ["cyst", "lipoma"]
      },
      {
        id: "care", title: "제거 뒤에는 봉합과 상처 상태에 맞춰 관리합니다",
        paragraphs: ["봉합 여부와 부위에 따라 드레싱, 샤워, 실밥 제거 시점이 달라집니다. 받은 안내를 따르고 상처를 반복해서 만지거나 벌어지게 하는 자극을 피하세요.", "붓기와 통증이 심해지거나 고름·발열·계속되는 출혈이 있으면 즉시 연락해 확인합니다. 회복 뒤에도 덩어리가 다시 만져지면 재평가가 필요합니다."],
        refs: ["wound", "cyst", "lipoma"]
      }
    ],
    takeHome: "모든 덩어리를 없애기보다, 무엇인지 확인하고 제거의 이득과 부담을 함께 판단합니다.",
    consultation: "크기가 변한 속도, 반복해서 부은 적이 있는지, 이전 배농·제거·조직검사 이력을 알려주세요. 검사와 시술 가능 범위는 진찰 후 안내받습니다.",
    related: ["mole-removal", "corns-warts"], review: { ...draft }, sourcesCheckedAt: "2026-09-29",
    reviewNote: "양성종양의 예로 표피낭종·지방종을 다뤘습니다. 원내 제거 가능 범위, 의뢰 기준, 조직검사 결과 안내와 실밥 제거 지침을 최종 확인해 주세요."
  },
  {
    slug: "botox-fillers", topic: "보톡스·필러",
    title: "보톡스와 필러는 어떻게 다른가요?",
    description: "작용과 한계, 시술 전 확인사항, 구분해야 할 이상반응",
    lead: "주사 시술이라는 점은 같지만 작용과 주의사항은 다릅니다. 이 글은 성인의 미용 목적 시술을 이해하기 위한 일반 안내입니다.",
    answer: "보툴리눔 독소는 근육의 움직임을 일시적으로 줄이는 데, 필러는 꺼진 부위의 볼륨 등을 보완하는 데 사용합니다. 어떤 변화가 필요한지 먼저 살피고, 효과의 한계와 이상반응을 이해한 뒤 결정합니다.",
    answerRefs: ["toxin", "filler"],
    urgentLink: "시술 후 시력 변화·심한 통증 또는 호흡·삼킴 이상이 있다면 → 주의 증상 바로 확인",
    sections: [
      {
        id: "difference", title: "같은 주름에도 원인이 다릅니다",
        paragraphs: ["흔히 ‘보톡스’라고 부르는 보툴리눔 독소 시술은 표정을 지을 때 생기는 주름 등에 쓰입니다. 피부를 채우는 시술은 아니며, 모든 주름을 없애는 것도 아닙니다.", "필러는 주입한 물질로 볼륨이나 윤곽을 보완합니다. 둘 다 해야 하는 것은 아니고, 시술을 하지 않거나 다른 방법을 선택하는 것도 가능합니다."],
        refs: ["toxin", "filler", "toxinPrep"]
      },
      {
        id: "expectation", title: "효과는 언제 보이고 얼마나 유지되나요?",
        paragraphs: ["보툴리눔 독소는 주사 직후보다 시간이 지나면서 효과가 나타나므로, 너무 이른 시점에 추가 시술을 결정하지 않습니다. 유지 기간은 제품·부위·개인 반응에 따라 다릅니다.", "필러는 초기 붓기를 가라앉힌 뒤 결과를 평가해야 합니다. 재료에 따라 특성과 제거 가능성이 다르며, 모든 필러를 쉽게 녹여 원래대로 되돌릴 수 있는 것은 아닙니다."],
        refs: ["toxin", "toxinSafety", "filler"]
      },
      {
        id: "before", title: "시술 전에 알려야 할 정보가 있습니다",
        paragraphs: ["기대하는 변화와 함께 아래 내용을 알려주세요. 약이나 제품의 이름을 모르면 처방전·시술기록을 가져와도 좋습니다."],
        bullets: [
          { label: "이전 시술", text: "보툴리눔 독소·필러의 제품명, 부위와 날짜, 과거 이상반응을 알립니다." },
          { label: "질환과 복용약", text: "근육·신경 질환, 호흡·삼킴 문제, 알레르기와 출혈 관련 질환을 알립니다. 항응고제·항혈소판제 등은 임의로 끊지 말고 처방 의료진과 조절 여부를 상의합니다." },
          { label: "임신·수유와 피부 상태", text: "임신 가능성·계획·수유 여부와 시술 부위의 염증·감염을 알려 안전성과 연기 필요성을 상담합니다." }
        ],
        refs: ["toxinPrep", "toxinSafety", "filler"]
      },
      {
        id: "common", title: "흔한 불편과 재진이 필요한 변화를 구분합니다",
        paragraphs: ["주사 부위의 멍·붓기·압통이 생길 수 있습니다. 보툴리눔 독소 후 눈꺼풀 처짐이나 원치 않는 표정 변화, 필러 후 오래가는 덩어리·붓기·붉음은 시술한 의료진에게 확인받으세요.", "주사 자리를 임의로 강하게 문지르거나 마사지하지 말고 받은 지침을 따릅니다. 증상이 심해지는데 멍이나 붓기라고만 여기며 기다리지 마세요."],
        refs: ["toxinSafety", "filler"]
      },
      {
        id: "urgent", title: "이런 증상은 기다리지 마세요",
        paragraphs: ["흔하지 않더라도 신속한 평가가 필요한 반응이 있습니다. 다음 예약일이나 업무시간까지 기다리지 않습니다."],
        bullets: [
          { label: "필러 후 심한 통증 또는 피부색 변화", text: "예상 밖의 심한 통증, 피부가 하얗거나 회색·푸르게 변하는 증상은 혈액공급 장애 신호일 수 있습니다. 즉시 시술 의료기관에 연락하면서 바로 진료받으세요. 연락이 닿지 않으면 응급실로 가세요." },
          { label: "시력 변화 또는 신경학적 증상", text: "갑작스러운 시력 저하·시야 이상, 말이 어눌해지거나 한쪽 힘이 빠지면 119 또는 응급실에서 즉시 평가받으세요." },
          { label: "호흡·삼킴 이상", text: "시술 후 숨쉬거나 삼키기 어렵고 전신에 힘이 빠지거나, 혀·목이 붓는 경우에도 즉시 응급 도움을 받으세요." }
        ],
        note: { title: "연락만 남기고 기다리지 마세요", text: "어떤 시술을 언제 어느 부위에 받았는지 의료진에게 알리세요. 위험 증상을 집에서 마사지하거나 다른 약으로 해결하려 하지 않습니다.", urgent: true },
        refs: ["filler", "toxinSafety"]
      }
    ],
    takeHome: "보톡스와 필러는 다른 치료입니다. 원하는 변화만큼 한계와 위험 신호도 알아두세요.",
    consultation: "제품명·시술 부위·날짜를 기록해 두세요. 상담 때 예상 효과뿐 아니라 이상반응이 생겼을 때 연락하고 진료받을 방법도 확인합니다.",
    related: ["ipl-toning", "mole-removal"], review: { ...draft }, sourcesCheckedAt: "2026-09-29",
    reviewNote: "현재 사용하는 국내 제품별 허가사항, 시술 가능 부위, 후관리와 응급 연락·의뢰 흐름을 대조해 주세요. 해외 자료의 허가 연령·부위·용량은 국내 기준으로 옮기지 않았습니다."
  },
  {
    slug: "ipl-toning", topic: "IPL·토닝",
    title: "IPL과 토닝, 내 피부에는 어떤 치료가 맞을까요?",
    description: "기미·잡티의 구분, 빛·레이저 치료의 차이와 후관리",
    lead: "갈색으로 보인다고 모두 같은 잡티는 아닙니다. 치료 이름부터 고르기보다 무엇이 색을 만드는지 확인합니다.",
    answer: "IPL은 여러 파장대의 빛을 사용하는 치료이고, 토닝은 주로 색소를 겨냥한 레이저 치료 방식을 가리킵니다. 기미·잡티의 종류와 피부 상태에 따라 적합성이 달라지며, 시술이 아닌 광선 차단과 약물치료가 우선일 수도 있습니다.",
    answerRefs: ["ipl", "melasma", "toning"],
    sections: [
      {
        id: "diagnosis", title: "기미와 다른 잡티는 치료 계획이 다릅니다",
        paragraphs: ["갈색 반점에는 여러 원인이 섞여 있을 수 있습니다. 위치와 경과, 피부 상태를 살펴 기미인지 다른 색소성 병변인지 확인합니다.", "기미는 햇빛 등으로 반복해서 진해질 수 있어 광선 차단과 피부에 맞는 약물치료가 바탕이 됩니다. 시술로 한 번 지우면 끝나는 문제로 설명하기 어렵습니다."],
        refs: ["melasma", "sunCare"]
      },
      {
        id: "methods", title: "IPL과 토닝은 서로 대체되는 같은 시술이 아닙니다",
        paragraphs: ["IPL은 엄밀히 말해 레이저가 아니며, 필터 등으로 빛의 범위를 조절해 일부 색소·혈관성 병변을 치료합니다. 어떤 문제를 목표로 하느냐에 따라 설정과 반응이 다릅니다.", "‘레이저 토닝’은 하나의 제품명이 아닙니다. 낮은 에너지의 색소 레이저를 반복하는 방식 등이 포함되며, 사용하는 장비와 조사 방식에 따라 치료 계획이 달라집니다. 이름만으로 자신에게 맞는 시술인지 판단할 수는 없습니다."],
        refs: ["ipl", "toning"]
      },
      {
        id: "plan", title: "강하게, 자주 받을수록 좋은가요?",
        paragraphs: ["그렇지 않습니다. 반복적인 레이저 토닝 뒤 피부에 작은 흰 반점이 생긴 사례가 보고되어 있습니다. 색이 더 짙어지거나 새로 하얗게 보이는 곳이 생기면 다음 치료 전에 재평가해야 합니다.", "횟수와 간격을 모두에게 같게 정하기보다 반응과 이상반응을 보며 조정합니다. 기미는 시술을 추가하더라도 일상 관리와 약물치료를 함께 검토합니다."],
        note: { title: "연구 결과를 읽을 때", text: "흰 반점에 관한 참고문헌은 3명 증례 보고입니다. 가능성을 경고하는 자료이지, 모든 토닝에서 같은 위험이 생긴다거나 발생률이 얼마라는 뜻은 아닙니다." },
        refs: ["toning", "melasma", "ipl"]
      },
      {
        id: "before", title: "최근 햇볕 노출과 사용 중인 제품을 알려주세요",
        paragraphs: ["최근 태닝이나 강한 햇볕 노출, 이전 레이저 치료와 피부 반응을 알립니다. 먹는 약과 바르는 제품도 확인해 치료 시점을 정합니다.", "시술 중에는 적절한 눈 보호가 필요합니다. 기대효과뿐 아니라 따가움·붉음, 물집이나 색소 변화가 생길 가능성도 미리 설명을 듣습니다."],
        refs: ["ipl", "melasma"]
      },
      {
        id: "aftercare", title: "시술 후에는 자극과 햇빛을 줄입니다",
        paragraphs: ["부드러운 세안과 보습을 기본으로 하고, 따갑거나 화끈거리는 제품과 강한 각질제거는 피하세요. 자외선 차단제와 모자·그늘을 함께 활용합니다. 일반적인 광선 차단에는 SPF 30 이상의 광범위 차단 제품이 권장됩니다.", "심한 통증이나 물집, 진물·상처가 생기면 시술받은 곳에 신속히 연락하세요. 예상한 반응 범위를 넘는 변화가 있을 때에는 추가 시술보다 피부 회복과 재평가가 먼저입니다."],
        refs: ["sunCare", "ipl"]
      }
    ],
    takeHome: "시술 이름보다 색소의 원인, 치료 강도보다 피부의 반응이 먼저입니다.",
    consultation: "기미·잡티가 심해진 시점, 최근 햇빛 노출, 사용 중인 약·화장품과 이전 시술 기록을 알려주세요. 일정이 촉박한 중요한 행사가 있다면 회복 기간도 함께 상담합니다.",
    related: ["mole-removal", "botox-fillers"], review: { ...draft }, sourcesCheckedAt: "2026-09-29",
    reviewNote: "원내 IPL·토닝 장비와 실제 치료 대상, 기미의 기본 치료 및 시술 후 안내를 확인해 주세요. 장비명·패키지 횟수·간격·효과 보장은 임의로 넣지 않았습니다."
  },
];

export function isSkinTreatmentPublished(article: SkinTreatmentArticle): boolean {
  return article.review.status === "published";
}
export function canReadSkinTreatment(article: SkinTreatmentArticle): boolean {
  return isSkinTreatmentPublished(article)
    || process.env.VERCEL_ENV === "preview"
    || process.env.NODE_ENV === "development";
}
export function getSkinTreatmentArticle(slug: string): SkinTreatmentArticle | undefined {
  return skinTreatmentArticles.find((article) => article.slug === slug);
}
export function getSkinSourceKeys(article: SkinTreatmentArticle): SkinSourceKey[] {
  return Array.from(new Set([...article.answerRefs, ...article.sections.flatMap((section) => section.refs)]));
}
