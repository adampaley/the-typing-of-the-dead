const level1Words = ["achieve", "acquire", "administrate", "affect", "analyze", "approach", "appropriate", "area", "aspect", "assess", "assist", "assume", "authority", "available", "benefit", "category", "chapter", "commission", "community", "complex", "compute", "concept", "conclude", "conduct", "consequent", "consist", "constitute", "construct", "context", "contract", "create", "data", "define", "derive", "distribute", "economy", "environment", "establish", "estimate", "evident", "export", "factor", "finance", "formula", "function", "identify", "income", "indicate", "individual", "interpret", "involve", "issue", "labor", "legal", "legislate", "major", "method", "occur", "percent", "period", "policy", "principle", "proceed", "process", "require", "research", "respond", "role", "section", "sector", "significant", "similar", "source", "specific", "structure", "theory", "vary", "consume", "credit", "culture", "design", "distinct", "element", "equate", "evaluate", "feature", "final", "focus", "impact", "injure", "institute", "invest", "item", "journal", "maintain", "normal", "obtain", "participate", "perceive", "positive", "potential", "previous", "primary", "purchase", "range", "region", "regulate", "relevant", "reside", "resource", "restrict", "secure", "seek", "select", "site", "strategy", "survey", "text", "tradition", "transfer", "alternative", "circumstance", "comment", "compensate", "component", "consent", "considerable", "constant", "constrain", "contribute", "convene", "coordinate", "core", "corporate", "correspond", "criteria", "deduce", "demonstrate", "document", "dominate", "emphasis", "ensure", "exclude", "framework", "fund", "illustrate", "immigrate", "imply", "initial", "instance", "interact", "justify", "layer", "link", "locate", "maximize", "minor", "negate", "outcome", "partner", "philosophy", "physical", "proportion", "publish", "react", "register", "rely", "remove", "scheme", "sequence", "sex", "shift", "specify", "task", "technical", "technique", "technology", "valid", "volume", "access", "adequate", "annual", "apparent", "approximate", "attitude", "attribute", "civil", "code", "commit", "communicate", "concentrate", "confer", "contrast", "cycle", "debate", "despite", "dimension", "domestic", "emerge", "error", "ethnic", "goal", "grant", "hence", "hypothesis", "implement", "implicate", "impose", "integrate", "internal", "investigate", "job", "label", "mechanism", "obvious", "occupy", "option", "output", "overall", "parallel", "parameter", "phase", "predict", "principal", "prior", "professional", "project", "promote", "regime", "resolve", "retain", "series", "statistic", "status", "stress", "subsequent", "sum", "summary", "undertake", "academy", "adjust", "alter", "amend", "aware", "capacity", "challenge", "clause", "compound", "conflict", "consult", "contact", "decline", "discrete", "draft", "enable", "energy", "enforce", "entity", "equivalent", "evolve", "expand", "expose", "external", "facilitate", "fundamental", "generate", "generation", "image", "liberal", "license", "logic", "margin", "medical", "mental", "modify", "monitor", "network", "notion", "objective", "orient", "perspective", "precise", "prime", "psychology", "pursue", "ratio", "reject", "revenue", "stable", "style", "substitute", "sustain", "symbol", "target", "transit", "trend", "version", "welfare", "whereas", "abstract", "accurate", "acknowledge", "aggregate", "allocate", "assign", "attach", "author", "bond", "brief", "capable", "cite", "cooperate", "discriminate", "display", "diverse", "domain", "edit", "enhance", "estate", "exceed", "expert", "explicit", "federal", "fee", "flexible", "furthermore", "gender", "ignorant", "incentive", "incidence", "incorporate", "index", "inhibit", "initiate", "input", "instruct", "intelligent", "interval", "lecture", "migrate", "minimum", "ministry", "motive", "neutral", "nevertheless", "overseas", "precede", "presume", "rational", "recover", "reveal", "scope", "subsidy", "tape", "trace", "transform", "transport", "underlie", "utilise", "adapt", "adult", "advocate", "aid", "channel", "chemical", "chemical", "classic", "comprehensive", "comprise", "contrary", "convert", "couple", "decade", "definite", "deny", "differentiate", "dispose", "dynamic", "eliminate", "empirical", "equip", "extract", "file", "finite", "foundation", "globe", "grade", "guarantee", "hierarchy", "identical", "ideology", "infer", "innovate", "insert", "intervene", "isolate", "media", "mode", "paradigm", "phenomenom", "priority", "prohibit", "publication", "quote", "release", "reverse", "simulate", "sole", "somewhate", "submit", "successor", "survive", "thesis", "topic", "transmit", "ultimate", "unique", "visible", "voluntary", "abandon", "accompany", "accumulate", "ambiguous", "append", "appreciate", "arbitrary", "automate", "bias", "chart", "clarify", "commodify", "complement", "conform", "contemporary", "contradict", "crucial", "crucial", "denote", "detect", "deviate", "displace", "drama", "eventual", "exhibit", "exploit", "guidelines", "highlight", "implicit", "induce", "inevitable", "infrastructure", "inspect", "intense", "minimize", "nuclear", "offset", "paragraph", "plus", "practitioner", "predominant", "prospect", "radical", "random", "reinforce", "restore", "revise", "schedule", "tense", "terminate", "theme", "uniform", "vehicle", "via", "virtual", "visual", "widespreaad", "accomodate", "analogy", "anticipate", "assure", "attain", "behalf", "bulk", "cease", "coherent", "coincide", "commence", "compatible", "concurrent", "confine", "controversy", "converse", "device", "devote", "diminish", "distort", "duration", "erode", "ethic", "format", "found", "inherent", "insight", "integral", "intermediate", "manual", "mature", "mediate", "medium", "military", "minimal", "mutual", "norm", "overlap", "passive", "portion", "preliminary", "protocol", "qualitative", "refine", "relax", "restrain", "revolution", "rigid", "route", "scenario", "sphere", "subordinate", "supplement", "supplement", "suspend", "team", "temporary", "trigger", "unify", "violate", "vision", "adjacent", "albeit", "assemble", "collapse", "colleague", "compile", "conceive", "convince", "depress", "encounter", "enormous", "forthcoming", "incline", "integrity", "intrinsic", "invoke", "levy", "likewise", "nonetheless", "notwithstading", "odd", "ongoing", "panel", "persist", "pose", "reluctance", "straightforward", "undergo", "whereby"] // GED words
const level2Words = ["abandon", "abate", "abject", "aberration", "abjure", "abnegation", "abrogate", "abscond", "abstruse", "abysmal", "accede", "acumen", "adamant", "adapt", "admonish", "advantageous", "affluent", "alacrity", "ambivalence", "anomaly", "antipathy", "antiseptic", "apt", "assertion", "assiduous", "bane", "beguile", "beneficial", "berate", "bereft", "blandishment", "bias", "bolster", "bombastic", "bovine", "braggart", "brevity", "cacophony", "cajole", "callous", "calumny", "camaraderie", "candid", "candor", "carouse", "carp", "catastrophic", "cavort", "censorious", "circumlocution", "circumscribe", "clamor", "clout", "cognizant", "commensurate", "comparable", "complement", "compunction", "concomitant", "conducive", "conduit", "conflagration", "connive", "consign", "constituent", "constructive", "construe", "contend", "contusion", "contrite", "contentious", "contravene", "convivial", "corpulence", "covet", "cupidity", "dearth", "debacle", "debauch", "defunct", "demagogue", "demur", "denigrate", "despot", "diaphanous", "dirge", "discomfit", "disparate", "disrepute", "duplicity", "duress", "eclectic", "edict", "ebullient", "efficacious", "effluvia", "egregious", "elegy", "elicit", "eloquent", "elude", "emollient", "empirical", "emulate", "enervate", "engender", "ephemeral", "equanimity", "equivocal", "evanescent", "evince", "exacerbate", "exhort", "execrable", "exigent", "expedient", "expiate", "expunge", "extraneous", "extol", "facilitate", "fallacious", "fatuous", "flagrant", "forbearance", "fortuitous", "fractious", "garrulous", "grandiloquent", "grapple", "gratuitous", "hapless", "hegemony", "heterogenous", "iconoclast", "impecunious", "impede", "impetuous", "impinge", "impute", "inane", "inchoate", "incontrovertible", "inexorable", "inimical", "injunction", "innocuous", "inoculate", "insidious", "instigate", "insurgent", "interlocutor", "inure", "intransigent", "inveterate", "irreverence", "largesse", "licentious", "litigant", "maelstrom", "maudlin", "maverick", "mawkish", "maxim", "mendacious", "meretricious", "modicum", "momentous", "morass", "munificent", "nadir", "negligent", "neophyte", "noisome", "noxious", "obdurate", "obfuscate", "obstreperous", "officious", "onerous", "ostensible", "ostracism", "palliate", "panacea", "paradigm", "pariah", "paucity", "pejorative", "penchant", "penurious", "pert", "pernicious", "pertinacious", "phlegmatic", "philanthropic", "pithy", "plaudit", "plenitude", "plethora", "polar", "postulate", "potentate", "pragmatic", "preclude", "predilection", "probity", "proclivity", "profligate", "profound", "promulgate", "proscribe", "protean", "prurient", "puerile", "pugnacious", "punctilious", "quaint", "quixotic", "quandary", "recalcitrant", "relegate", "remiss", "reprieve", "reprobate", "rescind", "ribald", "rife", "sanctimonious", "sanguine", "scurrilous", "serendipity", "solicitous", "spurious", "staid", "stolid", "substantial", "supercilious", "supposition", "surfeit", "surmise", "surreptitious", "tangential", "tenable", "terse", "torpid", "travesty", "trenchant", "trounce", "truculent", "turpitude", "ubiquitous", "umbrage", "unconventional", "undulate", "unmitigated", "unveil", "upbraid", "upshot", "usury", "validate", "veracity", "vestige", "viability", "vicissitude", "vilify", "virtuoso", "vital", "vitriolic", "vituperate", "vociferous", "wanton", "winsome", "yield", "yoke", "zenith"] // SAT words
const level3Words = ["anomaly", "equivocal", "lucid", "precipitate", "assuage", "erudite", "opaque", "prodigal", "enigma", "fervid", "placate", "zeal", "abstain", "audacious", "desiccate", "gullible", "laudable", "pedant", "vacillate", "adulterate", "capricious", "engender", "homogenous", "loquacious", "pragmatic", "volatile", "apathy", "corroborate", "ephemeral", "laconic", "mitigate", "propriety", "advocate", "cacophony", "enervate", "ingenuous", "misanthrope", "paradox", "venerate", "antipathy", "deride", "eulogy", "lethargic", "obdurate", "philanthropic", "waver", "bolster", "dissonance", "garrulous", "malleable", "ostentation", "prevaricate"] // GRE words
const level4Words = ["gladiolus", "abrogate", "luxuriance", "albumen", "asceticism", "fracas", "foulard", "knack", "torsion", "deteriorating", "intelligible", "interning", "promiscuous", "sanitarium", "canonical", "therapy", "initials", "sacrilegious", "semaphore", "chlorophyll", "psychiatry", "dulcimer", "meerschaum", "meticulosity", "insouciant", "vignette", "soubrette", "transept", "crustaceology", "condominium", "schappe", "syllepsis", "catamaran", "eudaemonic", "smaragdine", "esquamulose", "equipage", "sycophant", "eczema", "ratoon", "chihuahua", "abalone", "interlocutory", "croissant", "shalloon", "macerate", "vouchsafe", "hydrophyte", "incisor", "narcolepsy", "cambist", "deification", "maculature", "elucubrate", "sarcophagus", "psoriasis", "Purim", "luge", "milieu", "odontalgia", "staphylococci", "elegiacal", "spoliator", "fibranne", "antipyretic", "lyceum", "kamikaze", "antediluvian", "xanthosis", "vivisepulture", "euonym", "chiaroscurist", "logorrhea", "demarche", "succedaneum", "prospicience", "pococurante", "autochthonous", "appoggiatura", "Ursprache", "serrefine", "guerdon", "Laodicean", "stromuhr", "cymotrichous", "guetapens", "knaidel", "stichomythia", "feuilleton", "scherenschnitte", "nunatek", "Feldenkrais", "gesellschaft", "marocain", "koinonia", "auslaut", "erysipelas", "bougainvillea", "aiguillete", "pendeloque", "palama", "cernuous", "odylic", "Murraya", "moorhen", "psammophile"] // Scripps winning words

const wordBank = [
    { level: 1, vocab: level1Words},
    { level: 2, vocab: level2Words},
    { level: 3, vocab: level3Words},
    { level: 4, vocab: level4Words},
]