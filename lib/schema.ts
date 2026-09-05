import { clinic } from "@/data/clinic";
export const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  url: "https://atowell.kr",
  telephone: clinic.phone,
  email: clinic.email,
  address: { "@type": "PostalAddress", streetAddress: "황성로 25, 2층", addressLocality: "경주시", addressRegion: "경상북도", addressCountry: "KR" },
  employee: { "@type": "Physician", name: "권병현", honorificSuffix: "MD, PhD" }
};
