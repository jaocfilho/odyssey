/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@odyssey/react-hooks',
    '@odyssey/type-utils',
    '@odyssey/arrays',
    '@odyssey/objects',
    'tailwind-ui',
  ],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/img/logos/**',
      },
    ],
  },
};

module.exports = nextConfig;
