import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Next.js Image optimisation for all external hosts used in components
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "mlrit.ac.in" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
    // Serve modern formats (WebP/AVIF) where supported — faster loads
    formats: ["image/avif", "image/webp"],
  },

  // Compress responses
  compress: true,

  // Experimental: inline small CSS, skip redundant attribute serialisation
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
