import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'shadcnblocks.com',
        pathname: '/images/block/**',
      },
      {
        protocol: 'https',
        hostname: 'library.shadcnblocks.com',
        pathname: '/images/block/**',
      },
      {
        protocol: 'https',
        hostname: 'zetarmold.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
