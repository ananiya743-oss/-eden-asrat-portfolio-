import type { NextConfig } from "next";

/**
 * Deploy target:
 *  - "standalone" (default): runs as a server on Z.ai preview / Vercel / etc.
 *  - "export": builds a static site into ./out for GitHub Pages.
 *
 * To build for GitHub Pages, set NEXT_PUBLIC_BUILD_TARGET=export in CI or locally:
 *   NEXT_PUBLIC_BUILD_TARGET=export NEXT_PUBLIC_BASE_PATH=/your-repo-name bun run build
 *
 * NEXT_PUBLIC_BASE_PATH is the GitHub Pages subpath:
 *  - User/org pages (username.github.io repo):  leave empty ("")
 *  - Project pages (username.github.io/repo):   set to "/repo-name"
 */
const buildTarget = process.env.NEXT_PUBLIC_BUILD_TARGET ?? "standalone";
const isExport = buildTarget === "export";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // "standalone" for the Z.ai preview / server deploys;
  // "export" for static GitHub Pages builds.
  output: isExport ? "export" : "standalone",

  // GitHub Pages serves pre-built static files — no image optimizer.
  images: {
    unoptimized: true,
  },

  // basePath for project pages (username.github.io/repo).
  // Empty for user/org pages or root domains.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  // Trailing slash makes asset paths consistent on GitHub Pages
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
