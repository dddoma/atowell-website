"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Check, Copy } from "lucide-react";
import styles from "./VaccinationGuideLinks.module.css";

type Guide = { title: string; href: string; message: string };
function GuideLink({ guide }: { guide: Guide }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const id = useId();
  async function copy() {
    try { await navigator.clipboard.writeText(guide.message); setStatus("copied"); }
    catch { setStatus("error"); }
  }
  return <div className={styles.item}>
    <div className={styles.row}>
      <Link className="text-link" href={guide.href}>{guide.title} →</Link>
      <button className={styles.copy} type="button" onClick={copy} aria-label={`${guide.title} 안내 링크 복사`} title="안내 문구와 링크 복사" aria-describedby={id}>
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
    </div>
    <span id={id} className={styles.status} role="status">{status === "copied" ? "안내 문구와 링크를 복사했습니다." : status === "error" ? "자동 복사가 되지 않았습니다. 아래 문구를 선택해 복사하세요." : ""}</span>
    {status === "error" && <textarea aria-label={`${guide.title} 안내 문구와 링크`} readOnly value={guide.message} rows={6} onFocus={(event) => event.currentTarget.select()} />}
  </div>;
}
export default function VaccinationGuideLinks({ guides }: { guides: Guide[] }) {
  return <div className={styles.list}>{guides.map((guide) => <GuideLink key={guide.href} guide={guide} />)}</div>;
}
