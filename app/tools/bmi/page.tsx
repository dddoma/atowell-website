import type { Metadata } from "next";
import BmiCalculator from "./BmiCalculator";

export const metadata: Metadata = {
  title: "BMI 슬라이더 | 나의 BMI 체크",
  description: "키와 몸무게를 슬라이더 또는 정수 버튼으로 입력해 현재와 목표 BMI를 확인하세요.",
  alternates: { canonical: "/tools/bmi" },
};

export default function Page() {
  return <BmiCalculator />;
}
