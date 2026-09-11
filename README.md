# TNheous.com

TNheous.com is T’Nheous Smith’s personal portfolio and a lab for developer tools and independent software ideas.

The site is built with Next.js, React, TypeScript, and Tailwind CSS, and uses pnpm for package management.

## Requirements

- Node.js 22.13+
- pnpm 11.22.0

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Other available commands:

- `pnpm build` creates a production build.
- `pnpm lint` runs ESLint against the project.

No environment variables or external services are currently configured. Internet access is required when installing dependencies and when fetching the Google fonts used by the site.

## Work entries

Work entries are Markdown files in `content/work/`. Their filenames become slugs and are used to break date ties:

```yaml
---
title: "Project title"
date: 2026-01-01
image: /images/work/project.png
imageAlt: "Project preview"
link: https://example.com
postPage: false
---
```

`title` and `date` (`YYYY-MM-DD`) are required. `image`, `imageAlt`, `link`, and `postPage` are optional; `postPage` defaults to `false`. The homepage displays the five newest entries. Entries with `postPage: true` also get static pages at `/work/<slug>/`, including entries older than the five shown on the homepage. Markdown bodies do not render raw HTML.

Put local work images in `public/images/work/`. Use [`templates/work-post.md`](templates/work-post.md) as a starting point. Content changes require a new build.

## Build and preview

Run `pnpm build` to parse the Markdown, generate the static export in `out/`, and create all opted-in work pages. Use `pnpm dev` and [http://localhost:3000](http://localhost:3000) for local preview. The generated `out/` directory is intended for static hosting; `next start` is not compatible with `output: "export"`.

## Directory structure

```text
.
├── app/
│   ├── page.tsx       # Homepage
│   ├── layout.tsx     # Shared layout and site metadata
│   ├── globals.css    # Global styles
│   ├── favicon.ico    # Site favicon
│   └── work/[[...slug]]/ # Static Markdown work pages
│       └── page.tsx
├── components/
│   ├── BtnLink.tsx    # Reusable links
│   ├── CardTitle.tsx  # Reusable card headings
│   └── WorkSection.tsx # Project sections
├── content/work/      # Markdown work entries
├── lib/work.ts        # Filesystem loader and frontmatter parser
├── public/            # Publicly served static assets
│   └── images/work/   # Local work images
├── templates/         # Authoring templates
│   └── work-post.md
├── favicon_io/        # Favicon assets and web manifest
└── next.config.ts      # Next.js configuration
```
