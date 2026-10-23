export function koreaDate(now = new Date()) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}
export function addWeeks(date: string, weeks = 4) {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + weeks * 7);
  return d.toISOString().slice(0, 10);
}
export function weightRange(height: string, bmi: number, margin: number) {
  const cm = Number(height);
  if (!height.trim() || !Number.isFinite(cm) || cm < 100 || cm > 230) return null;
  const target = Math.round(bmi * (cm / 100) ** 2 * 10) / 10;
  return { target, low: Math.round((target - margin) * 10) / 10, high: Math.round((target + margin) * 10) / 10 };
}
export function contactText(range: ReturnType<typeof weightRange>) {
  const bounds = range ? `${range.low.toFixed(1)}~${range.high.toFixed(1)}kg` : "정한 유지체중 범위";
  return `체중을 주 1~2회 비슷한 조건에서 재세요. ${bounds}를 반복해서 벗어나거나 2~4주 동안 계속 증가하면 진료를 앞당겨 상담하세요. 체중이 계속 줄거나 식사 부족, 기운 저하, 반복되는 어지러움, 지속되는 구토·설사·변비도 상담하세요. 심한 복통, 반복되는 구토로 물을 못 마시는 경우, 호흡곤란은 즉시 진료받으세요.`;
}
export const mealChoices = ["세 끼를 일정한 시간에 먹기", "식전에 한 끼 분량을 정하고 천천히 먹기", "매 끼니 단백질 식품과 채소 챙기기", "간식은 시간과 양을 정해 먹기", "달콤한 음료·술·야식 줄이기", "과식 다음 날 굶지 않고 평소 식사로 돌아오기"];
export const strengthChoices = ["의자에서 앉았다 일어나기", "벽 밀기", "밴드·아령 운동", "헬스장 근력운동"];
export type PlanMessage = { date: string; bmi: number; range: NonNullable<ReturnType<typeof weightRange>>; margin: number; contact: string; meals: string[]; exercise: string; medicine: string; nextDate: string };
export function buildPlanMessage(p: PlanMessage) {
  return `[나의 체중 유지기 계획]\n작성일: ${p.date}\n\n1. 유지체중 범위\n목표 BMI ${p.bmi} · 목표 체중 ${p.range.target.toFixed(1)}kg\n유지 범위 ${p.range.low.toFixed(1)}~${p.range.high.toFixed(1)}kg (목표 체중 ±${p.margin}kg)\n\n2. 병원에 연락할 기준\n${p.contact.trim()}\n\n3. 식사 규칙\n${p.meals.map(x => `- ${x}`).join("\n")}\n\n4. 걷기·근력운동\n${p.exercise}\n\n5. 주사 치료 계획\n${p.medicine}\n\n6. 다음 진료 예정일\n${p.nextDate} (예약 확정은 별도 확인)\n\n체중 유지기 안내\nhttps://atowell.kr/medical/obesity/weight-maintenance\n\n아토웰의원 054-776-0294\n`;
}
