/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@odyssey/react-hooks',
    '@odyssey/type-utils',
    '@odyssey/arrays',
    '@odyssey/objects',
    'tailwind-ui',
  ],
  async headers() {
    return [
      {
        // matching all API routes

        source: '/app/api/:path*',

        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },

          { key: 'Access-Control-Allow-Origin', value: '*' },

          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST',
          },

          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
