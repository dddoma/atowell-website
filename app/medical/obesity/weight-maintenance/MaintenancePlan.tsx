"use client";

import { useEffect, useRef, useState } from "react";
import { addWeeks, buildPlanMessage, contactText, koreaDate, mealChoices, strengthChoices, weightRange } from "@/lib/maintenancePlan";
import styles from "./plan.module.css";

export default function MaintenancePlan() {
  const [today, setToday] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(24);
  const [margin, setMargin] = useState(1.5);
  const [contact, setContact] = useState<string | null>(null);
  const [meals, setMeals] = useState<string[]>(mealChoices.slice(0, 3));
  const [mealNote, setMealNote] = useState("");
  const [minutes, setMinutes] = useState("30");
  const [days, setDays] = useState("5");
  const [strengthDays, setStrengthDays] = useState("2");
  const [strength, setStrength] = useState<string[]>([strengthChoices[0], strengthChoices[1]]);
  const [exerciseNote, setExerciseNote] = useState("");
  const [medicine, setMedicine] = useState("");
  const [medicineNote, setMedicineNote] = useState("");
  const [copied, setCopied] = useState("");
  const [error, setError] = useState(false);
  const previewRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { const d = koreaDate(); setToday(d); setNextDate(addWeeks(d)); }, []);
  const range = weightRange(height, bmi, margin);
  const criteria = contact ?? contactText(range);
  const mealPlan = [...meals, ...(mealNote.trim() ? [mealNote.trim()] : [])];
  const exercise = [minutes === "0" ? "걷기: 현재는 보류하고 가능한 활동을 진료에서 조정" : `걷기: 하루 ${minutes}분, 주 ${days}일 (주 ${Number(minutes) * Number(days)}분)`, strengthDays === "0" ? "근력운동: 현재는 보류하고 가능한 운동을 진료에서 조정" : `근력운동: 주 ${strengthDays}회${strength.length ? ` · ${strength.join(", ")}` : ""}`, exerciseNote.trim()].filter(Boolean).join("\n");
  const medicinePlan = medicine === "continue" ? "현재 처방대로 주 1회 유지합니다. 용량은 처방전을 따르세요." : medicine === "adjust" ? "오늘 상담한 처방으로 조정합니다." : medicine === "stop" ? "오늘 상담에 따라 주사를 중단하고 체중·식욕 변화를 관찰합니다. 다시 시작하기 전에는 진료받으세요." : "";
  const medicineText = [medicinePlan, medicineNote.trim()].filter(Boolean).join("\n");
  const missing = !range ? "키를 100~230cm 범위로 입력해 주세요." : !criteria.trim() ? "병원에 연락할 기준을 입력해 주세요." : !mealPlan.length ? "식사 규칙을 하나 이상 선택하거나 입력해 주세요." : !medicine ? "상담한 주사 치료 계획을 선택해 주세요." : medicine === "adjust" && !medicineNote.trim() ? "조정할 주사 처방 내용을 입력해 주세요." : !nextDate || nextDate < today ? "오늘 이후의 다음 진료일을 선택해 주세요." : !today ? "날짜를 준비하고 있습니다." : "";
  const message = range ? buildPlanMessage({date: today, bmi, range, margin, contact: criteria, meals: mealPlan, exercise, medicine: medicineText || "상담 후 선택", nextDate}) : "키를 입력하면 환자에게 보낼 계획이 표시됩니다.";
  async function copy() {
    if (missing) return;
    try { await navigator.clipboard.writeText(message); setCopied(message); setError(false); }
    catch { setError(true); previewRef.current?.focus(); previewRef.current?.select(); }
  }
  function reset() {
    const d = koreaDate(); setToday(d); setNextDate(addWeeks(d)); setHeight(""); setBmi(24); setMargin(1.5); setContact(null);
    setMeals(mealChoices.slice(0, 3)); setMealNote(""); setMinutes("30"); setDays("5"); setStrengthDays("2"); setStrength([strengthChoices[0], strengthChoices[1]]);
    setExerciseNote(""); setMedicine(""); setMedicineNote(""); setCopied(""); setError(false);
  }
  function toggle(value: string, selected: string[], update: (v: string[]) => void) { update(selected.includes(value) ? selected.filter(x => x !== value) : [...selected, value]); }
  return <section id="my-plan" className={styles.plan} aria-labelledby="plan-title">
    <div className={styles.heading}><h2 id="plan-title">나의 유지기 계획</h2><button type="button" className="button secondary" onClick={reset}>새 상담 시작</button></div>
    <p>진료실에서 함께 입력·선택한 뒤, 완성된 계획을 복사해 문자에 붙여넣으세요. 입력 내용은 저장되지 않으며 새로고침하면 초기화됩니다.</p>
    <fieldset><legend>1. 목표 체중과 유지 범위</legend>
      <label className={styles.field}>키 (cm)<input type="number" inputMode="decimal" min="100" max="230" step="0.1" placeholder="예: 165" value={height} onChange={e => setHeight(e.target.value)} /></label>
      <label className={styles.field}>목표 BMI <strong>{bmi}</strong><input type="range" min="20" max="30" step="1" value={bmi} onChange={e => setBmi(Number(e.target.value))} aria-valuetext={`목표 BMI ${bmi}`} /></label>
      <div className={styles.ends}><span>20</span><span>25</span><span>30</span></div>
      <label className={styles.field}>유지 범위 <strong>목표 체중 ±{margin}kg</strong><input type="range" min="0.5" max="3" step="0.5" value={margin} onChange={e => setMargin(Number(e.target.value))} aria-valuetext={`목표 체중에서 위아래 ${margin}kg`} /></label>
      <div className={styles.ends}><span>±0.5kg</span><span>±3kg</span></div>
      <output className={styles.result} aria-live="polite">{range ? <>목표 체중 <strong>{range.target.toFixed(1)}kg</strong> · 유지 범위 <strong>{range.low.toFixed(1)}~{range.high.toFixed(1)}kg</strong></> : "키를 입력하면 목표 체중과 유지 범위를 계산합니다."}</output>
      <small>목표 체중 = 목표 BMI × 키(m)². 목표 BMI와 유지 범위는 상담에서 정하는 값이며 모든 환자에게 같은 목표를 권하는 것은 아닙니다.</small>
    </fieldset>
    <fieldset><legend>2. 병원에 연락할 체중·증상 기준</legend>
      <label className={styles.field}>연락 기준 (수정 가능)<textarea rows={5} value={criteria} onChange={e => setContact(e.target.value)} /></label>
      <button type="button" className="button secondary" onClick={() => setContact(null)}>현재 유지 범위로 기준 다시 채우기</button>
      <small>{contact === null ? "목표 체중·범위를 바꾸면 연락 기준도 자동으로 바뀝니다." : "직접 수정한 기준입니다. 체중 범위를 변경했다면 수치를 확인해 주세요."}</small>
    </fieldset>
    <fieldset><legend>3. 유지할 식사 규칙</legend><div className={styles.choices}>{mealChoices.map(x => <label key={x}><input type="checkbox" checked={meals.includes(x)} onChange={() => toggle(x, meals, setMeals)} />{x}</label>)}</div>
      <label className={styles.field}>추가 식사 계획 (선택)<input type="text" value={mealNote} onChange={e => setMealNote(e.target.value)} placeholder="상담에서 함께 정한 내용을 입력하세요" /></label>
    </fieldset>
    <fieldset><legend>4. 걷기·근력운동 계획</legend><div className={styles.row}>
      <label className={styles.field}>하루 걷기<select value={minutes} onChange={e => setMinutes(e.target.value)}>{[10,20,30,40,60].map(n => <option key={n} value={n}>{n}분</option>)}<option value="0">보류·개별 상담</option></select></label>
      <label className={styles.field}>걷는 날<select disabled={minutes === "0"} value={days} onChange={e => setDays(e.target.value)}>{[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>주 {n}일</option>)}</select></label>
      <label className={styles.field}>근력운동<select value={strengthDays} onChange={e => setStrengthDays(e.target.value)}>{[1,2,3].map(n => <option key={n} value={n}>주 {n}회</option>)}<option value="0">보류·개별 상담</option></select></label>
    </div><div className={styles.choices}>{strengthChoices.map(x => <label key={x}><input type="checkbox" disabled={strengthDays === "0"} checked={strength.includes(x)} onChange={() => toggle(x, strength, setStrength)} />{x}</label>)}</div>
      <label className={styles.field}>추가 운동 계획 (선택)<input type="text" value={exerciseNote} onChange={e => setExerciseNote(e.target.value)} placeholder="예: 식후 걷기, 무릎 통증이 있으면 운동 강도 조정" /></label>
    </fieldset>
    <fieldset><legend>5. 주사 치료 계획</legend><div className={styles.choices}>{[["continue", "현재 처방대로 주 1회 유지"], ["adjust", "오늘 상담한 처방으로 조정"], ["stop", "중단 후 체중·식욕 관찰"]].map(([value,label]) => <label key={value}><input type="radio" name="maintenance-medicine" value={value} checked={medicine === value} onChange={() => { setMedicine(value); setMedicineNote(""); }} />{label}</label>)}</div>
      <label className={styles.field}>처방·상담 내용 {medicine === "adjust" ? "(필수)" : "(선택)"}<textarea rows={2} value={medicineNote} onChange={e => setMedicineNote(e.target.value)} placeholder="처방의가 확인한 용량과 투여 계획을 입력하세요" /></label>
      <small>진료에서 결정한 계획을 기록하는 칸입니다. 환자가 스스로 용량이나 투여 간격을 변경하지 마세요.</small>
    </fieldset>
    <fieldset><legend>6. 다음 진료일</legend><label className={styles.field}>진료 예정일<input type="date" value={nextDate} min={today} onChange={e => setNextDate(e.target.value)} /></label>
      <button type="button" className="button secondary" onClick={() => { const d = koreaDate(); setToday(d); setNextDate(addWeeks(d)); }}>오늘부터 4주 뒤</button><small>기본값은 한국 날짜 기준 4주 뒤입니다. 진료 가능일에 맞게 변경하세요. 예약 확정은 별도 확인이 필요합니다.</small>
    </fieldset>
    <div className={styles.preview}><div className={styles.heading}><h3>환자에게 보낼 문자</h3><button type="button" className="button" disabled={!!missing} onClick={copy}>{copied === message ? "복사 완료" : "계획 복사"}</button></div>
      <p role="status">{missing || (error ? "자동 복사가 되지 않았습니다. 아래 문구를 선택해 직접 복사하세요." : copied === message ? "문자 메시지에 붙여넣으세요." : "아래 내용을 확인한 뒤 계획 복사를 누르세요.")}</p>
      <textarea ref={previewRef} aria-label="문자 메시지 미리보기" readOnly value={message} rows={18} />
    </div>
    <pre className={styles.print}>{message}</pre>
  </section>;
}
