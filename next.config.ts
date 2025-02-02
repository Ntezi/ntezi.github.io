import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    exportPathMap: async function () {
        return {
            '/': {page: '/'},
        }
    },
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
