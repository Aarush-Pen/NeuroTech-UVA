# NeuroTech @ UVA — Front-End Product Requirements Document
**Version 2.0 | Design-Led Edition**

---

## 1. Vision & Concept

NeuroTech @ UVA is a research-forward, interdisciplinary student club at the intersection of neuroscience and engineering. The website must feel like it was designed by someone who has both a deep appreciation for academic rigor and a sharp aesthetic sensibility — not a Tailwind template, not a generic dark-mode SaaS site.

**Core Aesthetic Direction: "Neural Cartography"**
The site draws visual inspiration from brain atlas maps, EEG signal waveforms, and scientific illustration. Think: fine-line anatomical diagrams layered over a deep midnight-ink background, with bioluminescent accent colors. The result is something that feels like *a research lab crossed with a high-end editorial publication*.

---

## 2. Design Identity

### 2.1 Color System
| Role | Value | Usage |
|------|-------|-------|
| Background Primary | `#080C14` | Deep ink navy — main canvas |
| Background Secondary | `#0D1421` | Slightly lighter for cards/sections |
| Surface | `#111827` | Card surfaces |
| Border | `#1E2D45` | Subtle borders, grid lines |
| Accent Primary | `#00E5C8` | Bioluminescent teal — CTAs, hover states |
| Accent Secondary | `#7B61FF` | Violet — secondary highlights, tags |
| Accent Tertiary | `#FF6B35` | Warm coral — used sparingly for urgency |
| Text Primary | `#E8EDF5` | Near-white body text |
| Text Secondary | `#6B7A99` | Muted captions, metadata |
| Signal Line | `#00E5C8` at 30% opacity | Decorative EEG waveforms |

### 2.2 Typography
- **Display / Hero:** `"Neue Montreal"` or `"Cabinet Grotesk"` — wide-set, contemporary, slightly condensed. Used at large sizes with tight letter-spacing. If not available: `"DM Sans"` at 600 weight.
- **Body:** `"Lora"` (serif) — creates academic authority in body text, an unexpected pairing with the dark futuristic aesthetic that makes it feel like a scholarly publication.
- **Monospace / Code/Data:** `"JetBrains Mono"` — used for tech stack tags, timestamps, frequency data labels.
- **Scale:** Fluid type scale using `clamp()`. H1: 72–96px, H2: 40–56px, H3: 24–32px, Body: 16–18px.

### 2.3 Signature Visual Elements
These are the elements that make the site *instantly recognizable and unlike anything else*:

1. **EEG Waveform Dividers** — Instead of horizontal rules, sections are separated by a single animated SVG line that mimics an EEG signal trace, slowly scrolling from right to left.
2. **Brain Atlas Grid Overlay** — A very subtle, low-opacity anatomical line-art pattern (SVG, not an image) appears in hero sections as a texture layer. Think fine-line brain cross-section outlines, barely visible.
3. **Signal Noise Grain** — A CSS-only film grain texture overlays the entire page at ~4% opacity to prevent the flat "digital" look.
4. **Frequency Tags** — Category tags and labels on cards are styled like frequency readings (e.g., `[8–12 Hz]`, `[Alpha]`, `[Motor Cortex]`) in monospace font with a blinking cursor.
5. **Data Callouts** — Statistics and key numbers are displayed in a large, glowing monospace format, as if they were oscilloscope readings.
6. **Asymmetric Grid Breaks** — At least 2 sections per page break from the standard 12-column grid. One column extends to the bleed edge; text wraps around an oversized number or graphic.

### 2.4 Motion Principles
- **Page entry:** Content fades up with staggered delays (60ms per element). No bouncing or overly playful springs.
- **EEG line:** Continuously animates via `stroke-dashoffset` loop on a path that spans the full viewport width.
- **Card hover:** Cards lift with `translateY(-4px)` + a faint teal glow on the border (`box-shadow`). Duration: 200ms ease-out.
- **Number counters:** Statistics count up when scrolled into view using an Intersection Observer.
- **Section reveals:** Elements enter with `opacity: 0 → 1` and `translateY(24px → 0)`. No 3D transforms. Subtle and deliberate.
- **Cursor:** Custom cursor — a small circle that scales up on hover over interactive elements.

---

## 3. Page Specifications

### 3.1 Home Page

**Section: Hero**
- Full-viewport height
- Club name `NEUROTECH @ UVA` in display font, all caps, set at 80–96px
- Tagline beneath: *"Engineering the future of the mind."* in Lora italic
- Faint brain atlas SVG overlay behind text, barely perceptible
- Animated EEG waveform running across the bottom of the hero
- Two primary CTAs: `[Join the Lab →]` (teal) and `[Explore Research →]` (ghost/outlined)
- Subtle animated background: particles or dot-grid that slowly shifts, representing neural firing patterns

**Section: Stats Bar**
- Full-width strip with 3–4 key numbers (e.g., "24 Active Members", "3 R&D Projects", "Est. 2024")
- Numbers in large glowing monospace, labels in small caps beneath
- Background: slightly lighter than page bg, full bleed

**Section: About Preview**
- Split layout: left 60% is text (mission, 2–3 sentences), right 40% is an asymmetric visual block
- Visual: a stylized neuron SVG illustration or abstract node-graph pattern, teal on dark
- CTA: `[Our Story →]`

**Section: Active Projects Preview**
- Horizontal scroll or 3-column card grid
- Each card: project name, one-line description, tech stack tags in monospace, a small colored status indicator (`● Active Research`)
- Cards use the frequency-tag styling for category labels

**Section: Upcoming Events**
- Max 3 events displayed
- Each event: Date displayed large in monospace on the left (like `FEB 22`), title and description right
- Timeline-style vertical connector line between events
- RSVP link on each

