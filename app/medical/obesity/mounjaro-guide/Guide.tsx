"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import styles from "./guide.module.css";

const slides = [
  {
    label: "치료의 흐름", title: "마운자로로 체중을 줄이고 유지하는 방법",
    lead: "약효가 있는 동안, 내 생활에 맞는 식사 루틴을 만듭니다.",
    cards: [
      ["감량기", "먹는 양 살피기", "식욕의 변화와 불편감을 확인하며 식사량을 조절합니다."],
      ["식사 루틴", "반복할 습관 만들기", "언제, 무엇을, 얼마나 먹을지 정하고 매일 연습합니다."],
      ["유지기", "몸과 생활 함께 보기", "체중뿐 아니라 식사, 활동, 근력의 변화를 함께 살핍니다."],
    ],
    note: "체중을 줄이는 과정과 줄어든 체중을 유지하는 과정을 함께 준비합니다.",
  },
  {
    label: "용량 조절", title: "나에게 맞는 용량 찾기",
    lead: "치료 효과와 불편감을 함께 살피며 의료진이 결정합니다.",
    cards: [
      ["시작", "2.5 mg", "허가된 시작 용량은 주 1회 2.5mg이며, 4주간 투여합니다."],
      ["4주 후", "5 mg", "허가사항에 따라 주 1회 5mg으로 증량합니다. 불편감이 있다면 다음 처방 전에 알립니다."],
      ["추가 조절", "단계적으로", "추가 증량이 필요하면 현 용량을 최소 4주 투여한 뒤 2.5mg씩 조절합니다. 최대 용량은 주 1회 15mg입니다."],
    ],
    note: "기본은 7일에 한 번, 같은 요일입니다. 용량이나 간격을 스스로 바꾸지 마세요.",
  },
  {
    label: "식사 규칙", title: "식사 규칙은 간단하게",
    lead: "적게 먹는 데서 그치지 않고, 필요한 영양을 챙깁니다.",
    cards: [
      ["01", "먹기 전에 양 정하기", "밥·빵·면을 많이 먹었다면 양을 줄이는 것부터 시작합니다. 절반 줄이기는 상담 예시이며, 현재 식사량과 건강상태에 맞춥니다."],
      ["02", "일정한 식사 리듬", "하루 세 끼를 기본으로 내 생활에 맞게 조절합니다. 끼니마다 단백질 식품과 채소를 챙기고, 요거트 한 개만으로 식사를 계속 대신하지 않습니다."],
      ["03", "간식도 식사 계획에", "과일이나 디저트는 먹을 양을 미리 정합니다. 다른 음식의 양도 함께 조절하되, 단백질 식품까지 빼지는 않습니다."],
    ],
    note: "음료는 물과 무가당 음료를 기본으로 합니다. 너무 적게 먹거나 기운이 없으면 식사 계획을 다시 점검하세요.",
  },
  {
    label: "유지 전략", title: "목표 체중 이후에도 이어갑니다",
    lead: "유지는 식사 습관, 활동, 필요한 치료를 함께 이어가는 과정입니다.",
    cards: [
      ["식사", "내 양 기억하기", "무리 없이 반복할 수 있었던 한 끼의 양과 식사 시간을 유지합니다. 식욕이 달라지면 식사 기록을 함께 살핍니다."],
      ["몸", "근력과 활동 챙기기", "단백질 식품을 챙기고, 몸 상태에 맞는 저항운동과 걷기를 이어갑니다. 체중은 비슷한 조건에서 정기적으로 확인합니다."],
      ["치료", "유지 계획 상담하기", "목표 체중에 도달했다고 자동으로 중단하지 않습니다. 약물치료의 지속 여부와 용량은 의료진과 상의합니다."],
    ],
    note: "허가된 투여 간격은 주 1회입니다. 10일·2주로 늘리는 방법은 표준 허가 용법이 아니며, 이 자료를 보고 임의로 적용하지 마세요.",
    extra: "식사량이나 체중이 다시 늘기 시작하면 많이 오르기 전에 진료실에서 함께 점검합니다.",
  },
  {
    label: "이상반응·안전", title: "불편감이 생겼을 때",
    lead: "가벼운 불편감과 바로 진료가 필요한 증상을 구분합니다.",
    cards: [
      ["흔한 불편감", "위장관 증상", "메스꺼움, 복부 불편감, 변비 또는 설사가 생길 수 있습니다. 천천히 소량씩 먹고 수분을 챙기세요."],
      ["진료실에 연락", "지속되거나 심해질 때", "먹거나 마시기 어렵거나, 구토가 반복되고 소변량이 줄면 빠르게 진료받으세요. 증상이 심한 상태에서 임의로 증량하지 않습니다."],
      ["즉시 도움 요청", "심한 복통·호흡곤란", "지속되는 심한 복통은 다음 투여를 보류하고 즉시 진료받으세요. 숨이 차거나 얼굴·입술·혀가 붓는다면 119 또는 응급실로 갑니다."],
    ],
    note: "임신·임신 계획·수유, 췌장·담낭 질환 병력, 복용 중인 약과 예정된 수술·수면내시경을 의료진에게 알려주세요.",
    extra: "인슐린·일부 당뇨약을 함께 쓰면 저혈당 위험이 높아질 수 있습니다. 경구피임약을 복용 중이면 시작·증량 시 추가 피임이 필요한지 상담하세요. 갑상선 수질암의 본인·가족력 또는 다발성내분비종양증 2형(MEN2)도 처방 전에 알려주세요.",
  },
];

