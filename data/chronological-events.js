// SWRV Kingdom Study — Chronological Events Model (Rule 06)
// Each event = a moment in salvation history that anchors passages, people, places, themes.
// Confidence labels: certain / approximate / debated / traditional.
//
// This is separate from the book-order reading mode (chronological-map.js).
// This is the EVENT timeline — the moments themselves.

window.CHRONOLOGICAL_EVENTS = [
  // ========= CREATION / PRE-PATRIARCHAL =========
  {
    id: "creation",
    title: "CREATION",
    date: "Beginning",
    date_range: null,
    confidence: "traditional",
    passages: ["Genesis 1", "Genesis 2"],
    people: ["Adam", "Eve"],
    places: ["Eden"],
    themes: ["creation", "image_of_god", "marriage", "sabbath"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 1-2", why: "Primary canonical account." },
      { source: "BSB", category: "translation_comparison", ref: "Genesis 1-2", why: "Modern readable rendering." },
      { source: "ENOCH", category: "second_temple_background", ref: "1 Enoch 69", why: "Names the angels who taught divine knowledge — different angle on the cosmic order." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities I.1.1", why: "First-century Jewish historian retelling Genesis 1." }
    ],
    notes: "Genesis 1 is structured creation poetry — 6 days of forming and filling, capped by Sabbath rest. The image-of-God motif establishes the worth of every human."
  },
  {
    id: "the_fall",
    title: "THE FALL",
    date: "After Creation",
    confidence: "traditional",
    passages: ["Genesis 3"],
    people: ["Adam", "Eve"],
    places: ["Eden"],
    themes: ["sin", "death", "promise_of_redemption", "covenant"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 3", why: "Primary canonical account." },
      { source: "ROMANS", category: "canonical_scripture", ref: "Romans 5:12-21", why: "Paul's theological reading: 'In Adam all die.'" }
    ],
    notes: "Genesis 3:15 is the protoevangelium — the first promise of the Messiah. The seed of the woman will crush the serpent's head."
  },
  {
    id: "flood",
    title: "THE FLOOD",
    date: "c. 2400 BC (traditional)",
    confidence: "traditional",
    passages: ["Genesis 6-9"],
    people: ["Noah", "Shem", "Japheth"],
    places: ["Ararat"],
    themes: ["judgment", "covenant", "preservation", "rainbow"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 6-9", why: "Primary account of the flood and Noahic covenant." },
      { source: "ENOCH", category: "second_temple_background", ref: "1 Enoch 6-10 (Watchers); 65-67 (Flood)", why: "Second Temple Jewish reading: the Flood was God's response to the Watchers' corruption of humanity." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities I.3", why: "Records the flood narrative; says the ark's remnants were still visible in his day." }
    ],
    notes: "Jude 14-15 and 2 Peter 2:4-5 explicitly cite the Enochic Watchers tradition as background to the Flood."
  },
  {
    id: "babel",
    title: "TOWER OF BABEL",
    date: "Post-Flood",
    confidence: "traditional",
    passages: ["Genesis 11:1-9"],
    places: ["Babel / Shinar (later Babylon)"],
    themes: ["unity_in_rebellion", "languages", "scattering"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 11:1-9", why: "Canonical account." }
    ],
    notes: "Babel is where humanity tried to climb UP to heaven (a ziggurat). Pentecost reverses Babel — heaven came DOWN by the Spirit, and the languages divided here are unified there (Acts 2)."
  },

  // ========= PATRIARCHS =========
  {
    id: "abrahams_call",
    title: "GOD CALLS ABRAM",
    date: "c. 2091 BC (traditional)",
    confidence: "traditional",
    passages: ["Genesis 12:1-9"],
    people: ["Abraham"],
    places: ["Ur", "Haran", "Canaan"],
    themes: ["covenant", "promise", "faith", "blessing_to_nations"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 12:1-9", why: "The original call." },
      { source: "ROMANS", category: "canonical_scripture", ref: "Romans 4", why: "Paul's argument: Abraham was justified by faith BEFORE the law." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities I.7", why: "Records Abraham's migration from Mesopotamia." }
    ],
    notes: "Genesis 12:3 — 'In thee shall all families of the earth be blessed.' The first promise of universal Gentile inclusion."
  },
  {
    id: "abrahamic_covenant",
    title: "THE ABRAHAMIC COVENANT CUT",
    date: "c. 2085 BC (traditional)",
    confidence: "traditional",
    passages: ["Genesis 15", "Genesis 17"],
    people: ["Abraham", "Sarah"],
    themes: ["covenant", "unconditional_grace", "circumcision"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 15, 17", why: "The covenant cut in pieces." },
      { source: "JEREMIAH", category: "canonical_scripture", ref: "Jeremiah 34:18-20", why: "Confirms the ANE covenant-cutting ritual." }
    ],
    notes: "God alone passes between the halved animals while Abraham sleeps — unilateral grace covenant."
  },
  {
    id: "akedah",
    title: "THE BINDING OF ISAAC (AKEDAH)",
    date: "c. 2050 BC (traditional)",
    confidence: "traditional",
    passages: ["Genesis 22"],
    people: ["Abraham", "Isaac"],
    places: ["Mount Moriah"],
    themes: ["sacrifice", "substitution", "faith", "messianic_type"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Genesis 22", why: "Canonical account." },
      { source: "HEBREWS", category: "canonical_scripture", ref: "Hebrews 11:17-19", why: "Abraham reckoned God could raise from the dead." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities I.13", why: "First-century retelling." }
    ],
    notes: "Mount Moriah is later the Temple Mount (2 Chr 3:1) — where every Israelite sacrifice was made — and adjacent to Calvary."
  },

  // ========= EXODUS / SINAI =========
  {
    id: "exodus",
    title: "THE EXODUS FROM EGYPT",
    date: "c. 1446 BC (early) / 1260 BC (late)",
    confidence: "debated",
    passages: ["Exodus 12-15"],
    people: ["Moses", "Aaron", "Miriam", "Pharaoh"],
    places: ["Egypt", "Red Sea"],
    themes: ["passover", "deliverance", "blood", "judgment", "redemption"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Exodus 12-15", why: "Primary account." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities II.14-16", why: "First-century retelling of plagues and Red Sea." },
      { source: "MATTHEW", category: "canonical_scripture", ref: "Matthew 2:15", why: "Out of Egypt have I called my son — Jesus' life echoes the Exodus." }
    ],
    notes: "Date is genuinely debated — early date based on 1 Kings 6:1; late date based on Pithom/Rameses inscriptions. Both have scholarly support."
  },
  {
    id: "sinai",
    title: "THE LAW GIVEN AT SINAI",
    date: "c. 1446 BC (early) / 1260 BC (late) — 50 days after Exodus",
    confidence: "debated",
    passages: ["Exodus 19-24", "Deuteronomy 5"],
    people: ["Moses", "Aaron"],
    places: ["Mount Sinai"],
    themes: ["covenant", "law", "ten_commandments", "theophany"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Exodus 19-24", why: "Sinai theophany and law-giving." },
      { source: "GALATIANS", category: "canonical_scripture", ref: "Galatians 3:17-19", why: "Paul's theology: the law came 430 years after the Abrahamic promise." }
    ],
    notes: "Pentecost (Acts 2) was the anniversary of Sinai. The Law given on stone → the Spirit written on hearts."
  },

  // ========= CONQUEST / JUDGES =========
  {
    id: "jordan_crossing",
    title: "ISRAEL CROSSES THE JORDAN",
    date: "c. 1406 BC (early) / 1220 BC (late)",
    confidence: "debated",
    passages: ["Joshua 3-4"],
    people: ["Joshua", "Rahab"],
    places: ["Jordan River", "Jericho"],
    themes: ["new_beginning", "ark", "memorial"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Joshua 3-4", why: "Canonical account." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities V.1", why: "Records the crossing under Joshua." }
    ],
    notes: "The Jordan parted just like the Red Sea — God demonstrating Joshua is His chosen successor to Moses."
  },

  // ========= MONARCHY =========
  {
    id: "david_anointed",
    title: "SAMUEL ANOINTS DAVID",
    date: "c. 1025 BC",
    confidence: "approximate",
    passages: ["1 Samuel 16"],
    people: ["David", "Samuel"],
    places: ["Bethlehem"],
    themes: ["heart_of_God", "anointing", "kingship", "messianic_line"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "1 Samuel 16", why: "The anointing account." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities VI.8", why: "First-century retelling." }
    ],
    notes: "1 Samuel 16:7 — 'the LORD looketh on the heart.' Foundational verse for David's whole life."
  },
  {
    id: "davidic_covenant",
    title: "THE DAVIDIC COVENANT",
    date: "c. 1000 BC",
    confidence: "approximate",
    passages: ["2 Samuel 7"],
    people: ["David"],
    places: ["Jerusalem"],
    themes: ["throne_forever", "messianic_line", "house_of_god"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "2 Samuel 7", why: "The Davidic covenant." },
      { source: "LUKE", category: "canonical_scripture", ref: "Luke 1:32-33", why: "The angel applies this covenant directly to Jesus." }
    ],
    notes: "God promises David an EVERLASTING throne through one of his descendants. Every Messianic prophecy traces back here."
  },
  {
    id: "temple_built",
    title: "SOLOMON BUILDS THE FIRST TEMPLE",
    date: "c. 960 BC",
    confidence: "approximate",
    passages: ["1 Kings 6", "2 Chronicles 3-4"],
    people: ["Solomon"],
    places: ["Jerusalem", "Temple Mount"],
    themes: ["temple", "glory", "shekinah", "presence"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "1 Kings 6-8", why: "Temple construction and dedication." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities VIII.3-4", why: "Detailed first-century description of the Temple's grandeur." }
    ],
    notes: "The Shekinah glory FILLED the temple at dedication (1 Kgs 8:10-11). This glory will later DEPART (Ezek 10) and finally RETURN in Christ (John 1:14)."
  },

  // ========= EXILE / RETURN =========
  {
    id: "babylon_destroys_jerusalem",
    title: "BABYLON DESTROYS JERUSALEM",
    date: "586 BC",
    confidence: "certain",
    passages: ["2 Kings 25", "2 Chronicles 36", "Jeremiah 39, 52"],
    people: ["Nebuchadnezzar", "Jeremiah", "Ezekiel"],
    places: ["Jerusalem", "Babylon"],
    themes: ["exile", "judgment", "temple_destroyed"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "2 Kings 25", why: "Canonical account." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities X.8", why: "First-century retelling — references the Babylonian chronicles." }
    ],
    notes: "Confirmed by the Babylonian Chronicle tablets (British Museum) to the EXACT DAY. One of the most precisely dated events in the OT."
  },
  {
    id: "cyrus_decree",
    title: "CYRUS DECREES THE RETURN",
    date: "538 BC",
    confidence: "certain",
    passages: ["Ezra 1", "2 Chronicles 36:22-23", "Isaiah 44:28"],
    people: ["Cyrus"],
    places: ["Babylon", "Jerusalem"],
    themes: ["return", "rebuilding", "fulfilled_prophecy"],
    source_links: [
      { source: "KJV", category: "canonical_scripture", ref: "Ezra 1", why: "The decree." },
      { source: "ISAIAH", category: "canonical_scripture", ref: "Isaiah 44:28-45:1", why: "Cyrus called by NAME 150+ years before his birth." }
    ],
    notes: "Confirmed by the CYRUS CYLINDER (British Museum) — Cyrus's own decree allowing exiled peoples to return home."
  },

  // ========= INCARNATION =========
  {
    id: "jesus_birth",
    title: "THE BIRTH OF JESUS",
    date: "c. 6-4 BC",
    confidence: "approximate",
    passages: ["Matthew 1-2", "Luke 1-2"],
    people: ["Jesus", "Mary", "Joseph_NT"],
    places: ["Bethlehem", "Nazareth"],
    themes: ["incarnation", "fulfillment", "humility"],
    source_links: [
      { source: "MATTHEW", category: "canonical_scripture", ref: "Matthew 1-2", why: "Genealogy + nativity." },
      { source: "LUKE", category: "canonical_scripture", ref: "Luke 1-2", why: "Annunciation + Bethlehem." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities XVII.8", why: "Records Herod's death — anchors Jesus' birth before 4 BC." }
    ],
    notes: "Herod died 4 BC; Jesus was born before. The traditional AD/BC system was set by Dionysius Exiguus in 525, who miscalculated by a few years."
  },
  {
    id: "crucifixion",
    title: "THE CRUCIFIXION",
    date: "AD 30 (early) / AD 33 (late) — Passover",
    confidence: "debated",
    passages: ["Matthew 27", "Mark 15", "Luke 23", "John 19"],
    people: ["Jesus", "Pilate", "Caiaphas", "Mary"],
    places: ["Jerusalem", "Golgotha"],
    themes: ["atonement", "substitution", "passover_lamb", "darkness", "veil_torn"],
    source_links: [
      { source: "MATTHEW", category: "canonical_scripture", ref: "Matthew 27", why: "Canonical account." },
      { source: "ISAIAH", category: "canonical_scripture", ref: "Isaiah 53", why: "Suffering Servant — 700 years prior." },
      { source: "PSALMS", category: "canonical_scripture", ref: "Psalm 22", why: "Crucifixion psalm — 1,000 years prior." },
      { source: "JOSEPHUS", category: "historical_witness", ref: "Antiquities XVIII.3.3", why: "The Testimonium Flavianum mentions Jesus by name." },
      { source: "TACITUS", category: "historical_witness", ref: "Annals 15.44", why: "Roman historian confirms Jesus crucified under Pilate." }
    ],
    notes: "Two main candidate dates: April 7, AD 30 OR April 3, AD 33. Both fit a Friday Passover during Pilate's tenure."
  },
  {
    id: "resurrection",
    title: "THE RESURRECTION",
    date: "Third day after Crucifixion",
    confidence: "certain",
    passages: ["Matthew 28", "Mark 16", "Luke 24", "John 20-21", "1 Corinthians 15:1-8"],
    people: ["Jesus", "Mary_Magdalene", "Peter"],
    places: ["Jerusalem"],
    themes: ["resurrection", "victory_over_death", "first_fruits"],
    source_links: [
      { source: "MATTHEW", category: "canonical_scripture", ref: "Matthew 28", why: "First gospel account." },
      { source: "1CORINTHIANS", category: "canonical_scripture", ref: "1 Corinthians 15:3-8", why: "Earliest preserved creed — 500+ witnesses named." }
    ],
    notes: "1 Corinthians 15 cites 500+ living eyewitnesses. Written within 25 years of the event. The most attested ancient claim of its kind."
  },
  {
    id: "pentecost",
    title: "PENTECOST — THE SPIRIT POURED OUT",
    date: "50 days after Resurrection",
    confidence: "approximate",
    passages: ["Acts 2"],
    people: ["Peter", "Mary"],
    places: ["Jerusalem"],
    themes: ["holy_spirit", "church_birth", "tongues", "babel_reversed"],
    source_links: [
      { source: "ACTS", category: "canonical_scripture", ref: "Acts 2", why: "The defining account." },
      { source: "JOEL", category: "canonical_scripture", ref: "Joel 2:28-32", why: "Peter quotes this directly: 'This is that...'" }
    ],
    notes: "Pentecost = Shavuot = 50 days after Passover = anniversary of Sinai. The Spirit comes on the very day Israel remembered receiving the Torah."
  },
  {
    id: "temple_destroyed_70",
    title: "JERUSALEM AND THE TEMPLE DESTROYED",
    date: "AD 70",
    confidence: "certain",
    passages: ["Matthew 24", "Luke 21"],
    places: ["Jerusalem"],
    themes: ["judgment", "end_of_temple_system", "prophecy_fulfilled"],
    source_links: [
      { source: "MATTHEW", category: "canonical_scripture", ref: "Matthew 24:1-2", why: "Jesus predicts: 'not one stone shall be left upon another.'" },
      { source: "JOSEPHUS", category: "historical_witness", ref: "The Jewish War, Books V-VI", why: "Eyewitness Jewish account of the Roman siege and destruction." }
    ],
    notes: "Jesus predicted this 40 years before it happened. Josephus describes it in horrifying detail as an eyewitness."
  }
];

// Index by ID for fast lookup
window.CHRONOLOGICAL_EVENTS_BY_ID = {};
for (const ev of window.CHRONOLOGICAL_EVENTS) {
  window.CHRONOLOGICAL_EVENTS_BY_ID[ev.id] = ev;
}

// Index by passage for "what events touch this passage"
window.PASSAGE_TO_EVENTS = {};
for (const ev of window.CHRONOLOGICAL_EVENTS) {
  for (const passage of (ev.passages || [])) {
    if (!window.PASSAGE_TO_EVENTS[passage]) window.PASSAGE_TO_EVENTS[passage] = [];
    window.PASSAGE_TO_EVENTS[passage].push(ev.id);
  }
}
