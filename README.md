# Munchies

E-commerce platform starter based on the public `tinloof/munchies` repository structure.

## Tech Stack

- Astro 5 SSR storefront on Cloudflare Workers/Pages
- Medusa v2 backend
- Sanity CMS integration hooks
- Orama-style search worker
- React, Tailwind CSS, Stripe-ready configuration

## Prerequisites

- Node.js >= 18
- pnpm 9+
- PostgreSQL
- Redis (optional)

## Quick Start

```bash
pnpm install
# Copy .env files in each app
pnpm dev
```

## Monorepo Structure

```text
apps/
├── web/            # Astro storefront
├── medusa-backend/ # E-commerce backend
└── search/         # Search service
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Start all apps |
| `pnpm build` | Build all apps |
| `pnpm typegen` | Generate types |
| `pnpm check` | Lint check |
| `pnpm fix` | Auto-fix lint |
