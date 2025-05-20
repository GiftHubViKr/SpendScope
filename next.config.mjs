/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
        protocol: "https",
        hostname: "cdn1.iconfinder.com", // ✅ Add this line
      },
        ],
    },
};

export default nextConfig;
