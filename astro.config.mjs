import { defineConfig } from 'astro/config';

// 預設 base 為 '/'（DO App Platform 部署，serve 喺 root）
// GitHub Pages 專案站台：workflow 會設 ASTRO_BASE=/ai-blog/
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://kelvinlamkiwan.github.io',
  base: process.env.ASTRO_BASE || '/',
  server: {
    // DO 用動態 hostname（xxx.ondigitalocean.app）駁入，allow 所有 host 避免被 block
    allowedHosts: true,
  },
});
