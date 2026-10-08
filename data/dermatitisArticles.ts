import type { DermatologyArticle } from "./dermatologyArticles";

// Published at the owner’s request; physician review remains pending.
export const dermatitisArticles: DermatologyArticle[] = [
  {
    "slug": "contact-dermatitis",
    "draft": false,
    "publication": {
      "publishedAt": "2026-10-02",
      "modifiedAt": "2026-10-02",
      "sourceCheckedAt": "2026-10-02",
      "medicalReviewCompleted": false
    },
    "title": "접촉성피부염, 무엇이 피부를 자극했을까요?",
    "description": "접촉성피부염의 자극성·알레르기성 차이, 원인을 찾는 방법과 첩포검사, 보습·연고 사용 및 진료가 필요한 신호를 안내합니다.",
    "answer": "피부에 닿은 물질 때문에 가렵고 붉어지거나 따갑고 갈라진다면 접촉성피부염을 생각할 수 있습니다. 다만 모양만으로 원인을 확정할 수는 없습니다. 무엇이 닿았는지 살피고, 자극을 줄이는 관리와 필요한 염증 치료를 함께 합니다.",
    "sections": [
      {
        "id": "symptoms",
        "title": "가려움뿐 아니라 따가움·갈라짐도 생깁니다",
        "paragraphs": [
          "손이나 얼굴처럼 물질이 자주 닿는 곳에 붉음, 가려움, 건조, 각질, 갈라짐이 생길 수 있습니다. 염증이 심하면 붓거나 작은 물집·진물이 나타나기도 합니다. 접촉성피부염 자체는 다른 사람에게 옮지 않습니다.",
          "반응은 노출 직후부터 수시간·수일 뒤까지 다양하게 나타납니다. 마지막으로 사용한 제품 하나만 원인이라고 단정하지 말고, 일상과 작업 중 반복해서 닿는 물질도 함께 살펴보세요."
        ],
        "sources": [
          1,
          6
        ]
      },
      {
        "id": "types",
        "title": "자극성과 알레르기성은 어떻게 다른가요?",
        "table": {
          "headers": [
            "구분",
            "자극성 접촉성피부염",
            "알레르기성 접촉성피부염"
          ],
          "rows": [
            [
              "원리",
              "물질이나 반복 노출이 피부 보호막을 직접 손상시킴",
              "특정 성분에 민감해진 면역계가 반응함"
            ],
            [
              "흔한 단서",
              "잦은 물·세제 작업, 소독제, 마찰 등",
              "니켈 같은 금속, 향료·보존제, 염색약 등"
            ],
            [
              "발생 양상",
              "강한 자극 뒤 빠르게 생기거나 약한 자극이 누적되어 생김",
              "원인 성분에 닿은 뒤 수시간~수일 지나 나타나기도 함"
            ]
          ]
        },
        "paragraphs": [
          "두 유형이 함께 있을 수 있고, 증상이나 발생 시간만으로 확실히 구분되지는 않습니다. 아토피피부염이 있으면 자극성 접촉성피부염이 더 쉽게 생길 수 있습니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "assessment",
        "title": "검사보다 먼저 노출 기록을 확인합니다",
        "paragraphs": [
          "진료에서는 시작 시점과 부위, 직업·취미, 화장품·세정제·장갑·금속·붙이는 제품, 사용한 연고를 확인합니다. 발진 사진과 제품명·성분표, 사용 후 악화한 시간을 준비하면 도움이 됩니다.",
          "알레르기성 접촉성피부염이 의심되거나 원인을 알기 어렵고 반복되면 첩포검사를 고려합니다. 여러 성분을 피부에 붙인 뒤 며칠에 걸쳐 지연 반응을 확인하는 검사로, 즉시 반응을 보는 피부단자검사와 목적이 다릅니다. 광범위한 알레르기 검사부터 하기보다 병력에 맞는 검사를 선택하고, 결과를 실제 노출과 함께 해석합니다. 검사 가능한 기관으로 의뢰가 필요할 수 있습니다."
        ],
        "sources": [
          3,
          4
        ]
      },
      {
        "id": "care",
        "title": "의심되는 자극을 줄이고 피부를 보호하세요",
        "bullets": [
          "사용 후 악화한 화장품·세정제 등은 잠시 중단하고, 여러 새 제품을 한꺼번에 추가하지 않습니다.",
          "씻은 뒤 부드럽게 물기를 닦고 향료가 없는 보습제를 바릅니다. 보습제도 따갑거나 발진을 악화시키면 제품을 바꿀지 상담하세요.",
          "물·세제 작업에는 작업에 맞는 보호장갑을 사용합니다. 땀이 차면 벗어 말리고, 장갑을 낀 부위가 악화하면 재질이나 성분도 확인합니다.",
          "세게 문지르거나 긁기, 뜨거운 물, 스크럽을 피합니다. 원인 제품을 염증 부위에 다시 발라 스스로 시험하지 마세요."
        ],
        "sources": [
          2,
          4,
          5
        ]
      },
      {
        "id": "treatment",
        "title": "보습과 염증 치료의 역할은 다릅니다",
        "paragraphs": [
          "보습은 건조와 피부 장벽 회복을 돕지만, 붉음·가려움이 지속되면 스테로이드 등 바르는 항염증 치료가 필요할 수 있습니다. 약의 강도와 사용 기간은 부위·나이·염증 정도에 따라 정합니다.",
          "특히 얼굴·눈꺼풀에는 다른 부위에 쓰던 연고를 임의로 바르지 마세요. 강한 약을 오래 사용하면 피부가 얇아지는 등의 부작용이 생길 수 있습니다. 반대로 처방약을 무조건 피하기보다 사용할 부위·양·기간을 확인하세요. 원인 노출이 계속되거나 치료해도 낫지 않으면 진단과 사용법을 다시 살펴봐야 합니다."
        ],
        "sources": [
          5
        ]
      },
      {
        "id": "visit",
        "title": "빨리 퍼지거나 아프고 열이 나면 진료받으세요",
        "paragraphs": [
          "고름, 심해지는 통증·열감·부종, 빠르게 번지는 발진, 발열·오한은 감염이나 심한 반응의 신호일 수 있어 신속한 진료가 필요합니다. 눈 주변이 심하게 붓거나 눈을 침범한 발진, 넓은 물집·벗겨짐도 바로 확인받으세요.",
          "숨쉬기나 삼키기가 어렵고 입술·혀·목이 갑자기 붓는다면 단순한 피부염으로 생각하고 기다리지 말고 119 또는 응급실의 도움을 받으세요. 증상이 반복되거나 수면·일을 방해할 때도 진료를 미루지 마세요."
        ],
        "sources": [
          6,
          7
        ]
      }
    ],
    "faq": [
      {
        "question": "오랫동안 쓰던 제품도 원인이 될 수 있나요?",
        "answer": "가능합니다. 약한 자극이 반복되어 피부가 손상되거나, 이전에는 문제없던 성분에 알레르기 반응이 생길 수 있습니다. 새 제품뿐 아니라 평소 쓰던 제품도 알려주세요.",
        "sources": [
          2
        ]
      },
      {
        "question": "첩포검사를 하면 원인을 모두 알 수 있나요?",
        "answer": "그렇지는 않습니다. 검사하지 않은 성분이 원인이거나 추가 검사가 필요할 수 있습니다. 첩포검사는 주로 지연성 접촉 알레르기를 확인하므로, 모든 자극성 피부염의 원인을 찾아주는 검사는 아닙니다.",
        "sources": [
          2,
          4
        ]
      },
      {
        "question": "접촉성피부염과 아토피피부염은 같은 병인가요?",
        "answer": "서로 다른 유형의 습진이지만 함께 생길 수 있습니다. 특정 물질과의 접촉뿐 아니라 반복되는 경과와 피부 상태를 함께 보고 판단합니다.",
        "sources": [
          2,
          3
        ],
        "links": [
          {
            "title": "아토피피부염, 좋아졌다가 다시 가려운 이유",
            "href": "/medical/dermatology/atopic-dermatitis"
          }
        ]
      }
    ],
    "references": [
      {
        "title": "미국피부과학회(AAD) — Contact dermatitis overview",
        "url": "https://www.aad.org/public/diseases/eczema/types/contact-dermatitis"
      },
      {
        "title": "영국 NHS — Contact dermatitis: Causes",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/causes/"
      },
      {
        "title": "영국 NHS — Contact dermatitis: Diagnosis",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/diagnosis/"
      },
      {
        "title": "미국피부과학회(AAD) — Patch testing can find what’s causing your rash",
        "url": "https://www.aad.org/public/diseases/eczema/types/contact-dermatitis/patch-testing-rash"
      },
      {
        "title": "영국 NHS — Contact dermatitis: Treatment",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/treatment/"
      },
      {
        "title": "영국 NHS — Contact dermatitis: Symptoms",
        "url": "https://www.nhs.uk/conditions/contact-dermatitis/symptoms/"
      },
      {
        "title": "미국피부과학회(AAD) — Rash 101 in adults: When to seek medical treatment",
        "url": "https://www.aad.org/public/everyday-care/itchy-skin/rash/rash-101"
      }
    ],
    "related": [
      {
        "title": "아토피피부염, 좋아졌다가 다시 가려운 이유",
        "href": "/medical/dermatology/atopic-dermatitis"
      },
      {
        "title": "피부염·습진, 왜 반복되고 어떻게 관리하나요?",
        "href": "/medical/dermatology/dermatitis-eczema"
      },
      {
        "title": "무좀과 습진은 어떻게 다른가요?",
        "href": "/medical/dermatology/athletes-foot-eczema"
      }
    ]
  },
  {
    "slug": "atopic-dermatitis",
    "draft": false,
    "publication": {
      "publishedAt": "2026-10-02",
      "modifiedAt": "2026-10-08",
      "sourceCheckedAt": "2026-10-02",
      "medicalReviewCompleted": false
    },
    "title": "아토피피부염, 좋아졌다가 다시 가려운 이유",
    "description": "아토피피부염의 반복되는 경과, 보습·바르는 치료, 음식과 알레르기 검사에 대한 오해, 감염과 포진상 습진의 경고 신호를 안내합니다.",
    "answer": "아토피피부염은 피부 장벽과 면역 반응 등 여러 요인이 관련된 만성 염증성 피부질환입니다. 좋아졌다가 다시 심해질 수 있고 다른 사람에게 옮지 않습니다. 보습과 필요한 염증 치료를 함께 하며 가려움·수면 방해와 재발을 줄이는 것이 치료 목표입니다.",
    "alert": {
      "title": "아픈 물집이 갑자기 퍼지면 당일 진료가 필요합니다",
      "text": "평소 습진과 다르게 통증을 동반한 비슷한 모양의 작은 물집이나 움푹 팬 상처가 빠르게 늘고, 열이 나거나 몸이 처지면 포진상 습진 같은 바이러스 감염을 의심할 수 있습니다. 열이 없더라도 이런 변화가 있으면 당일 진료받으세요. 눈 주변 물집이나 눈 통증·시력 변화가 있으면 즉시 진료가 필요하며, 진료가 어렵거나 빠르게 악화하면 응급실로 가세요.",
      "sources": [
        6
      ]
    },
    "sections": [
      {
        "id": "symptoms",
        "title": "건조하고 가려운 피부염이 반복됩니다",
        "paragraphs": [
          "가려움, 건조, 붉음, 각질이 흔하고 긁으면 진물·딱지가 생기거나 피부가 두꺼워질 수 있습니다. 영유아에서는 얼굴, 성장하면서 팔꿈치 안쪽·무릎 뒤처럼 접히는 부위에 흔하지만 나이와 사람에 따라 분포가 다릅니다. 성인에게 처음 나타나기도 합니다.",
          "가려워 긁고, 피부가 손상되어 더 가려워지는 악순환이 생길 수 있습니다. 밤잠을 설치거나 학교·직장생활이 힘들다면 피부에 보이는 범위가 작아도 치료를 상담할 이유가 됩니다."
        ],
        "sources": [
          1,
          2
        ]
      },
      {
        "id": "assessment",
        "title": "피부 모습과 경과를 함께 보고 진단합니다",
        "paragraphs": [
          "언제 시작했는지, 어느 부위에 반복되는지, 가려움과 수면 방해 정도, 가족력과 사용한 제품·약을 확인합니다. 진료 때 덜 심해 보여도 괜찮습니다. 심할 때의 사진과 사용 중인 연고 이름을 준비하세요.",
          "건조하고 가렵다고 모두 아토피피부염은 아닙니다. 접촉성피부염이나 다른 피부질환이 비슷하게 보이거나 함께 있을 수 있습니다. 혈액검사 한 가지로 아토피피부염을 확진하지 않으며, 검사는 증상과 진찰에 따라 선택합니다."
        ],
        "sources": [
          1,
          3
        ]
      },
      {
        "id": "care",
        "title": "피부가 좋아진 날에도 보습을 이어가세요",
        "bullets": [
          "미지근한 물로 짧게 씻고 때를 밀거나 세게 문지르지 않습니다. 세정제는 향료가 없고 자극이 적은 제품을 고릅니다.",
          "씻은 뒤 물기를 가볍게 닦고 보습제를 바릅니다. 건조할 때도 덧바르고, 발진이 가라앉은 뒤에도 꾸준히 사용하세요.",
          "향료가 없는 크림이나 연고 형태의 보습제가 도움이 될 수 있습니다. 특정 제품이 계속 따갑거나 악화시키면 다른 제품을 상담합니다.",
          "땀·과열·거친 옷·강한 세제처럼 자신에게 반복해서 악화 요인이 되는 자극을 줄입니다. 손톱은 짧게 유지하고, 가려움을 참으라고만 하기보다 염증을 조절합니다."
        ],
        "sources": [
          2,
          4
        ]
      },
      {
        "id": "treatment",
        "title": "염증을 가라앉힌 뒤 재발 관리도 계획합니다",
        "paragraphs": [
          "보습만으로 조절되지 않으면 바르는 스테로이드나 비스테로이드성 항염증 치료제를 사용합니다. 나이와 얼굴·눈꺼풀·접히는 부위 등 치료 부위에 따라 약을 고릅니다. 스테로이드는 강도·양·사용 기간에 따라 피부 위축 등의 부작용 위험이 달라지므로, 무조건 피하거나 오래 반복하기보다 처방된 사용법을 확인하세요.",
          "자주 재발하는 부위에는 호전 후에도 의료진이 정한 유지 치료를 할 수 있습니다. 충분히 치료해도 잠과 일상이 계속 방해받거나 범위가 넓으면 광선치료, 먹는 약, 주사 치료 등을 검토합니다. 치료별 대상과 위험, 필요한 검사가 달라 개별 평가가 필요합니다."
        ],
        "sources": [
          1,
          3
        ]
      },
      {
        "id": "food-and-tests",
        "title": "음식을 무작정 제한하거나 검사부터 넓히지 마세요",
        "paragraphs": [
          "아토피피부염이 있다고 우유·달걀·밀 등을 모두 끊어야 하는 것은 아닙니다. 특히 성장기에는 불필요한 제한이 영양과 성장에 영향을 줄 수 있습니다. 알레르기 검사 양성만으로 그 음식이 피부염의 원인이라고 단정할 수도 없습니다.",
          "특정 음식을 먹을 때마다 두드러기·구토 등 즉각적인 반응이 생기거나, 적절히 치료해도 조절이 어렵다면 필요한 알레르기 평가를 상담합니다. 반응이 있었던 음식의 재섭취를 집에서 시험하지 마세요. 호흡곤란이나 입술·혀·목의 갑작스러운 부종은 119 또는 응급실의 도움을 받아야 합니다."
        ],
        "sources": [
          2,
          5,
          7
        ]
      },
      {
        "id": "visit",
        "title": "감염 신호와 치료가 부족한 신호를 구분하세요",
        "paragraphs": [
          "노란 딱지나 고름, 점점 심해지는 통증·열감·부종, 갑작스러운 악화, 발열·전신 불편감이 있으면 감염 여부를 신속히 확인해야 합니다. 진물만으로 감염을 확정할 수는 없지만 평소와 다른 변화를 놓치지 마세요.",
          "응급 신호가 없어도 가려워 잠을 못 자거나 치료 효과가 부족하고 자꾸 재발한다면 다시 진료받으세요. 연고를 어떻게 사용했는지, 어떤 점이 걱정되는지 함께 이야기하면 치료를 조정하는 데 도움이 됩니다."
        ],
        "sources": [
          2,
          3,
          6
        ]
      }
    ],
    "faq": [
      {
        "question": "아이에게 생겼는데 크면 반드시 없어지나요?",
        "answer": "성장하면서 좋아지는 경우가 있지만 모두 없어지는 것은 아닙니다. 성인까지 이어지거나 다시 악화할 수 있어, 현재 증상과 재발 양상에 맞춰 관리합니다.",
        "sources": [
          1,
          2
        ]
      },
      {
        "question": "스테로이드를 바르면 계속 의존하게 되나요?",
        "answer": "중단 뒤 다시 가렵다고 바로 약에 의존하게 된 것으로 볼 수는 없습니다. 원래 질환의 재발, 자극, 치료 부족 등을 확인해야 합니다. 다만 강한 약의 장기 사용에는 위험이 있어 임의로 늘리거나 반복하지 말고, 처방 계획과 중단·유지 방법을 상담하세요.",
        "sources": [
          1,
          3
        ]
      },
      {
        "question": "가족에게 옮을까 봐 접촉을 피해야 하나요?",
        "answer": "아토피피부염 자체는 전염되지 않습니다. 다만 헤르페스 등 별도의 피부 감염이 동반되면 전파 주의가 필요하므로, 새로운 아픈 물집이나 감염이 의심되면 진료받으세요.",
        "sources": [
          2,
          6
        ]
      }
    ],
    "references": [
      {
        "title": "질병관리청 국가건강정보포털 — 아토피피부염",
        "url": "https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6582"
      },
      {
        "title": "영국 NHS — Atopic eczema",
        "url": "https://www.nhs.uk/conditions/atopic-eczema/"
      },
      {
        "title": "미국피부과학회(AAD) — Atopic dermatitis diagnosis and treatment",
        "url": "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/treatment"
      },
      {
        "title": "미국피부과학회(AAD) — Atopic dermatitis skin care",
        "url": "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping"
      },
      {
        "title": "미국피부과학회(AAD) — When does a child with eczema need allergy testing?",
        "url": "https://www.aad.org/public/diseases/eczema/childhood/treating/allergy-testing"
      },
      {
        "title": "영국피부과학회(BAD) — Eczema herpeticum",
        "url": "https://www.bad.org.uk/pils/eczema-herpeticum/"
      },
      {
        "title": "미국피부과학회(AAD) — Rash 101 in adults: When to seek medical treatment",
        "url": "https://www.aad.org/public/everyday-care/itchy-skin/rash/rash-101"
      }
    ],
    "related": [
      {
        "title": "접촉성피부염, 무엇이 피부를 자극했을까요?",
        "href": "/medical/dermatology/contact-dermatitis"
      },
      {
        "title": "피부염·습진, 왜 반복되고 어떻게 관리하나요?",
        "href": "/medical/dermatology/dermatitis-eczema"
      },
      {
        "title": "얼굴 지루성피부염, 어떻게 관리하나요?",
        "href": "/medical/dermatology/seborrheic-dermatitis"
      }
    ]
  }
];
