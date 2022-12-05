/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    domains: ['img.icons8.com'],
  },
};

module.exports = nextConfig;
