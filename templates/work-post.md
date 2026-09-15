---
title: "Your project title"
date: 2026-01-01
image: /images/work/your-image.png
imageAlt: "A short description of the project image"
link: https://example.com
postPage: true
isBlog: false
---

Write the project entry in Markdown below the frontmatter.

The page title comes from frontmatter. Start body sections with `##` headings.

Save the file as `content/work/<slug>.md`. The filename becomes the slug. `title` and `date` are required; `image`, `imageAlt`, `link`, `postPage`, and `isBlog` are optional. Set `postPage: true` to generate a detail page at `/work/<slug>/`. Set both `postPage: true` and `isBlog: true` to generate it at `/blog/<slug>/` instead. Put referenced local images in `public/images/work/`.
