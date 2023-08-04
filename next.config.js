const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly', 'res.cloudinary.com'],
  }
}

module.exports = withContentlayer(nextConfig)
// module.exports = nextConfig

