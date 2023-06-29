// @ts-check

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
  poweredByHeader: false,

  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    // mdxRs: true,
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

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/res/hashnode/image/upload/**",
      },
    ],
  },

  // deno-lint-ignore require-await
  rewrites: async () => {
    return [
      // {
      //   source: "/",
      //   destination: "/tr/",
      //   // locale: false,
      //   // permanent: false,
      // },
      // {
      //   source: "/:path*",
      //   has: [
      //     {
      //       type: "host",
      //       value: "(?<subdomain>\\w+)\..*",
      //     },
      //   ],
      //   destination: "/tr/people/:subdomain/:path*",
      // },
    ];
  },
};

module.exports = nextConfig;
