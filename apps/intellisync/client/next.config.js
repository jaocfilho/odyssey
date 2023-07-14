/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@odyssey/react-hooks',
    '@odyssey/type-utils',
    '@odyssey/arrays',
    '@odyssey/objects',
    'tailwind-ui',
  ],
};

module.exports = nextConfig;
