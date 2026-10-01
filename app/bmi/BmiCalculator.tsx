'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Copy, Flag, Ruler, Scale, Sparkles } from 'lucide-react';
import { Slider } from './Slider';
import styles from './bmi.module.css';

const cx = (...names: string[]) => names.map((name) => styles[name]).join(' ');
import { BMI_BANDS, BMI_COLUMNS, BMI_GRADIENT, BMI_THRESHOLDS, bmiPosition, getBmiStatus } from '@/lib/bmi';

const HEIGHT_MIN = 140;
const HEIGHT_MAX = 200;
const WEIGHT_MIN = 40;
const WEIGHT_MAX = 160;
const heights = Array.from({ length: HEIGHT_MAX - HEIGHT_MIN + 1 }, (_, i) => HEIGHT_MIN + i);
const weights = Array.from({ length: WEIGHT_MAX - WEIGHT_MIN + 1 }, (_, i) => WEIGHT_MIN + i);

type BmiToolContext = { registerTool: (tool: { name: string; title: string; description: string; inputSchema: object; annotations: { readOnlyHint: boolean; untrustedContentHint: boolean }; execute: (input: unknown) => unknown }, options?: { signal?: AbortSignal }) => void | Promise<void> };
declare global { interface Document { readonly modelContext?: BmiToolContext } }

function ValueRail({ values, value, unit, label, onChange }: { values: number[]; value: number; unit: string; label: string; onChange: (value: number) => void }) {
  const refs = useRef<Record<number, HTMLButtonElement | null>>({});
  useEffect(() => {
    refs.current[value]?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  }, [value]);
  const select = (next: number) => {
    onChange(next);
    requestAnimationFrame(() => refs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
  };
  return <div className={cx('number-rail')} aria-label={`${label} 정수 값 선택`}>
    {values.map((item) => <button key={item} ref={(node) => { refs.current[item] = node; }} type="button" className={cx('number-chip', ...(item === value ? ['is-active'] : []))} aria-pressed={item === value} aria-label={`${label} ${item}${unit}`} onClick={() => select(item)}>{item}</button>)}
  </div>;
}

function BmiQuickSelect({ height, targetBmi, onWeightChange }: { height: number; targetBmi: number; onWeightChange: (value: number) => void }) {
  const refs = useRef<Record<number, HTMLButtonElement | null>>({});
  const activeBmi = Math.round(targetBmi);
  const heightSquared = (height / 100) ** 2;
  const minBmi = Math.max(15, Math.ceil(WEIGHT_MIN / heightSquared));
  const maxBmi = Math.min(40, Math.floor(WEIGHT_MAX / heightSquared));
  const bmiValues = Array.from({ length: maxBmi - minBmi + 1 }, (_, i) => minBmi + i);
  useEffect(() => {
    refs.current[activeBmi]?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  }, [activeBmi, height]);
  const selectBmi = (bmi: number) => {
    const calculatedWeight = Math.round(bmi * heightSquared);
    onWeightChange(Math.min(WEIGHT_MAX, Math.max(WEIGHT_MIN, calculatedWeight)));
    requestAnimationFrame(() => refs.current[bmi]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
  };
  return <div className={cx('bmi-quick-select')}>
    <div className={cx('bmi-rail-heading')}><p className={cx('rail-label')}>BMI로 바로 선택</p><span>선택하면 목표 체중이 바뀝니다</span></div>
    <div className={cx('number-rail', 'bmi-rail')} aria-label="목표 BMI 정수 값 선택">
      {bmiValues.map((item) => <button key={item} ref={(node) => { refs.current[item] = node; }} type="button" className={cx('number-chip', 'bmi-chip', ...(item === activeBmi ? ['is-active'] : []))} aria-pressed={item === activeBmi} aria-label={`목표 BMI ${item}`} onClick={() => selectBmi(item)}>{item}</button>)}
    </div>
  </div>;
}

function MetricControl({ type, title, eyebrow, value, onChange }: { type: 'height' | 'current' | 'target'; title: string; eyebrow: string; value: number; onChange: (value: number) => void }) {
  const isHeight = type === 'height';
  const min = isHeight ? HEIGHT_MIN : WEIGHT_MIN;
  const max = isHeight ? HEIGHT_MAX : WEIGHT_MAX;
  const unit = isHeight ? 'cm' : 'kg';
  const values = isHeight ? heights : weights;
  const Icon = isHeight ? Ruler : type === 'target' ? Flag : Scale;
  return <section className={cx('metric-section', `metric-${type}`)} aria-labelledby={`${type}-title`}>
    <div className={cx('metric-heading')}>
      <span className={cx('metric-icon')}><Icon aria-hidden="true" /></span>
      <div><p className={cx('eyebrow')}>{eyebrow}</p><h2 id={`${type}-title`}>{title}</h2></div>
      <output className={cx('metric-value')} aria-live="polite"><strong>{value}</strong><span>{unit}</span></output>
    </div>
    <div className={cx('slider-row')}>
      <button type="button" className={cx('step-button')} onClick={() => onChange(Math.max(min, value - 1))} aria-label={`${title} 1${unit} 줄이기`}>−</button>
      <Slider min={min} max={max} step={1} value={[value]} onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : next)} aria-label={`${title} ${unit}`} />
      <button type="button" className={cx('step-button')} onClick={() => onChange(Math.min(max, value + 1))} aria-label={`${title} 1${unit} 늘리기`}>＋</button>
    </div>
    <div className={cx('range-labels')}><span>{min}{unit}</span><span>{max}{unit}</span></div>
    <p className={cx('rail-label')}>정수로 바로 선택</p>
    <ValueRail values={values} value={value} unit={unit} label={title} onChange={onChange} />
  </section>;
}

