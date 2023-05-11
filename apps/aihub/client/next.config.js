/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@odyssey/react-hooks'],
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
