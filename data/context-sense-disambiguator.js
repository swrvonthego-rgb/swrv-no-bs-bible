// SWRV Kingdom Bible — Context-Sense Disambiguator
// For ambiguous English words whose actual meaning depends on the underlying
// Hebrew/Greek source word in this specific verse, this layer routes to the
// right card. Consumed by showDef(word, {strongsTags, ref}) in app.js.
// When a verse's strongsTags include any of the IDs below, the chip-and-card
// renders the disambiguated entry instead of a single flattened definition.

window.CONTEXT_SENSE = {
  "love":{
    defaultStrongs:"G26",
    byStrongs:{
      "G26":{lang:"Greek",word:"ἀγάπη",translit:"agape",gloss:"Self-giving covenant love. The love God IS (1 John 4:8). Volitional and active."},
      "G25":{lang:"Greek",word:"ἀγαπάω",translit:"agapao",gloss:"Verb form of agape — to love sacrificially. Watch John 21:15-17 where Jesus uses agapao, Peter answers phileo."},
      "G5368":{lang:"Greek",word:"φιλέω",translit:"phileo",gloss:"To love with warm friendship affection. Real love, distinct from agape."},
      "G5384":{lang:"Greek",word:"φίλος",translit:"philos",gloss:"Friend, dear one. 'No greater agape than to lay down one's life for one's philos' (John 15:13)."},
      "H157":{lang:"Hebrew",word:"אָהַב",translit:"ahab",gloss:"To love / choose / cleave to. The Shema's verb (Deut 6:5)."},
      "H2617":{lang:"Hebrew",word:"חֶסֶד",translit:"hesed",gloss:"Covenant lovingkindness. Loyal love within covenant (the OT dominant love-word — 248x)."}
    }
  },
  "kingdom":{
    defaultStrongs:"G932",
    byStrongs:{
      "G932":{lang:"Greek",word:"βασιλεία",translit:"basileia",gloss:"Reign, royal rule, kingdom-realm. In Gal 5:21 it is THE kingdom of God that the persistently-fleshly will not inherit."},
      "G935":{lang:"Greek",word:"βασιλεύς",translit:"basileus",gloss:"King."},
      "H4438":{lang:"Hebrew",word:"מַלְכוּת",translit:"malkut",gloss:"Royal rule / dominion."},
      "H4467":{lang:"Hebrew",word:"מַמְלָכָה",translit:"mamlakah",gloss:"Kingdom / dominion (Ex 19:6: Israel a kingdom of priests)."},
      "H4428":{lang:"Hebrew",word:"מֶלֶךְ",translit:"melek",gloss:"King."}
    }
  },
  "flesh":{
    defaultStrongs:"G4561",
    byStrongs:{
      "G4561":{lang:"Greek",word:"σάρξ",translit:"sarx",gloss:"Five distinct senses: body, kinship, mortality, fallen nature opposed to the Spirit, or sphere of human boasting. Check the qualifier in context."},
      "G4559":{lang:"Greek",word:"σαρκικός",translit:"sarkikos",gloss:"Fleshly / carnal."},
      "H1320":{lang:"Hebrew",word:"בָּשָׂר",translit:"basar",gloss:"Flesh / body / kindred."}
    }
  },
  "soul":{
    defaultStrongs:"H5315",
    byStrongs:{
      "H5315":{lang:"Hebrew",word:"נֶפֶשׁ",translit:"nephesh",gloss:"Living self — breath-life, person, appetite. Used of animals and humans alike."},
      "G5590":{lang:"Greek",word:"ψυχή",translit:"psyche",gloss:"Soul / life — translates nephesh in LXX. Source of 'psychology.'"},
      "H5397":{lang:"Hebrew",word:"נְשָׁמָה",translit:"neshamah",gloss:"Breath (the divine in-breathing of Gen 2:7)."}
    }
  },
  "spirit":{
    defaultStrongs:"G4151",
    byStrongs:{
      "H7307":{lang:"Hebrew",word:"רוּחַ",translit:"ruach",gloss:"Wind / breath / spirit / Spirit. Context decides."},
      "G4151":{lang:"Greek",word:"πνεῦμα",translit:"pneuma",gloss:"Wind / breath / spirit / Spirit."},
      "H5397":{lang:"Hebrew",word:"נְשָׁמָה",translit:"neshamah",gloss:"Breath of life."}
    }
  },
  "grace":{
    defaultStrongs:"G5485",
    byStrongs:{
      "G5485":{lang:"Greek",word:"χάρις",translit:"charis",gloss:"Favor, gift, divine empowerment, gratitude."},
      "H2580":{lang:"Hebrew",word:"חֵן",translit:"chen",gloss:"Favor — especially 'in the eyes of' someone (Gen 6:8)."},
      "H2617":{lang:"Hebrew",word:"חֶסֶד",translit:"hesed",gloss:"Covenant lovingkindness — often rendered 'mercy' or shades of 'grace.'"}
    }
  },
  "faith":{
    defaultStrongs:"G4102",
    byStrongs:{
      "G4102":{lang:"Greek",word:"πίστις",translit:"pistis",gloss:"Trust / faithfulness / body of belief / assurance."},
      "G4100":{lang:"Greek",word:"πιστεύω",translit:"pisteuo",gloss:"To trust / entrust."},
      "G4103":{lang:"Greek",word:"πιστός",translit:"pistos",gloss:"Faithful, trustworthy."},
      "H530":{lang:"Hebrew",word:"אֱמוּנָה",translit:"emunah",gloss:"Firmness / faithfulness."},
      "H539":{lang:"Hebrew",word:"אָמַן",translit:"aman",gloss:"To confirm / believe / be faithful (root of 'amen')."}
    }
  },
  "works":{
    defaultStrongs:"G2041",
    byStrongs:{
      "G2041":{lang:"Greek",word:"ἔργον",translit:"ergon",gloss:"Deed/work. Watch the qualifier: 'of the law,' 'good,' 'dead,' 'of the flesh.'"},
      "G2038":{lang:"Greek",word:"ἐργάζομαι",translit:"ergazomai",gloss:"To work / labor."},
      "H4639":{lang:"Hebrew",word:"מַעֲשֶׂה",translit:"ma'aseh",gloss:"Deed / work."}
    }
  },
  "law":{
    defaultStrongs:"G3551",
    byStrongs:{
      "G3551":{lang:"Greek",word:"νόμος",translit:"nomos",gloss:"Law — can mean Torah (the five books), Mosaic law, principle, Roman law, or legalism. Context decides."},
      "H8451":{lang:"Hebrew",word:"תּוֹרָה",translit:"torah",gloss:"Instruction / teaching / law — broader than 'rules.'"}
    }
  },
  "righteousness":{
    defaultStrongs:"G1343",
    byStrongs:{
      "G1343":{lang:"Greek",word:"δικαιοσύνη",translit:"dikaiosyne",gloss:"Righteousness — moral, judicial, covenant-faithful."},
      "G1342":{lang:"Greek",word:"δίκαιος",translit:"dikaios",gloss:"Righteous, just."},
      "G1344":{lang:"Greek",word:"δικαιόω",translit:"dikaioo",gloss:"To justify."},
      "H6664":{lang:"Hebrew",word:"צֶדֶק",translit:"tsedeq",gloss:"Rightness / justice / norm-conformity."},
      "H6666":{lang:"Hebrew",word:"צְדָקָה",translit:"tsedaqah",gloss:"Righteousness / righteous act / vindication."}
    }
  },
  "peace":{
    defaultStrongs:"H7965",
    byStrongs:{
      "H7965":{lang:"Hebrew",word:"שָׁלוֹם",translit:"shalom",gloss:"Wholeness / completeness / peace / prosperity."},
      "G1515":{lang:"Greek",word:"εἰρήνη",translit:"eirene",gloss:"Peace / harmony."}
    }
  },
  "holy":{
    defaultStrongs:"H6918",
    byStrongs:{
      "H6918":{lang:"Hebrew",word:"קָדוֹשׁ",translit:"qadosh",gloss:"Holy / set apart."},
      "G40":{lang:"Greek",word:"ἅγιος",translit:"hagios",gloss:"Holy / set apart / saint."}
    }
  },
  "heart":{
    defaultStrongs:"H3820",
    byStrongs:{
      "H3820":{lang:"Hebrew",word:"לֵב",translit:"lev",gloss:"Heart — the whole inner self: thinking, willing, desiring."},
      "H3824":{lang:"Hebrew",word:"לֵבָב",translit:"levav",gloss:"Heart, inner self."},
      "G2588":{lang:"Greek",word:"καρδία",translit:"kardia",gloss:"Heart — the whole inner self."}
    }
  },
  "world":{
    defaultStrongs:"G2889",
    byStrongs:{
      "G2889":{lang:"Greek",word:"κόσμος",translit:"kosmos",gloss:"World — can mean the created order (John 3:16), humanity (John 1:10), or the fallen world-system opposed to God (1 John 2:15-17). Watch context."},
      "G165":{lang:"Greek",word:"αἰών",translit:"aion",gloss:"Age / world (temporal sense: 'this age' vs 'the age to come')."},
      "G3625":{lang:"Greek",word:"οἰκουμένη",translit:"oikoumene",gloss:"Inhabited world / empire."}
    }
  },
  "knowledge":{
    defaultStrongs:"G1108",
    byStrongs:{
      "G1108":{lang:"Greek",word:"γνῶσις",translit:"gnosis",gloss:"Knowledge — propositional or experiential."},
      "G1922":{lang:"Greek",word:"ἐπίγνωσις",translit:"epignosis",gloss:"Full / experiential knowledge."},
      "H1847":{lang:"Hebrew",word:"דַּעַת",translit:"da'at",gloss:"Knowledge — intimate, experiential."}
    }
  }
};