**Section: Newsletter Signup**
- Dark card with teal accent border on the left side
- Single email field + submit button
- Microcopy: *"Get research updates, event invites, and resource drops."*

**Footer**
- Dark, minimal
- Logo mark + club name left
- Links: About / Projects / Events / Resources / Discord
- Social icons: GitHub, Discord, Instagram, LinkedIn
- UVA affiliation line: *"A student organization at the University of Virginia"*
- Bottom bar: copyright + a subtle EEG line as the footer's top border

---

### 3.2 About Page

**Section: Mission Hero**
- Oversized pull-quote typeset in Lora italic, full-width, centered
- Faint vertical grid lines in background (like graph paper)

**Section: Mission & Vision**
- Two-column: Mission left, Vision right
- Divided by a vertical EEG line element

**Section: Growth Timeline**
- Horizontal scrolling timeline on desktop, vertical on mobile
- 3 phases: Phase 1 (Foundation), Phase 2 (Research Expansion), Phase 3 (Publication & Community Impact)
- Each phase: large phase number in ghost style (outlined, no fill), milestone label, short description
- Active phase has teal accent, future phases are muted

**Section: Team**
- Grid of team cards (3 cols desktop, 2 tablet, 1 mobile)
- Card: circular headshot placeholder with subtle teal ring on hover, name in display font, role in monospace tag style, major and bio in Lora
- Cards have a slight stagger on page load

**Section: Values**
- Three values displayed in a large asymmetric layout
- Each value: large number (`01`, `02`, `03`) in oversized ghost text, value title, description

---

### 3.3 Resources Page

**Section: Hero**
- Simple: page title + subtitle
- EEG divider below

**Section: Search & Filter**
- Sticky filter bar below the nav
- Category pill filters: All / EEG Guides / Signal Processing / Safety Protocols / Hardware Manuals
- Active filter: teal background, white text
- Search input: minimal, borderless with a bottom-border only style

**Section: Resource Cards Grid**
- 3-column grid (desktop), 2 (tablet), 1 (mobile)
- Each card: document-type icon (SVG), category tag in monospace, title in display font, short description in Lora, file size, a `[Download PDF ↓]` button
- On hover: card lifts, download button glows teal

**Section: Featured Resource**
- One resource per category can be "featured" — full-width card with a large visual panel on the left and details on the right

---

### 3.4 Events Page

**Section: Hero**
- Page title + current month/year displayed in monospace

**Section: Calendar View**
- Custom-designed calendar grid (do NOT use a third-party calendar widget)
- Days with events: teal dot indicator
- Selected day: highlighted with teal border
- Mobile: collapses to a vertical event list

**Section: Event Detail**
- Clicking an event opens a modal (not a new page)
- Modal: event name, date/time in large monospace, location, full description, speaker/lead info, RSVP button
- Modal background: frosted glass blur overlay

**Section: Upcoming Events List**
- Below calendar: full list of upcoming events, styled like the homepage events section (timeline format)

**Section: Past Events Archive**
- Toggle-able section, collapsed by default
- Past events shown as minimal list items with dates

---

### 3.5 Projects Page

**Section: Hero**
- Title + subtitle: *"Active research initiatives from our members."*

**Section: Active Projects Grid**
- Cards: project name in display font, one-sentence description, tech stack shown as monospace tags, team leads (names with small circular avatar placeholders), status tag (`● Active` / `● In Review`), GitHub icon link
- Cards: 2 columns desktop, 1 mobile
- Each card is taller/more substantial than a typical card — feels like a project brief, not a pill

**Section: Demo / Media Gallery**
- Masonry-style grid of project images or video thumbnails
- Teal overlay with project title on hover

**Section: Contribute CTA**
- Full-width dark section with centered copy: *"Want to contribute to a project or pitch a new one?"*
- CTA: `[Talk to Us →]` linking to Discord or contact

---

## 4. Navigation

- Fixed/sticky nav, transparent on scroll-top, `#080C14` solid when scrolled
- Logo: wordmark `NT` monogram in a subtle neural-node SVG mark + `NEUROTECH @ UVA` text
- Nav links: About / Projects / Events / Resources
- Right side: `[Join Discord]` — accent teal pill button
- Mobile: Hamburger menu opens a full-screen overlay nav with staggered link animation

---

## 5. Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| `< 640px` | Single column, hamburger nav, stacked hero |
| `640–1024px` | 2-column grids, condensed spacing |
| `> 1024px` | Full multi-column layouts, full animations |

---

## 6. Accessibility

- All text meets WCAG AA contrast ratios minimum (teal on dark bg must be checked carefully)
- All interactive elements focusable with keyboard
- All images/SVGs have meaningful `alt` text
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` media query disables all animations for users who opt in

---

## 7. Technical Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14 (App Router)** | SSG for performance, easy routing |
| Styling | **Tailwind CSS** + custom CSS variables for theme | Utility-first with design system tokens |
| Animation | **Framer Motion** | Scroll-based reveals, stagger effects |
| Icons | **Lucide React** | Clean, consistent SVG icons |
| Fonts | Google Fonts (Cabinet Grotesk + Lora + JetBrains Mono) | All free, high quality |
| Deployment | **Vercel** | Zero-config Next.js |
| Version Control | **GitHub** | Standard |

---

## 8. Success Metrics

- Mobile Lighthouse score ≥ 90
- First Contentful Paint ≤ 1.5s
- Member Discord sign-ups traceable via UTM links
- PDF download clicks tracked via Vercel Analytics
- Event RSVP click-through rate ≥ 20%

---

## 9. Out of Scope (V1)

- User authentication / member portal
- CMS integration (content is hardcoded or from static JSON in V1)
- Real-time event data (Eventbrite/Luma integration deferred to V2)
- Blog / publication section (Phase 2)
