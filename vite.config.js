import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// Copies index.html to 404.html so deep links like /writing/my-post work on GitHub Pages.
function spaFallback() {
  let outDir;
  return {
    name: "spa-404-fallback",
    configResolved(c) { outDir = resolve(c.root, c.build.outDir); },
    closeBundle() { copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html")); },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
});
