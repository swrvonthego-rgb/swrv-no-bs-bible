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
  },
  {"id": "babel_call_back", "title": "BABEL — LANGUAGES SCATTERED", "date": "Post-Flood, pre-Abraham", "confidence": "traditional", "passages": ["Genesis 11:1-9"], "places": ["Babel (Shinar)"], "themes": ["pride", "scattering", "language", "babel"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Genesis 11:1-9", "why": "The canonical account."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities I.4", "why": "First-century retelling of Babel."}], "notes": "Pentecost (Acts 2) directly reverses Babel — heaven comes DOWN, languages UNIFIED in Christ."},
  {"id": "isaac_jacob", "title": "ISAAC BLESSES JACOB", "date": "c. 2006 BC (traditional)", "confidence": "traditional", "passages": ["Genesis 27"], "people": ["Isaac", "Jacob", "Esau", "Rebekah"], "themes": ["covenant_line", "deception", "blessing"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Genesis 27", "why": "Canonical."}, {"source": "HEBREWS", "category": "canonical_scripture", "ref": "Hebrews 11:20", "why": "By faith Isaac blessed Jacob and Esau concerning things to come."}], "notes": "Jacob (the deceiver) becomes Israel. Esau becomes Edom. The two nations born here remain in tension throughout scripture."},
  {"id": "jacob_at_jabbok", "title": "JACOB WRESTLES GOD AT JABBOK", "date": "c. 1986 BC (traditional)", "confidence": "traditional", "passages": ["Genesis 32:22-32"], "people": ["Jacob"], "places": ["Peniel", "Jabbok"], "themes": ["theophany", "renaming", "wounded_blessing"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Genesis 32", "why": "Canonical."}, {"source": "HOSEA", "category": "canonical_scripture", "ref": "Hosea 12:3-4", "why": "Confirms Jacob 'had power with God'."}], "notes": "Many read this as a pre-incarnate Christ encounter. Jacob limps the rest of his life — God's blessing left a mark."},
  {"id": "joseph_to_egypt", "title": "JOSEPH SOLD INTO EGYPT", "date": "c. 1898 BC (traditional)", "confidence": "traditional", "passages": ["Genesis 37"], "people": ["Joseph"], "places": ["Dothan", "Egypt"], "themes": ["betrayal", "providence", "preservation"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Genesis 37", "why": "Canonical."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities II.2", "why": "First-century Jewish retelling."}], "notes": "Joseph's words to his brothers (Gen 50:20): 'Ye thought evil against me; but God meant it unto good.' The defining biblical statement on providence."},
  {"id": "burning_bush", "title": "THE BURNING BUSH — MOSES CALLED", "date": "c. 1446 BC (early Exodus chronology)", "confidence": "debated", "passages": ["Exodus 3-4"], "people": ["Moses"], "places": ["Mount Horeb/Sinai"], "themes": ["theophany", "divine_name", "calling"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Exodus 3-4", "why": "Canonical account."}, {"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 7:30-34", "why": "Stephen's sermon retells it."}], "notes": "The divine name YHWH ('I AM') revealed here. Jesus deliberately echoes 'I AM' throughout John's Gospel."},
  {"id": "golden_calf", "title": "THE GOLDEN CALF", "date": "c. 1446 BC — just after Sinai", "confidence": "debated", "passages": ["Exodus 32"], "people": ["Aaron", "Moses"], "places": ["Mount Sinai"], "themes": ["idolatry", "intercession", "broken_covenant"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Exodus 32", "why": "Canonical."}, {"source": "1CORINTHIANS", "category": "canonical_scripture", "ref": "1 Corinthians 10:7", "why": "Paul cites this as warning to Christians."}], "notes": "Within 40 days of saying 'all that the LORD hath spoken we will do' (Exod 19:8), Israel made an idol. The pattern of human covenant-breaking."},
  {"id": "tabernacle_built", "title": "THE TABERNACLE COMPLETED", "date": "c. 1445 BC (1 year after Exodus)", "confidence": "debated", "passages": ["Exodus 40"], "people": ["Moses", "Aaron"], "themes": ["dwelling_place", "presence", "shekinah"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Exodus 40", "why": "Canonical — cloud of glory fills tabernacle."}, {"source": "JOHN", "category": "canonical_scripture", "ref": "John 1:14", "why": "The Word 'tabernacled' (eskenosen) among us — Jesus IS God's tabernacle."}], "notes": "The cloud of glory that filled the tabernacle returns in Christ (John 1:14), departs at the cross (the veil torn), and returns finally in Rev 21:3 — 'the tabernacle of God is with men.'"},
  {"id": "spies_canaan", "title": "THE TWELVE SPIES IN CANAAN", "date": "c. 1444 BC", "confidence": "debated", "passages": ["Numbers 13-14"], "people": ["Moses", "Joshua", "Caleb"], "places": ["Canaan", "Kadesh"], "themes": ["faith_vs_fear", "delayed_inheritance"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Numbers 13-14", "why": "Canonical."}, {"source": "HEBREWS", "category": "canonical_scripture", "ref": "Hebrews 3:7-19", "why": "NT warning: 'they could not enter in because of unbelief.'"}], "notes": "Ten spies saw giants and faltered; Joshua and Caleb saw God. Forty years of wilderness wandering directly caused by this moment of faithlessness."},
  {"id": "moses_death", "title": "DEATH OF MOSES", "date": "c. 1406 BC (end of wilderness)", "confidence": "debated", "passages": ["Deuteronomy 34"], "people": ["Moses"], "places": ["Mount Nebo"], "themes": ["transition", "leadership", "promised_land"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Deuteronomy 34", "why": "Canonical."}, {"source": "JUDE", "category": "canonical_scripture", "ref": "Jude 9", "why": "References Michael disputing with Satan over Moses' body."}], "notes": "Moses saw the Promised Land but did not enter. God Himself buried him in a secret place. He appears with Elijah at the Transfiguration."},
  {"id": "jericho_falls", "title": "JERICHO FALLS", "date": "c. 1406 BC", "confidence": "debated", "passages": ["Joshua 6"], "people": ["Joshua", "Rahab"], "places": ["Jericho"], "themes": ["faith", "conquest", "deliverance_of_outsider"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Joshua 6", "why": "Canonical."}, {"source": "HEBREWS", "category": "canonical_scripture", "ref": "Hebrews 11:30-31", "why": "By faith the walls fell; by faith Rahab was saved."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities V.1", "why": "First-century retelling."}], "notes": "Rahab the Canaanite prostitute becomes the first Gentile to join Israel — and becomes ancestor of David and Christ (Matt 1:5)."},
  {"id": "deborah_barak", "title": "DEBORAH AND BARAK DEFEAT SISERA", "date": "c. 1200 BC", "confidence": "approximate", "passages": ["Judges 4-5"], "places": ["Mount Tabor"], "themes": ["female_judge", "deliverance"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Judges 4-5", "why": "Canonical. The Song of Deborah (Judges 5) is among the oldest poems in scripture."}], "notes": "Deborah is the only female judge of Israel — prophetess and military commander. Song of Deborah is some of the oldest preserved Hebrew poetry."},
  {"id": "gideon", "title": "GIDEON'S 300", "date": "c. 1191 BC", "confidence": "approximate", "passages": ["Judges 6-7"], "themes": ["weakness_strength", "deliverance"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Judges 6-7", "why": "Canonical."}, {"source": "HEBREWS", "category": "canonical_scripture", "ref": "Hebrews 11:32", "why": "Gideon listed in hall of faith."}], "notes": "God reduced Gideon's army from 32,000 to 300 — so that Israel could not boast. The pattern: God's power perfected in weakness."},
  {"id": "samson", "title": "SAMSON'S LAST STAND", "date": "c. 1078 BC", "confidence": "approximate", "passages": ["Judges 13-16"], "themes": ["consecration", "downfall", "victory_in_death"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Judges 13-16", "why": "Canonical."}, {"source": "HEBREWS", "category": "canonical_scripture", "ref": "Hebrews 11:32", "why": "Samson in hall of faith despite his moral failures."}], "notes": "Samson killed more enemies in his death than in his life. A flawed but ultimately faithful judge."},
  {"id": "samuel_called", "title": "GOD CALLS THE BOY SAMUEL", "date": "c. 1080 BC", "confidence": "approximate", "passages": ["1 Samuel 3"], "people": ["Samuel"], "places": ["Shiloh"], "themes": ["prophetic_call", "hearing_God"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "1 Samuel 3", "why": "Canonical."}], "notes": "'Speak, LORD; for thy servant heareth' (1 Sam 3:9) becomes the model prayer for hearing God."},
  {"id": "saul_anointed", "title": "SAUL ANOINTED FIRST KING", "date": "c. 1050 BC", "confidence": "approximate", "passages": ["1 Samuel 9-10"], "people": ["Saul", "Samuel"], "themes": ["kingship", "anointing"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "1 Samuel 9-10", "why": "Canonical."}], "notes": "Israel demanded a king 'like the nations.' God gave them what they wanted, knowing it would fail — preparing for the king after His own heart."},
  {"id": "david_goliath", "title": "DAVID AND GOLIATH", "date": "c. 1020 BC", "confidence": "approximate", "passages": ["1 Samuel 17"], "people": ["David", "Saul", "Jonathan"], "places": ["Valley of Elah"], "themes": ["faith", "underdog", "weakness_strength"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "1 Samuel 17", "why": "Canonical."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities VI.9", "why": "First-century retelling."}], "notes": "Not 'David vs Goliath' — David vs the giant + 'the LORD of hosts, the God of the armies of Israel' (1 Sam 17:45). Faith with action."},
  {"id": "david_bathsheba", "title": "DAVID AND BATHSHEBA", "date": "c. 991 BC", "confidence": "approximate", "passages": ["2 Samuel 11-12"], "people": ["David", "Bathsheba"], "themes": ["adultery", "murder", "confrontation", "repentance"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Samuel 11-12", "why": "Canonical."}, {"source": "PSALMS", "category": "canonical_scripture", "ref": "Psalm 51", "why": "David's repentance after Nathan confronted him."}], "notes": "The man after God's own heart fell catastrophically. Yet his repentance (Psalm 51) becomes the model penitential prayer for 3,000 years."},
  {"id": "ark_to_jerusalem", "title": "DAVID BRINGS THE ARK TO JERUSALEM", "date": "c. 1000 BC", "confidence": "approximate", "passages": ["2 Samuel 6", "1 Chronicles 13, 15-16"], "people": ["David"], "places": ["Jerusalem"], "themes": ["ark", "worship", "presence_of_god"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Samuel 6", "why": "Canonical."}], "notes": "Uzzah died touching the ark. Three months later David did it correctly — carried on Levite shoulders as Torah commanded. Worship requires obedience."},
  {"id": "elijah_carmel", "title": "ELIJAH ON MOUNT CARMEL", "date": "c. 858 BC", "confidence": "approximate", "passages": ["1 Kings 18"], "people": ["Elijah"], "places": ["Mount Carmel"], "themes": ["fire_from_heaven", "idolatry_defeated"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "1 Kings 18", "why": "Canonical."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities VIII.13", "why": "First-century retelling."}], "notes": "One man vs 450 prophets of Baal. Fire fell from heaven. The drought broke. One faithful person plus God IS a majority."},
  {"id": "elijah_horeb", "title": "ELIJAH AT HOREB — THE STILL SMALL VOICE", "date": "c. 858 BC (just after Carmel)", "confidence": "approximate", "passages": ["1 Kings 19"], "people": ["Elijah", "Elisha"], "places": ["Mount Horeb"], "themes": ["depression", "ministry_handoff", "still_small_voice"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "1 Kings 19", "why": "Canonical."}], "notes": "God came not in wind, earthquake, or fire — but in a still small voice. Often God speaks loudest in quiet. Elisha called to succeed."},
  {"id": "elijah_translated", "title": "ELIJAH TAKEN TO HEAVEN", "date": "c. 848 BC", "confidence": "approximate", "passages": ["2 Kings 2"], "people": ["Elijah", "Elisha"], "themes": ["translation_without_death", "succession"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Kings 2", "why": "Canonical."}, {"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 17:1-13", "why": "Elijah appears at the Transfiguration."}], "notes": "Elijah and Enoch — the only two figures in scripture who did not die. Both expected to return as the Two Witnesses (Rev 11) per ancient tradition."},
  {"id": "northern_kingdom_falls", "title": "ASSYRIA DESTROYS NORTHERN KINGDOM", "date": "722 BC", "confidence": "certain", "passages": ["2 Kings 17"], "places": ["Samaria"], "themes": ["judgment", "exile", "ten_lost_tribes"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Kings 17", "why": "Canonical account."}, {"source": "ISAIAH", "category": "canonical_scripture", "ref": "Isaiah 7-8", "why": "Isaiah prophesied this fall."}], "notes": "Confirmed by Assyrian records (Sargon II's annals). Begins the 'lost ten tribes' tradition. Samaria's mixed population becomes the later Samaritans."},
  {"id": "hezekiah_delivered", "title": "ANGEL DESTROYS ASSYRIAN ARMY", "date": "701 BC", "confidence": "certain", "passages": ["2 Kings 18-19", "Isaiah 36-37"], "people": ["Isaiah"], "places": ["Jerusalem"], "themes": ["miraculous_deliverance", "answered_prayer"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Kings 19", "why": "Canonical."}, {"source": "HERODOTUS", "category": "historical_witness", "ref": "Histories II.141", "why": "Greek historian records the Assyrian army's mysterious destruction outside Jerusalem (recasts it as mice eating bowstrings)."}], "notes": "185,000 Assyrian soldiers died in one night. Confirmed in the Taylor Prism (Sennacherib's account stops short — he never claims to have taken Jerusalem)."},
  {"id": "josiah_law", "title": "JOSIAH FINDS THE BOOK OF THE LAW", "date": "622 BC", "confidence": "certain", "passages": ["2 Kings 22-23", "2 Chronicles 34-35"], "people": ["Josiah"], "themes": ["reformation", "rediscovery"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "2 Kings 22", "why": "Canonical."}], "notes": "Josiah's reforms were Israel's last great revival before exile. The lost Book of the Law was likely Deuteronomy."},
  {"id": "daniel_in_lions", "title": "DANIEL IN THE LIONS' DEN", "date": "c. 539 BC", "confidence": "approximate", "passages": ["Daniel 6"], "people": ["Daniel"], "places": ["Babylon"], "themes": ["faithfulness_under_pressure", "deliverance"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Daniel 6", "why": "Canonical."}], "notes": "Daniel kept praying three times daily 'as he did aforetime' (Dan 6:10). Crisis revealed habit, not created courage."},
  {"id": "temple_rebuilt", "title": "SECOND TEMPLE DEDICATED", "date": "516 BC", "confidence": "certain", "passages": ["Ezra 6"], "places": ["Jerusalem"], "themes": ["rebuilding", "fulfilled_prophecy", "renewal"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Ezra 6", "why": "Canonical."}, {"source": "HAGGAI", "category": "canonical_scripture", "ref": "Haggai 2:9", "why": "'The glory of this latter house shall be greater than of the former.'"}], "notes": "70 years after the destruction — exactly fulfilling Jeremiah 25:11. Stood until Herod expanded it; ultimately destroyed AD 70."},
  {"id": "esther_saves", "title": "ESTHER SAVES THE JEWS", "date": "c. 473 BC", "confidence": "approximate", "passages": ["Esther 4-7"], "people": ["Mordecai"], "places": ["Shushan"], "themes": ["providence", "courage", "for_such_a_time_as_this"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Esther 4:14", "why": "'Who knoweth whether thou art come to the kingdom for such a time as this?'"}], "notes": "God's name is never mentioned in Esther — yet His providence drives every page. Purim still celebrated annually."},
  {"id": "walls_rebuilt", "title": "NEHEMIAH REBUILDS JERUSALEM'S WALLS", "date": "445 BC", "confidence": "certain", "passages": ["Nehemiah 1-6"], "places": ["Jerusalem"], "themes": ["leadership", "perseverance", "prayer_and_planning"], "source_links": [{"source": "KJV", "category": "canonical_scripture", "ref": "Nehemiah 6:15", "why": "Walls finished in 52 days."}], "notes": "Nehemiah prayed AND set guards. Faith plus action. The walls would last until AD 70."},
  {"id": "intertestamental", "title": "400 YEARS OF SILENCE", "date": "c. 433 BC - 6 BC", "confidence": "certain", "passages": ["Malachi 4"], "themes": ["waiting", "second_temple_period"], "source_links": [{"source": "MALACHI", "category": "canonical_scripture", "ref": "Malachi 4:5-6", "why": "Final OT promise: Elijah will return before the day of the LORD."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities XI-XIV", "why": "Records the intertestamental Hasmonean and Roman periods."}, {"source": "ENOCH", "category": "second_temple_background", "ref": "1 Enoch (entire)", "why": "Most influential Second Temple text — shapes NT worldview."}], "notes": "No canonical prophet spoke for 400 years. But 1 Enoch, Jubilees, the DSS, and other Second Temple writings flourished — shaping the world Jesus was born into."},
  {"id": "wise_men", "title": "MAGI VISIT THE INFANT KING", "date": "c. 5-4 BC", "confidence": "approximate", "passages": ["Matthew 2:1-12"], "people": ["Jesus", "Herod"], "places": ["Bethlehem"], "themes": ["fulfillment", "gentile_inclusion"], "source_links": [{"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 2", "why": "Canonical."}, {"source": "JOSEPHUS", "category": "historical_witness", "ref": "Antiquities XVII.8", "why": "Records Herod's paranoia and final atrocities."}], "notes": "Gentile astrologers from the east are the first 'foreign' people to worship Christ. The gospel jumps cultural lines on day one."},
  {"id": "jesus_baptized", "title": "JESUS BAPTIZED BY JOHN", "date": "AD 27", "confidence": "approximate", "passages": ["Matthew 3", "Mark 1", "Luke 3"], "people": ["Jesus", "JohnBaptist"], "places": ["Jordan River"], "themes": ["trinity_revealed", "ministry_beginning"], "source_links": [{"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 3:13-17", "why": "All three Persons of the Trinity manifest simultaneously."}], "notes": "Father speaks audibly. Son baptized publicly. Spirit descends visibly. The clearest Trinitarian moment in scripture."},
  {"id": "wilderness_temptation", "title": "JESUS' WILDERNESS TEMPTATION", "date": "AD 27 (immediately after baptism)", "confidence": "approximate", "passages": ["Matthew 4", "Luke 4"], "people": ["Jesus", "Satan"], "themes": ["temptation", "scripture_as_weapon"], "source_links": [{"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 4:1-11", "why": "All three temptations + Jesus' triple Deuteronomy response."}], "notes": "Jesus answered every temptation with 'It is written...' Scripture is the weapon. He quoted only Deuteronomy."},
  {"id": "sermon_mount", "title": "THE SERMON ON THE MOUNT", "date": "AD 28", "confidence": "approximate", "passages": ["Matthew 5-7"], "people": ["Jesus"], "places": ["Galilee", "Mount of Beatitudes"], "themes": ["kingdom_ethics", "beatitudes", "new_torah"], "source_links": [{"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 5-7", "why": "Longest single block of Jesus' teaching."}], "notes": "Jesus sat on a mountain — Moses received the Torah on a mountain. This is the new Torah from a greater Moses."},
  {"id": "twelve_chosen", "title": "TWELVE APOSTLES CHOSEN", "date": "AD 28", "confidence": "approximate", "passages": ["Mark 3:13-19", "Luke 6:12-16"], "people": ["Peter", "Andrew", "James", "John", "Matthew"], "themes": ["calling", "new_israel"], "source_links": [{"source": "LUKE", "category": "canonical_scripture", "ref": "Luke 6:12-16", "why": "Lists the twelve after a night of prayer."}], "notes": "Twelve mirrors the twelve tribes. Jesus is forming a new Israel — fishermen, tax collectors, even a zealot — and ONE who would betray Him."},
  {"id": "feeding_5000", "title": "FEEDING OF THE 5,000", "date": "AD 29", "confidence": "approximate", "passages": ["Matthew 14:13-21", "Mark 6:30-44", "Luke 9:10-17", "John 6:1-15"], "people": ["Jesus"], "themes": ["miracle", "provision", "bread_of_life"], "source_links": [{"source": "JOHN", "category": "canonical_scripture", "ref": "John 6", "why": "Only Gospel to include the 'bread of life' discourse that followed."}], "notes": "Only miracle in all four Gospels. 5,000 men plus women and children — perhaps 15,000-20,000 total. Twelve baskets left over: one per apostle."},
  {"id": "transfiguration", "title": "THE TRANSFIGURATION", "date": "AD 29", "confidence": "approximate", "passages": ["Matthew 17:1-13", "Mark 9:2-13", "Luke 9:28-36"], "people": ["Jesus", "Peter", "John", "James"], "places": ["Mount Hermon (traditional) or Mount Tabor"], "themes": ["glory_revealed", "law_and_prophets", "father_speaks"], "source_links": [{"source": "MATTHEW", "category": "canonical_scripture", "ref": "Matthew 17:1-13", "why": "Canonical account."}, {"source": "2PETER", "category": "canonical_scripture", "ref": "2 Peter 1:16-18", "why": "Peter's eyewitness recollection decades later."}], "notes": "Moses (Law) and Elijah (Prophets) appear with Jesus — confirming He fulfills both. The Father speaks audibly for the third time: 'This is my beloved Son.'"},
  {"id": "raising_lazarus", "title": "JESUS RAISES LAZARUS", "date": "AD 30 (weeks before Passion Week)", "confidence": "approximate", "passages": ["John 11"], "people": ["Jesus"], "places": ["Bethany"], "themes": ["resurrection_power", "weeping_with_us"], "source_links": [{"source": "JOHN", "category": "canonical_scripture", "ref": "John 11", "why": "Only Gospel to record it — Jesus' greatest pre-resurrection miracle."}], "notes": "Lazarus dead four days. 'Jesus wept' (John 11:35) — the shortest verse, showing Christ's full humanity. This miracle directly triggered the plot to kill Him."},
  {"id": "triumphal_entry", "title": "TRIUMPHAL ENTRY", "date": "AD 30/33 — Sunday before Passover", "confidence": "debated", "passages": ["Matthew 21:1-11", "Mark 11:1-11", "Luke 19:28-44", "John 12:12-19"], "people": ["Jesus"], "places": ["Jerusalem", "Mount of Olives"], "themes": ["king_humble", "fulfilled_prophecy"], "source_links": [{"source": "ZECHARIAH", "category": "canonical_scripture", "ref": "Zechariah 9:9", "why": "'Behold, thy King cometh unto thee... lowly, and riding upon an ass.'"}], "notes": "Riding a donkey, not a horse — peace, not war. Hosanna means 'save now!' Same crowds 5 days later: 'Crucify him.'"},
  {"id": "last_supper", "title": "THE LAST SUPPER", "date": "AD 30/33 — Thursday night, Passover", "confidence": "debated", "passages": ["Matthew 26:17-29", "Mark 14:12-25", "Luke 22:7-23", "John 13-17"], "people": ["Jesus", "Peter"], "places": ["Jerusalem"], "themes": ["new_covenant", "communion", "footwashing"], "source_links": [{"source": "1CORINTHIANS", "category": "canonical_scripture", "ref": "1 Corinthians 11:23-26", "why": "Earliest recorded eucharistic words: 'This is my body... this is my blood.'"}], "notes": "A Passover meal — Jesus reinterpreted bread and wine as His body and blood. The new covenant embedded inside the oldest ritual."},
  {"id": "gethsemane", "title": "GETHSEMANE", "date": "AD 30/33 — Thursday night", "confidence": "debated", "passages": ["Matthew 26:36-56", "Mark 14:32-52", "Luke 22:39-53"], "people": ["Jesus", "Peter"], "places": ["Gethsemane"], "themes": ["agony", "submission", "betrayal"], "source_links": [{"source": "LUKE", "category": "canonical_scripture", "ref": "Luke 22:44", "why": "'His sweat was as it were great drops of blood falling down to the ground.'"}], "notes": "Gethsemane means 'oil press.' Jesus was crushed in prayer in the place where olives were crushed. 'Not my will, but thine, be done.'"},
  {"id": "ascension", "title": "THE ASCENSION", "date": "AD 30/33 — 40 days after Resurrection", "confidence": "debated", "passages": ["Acts 1:6-11", "Luke 24:50-53"], "people": ["Jesus"], "places": ["Mount of Olives", "Bethany"], "themes": ["enthronement", "return_promised"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 1:11", "why": "'This same Jesus, which is taken up from you into heaven, shall so come in like manner.'"}], "notes": "Jesus rose physically into heaven. The angels promised He will return in exactly the same way — physical, visible, on the Mount of Olives (Zech 14:4)."},
  {"id": "stephen_martyred", "title": "STEPHEN MARTYRED", "date": "AD 34", "confidence": "approximate", "passages": ["Acts 7"], "people": ["Stephen", "Paul"], "places": ["Jerusalem"], "themes": ["martyrdom", "first_christian_blood"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 7", "why": "Stephen's sermon + his death. Saul of Tarsus held the coats."}], "notes": "First Christian martyr. His prayer 'Lord, lay not this sin to their charge' echoed Christ's. Saul watching — preparing for his own conversion 3 chapters later."},
  {"id": "paul_conversion", "title": "PAUL'S DAMASCUS ROAD CONVERSION", "date": "AD 34/35", "confidence": "approximate", "passages": ["Acts 9:1-19", "Acts 22:6-16", "Acts 26:12-18", "Galatians 1:11-17"], "people": ["Paul"], "places": ["Damascus"], "themes": ["conversion", "calling", "grace"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 9", "why": "Primary account."}], "notes": "The chief persecutor becomes the chief missionary. Recorded 3 times in Acts — the most-repeated single event in the book."},
  {"id": "cornelius", "title": "CORNELIUS — FIRST GENTILE CONVERT", "date": "AD 37/40", "confidence": "approximate", "passages": ["Acts 10-11"], "people": ["Peter"], "places": ["Caesarea"], "themes": ["gentile_inclusion", "spirit_falls", "no_partiality"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 10", "why": "The Spirit fell on Gentiles before baptism — settled the question."}], "notes": "Cornelius was a Roman centurion. The HOLY SPIRIT FELL on Gentiles before circumcision or even baptism — settling the question of Gentile inclusion."},
  {"id": "first_missionary_journey", "title": "PAUL'S FIRST MISSIONARY JOURNEY", "date": "AD 46-48", "confidence": "approximate", "passages": ["Acts 13-14"], "people": ["Paul", "Barnabas"], "themes": ["gospel_to_gentiles", "missions"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 13-14", "why": "First missionary journey — Cyprus, Antioch of Pisidia, Iconium, Lystra, Derbe."}], "notes": "Paul shifts focus from Jewish synagogues to Gentile cities. At Lystra he is stoned, dragged out 'supposing he had been dead' — and gets up and walks back into the city."},
  {"id": "jerusalem_council", "title": "THE JERUSALEM COUNCIL", "date": "AD 49/50", "confidence": "approximate", "passages": ["Acts 15"], "people": ["Paul", "Peter", "James"], "places": ["Jerusalem"], "themes": ["gentile_inclusion", "grace_alone"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 15", "why": "Settled the question: Gentiles do not need to keep the Mosaic Law to be saved."}], "notes": "The most important meeting in church history after Pentecost. Established that the gospel is for ALL — not gospel-plus-Judaism."},
  {"id": "paul_rome", "title": "PAUL ARRIVES IN ROME", "date": "c. AD 60", "confidence": "approximate", "passages": ["Acts 28"], "people": ["Paul"], "places": ["Rome"], "themes": ["gospel_to_empire", "prison_ministry"], "source_links": [{"source": "ACTS", "category": "canonical_scripture", "ref": "Acts 28", "why": "Acts ends with Paul in Rome 'preaching the kingdom of God... no man forbidding him.'"}], "notes": "Acts ends with the gospel having reached Rome — the heart of the empire. Paul wrote Ephesians, Philippians, Colossians, Philemon from this imprisonment."},
  {"id": "patmos_revelation", "title": "JOHN ON PATMOS — REVELATION GIVEN", "date": "c. AD 95", "confidence": "approximate", "passages": ["Revelation 1"], "people": ["Jesus"], "places": ["Patmos"], "themes": ["revelation", "exile", "final_word"], "source_links": [{"source": "REVELATION", "category": "canonical_scripture", "ref": "Revelation 1", "why": "John's vision opens the book."}], "notes": "John exiled by Domitian. Receives the Revelation — final canonical book. Until Jesus' return, there is no more 'thus saith the Lord.'"}
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
