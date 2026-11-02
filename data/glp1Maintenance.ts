// Review and publication approval are pending. Never enable on production automatically.
export const canReadGlp1Maintenance = () => process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";
export const glp1MaintenanceGuide = {
  title: "GLP-1 유지치료 프로그램",
  href: "/medical/obesity/glp1-maintenance",
};
