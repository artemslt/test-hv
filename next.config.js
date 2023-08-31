/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dryhnlf4u/**",
            },
        ],
    },
    env: {
        NEXT_PUBLIC_TELEGRAM_CHAT_ID: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        NEXT_PUBLIC_TELEGRAM_URL_API: process.env.NEXT_PUBLIC_TELEGRAM_URL_API,
    },
};

module.exports = nextConfig;
