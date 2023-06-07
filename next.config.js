/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "is1-ssl.mzstatic.com",
      "is2-ssl.mzstatic.com",
      "is3-ssl.mzstatic.com",
      "is4-ssl.mzstatic.com",
      "is5-ssl.mzstatic.com",
      "is6-ssl.mzstatic.com",
      "is7-ssl.mzstatic.com",
      "is8-ssl.mzstatic.com",
    ],
  },
};

module.exports = nextConfig;
