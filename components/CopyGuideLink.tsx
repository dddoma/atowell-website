"use client";
import { useState } from "react";
export default function CopyGuideLink({href,label}:{href:string;label:string}){
 const [copied,setCopied]=useState(false);
 async function onCopy(){try{await navigator.clipboard.writeText(new URL(href,window.location.origin).href);setCopied(true);}catch{setCopied(false);}}
 return <button type="button" title={copied?"복사됨":label} aria-label={label} onClick={onCopy} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",color:"inherit",padding:5,cursor:"pointer"}}>
 <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button>;
}