// Legacy top-level marketing URLs now live under /qa/services/digital-marketing.
const legacyMarketingSlugs = [
  "seo",
  "ssm",
  "email-marketing",
  "reputation-management",
  "influencer-marketing",
  "performance-marketing",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Inline the (small) CSS chunks into the HTML so they no longer block render
  // as separate requests.
  experimental: {
    inlineCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async redirects() {
    return legacyMarketingSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/qa/services/digital-marketing/${slug}`,
      permanent: true,
    }));
  },

  // "fallback" rewrites run after dynamic routes, so the regional route at
  // src/app/in/services/[category]/[service] wins; anything it does not
  // cover still falls through to the global page.
  async rewrites() {
    return {
      fallback: [
        {
          source: "/usa/:path*",
          destination: "/:path*",
        },
        {
          source: "/in/:path*",
          destination: "/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
