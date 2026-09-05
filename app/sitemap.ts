import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://atowell.kr";return ["","/about","/clinic/mounjaro","/medical/obesity","/medical/dermatology","/price","/location"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path.includes("medical")?"weekly":"monthly",priority:path===""?1:.8}))}
