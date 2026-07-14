/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets only for now. Add remote patterns here if client-hosted
    // logo/image CDNs are introduced later.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
