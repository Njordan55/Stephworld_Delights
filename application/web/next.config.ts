import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["JordanMac.local","192.168.18.73", "192.168.2.81"],
    async redirects() {
        return [{ source: "/", destination: "/home", permanent: true }];
    },
};

export default nextConfig;
