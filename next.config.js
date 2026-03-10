/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export', // Commented out because static exports do not support backend API routes like /api/contact
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
