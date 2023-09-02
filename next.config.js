/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'picsum.photos',
  //       port: '',
  //       pathname: '/200/300',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
