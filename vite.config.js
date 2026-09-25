import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";
import { createStructuredData, SITE_URL } from "./src/constants/seo.js";

const structuredDataPlugin = {
  name: "portfolio-structured-data",
  transformIndexHtml(html) {
    const jsonLd = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");
    return html.replace(
      "</head>",
      `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    structuredDataPlugin,
    Sitemap({
      hostname: SITE_URL,
      exclude: [
        "/BingSiteAuth.xml",
        "/f4536413c891408e8f7064b1313af463.txt",
        "/google10ae71c7925a91bc.html",
        "/google10ae71c7925a91bc",
        "/test",
        "/spotify",
      ],
      robots: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/private/"],
        },
      ],
    }),
  ],
});
