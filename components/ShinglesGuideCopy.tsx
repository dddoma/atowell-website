"use client";

import { useId, useState } from "react";

const patientUrl = "https://atowell.kr/medical/dermatology/shingles-aftercare";

export default function ShinglesGuideCopy() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const id = useId();
  async function copy() {
    try {
      await navigator.clipboard.writeText(patientUrl);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, marginBottom: 20 }}>
    <button type="button" className="button secondary" onClick={copy} aria-describedby={id}>
      {status === "copied" ? "복사 완료" : "링크 복사"}
    </button>
    <span id={id} role="status" style={{ fontSize: 13 }}>
      {status === "copied" ? "안내문 주소를 복사했습니다. 환자 문자에 붙여넣으세요." : "환자에게 문자로 보낼 안내문 주소"}
    </span>
    {status === "error" && <label style={{ maxWidth: "100%", width: 440 }}>
      자동 복사가 되지 않았습니다. 아래 주소를 선택해 복사하세요.
      <input readOnly value={patientUrl} onFocus={(event) => event.currentTarget.select()} style={{ width: "100%", padding: 10, fontSize: 14 }} />
    </label>}
  </div>;
}
