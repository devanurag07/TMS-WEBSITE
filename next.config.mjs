/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tms-website.s3.us-east-1.amazonaws.com',
            }
        ],
    },
};

export default nextConfig;
