/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'hamza-sport.vercel.app', // ✅ Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'hamza-sport-admin.vercel.app', // ✅ Cloudinary
      },
    ],
  },
}

export default nextConfig
