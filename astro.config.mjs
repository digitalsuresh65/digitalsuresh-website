import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL || "http://localhost:4321";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
