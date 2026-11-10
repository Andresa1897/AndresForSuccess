# andres-grc-specialist

Personal site for Andres Alvarez. Vite + React, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Edit the homepage

All homepage copy (outcomes, experience, skills, links) is in `src/content/site.js`.

To offer a résumé download, add `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in that file.

## Write a blog post

1. Create a Markdown file in `src/content/posts/`, for example `my-first-post.md`. The file name becomes the URL: `/writing/my-first-post`.
2. Start it with this header:

```md
---
title: My first post
date: 2026-11-15
summary: One or two sentences shown in the post list.
tags: [GRC, Career]
draft: false
---

Your writing here. Use ## for section headings; they build the "On this page" menu.
```

3. Commit and push. Vercel publishes it automatically.

Posts with `draft: true` show up when you run `npm run dev` but are hidden on the live site. The three starter posts are drafts: rewrite them in your own words, or delete them.

## Contact form

The form posts to Formsubmit (to the email in `site.js`) by default. To use Formspree instead, set `VITE_FORMSPREE_FORM_ID` in Vercel's environment variables.
