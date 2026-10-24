// Change only after explicit physician review and publication approval.
export const mounjaroInjectionPublished = true;
export const canReadMounjaroInjection = () => mounjaroInjectionPublished || process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const mounjaroInjectionGuide = {
  title: "마운자로 주사 놓는 방법",
  href: "/medical/obesity/mounjaro-injection",
  message: "[마운자로 주사 방법 안내]\n\n국내 일회용 프리필드펜의 주사 순서와 한국릴리 공식 동영상입니다. 주사 전 준비, 주사 완료 확인과 보관 방법을 확인해 주세요.\n\nhttps://atowell.kr/medical/obesity/mounjaro-injection\n\n아토웰의원 054-776-0294\n",
};
export const injectionSources = {
  video: "https://www.lilly.com/kr/our-medicines/guide-video/mounjaro",
  faq: "https://www.lilly.com/kr/our-medicines/mounjaro-faq",
  product: "https://www.lilly.com/kr/our-medicines/mounjaro",
  ifu: "https://pi.lilly.com/us/mounjaro-us-ifu.pdf",
};
