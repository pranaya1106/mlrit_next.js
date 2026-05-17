import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mlrit.ac.in",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
