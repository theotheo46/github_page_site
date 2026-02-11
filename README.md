# Calorie Calculator

A client-side calorie calculator where users browse 100 food products, add them to a basket with gram quantities, and see real-time total calories.

**Live site:** [theotheo46.github.io/github_page_site](https://theotheo46.github.io/github_page_site/)
**Repository:** [github.com/theotheo46/github_page_site](https://github.com/theotheo46/github_page_site)

## Features

- **Product catalog** with 100 items across 12 categories (fruits, vegetables, meat, fish, dairy, grains, bakery, snacks, beverages, oils, nuts, sweets)
- **Search and filter** by product name or category
- **Basket management** — add products, adjust gram quantities, remove items, clear all
- **Real-time calorie calculation** updating as you modify the basket
- **Persistent basket** — survives page reloads via localStorage
- **Responsive design** — desktop sidebar basket, mobile slide-out drawer

## Tech Stack

- **Next.js** (App Router, static export)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **shadcn/ui** (Radix-based components)
- **Deployed to** GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static export to `out/` |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run validate` | Run all checks (format + lint + typecheck) |

## Deployment

The site is automatically deployed to GitHub Pages on every push to `main` via
[GitHub Actions](.github/workflows/deploy.yml).

### Useful `gh` CLI Commands

Check the latest deployment status:

```bash
gh run list --limit 3
```

Watch a running deployment in real time:

```bash
gh run watch
```

View logs from a failed run:

```bash
gh run view <run-id> --log-failed
```

Re-run a failed deployment:

```bash
gh run rerun <run-id>
```

Manually trigger a deployment:

```bash
gh workflow run deploy.yml
```

View the Pages site URL:

```bash
gh api repos/theotheo46/github_page_site/pages --jq '.html_url'
```

Check Pages build status:

```bash
gh api repos/theotheo46/github_page_site/pages --jq '.status'
```
