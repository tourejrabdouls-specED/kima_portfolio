# kima_portfolio

## Overview

`kima_portfolio` is a modern, responsive portfolio website built with Next.js (App Router), Tailwind CSS, Prisma (SQLite), and a simple admin message management flow.

Key capabilities:
- Public home page with hero, about, skills, projects, contact form, and footer
- Serverless REST API for contact messages (`POST /api/contact`, `GET/PATCH/DELETE /api/contact`)
- Admin authentication via API key & client-side cookie in `/admin` routes
- Prisma ORM with SQLite database for message persistence
- Unit tests for API route behavior using Vitest

## Features

- Landing page with custom sections (Hero, About, Skills, Projects, Contact)
- Interactive contact form that persists messages in database
- Admin login page (`/admin/login`) with `NEXT_PUBLIC_ADMIN_KEY` convenience default
- Admin panel (`/admin/messages`) to list messages, mark read/unread, delete
- Middleware-based protection in `src/middleware.ts` for `/admin/*` except `/admin/login`
- Server-side validation of contact payload and admin operations in `src/app/api/contact/route.ts`

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma + SQLite
- Vitest for tests
- ESLint for linting

## Repository structure

- `src/app/page.tsx` - main portfolio UI and contact form client logic
- `src/app/admin/login/page.tsx` - admin login page and cookie setter
- `src/app/admin/messages/page.tsx` - admin message list, toggle read, delete
- `src/app/api/contact/route.ts` - contact API (POST/GET/PATCH/DELETE)
- `src/lib/contact.ts` - email validation helper
- `src/middleware.ts` - admin route guard
- `prisma/schema.prisma` - message model
- `src/app/api/contact/route.test.ts` - API route tests

## Setup

1. Clone repository
   ```bash
   git clone <repo-url>
   cd kima_portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Initialize Prisma and DB
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. Environment variables

   Create a `.env` file at project root with:

   ```env
   ADMIN_KEY=your-secret-admin-key
   NEXT_PUBLIC_ADMIN_KEY=your-secret-admin-key
   DATABASE_URL="file:./dev.db"
   ```

   Defaults if not set:
   - `ADMIN_KEY` => `changeme123`
   - `NEXT_PUBLIC_ADMIN_KEY` => `changeme123`

5. Run development server
   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000`

## API contract

### POST /api/contact
- Public endpoint
- Body: `{ name, email, message }`
- Validations:
  - required fields
  - string types
  - email format
  - length limits (`name <= 100`, `email <= 255`, `message <= 1000`)
- Success: `{ success: true, id }`

### GET /api/contact
- Admin only (`x-admin-key` header required)
- Returns messages sorted by `createdAt desc`

### PATCH /api/contact
- Admin only
- Body: `{ id, read }`
- Updates `read` state

### DELETE /api/contact?id=ID
- Admin only
- Deletes message by id

## Admin flow

1. Visit `/admin/login`
2. Enter key (from env var or default `changeme123`)
3. Sets cookie `admin_key` and redirects to `/admin/messages`
4. Admin messages endpoint uses header or cookie auth

## Middleware auth

- `src/middleware.ts` checks `/admin/*` (excluding `/admin/login`)
- Accepts either `x-admin-key` header or `admin_key` cookie matching `ADMIN_KEY`

## Tests

Run all tests:
```bash
npm test
npm run test:run
```

Test coverage includes:
- `validateAdmin` logic
- API authorization failures and success paths for GET/PATCH/DELETE
- Contact payload validation for POST

> Note: `src/app/api/contact/route.test.ts` currently imports `ADMIN_KEY`; route exports may need alignment with the code in `src/app/api/contact/route.ts` (`getAdminKey`) for all tests to run without modification.

## Linting

```bash
npm run lint
```

## Build and production

```bash
npm run build
npm run start
```

## Deployment

- Suitable for Vercel deploy
- Set the same environment variables in the platform UI
- Ensure `ADMIN_KEY` is strong and not default

## Future improvements

- Add server-side pagination and filtering for message list
- Add reCAPTCHA or honeypot anti-spam on contact form
- Add better error UI states on client
- Add Cypress/E2E tests for full admin + contact workflow
- Add image upload and CMS for dynamic profile and projects

## Credits

Engineered by C. Kima S.J. Wea portfolio template.


