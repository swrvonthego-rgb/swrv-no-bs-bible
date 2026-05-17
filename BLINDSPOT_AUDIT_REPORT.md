# SWRV Kingdom Bible — Blindspot Audit Report

## Audit Scope
Checked the latest patched app for basic-function failures and launch-risk blind spots:

- Search scope
- Exact scripture reference search
- Chapter reference search
- High-frequency terms like Jesus / Christ
- Phrase searches like "where art thou"
- Strong's lookup queries
- Bible data presence
- Service worker stale-cache risk
- Worker/Wrangler accidental deployment risk
- Basic JS syntax

## Data Findings
- Bible index contains 66 canonical books.
- Genesis is bundled separately in `data/genesis.js`.
- `data/bible/` contains the other 65 canonical book files.
- Static audit loaded 65 non-Genesis book files with no load failures.
- Non-Genesis files contain 1,139 chapters and 29,569 verses.
- The Bible data does contain Jesus after Mark.
- Static word audit found Jesus in 1 Corinthians, Acts, Romans, Revelation, and many other NT files.

## Fixes Made In This Audit Pass

### 1. Exact Reference Search
Problem: Searching `John 1:1` or `Galatians 5:21` could return the exact result plus many noisy token matches.

Fix:
- Exact verse references now return direct navigation behavior.
- Chapter references like `Romans 8` now show that chapter's verses instead of broad token noise.

### 2. Phrase Search Noise
Problem: A phrase like `where art thou` could return hundreds of unrelated verses because common tokens like `where`, `art`, and `thou` matched too widely.

Fix:
- Multi-word phrase searches now prioritize actual phrase matches and avoid common-word flooding.

### 3. Search Ranking for Scripture vs Metadata
Problem: Searches like `Christ` could show OT verses first because support metadata/definableWords/root data contained Christ-related meanings.

Fix:
- Displayed Bible text now ranks above support metadata.
- Strong's/root metadata can still enrich search, but it no longer hijacks the top results.

### 4. Service Worker Stale Build Risk
Problem: The service worker used cache-first behavior for `index.html`, meaning users could keep seeing an old build even after Cloudflare deployed a new version.

Fix:
- Bumped service worker cache name.
- Changed HTML/navigation requests to network-first.
- Added versioned core scripts to the cache.

### 5. Worker/Wrangler Deployment Risk
Problem: `wrangler.toml` could cause accidental Worker deployments even though this app should target Cloudflare Pages.

Fix:
- Renamed `wrangler.toml` to `wrangler.toml.disabled`.
- Added `CLOUDFLARE_PAGES_ONLY.md`.

## Static Search Test Results After Fix

Confirmed:
- `Jesus` returns Matthew, Mark, Luke, John, Acts, Romans, Corinthians, Galatians, Ephesians, Philippians, Colossians, etc.
- `Christ` now starts with NT direct Christ references instead of OT metadata hits.
- `John 1:1` returns only the direct John 1:1 navigation result.
- `Romans 8` returns Romans 8 chapter results.
- `Revelation 1:1` returns the direct Revelation 1:1 result.
- `where art thou` returns Genesis 3:9 as the top result.
- `Galatians 5:21` returns direct navigation.

## Remaining Blind Spots To Test Live In Claude Code
Static audit cannot fully verify DOM/browser behavior. Live test these:

1. Search `Jesus`, tap a result after Mark, confirm Book / Chapter / Verse controls update.
2. Search `Christ`, confirm NT verses appear first.
3. Search `John 1:1`, confirm it jumps directly and updates the menu.
4. Search `Romans 8`, confirm it opens Romans 8 and lists the chapter properly.
5. Search `where art thou`, confirm Genesis 3:9 opens.
6. Search `kingdom`, tap Galatians 5:21, confirm context cards work.
7. Tap Greek root chips and confirm English gloss / Strong's cards open.
8. Open app after a previous version was cached and confirm new UI appears after refresh.
9. Confirm no console errors.
10. Confirm Cloudflare Pages deploys without Wrangler.

## Files Changed
- `js/search.js`
- `sw.js`
- `index.html`
- `wrangler.toml.disabled` renamed from `wrangler.toml`
- `AUDIT_FIX_NOTES.md`
- `BLINDSPOT_AUDIT_REPORT.md`
- `CLOUDFLARE_PAGES_ONLY.md`

## Push Recommendation
Do not push blindly. First test locally or in Claude Code. If live tests pass, this is safer to push to Cloudflare Pages than the previous version.
