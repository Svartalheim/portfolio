/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
