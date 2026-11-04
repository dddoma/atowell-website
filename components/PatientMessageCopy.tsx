"use client";

import { useId, useState } from "react";
import styles from "./PatientMessageCopy.module.css";

export default function PatientMessageCopy({ message, align = "right", iconOnly = false, label = "안내 문구와 링크 복사" }: { message: string; align?: "left" | "right"; iconOnly?: boolean; label?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const id = useId();
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return <div className={`${styles.container} ${align === "left" ? styles.left : ""} ${iconOnly ? styles.compact : ""}`}>
    <button type="button" className={iconOnly ? styles.iconButton : "button secondary"} onClick={copy} aria-describedby={id} aria-label={label} title={label}>
      {iconOnly ? <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg> : status === "copied" ? "복사 완료" : "링크 복사"}
    </button>
    <span id={id} role="status" className={styles.hint}>
      {status === "copied" ? "환자 안내 문구와 링크를 복사했습니다. 문자에 붙여넣으세요." : iconOnly ? "" : "링크 복사를 누르면 안내 문구도 함께 복사됩니다."}
    </span>
    {status === "error" && <label className={styles.fallback}>
      자동 복사가 되지 않았습니다. 아래 문구를 선택해 복사하세요.
      <textarea readOnly value={message} rows={12} onFocus={(event) => event.currentTarget.select()} style={{ width: "100%", padding: 12, fontSize: 16 }} />
    </label>}
  </div>;
}
