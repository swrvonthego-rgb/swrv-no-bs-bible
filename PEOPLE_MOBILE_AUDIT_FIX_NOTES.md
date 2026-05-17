# SWRV Bible — People Context + Mobile Reading Flow Audit Fix

## What changed

1. Person/appearance context is now more aggressive and source-honest:
- Verse text now detects known biblical figures from PEOPLES and PERSON_CONTEXT, not only manually tagged `peopleInVerse`.
- Names such as David, Matthew, Mark, Stephen, Caesar, Herod, Pharaoh, Goliath, Jesus, Paul, etc. can become tappable when matching project context data.
- A collapsed "People / appearance context" strip appears only when a verse has detected figure context.
- Person cards now include an appearance/region guardrail when exact appearance data is not preserved.

2. Mobile reading flow is tighter:
- Collapsed study/source panels are thinner.
- AMP, culture, kingdom, translation-loss, original-language, and study-tool panels use compact summaries on phones.
- Source tabs scroll horizontally instead of stacking into a wall.
- Study cards take less vertical space when closed and smaller space when opened.
- Music player is scaled down on mobile to cover less text.

## Guardrail for appearance claims

The app should not force ancient biblical people into European movie imagery. It also should not invent exact skin/hair/eye details when sources do not preserve them. Person cards use:
- directly stated
- regional context suggests
- likely
- possible
- source data limited

## Files changed
- js/app.js
- css/styles.css
- index.html

## Test first
1. Mobile: Genesis 3 / Genesis 4 should show much more reading space between verses.
2. Tap names like David, Jesus, Paul, Pharaoh, Goliath if present in searched passages.
3. Search/open 1 Samuel 16 and tap David.
4. Search/open Matthew 1 and tap Jesus / David / Abraham.
5. Confirm Book / Chapter / Verse controls still update after search navigation.
6. Confirm no console errors.
7. Confirm Cloudflare Pages remains target; do not deploy to Worker.
