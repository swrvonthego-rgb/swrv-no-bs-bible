# Search Scope Fix

This pass fixes a search-result visibility bug where common New Testament terms like `Jesus` could appear to stop around Matthew/Mark.

## What changed
- Search results for high-frequency Scripture terms are now diversified across all Bible books instead of capped by the first books in canonical order.
- Scripture category now shows more results before requiring category filtering.
- Filtered Scripture results can show up to 500 results.
- Search automatically refreshes after background Bible preloading completes.
- Added a visible indexing notice while the full Bible is still loading.
- Background Bible preloader exposes status and loads more books in parallel.

## Test first
1. Open the app and wait for preload console message or search indexing note to complete.
2. Search `Jesus`. Confirm results include Luke, John, Acts, Romans, epistles, and Revelation, not only Matthew/Mark.
3. Search `Christ`, `Lord Jesus`, `kingdom`, `grace`, `love`, `John 1:1`, `Romans 8`, `Revelation 1:1`.
4. Tap a result and confirm the top Book / Chapter / Verse controls update.
