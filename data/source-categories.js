// SWRV Kingdom Study — Source category schema (Rule 06 enforcement)
// Every source in the system is labeled with one of these categories.
// Never blur categories. Canonical Scripture is the spine; everything else is supporting.

window.SOURCE_CATEGORIES = {
  CANONICAL_SCRIPTURE: {
    code: "canonical_scripture",
    label: "Canonical Scripture",
    short: "Scripture",
    color: "#7C2D12",
    badge: "📖",
    description: "The 66-book canonical Bible. The text is the authority (Rule 02).",
    license_note: "Public domain (KJV, ASV, WEB) or freely usable with attribution (BSB)."
  },
  TRANSLATION_COMPARISON: {
    code: "translation_comparison",
    label: "Translation Comparison",
    short: "Translation",
    color: "#0891B2",
    badge: "🔄",
    description: "Modern English renderings used to clarify the canonical text. Not a separate authority — a window onto the same text."
  },
  ANCIENT_TRANSLATION_WITNESS: {
    code: "ancient_translation_witness",
    label: "Ancient Translation Witness",
    short: "Ancient",
    color: "#059669",
    badge: "📜",
    description: "Pre-Christian or near-contemporary translations (LXX, Targums, Vulgate). Independent witnesses to the original text."
  },
  HISTORICAL_WITNESS: {
    code: "historical_witness",
    label: "Historical Witness",
    short: "History",
    color: "#A16207",
    badge: "🏛️",
    description: "Outside historical writers (Josephus, Tacitus, Philo) confirming or contextualizing biblical events. Not Scripture — supporting evidence."
  },
  SECOND_TEMPLE_BACKGROUND: {
    code: "second_temple_background",
    label: "Second Temple Background",
    short: "2nd Temple",
    color: "#7E22CE",
    badge: "🕯️",
    description: "Jewish writings between the testaments (1 Enoch, Jubilees, DSS). Show how the world Jesus was born into read scripture. NOT Scripture; explicitly background."
  },
  LEXICON: {
    code: "lexicon",
    label: "Dictionary / Lexicon",
    short: "Lexicon",
    color: "#0EA5E9",
    badge: "📔",
    description: "Strong's, BDB, Thayer's. Word-level scholarly tools for understanding original Hebrew and Greek."
  },
  STUDY_NOTE: {
    code: "study_note",
    label: "Study Note",
    short: "Study",
    color: "#C9A84C",
    badge: "💡",
    description: "Curated explanation drawing from the approved library. Always traceable to a source (Rule 06)."
  },
  CHRONOLOGICAL_GUIDE: {
    code: "chronological_guide",
    label: "Chronological Guide",
    short: "Chronology",
    color: "#DB2777",
    badge: "🕰️",
    description: "Date placement for events. Confidence labels: certain / approximate / debated / traditional."
  },
  CULTURAL_HISTORICAL_BACKGROUND: {
    code: "cultural_historical_background",
    label: "Cultural / Historical Background",
    short: "Background",
    color: "#9333EA",
    badge: "🌍",
    description: "ANE customs, geography, archaeology, daily life. Helps modern readers see what original audiences would have seen."
  }
};

// Confidence labels for chronological / source placement
window.CONFIDENCE_LEVELS = {
  CERTAIN:     { code: "certain",     label: "Certain",     color: "#059669", description: "Multiple independent sources agree." },
  APPROXIMATE: { code: "approximate", label: "Approximate", color: "#0891B2", description: "Reasonable scholarly estimate; precise date unknown." },
  DEBATED:     { code: "debated",     label: "Debated",     color: "#D97706", description: "Genuine scholarly disagreement; multiple positions exist." },
  TRADITIONAL: { code: "traditional", label: "Traditional", color: "#7E22CE", description: "Long-held church/synagogue tradition; not directly stated in scripture." }
};
