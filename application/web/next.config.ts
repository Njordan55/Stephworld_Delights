import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const IP_connect = "192.168.19.113";
const nextConfig: NextConfig = {
    allowedDevOrigins: ["JordanMac.local",IP_connect],
};

export default withNextIntl(nextConfig);
