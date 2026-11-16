import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the workspace root to this project. Without this, Next.js walks up
  // and finds unrelated lockfiles in the home directory, which nests the
  // standalone output under the home path and breaks `npm start`.
  turbopack: {
    root: process.cwd(),
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai", "*.chatglm.cn"],
};

export default nextConfig;
