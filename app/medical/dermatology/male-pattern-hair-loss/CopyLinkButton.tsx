import PatientMessageCopy from "@/components/PatientMessageCopy";
import { maleHairMessage } from "@/data/patient-guide-messages";
export default function CopyLinkButton() {
  return <PatientMessageCopy message={maleHairMessage} />;
}
