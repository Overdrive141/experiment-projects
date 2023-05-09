/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/experiments",
        destination: "/experiments/agents",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
