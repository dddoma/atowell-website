import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:[{userAgent:"*",allow:"/"},{userAgent:"OAI-SearchBot",allow:"/"}],sitemap:"https://atowell.kr/sitemap.xml",host:"https://atowell.kr"}}
