import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InflammationInjectionArticle from "@/components/InflammationInjectionArticle";
import { canReadInflammationInjection, inflammationInjection as guide, inflammationInjectionPublished } from "@/data/inflammationInjection";
export const metadata: Metadata = { title: guide.title, description: "트리암시놀론 병변내주사의 효과와 한계, 여드름과 감염성 모낭염의 구분, 부작용과 시술 후 관리 안내.", alternates: { canonical: guide.href }, robots: { index: inflammationInjectionPublished && process.env.VERCEL_ENV !== "preview", follow: true }, openGraph: { title: guide.title, url: guide.href, type: "article" } };
export default function Page() { if (!canReadInflammationInjection()) notFound(); return <InflammationInjectionArticle />; }
