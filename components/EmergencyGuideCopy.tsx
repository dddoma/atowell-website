"use client";
import { useState } from "react";
import { emergencyMessage } from "@/data/patient-guide-messages";
export default function EmergencyGuideCopy({ iconOnly = false }: { iconOnly?: boolean }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try { await navigator.clipboard.writeText(emergencyMessage); setStatus("copied"); }
    catch { setStatus("error"); }
  }
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
    <button type="button" onClick={copy} className={iconOnly ? undefined : "button secondary"} style={iconOnly ? { background: "transparent", border: 0, padding: 8, cursor: "pointer", color: "inherit" } : undefined} aria-label="사후피임 안내 링크 복사" title="사후피임 안내 링크 복사">
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
      {!iconOnly && (status === "copied" ? "복사됨" : "링크 복사")}
    </button>
    <span role="status" style={{ fontSize: 13 }}>{status === "copied" ? "안내 문구와 링크를 복사했습니다." : status === "error" ? "아래 안내 문구를 선택해 복사하세요." : ""}</span>
    {status === "error" && <textarea aria-label="복사할 사후피임 안내 문자" rows={12} readOnly value={emergencyMessage} onFocus={e => e.currentTarget.select()} style={{ width: "min(100%, 450px)" }} />}
  </span>;
}
