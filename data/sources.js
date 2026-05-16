// SWRV Kingdom Study — Source registry with category labels (Rule 06)
// Every source declares its category — no blurring of canonical vs background.

window.SOURCES = {
  // CANONICAL SCRIPTURE — the spine. 66-book Bible. The text is the authority.
  "KJV": {
    name: "King James Version",
    short: "KJV",
    color: "#7C2D12",
    category: "canonical_scripture",
    year: 1611,
    license: "Public domain",
    description: "Authorized 1611 English translation. Comparison text on every verse."
  },
  "BSB": {
    name: "Berean Standard Bible",
    short: "BSB",
    color: "#0891B2",
    category: "translation_comparison",
    year: 2022,
    license: "Berean Bible Translation Project — freely usable with attribution. Not strictly public domain. © 2016, 2020 Bible Hub, used per the Berean Bible license terms.",
    attribution: "The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee.",
    description: "Modern, accessible primary reading text across the whole Bible."
  },

  // ANCIENT TRANSLATION WITNESS — pre-Christian witnesses to the OT text.
  "TANAKH": {
    name: "Tanakh (JPS 1917)",
    short: "TNK",
    color: "#B8860B",
    category: "ancient_translation_witness",
    year: 1917,
    license: "Public domain",
    description: "Jewish Publication Society 1917 translation of the Hebrew Tanakh. Independent Jewish witness."
  },
  "HEBREW": {
    name: "Hebrew (Masoretic)",
    short: "HEB",
    color: "#0EA5E9",
    category: "ancient_translation_witness",
    license: "Public domain (Masoretic Text)",
    description: "The Hebrew Masoretic Text. Original-language form of the OT."
  },
  "LXX_GREEK": {
    name: "Septuagint (Greek)",
    short: "GRC",
    color: "#059669",
    category: "ancient_translation_witness",
    year: "c. 250 BC",
    license: "Public domain",
    description: "Pre-Christian Greek translation of the OT. The Bible Jesus and the apostles often quoted."
  },
  "GREEK_NT": {
    name: "Greek New Testament (Textus Receptus)",
    short: "GRC",
    color: "#059669",
    category: "ancient_translation_witness",
    year: "1st century AD (TR ed. Stephanus 1550)",
    license: "Public domain",
    description: "Original-language Greek NT, Textus Receptus edition (basis of the KJV). The actual words the apostles wrote."
  },
  "LXX_ENG": {
    name: "Septuagint (Brenton English)",
    short: "LXX",
    color: "#2563EB",
    category: "ancient_translation_witness",
    year: 1851,
    license: "Public domain",
    description: "Brenton's 1851 English translation of the LXX. Readable form of the ancient Greek OT."
  },

  // STUDY NOTE — curated explanation, always traceable.
  "AMPLIFIED": {
    name: "Amplified-style nuance",
    short: "AMP",
    color: "#9333EA",
    category: "study_note",
    license: "SWRV synthesis — drawn from the approved library, not from any copyrighted Amplified Bible edition.",
    description: "Curated paraphrase highlighting Hebrew/Greek nuance. SWRV-authored from lexicon sources, not reproduced from the copyrighted Lockman AMP."
  }
};

// BSB official attribution — shown in Library + Audit modals.
window.BSB_ATTRIBUTION = "The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee. Used per the Berean Bible license terms — freely usable with attribution.";
