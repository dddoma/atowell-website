import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://atowell.kr"),
  title: {
    default: "아토웰의원 | 경주 피부질환·피부미용·비만치료",
    template: "%s | 아토웰의원",
  },
  description: "경주시 황성동 아토웰의원. 피부질환, 피부미용, 비만치료 진료와 비급여 가격, 진료시간 및 오시는 길을 안내합니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "아토웰의원",
    title: "아토웰의원",
    description: "경주 황성동 피부질환·피부미용·비만치료",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문 바로가기</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
