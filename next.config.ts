import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Gera os arquivos estáticos para cada página
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
