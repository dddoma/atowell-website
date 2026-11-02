"use client";

import { useId, useState } from "react";

export default function CopyLink() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const [url, setUrl] = useState("");
  const id = useId();
  async function copy() {
    // Keep the Preview origin while the article is awaiting medical review.
    const currentUrl = window.location.origin + window.location.pathname;
    setUrl(currentUrl);
    try { await navigator.clipboard.writeText(currentUrl); setStatus("copied"); }
    catch { setStatus("error"); }
  }
  return <div style={{ marginBlock: 24 }}>
    <button type="button" className="button secondary" onClick={copy} aria-describedby={id}>링크 복사</button>
    <p id={id} role="status">{status === "copied" ? "링크를 복사했습니다." : status === "error" ? "자동 복사가 되지 않았습니다. 아래 주소를 선택해 복사하세요." : "이 페이지의 주소를 복사합니다."}</p>
    {status === "error" && <input aria-label="복사할 페이지 주소" readOnly value={url} onFocus={event => event.currentTarget.select()} style={{ width: "100%", padding: 12, fontSize: 16 }} />}
  </div>;
}
