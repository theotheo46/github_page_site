import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/github_page_site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
