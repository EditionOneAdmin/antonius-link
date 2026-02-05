// Base path for deployment
// Use '' for root/custom domain (Cloudflare Pages, Vercel)
// Use '/antonius-link' for GitHub Pages subdirectory
export const basePath = '';

// Helper to prefix paths with basePath
export const withBasePath = (path: string) => `${basePath}${path}`;
