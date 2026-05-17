// SWRV Kingdom Bible — Audio Narration Roadmap (POC: Genesis 1:1-3)
// 
// Per the SWRV Kingdom Bible audio narration plan:
//   1. Scripture only mode
//   2. Study with Kingdom Lens mode
//   3. Deep with definitions mode
//
// Per-word Hebrew/Greek pronunciations planned (Fiverr narrators ~$50).
// Ambient music under narration. Podcast syndication: "Kingdom Genesis with SWRV Birdsong".
// Shareable verse clips. Memorization mode.
//
// This file is the DATA STRUCTURE for narration. Audio files reference paths;
// when proper narration is recorded, drop the files at the matching paths.

window.AUDIO_NARRATION = {
  // Available modes
  modes: {
    scripture: {
      label: "Scripture Only",
      description: "BSB reading, calm pace, ambient music. Best for daily devotional listening.",
      icon: "📖",
      includes: ["BSB verse text"]
    },
    study: {
      label: "Study + Kingdom Lens",
      description: "BSB reading + Kingdom Lens framing + cultural context where applicable.",
      icon: "💡",
      includes: ["BSB verse text", "Kingdom Lens", "cultural context"]
    },
    deep: {
      label: "Deep Study",
      description: "Full theological depth — every Hebrew/Greek root pronounced, every definition read.",
      icon: "📔",
      includes: ["BSB verse text", "Kingdom Lens", "cultural context", "Hebrew/Greek pronunciations", "definitions"]
    }
  },

  // Per-verse audio paths — POC for Genesis 1:1-3
  // When production audio is recorded, drop files at: assets/audio/{mode}/{book}/{chapter}/{verse}.mp3
  // Verse identifier: "Book.chapter.verse"
  poc_verses: {
    "Genesis.1.1": {
      ref: "Genesis 1:1",
      modes_available: ["scripture", "study", "deep"],
      // Production paths (placeholders — to be filled after Fiverr recording)
      paths: {
        scripture: "assets/audio/scripture/Genesis/1/1.mp3",
        study:     "assets/audio/study/Genesis/1/1.mp3",
        deep:      "assets/audio/deep/Genesis/1/1.mp3"
      },
      // Hebrew/Greek root pronunciations to include in 'deep' mode
      pronunciations: [
        { root: "H7225", word: "רֵאשִׁית", translit: "reshith", meaning: "beginning, first, chief" },
        { root: "H1254", word: "בָּרָא", translit: "bara", meaning: "created (ex nihilo — only God's verb)" },
        { root: "H430",  word: "אֱלֹהִים", translit: "Elohim", meaning: "God (plural of majesty)" },
        { root: "H8064", word: "שָׁמַיִם", translit: "shamayim", meaning: "heavens, sky" },
        { root: "H776",  word: "אֶרֶץ", translit: "eretz", meaning: "earth, land" }
      ],
      // Script for each mode (read by narrator)
      scripts: {
        scripture: "Genesis 1, verse 1. In the beginning God created the heavens and the earth.",
        study: "Genesis 1, verse 1. In the beginning God created the heavens and the earth. The first verse of the Bible. God exists before the beginning — He's not created. This single sentence contradicts every ancient pagan creation myth: there are not many gods, the gods didn't make the universe out of their own bodies, and matter is not eternal. God speaks; everything that is, came to be.",
        deep: "Genesis 1, verse 1. In the beginning God created the heavens and the earth. In Hebrew: B'reshith bara Elohim et ha-shamayim v'et ha-aretz. Reshith — beginning, first, chief. Bara — created. This verb in this form is used ONLY of God. Humans make, fashion, build — but only God baras, creates from nothing. Elohim — God. A plural form used with singular verbs, possibly hinting at the Trinity from the very first sentence. Shamayim — the heavens. A dual form, possibly indicating the visible sky and the invisible spiritual realm. Eretz — the earth. The whole material creation."
      }
    },
    "Genesis.1.2": {
      ref: "Genesis 1:2",
      modes_available: ["scripture", "study", "deep"],
      paths: {
        scripture: "assets/audio/scripture/Genesis/1/2.mp3",
        study:     "assets/audio/study/Genesis/1/2.mp3",
        deep:      "assets/audio/deep/Genesis/1/2.mp3"
      },
      pronunciations: [
        { root: "H8414", word: "תֹהוּ", translit: "tohu", meaning: "formless, empty, chaos" },
        { root: "H922",  word: "בֹּהוּ", translit: "bohu", meaning: "void, empty" },
        { root: "H7307", word: "רוּחַ", translit: "ruach", meaning: "spirit, wind, breath" },
        { root: "H7363", word: "רָחַף", translit: "rachaph", meaning: "hovering, brooding (like a mother bird)" }
      ],
      scripts: {
        scripture: "Verse 2. Now the earth was formless and void, and darkness was over the surface of the deep. And the Spirit of God was hovering over the waters.",
        study: "Verse 2. The earth was formless and void — tohu va-bohu in Hebrew, a rhyming phrase meaning chaotic and uninhabited. The Spirit of God hovered over the waters. The same Spirit that hovered then is the Spirit that hovers over hearts now, bringing order out of chaos. Creation is not a one-time historical event — it's the pattern of how God works in our lives.",
        deep: "Verse 2. Tohu va-bohu — formless and void. A rhyming Hebrew phrase. Then ruach Elohim merachepheth al-peney ha-mayim — the Spirit of God was hovering over the face of the waters. Ruach — spirit, wind, breath. Same word translated 'Holy Spirit' throughout the Old Testament. Rachaph — hovering, brooding. The only other place this verb appears in the Torah is Deuteronomy 32:11 — a mother eagle fluttering over her young. The Holy Spirit's tender, motherly care over a chaotic creation. The cosmic and the maternal in one image."
      }
    },
    "Genesis.1.3": {
      ref: "Genesis 1:3",
      modes_available: ["scripture", "study", "deep"],
      paths: {
        scripture: "assets/audio/scripture/Genesis/1/3.mp3",
        study:     "assets/audio/study/Genesis/1/3.mp3",
        deep:      "assets/audio/deep/Genesis/1/3.mp3"
      },
      pronunciations: [
        { root: "H559",  word: "אָמַר", translit: "amar", meaning: "said, spoke (creative word)" },
        { root: "H216",  word: "אוֹר", translit: "or", meaning: "light" },
        { root: "H1961", word: "הָיָה", translit: "hayah", meaning: "to be, become, exist (the I AM verb)" }
      ],
      scripts: {
        scripture: "Verse 3. Then God said, Let there be light, and there was light.",
        study: "Verse 3. God said. Creation begins with speech. God doesn't sculpt or wrestle matter into shape like the gods of pagan myths — He speaks. 'Let there be light' — and there was light. The universe is fundamentally word-shaped. Jesus is called 'the Word' in John 1:1 — meaning He is the active creative agent of God. 'All things were made by Him; and without Him was not any thing made that was made.'",
        deep: "Verse 3. Vayyomer Elohim yehi or vayehi or — and God said let there be light and there was light. Three uses of the verb hayah, to be. The same verb God uses in Exodus 3:14 to name Himself: ehyeh asher ehyeh — I AM THAT I AM. The God who simply IS speaks, and what was not, now IS. Light comes before the sun is created on day four — meaning the first light of creation is not solar. It's something deeper. John 1:4 — In Him was life; and the life was the light of men. The first light of Genesis 1 finds its fullness in Jesus."
      }
    }
  },

  // Production roadmap
  production_notes: [
    "Step 1: Record Genesis 1:1-3 in all three modes (Scripture, Study, Deep)",
    "Step 2: Validate workflow — file paths, player integration, mode toggle",
    "Step 3: Record full Genesis chapter 1 across all three modes",
    "Step 4: Hebrew/Greek pronunciations recorded by native speakers (Fiverr ~$50)",
    "Step 5: Ambient music tracks selected for under-narration use",
    "Step 6: Scale to full Bible (1,189 chapters × 3 modes = 3,567 audio sessions)",
    "Step 7: Podcast syndication as 'Kingdom Genesis with SWRV Birdsong'",
    "Step 8: Shareable verse clips for social media",
    "Step 9: Memorization mode — verse-by-verse with spaced repetition"
  ]
};
