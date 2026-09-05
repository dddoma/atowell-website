import Link from "next/link";
import { clinic } from "@/data/clinic";
import { navigation, medicalNavigation } from "@/data/navigation";
export function Footer() { return <footer className="footer"><div className="wrap">
  <div className="footer-grid"><div><strong>{clinic.name}</strong><address>{clinic.address}<br/><a href={"tel:" + clinic.phone}>전화 {clinic.phone}</a></address><Link href="/about">의료진 {clinic.doctor}</Link></div>
  <nav aria-label="하단 진료 안내"><strong>진료·이용 안내</strong>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
  <nav aria-label="하단 의료정보"><strong>의료정보</strong>{medicalNavigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
  <p>의료정보는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.</p>
</div></footer>; }
