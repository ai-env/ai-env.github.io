/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://env-ai.com' : '',
};

export default nextConfig; 