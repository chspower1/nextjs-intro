/** @type {import('next').NextConfig} */
const API_KEY = "1a301bdc4abdaca0b146fc986fe4436c";
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: `/api/movie`,
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
