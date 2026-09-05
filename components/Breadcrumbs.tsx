import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/site";
export function Breadcrumbs({ title, path }: { title: string; path: string }) {
  return <><nav aria-label="현재 위치" className="breadcrumbs"><Link href="/">홈</Link><span aria-hidden="true"> / </span><span aria-current="page">{title}</span></nav>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: title, item: absoluteUrl(path) },
    ] }} /></>;
}
