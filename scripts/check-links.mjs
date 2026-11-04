import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );
  return files.flat();
}

function targetFor(pathname) {
  if (pathname === "/") return path.join(dist, "index.html");
  if (path.extname(pathname)) return path.join(dist, pathname);
  return path.join(dist, pathname, "index.html");
}

const htmlFiles = (await walk(dist)).filter((file) => file.endsWith(".html"));
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(href)) continue;

    const url = new URL(href, "http://local.test/" + path.relative(dist, file));
    const target = targetFor(url.pathname);

    try {
      await access(target);
    } catch {
      failures.push(`${path.relative(dist, file)} -> ${href} (missing target)`);
      continue;
    }

    if (url.hash && target.endsWith(".html")) {
      const targetHtml = await readFile(target, "utf8");
      const id = decodeURIComponent(url.hash.slice(1));
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`(?:id|name)=["']${escapedId}["']`).test(targetHtml)) {
        failures.push(`${path.relative(dist, file)} -> ${href} (missing anchor)`);
      }
    }
  }
}

if (failures.length) {
  console.error("Broken local links found:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`Checked local links across ${htmlFiles.length} generated HTML files.`);
