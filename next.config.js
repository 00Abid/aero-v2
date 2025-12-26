// next.config.js (using CommonJS)

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... your configuration object ...
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
};

// Use CJS export:
module.exports = nextConfig;