# SWRV Definition Integrity Fix

This pass was triggered because the Adam card exposed a definition-depth failure.

## What changed
- Added `data/foundational-word-families.js`.
- Added a full Adam / adamah / adom / dust / breath word-family card.
- Clarified that **Adam does not mean breath**; breath belongs to **neshamah / ruach** in Genesis 2:7.
- Added aliases so searches/taps for `Adam`, `adam`, `human`, `mankind`, `ground`, `dust`, `breath`, `neshamah`, `ruach`, `nephesh`, etc. reach the right cards.
- Added a client-side `window.DEFINITION_INTEGRITY_AUDIT` object so Claude/testers can verify foundational word families are patched.
- Bumped cache/script versions.

## Required tests
Search/tap:
- Adam
- adamah
- ground
- dust
- breath
- neshamah
- ruach
- nephesh
- soul
- spirit
- flesh
- kingdom
- grace
- love
- agape
- hesed
- covenant
- holy
- sin

## Important honesty note
This fixes a foundational integrity gap. It does **not** honestly prove every word in the entire Bible is complete yet. It creates a stronger floor so the app stops missing foundational Hebrew/Greek word-family links during preview.
