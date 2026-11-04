import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InflammationInjectionArticle from "@/components/InflammationInjectionArticle";
import { canReadInflammationInjection, inflammationInjection as guide, inflammationInjectionPublished } from "@/data/inflammationInjection";
export const metadata: Metadata = { title: guide.aftercareTitle, description: "염증 주사 후 집에서의 관리, 세안과 처방약 사용, 피부 패임·색 변화와 병원에 연락해야 할 증상 안내.", alternates: { canonical: guide.aftercareHref }, robots: { index: inflammationInjectionPublished && process.env.VERCEL_ENV !== "preview", follow: true }, openGraph: { title: guide.aftercareTitle, url: guide.aftercareHref, type: "article" } };
export default function Page() { if (!canReadInflammationInjection()) notFound(); return <InflammationInjectionArticle aftercareOnly />; }
