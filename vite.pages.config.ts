import { existsSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const externalSitePath = "E:/New Web/site.ts";

export default defineConfig({
  base: "/Happy-Birthday/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve("src"),
      "@/content/site": existsSync(externalSitePath)
        ? resolve(externalSitePath)
        : resolve("src/content/site.ts"),
    },
  },
  build: {
    outDir: ".output/public",
    emptyOutDir: true,
  },
});
