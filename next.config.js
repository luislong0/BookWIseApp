/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['lh3.googleusercontent.com', 'fv9-1.failiem.lv'],
  },
}

module.exports = nextConfig
