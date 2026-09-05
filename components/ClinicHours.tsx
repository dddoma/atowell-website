import { clinic } from "@/data/clinic";
export function ClinicHours() { return <table><caption>진료시간</caption><thead><tr><th scope="col">요일·구분</th><th scope="col">시간</th></tr></thead><tbody>{clinic.hours.map(([day, hours]) => <tr key={day}><th scope="row">{day}</th><td>{hours}</td></tr>)}</tbody></table>; }
