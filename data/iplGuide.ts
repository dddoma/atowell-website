// New medical content: physician review and publication approval pending.
export const canReadIplGuide = () => process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const iplGuide = {
  title: "IPL 치료 전후 안내",
  href: "/medical/skin-treatments/ipl",
  description: "IPL의 원리와 치료 대상, 기대효과와 한계, 시술 전후 관리와 연락이 필요한 증상을 정리했습니다.",
  message: "[IPL 치료 전후 안내]\n\nIPL 치료를 이해하고 시술 전후에 참고할 안내입니다. 치료 대상과 기대효과, 시술 전 알려야 할 사항, 세안·보습·자외선 차단과 진료가 필요한 증상을 확인해 주세요.\n\nhttps://atowell.kr/medical/skin-treatments/ipl\n\n아토웰의원 054-776-0294",
};
