# antonius.link

Personal website for Antonius Link - Entrepreneur, Artist, Visionary.

## Quick Links
- **Live Site:** https://editiononeadmin.github.io/antonius-link/
- **Tech:** Next.js 16 + Tailwind CSS + Framer Motion
- **Hosting:** GitHub Pages (auto-deploy)

## Structure
```
website/           # Next.js project
├── src/app/       # Pages (Home, HYGH, Edition One, Artist, About, Contact)
├── src/data/      # artworks.ts (13 works) + content.ts (bio, socials)
└── public/images/ # Artwork images + hero
```

## Development
```bash
cd website
npm install
npm run dev      # localhost:3000
npm run build    # Static export to /out
```

## Deployment
Push to `main` → GitHub Actions auto-deploys to Pages.

## Key Files
- `src/data/artworks.ts` - Artwork titles, descriptions, images
- `src/data/content.ts` - Bio, social links, HYGH/E1 content
- `next.config.ts` - basePath set for GitHub Pages

## Social Links
- Instagram: instagram.com/antonius.link
- LinkedIn: linkedin.com/in/antonius-link
