/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', 
  output:'export',
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
