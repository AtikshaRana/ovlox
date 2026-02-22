/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ovloxindia.com",
      },
    ],
  },
};

module.exports = nextConfig;