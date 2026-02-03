# antonius.link - Project Documentation

## Quick Links
- **Live Site:** https://editiononeadmin.github.io/antonius-link/
- **GitHub Repo:** https://github.com/EditionOneAdmin/antonius-link

## Tech Stack
- Next.js 16 (App Router) + Tailwind CSS + Framer Motion
- GitHub Pages (auto-deploy on push to main)

## Project Structure
```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── hygh/              # HYGH page
│   ├── edition-one/       # Edition One page  
│   ├── artist/            # Gallery
│   │   ├── page.tsx       # All artworks grid
│   │   └── [slug]/        # Individual artwork pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
└── data/
    ├── artworks.ts        # 13 artworks with metadata
    └── content.ts         # Bio, socials, HYGH, E1 content
```

## Artworks (13 total)
Images in `public/images/artwork/`:
- Tangled_Mind.jpg
- I_Eat_Attention.jpg
- Veins_of_Eternity.jpg
- Would_You_Kill_Baby_Hitler.jpg
- Alien_Intelligence.jpg
- Bubble_Baba.jpg
- Cherry_Cherry_Lady.jpg
- Running_Thoughts.jpg
- I_Was_Born_Champion.jpg
- The_Canvas_Remembers.jpg
- Whats_Behind_The_Simulation.png
- Jesus.jpg
- Reiss_Dich_Zusammen.jpg

## Social Links (in content.ts)
- Instagram: instagram.com/antonius.link
- LinkedIn: linkedin.com/in/antonius-link

## Commands
```bash
npm run dev      # Development server
npm run build    # Build for production
git push         # Auto-deploys to GitHub Pages
```

## Notes
- basePath `/antonius-link` required for GitHub Pages
- Images must use `/antonius-link/images/...` prefix
- Static export (no server features)
