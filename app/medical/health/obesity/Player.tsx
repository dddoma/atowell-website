'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Target, Utensils, Footprints, Heart, TriangleAlert, TrendingUp, ClipboardCheck, Play, Pause, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from './slides';
import s from './player.module.css';
const icons = { message: MessageCircle, target: Target, meal: Utensils, walk: Footprints, care: Heart, alert: TriangleAlert, trend: TrendingUp, check: ClipboardCheck };
export default function Player({ draft }: { draft: boolean }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(25);
  const [error, setError] = useState('');
  const screen = useRef<HTMLDivElement>(null);
  const slide = slides[index]; const Icon = icons[slide.icon];
  const move = (step: number) => setIndex(i => (i + step + slides.length) % slides.length);
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => { if (!document.hidden) setIndex(i => (i + 1) % slides.length); }, seconds * 1000);
    return () => window.clearInterval(id);
  }, [playing, seconds, index]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('button,a,select,input,textarea')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
      if (e.key === ' ') { e.preventDefault(); setPlaying(p => !p); }
    };
    window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key);
  }, []);
  async function fullScreen() {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (screen.current?.requestFullscreen) await screen.current.requestFullscreen(); else setError('이 브라우저는 전체화면을 지원하지 않습니다. 화면을 가로로 돌려 이용해 주세요.'); }
    catch { setError('전체화면을 열지 못했습니다. 브라우저의 전체화면 기능을 이용해 주세요.'); }
  }
  return <div className={s.page}>
    <div className={s.intro}><Link href="/medical/health">← 건강정보</Link><h1>건강한 체중관리</h1><p>8장 · 무음 안내 · 한 장씩 보거나 자동으로 반복 재생할 수 있습니다.</p>{draft && <p className={s.draft}>의료진 검토용 시안 · 아직 환자 공개용으로 게시되지 않았습니다.</p>}</div>
    <div ref={screen} className={s.screen}>
      <article className={`${s.slide} ${slide.icon === 'alert' ? s.warning : ''}`} aria-label={`${index + 1}번째 안내`}>
        <div className={s.top}><span>ATOWELL <b>건강안내</b></span><span>{String(index + 1).padStart(2, '0')} / 08</span></div>
        <div className={s.content}><div className={s.copy}><p className={s.label}>{slide.label}</p><h2>{slide.title}</h2><p className={s.body}>{slide.text}</p><p className={s.cue}>{slide.cue}</p></div><div className={s.art} aria-hidden="true"><Icon strokeWidth={1.35}/><span>건강한 변화,<br/>함께 만들어갑니다.</span></div></div>
        <div className={s.bottom}><span>성인을 위한 일반 건강정보 · 개인별 진료와 처방을 대신하지 않습니다.</span><span>atowell.kr</span></div>
      </article>
      <div className={s.controls}>
        <button type="button" onClick={() => move(-1)} aria-label="이전 화면"><ChevronLeft size={20}/></button>
        <button type="button" onClick={() => setPlaying(p => !p)}>{playing ? <Pause size={18}/> : <Play size={18}/>} {playing ? '일시정지' : '자동재생'}</button>
        <button type="button" onClick={() => move(1)} aria-label="다음 화면"><ChevronRight size={20}/></button>
        <label>화면 간격 <select value={seconds} onChange={e => setSeconds(Number(e.target.value))}><option value={15}>15초</option><option value={25}>25초</option><option value={40}>40초</option></select></label>
        <button type="button" onClick={fullScreen}><Maximize size={18}/> 전체화면</button>
      </div>
      {error && <p className={s.error} role="status">{error}</p>}
    </div>
    <nav className={s.dots} aria-label="화면 선택">{slides.map((item,i) => <button key={item.title} aria-current={i === index ? 'step' : undefined} onClick={() => setIndex(i)}>{i+1}<span>{item.label}</span></button>)}</nav>
    <div className={s.references}><h2>조금 더 자세히 알아보기</h2><Link href={slide.source}>현재 화면의 관련 안내 읽기 →</Link><p>아토웰의 기존 비만·체중관리 안내를 바탕으로 구성했습니다. 화면 전환은 좌우 방향키, 재생·정지는 스페이스 키로도 조작할 수 있습니다.</p></div>
  </div>;
}
