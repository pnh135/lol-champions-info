/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_RIOT_API_KEY: process.env.NEXT_PUBLIC_RIOT_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
