// SWRV Kingdom Study — Parallel Passages
// Each entry groups passages that record the same event or have substantial overlap.
// Especially valuable for Synoptic Gospels (Matthew/Mark/Luke), Kings/Chronicles,
// and prophetic parallel oracles.

window.PARALLEL_PASSAGES = [
  // ========= GOSPELS — Synoptic Parallels =========
  {id:"birth_jesus", title:"The Birth of Jesus", passages:["Matthew 1:18-25","Luke 2:1-7"], note:"Matthew tells from Joseph's perspective; Luke from Mary's."},
  {id:"baptism_jesus", title:"The Baptism of Jesus", passages:["Matthew 3:13-17","Mark 1:9-11","Luke 3:21-22","John 1:29-34"], note:"All four Gospels record. The Trinity manifests."},
  {id:"temptation", title:"Wilderness Temptation", passages:["Matthew 4:1-11","Mark 1:12-13","Luke 4:1-13"], note:"Mark gives bare summary; Matthew and Luke detail three specific temptations."},
  {id:"call_disciples", title:"Calling of the First Disciples", passages:["Matthew 4:18-22","Mark 1:16-20","Luke 5:1-11","John 1:35-51"], note:"John records a pre-Galilee meeting; Synoptics record the call to leave nets."},
  {id:"sermon_mount", title:"Sermon on the Mount / Plain", passages:["Matthew 5-7","Luke 6:17-49"], note:"Matthew on a mountain; Luke on a plain — likely the same event."},
  {id:"beatitudes", title:"The Beatitudes", passages:["Matthew 5:3-12","Luke 6:20-26"], note:"Matthew has 8 (spiritual focus); Luke has 4 blessings + 4 woes."},
  {id:"lords_prayer", title:"The Lord's Prayer", passages:["Matthew 6:9-13","Luke 11:2-4"], note:"Matthew's longer version is the liturgical standard."},
  {id:"calming_storm", title:"Jesus Calms the Storm", passages:["Matthew 8:23-27","Mark 4:35-41","Luke 8:22-25"], note:"All three Synoptics; Mark adds vivid detail of Jesus asleep on a pillow."},
  {id:"gadarene", title:"The Gadarene Demoniac", passages:["Matthew 8:28-34","Mark 5:1-20","Luke 8:26-39"], note:"Matthew mentions two men; Mark and Luke focus on one (the more prominent)."},
  {id:"jairus_daughter", title:"Jairus' Daughter + Woman with Issue of Blood", passages:["Matthew 9:18-26","Mark 5:21-43","Luke 8:40-56"], note:"Two healings interwoven — sandwich structure."},
  {id:"feeding_5000", title:"Feeding of the 5,000", passages:["Matthew 14:13-21","Mark 6:30-44","Luke 9:10-17","John 6:1-15"], note:"The ONLY miracle in all four Gospels."},
  {id:"walking_water", title:"Jesus Walks on Water", passages:["Matthew 14:22-33","Mark 6:45-52","John 6:16-21"], note:"Matthew uniquely records Peter also walking on water."},
  {id:"peter_confession", title:"Peter's Confession at Caesarea Philippi", passages:["Matthew 16:13-20","Mark 8:27-30","Luke 9:18-21"], note:"Hinge moment of Jesus' ministry."},
  {id:"transfiguration", title:"The Transfiguration", passages:["Matthew 17:1-13","Mark 9:2-13","Luke 9:28-36","2 Peter 1:16-18"], note:"Peter recalls it decades later."},
  {id:"rich_young_ruler", title:"The Rich Young Ruler", passages:["Matthew 19:16-30","Mark 10:17-31","Luke 18:18-30"], note:"Matthew calls him young; Luke calls him a ruler; Mark gives the most personal detail."},
  {id:"triumphal_entry", title:"Triumphal Entry", passages:["Matthew 21:1-11","Mark 11:1-11","Luke 19:28-44","John 12:12-19"], note:"All four Gospels. Fulfills Zechariah 9:9."},
  {id:"temple_cleansing", title:"Cleansing of the Temple", passages:["Matthew 21:12-13","Mark 11:15-17","Luke 19:45-46","John 2:13-22"], note:"John places one early; Synoptics place one during Passion Week. Possibly two cleansings."},
  {id:"olivet_discourse", title:"The Olivet Discourse", passages:["Matthew 24-25","Mark 13","Luke 21:5-36"], note:"Jesus' prophecy of the destruction of Jerusalem AND His return."},
  {id:"last_supper", title:"The Last Supper", passages:["Matthew 26:17-29","Mark 14:12-25","Luke 22:7-23","John 13-17","1 Corinthians 11:23-26"], note:"Paul's earliest written account (~AD 55) confirms what the Gospels later record."},
  {id:"gethsemane", title:"Gethsemane", passages:["Matthew 26:36-46","Mark 14:32-42","Luke 22:39-46"], note:"Luke uniquely records the angel strengthening Him and the sweat like drops of blood."},
  {id:"crucifixion", title:"The Crucifixion", passages:["Matthew 27:33-56","Mark 15:22-41","Luke 23:33-49","John 19:17-37"], note:"Each Gospel adds unique details — John's eyewitness perspective is densest."},
  {id:"resurrection", title:"The Resurrection", passages:["Matthew 28","Mark 16","Luke 24","John 20-21","1 Corinthians 15:1-8"], note:"Paul's creed in 1 Cor 15 may be the earliest preserved Christian statement (~AD 35)."},

  // ========= OT — Kings/Chronicles Parallels =========
  {id:"david_kingdom", title:"David Anointed King over All Israel", passages:["2 Samuel 5:1-5","1 Chronicles 11:1-3"], note:"Kings/Chronicles record the same events from different theological angles."},
  {id:"ark_to_jerusalem", title:"The Ark Brought to Jerusalem", passages:["2 Samuel 6","1 Chronicles 13, 15-16"], note:"Chronicles emphasizes worship; Samuel focuses on narrative."},
  {id:"davidic_covenant", title:"The Davidic Covenant", passages:["2 Samuel 7:1-17","1 Chronicles 17:1-15"], note:"The eternal throne promise — fulfilled in Christ."},
  {id:"solomon_temple", title:"Solomon Builds the Temple", passages:["1 Kings 6-8","2 Chronicles 3-7"], note:"Chronicles gives more detail on dedication; Kings on construction."},
  {id:"hezekiah_assyria", title:"Hezekiah Delivered from Assyria", passages:["2 Kings 18-19","2 Chronicles 32","Isaiah 36-37"], note:"The same event from three angles — Isaiah was THERE."},
  {id:"josiah_reforms", title:"Josiah's Reforms", passages:["2 Kings 22-23","2 Chronicles 34-35"], note:"Finding the Book of the Law (probably Deuteronomy)."},
  {id:"jerusalem_falls", title:"Fall of Jerusalem", passages:["2 Kings 25","2 Chronicles 36","Jeremiah 39, 52","Lamentations"], note:"Jeremiah lived through it; Chronicles wrote it later."},
  {id:"cyrus_decree", title:"Decree of Cyrus", passages:["2 Chronicles 36:22-23","Ezra 1:1-4","Isaiah 44:28-45:1"], note:"Isaiah predicted Cyrus by name 150+ years before he was born."},

  // ========= NT — Multiple Letters on Same Theme =========
  {id:"resurrection_appearances", title:"Resurrection Appearances Listed", passages:["Matthew 28","Mark 16","Luke 24","John 20-21","Acts 1:1-11","1 Corinthians 15:3-8"], note:"1 Corinthians 15 names 500+ witnesses, including James the Lord's brother."},
  {id:"pentecost_outpouring", title:"Pentecost — Spirit Poured Out", passages:["Acts 2","Joel 2:28-32"], note:"Peter quotes Joel directly: 'This is that which was spoken by the prophet Joel.'"},
  {id:"jerusalem_council", title:"The Jerusalem Council", passages:["Acts 15","Galatians 2:1-10"], note:"Acts gives the public record; Galatians the personal stakes."},
  {id:"paul_conversion", title:"Paul's Damascus Road Conversion", passages:["Acts 9:1-19","Acts 22:6-16","Acts 26:12-18","Galatians 1:11-17"], note:"Recorded THREE times in Acts plus Paul's autobiographical account in Galatians."}
];

// Build passage -> parallel groups index for fast lookup
window.PASSAGE_TO_PARALLELS = {};
for (const p of window.PARALLEL_PASSAGES) {
  for (const passage of p.passages) {
    if (!window.PASSAGE_TO_PARALLELS[passage]) window.PASSAGE_TO_PARALLELS[passage] = [];
    window.PASSAGE_TO_PARALLELS[passage].push(p.id);
  }
}
