import type { NextConfig } from "next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "standalone",

  trailingSlash: false,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,

  experimental: {
    reactCompiler: { compilationMode: "all" },
    ppr: true, // 'incremental',
    nodeMiddleware: true, // Enable Node.js middleware
  },
};

export default nextConfig;
