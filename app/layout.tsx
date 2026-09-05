import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://atowell.kr"),
  title: { default: "아토웰의원 | 경주 황성동 피부·비만 진료", template: "%s | 아토웰의원" },
  description: "경주시 황성동 아토웰의원. 피부질환, 피부미용, 비만 진료와 마운자로·위고비 처방 상담 및 비급여 가격 안내.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ko_KR", siteName: "아토웰의원", title: "아토웰의원", description: "경주 황성동 피부·비만 진료" },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/></body></html>
}
