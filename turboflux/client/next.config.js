/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  transpilePackages: ['milky-ui'],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
