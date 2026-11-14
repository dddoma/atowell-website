/** New presentation wording awaits physician review. Source articles were previously published. */
export const slidesPublished = false;
export const slides = [
  { label: '진료 준비', title: '오늘, 무엇이 가장 궁금하세요?', text: '체중 변화 · 식사 · 불편한 증상\n진료실에서 꼭 묻고 싶은 한 가지를 생각해 보세요.', cue: '최근 체중 기록과 복용약 목록을 준비해 주세요.', icon: 'message', source: '/medical/obesity/diagnosis' },
  { label: '나에게 맞는 목표', title: '목표는 숫자만이 아닙니다', text: '체중과 함께 허리둘레, 혈압·혈당,\n일상에서 느끼는 체력의 변화를 살펴봅니다.', cue: '어떤 건강 문제가 좋아지면 좋을지 이야기해 주세요.', icon: 'target', source: '/medical/obesity/goals' },
  { label: '식사와 영양', title: '적게 먹는 것과 잘 먹는 것', text: '끼니를 극단적으로 줄이기보다\n단백질 식품과 채소 등 필요한 영양을 챙깁니다.', cue: '식사를 제대로 못하거나 기력이 떨어지면 알려주세요.', icon: 'meal', source: '/medical/obesity/goals' },
  { label: '생활 속 움직임', title: '내 몸에 맞게, 조금씩', text: '몸 상태가 허락한다면 짧은 걷기부터.\n가능한 범위에서 근력 활동도 함께 합니다.', cue: '질환이나 통증이 있다면 운동 종류와 강도를 상담하세요.', icon: 'walk', source: '/medical/obesity/goals' },
  { label: '치료 중 불편감', title: '참는 것보다 알려주세요', text: '메스꺼움·변비 등 불편이 계속되거나\n식사와 수분 섭취를 방해하면 의료진과 상담하세요.', cue: '약의 용량이나 투여 간격을 임의로 바꾸지 마세요.', icon: 'care', source: '/medical/obesity/side-effects' },
  { label: '꼭 기억할 안전 신호', title: '이럴 때는 기다리지 마세요', text: '심하고 계속되는 복통, 반복 구토,\n물을 못 마시거나 소변이 크게 줄면 즉시 진료받으세요.', cue: '호흡곤란·입술이나 혀의 부종·의식 저하는 119 또는 응급실.', icon: 'alert', source: '/medical/obesity/side-effects' },
  { label: '감량 이후', title: '유지 계획은 처음부터', text: '하루의 체중보다 여러 주의 흐름을 보세요.\n목표에 도달한 뒤에도 식사·활동과 치료 계획을 점검합니다.', cue: '약을 임의로 끊지 말고, 나에게 맞는 유지 계획을 상담하세요.', icon: 'trend', source: '/medical/obesity/goals' },
  { label: '다음 진료에서', title: '작은 기록이 상담을 돕습니다', text: '체중 변화 · 식사량 · 불편감 · 복용약 변화\n잘한 점과 어려웠던 점을 함께 알려주세요.', cue: '건강관리는 혼자 버티는 일이 아니라 함께 조정하는 과정입니다.', icon: 'check', source: '/medical/obesity/plateau' },
] as const;
