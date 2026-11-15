import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["JordanMac.local","172.18.110.1"],
    async redirects() {
        return [{ source: "/", destination: "/home", permanent: true }];
    },
};

export default nextConfig;
