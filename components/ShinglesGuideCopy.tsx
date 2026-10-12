import PatientMessageCopy from "./PatientMessageCopy";
import { shinglesAftercareMessage } from "@/data/patientGuideMessages";

export default function ShinglesGuideCopy() {
  return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: 8, marginBottom: 20, textAlign: "right" }}>
    <PatientMessageCopy message={shinglesAftercareMessage} />
  </div>;
}
