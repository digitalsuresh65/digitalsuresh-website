import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const GET: APIRoute = () => {
  const sitemap = new URL("/sitemap.xml", siteConfig.siteUrl);
  return new Response(`User-agent: *\nAllow: /\nDisallow: /blog/\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
