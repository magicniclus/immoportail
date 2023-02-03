/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_VITE_APP_GMAP_API_KEY:
      process.env.NEXT_PUBLIC_VITE_APP_GMAP_API_KEY,
  },
};

module.exports = nextConfig;
