import { clinic } from "@/data/clinic";
import { absoluteUrl } from "@/lib/site";
export const medicalClinicSchema = {
  "@context": "https://schema.org", "@type": "MedicalClinic", "@id": absoluteUrl("/#clinic"),
  name: clinic.name, url: absoluteUrl("/"), telephone: clinic.phone,
  address: clinic.address,
};
export const physicianSchema = {
  "@context": "https://schema.org", "@type": "Physician", "@id": absoluteUrl("/about#physician"),
  name: clinic.doctor, url: absoluteUrl("/about"), address: clinic.address, telephone: clinic.phone,
};
export function pageSchema(name: string, path: string) {
  return { "@context": "https://schema.org", "@type": "WebPage", "@id": absoluteUrl(path + "#webpage"),
    name, url: absoluteUrl(path), inLanguage: "ko-KR", publisher: { "@id": absoluteUrl("/#clinic") } };
}
