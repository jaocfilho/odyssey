/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@odyssey/react-hooks',
    '@odyssey/type-utils',
    '@odyssey/arrays',
    '@odyssey/objects',
    'cosmic-ui',
  ],
};

module.exports = nextConfig;
