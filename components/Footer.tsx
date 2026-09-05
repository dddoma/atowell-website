import { clinic } from "@/data/clinic";
export function Footer(){return <footer className="footer"><div className="wrap"><strong>{clinic.name}</strong><br/>{clinic.address}<br/>{clinic.phone}<br/><span>의료정보는 일반적인 정보 제공을 위한 것이며 개인의 진단·치료를 대신하지 않습니다.</span></div></footer>}
