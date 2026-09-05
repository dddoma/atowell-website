import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { medicalClinicSchema } from "@/lib/schema";
import { clinic } from "@/data/clinic";
import { siteUrl, isPreview } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: clinic.name, template: "%s | " + clinic.name },
  ...(isPreview ? { robots: { index: false, follow: true } } : {}),
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><a className="skip-link" href="#main-content">본문 바로가기</a><Header/><main id="main-content" tabIndex={-1}>{children}</main><Footer/><JsonLd data={medicalClinicSchema}/></body></html>;
}
