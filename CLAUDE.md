# Way Back Home — Nan Tourism Website

## What this is
A bilingual (English/Thai) tourism website for Nan province, Thailand, branded as **"Way Back Home" / "เยือนบ้านเฮา"**. It's a community project that brings people on an immersive journey in southern Nan, experiencing local life. The tone is personal and local — like a friend sharing their hometown, not a tourism board. The Thai tagline translates roughly to "wanting you to feel like when we were kids growing up here."

**Live site**: https://nan-tourism.vercel.app
**Repo**: https://github.com/Nitrote/nan-tourism

## Tech stack
- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS 4** with PostCSS
- **PostgreSQL** via Prisma 5 ORM, hosted on **Neon** (ap-southeast-1)
- **NextAuth 4** (credentials provider) for admin auth
- **Vercel** for hosting (auto-deploys on push to master)
- Node.js 20.8.1 on the dev machine (slightly under Next.js minimum but works)

## Color palette (important — use these, not the old ones)
Four-color scheme. Each has `-light`, `-dark`, and `-tint` variants defined in globals.css:
- **Sky Blue** `#457B9D` — hero, blog, contact, travel info, navigation
- **Forest Green** `#2A9D8F` — places, about, admin UI
- **Golden Sunflower** `#FFD300` — activities, highlights
- **Sunset Orange** `#FF006E` — tours, CTAs, call-to-action sections

The homepage flows top-to-bottom through these colors: sky → forest → golden → sunset.

**OLD variables that NO LONGER EXIST** (never use these):
`--color-primary`, `--color-primary-light`, `--color-primary-dark`, `--color-accent`, `--color-accent-light`, `--color-lavender`, `--color-coral-tint`, `--color-orange-tint`, `--color-lavender-tint`, `--color-terracotta`

## Design principles
- **No emojis or icons** — removed everywhere. Use colored dots, pill badges, or nothing.
- **Pill badges** for category labels (inline-block, colored bg, white text, rounded-full, uppercase tracking-wider)
- **Colored card borders** (border-t-[3px] or border-l-4) matching section color
- **Tint backgrounds** alternate between sections for visual rhythm
- **Rounded-2xl** cards, rounded-full buttons
- **Local, personal copy** — "Come see for yourself" not "Explore this destination". The translations.ts file has the full voice.
- **Generous spacing** — py-24 to py-32 on sections
- Reference site for mood: https://nanuanchun.com — earthy, authentic, generous whitespace

## Project structure
```
src/
├── app/
│   ├── page.tsx              # Homepage (client component, fetches /api/home-data)
│   ├── layout.tsx            # Root layout with LanguageProvider
│   ├── globals.css           # Color palette, skeleton animation, fade-in
│   ├── about/                # About Nan (forest green theme)
│   ├── places/               # Places listing + [slug] detail (forest green)
│   ├── activities/           # Activities listing + [slug] detail (golden)
│   ├── blog/                 # Blog listing + [slug] detail (sky blue)
│   ├── tours/                # Tour packages (sunset orange)
│   ├── travel-info/          # Getting here guide (sky blue)
│   ├── contact/              # Contact form + info (sky blue)
│   ├── admin/                # Protected admin dashboard
│   │   ├── login/            # NextAuth login
│   │   ├── posts/            # Blog CRUD
│   │   ├── places/           # Places CRUD
│   │   └── activities/       # Activities CRUD
│   └── api/                  # All API routes
├── components/
│   ├── AutoScrollCarousel.tsx # Infinite scroll carousel with arrow buttons
│   ├── LanguageProvider.tsx   # TH/EN context, persists to localStorage
│   ├── layout/               # Navbar (transparent, transitions on scroll), Footer
│   └── admin/                # Admin forms (PostForm, PlaceForm, ActivityForm, etc.)
└── lib/
    ├── auth.ts               # NextAuth config
    ├── prisma.ts             # Prisma client singleton
    ├── translations.ts       # All static text (EN/TH) — the "voice" of the site
    └── useTranslation.ts     # Hook: t() for static text, localizedField() for DB content
```

## Database
- PostgreSQL on Neon (connection string in .env, not committed)
- Models: User, Post, Place (activities are Places with category="activity")
- All content models have bilingual fields (title/titleTh, description/descriptionTh, etc.)
- Admin login: admin@nantourism.com / admin123 (CHANGE THIS IN PRODUCTION)

## Key features
- **Bilingual i18n** — TH/EN toggle in navbar, all static text in translations.ts, DB content has Thai fields
- **Auto-scrolling carousel** — for places and activities on homepage. Uses requestAnimationFrame + transform. Arrow buttons appear on hover. Repeats items 4x for infinite feel. Pauses on hover, 3s delay before resuming.
- **Skeleton loaders** — shimmer placeholders on homepage before content loads, then fade-in
- **Image upload** — POST /api/upload saves to public/uploads/, inserts img tag in blog editor
- **Admin dashboard** — full CRUD for posts, places, activities with Thai field support

## What's NOT done yet (discussed but deferred)
- **Section transition dividers** — tried SVG mountains/river/weave but they looked artificial. Need real image assets (mountain silhouette PNGs, weave texture photos) from the user to implement properly.
- **Scroll-driven animations** — built useScrollAnimations.ts with useInView/useScrollProgress hooks, tried parallax hero + ScrollReveal components. Removed for now but the approach was sound — revisit when divider assets are ready.
- **Image hosting** — uploads go to public/uploads/ which doesn't persist on Vercel. Need Cloudinary or Vercel Blob.
- **Contact form backend** — currently fakes submission. Wire to email service (Resend/SendGrid).
- **Search** — no search functionality yet
- **Map page** — discussed but not built
- **Business directory** — Phase 2 revenue feature
- **Rich text editor** — blog editor is raw HTML textarea, TipTap would improve it
- **Custom domain** — still on .vercel.app

## Deployment
- `git push` to master auto-deploys on Vercel
- Vercel CLI installed (`vercel --prod` works from terminal)
- Build script: `prisma generate && next build`
- Environment variables needed: DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL

## User profile
Student/early-career dev, studies at Ritsumeikan, knows Python + React, newer to Docker/infra, uses PowerShell on Windows. Has Node 20.8.1.
