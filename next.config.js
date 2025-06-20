/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // allows <img> placeholders without next/image hassle
  }
};
module.exports = nextConfig;