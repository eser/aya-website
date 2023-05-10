// @ts-check

const { withContentlayer } = require("next-contentlayer");

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ["ts", "tsx", "js", "jsx"],

  trailingSlash: true,
  productionBrowserSourceMaps: true,

  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  experimental: {
    appDir: true,
    mdxRs: true,
    // runtime: "experimental-edge",
    // esmExternals: true,
  },

  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.resolve.fallback = { async_hooks: false, fs: false };
  //   }

  //   return config;
  // },

  // deno-lint-ignore require-await
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/tr/',
        permanent: false,
      },
    ];
  },

};

const withMiddlewares = withContentlayer(nextConfig);

module.exports = withMiddlewares;
