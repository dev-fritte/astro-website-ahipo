# astro-website-ahipo

Website of **Melanie Ahipo**, lawyer and legal guardian (*Rechtsanwältin und rechtliche Betreuerin*) in Freiburg im Breisgau – live at [ahipo.de](https://ahipo.de).

A small, fast, fully static site built with [Astro](https://astro.build/). It is available in German (default) and English.

## Features

- Static site generation, no backend and no tracking
- Bilingual: German (`/de/`) and English (`/en/`), `/` redirects to `/de/`
- Responsive design, mobile-first, accessible navigation with a keyboard-operable mobile menu
- Self-hosted font (Montserrat variable) and no third-party requests
- SEO: canonical URLs, `hreflang` alternates, Open Graph tags, i18n sitemap and `LegalService` structured data (JSON-LD)
- Legal pages: imprint and privacy policy in both languages
- Cookie consent banner ([vanilla-cookieconsent](https://github.com/orestbida/cookieconsent))

## Tech stack

| Purpose | Tool |
|---|---|
| Framework | [Astro](https://astro.build/) 7 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) |
| Icons | [astro-icon](https://github.com/natemoo-re/astro-icon) with [Iconify MDI](https://icon-sets.iconify.design/mdi/) |
| SEO | [astro-seo](https://github.com/jonasmerlin/astro-seo), [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Font | [@fontsource-variable/montserrat](https://fontsource.org/fonts/montserrat) |
| Package manager | [Yarn](https://classic.yarnpkg.com/) 1.x |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.12.0 or newer
- [Yarn](https://classic.yarnpkg.com/) 1.x

> This project uses Yarn only. Please do not use npm or pnpm, so that `yarn.lock` stays the single source of truth.

### Installation

```bash
git clone git@github.com:dev-fritte/astro-website-ahipo.git
cd astro-website-ahipo
yarn install
```

### Development server

```bash
yarn dev
```

The site is served at <http://localhost:4321>.

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start the development server with hot reload |
| `yarn build` | Build the static site into `dist/` |
| `yarn preview` | Serve the production build locally |

## Project structure

```text
.
├── public/                  # Static files copied as-is (favicon, robots.txt, og-image.png)
├── src/
│   ├── components/          # Header, Hero, Features, Content1 (about), ContactBlock, Footer, ...
│   ├── i18n/translations.ts # All UI texts, German and English
│   ├── i18n.ts              # Translation helper and locale utilities
│   ├── icons/               # Local SVG icons (logo, logo mark)
│   ├── images/              # Optimized images (portrait)
│   ├── layouts/BaseLayout.astro   # HTML shell, SEO tags, structured data
│   ├── pages/
│   │   ├── de/              # index, imprint, privacy (German)
│   │   └── en/              # index, imprint, privacy (English)
│   └── styles/global.css    # Tailwind setup and theme (colors, breakpoints, shadows), base styles
└── astro.config.mjs         # Integrations, Vite plugins, i18n, redirects, cookie consent texts
```

## Editing content

- **Texts on the start page** live in [`src/i18n/translations.ts`](src/i18n/translations.ts). Add or change a key in both the `de` and the `en` block.
- **Imprint and privacy policy** are plain Astro pages in `src/pages/de/` and `src/pages/en/`. Update both languages together.
- **Contact details** (phone, e-mail, WhatsApp) are defined in [`src/components/ContactBlock.astro`](src/components/ContactBlock.astro). Structured data for search engines (address, phone) is set in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro); keep both in sync.
- **Colors and breakpoints** are configured in the `@theme` block of [`src/styles/global.css`](src/styles/global.css).

## Deployment

`yarn build` produces a static site in `dist/` that can be hosted on any static web host (for example Netlify, Cloudflare Pages, GitHub Pages or a plain web server). Use `yarn install --frozen-lockfile && yarn build` in CI.

The site URL (`https://ahipo.de`) is set via `site` in [`astro.config.mjs`](astro.config.mjs); it is used for canonical URLs, the sitemap and Open Graph tags.

## License

[MIT](https://opensource.org/licenses/MIT), as declared in `package.json`. Please note that the texts, images and logo on the site belong to Melanie Ahipo and are not covered by this license.
