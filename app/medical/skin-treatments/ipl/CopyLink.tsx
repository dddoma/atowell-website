"use client";

import { useId, useState } from "react";
import { iplGuide } from "@/data/iplGuide";
import styles from "./guide.module.css";

export default function CopyLink() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const [message, setMessage] = useState("");
  const id = useId();
  async function copy() {
    // A draft must link to its accessible Preview, rather than a production 404.
    const text = iplGuide.message.replace(`https://atowell.kr${iplGuide.href}`, new URL(iplGuide.href, window.location.origin).href);
    setMessage(text);
    try { await navigator.clipboard.writeText(text); setStatus("copied"); }
    catch { setStatus("error"); }
  }
  return <div className={styles.copy}>
    <button type="button" className="button secondary" onClick={copy} aria-describedby={id}>링크 복사</button>
    <span id={id} className={styles.status} role="status">{status === "copied" ? "안내 문구와 링크를 복사했습니다." : status === "error" ? "자동 복사가 되지 않았습니다. 아래 문구를 선택해 복사하세요." : ""}</span>
    {status === "error" && <textarea aria-label="복사할 IPL 안내 문구와 링크" className={styles.fallback} readOnly value={message} rows={9} onFocus={event => event.currentTarget.select()} />}
  </div>;
}
