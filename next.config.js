/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/search",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
