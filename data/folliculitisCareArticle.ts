import type { DermatologyArticle } from "./dermatologyArticles";

export const folliculitisCareArticle: DermatologyArticle = {
  slug: "folliculitis-care", draft: false,
  publication: { publishedAt: "2026-10-14", modifiedAt: "2026-10-14", sourceCheckedAt: "2026-10-14", reviewedAt: "2026-10-14", medicalReviewCompleted: true, reviewerName: "권병현" },
  title: "얼굴 모낭염, 집에서는 이렇게 관리하세요",
  description: "얼굴 모낭염 진료 후 관리 안내. 처방 연고·항생제·소염제 사용, 자극을 줄이는 세안·면도, 보습과 주사 처치 후 관리를 설명합니다.",
  answer: "모낭염은 털이 나오는 모낭 주변에 염증이 생기는 질환입니다. 붉은 뾰루지나 작은 고름이 생기고, 가렵거나 따가울 수 있습니다. 여드름과 비슷해 보여도 원인과 치료가 다를 수 있습니다. 처방받은 약을 사용하면서, 손대거나 문지르는 자극을 줄이고 보습하는 것이 관리의 기본입니다.",
  sections: [
    { id: "ointment", title: "1. 바르는 연고와 먹는 약은 처방대로 사용하세요", paragraphs: ["바르는 연고는 다음과 같이 사용하세요."], bullets: ["손을 씻고, 처방받은 부위에 얇게 바르세요.", "바르는 횟수와 사용 기간은 처방에 따르세요. 많이 바른다고 빨리 낫지는 않습니다.", "눈·입 안에 들어가지 않도록 주의하세요.", "집에 있던 다른 연고나 여드름약을 임의로 덧바르지 마세요.", "바른 뒤 심하게 따갑거나 붓고 발진이 번지면 사용을 멈추고 문의하세요."], sources: [1, 2] },
    { id: "oral-medicine", title: "먹는 항생제와 소염제", paragraphs: ["항생제는 세균성 모낭염의 원인균을 치료하고, 소염제는 염증과 통증을 줄이는 데 도움을 줍니다. 처방받은 약의 역할과 복용법에 따라 사용하세요."], bullets: ["약 봉투에 적힌 용량·횟수·기간을 지키세요.", "좋아졌다고 임의로 중단하거나, 남은 약을 나중에 혼자 다시 먹지 마세요.", "다른 진통소염제나 감기약을 추가하기 전에는 병원이나 약국에 확인하세요.", "심한 설사·복통, 두드러기 등 이상 증상이 생기면 의료진에게 알려 주세요. 숨이 차거나 입술·혀가 붓는다면 즉시 응급진료를 받으세요."], sources: [1, 2] },
    { id: "gentle-care", title: "2. 깨끗하게 씻되, 자극을 주지 마세요", paragraphs: ["모낭염이 생겼다고 더 세게 씻거나 반복해서 소독할 필요는 없습니다. 지나친 세안과 마찰은 피부를 자극할 수 있습니다."], bullets: ["미지근한 물과 순한 세정제로 부드럽게 씻으세요.", "세안 브러시·때수건·스크럽·필링 제품은 피하세요.", "수건으로 비비지 말고 가볍게 눌러 물기를 닦으세요.", "고름을 짜거나 바늘로 터뜨리지 마세요. 딱지도 억지로 떼지 마세요.", "마스크나 손으로 같은 부위를 계속 문지르지 마세요. 젖거나 오염된 마스크는 교체하세요."], sources: [3, 4] },
    { id: "shaving", title: "면도는 특히 조심하세요", paragraphs: ["염증이 있는 동안에는 가능하면 면도를 쉬세요. 꼭 해야 한다면 병변을 피하고, 털이 자라는 방향으로 가볍게 면도하세요. 피부에 바짝 밀착하거나 같은 자리를 여러 번 밀지 마세요.", "면도기는 사용 후 세척하고 잘 말리며, 다른 사람과 함께 쓰지 마세요. 수염을 뽑거나 왁싱하는 것도 피하세요."], sources: [1, 3, 4] },
    { id: "moisturizer", title: "3. 피부가 마르지 않도록 보습하세요", paragraphs: ["보습은 세균을 없애는 치료는 아니지만, 건조함과 자극을 줄이고 피부가 회복되는 데 도움이 됩니다.", "처방 연고와 보습제는 손바닥에서 섞지 말고 각각 바르세요. 별도로 안내받은 도포 순서가 있다면 그 방법을 따르세요."], bullets: ["세안 후 순한 보습제를 바르세요.", "향이 적고 가벼운 로션·크림, ‘논코메도제닉’ 또는 ‘모공을 막지 않는 제품’으로 표시된 제품을 선택하세요.", "번들거린다고 보습을 무조건 생략하지 말고, 피부에 맞는 제품을 적당량 사용하세요.", "무거운 오일이나 유분이 많은 제품을 두껍게 덮어 바르지 마세요.", "새 제품을 바른 뒤 뾰루지가 늘거나 따갑다면 사용을 중단하고 상담하세요."], sources: [5, 6] },
    { id: "injection-care", title: "4. 큰 병변에 주사 처치를 받았다면", paragraphs: ["주사 부위를 누르거나 마사지하지 말고, 손으로 짜지 마세요. 주사를 맞았더라도 처방받은 약과 생활관리는 안내대로 계속하세요.", "큰 뾰루지가 모두 같은 병변은 아닙니다. 고름이 깊이 고인 경우에는 별도의 처치가 필요할 수 있으므로 집에서 터뜨리지 마세요."], bullets: ["주사 직후에는 가벼운 통증이나 작은 멍이 생길 수 있습니다.", "시간이 지나면서 더 붓고 뜨거워지거나, 통증·고름이 늘면 다시 진료받으세요.", "주사 종류에 따라 피부가 일시적으로 패이거나 색이 달라질 수 있습니다. 변화가 보이면 병원에 알려 주세요."], sources: [2, 7] },
    { id: "visit", title: "이럴 때는 다시 진료받으세요", paragraphs: ["반복되는 얼굴 뾰루지는 세균성 모낭염 외에 다른 원인이 있을 수 있습니다. 남은 항생제나 연고를 계속 사용하기보다 진단과 치료를 다시 확인하세요.", "개인별 약 사용법과 처치 후 관리는 진료실에서 안내받은 내용을 우선해 주세요."], bullets: ["치료 중에도 붉음·부기·통증이 심해지거나 주변으로 번질 때", "열이 나거나 눈 주변까지 붓는 경우", "처방받은 치료를 해도 호전이 없거나 같은 자리에 반복될 때", "비슷한 뾰루지가 계속 늘거나, 가려움이 유난히 심할 때"], sources: [1, 2, 3, 5] },
  ],
  faq: [],
  references: [
    { title: "DermNet — Folliculitis barbae", url: "https://dermnetnz.org/topics/folliculitis-barbae" },
    { title: "DermNet — Bacterial folliculitis", url: "https://dermnetnz.org/topics/bacterial-folliculitis" },
    { title: "미국피부과학회(AAD) — Acne-like breakouts could be folliculitis", url: "https://www.aad.org/public/diseases/a-z/folliculitis" },
    { title: "미국피부과학회(AAD) — How to shave", url: "https://www.aad.org/public/everyday-care/skin-care-basics/hair/how-to-shave" },
    { title: "DermNet — Folliculitis", url: "https://dermnetnz.org/topics/folliculitis" },
    { title: "미국피부과학회(AAD) — Moisturizer: Why you may need it if you have acne", url: "https://www.aad.org/public/diseases/acne/skin-care/moisturizer" },
    { title: "DermNet — Intralesional steroid injection", url: "https://dermnetnz.org/topics/intralesional-steroid-injection" },
  ],
  related: [{ title: "모낭염 의료정보", href: "/medical/dermatology/folliculitis" }],
};
