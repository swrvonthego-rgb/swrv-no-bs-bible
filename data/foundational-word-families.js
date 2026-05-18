// SWRV Kingdom Bible — Foundational Word-Family Integrity Patch
// Purpose: stop thin definitions from slipping through preview. These entries
// connect English surface words to Hebrew/Greek word families, source traces,
// context warnings, and related passages. They are intentionally source-honest:
// if a claim belongs to a related word (e.g., breath/neshamah) and not the
// surface word (e.g., Adam), the card says so.
(function(){
  window.ENGLISH_BIBLE_DICT = window.ENGLISH_BIBLE_DICT || {};
  window.DEFINITION_INTEGRITY_AUDIT = window.DEFINITION_INTEGRITY_AUDIT || {};
  const entries = {
    adam: {
      word: 'Adam',
      plain: 'Human / man / mankind; also the proper name of the first man.',
      deep: 'Hebrew אָדָם (adam, H120) can mean a human being, mankind collectively, or the individual Adam. In Genesis it is deliberately linked with אֲדָמָה (adamah, H127), the ground/soil from which the human is formed. The word-family also connects with אָדֹם (adom, H122), red/ruddy, which helps explain the earth/soil/ruddiness association. The “breath” part is not inside the word Adam itself; it comes from Genesis 2:7, where YHWH breathes נְשָׁמָה (neshamah, H5397), the breath of life, into the formed human.',
      misunderstood: 'Do not define Adam only as “a male name.” Do not say Adam means “breath.” Adam is earth-linked humanity; breath comes from neshamah/ruach language in Genesis 2:7 and related passages.',
      matters: 'This shapes biblical anthropology: humanity is not divine by nature and not merely animal matter. Adam is formed from ground and animated by God’s breath. Dust + divine breath becomes a living being.',
      originals: [
        {lang:'Hebrew', word:'אָדָם', translit:'adam', strongs:'H120', note:'Human, man, mankind; Adam as a proper name.'},
        {lang:'Hebrew', word:'אֲדָמָה', translit:'adamah', strongs:'H127', note:'Ground, soil, earth; the source material from which adam is formed in Genesis 2:7.'},
        {lang:'Hebrew', word:'אָדֹם', translit:'adom', strongs:'H122', note:'Red, ruddy; related word-family that supports the reddish earth/soil association.'},
        {lang:'Hebrew', word:'נְשָׁמָה', translit:'neshamah', strongs:'H5397', note:'Breath; the breath of life in Genesis 2:7. This is the breath component, not the word adam.'},
        {lang:'Hebrew', word:'רוּחַ', translit:'ruach', strongs:'H7307', note:'Wind, breath, spirit; relevant when passages speak of spirit/breath/life animation.'},
        {lang:'Hebrew', word:'נֶפֶשׁ', translit:'nephesh', strongs:'H5315', note:'Living being / life / person. Adam became a living nephesh in Genesis 2:7.'}
      ],
      rangeOfMeaning: ['human being', 'mankind/humanity', 'Adam as personal name', 'earth-formed humanity connected to adamah', 'word-family association with red/ruddy earth through adom'],
      notMean: 'Adam does not itself mean “breath.” It also should not be reduced to a European-looking movie image or a generic modern male name.',
      cultural: 'Genesis presents humanity in ancient Hebrew concrete terms: formed from ground like a potter’s material, animated by divine breath, placed as God’s image-bearing vice-regent. This is earth, breath, vocation, and covenant identity together.',
      kingdomSignificance: 'Adam is the first vice-regent: earth-made but God-breathed, placed to bear God’s image and rule under God’s authority. Christ is later presented as the last Adam, the faithful human kingly representative.',
      relatedVerses: ['Genesis 1:26-27', 'Genesis 2:7', 'Genesis 3:19', 'Genesis 5:1-2', 'Psalm 8', 'Romans 5:12-19', '1 Corinthians 15:45-49'],
      relatedWords: ['man', 'human', 'mankind', 'ground', 'dust', 'breath', 'soul', 'spirit', 'image', 'last Adam'],
      category: 'identity / personhood / creation',
      sources: ['Strong’s H120', 'Strong’s H127', 'Strong’s H122', 'Strong’s H5397', 'Strong’s H7307', 'Strong’s H5315', 'BDB Hebrew Lexicon data', 'Genesis 2:7'],
      confidence: 'direct-source'
    },
    adamah: {
      word:'Adamah / ground',
      plain:'Ground, soil, earth — the material source from which adam is formed.',
      deep:'אֲדָמָה (adamah, H127) is the ground/soil/earth. Genesis 2:7 intentionally links adam and adamah: the human is formed from the ground. Genesis 3:19 returns the human to the ground after death: “dust thou art, and unto dust shalt thou return.”',
      misunderstood:'Do not miss the Hebrew wordplay. The text is not only saying humans are made from dirt; it is building identity from earth-formed dependence on God.',
      originals:[{lang:'Hebrew',word:'אֲדָמָה',translit:'adamah',strongs:'H127',note:'Ground, soil, cultivated earth.'},{lang:'Hebrew',word:'אָדָם',translit:'adam',strongs:'H120',note:'Human/mankind/Adam, word-family partner.'}],
      rangeOfMeaning:['ground','soil','land/earth','cultivated earth'],
      relatedVerses:['Genesis 2:7','Genesis 3:19','Genesis 4:2-3','Genesis 9:20'],
      relatedWords:['Adam','dust','earth','land','soil'],
      category:'creation / identity',
      sources:['Strong’s H127','BDB Hebrew Lexicon data','Genesis 2:7'],
      confidence:'direct-source'
    },
    man: {
      word:'Man / human',
      plain:'Human being; mankind; sometimes a male person depending on the underlying Hebrew/Greek.',
      deep:'English “man” may translate several ideas: אָדָם (adam, H120) = human/mankind; אִישׁ (ish, H376) = man/male/person/husband; ἄνθρωπος (anthropos, G444) = human/person/mankind; ἀνήρ (aner, G435) = male/man/husband. Context decides whether the passage means all humanity, a male, a husband, or a person.',
      misunderstood:'Do not assume every “man” means male only, and do not assume every “man” means humanity broadly. The underlying original word matters.',
      originals:[{lang:'Hebrew',word:'אָדָם',translit:'adam',strongs:'H120',note:'Human/mankind/Adam.'},{lang:'Hebrew',word:'אִישׁ',translit:'ish',strongs:'H376',note:'Man, male, husband, person.'},{lang:'Greek',word:'ἄνθρωπος',translit:'anthropos',strongs:'G444',note:'Human being/person/mankind.'},{lang:'Greek',word:'ἀνήρ',translit:'aner',strongs:'G435',note:'Male/man/husband.'}],
      rangeOfMeaning:['humanity','human person','male person','husband','representative person'],
      relatedVerses:['Genesis 1:26-27','Genesis 2:7','Genesis 2:23','Psalm 8','Matthew 4:4','Romans 5:12','1 Corinthians 15:45'],
      relatedWords:['Adam','human','mankind','woman','husband','image'],
      category:'identity / personhood',
      sources:['Strong’s H120','Strong’s H376','Strong’s G444','Strong’s G435','BDB','Thayer’s'],
      confidence:'direct-source'
    },
    human: { aliasOf:'adam' },
    humanity: { aliasOf:'adam' },
    mankind: { aliasOf:'adam' },
    ground: { aliasOf:'adamah' },
    soil: { aliasOf:'adamah' },
    dust: {
      word:'Dust',
      plain:'Fine dry earth/particles; the lowly material from which the human body is formed and to which it returns.',
      deep:'עָפָר (aphar, H6083) means dust, dry earth, powder. Genesis 2:7 says YHWH formed the man from the dust of the ground. Genesis 3:19 says the human returns to dust after death. Dust language carries humility, mortality, creatureliness, and dependence on God’s breath.',
      misunderstood:'Dust does not mean humans are worthless. It means humans are creaturely and dependent. The dignity comes because the dust-formed human is God-breathed and image-bearing.',
      originals:[{lang:'Hebrew',word:'עָפָר',translit:'aphar',strongs:'H6083',note:'Dust, dry earth, powder.'},{lang:'Hebrew',word:'אֲדָמָה',translit:'adamah',strongs:'H127',note:'Ground/soil, the source material.'}],
      rangeOfMeaning:['dust','dry earth','powder','mortality marker','humility marker'],
      relatedVerses:['Genesis 2:7','Genesis 3:19','Job 10:9','Psalm 103:14','Ecclesiastes 12:7'],
      relatedWords:['Adam','ground','breath','mortality'],
      category:'creation / mortality',
      sources:['Strong’s H6083','Strong’s H127','BDB Hebrew Lexicon data'],
      confidence:'direct-source'
    },
    breath: {
      word:'Breath',
      plain:'Breath, wind, life-animation; in Genesis 2:7, God’s life-giving breath animates the formed human.',
      deep:'Breath language uses more than one Hebrew word. נְשָׁמָה (neshamah, H5397) is the breath of life in Genesis 2:7. רוּחַ (ruach, H7307) can mean wind, breath, spirit, disposition, or the Spirit of God depending on context. Breath is not what “Adam” means; breath is what God gives to the formed adam.',
      misunderstood:'Do not merge Adam, soul, spirit, and breath into one word. Genesis gives a sequence: formed from dust/ground, breathed into by God, becomes a living nephesh.',
      originals:[{lang:'Hebrew',word:'נְשָׁמָה',translit:'neshamah',strongs:'H5397',note:'Breath, divine in-breathing in Genesis 2:7.'},{lang:'Hebrew',word:'רוּחַ',translit:'ruach',strongs:'H7307',note:'Wind, breath, spirit.'},{lang:'Greek',word:'πνεῦμα',translit:'pneuma',strongs:'G4151',note:'Wind, breath, spirit.'}],
      rangeOfMeaning:['breath','life-breath','wind','spirit depending on context','divine animation'],
      relatedVerses:['Genesis 2:7','Genesis 7:22','Job 33:4','Psalm 104:29-30','Ezekiel 37:5-10','John 3:8','2 Timothy 3:16'],
      relatedWords:['Adam','soul','spirit','wind','life'],
      category:'life / spirit / creation',
      sources:['Strong’s H5397','Strong’s H7307','Strong’s G4151','BDB','Thayer’s'],
      confidence:'direct-source'
    },
    neshamah: { aliasOf:'breath' },
    ruach: { aliasOf:'spirit' },
    nephesh: { aliasOf:'soul' },
    psyche: { aliasOf:'soul' },
    pneuma: { aliasOf:'spirit' },
    basar: { aliasOf:'flesh' },
    sarx: { aliasOf:'flesh' },
    basileia: { aliasOf:'kingdom' },
    malkuth: { aliasOf:'kingdom' },
    mamlakah: { aliasOf:'kingdom' },
    charis: { aliasOf:'grace' },
    chen: { aliasOf:'grace' },
    hesed: { aliasOf:'love' },
    chesed: { aliasOf:'love' },
    ahab: { aliasOf:'love' },
    agape: { aliasOf:'love' },
    agapao: { aliasOf:'love' },
    phileo: { aliasOf:'love' },
    berith: { aliasOf:'covenant' },
    diatheke: { aliasOf:'covenant' },
    qadosh: { aliasOf:'holy' },
    hagios: { aliasOf:'holy' },
    hamartia: { aliasOf:'sin' },
    chata: { aliasOf:'sin' }
  };
  Object.keys(entries).forEach(function(key){
    const val = entries[key];
    if(val && val.aliasOf){
      Object.defineProperty(window.ENGLISH_BIBLE_DICT, key, {
        configurable:true,
        enumerable:true,
        get:function(){ return window.ENGLISH_BIBLE_DICT[val.aliasOf]; }
      });
    } else {
      window.ENGLISH_BIBLE_DICT[key] = val;
    }
  });
  // Also patch legacy DEFINITIONS so underlined words from older Genesis data open the same depth.
  window.DEFINITIONS = window.DEFINITIONS || {};
  function legacyFrom(e){
    if(!e || e.aliasOf) return null;
    const first = (e.originals||[])[0] || {};
    return {
      hebrew:first.word || '',
      translit:first.translit || '',
      strongs:first.strongs || '',
      def:e.plain || '',
      theology:e.deep || '',
      warning:e.misunderstood || e.notMean || '',
      ane:e.cultural || '',
      kingdom:e.kingdomSignificance || '',
      senses:e.rangeOfMeaning || [],
      cross:(e.relatedVerses||[]).join('; ')
    };
  }
  ['adam','adamah','man','dust','breath'].forEach(function(k){
    const legacy = legacyFrom(entries[k]);
    if(legacy) window.DEFINITIONS[k] = Object.assign({}, legacy, window.DEFINITIONS[k]||{});
  });
  // Capital aliases for verse text clicks.
  window.DEFINITIONS.Adam = window.DEFINITIONS.adam;
  window.DEFINITIONS.Man = window.DEFINITIONS.man;
  window.DEFINITIONS.Breath = window.DEFINITIONS.breath;
  window.DEFINITIONS.Dust = window.DEFINITIONS.dust;
  window.DEFINITION_INTEGRITY_AUDIT.foundationalWordFamilies = {
    status:'patched',
    reason:'Adam example exposed a missing foundational word-family link. This patch adds direct cards and aliases for Adam/adamah/adom, breath/neshamah/ruach, nephesh/psyche, basar/sarx, basileia/malkuth, charis/chen, love terms, covenant terms, holy terms, and sin terms.',
    requiredPreviewTests:['Adam','adamah','ground','dust','breath','neshamah','ruach','nephesh','soul','spirit','flesh','kingdom','grace','love','agape','hesed','covenant','holy','sin'],
    note:'This is an integrity floor, not a final claim that every Bible word in every source is complete.'
  };
})();
