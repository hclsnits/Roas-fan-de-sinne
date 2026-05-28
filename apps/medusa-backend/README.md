# @apps/medusa-backend

Medusa v2 e-commerce backend for the Munchies platform.

## Overview

This is the commerce engine powering the storefront, built with:

- Medusa v2 – modern modular e-commerce framework
- Admin Dashboard – built-in admin UI for products, orders, and customers
- Sanity Sync – product, collection, and category synchronization hooks
- Stripe Payments – secure payment processing
- Cached Queries – optional Redis-backed query caching

## Getting Started

### Prerequisites

- Node.js >= 20
- PostgreSQL database
- Redis (optional, for caching)
- Stripe account

### Environment Variables

Create a `.env` file in this directory from `.env.template`.

### Development

From the monorepo root:

```bash
pnpm dev --filter=@apps/medusa-backend
```

Or from this directory:

```bash
pnpm dev
```

- Backend API: http://localhost:9000
- Admin Dashboard: http://localhost:9000/app
