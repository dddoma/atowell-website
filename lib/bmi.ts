// Preserved from the existing BMI slider. Clinical thresholds are intentionally unchanged.
export const BMI_MIN = 14;
export const BMI_MAX = 40;
export const BMI_THRESHOLDS = [20, 25, 30] as const;
export const BMI_BANDS = [
  { min: BMI_MIN, max: BMI_THRESHOLDS[0], label: '저체중', color: '#5fc7ff', message: '균형 잡힌 영양 섭취를 챙겨보세요.' },
  { min: BMI_THRESHOLDS[0], max: BMI_THRESHOLDS[1], label: '정상', color: '#52dd99', message: '건강한 범위에 있어요. 지금의 생활 습관을 유지해 보세요.' },
  { min: BMI_THRESHOLDS[1], max: BMI_THRESHOLDS[2], label: '과체중', color: '#ffd166', message: '생활 습관을 가볍게 점검해 볼 시점이에요.' },
  { min: BMI_THRESHOLDS[2], max: BMI_MAX, label: '비만', color: '#ff6b72', message: '건강 관리를 위해 전문가와 상담해 보세요.' },
] as const;

export function bmiPosition(value: number) {
  return Math.min(100, Math.max(0, ((value - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100));
}

export function getBmiStatus(bmi: number) {
  return BMI_BANDS.find((band, index) => index === BMI_BANDS.length - 1 || bmi < band.max)!;
}

export const BMI_GRADIENT = `linear-gradient(90deg, ${BMI_BANDS.map((band) => `${band.color} ${bmiPosition(band.min)}% ${bmiPosition(band.max)}%`).join(', ')})`;
export const BMI_COLUMNS = BMI_BANDS.map((band) => `${band.max - band.min}fr`).join(' ');
