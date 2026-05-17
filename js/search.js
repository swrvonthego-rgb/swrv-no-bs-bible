// ============================================================================
// SWRV Kingdom Bible — Global Search Engine
// ----------------------------------------------------------------------------
// Indexes verses, dictionary entries, lexicon (Strong's H/G), people, places,
// themes, chronological events, companion sources (Enoch/Josephus), cultural
// context, translation-loss notes, and Strong's-tagged original-language words.
// ============================================================================

(function(){

  // --------------------------- Book name normalization ---------------------------
  // Maps abbreviations and common spellings to our canonical book slugs
  const BOOK_ALIASES = {
    // Pentateuch
    'gen':'Genesis','genesis':'Genesis',
    'ex':'Exodus','exo':'Exodus','exod':'Exodus','exodus':'Exodus',
    'lev':'Leviticus','leviticus':'Leviticus',
    'num':'Numbers','numbers':'Numbers',
    'deut':'Deuteronomy','deuteronomy':'Deuteronomy','dt':'Deuteronomy',
    // History
    'josh':'Joshua','joshua':'Joshua','jos':'Joshua',
    'judg':'Judges','judges':'Judges','jdg':'Judges',
    'ruth':'Ruth',
    '1sam':'1Samuel','1 sam':'1Samuel','1 samuel':'1Samuel','i sam':'1Samuel','first samuel':'1Samuel',
    '2sam':'2Samuel','2 sam':'2Samuel','2 samuel':'2Samuel','ii sam':'2Samuel','second samuel':'2Samuel',
    '1kgs':'1Kings','1kings':'1Kings','1 kings':'1Kings','1 kgs':'1Kings','i kings':'1Kings','first kings':'1Kings',
    '2kgs':'2Kings','2kings':'2Kings','2 kings':'2Kings','2 kgs':'2Kings','ii kings':'2Kings','second kings':'2Kings',
    '1chr':'1Chronicles','1chron':'1Chronicles','1 chr':'1Chronicles','1 chronicles':'1Chronicles','first chronicles':'1Chronicles',
    '2chr':'2Chronicles','2chron':'2Chronicles','2 chr':'2Chronicles','2 chronicles':'2Chronicles','second chronicles':'2Chronicles',
    'ezra':'Ezra','neh':'Nehemiah','nehemiah':'Nehemiah','est':'Esther','esth':'Esther','esther':'Esther',
    // Wisdom
    'job':'Job','ps':'Psalms','psa':'Psalms','psalm':'Psalms','psalms':'Psalms','psm':'Psalms',
    'prov':'Proverbs','proverbs':'Proverbs','pr':'Proverbs',
    'eccl':'Ecclesiastes','ecc':'Ecclesiastes','ecclesiastes':'Ecclesiastes',
    'song':'SongofSolomon','sos':'SongofSolomon','song of solomon':'SongofSolomon','song of songs':'SongofSolomon','songofsolomon':'SongofSolomon',
    // Major Prophets
    'isa':'Isaiah','isaiah':'Isaiah','is':'Isaiah',
    'jer':'Jeremiah','jeremiah':'Jeremiah',
    'lam':'Lamentations','lamentations':'Lamentations',
    'ezek':'Ezekiel','ezekiel':'Ezekiel','eze':'Ezekiel',
    'dan':'Daniel','daniel':'Daniel',
    // Minor Prophets
    'hos':'Hosea','hosea':'Hosea',
    'joel':'Joel',
    'amos':'Amos',
    'obad':'Obadiah','obadiah':'Obadiah','ob':'Obadiah',
    'jonah':'Jonah','jon':'Jonah',
    'mic':'Micah','micah':'Micah',
    'nah':'Nahum','nahum':'Nahum',
    'hab':'Habakkuk','habakkuk':'Habakkuk',
    'zeph':'Zephaniah','zephaniah':'Zephaniah','zep':'Zephaniah',
    'hag':'Haggai','haggai':'Haggai',
    'zech':'Zechariah','zechariah':'Zechariah','zec':'Zechariah',
    'mal':'Malachi','malachi':'Malachi',
    // Gospels & Acts
    'matt':'Matthew','mt':'Matthew','matthew':'Matthew',
    'mark':'Mark','mk':'Mark','mar':'Mark',
    'luke':'Luke','lk':'Luke','luk':'Luke',
    'john':'John','jn':'John','jhn':'John',
    'acts':'Acts','act':'Acts',
    // Pauline
    'rom':'Romans','romans':'Romans','ro':'Romans',
    '1cor':'1Corinthians','1corinthians':'1Corinthians','1 cor':'1Corinthians','1 corinthians':'1Corinthians','i cor':'1Corinthians',
    '2cor':'2Corinthians','2corinthians':'2Corinthians','2 cor':'2Corinthians','2 corinthians':'2Corinthians','ii cor':'2Corinthians',
    'gal':'Galatians','galatians':'Galatians',
    'eph':'Ephesians','ephesians':'Ephesians',
    'phil':'Philippians','philippians':'Philippians','php':'Philippians',
    'col':'Colossians','colossians':'Colossians',
    '1thess':'1Thessalonians','1thes':'1Thessalonians','1 thess':'1Thessalonians','1 thessalonians':'1Thessalonians',
    '2thess':'2Thessalonians','2thes':'2Thessalonians','2 thess':'2Thessalonians','2 thessalonians':'2Thessalonians',
    '1tim':'1Timothy','1timothy':'1Timothy','1 tim':'1Timothy','1 timothy':'1Timothy',
    '2tim':'2Timothy','2timothy':'2Timothy','2 tim':'2Timothy','2 timothy':'2Timothy',
    'tit':'Titus','titus':'Titus',
    'phlm':'Philemon','philemon':'Philemon','phm':'Philemon',
    // General Epistles + Rev
    'heb':'Hebrews','hebrews':'Hebrews',
    'jas':'James','james':'James','jm':'James',
    '1pet':'1Peter','1peter':'1Peter','1 pet':'1Peter','1 peter':'1Peter',
    '2pet':'2Peter','2peter':'2Peter','2 pet':'2Peter','2 peter':'2Peter',
    '1john':'1John','1 john':'1John','1jn':'1John','1 jn':'1John',
    '2john':'2John','2 john':'2John','2jn':'2John','2 jn':'2John',
    '3john':'3John','3 john':'3John','3jn':'3John','3 jn':'3John',
    'jude':'Jude',
    'rev':'Revelation','revelation':'Revelation','re':'Revelation','apoc':'Revelation','apocalypse':'Revelation'
  };

  // --------------------------- Reference Parser ---------------------------
  // Parse "Gen 3:9", "Genesis 3:9", "Psalm 23", "1 Cor 13:13", "John 3"
  // Returns {book, chapter, verse} or null
  function parseReference(q){
    if(!q) return null;
    const trimmed = q.trim().toLowerCase();

    // Try matching: "book ch:v" or "book ch" — optionally with leading number for books like "1 sam"
    // Pattern 1: "1 sam 3:9", "i samuel 3:9", "first samuel 3:9"
    // Pattern 2: "gen 3:9", "genesis 3:9"
    // Pattern 3: "psalm 23"
    // Pattern 4: just "Genesis" (no chapter — return chapter 1)

    // Greedy approach: try every known alias as a prefix
    for(const alias of Object.keys(BOOK_ALIASES).sort((a,b)=>b.length-a.length)){
      // Match: alias [optional space] [chapter [:verse]]
      const rx = new RegExp('^'+alias.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*(\\d+)?\\s*[:.]?\\s*(\\d+)?$');
      const m = trimmed.match(rx);
      if(m){
        const book = BOOK_ALIASES[alias];
        const chapter = m[1]?parseInt(m[1]):null;
        const verse = m[2]?parseInt(m[2]):null;
        if(!chapter) return {book, chapter:1, verse:null, partial:true};
        return {book, chapter, verse};
      }
    }
    return null;
  }

  // --------------------------- Search Index Builder ---------------------------
  // Builds a flat array of searchable records from existing window data.
  // Built lazily — first search invocation triggers it, then cached.
  let SEARCH_INDEX = null;
  let INDEX_BUILD_LOG = null;

  function buildIndex(){
    if(SEARCH_INDEX) return SEARCH_INDEX;
    const idx = [];
    const log = {verses:0, definitions:0, peoples:0, events:0, companion:0, strongs_heb:0, strongs_grk:0, kingdom_lens:0, cultural:0, bdb:0};

    // === 1. Verses (every verse, BSB primary text searchable) ===
    const addVerse = (book, ch, vn, v) => {
      const text = v.synthesized || v.text || '';
      const kjv = (v.sources && v.sources.KJV) ? v.sources.KJV.text : '';
      idx.push({
        type: 'verse',
        category: 'Scripture Passages',
        catShort: 'scripture',
        catBadge: '📖',
        title: book + ' ' + ch + ':' + vn,
        searchText: (text + ' ' + kjv).toLowerCase(),
        preview: text,
        reference: book + ' ' + ch + ':' + vn,
        priority: 100,
        action: { type:'verse', book, chapter:ch, verse:vn }
      });
      log.verses++;
    };
    if(window.GENESIS){
      for(const ch in window.GENESIS){
        for(const vn in window.GENESIS[ch].verses){
          addVerse('Genesis', parseInt(ch), parseInt(vn), window.GENESIS[ch].verses[vn]);
        }
      }
    }
    if(window.BIBLE){
      for(const book in window.BIBLE){
        for(const ch in window.BIBLE[book]){
          for(const vn in window.BIBLE[book][ch].verses){
            addVerse(book, parseInt(ch), parseInt(vn), window.BIBLE[book][ch].verses[vn]);
          }
        }
      }
    }

    // === 2. Definitions / Dictionary ===
    if(window.DEFINITIONS){
      for(const key in window.DEFINITIONS){
        const d = window.DEFINITIONS[key];
        if(!d || typeof d !== 'object') continue;
        if(d.see) continue; // skip alias-only entries
        const bits = [key, d.hebrew, d.translit, d.greek, d.def, d.visual, d.kingdom, d.theology,
                       d.ane, d.warning, d.strongs, (d.senses||[]).join(' ')].filter(Boolean).join(' ');
        idx.push({
          type:'definition',
          category:'Dictionary / Glossary',
          catShort:'dictionary',
          catBadge:'📔',
          title: key,
          searchText: bits.toLowerCase(),
          preview: (d.def || d.visual || (d.senses && d.senses[0]) || d.kingdom || '').slice(0,160),
          reference: d.strongs || (d.hebrew?'Hebrew: '+d.hebrew:''),
          priority: 80,
          action: { type:'definition', key }
        });
        log.definitions++;
      }
    }

    // === 3. People ===
    if(window.PEOPLES){
      for(const key in window.PEOPLES){
        const p = window.PEOPLES[key];
        if(!p) continue;
        const display = key.replace('_NT','').replace('_Magdalene','');
        const bits = [key, display, p.altName, p.biblical, p.notable, p.region, p.appearance].filter(Boolean).join(' ');
        idx.push({
          type:'person',
          category:'People',
          catShort:'people',
          catBadge:'👤',
          title: display + (key.endsWith('_NT')?' (NT)':'') + (key.endsWith('_Magdalene')?' Magdalene':''),
          searchText: bits.toLowerCase(),
          preview: (p.biblical || p.notable || '').slice(0,180),
          reference: p.sources ? p.sources.split(';')[0] : '',
          priority: 75,
          action: { type:'person', key }
        });
        log.peoples++;
      }
    }

    // === 4. Chronological Events ===
    if(window.CHRONOLOGICAL_EVENTS){
      for(const ev of window.CHRONOLOGICAL_EVENTS){
        const bits = [ev.title, ev.date, ev.notes, (ev.passages||[]).join(' '),
                       (ev.themes||[]).join(' '), (ev.people||[]).join(' '),
                       (ev.places||[]).join(' ')].filter(Boolean).join(' ');
        idx.push({
          type:'event',
          category:'Chronological Events',
          catShort:'event',
          catBadge:'🕰️',
          title: ev.title,
          searchText: bits.toLowerCase(),
          preview: ev.notes || ev.date,
          reference: ev.date,
          priority: 70,
          action: { type:'event', id:ev.id }
        });
        log.events++;
      }
    }

    // === 5. Companion sources (Enoch, Josephus, peoples links) ===
    if(window.CROSS_SOURCE_MAP){
      for(const book in window.CROSS_SOURCE_MAP){
        for(const ch in window.CROSS_SOURCE_MAP[book]){
          for(const ref of window.CROSS_SOURCE_MAP[book][ch]){
            let cat = 'Companion Sources', badge = '📚', short = 'companion';
            if(ref.type === 'enoch'){ cat = 'Enoch'; badge = '🕯️'; short = 'enoch'; }
            else if(ref.type === 'josephus'){ cat = 'Josephus'; badge = '🏛️'; short = 'josephus'; }
            else if(ref.type === 'peoples'){ cat = 'People'; badge = '👤'; short = 'people'; }
            const bits = [ref.type, ref.ref, ref.note, ref.summary, ref.peopleKey, book, ch].filter(Boolean).join(' ');
            idx.push({
              type: ref.type || 'companion',
              category: cat,
              catShort: short,
              catBadge: badge,
              title: (ref.ref || ref.peopleKey || 'Companion source') + ' — ' + book + ' ' + ch,
              searchText: bits.toLowerCase(),
              preview: (ref.note || ref.summary || '').slice(0,180),
              reference: book + ' ' + ch,
              priority: 60,
              action: { type:'verse', book, chapter:parseInt(ch), verse:1 }
            });
            log.companion++;
          }
        }
      }
    }

    // === 6. Strong's Hebrew (Hebrew/Greek root searches) ===
    if(window.STRONGS_HEB){
      for(const sid in window.STRONGS_HEB){
        const e = window.STRONGS_HEB[sid];
        const bits = [sid, e.lemma, e.xlit, e.pron, e.strongs_def, e.kjv_def, e.derivation].filter(Boolean).join(' ');
        idx.push({
          type:'strongs_heb',
          category:'Hebrew Words',
          catShort:'hebrew',
          catBadge:'📜',
          title: sid + (e.lemma?' — '+e.lemma:'') + (e.xlit?' ('+e.xlit+')':''),
          searchText: bits.toLowerCase(),
          preview: (e.strongs_def || e.kjv_def || '').slice(0,140),
          reference: 'Strong\'s '+sid,
          priority: 65,
          action: { type:'strongs', id:sid }
        });
        log.strongs_heb++;
      }
    }

    // === 6b. Places ===
    log.places = 0;
    if(window.PLACES){
      for(const key in window.PLACES){
        const p = window.PLACES[key];
        if(!p) continue;
        const bits = [key, p.biblical, p.region, p.notable, p.appearance,
                       (p.modern||''), (p.passages||[]).join(' ')].filter(Boolean).join(' ');
        idx.push({
          type:'place',
          category:'Places',
          catShort:'place',
          catBadge:'🗺️',
          title: key,
          searchText: bits.toLowerCase(),
          preview: (p.biblical || p.notable || p.region || '').slice(0,180),
          reference: p.region || (p.passages && p.passages[0]) || '',
          priority: 72,
          action: { type:'place', key }
        });
        log.places++;
      }
    }

    // === 6c. Themes ===
    log.themes = 0;
    if(window.THEMES){
      for(const key in window.THEMES){
        const t = window.THEMES[key];
        if(!t) continue;
        const bits = [key, t.label, t.description,
                       (t.key_passages||[]).join(' '),
                       (t.related_themes||[]).join(' ')].filter(Boolean).join(' ');
        idx.push({
          type:'theme',
          category:'Themes',
          catShort:'theme',
          catBadge:'🔗',
          title: t.label || key,
          searchText: bits.toLowerCase(),
          preview: (t.description || '').slice(0,200),
          reference: t.key_passages ? (t.key_passages[0]||'') : '',
          priority: 72,
          action: { type:'theme', key }
        });
        log.themes++;
      }
    }

    // === 6d. Parallel passages (Companion Sources) ===
    log.parallels = 0;
    if(window.PARALLEL_PASSAGES){
      for(const p of window.PARALLEL_PASSAGES){
        const bits = [p.title, p.note, (p.passages||[]).join(' ')].filter(Boolean).join(' ');
        idx.push({
          type:'parallel',
          category:'Companion Sources',
          catShort:'parallel',
          catBadge:'🔁',
          title: p.title,
          searchText: bits.toLowerCase(),
          preview: p.note || (p.passages||[]).join(', '),
          reference: (p.passages||[]).join(' / '),
          priority: 62,
          action: { type:'parallel', id:p.id }
        });
        log.parallels++;
      }
    }

    // === 6e. Prophecy/Fulfillment (Companion Sources) ===
    log.prophecies = 0;
    if(window.PROPHECY_FULFILLMENT){
      for(const p of window.PROPHECY_FULFILLMENT){
        const bits = [p.topic, p.note, p.prophecy, p.fulfillment, p.theme].filter(Boolean).join(' ');
        idx.push({
          type:'prophecy',
          category:'Companion Sources',
          catShort:'prophecy',
          catBadge:'✨',
          title: 'Prophecy: ' + (p.topic || p.id),
          searchText: bits.toLowerCase(),
          preview: (p.note || (p.prophecy + ' → ' + p.fulfillment)).slice(0,200),
          reference: p.prophecy + ' → ' + p.fulfillment,
          priority: 62,
          action: { type:'prophecy', id:p.id }
        });
        log.prophecies++;
      }
    }

    // === 6f. Translation-Loss Notes (from definitions with .warning) ===
    log.translation_loss = 0;
    if(window.DEFINITIONS){
      for(const key in window.DEFINITIONS){
        const d = window.DEFINITIONS[key];
        if(!d || typeof d !== 'object' || !d.warning) continue;
        idx.push({
          type:'translation_loss',
          category:'Translation Loss Notes',
          catShort:'translation',
          catBadge:'⚠️',
          title: 'Translation loss: ' + key,
          searchText: (key + ' ' + d.warning + ' ' + (d.def||'')).toLowerCase(),
          preview: d.warning.slice(0, 220),
          reference: d.hebrew || d.greek || d.strongs || '',
          priority: 72,
          action: { type:'definition', key }
        });
        log.translation_loss++;
      }
    }
    if(window.STRONGS_GRK){
      for(const num in window.STRONGS_GRK){
        const e = window.STRONGS_GRK[num];
        const sid = 'G'+num;
        const bits = [sid, e.grk, e.translit, e.def, e.kjv_def, e.derivation].filter(Boolean).join(' ');
        idx.push({
          type:'strongs_grk',
          category:'Greek Words',
          catShort:'greek',
          catBadge:'📜',
          title: sid + (e.grk?' — '+e.grk:''),
          searchText: bits.toLowerCase(),
          preview: (e.def || e.kjv_def || '').slice(0,140),
          reference: 'Strong\'s '+sid,
          priority: 65,
          action: { type:'strongs', id:sid }
        });
        log.strongs_grk++;
      }
    }

    // === 7. BDB Hebrew Lexicon (only top-level lemmas to avoid noise) ===
    if(window.BDB_HEBREW){
      for(const key in window.BDB_HEBREW){
        const e = window.BDB_HEBREW[key];
        if(!e || !e.lemma) continue;
        // Only first BDB entry per Strong's number is most relevant
        if(key.match(/\.\d+$/)) continue;
        const bits = [key, e.lemma, e.gloss, e.def, e.xlit, e.morph].filter(Boolean).join(' ');
        idx.push({
          type:'bdb',
          category:'Hebrew Words',
          catShort:'hebrew',
          catBadge:'📔',
          title: 'BDB ' + key + (e.lemma?' — '+e.lemma:''),
          searchText: bits.toLowerCase(),
          preview: (e.gloss || '').replace(/<[^>]*>/g,'').slice(0,140),
          reference: 'BDB ' + key,
          priority: 55,
          action: { type:'strongs', id:key }
        });
        log.bdb++;
      }
    }

    // === 8. Kingdom Lens + Cultural panels (chapter-level study notes) ===
    const indexChapterPanels = (book, ch, chData) => {
      const v1 = chData.verses && (chData.verses['1'] || chData.verses[1]);
      if(!v1) return;
      if(v1.kingdomLens){
        idx.push({
          type:'kingdom_lens',
          category:'Cultural Context',
          catShort:'lens',
          catBadge:'⚜️',
          title: chData.title || (book + ' ' + ch),
          searchText: ((chData.title||'') + ' ' + v1.kingdomLens).toLowerCase(),
          preview: v1.kingdomLens.slice(0,200),
          reference: book + ' ' + ch,
          priority: 68,
          action: { type:'verse', book, chapter:parseInt(ch), verse:1 }
        });
        log.kingdom_lens++;
      }
      if(v1.cultural && (v1.cultural.detail || v1.cultural.title)){
        const c = v1.cultural;
        idx.push({
          type:'cultural',
          category:'Cultural Context',
          catShort:'cultural',
          catBadge:'🌍',
          title: c.title || (chData.title || book+' '+ch),
          searchText: ((c.title||'') + ' ' + (c.detail||'')).toLowerCase(),
          preview: (c.detail||'').slice(0,200),
          reference: book + ' ' + ch,
          priority: 68,
          action: { type:'verse', book, chapter:parseInt(ch), verse:1 }
        });
        log.cultural++;
      }
    };
    if(window.GENESIS){
      for(const ch in window.GENESIS) indexChapterPanels('Genesis', ch, window.GENESIS[ch]);
    }
    if(window.BIBLE){
      for(const book in window.BIBLE){
        for(const ch in window.BIBLE[book]){
          indexChapterPanels(book, ch, window.BIBLE[book][ch]);
        }
      }
    }

    SEARCH_INDEX = idx;
    INDEX_BUILD_LOG = log;
    console.log('SWRV Search: index built — ' + idx.length + ' records', log);
    return idx;
  }

  // --------------------------- Search Runner ---------------------------
  function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function runSearchQuery(q){
    if(!q || !q.trim()) return null;
    const query = q.trim();
    const queryLower = query.toLowerCase();
    const isShort = queryLower.length < 2;

    // First: check if this is a verse reference
    const ref = parseReference(query);
    const results = [];

    // If it parses as a verse ref, that's the top result
    if(ref){
      results.push({
        type:'reference',
        category:'Scripture Passages',
        catShort:'scripture',
        catBadge:'📖',
        title: ref.book + ' ' + ref.chapter + (ref.verse?':'+ref.verse:''),
        preview: ref.verse ? 'Jump to verse ' + ref.book + ' ' + ref.chapter + ':' + ref.verse :
                 'Jump to chapter ' + ref.book + ' ' + ref.chapter,
        reference: ref.book + ' ' + ref.chapter + (ref.verse?':'+ref.verse:''),
        score: 10000,
        action: { type:'verse', book:ref.book, chapter:ref.chapter, verse:ref.verse }
      });
    }

    // If it's a Strong's number ("H7225" / "G26"), surface that
    const sMatch = query.match(/^([hg])\s*(\d+)([a-z]?)$/i);
    if(sMatch){
      const sid = sMatch[1].toUpperCase() + sMatch[2] + (sMatch[3]||'');
      results.push({
        type:'strongs',
        category: sid.startsWith('H')?'Hebrew Words':'Greek Words',
        catShort: sid.startsWith('H')?'hebrew':'greek',
        catBadge:'📜',
        title: "Strong's "+sid,
        preview: 'Open the lexicon entry for '+sid,
        reference: sid,
        score: 9000,
        action: { type:'strongs', id:sid }
      });
    }

    const index = buildIndex();
    if(isShort) return { query, results, total: results.length };

    // Score every index record
    const scored = [];
    const phrase = queryLower;
    const tokens = queryLower.split(/\s+/).filter(t=>t.length>=2);
    const phraseEscaped = escapeRegex(phrase);
    const phraseRe = new RegExp('\\b'+phraseEscaped+'\\b','i');

    // Current chapter for context boost (per spec: boost current-chapter results)
    const curBook = window.currentBook;
    const curChapter = window.currentChapter;

    for(const rec of index){
      let score = 0;
      let matchedIn = null;
      const txt = rec.searchText;
      // Exact phrase match — biggest boost
      if(txt.indexOf(phrase) !== -1){
        score += rec.priority * 10;
        matchedIn = 'phrase';
        // Boost if it's a word boundary match
        if(phraseRe.test(txt)) score += 200;
      }
      // Token matches
      let tokenHits = 0;
      for(const tok of tokens){
        if(txt.indexOf(tok) !== -1) tokenHits++;
      }
      if(tokenHits === tokens.length && tokens.length>0){
        score += rec.priority * 4;
        if(!matchedIn) matchedIn = 'all tokens';
      } else if(tokenHits > 0){
        score += rec.priority * tokenHits;
        if(!matchedIn) matchedIn = 'partial';
      }

      // Title hits — significant boost
      const titleLower = (rec.title||'').toLowerCase();
      if(titleLower === phrase){ score += rec.priority * 30; matchedIn = 'exact title'; }
      else if(titleLower.indexOf(phrase) !== -1){ score += rec.priority * 15; matchedIn = matchedIn || 'title'; }

      // Current-chapter boost — per spec, boost (don't filter) when user is inside a chapter
      if(curBook && curChapter && rec.action){
        if(rec.action.type === 'verse' && rec.action.book === curBook && rec.action.chapter === curChapter){
          score += 500;  // significant boost but doesn't override exact phrase matches
          matchedIn = (matchedIn||'context') + ' • this chapter';
        }
      }

      if(score > 0) scored.push({rec, score, matchedIn});
    }

    scored.sort((a,b) => b.score - a.score);
    // Cap at 80 results total
    for(const s of scored.slice(0, 80)){
      const r = s.rec;
      results.push({
        type: r.type,
        category: r.category,
        catShort: r.catShort,
        catBadge: r.catBadge,
        title: r.title,
        preview: r.preview,
        reference: r.reference,
        matchedIn: s.matchedIn,
        score: s.score,
        action: r.action
      });
    }

    return { query, results, total: results.length };
  }

  // --------------------------- Recent Searches ---------------------------
  const RECENT_KEY = 'swrv-search-recent';
  function getRecent(){
    try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); }
    catch(e){ return []; }
  }
  function addRecent(q){
    if(!q || q.length < 2) return;
    let recent = getRecent().filter(x => x.toLowerCase() !== q.toLowerCase());
    recent.unshift(q);
    recent = recent.slice(0,8);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(recent)); } catch(e){}
  }

  // --------------------------- UI Open/Close + Render ---------------------------
  function highlight(text, query){
    if(!text) return '';
    if(!query) return _esc(text);
    const re = new RegExp('('+escapeRegex(query)+')', 'gi');
    return _esc(text).replace(re, '<mark>$1</mark>');
  }
  function _esc(s){
    return (s||'').toString()
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  // Currently active category filter (null = all)
  let activeCategoryFilter = null;
  // Last search outcome — kept so filter clicks can re-render without re-searching
  let lastSearchOutcome = null;

  function renderResults(searchOutcome){
    const out = document.getElementById('searchResults');
    const help = document.getElementById('searchHelp');
    lastSearchOutcome = searchOutcome;
    if(!searchOutcome){
      out.innerHTML = '';
      out.style.display = 'none';
      help.style.display = '';
      activeCategoryFilter = null;
      return;
    }
    help.style.display = 'none';
    out.style.display = '';

    const { query, results, total } = searchOutcome;
    if(total === 0){
      out.innerHTML = '<div class="search-no-results">No results for <b>'+_esc(query)+'</b>.<br><br>'+
        'Try: a Bible reference (<span class="search-no-results-suggestion" onclick="setSearchAndRun(\'Genesis 3\')">Genesis 3</span>), '+
        'a person (<span class="search-no-results-suggestion" onclick="setSearchAndRun(\'Moses\')">Moses</span>), '+
        'a theme (<span class="search-no-results-suggestion" onclick="setSearchAndRun(\'covenant\')">covenant</span>), '+
        'or a Strong\'s number (<span class="search-no-results-suggestion" onclick="setSearchAndRun(\'H7225\')">H7225</span>).</div>';
      return;
    }

    // Group by category — preserve insertion order
    const groups = new Map();
    for(const r of results){
      const cat = r.category || 'Other';
      if(!groups.has(cat)) groups.set(cat, []);
      groups.get(cat).push(r);
    }

    // Category display order
    const orderHint = ['Scripture Passages','Hebrew Words','Greek Words','Dictionary / Glossary',
                       'Translation Loss Notes','People','Places','Themes',
                       'Chronological Events','Cultural Context','Companion Sources','Enoch','Josephus'];
    const ordered = [];
    for(const c of orderHint){ if(groups.has(c)) ordered.push(c); }
    for(const c of groups.keys()){ if(!ordered.includes(c)) ordered.push(c); }

    const html = [];

    // === Category filter chips (per spec) — only show if 2+ categories ===
    if(ordered.length >= 2){
      html.push('<div class="search-filter-bar">');
      html.push('<button class="search-filter-chip'+(!activeCategoryFilter?' active':'')+'" onclick="searchFilterCategory(null)">All <span class="search-filter-count">'+total+'</span></button>');
      for(const cat of ordered){
        const isActive = activeCategoryFilter === cat;
        const badge = groups.get(cat)[0].catBadge || '';
        html.push('<button class="search-filter-chip'+(isActive?' active':'')+'" onclick="searchFilterCategory('+JSON.stringify(cat).replace(/"/g,'&quot;')+')">'+badge+' '+_esc(cat)+' <span class="search-filter-count">'+groups.get(cat).length+'</span></button>');
      }
      html.push('</div>');
    }

    // === Result groups ===
    for(const cat of ordered){
      if(activeCategoryFilter && cat !== activeCategoryFilter) continue;
      const list = groups.get(cat);
      if(!list || list.length === 0) continue;
      // Show up to 12 per category when not filtered, 80 when filtered
      const showCount = activeCategoryFilter ? 80 : 12;
      const items = list.slice(0, showCount);
      html.push('<div class="search-cat-header">'+items[0].catBadge+' '+_esc(cat)+
                ' <span class="search-cat-count">'+list.length+'</span></div>');
      for(const r of items){
        html.push('<button class="search-result" onclick="searchOpen('+JSON.stringify(r.action).replace(/"/g,'&quot;')+')">');
        html.push('<div class="search-result-top">');
        html.push('<div class="search-result-title">'+highlight(r.title, query)+'</div>');
        const matchLabel = r.matchedIn ? ' • '+r.matchedIn : '';
        html.push('<div class="search-result-cat-badge">'+_esc(r.catShort||cat.slice(0,8))+matchLabel+'</div>');
        html.push('</div>');
        if(r.preview) html.push('<div class="search-result-preview">'+highlight(r.preview, query)+'</div>');
        if(r.reference && r.reference !== r.title) html.push('<div class="search-result-meta">'+_esc(r.reference)+'</div>');
        html.push('</button>');
      }
      // "Show all N in this category" link if truncated
      if(!activeCategoryFilter && list.length > showCount){
        html.push('<button class="search-show-more" onclick="searchFilterCategory('+JSON.stringify(cat).replace(/"/g,'&quot;')+')">Show all '+list.length+' results in '+_esc(cat)+' →</button>');
      }
    }
    out.innerHTML = html.join('');
  }

  function filterCategoryInner(cat){
    activeCategoryFilter = cat;
    if(lastSearchOutcome) renderResults(lastSearchOutcome);
  }

  function renderRecentSearches(){
    const recent = getRecent();
    const wrap = document.getElementById('searchRecent');
    if(!wrap) return;
    if(recent.length === 0){ wrap.innerHTML = ''; return; }
    const html = ['<div class="search-recent-title">Recent</div><div class="search-recent-items">'];
    for(const q of recent){
      html.push('<button class="search-recent-item" onclick="setSearchAndRun('+JSON.stringify(q).replace(/"/g,'&quot;')+')">'+_esc(q)+'</button>');
    }
    html.push('</div>');
    wrap.innerHTML = html.join('');
  }

  // --------------------------- Result navigation ---------------------------
  function openResult(action){
    if(!action || !action.type) return;
    closeSearchInner();
    if(action.type === 'verse'){
      // Navigate using existing app functions
      try {
        if(typeof loadBook === 'function' && action.book){
          loadBook(action.book);
        }
        setTimeout(() => {
          if(action.chapter && typeof goToChapter === 'function'){
            goToChapter(action.chapter);
          } else if(action.chapter && window.currentChapter !== undefined){
            window.currentChapter = action.chapter;
            if(typeof renderChapter === 'function') renderChapter();
          }
          if(action.verse){
            setTimeout(() => {
              // Scroll to verse
              const refId = (action.book+'_'+action.chapter+'_'+action.verse).replace(/[^a-z0-9]/gi,'_');
              const el = document.getElementById(refId);
              if(el) el.scrollIntoView({behavior:'smooth', block:'center'});
              // Try alternate ID format used in existing renderVerse
              const ref2 = (action.book+' '+action.chapter+':'+action.verse).replace(/[^a-z0-9]/gi,'_');
              const el2 = document.getElementById(ref2);
              if(el2) el2.scrollIntoView({behavior:'smooth', block:'center'});
            }, 250);
          }
        }, 100);
      } catch(e){ console.error('search nav fail', e); }
    } else if(action.type === 'definition'){
      if(typeof showDef === 'function') showDef(action.key);
    } else if(action.type === 'person'){
      if(typeof showPerson === 'function') showPerson(action.key);
    } else if(action.type === 'strongs'){
      if(typeof showStrongs === 'function') showStrongs(action.id);
    } else if(action.type === 'place'){
      // Use showPlace if defined, else best-effort modal
      if(typeof showPlace === 'function'){ showPlace(action.key); }
      else {
        const p = (window.PLACES||{})[action.key];
        if(p) alert(action.key + '\n\n' + (p.biblical||p.region||''));
      }
    } else if(action.type === 'theme'){
      if(typeof showTheme === 'function'){ showTheme(action.key); }
      else {
        const t = (window.THEMES||{})[action.key];
        if(t) alert((t.label||action.key) + '\n\n' + (t.description||''));
      }
    } else if(action.type === 'parallel'){
      // Open the first passage of the parallel group
      const p = (window.PARALLEL_PASSAGES||[]).find(x => x.id === action.id);
      if(p && p.passages && p.passages.length){
        const ref = parseReference(p.passages[0]);
        if(ref) openResult({type:'verse', book:ref.book, chapter:ref.chapter, verse:ref.verse});
      }
    } else if(action.type === 'prophecy'){
      // Open the prophecy passage
      const p = (window.PROPHECY_FULFILLMENT||[]).find(x => x.id === action.id);
      if(p && p.prophecy){
        const ref = parseReference(p.prophecy);
        if(ref) openResult({type:'verse', book:ref.book, chapter:ref.chapter, verse:ref.verse});
      }
    } else if(action.type === 'event'){
      // No dedicated event modal — find a passage to jump to
      const ev = (window.CHRONOLOGICAL_EVENTS||[]).find(e=>e.id===action.id);
      if(ev && ev.passages && ev.passages.length){
        const firstRef = ev.passages[0];
        const parsed = parseReference(firstRef);
        if(parsed) openResult({type:'verse', book:parsed.book, chapter:parsed.chapter, verse:parsed.verse});
      }
    }
  }

  function openSearchInner(){
    const drawer = document.getElementById('searchDrawer');
    drawer.classList.add('show');
    document.body.style.overflow = 'hidden';
    renderRecentSearches();
    setTimeout(() => {
      const input = document.getElementById('searchInput');
      if(input){ input.focus(); }
    }, 50);
  }
  function closeSearchInner(){
    const drawer = document.getElementById('searchDrawer');
    drawer.classList.remove('show');
    document.body.style.overflow = '';
  }

  let searchDebounce = null;
  function runSearchInner(){
    const input = document.getElementById('searchInput');
    const q = input.value;
    clearTimeout(searchDebounce);
    if(!q || !q.trim()){
      renderResults(null);
      return;
    }
    searchDebounce = setTimeout(() => {
      const outcome = runSearchQuery(q);
      renderResults(outcome);
    }, 90);
  }

  function handleSearchKeydownInner(ev){
    if(ev.key === 'Escape'){ closeSearchInner(); return; }
    if(ev.key === 'Enter'){
      const q = document.getElementById('searchInput').value.trim();
      if(!q) return;
      // If it parses as a verse reference, jump immediately
      const ref = parseReference(q);
      if(ref){
        addRecent(q);
        openResult({type:'verse', book:ref.book, chapter:ref.chapter, verse:ref.verse});
        return;
      }
      // Otherwise run search; if exactly one result, open it
      const out = runSearchQuery(q);
      if(out && out.results.length === 1){
        addRecent(q);
        openResult(out.results[0].action);
      } else {
        addRecent(q);
        renderResults(out);
      }
    }
  }

  function setSearchAndRunInner(q){
    addRecent(q);
    const input = document.getElementById('searchInput');
    if(input){
      input.value = q;
      runSearchInner();
    }
  }

  // --------------------------- Public API ---------------------------
  window.openSearch = openSearchInner;
  window.closeSearch = closeSearchInner;
  window.runSearch = runSearchInner;
  window.handleSearchKeydown = handleSearchKeydownInner;
  window.setSearchAndRun = setSearchAndRunInner;
  window.searchOpen = openResult;
  window.searchFilterCategory = filterCategoryInner;
  window.parseSearchReference = parseReference;
  window.buildSearchIndex = buildIndex;
  window.runSearchQuery = runSearchQuery;

  // Keyboard shortcut — Cmd/Ctrl+K opens search
  document.addEventListener('keydown', (e) => {
    if((e.metaKey || e.ctrlKey) && e.key === 'k'){
      e.preventDefault();
      openSearchInner();
    }
    // / when not in an input opens search
    if(e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA'){
      const drawer = document.getElementById('searchDrawer');
      if(!drawer.classList.contains('show')){
        e.preventDefault();
        openSearchInner();
      }
    }
  });

})();