function BmiGauge({ label, value, target = false }: { label: string; value: number; target?: boolean }) {
  return <div className={cx('gauge-block', ...(target ? ['is-target'] : []))}>
    <div className={cx('gauge-title')}><span>{label}</span><strong>{value.toFixed(1)}</strong></div>
    <div className={cx('gauge')} role="img" aria-label={`${label} ${value.toFixed(1)}, ${getBmiStatus(value).label}`} style={{ background: BMI_GRADIENT }}><span style={{ left: `${bmiPosition(value)}%` }} /></div>
    <div className={cx('gauge-ticks')} aria-hidden="true">{BMI_THRESHOLDS.map((boundary) => <span key={boundary} style={{ left: `${bmiPosition(boundary)}%` }}>{boundary}</span>)}</div>
    <div className={cx('gauge-labels')} style={{ gridTemplateColumns: BMI_COLUMNS }}>{BMI_BANDS.map((band) => <span key={band.label}>{band.label}</span>)}</div>
  </div>;
}

export default function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [currentWeight, setCurrentWeight] = useState(65);
  const [targetWeight, setTargetWeight] = useState(58);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);
  const bmi = useMemo(() => currentWeight / ((height / 100) ** 2), [height, currentWeight]);
  const targetBmi = useMemo(() => targetWeight / ((height / 100) ** 2), [height, targetWeight]);
  const status = getBmiStatus(bmi);
  const change = currentWeight - targetWeight;
  const healthyMin = BMI_THRESHOLDS[0] * ((height / 100) ** 2);
  const healthyMax = BMI_THRESHOLDS[1] * ((height / 100) ** 2);

  const resultText = `BMI 체크 결과\n키: ${height}cm\n현재 체중: ${currentWeight}kg\n목표 체중: ${targetWeight}kg\n현재 BMI: ${bmi.toFixed(1)} (${status.label})\n목표 BMI: ${targetBmi.toFixed(1)}\n${change >= 0 ? '감량 목표' : '증량 목표'}: ${Math.abs(change).toFixed(1)}kg\n정상 체중 범위: ${healthyMin.toFixed(1)}kg 이상 ${healthyMax.toFixed(1)}kg 미만`;
  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      setCopyError(false);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  };

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({
      name: 'set_bmi_inputs', title: 'BMI 입력값 설정', description: '키, 현재 체중, 목표 체중을 정수로 설정하고 화면의 BMI 및 체중 변화 결과를 갱신합니다.',
      inputSchema: { type: 'object', properties: { height: { type: 'integer', minimum: HEIGHT_MIN, maximum: HEIGHT_MAX }, currentWeight: { type: 'integer', minimum: WEIGHT_MIN, maximum: WEIGHT_MAX }, targetWeight: { type: 'integer', minimum: WEIGHT_MIN, maximum: WEIGHT_MAX } }, required: ['height', 'currentWeight', 'targetWeight'], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const data = input as Record<string, unknown>;
        if (!Number.isInteger(data.height) || !Number.isInteger(data.currentWeight) || !Number.isInteger(data.targetWeight) || Number(data.height) < HEIGHT_MIN || Number(data.height) > HEIGHT_MAX || Number(data.currentWeight) < WEIGHT_MIN || Number(data.currentWeight) > WEIGHT_MAX || Number(data.targetWeight) < WEIGHT_MIN || Number(data.targetWeight) > WEIGHT_MAX) throw new Error('키는 140–200cm, 체중은 40–160kg 범위의 정수여야 합니다.');
        const h = Number(data.height), current = Number(data.currentWeight), target = Number(data.targetWeight);
        setHeight(h); setCurrentWeight(current); setTargetWeight(target);
        const nextBmi = current / ((h / 100) ** 2);
        return { height: h, currentWeight: current, targetWeight: target, bmi: Number(nextBmi.toFixed(1)), status: getBmiStatus(nextBmi).label, weightChange: current - target };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return <div className={cx('page-shell')}>
    <header className={cx('page-header')}><div><p className={cx('brand')}><span>B</span> BALANCE NOTE</p><h1>나의 BMI 체크</h1><p>현재와 목표 체중을 입력해 변화를 한눈에 확인하세요.</p></div><div className={cx('header-mark')} aria-hidden="true"><Sparkles /></div></header>
    <div className={cx('calculator-grid')}>
      <div className={cx('controls-card')}>
        <MetricControl type="height" title="키" eyebrow="HEIGHT" value={height} onChange={setHeight} />
        <div className={cx('section-divider')} />
        <MetricControl type="current" title="현재 체중" eyebrow="CURRENT WEIGHT" value={currentWeight} onChange={setCurrentWeight} />
        <div className={cx('section-divider', 'compact')} />
        <MetricControl type="target" title="목표 체중" eyebrow="TARGET WEIGHT" value={targetWeight} onChange={setTargetWeight} />
        <BmiQuickSelect height={height} targetBmi={targetBmi} onWeightChange={setTargetWeight} />
      </div>
      <aside className={cx('result-card')} aria-label="BMI 계산 결과">
        <div className={cx('result-topline')}><span>현재 BMI</span><span className={cx('live-dot')}>LIVE</span></div>
        <output className={cx('bmi-number')} aria-live="polite">{bmi.toFixed(1)}</output>
        <div className={cx('status-pill')}>{status.label}</div>
        <p className={cx('result-message')}>{status.message}</p>
        <div className={cx('healthy-box')}><span>현재 키의 정상 체중 범위</span><strong>{Number(healthyMin.toFixed(1))} kg - {Number(healthyMax.toFixed(1))} kg</strong></div>
        <div className={cx('gauges')}><BmiGauge label="현재 BMI 구간" value={bmi} /><BmiGauge label="목표 BMI 구간" value={targetBmi} target /></div>
        <div className={cx('goal-box')}>
          <div className={cx('goal-weight')}><span>{change >= 0 ? '감량을 원하는 체중' : '증량을 원하는 체중'}</span><strong>{Math.abs(change).toFixed(1)}<small>kg</small></strong></div>
          <div className={cx('goal-bmi')}><span>목표 BMI</span><strong>{targetBmi.toFixed(1)}</strong><small>{getBmiStatus(targetBmi).label}</small></div>
        </div>
        <button type="button" className={cx('copy-button')} onClick={copyResult}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? '복사했어요' : '결과 전체 복사'}</button>
        {copyError && <p role="status" className={cx('copy-error')}>복사 권한을 확인하거나 결과를 직접 선택해 복사해 주세요.</p>}
        <p className={cx('notice')}>BMI는 참고용 지표이며 개인의 건강 상태를 모두 반영하지는 않습니다.</p>
      </aside>
    </div>
  </div>;
}
