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
    // reactCompiler: false,
    // ppr: true, // 'incremental',
  },
};

export default nextConfig;
