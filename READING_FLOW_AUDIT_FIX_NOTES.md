# SWRV Reading Flow Audit Fix

## Purpose
Make the app feel better for real reading on mobile by making study layers optional instead of forcing AMP, culture, Hebrew roots, Josephus/Enoch, translation loss, and cross-source notes between every verse.

## What changed
- Added a global **Read / Study** toggle in the header.
- **Read mode** hides inline study/source layers so users can read Scripture without interruption.
- **Study mode** restores the inline study layers for deep study.
- On mobile, first-time/default behavior is **Read mode** to protect screen space.
- On desktop, first-time/default behavior remains **Study mode**.
- Collapsed study-layer panels are now much thinner in Study mode.
- AMP-style, cultural, kingdom, translation-loss, Strong's, people/context, source tabs, Josephus/Enoch, and cross-source parallel panels are now classified as optional `study-layer` items.
- Cache/service worker version was bumped so the browser is less likely to keep the older layout.

## Files changed
- `index.html`
- `js/app.js`
- `js/enrichments.js`
- `css/styles.css`
- `sw.js`

## Test first
1. Open on mobile.
2. Confirm the header has a **Read / Study** toggle.
3. Confirm Read mode hides inline notes between verses.
4. Tap Study mode and confirm notes return.
5. Confirm collapsed study panels are skinny.
6. Confirm Genesis 1:1 no longer forces huge AMP/Josephus panels into the reading flow unless Study is enabled.
7. Confirm Book / Chapter / Verse controls still work.
8. Confirm search result taps still update Book / Chapter / Verse.
9. Confirm desktop still works.
10. Confirm no console errors.

## Deployment warning
Cloudflare Pages only. Do not deploy to Worker/Wrangler.
