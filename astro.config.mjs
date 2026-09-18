import { defineConfig } from 'astro/config';

// 預設 base 為 '/'（DO App Platform 部署，serve 喺 root）
// GitHub Pages 專案站台：workflow 會設 ASTRO_BASE=/ai-blog/
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://kelvinlamkiwan.github.io',
  base: process.env.ASTRO_BASE || '/',
});
