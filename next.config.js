/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

module.exports = withMDX(nextConfig);
