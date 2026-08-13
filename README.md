# My Portfolio

A personal portfolio site built with Next.js 15, Tailwind CSS v4, shadcn-style UI primitives, Motion, and a React Three Fiber hero.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit your real content

All placeholder content lives in typed files under [`data/`](data) — edit these, not the components:

- [`data/profile.ts`](data/profile.ts) — name, role, tagline, bio, career goals, interests, email, socials
- [`data/skills.ts`](data/skills.ts) — skills grouped by category (Programming Languages, Frameworks, Databases, Cloud Platforms, Tools, Other)
- [`data/projects.ts`](data/projects.ts) — project cards: title, description, tech, image, GitHub/live links, your individual contribution
- [`data/education.ts`](data/education.ts) — institutions, degrees, achievements, coursework
- [`data/experience.ts`](data/experience.ts) — internships, freelance, volunteer, leadership entries (rendered as a timeline)

Every placeholder is wrapped in `[brackets]` so it's easy to find and replace with `Ctrl+F` / project-wide search.

Project screenshots go in [`public/projects/`](public/projects) — replace `placeholder-1.svg` etc. with real images (`.png`/`.jpg`/`.webp`) and update the `image` field in `data/projects.ts`.

## Add your resume PDF

Drop your resume at `public/resume.pdf` (exact filename). The "Download CV" button already links to `/resume.pdf` via `profile.resumeUrl` in `data/profile.ts` — change that value if you use a different filename.

## Set up the contact form (Resend)

The contact form posts to `app/api/contact/route.ts`, which sends email via [Resend](https://resend.com). Without an API key the route returns a clear "not configured" error instead of failing silently.

1. Create a free account at [resend.com](https://resend.com) and generate an API key.
2. Create `.env.local` in the project root:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
3. By default the route sends from `onboarding@resend.dev` (Resend's shared sandbox sender, works without domain verification) to the email in `data/profile.ts`. To send from your own domain, verify it in Resend and update the `from` address in `app/api/contact/route.ts`.
4. Restart the dev server after adding the env var.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the `RESEND_API_KEY` environment variable in the Vercel project settings (Settings → Environment Variables).
4. Deploy — Vercel auto-detects Next.js.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Radix UI primitives · Motion · React Three Fiber / drei / three.js · next-themes · react-hook-form + zod · Resend · lucide-react

## Notes

- The 3D hero blob is lazy-loaded client-side only and swaps to a static gradient on small screens (`<768px`) and when the OS `prefers-reduced-motion` setting is on.
- Dark mode is the default theme; toggle in the navbar.
- Run `npm run build` before deploying to catch type or lint errors early.
