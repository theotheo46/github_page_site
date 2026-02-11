# CLAUDE.md - GitHub Pages Static Site

Next.js static web application deployed to GitHub Pages. No backend, no database — pure frontend with static export.

## Technology Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix-based)
- **Deployment**: GitHub Pages (static export)
- **Package Manager**: npm

---

## Project Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — React components; `ui/` contains shadcn/ui base primitives
- `src/lib/` — Utilities and helper functions
- `src/hooks/` — Custom React hooks
- `src/types/` — TypeScript type definitions
- `public/` — Static assets (images, fonts, icons)

---

## Development Environment

### Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npx serve out
```

### Next.js Static Export

This project uses `output: "export"` in `next.config.ts` for GitHub Pages deployment.

**Constraints of static export:**
- No server-side features (API routes, SSR, ISR, middleware)
- No `getServerSideProps` or server actions
- Dynamic routes require `generateStaticParams`
- Image optimization uses `unoptimized: true`
- All pages must be statically renderable at build time

---

## Code Quality Checks

Run all validation checks from the project root:

### Validation Gate (All Checks)

```bash
npm run validate
```

Runs format:check → lint → typecheck in sequence.

### Individual Checks

```bash
# Check formatting (Prettier)
npm run format:check

# Format code (auto-fix)
npm run format

# Lint code (ESLint)
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Type checking (TypeScript)
npm run typecheck
```

### Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests with Playwright
npm run test:e2e
```

---

## Style Conventions

**Line length**: Max 100 characters per line
**Strings**: Use double quotes `"text"` (enforced by Prettier)
**Semicolons**: Required (enforced by Prettier)
**Indentation**: 2 spaces
**Types**: Strict typing required, avoid `any`
**Naming**: `camelCase` (vars/funcs), `PascalCase` (components/types), `UPPER_SNAKE_CASE` (consts)
**Imports**: Sorted automatically by ESLint
**Tailwind**: Classes sorted by prettier-plugin-tailwindcss

---

## Security

### Environment Variables

- **NEVER commit .env or .env.local** — Add to .gitignore
- Use environment variables for all secrets
- Use `.env.example` as template for required variables
- If initial prompt contains new env variables — **DON'T PUT** values to generated documents
- For static sites, only `NEXT_PUBLIC_*` variables are available in the browser

---

## Critical Rules

### General

- **Always type hint** — strict TypeScript, no `any`
- **Use semantic HTML** — proper heading hierarchy, landmarks, ARIA attributes
- **Optimize images** — use `next/image` with proper dimensions
- **Ensure accessibility** — keyboard navigation, screen reader support
- **Keep components small** — single responsibility, max ~100 lines

### Static Export

- **No server features** — no API routes, no SSR, no middleware
- **All routes must be static** — use `generateStaticParams` for dynamic routes
- **Test the build** — run `npm run build` to verify static export succeeds
- **Check output** — verify the `out/` directory contains expected pages

### Security

- **NEVER commit .env files**
- **NEVER hardcode API keys or secrets**
- **Sanitize user-generated content** — prevent XSS
- **Use HTTPS for external resources**

---

## Resources

### Documentation

- Next.js: https://nextjs.org/docs
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

### Key Project Files

- `next.config.ts` — Next.js configuration (static export settings)
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration
- `package.json` — Dependencies and scripts
- `components.json` — shadcn/ui configuration

---

## Response Approach

1. Understand the component requirements
2. Check existing patterns in the codebase
3. Implement with proper TypeScript types
4. Ensure responsive design with Tailwind
5. Verify accessibility
6. Run lint and type checks
7. Test the build succeeds with static export
