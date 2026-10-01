import type { DermatologyArticle } from "./dermatologyArticles";

const publication = { publishedAt: "2026-10-01", modifiedAt: "2026-10-01", reviewedAt: "2026-10-01", sourceCheckedAt: "2026-10-01" };

// The owner reviewed these articles and approved production publication on 2026-10-01.
export const herpesArticles: DermatologyArticle[] = [
  {
    slug: "shingles", draft: false, publication,
    title: "대상포진, 한쪽 피부의 통증과 물집이 생겼다면",
    description: "대상포진의 증상, 항바이러스 치료 시점, 눈 주변 응급 신호와 전염 예방을 안내합니다.",
    answer: "한쪽 피부가 따갑고 아픈 뒤 물집이 모여 생겼다면 대상포진을 의심할 수 있습니다. 가능한 한 빨리 진료받고, 눈 주변 증상이나 면역저하가 있다면 당일 평가가 필요합니다.",
    alert: { title: "눈 주변 발진이나 시력 변화는 바로 확인하세요", text: "이마·눈꺼풀·코 주변 발진이나 눈의 충혈·통증은 당일 진료가 필요합니다. 시야가 흐려지거나 시력이 달라지면 지체하지 말고 안과 등 즉시 평가가 가능한 의료기관을 찾으세요.", sources: [1, 2] },
    sections: [
      { id: "symptoms", title: "어떤 증상이 나타나나요?", paragraphs: ["대상포진은 몸속에 잠복해 있던 수두·대상포진 바이러스(VZV)가 다시 활성화되어 생깁니다. 통증·화끈거림·저림이 먼저 나타난 뒤, 몸통이나 얼굴의 한쪽에 띠 모양으로 물집이 생기는 경우가 많습니다. 발진이 낫는 데는 보통 2~4주가 걸리지만 개인차가 있습니다.", "물집이 있다고 모두 대상포진은 아닙니다. 단순포진이나 접촉피부염 등도 비슷하게 보일 수 있어 증상이 시작된 시점, 분포와 진찰 소견을 함께 확인합니다. 사진이나 통증만으로 확진할 수는 없습니다."], sources: [1, 3] },
      { id: "urgent-care", title: "이럴 때는 당일 진료가 필요합니다", bullets: ["이마·눈꺼풀·코 주변에 발진이 있거나 눈이 붉고 아픈 경우", "시야가 흐려지거나 시력이 달라진 경우: 지체하지 말고 안과 등 즉시 평가가 가능한 의료기관을 찾으세요.", "귀 주변 물집과 함께 청력 변화나 한쪽 얼굴의 움직임 이상이 있는 경우", "항암치료·면역억제치료 중이거나, 발진이 여러 부위로 넓게 퍼지는 경우", "임신 중이거나 통증이 심해 일상생활이 어려운 경우"], paragraphs: ["의식 저하, 심한 호흡곤란 등 전신의 위급한 증상이 있으면 즉시 119에 연락하거나 응급실로 가세요."], sources: [1, 2] },
      { id: "treatment", title: "치료는 언제 시작하나요?", paragraphs: ["항바이러스제는 발진이 생긴 뒤 가능한 한 빨리, 일반적으로 72시간 이내에 시작할 때 효과를 기대하기 좋습니다. 그러나 72시간이 지났다고 진료를 포기할 필요는 없습니다. 새 물집이 계속 생기거나 통증이 심한 경우, 면역저하 또는 합병증 위험이 있는 경우에는 이후에도 치료 여부를 평가합니다. 약의 종류와 기간은 나이, 신장 기능, 복용약과 증상에 따라 결정합니다.", "피부를 깨끗하게 유지하고 물집을 터뜨리지 마세요. 통증 치료도 함께 필요할 수 있습니다. 피부가 나은 뒤에도 통증이 이어지는 ‘대상포진 후 신경통’이 생길 수 있으며, 잠이나 일상생활에 영향을 주면 다시 상담하세요. 항바이러스제를 복용해도 신경통이 반드시 예방되는 것은 아닙니다."], sources: [1, 2, 3] },
      { id: "transmission", title: "가족에게 옮길 수 있나요?", paragraphs: ["다른 사람에게 ‘대상포진 자체’가 옮는 것은 아닙니다. 다만 물집의 바이러스가 수두 면역이 없는 사람에게 전파되면 수두가 생길 수 있습니다. 모든 물집이 딱지가 될 때까지 병변을 덮고 손을 자주 씻으며, 물집을 만지거나 긁지 마세요. 수두 면역이 없는 임신부, 신생아, 면역저하자와의 접촉은 피해야 합니다."], sources: [4] },
    ],
    faq: [
      { question: "한 번 앓으면 다시 걸리지 않나요?", answer: "재발할 수 있습니다. 반복되는 물집이 모두 대상포진인 것은 아니므로 필요하면 진단을 다시 확인합니다.", sources: [2, 3] },
      { question: "지금 아픈데 백신을 맞으면 치료되나요?", answer: "백신은 예방을 위한 것으로 현재 대상포진을 치료하지 않습니다. 급성기가 지난 뒤 나이, 면역상태와 접종력에 맞춰 접종을 상담하세요. 수두 백신과 대상포진 백신은 목적과 대상이 다릅니다.", sources: [5] },
    ],
    references: [
      { title: "CDC — Shingles Symptoms and Complications", url: "https://www.cdc.gov/shingles/signs-symptoms/index.html" },
      { title: "NHS — Shingles", url: "https://www.nhs.uk/conditions/shingles/" },
      { title: "HSE — Shingles treatment guideline", url: "https://assets.hse.ie/media/documents/Shingles_treatment_guideline.pdf" },
      { title: "CDC — About Shingles", url: "https://www.cdc.gov/shingles/about/" },
      { title: "CDC — Shingles Vaccination", url: "https://www.cdc.gov/shingles/vaccines/" },
    ],
    related: [{ title: "단순포진, 입술이나 피부에 반복되는 물집", href: "/medical/dermatology/herpes-simplex" }, { title: "수두, 전신의 가려운 물집과 발열이 생겼다면", href: "/medical/dermatology/chickenpox" }, { title: "피부질환 진료 안내", href: "/clinic/dermatology" }],
  },
  {
    slug: "herpes-simplex", draft: false, publication,
    title: "단순포진, 입술이나 피부에 반복되는 물집",
    description: "입술·생식기 단순포진의 증상, 재발 치료, 눈 주변 경고 신호와 전파를 줄이는 생활수칙을 안내합니다.",
    answer: "따끔거림 뒤 작은 물집이 모여 생기거나 비슷한 부위에 반복된다면 단순포진을 생각할 수 있습니다. 처음 생긴 증상, 눈 주변 병변, 넓게 퍼지는 물집은 진료로 확인하는 것이 중요합니다.",
    alert: { title: "눈 증상이나 갑자기 퍼지는 물집은 당일 진료", text: "눈 주변 물집, 눈 통증·충혈, 눈부심이나 시야 변화는 당일 안과 평가가 필요합니다. 아토피피부염 부위에 아픈 물집이나 패인 상처가 갑자기 퍼지면 포진상 습진일 수 있으므로 당일 진료받으세요.", sources: [4, 5] },
    sections: [
      { id: "symptoms", title: "입술포진과 생식기포진은 어떻게 다른가요?", paragraphs: ["단순포진은 단순포진 바이러스(HSV)에 의한 감염입니다. 입술 주변에서는 따끔거림·화끈거림 뒤 작은 물집이 생기고, 터진 뒤 딱지가 될 수 있습니다. 입안과 잇몸까지 아파 먹기 어려운 경우도 있습니다.", "생식기 주변에는 물집이나 헐어 있는 상처, 통증이 나타날 수 있습니다. HSV-1과 HSV-2 모두 생식기 감염을 일으킬 수 있어 위치만으로 바이러스 종류를 구분할 수 없습니다. 물집이 작거나 증상이 뚜렷하지 않은 경우도 있습니다.", "입술이나 입안의 모든 상처가 단순포진은 아닙니다. 구내염·농가진 등과 구별해야 하며, 생식기 병변도 다른 원인에 대한 평가가 필요합니다. 진찰 후 필요하면 병변에서 검체를 채취합니다. 검사만으로 감염된 시점이나 상대방을 알아낼 수는 없습니다."], sources: [1, 2, 3] },
      { id: "urgent-care", title: "빨리 확인해야 하는 신호", bullets: ["눈 주변 물집, 눈 통증·충혈, 빛이 유난히 눈부심, 시야 변화: 당일 안과 평가가 필요합니다.", "아토피피부염이 있는 피부에 통증을 동반한 비슷한 모양의 물집이나 패인 상처가 갑자기 퍼짐: 포진상 습진 가능성이 있어 당일 진료가 필요합니다.", "면역저하 상태에서 병변이 넓어지거나 전신 상태가 나빠짐", "입안 통증 때문에 물을 마시지 못하거나 소변이 현저히 줄어듦", "임신 중 생식기 물집·통증이 처음 생겼거나 재발함: 산부인과에 신속히 알리세요."], paragraphs: ["신생아에게 물집이 생기거나 열·처짐·수유 감소가 나타나면 즉시 진료받아야 합니다."], sources: [1, 2, 4, 5, 7] },
      { id: "treatment", title: "치료와 재발 관리", paragraphs: ["항바이러스 치료는 증상의 기간과 불편을 줄이는 데 도움을 줍니다. 재발 때는 따끔거림 같은 초기 신호를 느꼈을 때 치료를 시작할 수 있도록 미리 계획을 상담하면 좋습니다. 처음 생긴 생식기포진은 증상이 가벼워 보여도 진료와 항바이러스 치료가 필요합니다.", "치료 후에도 바이러스는 몸에 남아 다시 증상을 일으킬 수 있습니다. 반복되는 횟수와 통증, 일상생활의 영향을 고려해 재발 시 치료 또는 억제치료를 상담합니다. 입술용 연고를 눈이나 생식기에 임의로 사용하지 마세요. 입술포진이 10일 정도 지나도 낫기 시작하지 않거나 크고 아프면 진료받으세요."], sources: [1, 2] },
      { id: "transmission", title: "전파를 줄이는 생활수칙", paragraphs: ["입술포진은 전조증상부터 완전히 나을 때까지 키스와 구강성교를 피하고, 특히 신생아에게 입맞춤하지 마세요. 병변을 만진 뒤에는 손을 씻고 눈을 만지지 마세요.", "생식기포진은 따끔거림 같은 전조증상부터 물집과 상처가 완전히 아물 때까지 성접촉을 피해야 합니다. 증상이 없을 때도 전파될 수 있으며, 콘돔은 위험을 줄이지만 완전히 없애지는 못합니다. 필요하면 파트너와 함께 전파 위험을 낮추는 방법을 상담하세요."], sources: [1, 2, 3] },
    ],
    faq: [
      { question: "재발했다면 최근에 다시 감염된 건가요?", answer: "반드시 그렇지는 않습니다. 잠복해 있던 바이러스가 다시 활성화될 수 있으며, 증상이 처음 보인 시점이 감염 시점과 일치하지 않을 수 있습니다.", sources: [2, 3] },
      { question: "대상포진 백신으로 입술포진도 예방되나요?", answer: "아니요. 단순포진의 HSV와 수두·대상포진의 VZV는 서로 다른 바이러스입니다. 현재 허가된 HSV 예방백신은 없으며, 수두·대상포진 백신으로 단순포진을 예방하지 않습니다.", sources: [6] },
    ],
    references: [
      { title: "NHS — Cold sores", url: "https://www.nhs.uk/conditions/cold-sores/" },
      { title: "CDC — Genital Herpes STI Treatment Guidelines", url: "https://www.cdc.gov/std/treatment-guidelines/herpes.htm" },
      { title: "NHS — Genital herpes", url: "https://www.nhs.uk/conditions/genital-herpes/" },
      { title: "NHS — Herpes simplex eye infections", url: "https://www.nhs.uk/conditions/herpes-simplex-eye-infections/" },
      { title: "NHS Highland — Eczema (Antimicrobial)", url: "https://www.rightdecisions.scot.nhs.uk/tam-treatments-and-medicines-nhs-highland/adult-therapeutic-guidelines/antimicrobial-guidance/skin-soft-tissue-antimicrobial/eczema-antimicrobial/" },
      { title: "WHO — Herpes Simplex Virus vaccine development", url: "https://www.who.int/teams/immunization-vaccines-and-biologicals/diseases/herpes-simplex-virus" },
      { title: "NHS — Neonatal herpes", url: "https://www.nhs.uk/conditions/neonatal-herpes/" },
    ],
    related: [{ title: "대상포진, 한쪽 피부의 통증과 물집이 생겼다면", href: "/medical/dermatology/shingles" }, { title: "수두, 전신의 가려운 물집과 발열이 생겼다면", href: "/medical/dermatology/chickenpox" }, { title: "피부질환 진료 안내", href: "/clinic/dermatology" }],
  },
  {
    slug: "chickenpox", draft: false, publication,
    title: "수두, 전신의 가려운 물집과 발열이 생겼다면",
    description: "수두의 증상과 치료, 전염 기간, 고위험군의 진료 시점과 예방접종 상담을 안내합니다.",
    answer: "수두는 가려운 물집이 몸 여러 곳에 나타나는 전염성 질환입니다. 성인·임신부·면역저하자에서는 더 심해질 수 있으므로 증상이 의심되면 신속히 상담하고, 방문 전 의료기관에 수두 가능성을 알려주세요.",
    alert: { title: "방문 전에 수두 가능성을 알려주세요", text: "성인·임신부·면역저하자 또는 영아에게 수두가 의심되면 당일 의료기관에 연락하세요. 숨이 차거나 의식이 흐려짐, 경련 등 위급한 증상은 즉시 119에 연락하거나 응급진료를 받으세요.", sources: [2, 4, 5] },
    sections: [
      { id: "symptoms", title: "수두는 어떤 모습인가요?", paragraphs: ["수두는 수두·대상포진 바이러스(VZV)에 처음 감염되어 생기는 질환입니다. 열·피로감 뒤 가려운 붉은 반점과 물집이 몸통·얼굴을 비롯한 여러 부위에 나타날 수 있습니다. 새 발진, 물집, 딱지가 동시에 보이는 것이 특징 중 하나입니다. 접종 후 걸리는 수두는 물집이나 열이 적어 알아보기 어려울 수 있습니다.", "모든 전신 발진이 수두는 아닙니다. 접촉력과 접종력, 발진 모양을 함께 확인해야 하므로 사진만으로 단정하지 마세요."], sources: [1, 2, 3] },
      { id: "urgent-care", title: "오늘 상담하거나 즉시 진료받아야 하는 경우", paragraphs: ["성인, 임신부, 면역저하자 또는 영아에게 수두가 의심되면 당일 의료기관에 연락하세요. 특히 성인은 폐렴 등 합병증 위험에 주의해야 합니다.", "임신부나 면역저하자가 수두 또는 대상포진 환자와 접촉했다면 증상이 없어도 바로 상담하세요. 면역 여부와 노출 시점에 따라 예방조치가 필요할 수 있습니다."], bullets: ["숨이 차거나 기침이 심함, 의식이 흐려짐, 경련, 심한 두통과 목 경직: 즉시 응급진료를 받으세요.", "물을 잘 마시지 못함, 소변 감소, 고열이 이어지거나 전신 상태가 나빠짐: 신속히 진료받으세요.", "병변 주변이 점점 붉고 뜨겁고 아프거나 고름이 남: 세균 감염 여부를 확인해야 합니다."], sources: [2, 4, 5] },
      { id: "treatment", title: "치료는 어떻게 하나요?", paragraphs: ["건강한 소아의 가벼운 수두는 가려움과 발열을 조절하며 경과를 보는 경우가 많습니다. 성인이나 중증 위험이 있는 사람은 항바이러스 치료를 고려하며, 발진 초기에 상담하는 것이 중요합니다. 치료 효과는 대개 발진 시작 후 첫 24시간 안에 시작할 때 가장 좋지만, 시간이 지났더라도 고위험군이거나 증상이 심하면 반드시 평가가 필요합니다.", "수분을 충분히 섭취하고 손톱을 짧게 유지하며 물집을 긁거나 터뜨리지 마세요. 소아·청소년의 수두에 아스피린을 사용하지 마세요. 이부프로펜도 의료진의 지시 없이 사용하지 말고, 해열제 선택은 의사·약사에게 확인하세요."], sources: [4, 5, 6] },
      { id: "transmission", title: "언제까지 다른 사람과 접촉을 피해야 하나요?", paragraphs: ["수두는 공기 중 바이러스나 물집과의 접촉을 통해 쉽게 퍼질 수 있습니다. 발진이 나타나기 1~2일 전부터 모든 병변이 딱지가 될 때까지 전염력이 있습니다. 접종 후 발생한 수두에서 딱지가 생기지 않는 병변만 있다면, 새 병변이 24시간 동안 나타나지 않을 때까지 주의가 필요합니다.", "전염력이 있는 동안 등교·등원·출근과 다른 사람과의 밀접 접촉을 피하고, 특히 임신부·신생아·면역저하자를 만나지 마세요. 진료가 필요하면 먼저 전화로 알리고 안내에 따라 방문하세요. 복귀 시점은 의료진과 소속 기관의 안내를 함께 확인합니다."], sources: [1, 5, 6] },
    ],
    faq: [
      { question: "수두 백신을 맞았는데도 걸리나요?", answer: "가능하지만 대체로 증상이 가볍습니다. 가볍더라도 다른 사람에게 전파할 수 있습니다.", sources: [1, 3] },
      { question: "대상포진과 같은 병인가요?", answer: "같은 바이러스가 원인이지만, 수두를 앓은 뒤 몸에 남아 있던 바이러스가 다시 활성화되면 대상포진이 됩니다. 수두 백신과 대상포진 백신은 서로 대신 맞는 백신이 아닙니다.", sources: [1] },
      { question: "노출된 뒤 백신을 맞으면 되나요?", answer: "접종력·면역상태·노출 시점에 따라 달라집니다. 임신 중에는 수두 백신을 접종하지 않습니다. 면역저하가 있다면 접종 가능 여부를 의료진이 판단해야 합니다. 노출 후 조치가 필요할 수 있으므로 바로 상담하세요. 국내 접종 일정과 대상은 현재의 권고에 맞춰 확인합니다.", sources: [3, 5] },
    ],
    references: [
      { title: "CDC — About Chickenpox", url: "https://www.cdc.gov/chickenpox/about/index.html" },
      { title: "CDC — Chickenpox Symptoms and Complications", url: "https://www.cdc.gov/chickenpox/signs-symptoms/index.html" },
      { title: "CDC — Chickenpox Vaccination", url: "https://www.cdc.gov/chickenpox/vaccines/index.html" },
      { title: "CDC — How to Treat Chickenpox", url: "https://www.cdc.gov/chickenpox/treatment/index.html" },
      { title: "CDC — Clinical Guidance for People at Risk for Severe Varicella", url: "https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html" },
      { title: "NHS — Chickenpox", url: "https://www.nhs.uk/conditions/chickenpox/" },
    ],
    related: [{ title: "대상포진, 한쪽 피부의 통증과 물집이 생겼다면", href: "/medical/dermatology/shingles" }, { title: "단순포진, 입술이나 피부에 반복되는 물집", href: "/medical/dermatology/herpes-simplex" }, { title: "피부질환 진료 안내", href: "/clinic/dermatology" }],
  },
];
