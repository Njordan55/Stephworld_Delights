import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const IP_connect = "10.67.76.95";
const nextConfig: NextConfig = {
    allowedDevOrigins: ["JordanMac.local",IP_connect],
};

export default withNextIntl(nextConfig);
