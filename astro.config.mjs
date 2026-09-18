import { defineConfig } from 'astro/config';

// base 預設 /ai-blog/（GitHub Pages 專案站台）
// 部署到 DO Static Sites 時，設環境變數 ASTRO_BASE=/ 即可用 root
// site 用於 canonical URL，可設 ASTRO_SITE 覆寫
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://kelvinlamkiwan.github.io',
  base: process.env.ASTRO_BASE || '/ai-blog/',
});
