export const burnsPublished = false;
export const canReadBurns = () => burnsPublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const burnsGuide = {
  title: "화상 치료와 관리",
  href: "/medical/dermatology/burns",
  description: "화상 초기처치, 물집과 드레싱 관리, 진료 후 집에서 지킬 사항과 신속한 진료가 필요한 증상을 안내합니다.",
};
export const burnsMessage = `[아토웰의원 · 화상 진료 후 안내]

드레싱은 깨끗하고 마르게 유지하고, 교체·세척·연고 사용은 진료 때 안내받은 방법을 따라주세요. 물집이나 붙어 있는 피부를 억지로 떼지 마세요. 통증이 심해지거나 붉음이 퍼짐, 고름·발열, 드레싱이 젖거나 진물이 많이 새는 경우 병원에 연락해 주세요. 숨이 차거나 의식이 흐려지면 119에 연락하세요.

집에서 다시 읽는 안내문
https://atowell.kr${burnsGuide.href}#aftercare

아토웰의원 054-776-0294`;
