# PRT Logistics & Freight

Production website for PRT Logistics and Freight LLC, a veteran-owned freight brokerage headquartered in Texas. The company provides nationwide logistics coordination with an operational standard built on compliance, accountability, and reliability.

This repository contains the full source for the public-facing website, built on Next.js 14+ with the App Router, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer          | Technology                |
| -------------- | ------------------------- |
| Framework      | Next.js 14+ (App Router)  |
| Language       | TypeScript                |
| Styling        | Tailwind CSS              |
| Animation      | Framer Motion             |
| Runtime        | Node.js 20                |
| Hosting        | Vercel                    |
| Source Control  | GitHub                   |

---

## Project Structure

```
/app                 Next.js App Router pages and layouts
/components          Shared UI components
/components/brand    Brand-specific components (Logo, LogoIntro, BrandAssets)
/public              Static assets served at the root path
/public/brand        Logo variants and brand imagery
/styles              Tailwind extensions and design-system tokens
/api                 Reserved for future API routes
```

- **`/app`** -- All routing and page-level layouts follow App Router conventions. No Pages Router code exists in this project.
- **`/components/brand`** -- Centralizes brand constants (colors, gradients, motion presets) and reusable logo components so every surface draws from a single source of truth.
- **`/public/brand`** -- Logo variants are stored here as static files. Placeholder PNGs are committed until final assets are dropped in.
- **`/styles`** -- Houses the Tailwind brand extension (`tailwind.brand.ts`) that registers custom colors, shadows, glows, and animation utilities.

---

## Brand & Design System

### Colors

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| Primary Navy | `#002040` | Backgrounds, primary surfaces      |
| Deep Navy    | `#001020` | Hero sections, overlays            |
| Accent Red   | `#E00000` | CTAs, alerts, emphasis             |
| Light Gray   | `#F0F0F0` | Page backgrounds, card surfaces    |
| Mid Gray     | `#A0A0A0` | Secondary text, dividers           |

### Design Philosophy

- **Motion-first.** Interfaces use intentional, physics-informed animation to communicate professionalism. Framer Motion drives all component-level transitions.
- **Premium logistics aesthetic.** The visual language reflects the discipline and precision of the freight industry -- clean type, restrained color, and generous whitespace.
- **Logo usage.** The primary logo is designed for large hero placement. It should not be scaled below legibility thresholds or used as a favicon substitute without a dedicated mark variant.

### Logo Variants (in `/public/brand`)

| File              | Purpose                          |
| ----------------- | -------------------------------- |
| `logo-full.png`   | Primary full-color logo          |
| `logo-mark.png`   | Icon-only mark (future)          |
| `logo-dark.png`   | Optimized for dark backgrounds   |
| `logo-light.png`  | Optimized for light backgrounds  |

---

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm, yarn, or pnpm

### Local Development

```bash
git clone https://github.com/FeeTheDeveloper/prt-site.git
cd prt-site
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

### Regenerating Brand Assets (OG Image & Favicons)

The OG social-share image, Apple touch icon, and favicons are pre-generated static files in `/public`. To regenerate them (e.g. after a logo update):

```bash
npm run generate-assets
```

This runs `scripts/generate-brand-assets.mjs` which uses the `canvas` dev-dependency to produce:

| File                   | Size        | Purpose                    |
| ---------------------- | ----------- | -------------------------- |
| `og.png`               | 1200 × 630  | Open Graph / social share  |
| `apple-touch-icon.png` | 180 × 180   | iOS home screen icon       |
| `favicon-32x32.png`    | 32 × 32     | Browser tab icon           |
| `favicon-16x16.png`    | 16 × 16     | Small browser tab icon     |
| `favicon.ico`          | multi-size  | Legacy favicon (16/32/48)  |

The script reads `/public/logo.png` as the source mark. If the logo file is missing, it falls back to text-based assets.

---

## Environment Notes

- **Node.js 20** is the minimum supported runtime. Earlier versions are not tested.
- The project targets **Vercel** for deployment. All configuration is Vercel-compatible out of the box.
- **App Router only.** This codebase does not use the Pages Router. Do not introduce `pages/` directory files.

---

## Deployment

1. Push changes to the `main` branch on GitHub.
2. Vercel detects the push and runs the build automatically.
3. Preview deployments are created for pull requests.
4. Production deploys land on the configured custom domain.

The project is structured to pass `next build` with zero errors before any merge to `main`.

---

## Contribution Rules

- **Clean commits.** Each commit should represent a single logical change with a clear message.
- **App Router conventions.** Do not introduce Pages Router patterns, `getServerSideProps`, or legacy data-fetching methods.
- **Brand alignment required.** No color, typography, or layout changes without confirming alignment with the brand system defined in `/components/brand/BrandAssets.ts` and `/styles/tailwind.brand.ts`.
- **Asset-first workflow.** When adding new visual elements, register assets and tokens in the brand system before building components that consume them.
- **No breaking changes to production.** All pull requests must pass `npm run build` before review.

---

## Legal

**PRT Logistics and Freight LLC**
Veteran-Owned Freight Brokerage
Texas Certificate of Filing effective 06/06/2025

Domain: [prtlogisticsandfreight.com](https://prtlogisticsandfreight.com)