/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["milky-ui"],
    appDir: true,
  },
};

module.exports = nextConfig;
