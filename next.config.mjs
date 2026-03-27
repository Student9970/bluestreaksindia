/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/dealership", destination: "/partnership", permanent: true },
      { source: "/admin/dealership", destination: "/admin/partnership", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sjee11wusd.ufs.sh" },
    ],
  },
};

export default nextConfig;
