import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: { root: process.cwd() },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
