// New medical content remains available only in Preview/development until physician approval.
export const inflammationInjectionPublished = false;
export const canReadInflammationInjection = () => inflammationInjectionPublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const inflammationInjection = {
  title: "염증 주사·병변내 주사",
  href: "/medical/skin-treatments/inflammation-injection",
  aftercareHref: "/medical/skin-treatments/inflammation-injection-aftercare",
  aftercareTitle: "염증 주사 후 집에서의 관리",
};
export const inflammationInjectionMessage = `[아토웰의원 · 염증 주사 후 안내]

주사 부위를 짜거나 세게 문지르지 말고, 처방받은 치료는 안내대로 이어가세요. 붉음·열감·통증·부기가 점점 심해지거나 고름·발열이 생기면 병원에 연락해 주세요. 뒤늦게 피부가 패이거나 색이 변해도 알려주세요.

집에서 다시 읽는 안내문
https://atowell.kr${inflammationInjection.aftercareHref}

아토웰의원 054-776-0294`;
export const inflammationSources = [
  { title: "NICE · Acne vulgaris: management (1.5.30)", url: "https://www.nice.org.uk/guidance/ng198/chapter/Recommendations" },
  { title: "British Association of Dermatologists · Intralesional steroid therapy", url: "https://www.bad.org.uk/pils/intralesional-steroid-therapy" },
  { title: "DermNet · Intralesional steroid injection", url: "https://dermnetnz.org/topics/intralesional-steroid-injection" },
];
