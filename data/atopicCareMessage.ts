import { clinic } from "./clinic";

export const atopicCarePath = "/medical/dermatology/atopic-dermatitis-care";

export const atopicCareMessage = `[아토피피부염 관리 안내]

진료실에서 안내드린 아토피피부염 관리 방법입니다. 아래 자료를 읽고 일상에서 실천해 주세요.

아토피 관리 안내문
https://atowell.kr${atopicCarePath}

꼭 기억해 주세요.
• 항히스타민제를 처방받았다면 안내대로 복용하세요. 가려움 때문에 잠을 설치면 의료진에게 알려주세요.
• 스테로이드 연고는 정해진 부위·양·횟수·기간에 맞게 사용하세요.
• 보습제는 하루 두 번 이상, 씻은 뒤와 건조할 때 바르고 좋아진 뒤에도 꾸준히 사용하세요.

항히스타민제는 보조약이며 피부 염증 치료와 보습을 대신하지 않습니다. 개인별 처방과 진료 시 안내를 우선해 주세요.

${clinic.name}
${clinic.phone}`;
