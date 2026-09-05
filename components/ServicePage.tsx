import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { clinic } from "@/data/clinic";
import { pageSchema } from "@/lib/schema";
export function ServicePage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return <div className="wrap section article"><Breadcrumbs title={title} path={path}/><p className="kicker">진료 안내</p><h1>{title}</h1>{children}<div className="actions"><a className="btn primary" href={"tel:" + clinic.phone}>전화 문의</a><Link className="btn" href="/location">진료시간·위치</Link><Link className="btn" href="/price">비급여 가격</Link></div><JsonLd data={pageSchema(title, path)}/></div>;
}
