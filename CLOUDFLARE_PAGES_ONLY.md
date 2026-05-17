# Cloudflare Pages Only

This project is intended to deploy as a static Cloudflare Pages site.

Target:
- Cloudflare Pages project: `swrv-on-bs-bible-site`
- URL: `swrv-on-bs-bible-site.pages.dev`

Do not deploy this app with Wrangler unless a future server-side Worker is intentionally added.
The old Worker config was renamed to `wrangler.toml.disabled` to prevent accidental Worker deploys.

For Cloudflare Pages, use:
- Framework preset: None / Static site
- Build command: none
- Output directory: `/` or project root, depending on Cloudflare UI
- Production branch: main

If this is later converted to Vite/React, then use:
- Build command: npm run build
- Output directory: dist
