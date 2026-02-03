# 🚀 ANTONIUS.LINK — MASTERPLAN

## 🎯 Vision
Eine Personal Brand Website, die zwei Welten vereint:
- **HYGH** — Tech-Entrepreneur, Digital Advertising Pioneer
- **Edition One** — Künstler, Bildhauer, Creative Visionary

Design-Philosophie: **Apple-level Clean** meets **Bold Artistic Statement**

---

## 🏗️ SITE ARCHITECTURE

```
antonius.link/
├── / (Home)                    # Hero + Dual Identity
├── /hygh                       # HYGH Story & Role
├── /edition-one                # Edition One Story
├── /artist                     # Art Portfolio & Gallery
│   ├── /artist/[artwork-slug]  # Individual Artwork Pages
├── /about                      # Personal Bio & Journey
├── /contact                    # Connect & Inquiries
└── /press                      # Media Kit & Press (optional)
```

---

## 🎨 DESIGN SYSTEM

### Color Palette
| Role | Light Mode | Dark Mode |
|------|------------|-----------|
| Background | `#FAFAFA` | `#0A0A0A` |
| Surface | `#FFFFFF` | `#141414` |
| Primary Text | `#1A1A1A` | `#F5F5F5` |
| Secondary Text | `#6B6B6B` | `#A0A0A0` |
| Accent | `#000000` | `#FFFFFF` |
| Highlight | Chrome gradient | Chrome gradient |

### Typography
- **Headlines:** SF Pro Display / Inter (Bold, 800)
- **Body:** SF Pro Text / Inter (Regular, 400)
- **Accent:** Monospace für Tech-Elemente

### Design Principles
1. **Massive White Space** — Breathing room wie Apple
2. **Full-Bleed Images** — Kunstwerke im Fokus
3. **Micro-Interactions** — Subtle hover states, smooth transitions
4. **Scroll-Triggered Animations** — Reveal on scroll (GSAP)
5. **No Clutter** — Jedes Element hat Purpose

---

## 📄 PAGE BREAKDOWN

