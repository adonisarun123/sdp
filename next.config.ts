import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  swcMinify: true, // Use SWC for faster modern minification
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    legacyBrowsers: false, // Disable legacy browser polyfills
  },
  // Inline critical CSS
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Add critical CSS preload headers
          {
            key: 'Link',
            value: '</app/globals.css>; rel=preload; as=style',
          },
        ],
      },
    ]
  },
}

export default nextConfig
