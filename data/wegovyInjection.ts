// Physician review and publication approval pending.
export const wegovyInjectionPublished = true;
export const canReadWegovyInjection = () => wegovyInjectionPublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const wegovyInjectionGuide = {
  title: "위고비 주사 놓는 방법",
  href: "/medical/obesity/wegovy-injection",
  message: "[위고비 주사 방법 안내]\n\n국내 다회용 위고비 펜의 주사 순서와 노보 노디스크 공식 동영상입니다. 새 바늘 장착, 흐름 확인, 주사 완료와 보관 방법을 확인해 주세요.\n\nhttps://atowell.kr/medical/obesity/wegovy-injection\n\n아토웰의원 054-776-0294\n",
};
export const wegovyInjectionSources = {
  video: "https://www.novonordisk.co.kr/patient/how-to-use-injectables-for-obesity-products.html",
  safety: "https://www.novonordisk.co.kr/patient/obesity-treatment-products.html",
  product: "https://www.novonordisk.co.kr/patient/list-of-products.html",
  label: "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=202301388aupdateTs2025-03-04+14%3A49%3A09.26307b",
  ifu: "https://www.medicines.org.uk/emc/product/13799/pil",
};
