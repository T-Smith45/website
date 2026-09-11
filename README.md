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
- `pnpm start` starts the production server and requires a successful `pnpm build` first.
- `pnpm lint` runs ESLint against the project.

No environment variables or external services are currently configured. Internet access is required when installing dependencies and when fetching the Google fonts used by the site.

## Directory structure

```text
.
├── app/
│   ├── page.tsx       # Homepage
│   ├── layout.tsx     # Shared layout and site metadata
│   ├── globals.css    # Global styles
│   └── favicon.ico    # Site favicon
├── components/
│   ├── BtnLink.tsx    # Reusable links
│   ├── CardTitle.tsx  # Reusable card headings
│   └── WorkSection.tsx # Project sections
├── public/            # Publicly served static assets
└── favicon_io/        # Favicon assets and web manifest
```
