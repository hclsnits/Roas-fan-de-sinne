# @apps/web

Astro 5 SSR storefront on Cloudflare.

## Tech Stack

- Astro 5 + `@astrojs/cloudflare`
- React + Tailwind CSS
- Sanity visual editing and embedded studio route
- Medusa JS SDK
- Stripe checkout-ready configuration

## Env Vars

```bash
PUBLIC_SANITY_STUDIO_DATASET=
PUBLIC_SANITY_STUDIO_PROJECT_ID=
SANITY_TOKEN=
MEDUSA_BACKEND_URL=
MEDUSA_PUBLISHABLE_KEY=
PUBLIC_STRIPE_KEY=
CF_ZONE_ID=
CF_TOKEN=
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Dev server on :3000 |
| `pnpm build` | Build for production |
| `pnpm deploy` | Build + deploy to Cloudflare |
| `pnpm typegen` | Generate Sanity types |
