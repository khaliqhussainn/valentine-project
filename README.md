# Valentine's Week Surprise

A romantic Valentine's Week website built with Next.js, Tailwind CSS, and Framer Motion. Each day of Valentine's Week unlocks a new surprise page with animations, love letters, and interactive elements.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure the `.env` file at the project root:

```env
NEXT_PUBLIC_GIRLFRIEND_NAME=Maryam
NEXT_PUBLIC_SENDER_NAME=Begum
```

3. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
  config/valentine.ts   - Day configs (messages, unlock status, themes)
  app/page.tsx           - Homepage with hero section & day grid
  app/day/rose-day/      - Rose Day surprise page
  components/
    AcceptRose.tsx       - Interactive Yes/No rose acceptance game
    FloatingPetals.tsx   - Falling rose petal particles
    HeartParticles.tsx   - Floating heart particles
    GlowingRose.tsx      - Animated glowing rose
    LetterReveal.tsx     - Letter-by-letter name reveal with heartbeat
    TypewriterText.tsx   - Typewriter text effect
    Navbar.tsx           - Navigation bar
    DayCard.tsx          - Valentine's Week day card
```

## Adding a New Day's Surprise

1. Open `src/config/valentine.ts`
2. Set `unlocked: true` for the day you want to activate
3. Fill in the `tagline` and `message` for that day
4. Create a new page at `src/app/day/<day-slug>/page.tsx`

### Valentine's Week Schedule

| Day        | Slug             | Date   |
| ---------- | ---------------- | ------ |
| Rose Day   | `rose-day`       | Feb 7  |
| Propose Day| `propose-day`    | Feb 8  |
| Chocolate Day | `chocolate-day` | Feb 9 |
| Teddy Day  | `teddy-day`      | Feb 10 |
| Promise Day| `promise-day`    | Feb 11 |
| Hug Day    | `hug-day`        | Feb 12 |
| Kiss Day   | `kiss-day`       | Feb 13 |
| Valentine's Day | `valentines-day` | Feb 14 |

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Google Fonts** (Playfair Display, Great Vibes)

## Build

```bash
npm run build
npm start
```
I remember the day you saw me, I remember the day you smiled at me, I remember the day you loved me and so I will always remember to wish you, a very happy chocolate day! Lovely chocolate and lovely you, and lovely are the things you do, but the loveliest is the friendship of the two, one is me and other is you!