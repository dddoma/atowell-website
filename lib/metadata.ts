import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import { absoluteUrl, isPreview } from "@/lib/site";
export function pageMetadata(title: string, description: string, path: string, index = true): Metadata {
  const fullTitle = path === "/" ? title : title + " | " + clinic.name;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { type: "website", locale: "ko_KR", siteName: clinic.name, title: fullTitle, description, url: absoluteUrl(path) },
    twitter: { card: "summary", title: fullTitle, description },
    ...(!index || isPreview ? { robots: { index: false, follow: true } } : {}),
  };
}
