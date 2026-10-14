import type { DermatologyArticle } from "./dermatologyArticles";

export const postherpeticNeuralgiaArticle: DermatologyArticle = {
  slug: "postherpetic-neuralgia-care", draft: false,
  publication: { publishedAt: "2026-10-14", modifiedAt: "2026-10-14", sourceCheckedAt: "2026-10-14", reviewedAt: "2026-10-14", medicalReviewCompleted: true, reviewerName: "권병현" },
  title: "대상포진이 나았는데도 계속 아파요",
  description: "대상포진 후 신경통 진료 후 관리 안내. 통증약 복용, 졸림·낙상 주의, 피부 보호와 수면·일상 회복, 재진이 필요한 증상을 안내합니다.",
  answer: "대상포진의 물집과 상처가 나아도 화끈거리거나 찌릿하고, 옷이 스치기만 해도 아플 수 있습니다. 대상포진으로 손상된 신경이 예민해져 통증 신호를 계속 보내기 때문입니다. 피부가 낫는 속도와 신경이 회복되는 속도는 다릅니다. 겉으로 상처가 없어도 통증은 실제로 남을 수 있습니다.",
  sections: [
    { id: "understanding", title: "1. 통증이 남았다고 대상포진이 계속 번지는 것은 아닙니다", paragraphs: ["남아 있는 신경통만으로 바이러스가 계속 활동하거나 다른 사람에게 전염되는 것은 아닙니다. 다만 새 물집이 생기면 다시 진료받아야 합니다.", "통증은 서서히 줄어들 수 있지만, 수개월 이상 이어지기도 하며 회복 속도는 사람마다 다릅니다. 아픈 것을 무조건 참기보다, 통증을 줄여 잠을 자고 일상생활을 유지하는 것이 중요합니다."], sources: [1, 2] },
    { id: "medicine", title: "2. 신경통 약은 처방받은 시간에 꾸준히 드세요", paragraphs: ["대상포진 후 신경통은 일반 진통제만으로 충분히 조절되지 않을 수 있습니다. 필요하면 예민해진 신경의 통증 신호를 줄이는 약을 사용합니다.", "가바펜틴·프레가발린이나 일부 항우울제가 신경통 치료에 사용될 수 있습니다. 약 설명서에 ‘뇌전증’이나 ‘우울증’이라고 적혀 있어도, 해당 질환이 있어서 처방했다는 뜻은 아닙니다."], bullets: ["매일 복용하도록 처방받은 약은 아플 때만 드시지 말고 정해진 시간에 복용하세요. 필요할 때만 먹는 진통제는 별도 지시에 따르세요.", "약에 따라 적은 용량으로 시작해 효과와 부작용을 보면서 서서히 조절합니다.", "한두 번 먹고 통증이 남는다고 임의로 더 드시지 마세요. 효과를 평가하는 데 시간이 필요할 수 있습니다.", "좋아졌다고 갑자기 끊지 마세요. 일부 신경통 약은 의료진과 상의해 서서히 줄여야 합니다."], sources: [1, 3, 4] },
    { id: "fall-prevention", title: "3. 졸림·어지럼과 넘어짐에 주의하세요", paragraphs: ["신경통 약을 처음 복용하거나 용량을 늘린 뒤에는 졸리거나 어지럽고 몸이 휘청거릴 수 있습니다.", "심하게 졸려 깨우기 어렵거나 숨이 느려지는 경우에는 즉시 119 또는 응급진료를 이용하세요. 일상생활이 힘들 정도의 어지럼이나 멍한 느낌도 참지 말고 병원에 알려 주세요."], bullets: ["앉거나 누워 있다가 천천히 일어나세요.", "밤에 화장실에 갈 때는 불을 켜고, 필요하면 벽이나 손잡이를 잡으세요.", "졸리거나 어지러운 동안에는 운전·기계 작업을 하지 마세요.", "술은 피하고, 수면제·감기약·다른 진통제를 추가하기 전에는 확인하세요.", "신장질환이 있거나 여러 약을 복용 중이면 알려 주세요. 약의 종류와 용량을 조절해야 할 수 있습니다."], sources: [4, 5, 6] },
    { id: "skin-care", title: "4. 아픈 피부는 자극을 줄여 보호하세요", paragraphs: ["리도카인 패치 등 붙이는 약을 처방받았다면 사용 시간과 장수를 지키세요. 물집·진물·벗겨진 상처에는 붙이지 말고, 일반 파스나 자극적인 연고를 임의로 추가하지 마세요."], bullets: ["부드럽고 헐렁한 옷을 입고, 거친 옷감이나 꽉 끼는 속옷은 피하세요.", "아픈 곳을 세게 문지르거나 마사지하고, 때를 미는 행동은 피하세요.", "뜨거운 찜질팩·전기장판을 아픈 부위에 오래 대지 마세요. 감각이 둔한 곳은 화상을 알아차리기 어려울 수 있습니다.", "차가운 찜질이 편하다면 시원한 수건을 잠깐 대 보세요. 얼음을 피부에 직접 대거나, 감각이 둔한 부위에 오래 찜질하지 마세요.", "상처가 완전히 아문 피부가 건조하면 순한 보습제를 바르세요. 보습제는 건조함을 줄이지만 신경통 자체를 치료하지는 않습니다."], sources: [1] },
    { id: "daily-life", title: "5. 수면과 활동을 조금씩 회복하세요", paragraphs: ["통증 때문에 하루 종일 누워 있기보다, 무리하지 않는 범위에서 가벼운 걷기와 일상 활동을 이어가세요. 활동 후 통증이 많이 늘면 양을 줄이고 중간에 쉬세요.", "진료 때는 다음 세 가지를 알려 주시면 치료 조절에 도움이 됩니다.", "약을 복용해도 잠을 못 자거나 일상생활이 어렵다면 치료를 조정해야 합니다. 필요에 따라 통증 전문 진료나 추가 치료를 고려할 수 있습니다."], bullets: ["통증: 0점은 통증 없음, 10점은 견디기 어려운 통증일 때 몇 점인가요?", "수면: 통증 때문에 잠들기 어렵거나 밤에 몇 번 깨나요?", "약의 불편함: 졸림·어지럼·부종 등 새로 생긴 증상이 있나요?"], sources: [1, 5] },
    { id: "visit", title: "이럴 때는 다시 진료받으세요", paragraphs: ["눈 통증·시력 변화, 새로 생긴 얼굴 마비나 팔다리 힘 빠짐은 단순한 신경통으로 생각하지 말고 즉시 진료받으세요."], bullets: ["통증이 조절되지 않아 잠·식사·일상생활에 지장이 있을 때", "통증이 갑자기 심해지거나 이전과 다른 양상으로 바뀔 때", "새 물집, 발열, 피부의 붉음·열감·고름이 생길 때", "약 때문에 심하게 어지럽거나 넘어졌을 때"], sources: [1, 2, 5] },
  ],
  faq: [
    { question: "항바이러스제를 다시 먹으면 통증이 없어지나요?", answer: "상처가 아문 뒤 남은 신경통은 항바이러스제를 더 먹는다고 해결되는 것이 아닙니다. 남은 약을 임의로 다시 복용하지 말고 통증 치료를 상담하세요.", sources: [1, 2] },
    { question: "대상포진 예방접종을 하면 지금의 신경통도 낫나요?", answer: "예방접종은 앞으로의 대상포진과 합병증 위험을 줄이기 위한 것으로, 이미 생긴 신경통을 치료하지는 않습니다. 접종 여부와 시기는 진료에서 상담하세요.", sources: [7] },
  ],
  references: [
    { title: "영국 NHS — Post-herpetic neuralgia", url: "https://www.nhs.uk/conditions/post-herpetic-neuralgia/" },
    { title: "미국피부과학회(AAD) — Shingles: Diagnosis and treatment", url: "https://www.aad.org/public/diseases/a-z/shingles-treatment" },
    { title: "영국 NHS — How and when to take pregabalin", url: "https://www.nhs.uk/medicines/pregabalin/how-and-when-to-take-pregabalin/" },
    { title: "영국 NHS — Common questions about gabapentin", url: "https://www.nhs.uk/medicines/gabapentin/common-questions-about-gabapentin/" },
    { title: "영국 NHS — Side effects of pregabalin", url: "https://www.nhs.uk/medicines/pregabalin/side-effects-of-pregabalin/" },
    { title: "영국 NHS — Who can and cannot take pregabalin", url: "https://www.nhs.uk/medicines/pregabalin/who-can-and-cannot-take-pregabalin/" },
    { title: "미국 CDC — Clinical considerations for Shingrix", url: "https://www.cdc.gov/shingles/hcp/vaccine-considerations/immunocompromised-adults.html" },
  ],
  related: [{ title: "대상포진 의료정보", href: "/medical/dermatology/shingles" }, { title: "대상포진 진료 후 안내문", href: "/medical/dermatology/shingles-aftercare" }],
};
