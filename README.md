# EVYA - Eskisini Ver Yenisini Al

Trade-in platformu - Eski cihazlarınızı değerlendirin, yeni ürünlerle takas edin.

## Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Backend**: NestJS 11, Prisma 6, MySQL
- **Frontend**: Next.js 15, React 19, Tailwind CSS, shadcn/ui
- **Auth**: JWT + Refresh Tokens
- **Payments**: iyzico integration

## Project Structure

```
├── apps/
│   ├── api/          # NestJS Backend API
│   └── web/          # Next.js Frontend
├── packages/
│   └── database/     # Prisma schema & client
├── openapi.yaml      # API specification
└── docker/           # Docker configuration
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+
- MySQL 8+

### Installation

```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm db:generate

# Push database schema
pnpm db:push

# Start development servers
pnpm dev
```

### Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

## API Documentation

API documentation is available at `/docs` when running the API server.

## Domains

- **API**: api.eskisiniveryenisinial.com
- **Web**: eskisiniveryenisinial.com

## License

Proprietary - All rights reserved.
