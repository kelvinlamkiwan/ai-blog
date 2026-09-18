# AI 每日文章（AI Daily Blog）

每日一篇 AI 文章（繁體中文），主題涵蓋 AI 新聞、教學、工具評測等雜項。

- 框架：**Astro**（靜態站台）
- 託管：**GitHub Pages**
- 內容：每日自動生成（AI 撰寫）

## 本地開發

```bash
npm install
npm run dev
```

## 寫新文章

喺 `src/posts/` 加一個 markdown 檔案，frontmatter 格式：

```markdown
---
title: "文章標題"
slug: "article-slug"
date: "2026-09-18"
description: "一句簡介"
tags: ["AI", "教學"]
---

文章內容...
```

推上去 `main` 分支之後，GitHub Actions 會自動 build 同 deploy 到 GitHub Pages。
