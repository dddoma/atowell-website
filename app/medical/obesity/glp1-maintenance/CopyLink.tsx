"use client";
import { useId, useState } from "react";
import { glp1MaintenanceGuide } from "@/data/glp1Maintenance";
import styles from "./copy.module.css";
export default function CopyLink() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const id = useId();
  async function copy() {
    try { await navigator.clipboard.writeText(glp1MaintenanceGuide.message); setStatus("copied"); }
    catch { setStatus("error"); }
  }
  return <div className={styles.copy}>
    <button type="button" className="button secondary" onClick={copy} aria-describedby={id}>링크 복사</button>
    <span id={id} role="status" className={styles.status}>{status === "copied" ? "안내 문구와 링크를 복사했습니다." : status === "error" ? "자동 복사가 되지 않았습니다. 아래 문구를 선택해 복사하세요." : ""}</span>
    {status === "error" && <textarea aria-label="복사할 안내 문구와 링크" readOnly value={glp1MaintenanceGuide.message} rows={9} onFocus={event => event.currentTarget.select()} className={styles.fallback} />}
  </div>;
}
