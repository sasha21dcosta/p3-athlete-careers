// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/careers",
  "/clients",
  "/contact",
  "/gallery",
  "/services",
  "/shepaddle",
  "/team",
  "/tournaments",
  "/school-sports",
] as const;

export default defineConfig({
  // Static Apache hosting — no Nitro / Cloudflare Worker deploy bundle.
  nitro: false,
  tanstackStart: {
    // Built server bundle is used only during the prerender pass (vite preview), not deployed.
    server: { entry: "server" },
    spa: { enabled: false },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
    pages: PUBLIC_ROUTES.map((path) => ({ path })),
    sitemap: {
      enabled: true,
      host: "https://www.p3-sports.com",
    },
  },
  vite: {
    build: {
      outDir: "dist",
    },
  },
});
