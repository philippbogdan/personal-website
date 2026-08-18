# personal-website

A writing site: essays and papers, nothing else. Static Astro, no client-side
JavaScript, black and white.

```
npm run dev       # local, http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Adding an essay

Create a Markdown (or `.mdx`) file in `src/content/essays/`. The file name
becomes the URL, so `on-interface-density.md` publishes at
`/essays/on-interface-density/`.

```markdown
---
title: On interface density
description: A short argument for showing people more, not less.
date: 2026-03-14
draft: false          # optional, defaults to false
updated: 2026-04-02   # optional
---

Your essay here.
```

Drafts are visible on the dev server and excluded from the built site and the
RSS feed.

## Adding a paper

Drop the PDF in `public/papers/`, then create a Markdown file in
`src/content/papers/`:

```markdown
---
title: Paper title
authors: P. Bogdan, A. N. Other
venue: Imperial College London
date: 2026-01-01
href: /papers/your-file.pdf   # or an external URL
---
```

The homepage links straight to `href`. There is no per-paper page.

## Things to change before deploying

- `src/config.ts` — your name, the bio paragraphs, and the footer links.
  The bio is placeholder text.
- `astro.config.mjs` — `SITE_URL`, used for canonical URLs, RSS and the sitemap.
- `public/robots.txt` — the sitemap URL.
- `src/assets/portrait.png` — the homepage portrait, a 1120px sharpened master
  cut down from the 3024px original in iCloud. Replace the file and keep the
  name; Astro re-encodes it to AVIF/WebP at 1x, 2x and 3x on build. If you swap
  in a new original, downscale it to ~1120px with a sharpening pass first — a
  single 3024 to 560 reduction inside the build comes out soft.

## Design

The look is "Column" from `design/artboards.html`, which holds the six
directions that were considered. All of it lives in `src/styles/global.css`;
there is no framework and no utility classes. Typeface is Newsreader,
self-hosted via Astro's font pipeline. Dark mode follows the system setting.
