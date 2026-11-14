import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Play, BookOpen } from 'lucide-react';
import { slidesPublished } from './obesity/slides';
import s from './health.module.css';
export const metadata: Metadata = { title: '건강정보', description: '대기실에서도, 집에서도 다시 보는 아토웰 건강안내 모음입니다.', alternates: { canonical: '/medical/health' } };
const guides = [
  { name:'체중감량 목표', detail:'내 건강과 생활에 맞는 목표 세우기', href:'/medical/obesity/goals', label:'비만·체중관리' },
  { name:'체중감량 정체기', detail:'숫자가 멈췄을 때 함께 살펴볼 것', href:'/medical/obesity/plateau', label:'비만·체중관리' },
  { name:'화상 치료와 관리', detail:'초기 대처부터 드레싱과 재진까지', href:'/medical/dermatology/burns', label:'피부 건강' },
  { name:'건선 안내', detail:'질환 이해와 일상 속 관리', href:'/medical/dermatology/psoriasis', label:'피부 건강' },
];
export default function HealthPage() {
 const canPreview = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';
 return <div className={s.page}><header className={s.hero}><p>ATOWELL HEALTH LIBRARY</p><h1>건강정보</h1><div>기다리는 시간에도, 집에서도.<br/>필요한 건강안내를 골라 살펴보세요.</div></header>
 <section className={s.section}><h2>대기실에서 함께 보는 안내</h2>{slidesPublished || canPreview ? <Link className={s.feature} href="/medical/health/obesity"><div><span>비만·체중관리 · 8장 · 무음</span><h3>건강한 체중관리</h3><p>목표부터 식사·활동, 치료 중 안전수칙과 유지까지.</p>{!slidesPublished && <small>의료진 검토용 시안</small>}</div><span className={s.play}><Play/>슬라이드 보기</span></Link> : <div className={s.pending}><h3>건강한 체중관리</h3><p>8장 건강안내를 준비하고 있습니다. 의료진 검토 후 게시합니다.</p></div>}</section>
 <section className={s.section}><h2>자세히 읽는 건강안내</h2><p className={s.lead}>기존 의료정보에서 주제별로 골라 읽을 수 있습니다.</p><div className={s.grid}>{guides.map(g=><Link key={g.href} className={s.card} href={g.href}><span><BookOpen size={18}/>{g.label}</span><h3>{g.name}</h3><p>{g.detail}</p><ArrowUpRight className={s.arrow}/></Link>)}</div></section>
 <footer className={s.note}>일반적인 건강정보이며 개인별 진료와 처방을 대신하지 않습니다. 증상이 있거나 치료 변경이 필요하면 의료진과 상담하세요.</footer></div>;
}
