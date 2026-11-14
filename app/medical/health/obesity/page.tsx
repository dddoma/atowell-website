import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { slidesPublished } from './slides';
import Player from './Player';
export const metadata: Metadata = { title: '건강한 체중관리 · 대기실 건강안내', alternates: { canonical: '/medical/health/obesity' }, robots: { index: slidesPublished, follow: true } };
export default function Page() {
  if (!slidesPublished && process.env.NODE_ENV !== 'development' && process.env.VERCEL_ENV !== 'preview') notFound();
  return <Player draft={!slidesPublished} />;
}
