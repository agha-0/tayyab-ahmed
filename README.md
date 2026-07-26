## Tayyab Ahmed Portfolio

A personal portfolio for `Tayyab Ahmed`, built with Next.js, Tailwind CSS, and a content-driven structure for presenting senior full stack development experience.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer

## Getting Started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the portfolio.

Main profile content lives in:

- `src/content/site.ts`
- `src/content/hero.ts`
- `src/content/experience.ts`
- `src/content/projects.ts`
- `src/content/skills.ts`
- `src/content/social.ts`
- `src/content/sections.ts`

## Resume

The downloadable resume is served from:

- `public/Muhammad-Tayyab-Ahmed-Resume-Full-Stack.pdf`

## Contact Form

The contact form posts to `src/app/api/contact/route.ts` and requires SMTP environment variables to send mail successfully.

Required environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

