import type { DermatologyArticle } from "./dermatologyArticles";

export const atopicCareArticle: DermatologyArticle = {
  slug: "atopic-dermatitis-care",
  draft: false,
  publication: {
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    medicalReviewCompleted: false,
  },
  title: "아토피피부염, 이렇게 관리하세요",
  description: "아토피피부염 환자를 위한 관리 안내문입니다. 처방받은 항히스타민제의 역할, 스테로이드 연고의 적절한 사용, 피부 장벽 회복을 돕는 보습 방법을 안내합니다.",
  answer: "가려움을 줄이고, 피부 염증을 가라앉히고, 보습으로 피부 장벽을 지켜주세요. 긁으면 피부가 더 손상되고 다시 가려워질 수 있어, 가려움 관리와 염증 치료, 꾸준한 보습을 함께 실천하는 것이 중요합니다.",
  sections: [
    {
      id: "itch",
      title: "1. 가려움 관리 — 처방받은 항히스타민제는 안내대로 복용하세요",
      paragraphs: [
        "가려움 때문에 자꾸 긁거나 잠을 설치면 진료 시 알려주세요. 증상과 수면 상태에 따라 의사가 항히스타민제를 처방할 수 있습니다.",
        "다만 항히스타민제가 아토피피부염의 가려움을 충분히 줄여주는 것은 아닙니다. 일부 졸음을 유발하는 약은 가려움으로 잠들기 어려울 때 단기간 수면을 돕는 목적으로 사용합니다. 피부 염증을 치료하는 연고와 보습 관리는 계속 필요합니다.",
        "항히스타민제는 모든 환자에게 필요한 약은 아니며, 사용 여부는 진료를 통해 결정합니다.",
      ],
      bullets: [
        "처방받은 용량과 복용 시간을 지켜주세요.",
        "가렵다고 임의로 복용량을 늘리지 마세요.",
        "낮에도 졸리거나 복용 후 불편한 증상이 생기면 의료진과 상의하세요.",
        "아이에게는 보호자 판단으로 약을 먹이지 말고, 연령에 맞는 처방을 받아주세요.",
      ],
      sources: [1],
    },
    {
      id: "inflammation",
      title: "2. 염증 치료 — 스테로이드 연고를 적절히 사용하세요",
      paragraphs: [
        "스테로이드 연고는 붉어짐과 피부 염증을 가라앉히고, 염증에 따른 가려움을 줄이는 중요한 치료제입니다.",
        "부작용이 걱정되어 필요한 치료를 미루기보다, 피부 상태에 맞는 약을 정해진 방법으로 사용하는 것이 중요합니다. 강한 약을 오래 사용하면 피부가 얇아지는 등의 부작용이 생길 수 있으므로, 처방대로 사용하고 경과를 확인해야 합니다.",
      ],
      bullets: [
        "바를 부위·양·횟수·기간을 확인하고 안내에 따라 사용하세요. 안내받은 양을 염증이 있는 부위에 고르게 발라주세요.",
        "얼굴과 목처럼 피부가 얇은 부위는 약의 강도를 특히 신중하게 선택해야 합니다. 다른 부위에 처방받은 연고를 임의로 옮겨 바르지 마세요.",
        "의사의 지시 없이 연고를 바른 부위를 랩이나 밀폐되는 덮개로 감싸지 마세요.",
        "호전된 뒤 사용을 줄이거나 중단하는 방법도 진료 시 확인하세요.",
      ],
      sources: [2],
    },
    {
      id: "moisturizing",
      title: "3. 피부 장벽 관리 — 보습제는 좋아진 뒤에도 꾸준히 바르세요",
      paragraphs: [
        "보습제는 피부의 수분 손실을 줄이고 피부 장벽의 회복을 돕는 기본 관리입니다. 염증이 가라앉고 겉으로 좋아 보여도 보습은 계속해 주세요.",
        "보습은 매일 이어가는 관리입니다. 다만 염증이 심할 때는 보습만으로 충분하지 않아 처방받은 염증 치료를 함께 해야 합니다.",
      ],
      bullets: [
        "하루 두 번 이상, 건조함이 느껴지면 추가로 발라주세요.",
        "목욕이나 샤워 후 물기를 가볍게 닦고, 피부가 아직 촉촉할 때 바로 발라주세요.",
        "염증 부위뿐 아니라 주변의 건조한 피부에도 충분히 발라주세요.",
        "향료가 없고 피부에 잘 맞는 제품을 선택하세요. 건조함이 심하면 크림이나 연고 형태가 도움이 될 수 있습니다.",
      ],
      sources: [3, 4],
    },
    {
      id: "daily-care",
      title: "피부 자극을 줄이는 생활 습관",
      paragraphs: ["가려움을 참기 어렵다면 혼자 견디기보다 치료를 조정할 수 있도록 의료진에게 알려주세요."],
      bullets: [
        "미지근한 물로 5~10분 정도 짧게 씻고, 때를 밀거나 세게 문지르지 마세요.",
        "피부에 닿는 옷은 부드럽고 여유 있는 것을 선택하세요.",
        "몸이 지나치게 덥거나 땀이 차지 않도록 조절하세요.",
        "손톱은 짧게 유지해 긁을 때 생기는 상처를 줄여주세요.",
      ],
      sources: [3, 4],
    },
    {
      id: "visit",
      title: "이런 경우에는 진료를 받아주세요",
      paragraphs: [
        "치료를 해도 좋아지지 않거나 가려움 때문에 수면과 일상생활이 계속 불편하면 다시 진료를 받아주세요.",
        "진물·고름·딱지가 새로 생기거나, 피부가 아프고 뜨거워지거나, 물집이 생기며 빠르게 번지거나, 열이 동반되면 당일 진료가 필요합니다. 감염 여부를 확인해야 할 수 있습니다.",
        "개인의 나이, 피부 상태, 치료 부위에 따라 약의 종류와 사용 방법이 달라집니다. 진료 시 안내받은 치료 계획을 우선해 주세요.",
      ],
      sources: [2, 4],
    },
  ],
  faq: [],
  references: [
    { title: "미국피부과학회(AAD) — Eczema treatment: Antihistamines", url: "https://www.aad.org/public/diseases/eczema/childhood/treating/antihistamines" },
    { title: "미국피부과학회(AAD) — Eczema treatment: Corticosteroids applied to the skin", url: "https://www.aad.org/public/diseases/eczema/childhood/treating/corticosteroids-applied-to-skin" },
    { title: "미국피부과학회(AAD) — Atopic dermatitis skin care", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping" },
    { title: "영국 NHS — Atopic eczema", url: "https://www.nhs.uk/conditions/atopic-eczema/" },
  ],
  related: [
    { title: "아토피피부염, 좋아졌다가 다시 가려운 이유", href: "/medical/dermatology/atopic-dermatitis" },
    { title: "피부염·습진, 왜 반복되고 어떻게 관리하나요?", href: "/medical/dermatology/dermatitis-eczema" },
  ],
};
