"use client";
import { useState } from "react";
export default function CopyLinkButton(){
 const [copied,setCopied]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(window.location.href);setCopied(true);}catch{setCopied(false);}}
 return <button type="button" onClick={copy} aria-label="남성형 탈모 안내 링크 복사" style={{border:"1px solid #cbd5e1",borderRadius:9,padding:"9px 13px",background:"white",color:"#18344a",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:7}}>
 <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>{copied?"복사됨":"링크 복사"}</button>;
}