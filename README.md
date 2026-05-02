# Tiles Gallery

A premium artisan tile discovery platform where users can browse, search and filter handmade tiles from around the world — from Moroccan zellige to Italian terracotta.

**Live URL:** [tiles-gallery.vercel.app](https://tiles-gallery.vercel.app)

---

## Purpose

Tiles Gallery was built to showcase a curated collection of premium handmade tiles across multiple categories. Users can search and filter tiles, view detailed product pages, and manage their profile — all within a clean, production-level UI.

---

## Key Features

- Browse 1,200+ artisan tiles across 8 categories
- Search and filter by title and category (server-side filtering)
- Google OAuth and email/password authentication via Better Auth
- Protected profile page with session-based access
- Responsive design across mobile, tablet and desktop
- Logout confirmation modal
- Toast notifications on sign in and sign out
- Static pages — About, Projects, Blog, Careers, Privacy, Terms, Cookies

---

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 15 (App Router) |
| Styling        | Tailwind CSS            |
| UI Components  | HeroUI v3               |
| Authentication | Better Auth             |
| Database       | MongoDB Atlas           |
| Image Hosting  | Unsplash                |
| Icons          | React Icons             |
| Notifications  | React Hot Toast         |
| Deployment     | Vercel                  |

---

## NPM Packages

```bash
next
react
react-dom
tailwindcss
@heroui/react
better-auth
mongodb
react-icons
react-hot-toast
framer-motion
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Environment Variables

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Project Structure

```
src/
  app/
    page.jsx          # Home
    allTiles/         # Tile gallery with search & filter
    about/            # About page
    projects/         # Projects portfolio
    blog/             # Journal
    careers/          # Job listings
    privacy/          # Privacy policy
    terms/            # Terms of service
    cookies/          # Cookie policy
    login/            # Sign in
    register/         # Sign up
    profile/          # User profile (protected)
  components/
    shared/           # Navbar, Footer
    ui/               # CategoryButton, SearchInput, LogoutModal
  lib/
    auth.js           # Better Auth config
    auth-client.js    # Client-side auth
```

---

Built by Aminul Islam
