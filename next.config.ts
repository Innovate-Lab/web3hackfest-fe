import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Vô hiệu hóa ESLint khi chạy lệnh `next build`
    ignoreDuringBuilds: true,
  },
  /* Các tùy chọn cấu hình khác */
};

export default nextConfig;
