# NeuroTech @ UVA

**The official website for NeuroTech at the University of Virginia**

A research-forward club website at the intersection of neuroscience and engineering, featuring a "Neural Cartography" design language — brain atlas overlays, EEG waveform animations, and bioluminescent accent colors — built with Next.js and powered by a Sanity CMS backend.

## Live Site

> **[neurotechuva.com](https://neuro-tech-uva.vercel.app)**

## Features

- **EEG Waveform Animations** — Animated SVG lines mimicking EEG signal traces used as section dividers and decorative elements
- **Sanity CMS Studio** — Full content management at `/studio` for events, projects, resources, team members, and site settings
- **Dynamic Events Page** — Calendar view with modal event details, upcoming events timeline, and past events archive
- **Projects Showcase** — R&D project cards with tech stack tags, status indicators, and team lead info
- **Resources Library** — Filterable resource cards for guides, repos, downloads, and slides
- **About & Leadership** — Team member profiles with orderable drag-and-drop, growth timeline, and club values
- **Newsletter Signup** — Email collection for research updates and event invites
- **Scroll Animations** — Staggered fade-in reveals, count-up statistics, and hover effects via Framer Motion
- **Responsive Design** — Mobile-first layouts across all pages with collapsible navigation

## Architecture

```
User → Next.js App Router → Sanity CMS (GROQ queries) → Rendered Pages
              ↓
       /studio route → Sanity Studio (embedded CMS dashboard)
```

### Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, stats bar, about preview, active projects, upcoming events, newsletter |
| `/about` | Mission, growth timeline, leadership team, club values |
| `/projects` | Active R&D project grid with tech stack tags and status |
| `/events` | Calendar view, event modals, upcoming & past events |
| `/resources` | Filterable resource cards with category pills |
| `/studio` | Embedded Sanity Studio CMS |

### Sanity Content Types

| Schema | Purpose |
|--------|---------|
| `teamMember` | Leadership profiles (orderable) |
| `event` | Club events with dates, descriptions, RSVP info |
| `generalMeeting` | Pinned recurring meeting card |
| `project` | R&D projects with status and tech stack |
| `resource` | Guides, downloads, and reference materials |
| `timelinePhase` | Roadmap / growth timeline phases |
| `siteSettings` | Global site configuration |

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 16** (App Router) |
| CMS | **Sanity v5** (embedded studio at `/studio`) |
| Styling | **Tailwind CSS v4** + custom CSS variables |
| Animation | **Framer Motion** |
| UI Components | **shadcn/ui** + Radix primitives |
| Icons | **Lucide React** |
| Language | **TypeScript** |
| Package Manager | **pnpm** |
| Deployment | **Vercel** |

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm
- A Sanity project (free at [sanity.io](https://www.sanity.io))

### Setup

```bash
# Clone the repo
git clone git@github.com:Aarush-Pen/NeuroTech-UVA.git
cd NeuroTech-UVA

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Sanity project ID and dataset:
#   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
#   NEXT_PUBLIC_SANITY_DATASET=production
```

### Running Locally

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### CMS Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the Sanity Studio dashboard where you can manage all site content — events, projects, resources, team members, and site settings.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
NeuroTech/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── events/         # Events page
│   │   ├── projects/       # Projects page
│   │   ├── resources/      # Resources page
│   │   └── studio/         # Embedded Sanity Studio
│   ├── components/         # React components
│   │   ├── Hero.tsx        # Hero section with EEG animation
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   ├── Footer.tsx      # Site footer
│   │   ├── StatsBar.tsx    # Animated statistics strip
│   │   ├── EEGWaveform.tsx # SVG waveform animation
│   │   ├── CountUp.tsx     # Number counter animation
│   │   ├── SectionReveal.tsx # Scroll-triggered reveals
│   │   ├── Newsletter.tsx  # Email signup form
│   │   ├── About/          # About page components
│   │   ├── Events/         # Events page components
│   │   ├── Projects/       # Projects page components
│   │   ├── Resources/      # Resources page components
│   │   └── ui/             # shadcn/ui primitives
│   ├── sanity/
│   │   ├── schemas/        # Content type definitions
│   │   └── components/     # Custom Studio components
│   └── lib/                # Utilities and Sanity client
├── sanity.config.ts        # Sanity Studio configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

---

*Built for NeuroTech @ UVA — a student organization at the University of Virginia*