function subscribeWidth(callback: () => void) {
  const media = window.matchMedia("(min-width: 900px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function desktopSnapshot() { return window.matchMedia("(min-width: 900px)").matches; }
function serverSnapshot() { return false; }

export default function Guide() {
  const desktop = useSyncExternalStore(subscribeWidth, desktopSnapshot, serverSnapshot);
  const [choice, setMode] = useState<"read" | "slides" | null>(null);
  const mode = choice ?? (desktop ? "slides" : "read");
  const [current, setCurrent] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  function move(next: number) {
    setCurrent(Math.max(0, Math.min(slides.length - 1, next)));
    root.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  async function copy() {
    try { await navigator.clipboard.writeText(window.location.href.split("#")[0]); setMessage("주소를 복사했습니다."); }
    catch { setMessage("브라우저 주소창의 주소를 복사해 주세요."); }
  }
  return <div ref={root} className={`${styles.guide} ${mode === "slides" ? styles.slides : ""}`} onKeyDown={event => {
    if (mode !== "slides" || event.altKey || event.ctrlKey || event.metaKey || (event.target as HTMLElement).closest("input, textarea, select, [contenteditable]")) return;
    if (["ArrowRight", "PageDown", "ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault(); move(current + (["ArrowRight", "PageDown"].includes(event.key) ? 1 : -1));
    }
  }}>
    <div className={styles.toolbar}>
      <div className={styles.modes} aria-label="읽기 방식">
        <button type="button" aria-pressed={mode === "slides"} onClick={() => setMode("slides")}>상담 보기</button>
        <button type="button" aria-pressed={mode === "read"} onClick={() => setMode("read")}>전체 읽기</button>
      </div>
      <div className={styles.tools}><button type="button" onClick={copy}>주소 복사</button><button type="button" onClick={() => window.print()}>인쇄</button></div>
    </div>
    <p className={styles.help}>진료실에서는 한 장씩, 집에서는 전체 내용을 이어 읽으세요.</p>
    <p role="status" className={styles.status}>{message}</p>
    <nav className={styles.steps} aria-label="상담자료 목차">{slides.map((slide, i) => <a key={slide.label} href={`#guide-${i + 1}`} aria-current={mode === "slides" && i === current ? "step" : undefined} onClick={event => { if (mode === "slides") { event.preventDefault(); move(i); } }}><span>{i + 1}</span>{slide.label}</a>)}</nav>
    <h1 className={styles.heading}>마운자로로 체중을 줄이고 유지하는 방법</h1>
    <div className={styles.pages}>{slides.map((slide, i) => <section id={`guide-${i + 1}`} key={slide.label} className={styles.page} hidden={mode === "slides" && current !== i} aria-labelledby={`guide-title-${i}`}>
      <div className={styles.eyebrow}>ATOWELL · {String(i + 1).padStart(2, "0")} / 05 · {slide.label}</div>
      <h2 id={`guide-title-${i}`}>{slide.title}</h2>
      <p className={styles.lead}>{slide.lead}</p>
      <div className={styles.cards}>{slide.cards.map(([label, title, body]) => <article key={title}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <p className={styles.note}>{slide.note}</p>
      {slide.extra && <p className={styles.extra}>{slide.extra}</p>}
    </section>)}</div>
    {mode === "slides" && <div className={styles.controls}>
      <button type="button" disabled={current === 0} onClick={() => move(current - 1)}>← 이전</button>
      <span aria-live="polite">{current + 1} / 5 · {slides[current].label}</span>
      <button type="button" disabled={current === 4} onClick={() => move(current + 1)}>다음 →</button>
    </div>}
  </div>;
}
