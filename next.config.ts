import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    { source: "/bmi", destination: "/tools/bmi", permanent: true },
  ],
};

export default nextConfig;
