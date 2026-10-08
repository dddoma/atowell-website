"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import styles from "./PatientGuideActions.module.css";

export default function PatientGuideActions({ href, copyText }: { href: string; copyText: string }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const helpId = useId();
  const messageId = useId();

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyMessage() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setCopied(false);
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      resetTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopyError(true);
    }
  }

  return <div className={styles.container}>
    <div className={styles.actions}>
      <Link className={`button primary ${styles.viewButton}`} href={href}>손 보호 방법 바로 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
      <button className={`button secondary ${styles.copyButton}`} type="button" onClick={copyMessage} aria-describedby={helpId}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "복사 완료" : "링크 복사"}
      </button>
    </div>
    <p id={helpId} className={styles.hint} role="status">{copied ? "환자 안내 문구와 링크를 복사했습니다." : "링크 복사를 누르면 환자에게 보낼 안내 문구도 함께 복사됩니다."}</p>
    {copyError && <div className={styles.fallback}>
      <p role="alert">자동 복사가 되지 않았습니다. 아래 문구를 선택해 복사해 주세요.</p>
      <label htmlFor={messageId}>환자에게 보낼 안내 문구</label>
      <textarea id={messageId} readOnly value={copyText} rows={12} onFocus={(event) => event.currentTarget.select()} />
    </div>}
  </div>;
}
