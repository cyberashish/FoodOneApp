/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com','i.dummyjson.com']
      },
      env: {
        NEXTAUTH_URL: process.env.VERCEL_URL,
      },
};

export default nextConfig;
