/**
 * Static export for GitHub Pages.
 *
 * GitHub Pages serves only static files, so the app is exported to `out/`.
 * Project Pages are served under https://<owner>.github.io/<repo>/, so set
 * NEXT_PUBLIC_BASE_PATH=/ridesafe at build time (done in the deploy workflow).
 * Leave it empty for a custom domain or local builds.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
};

module.exports = nextConfig;
