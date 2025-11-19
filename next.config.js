/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Docker 배포를 위한 standalone 출력
  output: 'standalone',
}

module.exports = nextConfig


