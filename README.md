# Calorie Calculator

A client-side calorie calculator where users browse 100 food products, add them to a basket with gram quantities, and see real-time total calories.

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
