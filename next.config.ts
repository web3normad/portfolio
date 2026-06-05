import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "ghchart.rshah.org" },
    ],
  },
};

export default config;
