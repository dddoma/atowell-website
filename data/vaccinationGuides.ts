import { gardasilAftercareArticle } from "./gardasilAftercareArticle";
import { gardasilAftercareMessage } from "./patientGuideMessages";

// Add future vaccine guides here; each item pairs its title/link with a compact copy control.
export const vaccinationGuides = [{
  title: "가다실 9가",
  href: `/medical/dermatology/${gardasilAftercareArticle.slug}`,
  draft: gardasilAftercareArticle.draft,
  message: gardasilAftercareMessage,
}];
