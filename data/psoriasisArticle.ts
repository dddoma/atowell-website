import type { DermatologyArticle } from "./dermatologyArticles";

export const psoriasisArticle: DermatologyArticle = {
  slug: "psoriasis",
  draft: true,
  draftDates: { createdAt: "2026-11-06", modifiedAt: "2026-11-06", sourceCheckedAt: "2026-11-06" },
  title: "건선은 어떤 질환인가요? 증상·치료·생활관리",
  description: "건선의 특징, 습진과의 차이, 바르는 약과 광선·전신치료, 재발 관리, 건선관절염의 신호를 안내합니다.",
  answer: "건선은 붉고 경계가 뚜렷한 피부 병변에 하얀 각질이 반복되는 만성 염증성 질환입니다. 전염되지 않으며 적절한 치료와 피부 관리로 증상을 조절할 수 있습니다.",
  sections: [
    { id: "features", title: "건선은 어떤 모습으로 나타나나요?", paragraphs: ["팔꿈치, 무릎, 두피, 허리 등에 붉고 경계가 뚜렷한 병변과 은백색 각질이 나타나는 경우가 흔합니다. 가려움은 사람마다 다르고 손발톱이 패이거나 두꺼워질 수도 있습니다.", "건선은 감염병이 아니므로 접촉한다고 다른 사람에게 옮지 않습니다. 면역계의 염증 반응과 유전적 소인, 환경 요인이 함께 작용합니다."], sources: [1,2] },
    { id: "triggers", title: "무엇이 건선을 악화시키나요?", bullets: ["피부를 긁거나 다치게 하는 마찰과 상처", "감염, 스트레스, 흡연, 과음", "일부 약물과 개인별 악화 요인"], paragraphs: ["악화 요인은 사람마다 다릅니다. 복용 중인 약이 의심되더라도 스스로 중단하지 말고 처방한 의사에게 알려주세요."], sources: [1,2] },
    { id: "eczema", title: "건선과 습진은 어떻게 다른가요?", paragraphs: ["건선은 비교적 경계가 뚜렷한 두꺼운 각질성 판이 특징인 반면 습진은 가려움, 붉음, 진물, 갈라짐 등 여러 모습으로 나타납니다. 다만 두 질환은 비슷하게 보일 수 있어 분포와 경과를 함께 확인해야 합니다.", "필요한 경우 곰팡이 감염이나 다른 피부질환과 구별하기 위한 검사를 고려합니다."], sources: [1,2] },
    { id: "treatment", title: "치료는 어떻게 하나요?", paragraphs: ["국소 스테로이드제와 비타민 D 유도체 등의 바르는 약을 우선 고려할 수 있습니다. 얼굴이나 접히는 부위, 두피 등 위치에 따라 제형과 강도를 달리합니다. 강한 스테로이드 연고를 임의로 장기간 사용하지 마세요.", "병변이 넓거나 생활에 큰 영향을 미치면 좁은 파장 자외선 B 광선치료, 먹는 약, 생물학적 제제 등을 고려할 수 있습니다. 치료 선택에는 병변 범위와 동반질환, 감염 위험, 검사 결과 등이 반영됩니다."], sources: [1,3] },
    { id: "care", title: "집에서 지킬 관리 방법", bullets: ["미지근한 물로 짧게 씻고, 샤워 후 보습제를 충분히 바릅니다.", "때를 밀거나 각질을 억지로 뜯지 않습니다.", "금연과 절주, 규칙적인 활동, 적정 체중 관리를 실천합니다.", "일광화상을 피하고, 처방약의 횟수와 기간을 지킵니다."], sources: [1,2] },
    { id: "arthritis", title: "관절이 아프거나 붓는다면 알려주세요", paragraphs: ["건선 환자 일부는 건선관절염을 동반합니다. 손가락·발가락이 붓거나 아침에 관절이 뻣뻣하고, 발뒤꿈치나 허리에 염증성 통증이 생기는 경우 진료 시 알려주세요. 피부 병변이 가벼워도 관절염이 생길 수 있습니다."], sources: [1,2] },
    { id: "visit", title: "이럴 때 다시 진료받으세요", bullets: ["병변이 빠르게 번지거나 처방한 치료에도 호전되지 않을 때", "손발톱 변화나 지속적인 관절 통증·부종이 생길 때", "피부가 광범위하게 붉어지거나 농포, 발열, 심한 전신 증상이 동반될 때는 신속히 진료받으세요."], sources: [1,2] }
  ],
  faq: [
    { question: "건선은 전염되나요?", answer: "아닙니다. 접촉이나 함께 생활하는 것으로 전염되지 않습니다.", sources: [1,2] },
    { question: "건선은 완치할 수 있나요?", answer: "현재 완치를 보장하는 치료법은 없지만, 치료를 통해 증상이 거의 없거나 오랫동안 잘 조절되는 상태를 유지할 수 있습니다.", sources: [1,3] },
    { question: "각질이 없어지면 연고를 중단해도 되나요?", answer: "호전 뒤 사용 횟수를 줄이거나 유지치료가 필요할 수 있습니다. 처방받은 치료계획에 따라 조절하세요.", sources: [1,3] },
    { question: "특정 음식을 피해야 하나요?", answer: "모든 건선 환자가 피해야 하는 특정 음식이 확립되어 있지는 않습니다. 균형 잡힌 식사와 적정 체중 유지가 중요합니다.", sources: [1,2] }
  ],
  references: [
    { title: "American Academy of Dermatology — Psoriasis", url: "https://www.aad.org/public/diseases/psoriasis" },
    { title: "NHS — Psoriasis", url: "https://www.nhs.uk/conditions/psoriasis/" },
    { title: "NICE CG153 — Psoriasis: assessment and management", url: "https://www.nice.org.uk/guidance/cg153" }
  ],
  related: [{ title: "피부질환 진료 안내", href: "/clinic/dermatology" }, { title: "피부질환 의료정보", href: "/medical/dermatology" }]
};