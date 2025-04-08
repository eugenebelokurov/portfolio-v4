import type { NextConfig } from "next";
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  /* config options here */
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
