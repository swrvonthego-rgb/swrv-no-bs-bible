# SWRV Kingdom Bible — Audit Fix Notes

This pass focused on basic-function blind spots found during static audit:

- Exact verse reference searches now behave like navigation, not broad fuzzy searches.
  - `John 1:1` returns the direct jump plus exact verse, not hundreds of noisy matches.
- Chapter reference searches now show that chapter's verses first.
  - `Romans 8` returns Romans 8 verses instead of general token noise.
- Multi-word phrase searches are less noisy.
  - `where art thou` prioritizes the actual phrase instead of every verse containing common words.
- Scripture search ranking now gives displayed Bible text more weight than Strong's/root metadata.
  - This prevents root metadata from making unrelated OT verses rank above direct NT matches for words like `Christ`.
- Search cache version bumped to reduce stale browser behavior.

Still requires live-browser testing in Claude Code/Cloudflare preview.

## Service Worker Blind Spot Fixed
- Bumped the PWA cache name.
- Added network-first behavior for HTML/navigation.
- Added versioned app/search/preload scripts to core cache.
This reduces the risk that Cloudflare deploys correctly but the user still sees an old cached build.
