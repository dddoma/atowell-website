// Change only after the domain migration is approved. Preview URLs are never canonical.
export const siteUrl = "https://atowell-website.vercel.app";
export const isPreview = process.env.VERCEL_ENV === "preview";
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