### 1. HOME (`/`)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              [FULLSCREEN HERO IMAGE]                        │
│              Antonius - Portrait Shot                       │
│                                                             │
│              ANTONIUS LINK                                  │
│              Entrepreneur · Artist · Visionary              │
│                                                             │
│              [Scroll Indicator ↓]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  TWO WORLDS, ONE VISION                                     │
│                                                             │
│  ┌─────────────────────┐    ┌─────────────────────┐        │
│  │                     │    │                     │        │
│  │      [HYGH]         │    │   [EDITION ONE]     │        │
│  │   Digital Frontier  │    │   Artisan Craft     │        │
│  │                     │    │                     │        │
│  │   "Democratizing    │    │   "Art should be    │        │
│  │    outdoor          │    │    as unique as     │        │
│  │    advertising"     │    │    the soul that    │        │
│  │                     │    │    desires it"      │        │
│  │   [Explore →]       │    │   [Discover →]      │        │
│  │                     │    │                     │        │
│  └─────────────────────┘    └─────────────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SELECTED WORKS                                             │
│                                                             │
│  [Horizontal Scroll Gallery - 6-8 Featured Artworks]        │
│                                                             │
│  Tangled Mind    I Eat Attention    Veins of Eternity      │
│                                                             │
│                            [View All Art →]                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FEATURED IN                                                │
│                                                             │
│  [Tech.eu]  [Billboard Insider]  [Press Logos...]          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER                                                     │
│                                                             │
│  Contact: hello@antonius.link                               │
│  [LinkedIn] [Instagram] [Twitter]                           │
│                                                             │
│  © 2026 Antonius Link                                       │
└─────────────────────────────────────────────────────────────┘
```

---

### 2. HYGH PAGE (`/hygh`)

**Content Sections:**

1. **Hero**
   - HYGH Logo + "Co-Founder & CEO" (or actual title)
   - Tagline: "Digital outdoor advertising, now in HYGH definition."
   - Background: HYGH displays/network imagery

2. **The Problem We Solved**
   - Outdoor advertising was inaccessible, expensive, inflexible
   - Quote: Personal story of why you started HYGH

3. **The Scale**
   - €21.5M raised
   - 7 German cities
   - Network stats/metrics
   - Key partnerships (Wildstone, etc.)

4. **My Role**
   - Leadership, vision, growth
   - Key achievements

5. **CTA**
   - Link to hygh.tech
   - "Book a Campaign" button

---

### 3. EDITION ONE PAGE (`/edition-one`)

**Content Sections:**

1. **Hero**
   - Edition One branding
   - "Co-Founder"
   - Tagline: "Art should be as unique as the soul that desires it."

2. **The Philosophy**
   - Direct from editionone.art/about:
   - "Mass production killed the soul of art."
   - "Direct connection. Pure creation."

3. **What We Create**
   - Chrome & Steel
   - Matte & Chromium
   - Bespoke Commissions
   - [Gallery Preview]

4. **The Collective**
   - Antonius Link, Kyrill Pysarenko, Fritz Sprüth
   - Est. Berlin

5. **CTA**
   - "Commission Your Edition" → editionone.art/your-edition

---

### 4. ARTIST PAGE (`/artist`) ⭐ SHOWSTOPPER

**Layout: Immersive Gallery Experience**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    THE ART OF                               │
│                  ANTONIUS LINK                              │
│                                                             │
│        "Every piece tells a story of obsession,            │
│         precision, and the relentless pursuit              │
│         of meaning in material form."                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FILTER: [All] [Sculptures] [Chrome] [Conceptual]          │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │          │ │          │ │          │ │          │      │
│  │ Tangled  │ │ I Eat    │ │ Veins of │ │ Would    │      │
│  │ Mind     │ │ Attention│ │ Eternity │ │ You Kill │      │
│  │          │ │          │ │          │ │ Baby     │      │
│  │          │ │          │ │          │ │ Hitler   │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │          │ │          │ │          │ │          │      │
│  │ Running  │ │ Cherry   │ │ Bubble   │ │ Alien    │      │
│  │ Thoughts │ │ Cherry   │ │ Baba     │ │ Intelli- │      │
│  │          │ │ Lady     │ │          │ │ gence    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Individual Artwork Page (`/artist/tangled-mind`):**
- Full-screen image
- Title, Year, Materials
- Artist statement / concept
- Dimensions
- Availability / Price on request
- Related works

---

### 5. ABOUT PAGE (`/about`)

**Sections:**
1. **Portrait + Opening Statement**
2. **The Journey** — Timeline/story
3. **Philosophy** — What drives you
4. **Beyond Work** — Marathon, Personal interests
5. **Connect** — Social links, email

---

### 6. CONTACT PAGE (`/contact`)

**Simple, elegant:**
- Email: hello@antonius.link
- Social links
- Optional: Contact form
- Location: Berlin

---

## 🛠️ TECH STACK

| Layer | Technology | Why |
|-------|------------|-----|
| **Framework** | Next.js 14 (App Router) | SSG, Image Optimization, SEO |
| **Styling** | Tailwind CSS + Framer Motion | Rapid development, smooth animations |
| **CMS** | MDX or Sanity (optional) | Easy content updates |
| **Hosting** | Vercel | Edge, instant deploys |
| **Images** | Next/Image + Cloudinary/Vercel Blob | Optimized delivery |
| **Analytics** | Vercel Analytics + Plausible | Privacy-first |
| **Domain** | antonius.link | ✓ Ready |

### Performance Targets
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Core Web Vitals: All green

---

## 📁 ASSET INVENTORY

### Available Now
| Asset | Count | Location |
|-------|-------|----------|
| Birthday Gallery (Portrait shots) | 335 | `assets/gallery/` |
| Edition One Artworks | 15 | `assets/artwork/` |

### Needed
| Asset | Priority | Notes |
|-------|----------|-------|
| Hero Portrait (High-res) | 🔴 Critical | Professional headshot or artistic portrait |
| HYGH Brand Assets | 🟡 High | Logo, screenshots, network imagery |
| Edition One Logo | 🟡 High | Vector format |
| Bio Text | 🟡 High | Personal statement, journey |
| Artwork Descriptions | 🟠 Medium | Title, year, materials, concept |

---

## 🗓️ IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Day 1-2)
- [ ] Initialize Next.js project
- [ ] Setup Tailwind + design tokens
- [ ] Create component library (Button, Card, Section, etc.)
- [ ] Implement responsive grid system
- [ ] Setup image optimization pipeline

### Phase 2: Core Pages (Day 3-5)
- [ ] Home page with hero + dual sections
- [ ] HYGH page
- [ ] Edition One page
- [ ] About page
- [ ] Contact page

### Phase 3: Artist Gallery (Day 6-8)
- [ ] Gallery grid with filtering
- [ ] Individual artwork pages
- [ ] Lightbox/modal for images
- [ ] Smooth scroll + animations

### Phase 4: Polish (Day 9-10)
- [ ] Animations (GSAP/Framer Motion)
- [ ] Dark mode toggle
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Cross-browser testing

### Phase 5: Launch (Day 11)
- [ ] Final review
- [ ] DNS setup for antonius.link
- [ ] Deploy to Vercel
- [ ] Analytics setup
- [ ] 🚀 GO LIVE

---

## 🎯 NEXT STEPS (IMMEDIATE)

### 1. Content Collection (Your Input Needed)
- [ ] **Hero Image:** Which photo from Birthday Gallery for homepage hero? Or do you have another?
- [ ] **Bio Text:** 2-3 paragraphs about yourself
- [ ] **HYGH Role:** Exact title (Co-Founder & CEO? CPO?)
- [ ] **Artwork Details:** Brief descriptions for each piece
- [ ] **Quote/Tagline:** Personal motto or statement

### 2. Technical Kickoff (I Start Now)
- [ ] Initialize Next.js 14 project
- [ ] Setup Tailwind with design system
- [ ] Create folder structure
- [ ] Build first components

### 3. Review Checkpoint
- [ ] Share Figma/mockup for approval
- [ ] Iterate based on feedback
- [ ] Proceed to development

---

## 💡 SIGNATURE FEATURES

### 1. **"The Split" Hero Animation**
Homepage opens with a dramatic split-screen animation — left side reveals HYGH (tech, digital), right side reveals Edition One (art, craft). Mouse position affects the balance.

### 2. **Chrome Text Effect**
Headers get a subtle chrome/metallic gradient that shifts with scroll — ties into Edition One's chrome sculptures.

### 3. **Artwork "Reveal"**
Gallery images start grayscale, reveal full color on hover with a smooth wipe effect.

### 4. **Cursor Trail**
Custom cursor that leaves a subtle trail — artistic, memorable.

### 5. **Sound Design** (Optional)
Subtle ambient sound on artwork pages — adds gallery atmosphere.

---

## 📊 SUCCESS METRICS

| Metric | Target |
|--------|--------|
| Time on Site | > 2 minutes |
| Bounce Rate | < 40% |
| Gallery Views | > 60% of visitors |
| Contact Form Submissions | Track |
| Social Link Clicks | Track |

---

## ✅ APPROVAL CHECKLIST

Before I start coding:

1. [ ] Site structure approved?
2. [ ] Design direction (Apple-clean) approved?
3. [ ] Tech stack approved?
4. [ ] Priority content identified?
5. [ ] Timeline realistic?

---

**Ready to build the most 🔥 personal website ever?**

*Just say "GO" and I start Phase 1 immediately.*
