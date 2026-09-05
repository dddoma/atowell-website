"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { clinic } from "@/data/clinic";
import { navigation, medicalNavigation } from "@/data/navigation";
export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);
  const closeMenu = () => { if (menu.current) menu.current.open = false; };
  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);
  const links = navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenu}>{item.label}</Link>);
  return <header className="nav"><div className="wrap navin">
    <Link href="/" className="brand">{clinic.name}</Link>
    <nav className="desktop-links" aria-label="주 메뉴">{links}</nav>
    <details className="mobile-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape" && menu.current?.open) { closeMenu(); toggle.current?.focus(); } }}>
      <summary ref={toggle}>메뉴</summary><nav aria-label="모바일 주 메뉴">{links}
        <div className="menu-label">의료정보</div>{medicalNavigation.map(item => <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        <a href={"tel:" + clinic.phone}>전화 {clinic.phone}</a>
      </nav>
    </details>
  </div></header>;
}
