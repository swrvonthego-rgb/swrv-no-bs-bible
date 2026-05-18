// SWRV Kingdom Bible — Concept Completeness Pack
// Fills the 32 audit-flagged gaps from the 5-pass definition integrity audit:
// 12 high-value concepts that were missing entirely from the deep dictionary,
// plus 20 concepts that were thin in legacy DEFINITIONS (originals + Strong's
// but lacking misunderstanding-warning / source-trace / related-verses).
// Each entry uses the 17-field FULL TERM CARD schema. Loaded after
// english-bible-dictionary.js so it merges into window.ENGLISH_BIBLE_DICT.

(function(){
  window.ENGLISH_BIBLE_DICT = window.ENGLISH_BIBLE_DICT || {};
  window.DEFINITION_INTEGRITY_AUDIT = window.DEFINITION_INTEGRITY_AUDIT || {};
  const entries = {
"body":{
  word:"body", plain:"The whole material person — Hebrew/Greek anthropology treats it as good and integral, not as a disposable shell.",
  deep:"Greek SOMA (G4983) is body as the whole material person — Christ's body broken (Matt 26:26), believer's body as living sacrifice (Rom 12:1) and temple of the Holy Spirit (1 Cor 6:19), and the resurrection body (1 Cor 15:35-49). Hebrew BASAR (H1320) often translated 'body' is actually closer to 'flesh' (see entry). Hebrew uses GEVIYAH (H1472) and GUFAH (H1480) for corpse/body. The Bible does NOT teach a Greek-philosophical dualism in which body is bad and soul is the 'real' you.",
  misunderstood:"Body is not evil, not a prison, not disposable. Resurrection of the body (1 Cor 15) is the Christian hope — not escape from the body but its redemption (Rom 8:23).",
  matters:"Body theology shapes ethics (1 Cor 6:13-20 — sexual ethics rest on body-belongs-to-the-Lord), worship (Rom 12:1), eschatology (resurrection), and the dignity of the human person.",
  originals:[
    {lang:"Greek",word:"σῶμα",translit:"soma",strongs:"G4983",note:"Body — whole material person. Used for individual body, the church-as-body (Eph 4:12), and the resurrection body."},
    {lang:"Hebrew",word:"גְּוִיָּה",translit:"geviyah",strongs:"H1472",note:"Body, corpse — physical body especially when discussing the dead or wounded."},
    {lang:"Hebrew",word:"בָּשָׂר",translit:"basar",strongs:"H1320",note:"Flesh / body / kindred (see flesh entry for the full senses)."}
  ],
  rangeOfMeaning:["physical body","whole material person","corpse","metaphorical body (church)","resurrection body"],
  notMean:"Not a disposable shell. Not the prison of the soul. Not 'lesser' than the spirit.",
  cultural:"Greek philosophy (especially later Platonic/Gnostic streams) opposed body and spirit, treating the body as low and the soul as the 'real' person. Hebrew Scripture and the NT reject this — body is good (created), fallen (broken), and redeemed (resurrected).",
  kingdomSignificance:"Believers' bodies are temples of the Holy Spirit (1 Cor 6:19); the church is Christ's body (Eph 1:23); the resurrected body is the kingdom-future of every believer (1 Cor 15:42-49).",
  relatedVerses:["Genesis 2:7","Psalm 139:13-16","Romans 6:12-13","Romans 8:11, 23","Romans 12:1","1 Corinthians 6:13-20","1 Corinthians 12:12-27","1 Corinthians 15:35-58","2 Corinthians 5:1-10","Philippians 3:20-21","1 Thessalonians 5:23"],
  relatedWords:["flesh","soul","spirit","resurrection","temple","member"],
  category:"identity / personhood",
  sources:["Strong's G4983","Strong's H1472","Strong's H1320","Thayer's SOMA","BDB"],
  confidence:"direct-source"
},
"testament":{
  word:"testament", plain:"A covenant — same word as 'covenant'; KJV's older English for the New Covenant.",
  deep:"Greek DIATHEKE (G1242) means covenant in biblical usage; in secular Greek it more often meant 'last will and testament.' The KJV translators used 'testament' especially for the New Covenant (Matt 26:28; Heb 9:15-17). 'Old Testament' / 'New Testament' as titles for the two halves of the Bible come from this. The Hebrew equivalent is BRIT (H1285). When you read 'testament' in Scripture, read 'covenant' first — relational, sworn, blood-sealed.",
  misunderstood:"Not a legal will (in most contexts). Not a 'collection of writings' as a primary meaning. The Bible's testaments are first covenants — sworn relationships between God and people.",
  matters:"Reading 'New Testament' as just 'new books' loses Christ's central act: 'this is my blood of the new testament/covenant' (Matt 26:28).",
  originals:[
    {lang:"Greek",word:"διαθήκη",translit:"diatheke",strongs:"G1242",note:"Covenant; will/testament. Translates BRIT in the LXX."},
    {lang:"Hebrew",word:"בְּרִית",translit:"brit (berit)",strongs:"H1285",note:"Covenant — the foundational OT relational category."}
  ],
  rangeOfMeaning:["covenant","sworn agreement","last will (Heb 9:16-17 plays on both senses)","division of Scripture (Old/New Testament titles)"],
  notMean:"Not modern 'last will.' Not just 'collection of books.'",
  cultural:"ANE suzerain-vassal treaty form gave the OT covenants their structure (preamble, prologue, stipulations, witnesses, blessings/curses). Greek diatheke could mean either covenant or testament; Hebrews 9:15-17 plays on both senses.",
  kingdomSignificance:"The 'New Testament' is the new covenant Christ inaugurates in His blood (Luke 22:20; Heb 8-10). Every NT book is covenant document.",
  relatedVerses:["Jeremiah 31:31-34","Matthew 26:28","Luke 22:20","1 Corinthians 11:25","2 Corinthians 3:6, 14","Hebrews 8:6-13","Hebrews 9:15-22","Hebrews 12:24","Hebrews 13:20"],
  relatedWords:["covenant","brit","diatheke","blood","new covenant"],
  category:"covenant / legal",
  sources:["Strong's G1242","Strong's H1285","Thayer's","BDB"],
  confidence:"direct-source"
},
"torah":{
  word:"torah", plain:"Instruction, teaching — broader than 'law' or 'rules.'",
  deep:"Hebrew TORAH (H8451) means instruction, direction, teaching — from the root YARAH (to throw, shoot; hence to teach by 'pointing the way'). The Torah is the first five books of the Bible (Genesis-Deuteronomy) and broadly the entire teaching of YHWH. Greek NOMOS (G3551) translates it as 'law' in the LXX and NT, but NOMOS in Greek philosophy and Roman jurisprudence carried different connotations — 'law as legal code' rather than 'instruction as relationship.' Paul's debates about 'the law' play on this tension.",
  misunderstood:"Not 'mere rules' or 'legalism.' Torah is fatherly instruction within covenant — the path of life, not the threat of penalty. Reducing Torah to 'law that condemns' misses its loving frame in Deut 6 and Psalm 119.",
  matters:"How you read Torah shapes how you read the Old Testament and Paul. Torah-as-rules produces legalism; Torah-as-instruction-of-the-Father produces a son's heart for the Father's ways.",
  originals:[
    {lang:"Hebrew",word:"תּוֹרָה",translit:"torah",strongs:"H8451",note:"Instruction, teaching, law. From YARAH (to point/teach). Used 219x in OT."},
    {lang:"Hebrew",word:"יָרָה",translit:"yarah",strongs:"H3384",note:"To throw, shoot, instruct, teach."},
    {lang:"Greek",word:"νόμος",translit:"nomos",strongs:"G3551",note:"Law — translates torah in LXX and NT; carries Greco-Roman legal connotation too."}
  ],
  rangeOfMeaning:["instruction / teaching","the Pentateuch (Genesis-Deuteronomy)","the whole OT","principle / way","commandment-body within Israel's covenant"],
  notMean:"Not 'rules vs grace.' Not 'OT bad / NT good.' Christ did not come to abolish Torah (Matt 5:17).",
  cultural:"In Jewish daily life Torah is the central study text; rabbinic culture revolves around discussing and obeying it. The Mishnah and Talmud are commentary on Torah.",
  kingdomSignificance:"'The law (torah) of the Spirit of life in Christ Jesus' (Rom 8:2) — torah-as-instruction is now written on the heart (Jer 31:33; Heb 8:10) by the Spirit.",
  relatedVerses:["Deuteronomy 6:1-9","Joshua 1:8","Psalm 1","Psalm 19:7-11","Psalm 119","Isaiah 2:3","Jeremiah 31:31-34","Matthew 5:17-20","Romans 7:12-14","Romans 8:1-4","Galatians 3:24-25","Hebrews 8:10","James 1:25"],
  relatedWords:["law","commandment","instruction","mitzvah","Pentateuch","Moses"],
  category:"covenant / law",
  sources:["Strong's H8451","Strong's H3384","Strong's G3551","BDB TORAH","Thayer's NOMOS"],
  confidence:"direct-source"
},
"oath":{
  word:"oath", plain:"A sworn statement invoking God as witness — binding under penalty of covenant curse.",
  deep:"Hebrew SHEVUAH (H7621) / SHAVA (H7650) — to swear, take an oath. Greek HORKOS (G3727) — oath. In ANE covenant culture, oaths invoked the gods as witnesses; breaking an oath called down their judgment. God Himself swears by Himself (Gen 22:16; Heb 6:13-14) since no one is higher. Jesus' 'swear not at all' (Matt 5:34-37) does not abolish all oath-taking (Paul swears in Rom 1:9, 2 Cor 1:23, etc.) — it forbids the casuistic loopholes Pharisaic culture had built around different oath-formulas.",
  misunderstood:"Jesus' 'do not swear' is not blanket forbidden against legal oaths; it targets manipulative oath-loopholes. 'Yea, yea; Nay, nay' calls for transparent honest speech.",
  matters:"Marriage vows, baptismal confessions, court testimony, covenant-cutting — all are oath-acts. How seriously you take your word matters in the kingdom.",
  originals:[
    {lang:"Hebrew",word:"שְׁבוּעָה",translit:"shevuah",strongs:"H7621",note:"Oath, sworn statement."},
    {lang:"Hebrew",word:"שָׁבַע",translit:"shava",strongs:"H7650",note:"To swear (the verb)."},
    {lang:"Greek",word:"ὅρκος",translit:"horkos",strongs:"G3727",note:"Oath."},
    {lang:"Greek",word:"ὀμνύω",translit:"omnyo",strongs:"G3660",note:"To swear (verb)."}
  ],
  rangeOfMeaning:["sworn covenant statement","God's self-swearing","human pledge","priestly oath","royal oath","NT honest-yes/no"],
  notMean:"Not casual speech-emphasis. Not magical incantation. Not abolished by Jesus' word — clarified.",
  cultural:"ANE oaths were sworn by deities (sometimes multiple) and by tangible witnesses (heaven/earth — Deut 30:19; Isa 1:2). Hand-on-thigh oath (Gen 24:2; 47:29) connected the oath to covenant descendants.",
  kingdomSignificance:"God's oath to Abraham (Gen 22:16-18) is the unbreakable ground of the gospel (Heb 6:13-20). The believer rests on God's sworn word.",
  relatedVerses:["Genesis 22:15-18","Genesis 24:2-3","Numbers 30","Deuteronomy 6:13","Psalm 110:4","Matthew 5:33-37","Matthew 26:63-64","Romans 1:9","2 Corinthians 1:23","Hebrews 6:13-20","Hebrews 7:20-22","James 5:12"],
  relatedWords:["covenant","vow","swear","promise","faithful"],
  category:"covenant / legal",
  sources:["Strong's H7621","Strong's H7650","Strong's G3727","Strong's G3660","BDB","Thayer's"],
  confidence:"direct-source"
},
"brit":{
  word:"brit", plain:"Hebrew covenant — the foundational relational category of the Bible (=berit/b'rith).",
  deep:"Hebrew BRIT (H1285) — covenant. Same word as 'covenant' (see covenant entry) but called out here because the Hebrew word itself is foundational vocabulary. BRIT is sworn, blood-sealed, witnessed, often eaten-together (covenant meals, salt of the covenant). The phrase KARAT BRIT — literally 'to cut a covenant' — preserves the actual ritual: animals were slain and split, parties walked between (Gen 15; Jer 34:18). 'Berith milah' — covenant of circumcision (Gen 17) — gives Jewish boys their entry-into-covenant rite.",
  misunderstood:"Not a contract. Not a feeling. Brit is sworn, often involving blood, and never simply dissolves on breach — it provokes either restoration or curse.",
  matters:"Every biblical 'covenant' is a BRIT — Noahic, Abrahamic, Mosaic, Davidic, New. Reading Scripture without the BRIT frame collapses its main storyline.",
  originals:[
    {lang:"Hebrew",word:"בְּרִית",translit:"brit (berit)",strongs:"H1285",note:"Covenant — sworn, blood-sealed, witnessed."},
    {lang:"Hebrew",word:"כָּרַת",translit:"karat",strongs:"H3772",note:"To cut — used with BRIT to mean 'cut a covenant.'"},
    {lang:"Greek",word:"διαθήκη",translit:"diatheke",strongs:"G1242",note:"Translates BRIT in the LXX and NT."}
  ],
  rangeOfMeaning:["covenant","sworn alliance","marriage covenant","priesthood covenant","royal covenant","new covenant in Christ"],
  notMean:"Not contract. Not informal arrangement.",
  cultural:"ANE covenants used animal-split rituals (Gen 15:9-18; Jer 34:18-20), salt (Num 18:19; 2 Chr 13:5), and shared meals (Gen 26:30; Ex 24:11). Circumcision marked covenant identity in Abraham's line.",
  kingdomSignificance:"BRIT runs through Scripture: God binds Himself to people, and the kingdom is administered through covenants culminating in the new covenant in Christ's blood.",
  relatedVerses:["Genesis 9:8-17","Genesis 15","Genesis 17","Exodus 19:5-6","Exodus 24:1-8","2 Samuel 7","Psalm 89:34","Jeremiah 31:31-34","Luke 22:20","Hebrews 8-10","Hebrews 13:20"],
  relatedWords:["covenant","testament","diatheke","karat","hesed","faithful"],
  category:"covenant / legal",
  sources:["Strong's H1285","Strong's H3772","Strong's G1242","BDB","Thayer's"],
  confidence:"direct-source"
},
"sanctify":{
  word:"sanctify", plain:"To set apart for God; to make holy.",
  deep:"Hebrew QADASH (H6942) and Greek HAGIAZO (G37) — both 'to set apart, consecrate, make holy.' Sanctification has both a status act (set apart once for God's possession, 1 Cor 6:11) and a process (progressively conformed to that status, 2 Cor 3:18; 1 Thess 5:23). God sanctifies (Lev 21:8; Heb 10:10), believers sanctify themselves (2 Cor 7:1), and Christ sanctifies the church (Eph 5:26). Things, days, and persons can all be sanctified.",
  misunderstood:"Not 'getting better on your own.' Not just 'being religious.' Sanctify means to be set apart — the moral transformation flows from the new identity.",
  matters:"'Without holiness no man shall see the Lord' (Heb 12:14). Yet sanctification is God's work in us (Phil 2:13). Both halves matter.",
  originals:[
    {lang:"Hebrew",word:"קָדַשׁ",translit:"qadash",strongs:"H6942",note:"To sanctify, consecrate, set apart."},
    {lang:"Hebrew",word:"קֹדֶשׁ",translit:"qodesh",strongs:"H6944",note:"Holiness, sanctuary."},
    {lang:"Greek",word:"ἁγιάζω",translit:"hagiazo",strongs:"G37",note:"To sanctify, make holy."},
    {lang:"Greek",word:"ἁγιασμός",translit:"hagiasmos",strongs:"G38",note:"Sanctification — the process or state."}
  ],
  rangeOfMeaning:["set apart","consecrate","make holy","dedicate","declare clean","progressively transform"],
  notMean:"Not earned by works. Not optional. Not the same as justification.",
  cultural:"In ANE worship, sanctification was the formal process of moving someone or something from common to holy (washings, anointings, dedication). NT applies the dynamic to people: every believer is sanctified in Christ AND being sanctified by the Spirit.",
  kingdomSignificance:"The kingdom is a holy nation (1 Pet 2:9); the Spirit sanctifies the unholy (1 Cor 6:11); Christ sanctifies the church through the word (John 17:17; Eph 5:26).",
  relatedVerses:["Exodus 19:6","Exodus 31:13","Leviticus 11:44-45","Leviticus 20:7-8","Isaiah 8:13","John 17:17, 19","Romans 6:19, 22","1 Corinthians 1:2, 30","1 Corinthians 6:11","Ephesians 5:25-27","1 Thessalonians 4:3","1 Thessalonians 5:23","2 Thessalonians 2:13","Hebrews 10:10, 14","Hebrews 12:14","1 Peter 1:2","1 Peter 3:15"],
  relatedWords:["holy","sanctification","set apart","consecrate","saint","qodesh"],
  category:"worship / temple",
  sources:["Strong's H6942","Strong's H6944","Strong's G37","Strong's G38","BDB","Thayer's"],
  confidence:"direct-source"
},
"authority":{
  word:"authority", plain:"Delegated right to rule, decide, or empower — including God's, the king's, and the believer's-in-Christ.",
  deep:"Greek EXOUSIA (G1849) — authority, right, legal capacity, jurisdiction. From EXESTI (it is lawful/permitted). Distinct from DYNAMIS (G1411, power as ability/force). Christ has all exousia in heaven and earth (Matt 28:18); He gave exousia to forgive sins (Matt 9:6), cast out demons (Mark 6:7), and become children of God (John 1:12). Hebrew uses several terms: MEMSHALAH (H4475, dominion), SHILTON (H7985, rule), YAD (H3027, hand/power).",
  misunderstood:"Authority is not just force or muscle. It is delegated right. Jesus' authority is not from raw power but from the Father (John 5:27). The believer's authority is not personal — it is granted in Christ.",
  matters:"Submission to authority (Rom 13:1-7), Christ's authority over creation (Col 1:16-17), the believer's authority to bind and loose (Matt 16:19; 18:18), and the authority of Scripture — all hang on understanding what exousia means.",
  originals:[
    {lang:"Greek",word:"ἐξουσία",translit:"exousia",strongs:"G1849",note:"Authority, right, legal capacity."},
    {lang:"Greek",word:"δύναμις",translit:"dynamis",strongs:"G1411",note:"Power as ability/force — distinct from exousia (the right to act)."},
    {lang:"Hebrew",word:"מֶמְשָׁלָה",translit:"memshalah",strongs:"H4475",note:"Dominion, rule."},
    {lang:"Aramaic",word:"שָׁלְטָן",translit:"sholtan",strongs:"H7985",note:"Aramaic 'authority/rule' — used in Daniel of God's eternal dominion."}
  ],
  rangeOfMeaning:["delegated right","jurisdiction","permission","power-to-act","royal authority","spiritual authority"],
  notMean:"Not mere force. Not autocracy. Not transferable apart from the One who delegates it.",
  cultural:"Roman exousia was the formal legal right (e.g., a centurion's authority over soldiers — Matt 8:9). Jewish authority was tied to Torah-knowledge and priestly office. Christ's claim 'all authority is given unto me' (Matt 28:18) is the unrivaled claim.",
  kingdomSignificance:"All authority in the kingdom flows from Christ (Matt 28:18). Believers operate under His authority (Luke 10:19); civil authorities are also under God (Rom 13:1-7).",
  relatedVerses:["Daniel 7:13-14","Daniel 7:27","Matthew 7:29","Matthew 8:9","Matthew 9:6","Matthew 10:1","Matthew 16:19","Matthew 28:18","Mark 1:22","Luke 4:36","Luke 10:19","John 1:12","John 5:27","John 17:2","Acts 1:7","Romans 13:1-7","1 Corinthians 11:10","Ephesians 1:21","Ephesians 6:12","Colossians 1:16","Colossians 2:10","Titus 3:1","Revelation 12:10"],
  relatedWords:["power","dominion","kingdom","ruler","reign","yoke"],
  category:"kingdom / government",
  sources:["Strong's G1849","Strong's G1411","Strong's H4475","Strong's H7985","Thayer's","BDB"],
  confidence:"direct-source"
},
"shalom":{
  word:"shalom", plain:"Wholeness, completeness, peace, flourishing — not merely absence of conflict.",
  deep:"Hebrew SHALOM (H7965) — wholeness, completeness, peace, prosperity, safety, soundness, welfare. From SHALEM (H8003, complete) and the root SHALAM (H7999, to be complete / make whole / make restitution). Shalom is the comprehensive flourishing of relationships, body, community, and creation under God's reign. Greek EIRENE (G1515) translates it in the NT but carries narrower Hellenistic connotations (cessation of conflict). The Hebrew is bigger.",
  misunderstood:"Reducing shalom to 'no fighting' loses most of the word. Shalom is positive — the full state of flourishing, not just the absence of harm.",
  matters:"Christ is our shalom (Eph 2:14); the kingdom is righteousness, peace (shalom), and joy in the Holy Spirit (Rom 14:17). Greeting one another with 'shalom' (Luke 10:5; 24:36) is more than 'hello' — it is invoking God's wholeness on the hearer.",
  originals:[
    {lang:"Hebrew",word:"שָׁלוֹם",translit:"shalom",strongs:"H7965",note:"Wholeness, completeness, peace, welfare, prosperity. Used 237x in OT."},
    {lang:"Hebrew",word:"שָׁלֵם",translit:"shalem",strongs:"H8003",note:"Complete, whole, perfect."},
    {lang:"Hebrew",word:"שָׁלַם",translit:"shalam",strongs:"H7999",note:"To be complete; to repay/restore (Salem and Jerusalem share this root)."},
    {lang:"Greek",word:"εἰρήνη",translit:"eirene",strongs:"G1515",note:"Peace, harmony — the NT word that translates shalom."}
  ],
  rangeOfMeaning:["wholeness","completeness","prosperity / welfare","safety","health","absence of conflict","covenant blessing","greeting"],
  notMean:"Not merely a quiet feeling. Not the absence of fighting alone. Not passive.",
  cultural:"In ANE diplomatic letters, 'is it well (shalom) with the king?' was the polite opening — invoking comprehensive flourishing. The Jewish greeting 'shalom aleichem' (peace be upon you) and the Muslim 'as-salaam alaikum' share this concept.",
  kingdomSignificance:"Messianic prophecy promises shalom: 'Prince of Peace (sar shalom)' Isa 9:6. The kingdom's defining climate is shalom (Isa 11:6-9; Rom 14:17).",
  relatedVerses:["Genesis 15:15","Numbers 6:24-26","Psalm 29:11","Psalm 85:8-10","Psalm 122:6-8","Isaiah 9:6-7","Isaiah 11:6-9","Isaiah 26:3","Isaiah 32:17","Isaiah 53:5","Isaiah 57:19-21","Jeremiah 6:14","Luke 2:14","Luke 10:5","Luke 24:36","John 14:27","John 16:33","John 20:19-21","Romans 5:1","Romans 14:17","Ephesians 2:14-17","Philippians 4:7","Colossians 3:15"],
  relatedWords:["peace","wholeness","welfare","Salem","Jerusalem"],
  category:"identity / covenant / kingdom",
  sources:["Strong's H7965","Strong's H7999","Strong's H8003","Strong's G1515","BDB","Thayer's"],
  confidence:"direct-source"
},
"sheol":{
  word:"sheol", plain:"The realm of the dead in Hebrew thought — the grave, the underworld, where all the dead go.",
  deep:"Hebrew SHEOL (H7585) — the grave / underworld / abode of the dead. Used 65x in OT. Both righteous and unrighteous go to sheol (Jacob to sheol in mourning, Gen 37:35; David in Ps 16:10). Sheol is dark, silent, shadowy (Job 10:21-22; Ps 6:5). The OT does NOT yet have a fully developed heaven/hell distinction; sheol is the common destination of the dead with shadowy existence. NT picks this up via Greek HADES (G86) — Jesus' descent into hades (Acts 2:27, 31 quoting Ps 16) and the parable of Lazarus and the rich man (Luke 16:19-31 — distinguishing 'Abraham's bosom' / paradise from torment) shows the developing picture. GEHENNA is distinct — see gehenna entry.",
  misunderstood:"Sheol is NOT 'hell' in the later Christian sense. Sheol is the place of the dead, both righteous and wicked, prior to the resurrection and judgment. Don't read NT hell into every OT sheol reference.",
  matters:"Christ's victory over sheol (Acts 2:27-31) and over the keys of death and hades (Rev 1:18) hinges on a correct OT background. Ps 16:10 quoted by Peter at Pentecost is the resurrection proof.",
  originals:[
    {lang:"Hebrew",word:"שְׁאוֹל",translit:"sheol",strongs:"H7585",note:"The grave, the underworld, the abode of the dead."},
    {lang:"Greek",word:"ᾅδης",translit:"hades",strongs:"G86",note:"NT word for the realm of the dead — translates sheol in LXX."}
  ],
  rangeOfMeaning:["the grave","the underworld","the place of the dead (both righteous and wicked in OT)","death personified","later: place of waiting prior to resurrection"],
  notMean:"Not modern 'hell' as the final place of judgment (that's gehenna / lake of fire). Not annihilation. Not the eternal state.",
  cultural:"ANE cosmology placed sheol below the earth (Num 16:30-33; Ezek 31:14-18). Hebrew thought develops across the OT toward resurrection (Dan 12:2; Isa 26:19) and the NT clarifies the picture into paradise + waiting + judgment + final state.",
  kingdomSignificance:"Christ holds the keys of death and hades (Rev 1:18). Sheol cannot hold the resurrected Christ (Acts 2:27-31). For the believer, 'to be absent from the body' is 'to be present with the Lord' (2 Cor 5:8), bypassing any Old-Testament-style shadowy wait.",
  relatedVerses:["Genesis 37:35","Genesis 42:38","Job 7:9","Job 10:21-22","Job 14:13-14","Psalm 6:5","Psalm 16:10","Psalm 49:15","Psalm 86:13","Psalm 88:3-12","Psalm 89:48","Psalm 116:3","Psalm 139:8","Ecclesiastes 9:10","Isaiah 14:9-15","Isaiah 26:19","Isaiah 38:18","Daniel 12:2","Hosea 13:14","Jonah 2:2","Matthew 11:23","Matthew 16:18","Luke 16:19-31","Acts 2:27-31","Revelation 1:18","Revelation 20:13-14"],
  relatedWords:["hades","grave","death","gehenna","abyss","paradise"],
  category:"sin / judgment / culture",
  sources:["Strong's H7585","Strong's G86","BDB","Thayer's","window.GLOSSARY"],
  confidence:"direct-source"
},
"gehenna":{
  word:"gehenna", plain:"Jesus' image for final judgment — drawn from the Valley of Hinnom outside Jerusalem.",
  deep:"Greek GEHENNA (G1067) — from Hebrew GEI-HINNOM, the Valley of Hinnom, just south of Jerusalem. In OT times the valley was used for child sacrifice to Molech (2 Kings 23:10; Jer 7:31). King Josiah desecrated it; by NT times it had become Jerusalem's perpetually-burning trash dump. Jesus uses 'gehenna' 11 times as the image of final judgment — fire (Matt 5:22, 18:9), destruction of body and soul (Matt 10:28), worm and fire (Mark 9:43-48 echoing Isa 66:24). Distinct from SHEOL/HADES (the intermediate state of the dead) and from the LAKE OF FIRE (the post-judgment final state, Rev 20:14-15). Gehenna is the picture of the place of final, irrevocable judgment.",
  misunderstood:"Sheol ≠ Gehenna ≠ Hades ≠ Lake of Fire. KJV translates all four as 'hell,' obscuring the distinctions. Gehenna specifically is final judgment, not the intermediate state.",
  matters:"Jesus' warnings against gehenna are weighty — the place of soul-and-body destruction (Matt 10:28). Understanding gehenna correctly shapes how we hear His invitations.",
  originals:[
    {lang:"Greek",word:"γέεννα",translit:"gehenna",strongs:"G1067",note:"From Hebrew Gei-Hinnom; Jesus' image of final judgment."},
    {lang:"Hebrew",word:"גֵּי הִנֹּם",translit:"Gei-Hinnom",strongs:"(from H1516+H2011)",note:"Valley of Hinnom, south of Jerusalem."}
  ],
  rangeOfMeaning:["Valley of Hinnom (literal place)","trash dump with perpetual fire","image of final judgment","place of body-and-soul destruction (Matt 10:28)"],
  notMean:"Not the same as sheol (intermediate state). Not the same as hades (realm of the dead). Gehenna is Jesus' specific image of FINAL judgment.",
  cultural:"Edersheim's Temple Ministry (project source) describes the Topheth (child-sacrifice altar) in the Valley of Hinnom. Josiah's reform desecrated it (2 Kings 23:10); by the NT era it was Jerusalem's smoldering refuse pit — fire and worm always active.",
  kingdomSignificance:"Jesus uses gehenna to warn even disciples (Matt 5:22, 29-30; 10:28). The kingdom invitation includes the warning of what rejection means.",
  relatedVerses:["2 Kings 23:10","Jeremiah 7:31-32","Jeremiah 19:1-15","Jeremiah 32:35","Isaiah 66:24","Matthew 5:22","Matthew 5:29-30","Matthew 10:28","Matthew 18:8-9","Matthew 23:15","Matthew 23:33","Mark 9:43-48","Luke 12:5","James 3:6","Revelation 20:14-15"],
  relatedWords:["sheol","hades","Molech","Topheth","fire","judgment","lake of fire"],
  category:"sin / judgment",
  sources:["Strong's G1067","Strong's H1516","Strong's H2011","BDB","Thayer's","window.GLOSSARY","Edersheim Temple Ministry"],
  confidence:"direct-source"
},
"firstborn":{
  word:"firstborn", plain:"The eldest son with rights of inheritance and authority — and Christ as the supreme firstborn.",
  deep:"Hebrew BEKHOR (H1060) / BIKKURIM (H1061, firstfruits, related) — the firstborn son had legal preeminence: double portion of inheritance (Deut 21:17), family-leader role, priestly function (until Levi replaced firstborns in Num 3:12). Yet biblical narrative repeatedly subverts this: God chooses the younger (Isaac over Ishmael, Jacob over Esau, Joseph over Reuben, David over his brothers, Solomon over Adonijah). Christ is the supreme PROTOTOKOS (G4416) — firstborn of creation (Col 1:15, preeminent), firstborn from the dead (Col 1:18; Rev 1:5), firstborn among many brethren (Rom 8:29).",
  misunderstood:"'Firstborn of all creation' (Col 1:15) does NOT mean Jesus was created. The word means preeminence/rank, not chronological first. The Davidic king is called 'firstborn' (Ps 89:27) even though he wasn't literally first.",
  matters:"Christ's firstborn-ness anchors His preeminence over creation, His resurrection-headship, and the family of God He brings forth.",
  originals:[
    {lang:"Hebrew",word:"בְּכוֹר",translit:"bekhor",strongs:"H1060",note:"Firstborn son."},
    {lang:"Hebrew",word:"בְּכוֹרָה",translit:"bekhorah",strongs:"H1062",note:"Birthright, firstborn-status."},
    {lang:"Greek",word:"πρωτότοκος",translit:"prototokos",strongs:"G4416",note:"Firstborn — applied especially to Christ in NT."}
  ],
  rangeOfMeaning:["literal firstborn son","birthright-holder","preeminent one (rank rather than time)","Christ as creation's firstborn (preeminence)","Christ as resurrection-firstborn"],
  notMean:"Not 'first one created' when applied to Christ. Not always literal in narrative (Ps 89:27 calls David 'firstborn' rhetorically).",
  cultural:"In ANE patriarchal households, firstborn had inheritance and family-leadership rights. Selling the birthright (Esau, Gen 25:29-34) was deeply shameful. Passover-night judgment fell on Egyptian firstborn (Exod 12), making Israel's firstborn doubly-claimed by God.",
  kingdomSignificance:"Christ as firstborn (Col 1:15, 18; Heb 1:6; Rev 1:5) is the King-priest-resurrection-head of the kingdom family. Believers are the 'church of the firstborn' (Heb 12:23).",
  relatedVerses:["Genesis 25:29-34","Genesis 27","Exodus 4:22-23","Exodus 12 (Passover/firstborn)","Exodus 13:2, 15","Numbers 3:12-13","Numbers 8:14-19","Deuteronomy 21:17","Psalm 89:27","Romans 8:29","Colossians 1:15, 18","Hebrews 1:6","Hebrews 12:23","Revelation 1:5"],
  relatedWords:["birthright","inheritance","preeminent","Passover","heir"],
  category:"family / household / kingdom",
  sources:["Strong's H1060","Strong's H1062","Strong's G4416","BDB","Thayer's"],
  confidence:"direct-source"
},
"sojourner":{
  word:"sojourner", plain:"A resident foreigner / temporary dweller — protected in covenant law and called to the same God.",
  deep:"Hebrew GER (H1616) — sojourner, stranger, resident alien. TOSHAV (H8453) — temporary resident. Israel was commanded to love the ger because they were gerim in Egypt (Lev 19:33-34; Deut 10:18-19). Specific covenant protections: same legal standard (Lev 24:22), Sabbath rest (Exod 20:10), participation in Passover when circumcised (Exod 12:48-49). NT: believers themselves are sojourners (PAREPIDEMOS G3927, PAROIKOS G3941) on the earth (Heb 11:13; 1 Pet 1:1, 2:11) — citizens of heaven living temporarily here.",
  misunderstood:"Sojourner is not a casual visitor or a tourist — the ger had legal protections, religious participation rights, and was loved as a fellow image-bearer. NT 'pilgrim' / 'stranger' language carries the same weight.",
  matters:"Israel's care for sojourners is a litmus test of covenant faithfulness (Mal 3:5). Believers' identity as sojourners shapes how they hold this-worldly things.",
  originals:[
    {lang:"Hebrew",word:"גֵּר",translit:"ger",strongs:"H1616",note:"Sojourner, stranger, resident alien."},
    {lang:"Hebrew",word:"תּוֹשָׁב",translit:"toshav",strongs:"H8453",note:"Temporary resident."},
    {lang:"Greek",word:"παρεπίδημος",translit:"parepidemos",strongs:"G3927",note:"Pilgrim, sojourner."},
    {lang:"Greek",word:"πάροικος",translit:"paroikos",strongs:"G3941",note:"Resident alien."}
  ],
  rangeOfMeaning:["resident foreigner with legal protections","temporary dweller","Israel in Egypt","believer on earth"],
  notMean:"Not tourist. Not refugee in the modern legal-only sense. Not 'second-class' in covenant.",
  cultural:"Without ANE patron-protection a foreigner was vulnerable to legal disadvantage. Israel's law specifically extended protection and inclusion (with circumcision opening Passover and full participation). Edersheim's Sketches (project source) describes the practical operation.",
  kingdomSignificance:"Believers are 'strangers and sojourners' on earth (1 Pet 2:11) — citizenship is in heaven (Phil 3:20). This shapes ethics (no entanglement) and hope (eyes on the city to come, Heb 11:10).",
  relatedVerses:["Genesis 23:4","Exodus 22:21","Exodus 23:9","Leviticus 19:33-34","Leviticus 24:22","Deuteronomy 10:18-19","Deuteronomy 24:14","Deuteronomy 27:19","Psalm 39:12","Psalm 119:19","Matthew 25:35","Hebrews 11:13","1 Peter 1:1, 17","1 Peter 2:11"],
  relatedWords:["stranger","alien","pilgrim","widow","orphan","gerim"],
  category:"justice / community",
  sources:["Strong's H1616","Strong's H8453","Strong's G3927","Strong's G3941","BDB","Thayer's","Edersheim Sketches"],
  confidence:"direct-source"
},
"beginning":{
  word:"beginning", plain:"The starting point — and the absolute beginning Genesis claims.",
  deep:"Hebrew RESHIT (H7225) — beginning, first, chief, best. From ROSH (head). Genesis 1:1 'in the beginning' uses BERESHIT (in-beginning). The Hebrew is ambiguous between 'in the beginning God created' (absolute beginning of all things) and 'in the beginning of God's creating' (an introductory construction). Both readings are theologically rich; the LXX renders absolute. Greek ARCHE (G746) parallels — used in John 1:1 'In the beginning was the Word.'",
  misunderstood:"BERESHIT is not just temporal-first; RESHIT carries head, chief, primacy. Genesis's claim is not only 'God came first in time' but 'God is the prime cause.' John 1:1 deliberately echoes Genesis 1:1.",
  matters:"How you read Genesis 1:1 shapes how you read everything that follows — from creation to new creation in Christ (2 Cor 5:17).",
  originals:[
    {lang:"Hebrew",word:"רֵאשִׁית",translit:"reshit",strongs:"H7225",note:"Beginning, first, chief, best. From ROSH (head)."},
    {lang:"Hebrew",word:"בְּרֵאשִׁית",translit:"bereshit",strongs:"(H7225 with prefix)",note:"In-beginning — the first word of the Hebrew Bible."},
    {lang:"Hebrew",word:"רֹאשׁ",translit:"rosh",strongs:"H7218",note:"Head, top, chief."},
    {lang:"Greek",word:"ἀρχή",translit:"arche",strongs:"G746",note:"Beginning, origin, ruler, principle. Used in John 1:1 echoing Genesis 1:1."}
  ],
  rangeOfMeaning:["temporal start","origin / source","first / primary","chief / best","Christ as the Arche (Rev 3:14)"],
  notMean:"Not just chronological 'first second.' Carries primacy in rank, not only time.",
  cultural:"ANE creation myths begin with pre-existing chaos that the gods organize. Genesis 1:1's RESHIT plus BARA together claim something unique: God brings being itself out of nothing.",
  kingdomSignificance:"Christ is the ARCHE (Col 1:18; Rev 3:14) — the beginning, head, source of the new creation that the kingdom inaugurates.",
  relatedVerses:["Genesis 1:1","Proverbs 8:22-23","Isaiah 46:9-10","Matthew 19:4-8","John 1:1-3","John 8:25","Colossians 1:18","Hebrews 1:10","Hebrews 7:3","Revelation 1:8","Revelation 3:14","Revelation 21:6","Revelation 22:13"],
  relatedWords:["create","bara","arche","rosh","head","origin"],
  category:"creation / cosmology",
  sources:["Strong's H7225","Strong's H7218","Strong's G746","BDB RESHIT","Thayer's ARCHE"],
  confidence:"direct-source"
},
"create":{
  word:"create", plain:"To bring into being something genuinely new — uniquely God's action in the OT.",
  deep:"Hebrew BARA (H1254) — to create. In the qal stem, the subject is ALWAYS God in the Tanakh (Gen 1:1, 21, 27; Isa 40:26; 65:17). Distinct from ASAH (H6213, to make/do — used of human work) and YATSAR (H3335, to form — like a potter). Often argued (though not strictly required by lexicography) to indicate creation ex nihilo (from nothing). Greek KTIZO (G2936) — to create, especially in NT of the new creation (2 Cor 5:17). Hebrews 11:3 explicitly says the universe was made by God's word and not from visible material.",
  misunderstood:"BARA is not identical to ASAH or YATSAR. Reducing 'create' to 'make' misses the distinct OT word reserved for God's unique action. Yet conversely, ASAH and YATSAR appear alongside BARA in Genesis 1-2 — God uses all three; the words overlap and complement.",
  matters:"Creation theology is the foundation of monotheism, the goodness of matter, and the basis for new creation in Christ.",
  originals:[
    {lang:"Hebrew",word:"בָּרָא",translit:"bara",strongs:"H1254",note:"To create — qal subject always God. ~50 OT uses."},
    {lang:"Hebrew",word:"עָשָׂה",translit:"asah",strongs:"H6213",note:"To make, do — broad action verb used of God and humans."},
    {lang:"Hebrew",word:"יָצַר",translit:"yatsar",strongs:"H3335",note:"To form / fashion — like a potter. Used of God forming Adam (Gen 2:7)."},
    {lang:"Greek",word:"κτίζω",translit:"ktizo",strongs:"G2936",note:"To create — NT word; subject is God."},
    {lang:"Greek",word:"ποιέω",translit:"poieo",strongs:"G4160",note:"To make, do — NT broad verb."}
  ],
  rangeOfMeaning:["bring into being (BARA)","make / fashion (ASAH)","form like a potter (YATSAR)","new creation in Christ (KTIZO)"],
  notMean:"Not 're-organize pre-existing matter' alone. Genesis 1:1 + Heb 11:3 + Rom 4:17 affirm creation from nothing.",
  cultural:"ANE creation accounts (Enuma Elish, Atrahasis) describe gods organizing chaos, often through divine conflict. Genesis presents God speaking and it is — no conflict, no peer chaos-deity, no biographical struggle. The polemic against Babylonian myth is structural.",
  kingdomSignificance:"The Creator is the Redeemer; the One who created in Genesis is the One who creates anew in Christ (2 Cor 5:17; Eph 2:10).",
  relatedVerses:["Genesis 1:1, 21, 27","Genesis 2:3-4","Isaiah 40:26","Isaiah 43:7","Isaiah 45:7-18","Isaiah 65:17","Jeremiah 31:22","Ezekiel 28:13-15","Amos 4:13","Malachi 2:10","Mark 13:19","Romans 1:25","Romans 4:17","1 Corinthians 11:9","2 Corinthians 5:17","Ephesians 2:10","Ephesians 4:24","Colossians 1:16","Colossians 3:10","Hebrews 11:3","Revelation 4:11","Revelation 10:6"],
  relatedWords:["bara","make","form","yatsar","asah","new creation","ex nihilo"],
  category:"creation / cosmology",
  sources:["Strong's H1254","Strong's H6213","Strong's H3335","Strong's G2936","Strong's G4160","BDB","Thayer's"],
  confidence:"direct-source"
},
"image":{
  word:"image", plain:"The reflection / likeness — humanity made in God's image, idols as forbidden images.",
  deep:"Hebrew TSELEM (H6754) — image, likeness, statue. Paired with DEMUTH (H1823, likeness) in Gen 1:26-27. Humanity bears God's image: function (vice-regent ruling on God's behalf), relational identity (made for fellowship), moral capacity (responsible agency). The same TSELEM word is used for the forbidden carved images of pagan worship (Num 33:52; Ezek 7:20; 2 Kings 11:18) — humans were never to make images of God because God already made His own images (humanity). Christ is the perfect EIKON (G1504) of God (2 Cor 4:4; Col 1:15; Heb 1:3); believers are being conformed back to that image (Rom 8:29; 2 Cor 3:18; Col 3:10).",
  misunderstood:"Image is not merely physical. It is functional (ruling), relational (fellowship), and moral (likeness in character). The image is marred by the fall, not erased — that's why image-of-God dignity still grounds human ethics (Gen 9:6; Jas 3:9).",
  matters:"Imago Dei is the basis of human dignity, the prohibition on murder (Gen 9:6), respect across all peoples (Jas 3:9), and the goal of sanctification (conformed to Christ's image).",
  originals:[
    {lang:"Hebrew",word:"צֶלֶם",translit:"tselem",strongs:"H6754",note:"Image, statue, likeness."},
    {lang:"Hebrew",word:"דְּמוּת",translit:"demuth",strongs:"H1823",note:"Likeness, similarity (paired with tselem)."},
    {lang:"Greek",word:"εἰκών",translit:"eikon",strongs:"G1504",note:"Image — Christ is the eikon of God (Col 1:15)."}
  ],
  rangeOfMeaning:["likeness / reflection","statue / idol","functional representation","Christ as perfect image","believers being conformed back to it"],
  notMean:"Not mere physical resemblance. Not erased by the fall — marred yet present.",
  cultural:"ANE kings set up TSELEM statues of themselves throughout their empire to remind subjects who ruled. Genesis says God did the same — He placed His TSELEM (humanity) throughout the earth as His vice-regent representatives.",
  kingdomSignificance:"The kingdom restores the image-bearing vocation. Christ is the image (Col 1:15); the Spirit conforms believers to it (2 Cor 3:18).",
  relatedVerses:["Genesis 1:26-27","Genesis 5:1-3","Genesis 9:6","Romans 8:29","1 Corinthians 11:7","1 Corinthians 15:49","2 Corinthians 3:18","2 Corinthians 4:4","Colossians 1:15","Colossians 3:10","Hebrews 1:3","James 3:9","1 John 3:2"],
  relatedWords:["likeness","dominion","Adam","Christ","glory","conformed"],
  category:"creation / personhood",
  sources:["Strong's H6754","Strong's H1823","Strong's G1504","BDB","Thayer's"],
  confidence:"direct-source"
},
"likeness":{
  word:"likeness", plain:"Similarity in form / character — paired with image to describe how humans bear God.",
  deep:"Hebrew DEMUTH (H1823) — likeness, similarity, pattern. Paired with TSELEM (image) in Gen 1:26-27; 5:1; 9:6. Some early theologians distinguished image (substance) and likeness (development) but the modern consensus is that the two are largely synonymous, used as a Hebrew hendiadys for fullness. Greek HOMOIOMA (G3667) — likeness — Christ in the likeness of sinful flesh (Rom 8:3), of men (Phil 2:7).",
  misunderstood:"Not 'image is birth, likeness is growth' as some older theologies taught — that distinction is linguistically forced. Both words together describe humanity as God-reflecting from creation.",
  matters:"Humans are the only creatures said to be made in God's likeness — grounds for the dignity of every human person and the call to bear Him faithfully.",
  originals:[
    {lang:"Hebrew",word:"דְּמוּת",translit:"demuth",strongs:"H1823",note:"Likeness, similarity."},
    {lang:"Greek",word:"ὁμοίωμα",translit:"homoioma",strongs:"G3667",note:"Likeness — Christ in likeness of flesh (Rom 8:3)."}
  ],
  rangeOfMeaning:["similarity","pattern","model","image-bearing capacity"],
  notMean:"Not 'identical to.' Not 'becoming a god.'",
  cultural:"ANE kings used 'image and likeness' language for their statues — claiming representational presence. Gen 1 applies the formula to humanity.",
  kingdomSignificance:"Christ, as the image / likeness of God (Phil 2:6; Col 1:15), restores the human likeness-vocation broken by the fall.",
  relatedVerses:["Genesis 1:26","Genesis 5:1, 3","Genesis 9:6","Romans 8:3","Philippians 2:7","Hebrews 1:3","James 3:9"],
  relatedWords:["image","tselem","demuth","Christ","glory"],
  category:"creation / personhood",
  sources:["Strong's H1823","Strong's G3667","BDB","Thayer's"],
  confidence:"direct-source"
},
"Eve":{
  word:"Eve", plain:"Hebrew Chavvah — 'mother of all living'; first woman, partner of Adam.",
  deep:"Hebrew CHAVVAH (H2332) — Eve. Named by Adam in Gen 3:20 'because she was the mother of all living.' From the root CHAYAH (H2421, to live). The name is given AFTER the fall — Adam names her in faith of God's promise (Gen 3:15) that her seed would crush the serpent's head. NT identifies her as mother of all (Acts 17:26 'made of one blood all nations') and as deceived by the serpent (2 Cor 11:3; 1 Tim 2:13-14).",
  misunderstood:"Not 'helper' as inferior — Hebrew EZER (H5828, 'help') is the word used of God Himself as Israel's helper (Ps 33:20; 70:5). Eve is Adam's strong corresponding partner, not subordinate-by-design.",
  matters:"Eve's deception (1 Tim 2:14) and her promised seed (Gen 3:15) are both foundational. Mary is sometimes called the 'second Eve' as the mother of the New-Covenant Seed.",
  originals:[
    {lang:"Hebrew",word:"חַוָּה",translit:"Chavvah / Hawwah",strongs:"H2332",note:"Eve — 'life-giver, mother of all living.'"},
    {lang:"Hebrew",word:"חָיָה",translit:"chayah",strongs:"H2421",note:"To live — the root of Eve's name."},
    {lang:"Hebrew",word:"עֵזֶר",translit:"ezer",strongs:"H5828",note:"Help / helper — used of God in Ps 33:20; 70:5; 121:1-2."}
  ],
  rangeOfMeaning:["proper name of the first woman","life-giver","mother of all living"],
  notMean:"Not a subordinate. Not inferior. The name is given in faith of the promised seed AFTER the fall.",
  cultural:"ANE creation stories sometimes pictured woman as inferior or as afterthought; Genesis explicitly says male and female together are God's image (Gen 1:27).",
  kingdomSignificance:"Eve's promised seed (Gen 3:15) is the first gospel announcement — Messianic prophecy already in Eden.",
  relatedVerses:["Genesis 2:18-25","Genesis 3","Genesis 3:15","Genesis 3:20","Genesis 4:1","2 Corinthians 11:3","1 Timothy 2:13-14"],
  relatedWords:["Adam","life","ezer","seed","serpent","mother"],
  category:"people / creation",
  sources:["Strong's H2332","Strong's H2421","Strong's H5828","BDB"],
  confidence:"direct-source"
},
"blood":{
  word:"blood", plain:"The life-fluid; in Scripture, the bearer of life and the substance of atonement.",
  deep:"Hebrew DAM (H1818) — blood. Leviticus 17:11 — 'the life of the flesh is in the blood; and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul.' Greek HAIMA (G129) — blood. Christ's blood is the substance of the new covenant (Matt 26:28; Heb 9:14-22; 1 Pet 1:19). Blood-shedding is required for forgiveness (Heb 9:22). The blood-on-the-doorposts (Exod 12) prefigures the cross. Even in modern medicine, blood remains the active life-bearer — every NT use anchors here.",
  misunderstood:"Not gore for shock-value. Not magical. Blood in Scripture is life and the basis of atonement because God prescribed it (Lev 17:11). Reducing 'blood of Christ' to a metaphor empties the cross.",
  matters:"Communion, atonement, covenant, sanctification — all blood-saturated language flowing from Lev 17:11.",
  originals:[
    {lang:"Hebrew",word:"דָּם",translit:"dam",strongs:"H1818",note:"Blood — life-substance, basis of atonement."},
    {lang:"Greek",word:"αἷμα",translit:"haima",strongs:"G129",note:"Blood — used of Christ's blood throughout NT."}
  ],
  rangeOfMeaning:["physical blood","life-substance","atoning blood","covenant blood","blood-guilt","Christ's blood"],
  notMean:"Not mere metaphor. Not pagan blood-magic. Not bloodlust.",
  cultural:"ANE religions used blood in many cultic ways (some forbidden — eating blood was forbidden in Israel, Lev 17:10-14). Christian theology centers on Christ's once-for-all blood (Heb 9:24-28), not repeated sacrifice.",
  kingdomSignificance:"Believers are 'washed in the blood' (Rev 7:14); kingdom-entry is by Christ's blood (Heb 10:19-22); the New Covenant is sealed in His blood (Luke 22:20).",
  relatedVerses:["Genesis 4:10-11","Genesis 9:4-6","Exodus 12 (Passover blood)","Exodus 24:6-8","Leviticus 17:10-14","Hebrews 9:11-28","Hebrews 10:19-22","Hebrews 12:24","Hebrews 13:12","1 Peter 1:18-19","1 John 1:7","Revelation 1:5","Revelation 5:9","Revelation 7:14","Revelation 12:11"],
  relatedWords:["sacrifice","atonement","propitiation","covenant","altar","cross"],
  category:"worship / salvation",
  sources:["Strong's H1818","Strong's G129","BDB","Thayer's"],
  confidence:"direct-source"
},
"law":{
  word:"law", plain:"Instruction — torah, commandment, principle, Roman law, or legalism, depending on context.",
  deep:"Greek NOMOS (G3551) — law. Translates Hebrew TORAH (H8451) in the LXX. Paul uses NOMOS with at least five distinct senses: (1) the Mosaic Law as code (Rom 7:7-12), (2) the Pentateuch (Gal 4:21), (3) the whole OT (Rom 3:19), (4) principle / pattern ('law of sin and death,' Rom 8:2), (5) any law-system (Rom 7:23). His 'we are not under law' (Rom 6:14) does NOT mean believers throw off all instruction — context decides which NOMOS he means.",
  misunderstood:"Reading 'law' as one undifferentiated category collapses Paul's argument. Christ did not come to abolish the Torah (Matt 5:17); Paul does NOT teach antinomianism (Rom 3:31; 6:1-2; 13:8-10).",
  matters:"How you distinguish the different senses of NOMOS shapes Romans, Galatians, and the whole gospel-and-obedience question.",
  originals:[
    {lang:"Greek",word:"νόμος",translit:"nomos",strongs:"G3551",note:"Law — translates torah; multiple distinct senses in NT."},
    {lang:"Hebrew",word:"תּוֹרָה",translit:"torah",strongs:"H8451",note:"Instruction / law / Pentateuch (see torah entry)."},
    {lang:"Hebrew",word:"מִצְוָה",translit:"mitzvah",strongs:"H4687",note:"Commandment."},
    {lang:"Hebrew",word:"חֹק",translit:"choq",strongs:"H2706",note:"Statute, decree."},
    {lang:"Hebrew",word:"מִשְׁפָּט",translit:"mishpat",strongs:"H4941",note:"Judgment, ordinance, justice."}
  ],
  rangeOfMeaning:["Mosaic Law","Pentateuch","whole OT","principle/pattern","Roman law","legalism (Paul's negative target)"],
  notMean:"Not always negative. Not always positive. Context decides.",
  cultural:"Second-Temple Jewish life centered on Torah-observance; Greek and Roman culture had their own legal systems. NT debates often turn on which 'law' is in view.",
  kingdomSignificance:"Christ fulfills the Law (Matt 5:17), and the believer 'fulfills the law of Christ' by love (Gal 5:14; 6:2; Rom 13:8-10).",
  relatedVerses:["Deuteronomy 6:1-9","Psalm 1","Psalm 19:7-11","Psalm 119","Matthew 5:17-20","Matthew 22:36-40","Romans 3:19-31","Romans 7","Romans 8:1-4","Romans 13:8-10","1 Corinthians 9:21","Galatians 2-5","Galatians 6:2","James 1:25","James 2:8-12"],
  relatedWords:["torah","commandment","mitzvah","statute","ordinance","Pentateuch"],
  category:"covenant / law",
  sources:["Strong's G3551","Strong's H8451","Strong's H4687","Strong's H2706","Strong's H4941","BDB","Thayer's"],
  confidence:"direct-source"
},
"commandment":{
  word:"commandment", plain:"A direct order from God — at the heart of the Law and Christ's discipleship.",
  deep:"Hebrew MITZVAH (H4687, plural mitzvot) — commandment, precept. From TSAVAH (H6680, to command). The 613 mitzvot (traditional rabbinic count) span moral, ceremonial, and civil categories. Greek ENTOLE (G1785) — commandment. The Great Commandments (Matt 22:36-40, summarizing Deut 6:5 and Lev 19:18) and the New Commandment (John 13:34) reframe but do not abolish.",
  misunderstood:"Not mere rules to chafe at. Mitzvot in healthy Jewish piety are joyfully obeyed because they are the path of life (Ps 119). Christ's commandment is to love (John 13:34) — yet that commandment is concrete (1 John 5:3 — 'this is the love of God, that we keep his commandments').",
  matters:"'He that hath my commandments, and keepeth them, he it is that loveth me' (John 14:21). Love and obedience are inseparable.",
  originals:[
    {lang:"Hebrew",word:"מִצְוָה",translit:"mitzvah",strongs:"H4687",note:"Commandment, precept."},
    {lang:"Hebrew",word:"צָוָה",translit:"tsavah",strongs:"H6680",note:"To command (verb)."},
    {lang:"Greek",word:"ἐντολή",translit:"entole",strongs:"G1785",note:"Commandment."}
  ],
  rangeOfMeaning:["divine command","specific precept","summary commandment (love)","apostolic instruction"],
  notMean:"Not arbitrary rules. Not opposed to grace.",
  cultural:"Jewish daily prayer (Shema, recited twice daily) opens with 'these words / commandments' to be kept. Christian discipleship inherits the obedience-and-love unity.",
  kingdomSignificance:"The New Commandment (John 13:34) marks kingdom-people; obeying commandments proves love (John 14:15, 21, 23; 1 John 2:3-5).",
  relatedVerses:["Exodus 20","Deuteronomy 5","Deuteronomy 6:1-9","Psalm 19:7-11","Psalm 119","Matthew 5:17-19","Matthew 19:17","Matthew 22:36-40","John 13:34-35","John 14:15, 21","John 15:10","1 John 2:3-7","1 John 3:22-24","1 John 5:2-3","2 John 1:6","Revelation 12:17","Revelation 14:12","Revelation 22:14"],
  relatedWords:["mitzvah","entole","torah","statute","precept","love"],
  category:"covenant / law",
  sources:["Strong's H4687","Strong's H6680","Strong's G1785","BDB","Thayer's"],
  confidence:"direct-source"
},
"sabbath":{
  word:"sabbath", plain:"Rest day — the seventh day, sanctified at creation, commanded in the Decalogue.",
  deep:"Hebrew SHABBAT (H7676) / SHAVAT (H7673, to cease). Rooted in creation (Gen 2:2-3) before any commandment. The fourth commandment (Exod 20:8-11; Deut 5:12-15) ties it both to creation rest and to exodus liberation (Israel's freedom from Egyptian slave-labor cycles). Greek SABBATON (G4521). Jesus' relation to Sabbath is decisive: He is 'Lord of the Sabbath' (Mark 2:28); Sabbath was made for man (Mark 2:27); He healed on the Sabbath, deliberately exposing Pharisaic over-fence rules.",
  misunderstood:"Sabbath is not the day's number on a calendar primarily — it is the rest-rhythm built into creation. Christian debate over Saturday-vs-Sunday and ceremonial-vs-moral aspects is real and continues (Rom 14:5; Col 2:16-17; Heb 4:9-11).",
  matters:"Sabbath theology shapes rest, worship, and how the believer relates to OT law in NT life.",
  originals:[
    {lang:"Hebrew",word:"שַׁבָּת",translit:"shabbat",strongs:"H7676",note:"Sabbath, rest day."},
    {lang:"Hebrew",word:"שָׁבַת",translit:"shavat",strongs:"H7673",note:"To cease, rest."},
    {lang:"Greek",word:"σάββατον",translit:"sabbaton",strongs:"G4521",note:"Sabbath."}
  ],
  rangeOfMeaning:["seventh-day rest","Sabbath-year (Lev 25)","Jubilee (Lev 25:8-13)","Christ's rest (Heb 4)","creation rhythm","sign of covenant (Exod 31:13-17)"],
  notMean:"Not legalistic prohibition for its own sake. Not abolished entirely in the NT — its principle continues (Heb 4:9-11), but specific application is debated.",
  cultural:"Jewish Sabbath observance — sundown Friday to sundown Saturday — has carried covenant identity for ~3,500 years. Edersheim's Temple Ministry describes Sabbath Temple liturgy.",
  kingdomSignificance:"Hebrews 4 reads sabbath-rest as the kingdom's deep climate; Jesus is its Lord (Mark 2:28).",
  relatedVerses:["Genesis 2:2-3","Exodus 16:23-30","Exodus 20:8-11","Exodus 31:12-17","Leviticus 23:3","Leviticus 25 (Sabbath year + Jubilee)","Deuteronomy 5:12-15","Isaiah 56:1-7","Isaiah 58:13-14","Jeremiah 17:21-27","Mark 2:23-28","Mark 3:1-6","Luke 13:10-17","Luke 14:1-6","John 5:1-18","John 9","Romans 14:5-6","Colossians 2:16-17","Hebrews 4:1-11"],
  relatedWords:["rest","Sabbath-year","Jubilee","seven","creation","new creation"],
  category:"worship / temple",
  sources:["Strong's H7676","Strong's H7673","Strong's G4521","BDB","Thayer's","Edersheim Temple"],
  confidence:"direct-source"
},
"king":{
  word:"king", plain:"Sovereign ruler — Israel's anointed monarch, foreign kings, and Christ the King.",
  deep:"Hebrew MELEK (H4428) — king. Greek BASILEUS (G935) — king. Israel's first king Saul was given reluctantly (1 Sam 8 — the people demanded one 'like other nations'); David and his line carry the messianic promise (2 Sam 7). Christ is THE King — King of kings and Lord of lords (Rev 17:14; 19:16). The kingdom (BASILEIA, malkut) flows from the King.",
  misunderstood:"Modern democratic instincts may resist 'king' language; Scripture's claim is that the kingdom is monarchic — under the King Christ — even while servant-shaped leadership operates in the church.",
  matters:"Calling Jesus 'Lord' in the Roman empire was sedition because Caesar claimed the same title. The early Christian confession 'Jesus is King' shaped martyrdom.",
  originals:[
    {lang:"Hebrew",word:"מֶלֶךְ",translit:"melek",strongs:"H4428",note:"King."},
    {lang:"Hebrew",word:"מָלַךְ",translit:"malak",strongs:"H4427",note:"To reign, be king."},
    {lang:"Greek",word:"βασιλεύς",translit:"basileus",strongs:"G935",note:"King."}
  ],
  rangeOfMeaning:["earthly king (Israel, foreign nations)","Davidic king","Messianic King","Christ","King of kings"],
  notMean:"Not arbitrary tyrant. Biblical kingship is bound by covenant law (Deut 17:14-20).",
  cultural:"ANE kingship was divine-sponsored; Israel's kings were anointed prophet-priests (Samuel, Nathan, Zadok) and accountable to YHWH the great King.",
  kingdomSignificance:"The kingdom belongs to its King; Christ's enthronement (Eph 1:20-22; Heb 1:8-13) is the gospel's structural climax.",
  relatedVerses:["Genesis 14:18","Genesis 49:10","Deuteronomy 17:14-20","1 Samuel 8","2 Samuel 7","Psalm 2","Psalm 24","Psalm 45","Psalm 72","Psalm 89","Psalm 110","Isaiah 9:6-7","Isaiah 11","Daniel 7","Matthew 2:2","Matthew 21:5","Matthew 25:34","Matthew 27:11, 37","Luke 1:32-33","John 18:33-37","John 19:14-22","1 Timothy 6:15","Revelation 17:14","Revelation 19:16"],
  relatedWords:["kingdom","throne","reign","David","Messiah","Christ","Lord"],
  category:"kingdom / government",
  sources:["Strong's H4428","Strong's H4427","Strong's G935","BDB","Thayer's"],
  confidence:"direct-source"
},
"throne":{
  word:"throne", plain:"Royal seat — symbol of kingship, judgment, and authority.",
  deep:"Hebrew KISSE (H3678) — throne. Greek THRONOS (G2362) — throne. Davidic throne (2 Sam 7:13, 16) is everlasting via Messiah. God's throne is in heaven (Ps 11:4; Isa 66:1); throne of grace (Heb 4:16); great white throne of final judgment (Rev 20:11); the Lamb shares the Father's throne (Rev 22:1, 3).",
  misunderstood:"Throne is not mere furniture — it is the symbol of legitimate rule. The throne of David is the Messianic throne (Luke 1:32-33).",
  matters:"The believer's hope is access to a throne of grace (Heb 4:16) and finally co-reigning (Rev 3:21; 22:5).",
  originals:[
    {lang:"Hebrew",word:"כִּסֵּא",translit:"kisse",strongs:"H3678",note:"Throne, seat of honor/authority."},
    {lang:"Greek",word:"θρόνος",translit:"thronos",strongs:"G2362",note:"Throne."}
  ],
  rangeOfMeaning:["royal seat","throne-room","heavenly throne","throne of grace","throne of judgment","co-reigning with Christ"],
  notMean:"Not just decorative. Carries effective authority.",
  cultural:"ANE thrones (Mesopotamian, Egyptian, Persian) were elaborately decorated symbols of cosmic kingship. Solomon's throne (1 Kings 10:18-20) is described in regal detail.",
  kingdomSignificance:"The throne of David is fulfilled in Christ enthroned at God's right hand (Ps 110:1; Heb 1:3, 8); His kingdom has no end.",
  relatedVerses:["2 Samuel 7:13, 16","1 Kings 1:13","1 Kings 10:18-20","Psalm 11:4","Psalm 45:6","Psalm 89:14","Psalm 93:2","Psalm 110:1","Isaiah 6:1","Isaiah 66:1","Daniel 7:9-14","Matthew 19:28","Matthew 25:31","Luke 1:32","Hebrews 1:8","Hebrews 4:16","Hebrews 8:1","Hebrews 12:2","Revelation 3:21","Revelation 4-5","Revelation 20:11","Revelation 22:1, 3"],
  relatedWords:["king","reign","kingdom","Davidic","authority","Christ"],
  category:"kingdom / government",
  sources:["Strong's H3678","Strong's G2362","BDB","Thayer's"],
  confidence:"direct-source"
},
"reign":{
  word:"reign", plain:"To rule as king — God's eternal reign, Christ's mediatorial reign, and the believer's reigning in life.",
  deep:"Hebrew MALAK (H4427) — to reign. Greek BASILEUO (G936) — to reign. God reigns eternally (Ps 93; 96-99); Christ reigns from the Father's right hand (1 Cor 15:25; Heb 1:8) until all enemies are subdued; believers 'reign in life through Jesus Christ' (Rom 5:17) and will 'reign with Him' (2 Tim 2:12; Rev 5:10; 22:5).",
  misunderstood:"Christ's reign is not future-only; it is already inaugurated and now exerts authority (Eph 1:20-22). The kingdom is here-and-coming.",
  matters:"Believers participate in the King's reign now (Rom 5:17; Eph 2:6) — not lording over others but operating in His delegated authority.",
  originals:[
    {lang:"Hebrew",word:"מָלַךְ",translit:"malak",strongs:"H4427",note:"To reign, be king."},
    {lang:"Greek",word:"βασιλεύω",translit:"basileuo",strongs:"G936",note:"To reign."}
  ],
  rangeOfMeaning:["God's eternal reign","Davidic reign","Christ's mediatorial reign","believer's reigning in life","co-reigning with Christ"],
  notMean:"Not domination over fellow believers. Not future-only.",
  cultural:"ANE coronation enthroned the new king with name, anointing, and acclamation. NT applies this to Christ at the resurrection-ascension.",
  kingdomSignificance:"The reign of Christ IS the kingdom — past inauguration, present rule, future consummation (Rev 11:15; 22:5).",
  relatedVerses:["1 Chronicles 16:31","Psalm 47","Psalm 93","Psalm 96-99","Psalm 110:1-2","Isaiah 24:23","Daniel 2:44","Daniel 7:13-14","Zechariah 14:9","Matthew 6:10","Matthew 25:34","Luke 1:33","Romans 5:17, 21","1 Corinthians 15:25","2 Timothy 2:12","Revelation 5:10","Revelation 11:15","Revelation 20:4, 6","Revelation 22:5"],
  relatedWords:["kingdom","king","throne","authority","co-reign"],
  category:"kingdom / government",
  sources:["Strong's H4427","Strong's G936","BDB","Thayer's"],
  confidence:"direct-source"
},
"elder":{
  word:"elder", plain:"A mature leader in the covenant community — Old Testament tribal elder, NT church overseer.",
  deep:"Hebrew ZAKEN (H2205) — elder; literally 'bearded one,' the senior covenant-member. Greek PRESBYTEROS (G4245) — elder; same family as our 'presbyter.' OT elders led tribes, judged disputes, sat at the city gate (Ruth 4:1-11). NT churches were led by a plurality of elders — also called overseers (EPISKOPOS, G1985) and shepherds/pastors (POIMEN, G4166) — Acts 20:17, 28; 1 Pet 5:1-4; Titus 1:5-9; 1 Tim 3:1-7.",
  misunderstood:"Elder is not honorary title — it carries office and responsibility (1 Tim 5:17). Pastor / overseer / elder are largely overlapping NT terms for the same role.",
  matters:"Church polity flows from how 'elder' is read — singular pastor model vs plural-elder model.",
  originals:[
    {lang:"Hebrew",word:"זָקֵן",translit:"zaken",strongs:"H2205",note:"Elder, old, bearded."},
    {lang:"Greek",word:"πρεσβύτερος",translit:"presbyteros",strongs:"G4245",note:"Elder, presbyter."},
    {lang:"Greek",word:"ἐπίσκοπος",translit:"episkopos",strongs:"G1985",note:"Overseer, bishop — overlaps with presbyteros."},
    {lang:"Greek",word:"ποιμήν",translit:"poimen",strongs:"G4166",note:"Shepherd, pastor — also overlaps."}
  ],
  rangeOfMeaning:["tribal elder","city-gate judge","apostolic-age elder","local-church overseer","council member"],
  notMean:"Not merely 'older person.' Office with shepherd duty.",
  cultural:"Synagogue and Sanhedrin had councils of elders. Early church inherited the structure (Acts 11:30; 14:23; 15:2; 21:18).",
  kingdomSignificance:"Elders shepherd the flock under the Chief Shepherd Christ (1 Pet 5:1-4); they guard doctrine and people.",
  relatedVerses:["Exodus 18:13-26","Numbers 11:16-17","Ruth 4:1-11","Acts 11:30","Acts 14:23","Acts 15","Acts 20:17, 28","1 Timothy 3:1-7","1 Timothy 5:17-22","Titus 1:5-9","James 5:14","1 Peter 5:1-4","Revelation 4:4 (24 elders)","Revelation 5:8-9"],
  relatedWords:["overseer","bishop","pastor","shepherd","deacon","apostle"],
  category:"identity / community",
  sources:["Strong's H2205","Strong's G4245","Strong's G1985","Strong's G4166","BDB","Thayer's"],
  confidence:"direct-source"
},
"deacon":{
  word:"deacon", plain:"Servant — specifically the church office of practical service alongside elders.",
  deep:"Greek DIAKONOS (G1249) — servant, minister, deacon. The office emerged in Acts 6 to free apostles for word/prayer ministry while seven men served the daily distribution. 1 Tim 3:8-13 lists qualifications. Phoebe is called a DIAKONOS of the church at Cenchreae (Rom 16:1). Christ Himself took the form of a SERVANT (Mark 10:45 — He came to serve/diakoneo).",
  misunderstood:"Not just 'helper.' Deacon is an office with character requirements (1 Tim 3:8-13). Yet the verb diakoneo applies to all believers — every Christian serves.",
  matters:"How the diaconate functions shapes how the local church meets practical needs (Acts 6; James 1:27).",
  originals:[
    {lang:"Greek",word:"διάκονος",translit:"diakonos",strongs:"G1249",note:"Servant, minister, deacon."},
    {lang:"Greek",word:"διακονέω",translit:"diakoneo",strongs:"G1247",note:"To serve."},
    {lang:"Greek",word:"διακονία",translit:"diakonia",strongs:"G1248",note:"Service, ministry."}
  ],
  rangeOfMeaning:["servant generally","church office (deacon)","Christ as servant","apostolic ministry"],
  notMean:"Not lower-tier Christian. Not honorary. An office of service.",
  cultural:"Greco-Roman society despised manual service; Christ inverted this by elevating servanthood (Mark 10:42-45).",
  kingdomSignificance:"Greatness in the kingdom is servanthood (Mark 10:43-45); the diaconate embodies this for the church.",
  relatedVerses:["Matthew 20:26-28","Matthew 23:11","Mark 9:35","Mark 10:42-45","John 12:26","Acts 6:1-7","Romans 16:1","1 Corinthians 3:5","1 Corinthians 12:5","2 Corinthians 3:6","Ephesians 4:12","Philippians 1:1","1 Timothy 3:8-13","1 Timothy 4:6","2 Timothy 4:5","Hebrews 1:14","1 Peter 4:10-11"],
  relatedWords:["servant","minister","elder","apostle","servanthood"],
  category:"identity / community",
  sources:["Strong's G1247","Strong's G1248","Strong's G1249","Thayer's"],
  confidence:"direct-source"
},
"baptism":{
  word:"baptism", plain:"Ritual immersion / washing — the new-covenant entry rite of identification with Christ.",
  deep:"Greek BAPTISMA (G908, the act) / BAPTIZO (G907, to immerse). John's baptism (Matt 3) was a repentance-baptism preparing for Messiah. Jesus' baptism (Matt 3:13-17) inaugurates His public ministry and identifies Him with sinners. Christian baptism (Matt 28:19; Acts 2:38) is into the name of Father-Son-Spirit, signifying union with Christ in death-burial-resurrection (Rom 6:3-4), washing of regeneration (Tit 3:5), and incorporation into the body (1 Cor 12:13). Modes (immersion / pouring / sprinkling) and subjects (believers / infants) are debated; the biblical texts emphasize union and identification.",
  misunderstood:"Baptism is not magic. Yet it is more than symbol — it is a covenant act commanded by Christ (Matt 28:19). Different traditions debate efficacy, mode, and subjects; on the act itself the NT is consistent: it follows or accompanies faith and enters the believer into visible covenant community.",
  matters:"As the Great Commission's named act (Matt 28:19), baptism is structural to disciple-making, not optional.",
  originals:[
    {lang:"Greek",word:"βάπτισμα",translit:"baptisma",strongs:"G908",note:"Baptism — the act / rite."},
    {lang:"Greek",word:"βαπτίζω",translit:"baptizo",strongs:"G907",note:"To immerse, dip, baptize."},
    {lang:"Greek",word:"βαπτισμός",translit:"baptismos",strongs:"G909",note:"Ceremonial washing."}
  ],
  rangeOfMeaning:["John's baptism","Jesus' baptism","Christian baptism","Spirit-baptism (1 Cor 12:13)","baptism of fire / suffering (Luke 12:50)"],
  notMean:"Not a magic mechanism. Not optional in the disciple-making mandate. Not always salvific without faith (Acts 8:13, Simon).",
  cultural:"Jewish ritual washings (mikvah) for purity preceded John. Gentile proselytes were baptized into Israel; John's controversy was baptizing Jews as if they were unclean. Christ's command extends baptism to all nations.",
  kingdomSignificance:"Baptism is the visible boundary of kingdom-citizenship; the Great Commission orders disciples to baptize all nations into the triune name (Matt 28:19).",
  relatedVerses:["Matthew 3:13-17","Matthew 28:19","Mark 1:4-11","Mark 10:38-39","Mark 16:16","Luke 3:3","Luke 12:50","John 3:5","John 4:1-2","Acts 2:38, 41","Acts 8:12, 36-38","Acts 9:18","Acts 10:47-48","Acts 16:15, 33","Acts 19:1-5","Acts 22:16","Romans 6:3-4","1 Corinthians 1:13-17","1 Corinthians 12:13","Galatians 3:27","Ephesians 4:5","Colossians 2:12","Titus 3:5","Hebrews 6:2","1 Peter 3:21"],
  relatedWords:["repentance","faith","Christian initiation","Spirit-baptism","union with Christ"],
  category:"salvation / community",
  sources:["Strong's G907","Strong's G908","Strong's G909","Thayer's","BDB (mikvah background)"],
  confidence:"direct-source"
},
"messiah":{
  word:"messiah", plain:"Anointed one — God's chosen and Spirit-empowered king-priest-prophet.",
  deep:"Hebrew MASHIACH (H4899) — anointed one. From MASHACH (H4886, to anoint). Greek CHRISTOS (G5547) — translates mashiach. Anointing with oil set apart kings (1 Sam 16:13 — David), priests (Lev 8:12 — Aaron), and prophets (1 Kings 19:16 — Elisha). Daniel 9:25-26 prophesies 'Messiah the Prince.' NT identifies Jesus as the Messiah — combining all three offices: King (Davidic line), Priest (Melchizedek order, Heb 7), Prophet (the prophet greater than Moses, Acts 3:22-23).",
  misunderstood:"Messiah is not just 'savior' — it is THE anointed king-priest-prophet from David's line who fulfills all messianic prophecy. First-century Jewish expectations focused on the king part; Jesus' suffering-then-glory pattern surprised them but matched Isa 53.",
  matters:"To say 'Jesus is the Messiah/Christ' is to confess Davidic kingship, priestly atonement, and prophetic word together.",
  originals:[
    {lang:"Hebrew",word:"מָשִׁיחַ",translit:"mashiach",strongs:"H4899",note:"Anointed one, Messiah."},
    {lang:"Hebrew",word:"מָשַׁח",translit:"mashach",strongs:"H4886",note:"To anoint."},
    {lang:"Greek",word:"Χριστός",translit:"Christos",strongs:"G5547",note:"Christ — translates mashiach."},
    {lang:"Aramaic",word:"מְשִׁיחָא",translit:"meshicha",strongs:"(Aramaic form)",note:"Aramaic Messiah."}
  ],
  rangeOfMeaning:["anointed king (Davidic)","anointed priest (Aaronic, Melchizedekian)","anointed prophet","THE Messiah (Christ)"],
  notMean:"Not a political revolutionary only. Not a generic religious teacher. Specifically the anointed one of OT prophecy.",
  cultural:"Second-Temple Jewish messianic expectations varied widely. Some expected a Davidic king, some a priestly figure, some a prophet-like-Moses. Christ fulfills all.",
  kingdomSignificance:"The Messiah IS the kingdom's center. 'Thou art the Christ, the Son of the living God' (Matt 16:16) is the foundational confession.",
  relatedVerses:["Leviticus 4:3","1 Samuel 16:13","2 Samuel 22:51","Psalm 2:2","Psalm 110","Isaiah 9:6-7","Isaiah 11:1-10","Isaiah 42:1-4","Isaiah 53","Isaiah 61:1-3","Daniel 9:25-26","Micah 5:2","Zechariah 9:9","Matthew 1:1","Matthew 16:16","Matthew 22:41-46","Mark 14:61-62","Luke 4:18-19","John 1:41","John 4:25-26","John 7:26","John 11:27","John 20:31","Acts 2:36","Acts 17:2-3"],
  relatedWords:["Christ","anointed","David","king","priest","prophet"],
  category:"salvation / kingdom",
  sources:["Strong's H4899","Strong's H4886","Strong's G5547","BDB","Thayer's"],
  confidence:"direct-source"
},
"Christ":{
  word:"Christ", plain:"Title (not surname) — the Anointed One; Greek for Messiah.",
  deep:"Greek CHRISTOS (G5547) — the Anointed. Christ is not Jesus' last name — it is His title and office. 'Jesus Christ' = 'Jesus the Messiah.' All Messianic offices (king, priest, prophet) converge in Him. The early Christian confession 'Jesus IS the Christ' was the line between belief and unbelief (1 John 2:22; 5:1).",
  misunderstood:"Christ is not a name. It is a title that asserts Davidic kingship, priestly atonement, and prophetic word in one person.",
  matters:"To confess 'Jesus is Christ' was to confess God's anointed King — politically loaded in the Roman empire and theologically loaded in Israel.",
  originals:[
    {lang:"Greek",word:"Χριστός",translit:"Christos",strongs:"G5547",note:"Christ — translates Hebrew Messiah."},
    {lang:"Hebrew",word:"מָשִׁיחַ",translit:"mashiach",strongs:"H4899",note:"Messiah (see messiah entry)."}
  ],
  rangeOfMeaning:["title (the Anointed One)","Jesus' office","Davidic king","High Priest forever","ultimate prophet"],
  notMean:"Not a surname. Not generic.",
  cultural:"Early followers were called 'Christ-ones' (CHRISTIANOI, Acts 11:26) by outsiders — a recognition that this group claimed Jesus as Messiah-King.",
  kingdomSignificance:"Christ is the kingdom's King. The confession 'Jesus is Christ' identifies kingdom-citizens.",
  relatedVerses:["Matthew 1:1, 16-17","Matthew 16:16","John 1:41","John 20:31","Acts 2:36","Acts 17:3","Acts 18:5, 28","Romans 1:1","Romans 9:5","1 Corinthians 1:23","1 Corinthians 15:3-4","Galatians 3:16","Ephesians 1:10","Colossians 1:15-20","Colossians 2:9","1 Timothy 1:1","Hebrews 5:5","1 John 2:22","1 John 4:2","1 John 5:1","Revelation 1:1","Revelation 11:15","Revelation 20:4"],
  relatedWords:["Messiah","anointed","Lord","Jesus","Son of God"],
  category:"salvation / identity",
  sources:["Strong's G5547","Strong's H4899","Thayer's"],
  confidence:"direct-source"
},
"stranger":{
  word:"stranger", plain:"A foreigner / outsider — and the believer's identity in this present age.",
  deep:"Hebrew GER (H1616, see sojourner entry) / NOKHRI (H5237, foreigner) / ZUR (H2114, strange/foreign). NT: XENOS (G3581) — stranger / guest. The OT specifies legal protection and inclusion for the GER (Lev 19:33-34). NT calls believers strangers on earth (Heb 11:13; 1 Pet 1:1; 2:11) and warns against entertaining strangers strange to God (3 John 5-8 commends hospitality).",
  misunderstood:"Stranger is not 'enemy.' Hospitality to strangers is repeatedly commanded (Heb 13:2). Yet the believer's sojourn-identity also calls for not entangling oneself with the world.",
  matters:"How the church treats strangers (sojourners, refugees, outsiders) is a covenant litmus test (Mal 3:5; Matt 25:35).",
  originals:[
    {lang:"Hebrew",word:"גֵּר",translit:"ger",strongs:"H1616",note:"Sojourner / resident foreigner."},
    {lang:"Hebrew",word:"נָכְרִי",translit:"nokhri",strongs:"H5237",note:"Foreigner."},
    {lang:"Hebrew",word:"זָר",translit:"zar",strongs:"H2114",note:"Strange / foreign."},
    {lang:"Greek",word:"ξένος",translit:"xenos",strongs:"G3581",note:"Stranger, guest."}
  ],
  rangeOfMeaning:["resident foreigner","ethnic outsider","guest","believer on earth"],
  notMean:"Not enemy by default. Not less than image-bearer.",
  cultural:"ANE hospitality codes obligated welcome to strangers (Gen 18:1-8; 19:1-3). Israel's Torah law extended this with specific protections.",
  kingdomSignificance:"'I was a stranger and ye took me in' (Matt 25:35) is at the final judgment criterion. The kingdom embraces and includes the stranger.",
  relatedVerses:["Genesis 18:1-8","Genesis 23:4","Exodus 22:21","Exodus 23:9","Leviticus 19:33-34","Leviticus 24:22","Deuteronomy 10:18-19","Deuteronomy 24:14, 17","Deuteronomy 27:19","Ruth (whole book)","Job 31:32","Psalm 39:12","Psalm 119:19","Isaiah 56:3-8","Matthew 25:35-40","Hebrews 11:13","Hebrews 13:2","1 Peter 1:1, 17","1 Peter 2:11","3 John 5-8"],
  relatedWords:["sojourner","alien","foreigner","ger","hospitality","widow","orphan"],
  category:"justice / community",
  sources:["Strong's H1616","Strong's H5237","Strong's H2114","Strong's G3581","BDB","Thayer's"],
  confidence:"direct-source"
},
"widow":{
  word:"widow", plain:"A woman whose husband has died — protected in covenant law, cared for by the church.",
  deep:"Hebrew ALMANAH (H490) — widow. Greek CHERA (G5503) — widow. Special object of God's care (Ps 68:5 — 'a father of the fatherless, and a judge of the widows'). Torah law: not to be afflicted (Exod 22:22), included in tithing meals (Deut 14:29), benefit from gleaning (Deut 24:19-21), covenant blessing-or-curse turns on care for her (Deut 27:19). NT: Acts 6 deacon office responded to widow neglect; 1 Tim 5:3-16 details church responsibility; pure religion includes visiting widows in affliction (Jas 1:27).",
  misunderstood:"Widow-care is not optional charity — it is at the core of covenant righteousness.",
  matters:"How a community treats widows reveals its covenant heart (Mal 3:5; Matt 23:14).",
  originals:[
    {lang:"Hebrew",word:"אַלְמָנָה",translit:"almanah",strongs:"H490",note:"Widow."},
    {lang:"Greek",word:"χήρα",translit:"chera",strongs:"G5503",note:"Widow."}
  ],
  rangeOfMeaning:["bereaved woman","specific NT order of widows (1 Tim 5)","metaphor for desolate Israel (Lam 1:1)","metaphor for the church without Christ"],
  notMean:"Not socially invisible. Not abandoned.",
  cultural:"ANE/Mediterranean widow's economic vulnerability was severe. The kinsman-redeemer (Boaz to Ruth) and the levirate (Deut 25:5-10) were structural protections. The early church created a roll of widows (1 Tim 5:9).",
  kingdomSignificance:"God is 'father of the fatherless and judge of the widows' (Ps 68:5). His kingdom protects them.",
  relatedVerses:["Exodus 22:22-24","Deuteronomy 10:18","Deuteronomy 14:28-29","Deuteronomy 24:17-21","Deuteronomy 26:12-13","Deuteronomy 27:19","Ruth (whole book)","Psalm 68:5","Psalm 146:9","Isaiah 1:17","Isaiah 1:23","Jeremiah 7:6","Jeremiah 22:3","Ezekiel 22:7","Zechariah 7:10","Malachi 3:5","Matthew 23:14","Mark 12:40-44","Luke 2:36-38","Luke 7:11-15","Luke 18:1-8","Luke 21:1-4","Acts 6:1","Acts 9:36-41","1 Timothy 5:3-16","James 1:27"],
  relatedWords:["orphan","sojourner","stranger","kinsman-redeemer","levirate"],
  category:"justice / community",
  sources:["Strong's H490","Strong's G5503","BDB","Thayer's"],
  confidence:"direct-source"
},
"orphan":{
  word:"orphan", plain:"A fatherless child — protected in covenant law as God's special concern.",
  deep:"Hebrew YATHOM (H3490) — orphan, fatherless. Greek ORPHANOS (G3737). Like widow, the orphan is repeatedly named in Torah law (Exod 22:22; Deut 10:18; 14:29; 16:11, 14; 24:19-21; 26:12-13; 27:19) and prophetic indictment (Isa 1:17, 23; Jer 7:6; Zech 7:10; Mal 3:5). Pure religion includes 'visiting the fatherless and widows in their affliction' (Jas 1:27).",
  misunderstood:"Orphan-care is not optional charity but covenant obligation. God is 'father of the fatherless' (Ps 68:5) — His character defines His people's ethics.",
  matters:"As with widow-care, how a community treats orphans tests its covenant heart.",
  originals:[
    {lang:"Hebrew",word:"יָתוֹם",translit:"yathom",strongs:"H3490",note:"Orphan, fatherless."},
    {lang:"Greek",word:"ὀρφανός",translit:"orphanos",strongs:"G3737",note:"Orphan; also 'desolate' (John 14:18)."}
  ],
  rangeOfMeaning:["fatherless child","orphaned disciple (John 14:18)","metaphor for spiritual abandonment"],
  notMean:"Not invisible. Not less than image-bearer.",
  cultural:"ANE orphan was at the mercy of relatives or community charity. Israel's law made provision via gleaning, tithes, and feast inclusion.",
  kingdomSignificance:"Jesus promises 'I will not leave you orphans' (John 14:18) — the Spirit-given comfort to disciples after His departure.",
  relatedVerses:["Exodus 22:22-24","Deuteronomy 10:18","Deuteronomy 14:29","Deuteronomy 16:11, 14","Deuteronomy 24:17-21","Deuteronomy 26:12-13","Deuteronomy 27:19","Job 22:9","Job 24:9","Job 29:12","Psalm 10:14, 18","Psalm 68:5","Psalm 82:3","Psalm 146:9","Isaiah 1:17, 23","Jeremiah 7:6","Jeremiah 22:3","Ezekiel 22:7","Zechariah 7:10","Malachi 3:5","John 14:18","James 1:27"],
  relatedWords:["fatherless","widow","sojourner","stranger"],
  category:"justice / community",
  sources:["Strong's H3490","Strong's G3737","BDB","Thayer's"],
  confidence:"direct-source"
}
};

// Merge into ENGLISH_BIBLE_DICT so showDef sees them.
for(const k in entries){ window.ENGLISH_BIBLE_DICT[k] = entries[k]; }

// Update the audit hook
window.DEFINITION_INTEGRITY_AUDIT.completenessPack = {
  status: 'patched',
  addedEntries: Object.keys(entries),
  count: Object.keys(entries).length,
  note: 'Fills the 32 high-value concept gaps identified by the 5-pass integrity audit.'
};
})();
