# SLC Eat Drink

Local directory MVP for Salt Lake City eat & drink spots — filtered for how you actually go out (patio, late kitchen, Utah drink license, brunch, and more).

**Site:** [https://slceatdrink.com](https://slceatdrink.com)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
cd eatdrinkslc-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero + search/filters + place grid |
| `/place/[slug]` | Listing detail, Maps/website links, claim & feature CTAs |
| `/advertise` | Featured $49/mo pitch + claim/feature forms |
| `/about` | Short local-directory about |

## Soft-launch checklist

1. **Post in SLC Facebook groups** — foodie / “what’s good in SLC” / neighborhood groups with a short “filter for patio + late kitchen” pitch and link.
2. **DM 5 venues for featured spots** — start with patio / late-night / brewery owners; offer first month free or soft-launch $49/mo.
3. **Domain** — https://slceatdrink.com
4. **Google Business later** — claim a Business Profile for the site brand once you have a real contact address / phone.
5. **Verify seed amenities** — call or check current hours/patio/license before pitching accuracy to owners.
6. **Collect claim leads** — forms open mailto to `hello@slceatdrink.com`.

## Monetization (v1 UI only)

- Featured listing: **$49/mo** (badge + sort-first)
- Claim listing: free lead form (mailto / client success state)
- No Stripe yet

## Seed data note

Listings are real SLC venues with publicly known names/addresses. Amenity flags (late kitchen, dog patio, etc.) are best-effort and may be outdated. Card images are **Unsplash generic food/drink** placeholders — not venue photography.

## Contact

hello@slceatdrink.com
