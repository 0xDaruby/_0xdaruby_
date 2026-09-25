import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://oxdaruby.tech",
      exclude: [
        "/BingSiteAuth.xml",
        "/f4536413c891408e8f7064b1313af463.txt",
        "/google10ae71c7925a91bc.html",
        "/google10ae71c7925a91bc",
      ],
    }),
  ],
});
