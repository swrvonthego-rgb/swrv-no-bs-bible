# SWRV Kingdom Study Bible — Correction Pass

This pass addresses the requested corrections after the complete pass.

## Fixed / improved

1. Search result navigation now uses a source-of-truth `openVerseReference(book, chapter, verse)` function so when a user taps a search result, the Book / Chapter / Verse selectors update to match the displayed page.
2. Global search now indexes more than only the visible/current chapter text. Verse records include all available source text, definable words, people, places, themes, and attached Strong's root data.
3. Search now indexes supplemental Definition Bible entries and regular English/older Bible word definitions.
4. Search BDB indexing now recognizes the actual `window.BDB_HEB` source object.
5. Removed the repetitive “Deep Study Enabled” chapter banner so it no longer takes up reading space.
6. Removed “— Deep Study” from every book label because deep study is now treated as the app-wide baseline, not a special book label.
7. Deep Study Toolkit panels now default closed, so the reader can read uninterrupted and open sources/context only when wanted.
8. Added a supplemental semantic layer for important high-impact terms: love, grace, kingdom, soul, spirit, flesh, righteousness, justice, holy, unclean, covenant, debauchery, drunkenness, harlot, works, brother.
9. Added regular English/older Bible word support for terms like debauchery, harlot, fornication, lasciviousness, meek, blessed, repent, gospel, apostle, inheritance.
10. Definition cards now try to surface possible Hebrew/Greek lexicon links for a regular English word rather than simply saying the term is queued.
11. Original-language root chips now display an English gloss preview where Strong's data is present, making Greek/Hebrew clickable without the reader needing to memorize characters.
12. Added AMP-style expansion panels from existing project data where available: Genesis, Exodus, Leviticus.
13. Added more contextual rules for vice lists and God-facing vs neighbor-facing instruction.

## Source honesty

This patch does not claim to have a full copyrighted Amplified Bible text unless that text exists in the project files. It surfaces the existing AMP-style / expansion data already present in the project and leaves room for licensed AMP text to plug in later.

## Test first

- Search `Galatians 5:21`, tap it, then confirm Book = Galatians, Chapter = 5, Verse = 21.
- Tap `kingdom` in Galatians 5:21 and confirm a richer kingdom card appears.
- Tap Greek root chips under Galatians 5 and confirm they show glosses and open Greek Strong's entries.
- Confirm the chapter banner no longer takes up space.
- Confirm Deep Study Toolkit sections are closed until opened.
- Search `John 1:1`, `Romans 8`, `kingdom`, `grace`, `debauchery`, `love`, `G26`, `G932`, `H5315`.
- Confirm Genesis/Exodus/Leviticus AMP-style expansion cards appear where the source data has notes.

## Files changed

- js/app.js
- js/search.js
- css/styles.css
- index.html
- COMPLETE_CORRECTION_NOTES.md
