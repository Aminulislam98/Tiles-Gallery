# Tiles Gallery

A premium tile browsing platform built with Next.js. Browse, search and filter handmade artisan tiles from Morocco, Italy, Portugal and beyond.

**Live:** https://tiles-gallery-sigma.vercel.app

---

## Pages

**Home** — Hero banner with featured tiles and a call to action to explore the full collection.

**All Tiles** — The main gallery page. Browse all tiles with server-side search by title and filter by category. No client-side re-fetching — results update cleanly via URL search params.

**Tile Detail** — Individual tile page with full details, images and category information.

**About** — Company story, stats, values, team section, journey timeline and a bento grid of real interior spaces.

**Projects** — Portfolio of completed tile installations across residential, hospitality and commercial spaces. Includes a 4-step process section.

**Blog** — Journal page with a featured hero post, article card grid and newsletter section.

**Careers** — Open roles with department tags, perks grid and direct email apply links.

**Privacy Policy** — Full UK GDPR-compliant privacy policy with sticky sidebar contents nav.

**Terms of Service** — Legal terms covering orders, IP, liability and governing law.

**Cookie Policy** — Cookie categories table showing each cookie name, purpose and expiry, plus policy sections.

**Sign In** — Email/password login and Google OAuth. Includes form validation and error toasts.

**Register** — New account creation with the same auth options.

**Profile** — Protected page showing user details. Only accessible when logged in.

---

## Features

- Server-side search and category filtering using URL search params
- Google OAuth and email/password auth via Better Auth
- MongoDB session storage
- Protected routes based on session state
- Scroll-aware navbar — transparent on hero, frosted glass on scroll
- Avatar with hover name expansion animation
- Logout confirmation modal
- Toast notifications on sign in and sign out
- Fully responsive across mobile, tablet and desktop
- Consistent design system across all pages

---

## Built with

- Next.js 15 (App Router)
- Tailwind CSS
- HeroUI v3
- Better Auth
- MongoDB Atlas
- React Icons
- React Hot Toast
- Framer Motion

---

## Running locally

```bash
npm install
npm run dev
```

Add a `.env.local` file:

```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

Made by Aminul Islam
