# My Portfolio

A personal portfolio site built with Next.js 15, Tailwind CSS v4, Radix-based UI primitives, Motion, and a React Three Fiber hero.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit your real content

All content lives in typed files under [`data/`](data) — edit these, not the components:

- [`data/profile.ts`](data/profile.ts) — name, role, tagline, bio, career goals, interests, email, social links
- [`data/skills.ts`](data/skills.ts) — skills grouped by category (Programming Languages, Web Development, Mobile Development, AI / ML, Databases, Tools & Technologies, Other Technical Skills, Soft Skills). Each skill/tech name needs a matching entry in [`lib/skill-icons.tsx`](lib/skill-icons.tsx) to get a logo — add one there when you add a new skill or project tech that isn't already mapped, otherwise it falls back to a generic icon.
- [`data/projects.ts`](data/projects.ts) — project cards: title, description, tech, image, GitHub/live links, your individual contribution. Rendered as an interactive stacked deck (tap the front card to dismiss it and bring up the next one).
- [`data/education.ts`](data/education.ts) — institutions, degrees, achievements, coursework
- [`data/experience.ts`](data/experience.ts) — internships, freelance, volunteer, leadership entries (rendered as a timeline)

Project screenshots go in [`public/projects/`](public/projects) — add your image there and reference it via the `image` field in `data/projects.ts`.

## Add your resume PDF

Your resume lives at `public/resume.pdf`. The "Download CV" button links to `/resume.pdf` via `profile.resumeUrl` in `data/profile.ts` — update that value if you ever rename the file.

## Set up the contact form (Resend)

The contact form posts to `app/api/contact/route.ts`, which sends email via [Resend](https://resend.com). Without an API key the route returns a clear "not configured" error instead of failing silently.

Already configured for local development: `.env.local` (gitignored, never committed) holds `RESEND_API_KEY`, and the route sends from `contact@harshanapraveen.best` (verified domain) to the address in `data/profile.ts`, with both a plain-text and HTML version of the message.

If you ever need to set this up again (e.g. a fresh clone):

1. Create `.env.local` in the project root:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
2. The `from` address in `app/api/contact/route.ts` must be on a domain verified in your [Resend dashboard](https://resend.com/domains) — check SPF, DKIM, *and* DMARC all show fully verified, not just pending.
3. Restart the dev server after adding the env var.

**Note on deliverability**: a freshly verified sending domain has no reputation yet, so early emails may land in spam regardless of correct setup — this typically improves after the domain has a short sending history.

**For Vercel deployment**, `.env.local` is gitignored and never gets pushed — add `RESEND_API_KEY` under Vercel Project Settings → Environment Variables instead (see below).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the `RESEND_API_KEY` environment variable in the Vercel project settings (Settings → Environment Variables).
4. Deploy — Vercel auto-detects Next.js.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Radix UI primitives · Motion · React Three Fiber / drei / three.js · next-themes · react-hook-form + zod · Resend · lucide-react + react-icons (tech logos)

## Notes

- The 3D hero blob is lazy-loaded client-side only and swaps to a static gradient on small screens (`<768px`) and when the OS `prefers-reduced-motion` setting is on.
- Scrolling is handled by a single custom controller ([`components/scroll-controller.tsx`](components/scroll-controller.tsx)): nav-link clicks animate quickly to their target, while mouse wheel/trackpad/arrow-key scrolling is intentionally slowed and eased. It's disabled on touch devices (native scrolling is left alone there) and respects `prefers-reduced-motion`.
- Dark mode is the default theme; toggle in the navbar. Both themes have independently tuned color tokens for contrast — if you touch `app/globals.css`, be careful not to regress the other theme.
- Run `npm run build` before deploying to catch type or lint errors early.
