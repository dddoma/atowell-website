import type { DermatologyArticle } from "./dermatologyArticles";

export const pityriasisRoseaArticle: DermatologyArticle = {
  slug: "pityriasis-rosea",
  publication: { publishedAt: "2026-11-11", modifiedAt: "2026-11-11", reviewedAt: "2026-11-11", sourceCheckedAt: "2026-11-11", medicalReviewCompleted: true, reviewerName: "권병현" },
  title: "장미색 비강진, 집에서는 어떻게 관리하나요?",
  description: "장미색 비강진의 자연 경과, 전염 여부, 가려움 관리, 임신 중 주의사항과 재진이 필요한 상황을 안내합니다.",
  answer: "장미색 비강진은 몸통과 팔다리에 타원형 발진과 잔각질이 생기는 피부질환입니다. 대개 특별한 치료 없이 6~8주 안에 호전되지만 더 오래 지속되기도 합니다. 다른 사람에게 전염되지 않으며, 가려움이 있다면 피부 자극을 줄이고 처방받은 약으로 증상을 조절합니다.",
  alert: { title: "임신 중 새 발진이 생겼다면", text: "임신 중이거나 임신 가능성이 있다면 진단받은 사실을 산부인과에 알리고 신속히 상담하세요. 특히 임신 초기(15주 이내)의 장미색 비강진은 일부 연구에서 임신 합병증과 연관되어 보고되었지만 연구 결과가 일치하지는 않습니다. 발진의 정확한 진단과 산과적 평가가 중요합니다.", sources: [2, 4] },
  sections: [
    { id: "appearance", title: "처음에는 큰 반점 하나, 이후 작은 발진이 여러 개 생길 수 있습니다", paragraphs: ["처음에 몸통 등에 비교적 큰 타원형 반점(원발반, herald patch)이 생기고, 며칠에서 수주 후 가슴·배·등과 팔다리 가까운 부위에 작은 반점이 여러 개 나타날 수 있습니다. 가장자리에 얇은 각질이 보이고 등에서는 피부 결을 따라 배열되기도 합니다.", "처음에는 감기 같은 증상이 앞서기도 하고, 가려움은 없거나 심할 수 있습니다. 초기에는 새 발진이 더 생겨 악화된 것처럼 보일 수 있습니다."], sources: [1, 2] },
    { id: "course", title: "대부분 저절로 좋아지며 흉터를 남기지 않습니다", paragraphs: ["보통 6~8주 정도 지나면서 서서히 사라지지만 2~3개월 이상 걸리는 경우도 있습니다. 발진이 가라앉은 자리에 일시적으로 갈색 또는 옅은 색 변화가 남을 수 있으며, 이는 대개 시간이 지나면서 옅어집니다.", "일반적인 장미색 비강진은 사람 사이에 전염되지 않습니다. 가족과 함께 생활하거나 학교·직장에 가는 것을 피할 필요는 없습니다."], sources: [1, 2, 3] },
    { id: "care", title: "집에서는 피부 자극과 열을 줄이세요", bullets: ["뜨거운 물로 오래 씻거나 때를 밀고 스크럽하는 행동을 피하세요. 미지근한 물로 짧게 샤워합니다.", "향이 강한 비누·바디워시 대신 순한 세정제를 적게 사용하고 샤워 직후 무향 보습제를 바르세요.", "땀이 많이 나는 운동, 사우나, 꽉 끼는 옷처럼 열과 마찰을 늘리는 상황은 가려움이 심할 때 줄이세요.", "가려울 때는 시원한 젖은 수건을 잠시 대어 진정시키고 긁지 않도록 합니다.", "햇볕에 태워 치료하려 하지 마세요. 외출할 때는 자외선으로부터 피부를 보호합니다."], sources: [3, 5] },
    { id: "medication", title: "처방약은 발진을 즉시 없애기보다 불편함을 줄이는 데 사용합니다", paragraphs: ["가려움이 심하면 의사의 판단에 따라 항히스타민제나 스테로이드 외용제를 사용할 수 있습니다. 처방받은 연고는 안내받은 부위와 기간에 맞춰 사용하고 임의로 강한 연고를 장기간 바르지 마세요.", "일반적으로 항진균제(무좀약)는 장미색 비강진의 치료제가 아닙니다. 다만 체부백선 등 곰팡이 감염과 혼동될 수 있으므로 진단이 불확실하면 다시 확인해야 합니다.", "아주 심하거나 오래가는 경우 전문의가 광선치료 또는 항바이러스제 등을 검토할 수 있으나 모든 환자에게 필요한 표준 치료는 아닙니다."], sources: [3, 5] },
    { id: "visit", title: "이럴 때는 다시 진료받으세요", bullets: ["3개월이 지나도 발진이 사라지지 않거나 점점 심해집니다.", "가려움이 심해 잠을 못 자거나 처방약을 사용해도 일상생활이 어렵습니다.", "심한 통증, 물집, 고름, 발열, 점막 병변 등 평소와 다른 증상이 나타납니다.", "새 약을 복용한 뒤 발진이 시작되었거나 손바닥·발바닥까지 발진이 생겨 다른 질환과 구별이 필요합니다.", "임신 중이거나 임신 가능성이 있습니다. 특히 초기 임신이라면 기다리지 말고 산부인과와 상담하세요."], sources: [2, 3, 4] }
  ],
  faq: [
    { question: "가족에게 옮기나요?", answer: "아닙니다. 일반적인 장미색 비강진은 접촉으로 전염되지 않아 격리할 필요가 없습니다.", sources: [1, 2] },
    { question: "발진이 계속 새로 생기는데 치료가 잘못된 건가요?", answer: "초기에 작은 발진이 뒤이어 나타나는 것은 전형적인 경과일 수 있습니다. 다만 빠르게 악화하거나 다른 증상이 생기면 재진하세요.", sources: [1, 2] },
    { question: "건선이나 무좀과 같은 병인가요?", answer: "아닙니다. 건선, 체부백선, 습진, 약물발진 등은 비슷하게 보일 수 있지만 원인과 치료가 다릅니다. 특히 한 개의 둥근 발진만 있을 때는 진찰로 구별하는 것이 중요합니다.", sources: [1, 2] },
    { question: "색소 자국이 남으면 어떻게 하나요?", answer: "염증이 가라앉은 뒤 일시적인 색 변화가 수개월 남을 수 있습니다. 피부를 자극하지 말고 자외선으로부터 보호하세요. 오래 지속되거나 불편하면 상담하세요.", sources: [1, 3] }
  ],
  references: [
    { title: "American Academy of Dermatology — Pityriasis rosea: FAQs", url: "https://www.aad.org/public/diseases/a-z/pityriasis-rosea-overview" },
    { title: "NHS — Pityriasis rosea", url: "https://www.nhs.uk/conditions/Pityriasis-rosea/" },
    { title: "American Academy of Dermatology — How to treat pityriasis rosea at home", url: "https://www.aad.org/public/diseases/a-z/pityriasis-rosea-self-care" },
    { title: "European Academy of Dermatology and Venereology — Pityriasis rosea in pregnancy", url: "https://eadv.org/wp-content/uploads/2023/09/EADV_PregnancyTF_Pityriasis-rosea_2.pdf" },
    { title: "DermNet — Pityriasis rosea", url: "https://dermnetnz.org/topics/pityriasis-rosea" }
  ],
  related: [{ title: "건선 의료정보", href: "/medical/dermatology/psoriasis" }, { title: "무좀과 습진의 차이", href: "/medical/dermatology/athletes-foot-eczema" }]
};