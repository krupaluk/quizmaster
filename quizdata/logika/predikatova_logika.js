window.data_predikatova_logika = {
    "questions": [
  {
    q: "Co v logice vyjadřuje symbol '∀' (obrácené A)?",
    a: "Existenční kvantifikátor (existuje alespoň jedno)",
    b: "Všeobecný kvantifikátor (pro všechna, každý)",
    c: "Logickou spojku 'a zároveň'",
    ans: "b",
    expl: {
      a: "Existenční kvantifikátor se značí symbolem ∃.",
      b: "Symbol ∀ pochází z anglického 'All'. Používá se, když chceme vyjádřit, že určitá vlastnost platí pro úplně každý prvek z dané množiny (např. 'všichni lidé jsou smrtelní').",
      c: "Konjunkce se značí symbolem ∧."
    }
  },
  {
    q: "Co vyjadřuje symbol '∃' (obrácené E)?",
    a: "Všeobecný kvantifikátor",
    b: "Existenční kvantifikátor (existuje alespoň jeden)",
    c: "Symbol pro prázdnou množinu",
    ans: "b",
    expl: {
      a: "Všeobecný kvantifikátor je ∀.",
      b: "Symbol ∃ pochází z anglického 'Exists'. Tvrdíme jím, že v daném vesmíru existuje minimálně jeden objekt, který splňuje danou podmínku. Nemusí to být jen jeden, ale aspoň jeden ano.",
      c: "Prázdná množina se značí symbolem ∅."
    }
  },
  {
    q: "Jak zapíšeme predikát 'x je člověk'?",
    a: "x(C)",
    b: "C(x)",
    c: "C = x",
    ans: "b",
    expl: {
      a: "Tento zápis není v predikátové logice standardní.",
      b: "V predikátové logice píšeme velké písmeno pro vlastnost (predikát) a do závorky malým písmenem objekt (proměnnou), o kterém mluvíme. C(x) čteme 'x má vlastnost C'.",
      c: "Toto je zápis rovnosti, nikoliv vlastnosti."
    }
  },
  {
    q: "Jak zapíšeme větu: 'Všechno je dobré' (pokud D znamená 'být dobrý')?",
    a: "∀x D(x)",
    b: "∃x D(x)",
    c: "D(∀x)",
    ans: "a",
    expl: {
      a: "Kvantifikátor ∀x říká 'pro každé x platí', a predikát D(x) říká, že toto x je dobré. Dohromady to dává 'každá věc ve vesmíru je dobrá'.",
      b: "Toto znamená 'Existuje alespoň jedna věc, která je dobrá'.",
      c: "Kvantifikátor se píše před predikát, nikoliv do jeho závorky."
    }
  },
  {
    q: "Jak zapíšeme větu: 'Někdo je chytrý' (pokud C(x) znamená 'x je člověk' a Ch(x) 'x je chytrý')?",
    a: "∀x (C(x) ∧ Ch(x))",
    b: "∃x (C(x) ∧ Ch(x))",
    c: "∃x (C(x) → Ch(x))",
    ans: "b",
    expl: {
      a: "Tento zápis by znamenal 'Všechno na světě je člověk a zároveň je to chytré'.",
      b: "Existenční kvantifikátor se téměř vždy pojí s konjunkcí (∧). Říkáme: 'Existuje objekt x, který je člověkem A ZÁROVEŇ je chytrý'. To přesně odpovídá českému 'někdo'.",
      c: "Pozor, toto je častá chyba. Tento zápis by byl pravdivý, i kdyby existoval třeba kámen (který není člověkem), protože implikace z nepravdy je pravdivá."
    }
  },
  {
    q: "Jak zapíšeme větu: 'Všichni lidé jsou smrtelní' (L = člověk, S = smrtelný)?",
    a: "∀x (L(x) → S(x))",
    b: "∀x (L(x) ∧ S(x))",
    c: "∃x (L(x) → S(x))",
    ans: "a",
    expl: {
      a: "Všeobecný kvantifikátor se téměř vždy pojí s implikací (→). Říkáme: 'Pro každý objekt na světě platí, že POKUD je to člověk, PAK je smrtelný'. To nevylučuje existenci nesmrtelných kamenů.",
      b: "Tento zápis by tvrdil, že úplně všechno ve vesmíru je člověk a zároveň je to smrtelné (včetně Slunce nebo čísel).",
      c: "Toto by znamenalo, že existuje alespoň jedna věc, pro kterou platí, že pokud je to člověk, je smrtelný (příliš slabé tvrzení)."
    }
  },
  {
    q: "Jaká je negace všeobecného kvantifikátoru ∀x P(x)?",
    a: "∀x ¬P(x)",
    b: "∃x ¬P(x)",
    c: "¬∃x P(x)",
    ans: "b",
    expl: {
      a: "To by znamenalo 'Všechna x nemají vlastnost P'. To je příliš silné popření.",
      b: "Aby nebylo pravda, že 'všichni mají P', stačí najít aspoň jednoho, který P nemá. Proto se ∀ při negaci mění na ∃ a negace se posouvá k predikátu.",
      c: "Toto je ve skutečnosti ekvivalent k ∀x ¬P(x), nikoliv k negaci původního ∀x P(x)."
    }
  },
  {
    q: "Jaká je negace existenčního kvantifikátoru ∃x P(x)?",
    a: "∀x ¬P(x)",
    b: "∃x ¬P(x)",
    c: "∀x P(x)",
    ans: "a",
    expl: {
      a: "Aby nebylo pravda, že 'existuje alespoň jeden s vlastností P', musí platit, že 'úplně všichni vlastnost P postrádají'. Proto se ∃ mění na ∀ a predikát se zneguje.",
      b: "Toto by jen znamenalo, že existuje i někdo, kdo P nemá, což nevyvrací existenci někoho, kdo P má.",
      c: "To je opačné tvrzení, nikoliv negace."
    }
  },
  {
    q: "Co znamená zápis ¬∃x P(x)?",
    a: "Existuje někdo, kdo nemá vlastnost P",
    b: "Nikdo nemá vlastnost P",
    c: "Všichni mají vlastnost P",
    ans: "b",
    expl: {
      a: "To by byl zápis ∃x ¬P(x).",
      b: "Doslova to říká 'Není pravda, že existuje x, které má P'. To je logicky totožné s tvrzením, že všechna x vlastnost P nemají (∀x ¬P(x)).",
      c: "To je přímý opak."
    }
  },
  {
    q: "Věta 'Žádný člověk nelétá' se v logice zapíše jako:",
    a: "¬∀x (C(x) → L(x))",
    b: "∀x (C(x) → ¬L(x))",
    c: "∃x (C(x) ∧ ¬L(x))",
    ans: "b",
    expl: {
      a: "Toto znamená 'Není pravda, že všichni lidé létají' (tedy aspoň jeden nelétá), což je slabší než 'žádný'.",
      b: "Správně: 'Pro každé x platí, že pokud je to člověk, pak nelétá'. Tím jsme vyloučili létání u každého jednoho člověka.",
      c: "Toto znamená 'Existuje člověk, který nelétá'."
    }
  },
  {
    q: "Jak zapíšeme: 'Někteří lidé nejsou lháři' (C = člověk, L = lhář)?",
    a: "∃x (C(x) ∧ ¬L(x))",
    b: "∃x (C(x) → ¬L(x))",
    c: "∀x (C(x) ∧ ¬L(x))",
    ans: "a",
    expl: {
      a: "České 'někdo něco není' vyžaduje existenční kvantifikátor (∃) a konjunkci s negovaným predikátem. Existuje x, které je člověkem a zároveň není lhářem.",
      b: "Implikace u existenčního kvantifikátoru je v logice téměř vždy chybný překlad přirozeného jazyka.",
      c: "Toto by znamenalo 'Všichni lidé nejsou lháři' (tedy nikdo není lhář)."
    }
  },
  {
    q: "Zápis ∃x P(x) ∧ ∃x Q(x) znamená:",
    a: "Existuje objekt, který má vlastnost P i Q zároveň",
    b: "Existuje objekt s vlastností P a existuje (třeba jiný) objekt s vlastností Q",
    c: "Všechna x mají vlastnost P nebo Q",
    ans: "b",
    expl: {
      a: "To by se zapsalo jako ∃x (P(x) ∧ Q(x)).",
      b: "Kvantifikátory mají svůj 'dosah'. Zde první ∃x končí u první závorky. Říkáme tedy jen, že někdo má P a někdo (kdokoliv) má Q. Nemusí jít o tutéž osobu.",
      c: "To by vyžadovalo všeobecný kvantifikátor a disjunkci."
    }
  },
  {
    q: "Co znamená zápis ∀x ∀y R(x, y)?",
    a: "Každý má vztah R k alespoň jednomu y",
    b: "Úplně každý objekt má vztah R ke všem objektům (včetně sebe)",
    c: "Existuje dvojice x a y, které jsou ve vztahu R",
    ans: "b",
    expl: {
      a: "To by se zapsalo jako ∀x ∃y R(x, y).",
      b: "Dva všeobecné kvantifikátory znamenají 'pro jakékoliv x a pro jakékoliv y'. Např. v matematice 'pro každá dvě čísla platí, že jejich součet je číslo'.",
      c: "To by se zapsalo pomocí ∃x ∃y."
    }
  },
  {
    q: "Jak zní negace věty 'Někdo v této místnosti lže'?",
    a: "Nikdo v této místnosti nelže",
    b: "Všichni v této místnosti nelžou",
    c: "Obě možnosti jsou v podstatě správně",
    ans: "c",
    expl: {
      a: "Původní věta je ∃x (M(x) ∧ L(x)). Negací je ∀x ¬(M(x) ∧ L(x)), což lze upravit na ∀x (M(x) → ¬L(x)). Česky: 'Pro každého v místnosti platí, že nelže'.",
      b: "To je jen jiný způsob, jak říct totéž co v možnosti A.",
      c: "V přirozeném jazyce 'nikdo nelže' a 'všichni nelžou' vyjadřují stejný fakt, který je negací 'někdo lže'."
    }
  },
  {
    q: "Pokud v univerzu existuje pouze jeden objekt 'a', pak ∃x P(x) je ekvivalentní čemu?",
    a: "P(a)",
    b: "∀x P(x)",
    c: "Oběma možnostem",
    ans: "c",
    expl: {
      a: "Pokud je na světě jen jeden objekt, pak 'existuje někdo s vlastností P' znamená totéž, jako že ten konkrétní objekt 'a' má vlastnost P.",
      b: "Zároveň 'všichni mají P' znamená v jednoprvkovém světě totéž, co 'ten jeden má P'.",
      c: "V takto omezeném světě se rozdíly mezi existenčním a všeobecným kvantifikátorem stírají, oba mluví o tomtéž prvku."
    }
  },

  {
    q: "Jaký je rozdíl mezi '∀x ∃y Miluje(x, y)' a '∃y ∀x Miluje(x, y)'?",
    a: "Žádný, pořadí kvantifikátorů u různých typů (∀, ∃) nehraje roli.",
    b: "První říká, že každý někoho miluje. Druhá, že existuje jedna osoba, kterou milují úplně všichni.",
    c: "První říká, že existuje jeden milovník. Druhá, že všichni jsou milováni.",
    ans: "b",
    expl: {
      a: "To je velký omyl. Pořadí různých kvantifikátorů je v logice kritické.",
      b: "U ∀x ∃y si pro každé x můžeme vybrat jiné y (každý má svého partnera). U ∃y ∀x musí to jedno y 'obsloužit' všechna x (jedna celebrita milovaná všemi).",
      c: "Významy jsou prohozené a nepřesné."
    }
  },
  {
    q: "Jak zní negace věty: 'Každý student (S) má nějaký oblíbený předmět (P)'?",
    a: "Žádný student nemá oblíbený předmět.",
    b: "Existuje student, který nemá žádný oblíbený předmět.",
    c: "Někteří studenti mají neoblíbené předměty.",
    ans: "b",
    expl: {
      a: "To je příliš silné tvrzení, k vyvrácení 'všech' stačí jeden protipříklad.",
      b: "Původní věta je ∀x ∃y (S(x) → O(x, y)). Negace změní ∀ na ∃, ∃ na ∀ a zneguje vnitřek. Výsledek: Existuje x, které je studentem a pro všechna y platí, že ho nemá v oblibě.",
      c: "To je neurčité tvrzení, které logicky nevyvrací původní strukturu."
    }
  },
  {
    q: "Co vyjadřuje formule: '∃x (P(x) ∧ ∀y (Q(y) → R(x, y)))'?",
    a: "Všechna x mají vlastnost P a všechna y mají vlastnost Q.",
    b: "Existuje nějaké x s vlastností P, které je v relaci R se všemi objekty y, které mají vlastnost Q.",
    c: "Pokud má x vlastnost P, pak všechna y mají vlastnost Q.",
    ans: "b",
    expl: {
      a: "To by vyžadovalo všeobecné kvantifikátory na začátku.",
      b: "Logika tu funguje jako filtr: Najdeme x (existuje), které splňuje P, a pro toto konkrétní x platí, že 'posvítí' na všechna y, která splňují Q, a s každým z nich je v relaci R.",
      c: "Pletete si existenční kvantifikátor s celkovou implikací."
    }
  },
  {
    q: "Jak zapíšeme: 'Jenom ptáci (P) létají (L)'?",
    a: "∀x (P(x) → L(x))",
    b: "∀x (L(x) → P(x))",
    c: "∃x (P(x) ∧ L(x))",
    ans: "b",
    expl: {
      a: "To znamená 'Všichni ptáci létají', což nevylučuje, že létají i letadla nebo mouchy.",
      b: "Slovo 'jenom' obrací směr implikace. Říkáme: 'Pokud něco létá, pak je to nutně pták'. Tím jsme vyloučili cokoliv jiného z létání.",
      c: "To znamená pouze to, že existuje aspoň jeden pták, který létá."
    }
  },
  {
    q: "Co znamená zápis: '¬∀x (P(x) → Q(x))'?",
    a: "Existuje x, které má vlastnost P, ale nemá vlastnost Q.",
    b: "Žádné x, které má P, nemá Q.",
    c: "Všechna x nemají P ani Q.",
    ans: "a",
    expl: {
      a: "Negace ∀ je ∃. Negace implikace (P → Q) je (P ∧ ¬Q). Celkem tedy: 'Existuje x, pro které platí P a zároveň ne-Q'.",
      b: "To by byl zápis ∀x (P(x) → ¬Q(x)).",
      c: "To je úplně jiná a mnohem silnější negace."
    }
  },
  {
    q: "Věta 'Nikdo není dokonalý' (D = dokonalý) se zapíše jako:",
    a: "¬∃x D(x)",
    b: "∀x ¬D(x)",
    c: "Obě možnosti jsou správně.",
    ans: "c",
    expl: {
      a: "Toto čteme jako 'Není pravda, že existuje někdo dokonalý'.",
      b: "Toto čteme jako 'Pro každého platí, že není dokonalý'.",
      c: "V predikátové logice jsou tyto dva zápisy ekvivalentní (podle zákonů duality kvantifikátorů)."
    }
  },
  {
    q: "Formule '∀x (P(x) ∨ ¬P(x))' je příkladem:",
    a: "Kontradikce v predikátové logice.",
    b: "Tautologie (logicky platné formule).",
    c: "Splnitelné, ale neplatné formule.",
    ans: "b",
    expl: {
      a: "Kontradikce by musela být vždy nepravdivá.",
      b: "Jde o zákon vyloučeného třetího aplikovaný na každý prvek univerza. Protože pro každé x platí, že buď P má, nebo nemá, je celá formule vždy pravdivá.",
      c: "Tautologie je 'vždy platná', což je silnější termín."
    }
  },
  {
    q: "Jak zapíšeme: 'Všichni lidé (L) mají někoho (N), koho obdivují (O)'?",
    a: "∀x ∃y (L(x) ∧ N(y) ∧ O(x, y))",
    b: "∀x (L(x) → ∃y (N(y) ∧ O(x, y)))",
    c: "∃y ∀x (L(x) → (N(y) ∧ O(x, y)))",
    ans: "b",
    expl: {
      a: "Tento zápis by tvrdil, že všechno ve vesmíru je člověk.",
      b: "Správně: 'Pro každé x platí, že POKUD je to člověk, PAK (existuje y, které je osobou a x ho obdivuje)'. Implikace správně omezuje platnost na lidi.",
      c: "Toto by znamenalo, že existuje jedna konkrétní osoba, kterou obdivují úplně všichni lidé."
    }
  },
  {
    q: "Co znamená symbol '∃!' (vykřičník za existenčním kvantifikátorem)?",
    a: "Existuje alespoň milion objektů.",
    b: "Existuje právě jeden (jediný) objekt.",
    c: "Existuje někdo, kdo křičí.",
    ans: "b",
    expl: {
      a: "Počet objektů se takto neznačí.",
      b: "Jde o zápis 'jednoznačné existence'. ∃!x P(x) říká, že existuje x s vlastností P, a pokud má vlastnost P nějaké y, pak je to to samé x.",
      c: "To je vtipný, ale nesprávný výklad symbolu."
    }
  },
  {
    q: "Negace věty 'Někteří politici (P) nelžou (¬L)' je:",
    a: "Všichni politici lžou.",
    b: "Někteří politici lžou.",
    c: "Žádný politik nelže.",
    ans: "a",
    expl: {
      a: "Původní věta: ∃x (P(x) ∧ ¬L(x)). Negace: ∀x ¬(P(x) ∧ ¬L(x)), což se přepíše na ∀x (P(x) → L(x)). Tedy: 'U každého politika platí, že lže'.",
      b: "To není negace, tyto dva stavy mohou nastat současně.",
      c: "To by znamenalo 'Všichni politici nelžou', což je přesný opak původního tvrzení, nikoliv jeho logická negace."
    }
  },
  {
    q: "Co říká formule '∀x ∀y (x = y → (P(x) ↔ P(y)))'?",
    a: "Pokud jsou dva objekty identické, musí mít stejné vlastnosti.",
    b: "Všechny objekty jsou stejné.",
    c: "Vlastnost P platí jen pro jeden objekt.",
    ans: "a",
    expl: {
      a: "Toto je Leibnizův zákon identity nerozlišitelných. Pokud x a y jsou tentýž objekt, pak cokoliv, co platí o x, musí platit i o y.",
      b: "To formule netvrdí, pouze říká, co platí, POKUD jsou stejné.",
      c: "Formule neomezuje počet objektů s vlastností P."
    }
  },
  {
    q: "Jak zapíšeme: 'Něco není v pořádku' (V = být v pořádku)?",
    a: "∃x ¬V(x)",
    b: "¬∃x V(x)",
    c: "∀x ¬V(x)",
    ans: "a",
    expl: {
      a: "Správně: 'Existuje aspoň jedna věc (x), která nemá vlastnost být v pořádku'.",
      b: "Toto znamená 'Nic není v pořádku' (žádná věc není v pořádku).",
      c: "Toto znamená také 'Všechno je v nepořádku'."
    }
  },
  {
    q: "Výraz '∀x P(x) → P(a)' (kde 'a' je konkrétní jméno) se nazývá:",
    a: "Existenční generalizace.",
    b: "Všeobecná konkretizace (specifikace).",
    c: "Modus Ponens.",
    ans: "b",
    expl: {
      a: "Generalizace jde od konkrétního k obecnému (P(a) → ∃x P(x)).",
      b: "Říká: 'Pokud vlastnost platí pro všechny, pak platí i pro Karla (nebo jakýkoliv jiný konkrétní prvek)'. Je to logicky platný krok.",
      c: "Modus Ponens je pravidlo výrokové logiky, i když se zde v pozadí používá."
    }
  },
  {
    q: "Jaká je negace věty 'Existuje město (M), které má metro (T) i mrakodrapy (R)'?",
    a: "Žádné město nemá metro ani mrakodrapy.",
    b: "Každé město buď nemá metro, nebo nemá mrakodrapy.",
    c: "Některá města mají jen metro.",
    ans: "b",
    expl: {
      a: "To je příliš silné. K vyvrácení existence města s obojím stačí, aby v každém městě chyběla aspoň jedna z těch věcí.",
      b: "Původně: ∃x (M(x) ∧ T(x) ∧ R(x)). Negace: ∀x (M(x) → (¬T(x) ∨ ¬R(x))). V každém městě tedy chybí metro nebo mrakodrapy (nebo obojí).",
      c: "To je jen částečný popis, ne negace celého tvrzení."
    }
  },
  {
    q: "Co znamená zápis '∀x (P(x) ↔ Q(x))'?",
    a: "Predikáty P a Q jsou v tomto univerzu koextenzionální (platí pro stejné objekty).",
    b: "Někdy platí P a někdy Q.",
    c: "Pokud platí P, tak nikdy neplatí Q.",
    ans: "a",
    expl: {
      a: "Ekvivalence pod všeobecným kvantifikátorem říká, že neexistuje objekt, který by měl P a neměl Q (nebo naopak). Množiny prvků splňujících P a Q jsou tedy identické.",
      b: "To by byla spíše disjunkce.",
      c: "To by byla implikace s negací."
    }
  },
  {
    q: "Co znamená zápis '∀x ∃y (P(x) → Miluje(x, y))'?",
    a: "Každý člověk (P) někoho miluje.",
    b: "Existuje někdo, koho milují všichni lidé.",
    c: "Všichni lidé milují sami sebe.",
    ans: "a",
    expl: {
      a: "Tento zápis říká: 'Pro každé x platí, že pokud je to člověk, pak k němu existuje aspoň jedno y, které toto x miluje'. Každý má tedy v univerzu aspoň jeden objekt své lásky.",
      b: "To by vyžadovalo prohození kvantifikátorů: ∃y ∀x (P(x) → Miluje(x, y)).",
      c: "To by se zapsalo jako ∀x (P(x) → Miluje(x, x))."
    }
  },
  {
    q: "Jak zní negace věty 'Existuje někdo (∃x), koho nikdo (∀y) nezná (¬Z(y, x))'?",
    a: "Všichni lidé někoho znají.",
    b: "Každého člověka někdo zná.",
    c: "Nikdo nikoho nezná.",
    ans: "b",
    expl: {
      a: "To by byla negace věty 'Existuje někdo, kdo nikoho nezná'.",
      b: "Původně: ∃x ∀y ¬Z(y, x). Negací je ∀x ∃y Z(y, x). Tedy: 'U každého člověka (x) existuje aspoň jeden člověk (y), který ho zná'.",
      c: "To je extrémní případ, který s logickou negací původní věty nesouvisí."
    }
  },
  {
    q: "Výraz '∀x (P(x) → Q(x)) ∧ P(a)' nám umožňuje odvodit 'Q(a)'. Jak se toto pravidlo nazývá?",
    a: "Všeobecná specifikace spojená s Modus Ponens.",
    b: "Existenční generalizace.",
    c: "Zákon kontrapozice.",
    ans: "a",
    expl: {
      a: "Nejprve 'stáhneme' všeobecné tvrzení na konkrétní prvek 'a' (specifikace), čímž získáme výrokovou implikaci P(a) → Q(a). Protože víme, že P(a) platí, odvodíme Q(a) pomocí Modus Ponens.",
      b: "To by byl opačný postup (z konkrétního na obecné).",
      c: "Kontrapozice by z ¬Q(a) odvozovala ¬P(a)."
    }
  },
  {
    q: "Jak zapíšeme: 'Všichni (x) mají rádi (R) jen ty (y), kteří mají rádi je'?",
    a: "∀x ∀y (R(x, y) → R(y, x))",
    b: "∀x ∃y (R(x, y) ∧ R(y, x))",
    c: "∀x ∀y (R(x, y) ↔ R(y, x))",
    ans: "a",
    expl: {
      a: "Tato implikace říká: 'Pokud x má rádo y, pak z toho nutně plyne, že i y má rádo x'. Tím je omezeno, že x nemůže mít rádo nikoho, kdo mu lásku neopětuje.",
      b: "To znamená 'Každý má někoho, s kým se má rád navzájem', což je jiný význam.",
      c: "To by znamenalo symetrii: 'x má rádo y právě tehdy, když y má rádo x' (zákaz jednostranné nenávisti i lásky zároveň)."
    }
  },
  {
    q: "Co tvrdí zápis: '∃x (P(x) ∧ ∀y (P(y) → x = y))'?",
    a: "Existuje alespoň jeden objekt s vlastností P.",
    b: "Existuje právě jeden (jediný) objekt s vlastností P.",
    c: "Všechny objekty mají vlastnost P.",
    ans: "b",
    expl: {
      a: "To by byl prostý zápis ∃x P(x).",
      b: "Tento rozpis definuje unikátnost. Říká: 'Existuje x s vlastností P, a pokud má vlastnost P cokoliv jiného (y), pak je to ve skutečnosti to samé x'.",
      c: "To by byl zápis ∀x P(x)."
    }
  },
  {
    q: "Jak zní negace věty 'Všechna města (M) mají školu (S) nebo nemocnici (N)'?",
    a: "Existuje město, které nemá školu a zároveň nemá nemocnici.",
    b: "Existuje město, které nemá školu nebo nemá nemocnici.",
    c: "Žádné město nemá školu ani nemocnici.",
    ans: "a",
    expl: {
      a: "Původně: ∀x (M(x) → (S(x) ∨ N(x))). Negace změní ∀ na ∃ a vnitřek na (M(x) ∧ ¬(S(x) ∨ N(x))). Podle De Morgana tedy město existuje a nemá ani jedno zařízení.",
      b: "Tady chybí změna ∨ na ∧ uvnitř negované závorky.",
      c: "To je univerzální popření, k vyvrácení původního tvrzení stačí najít jedno takové 'chudé' město."
    }
  },
  {
    q: "Co znamená v predikátové logice 'Prázdné univerzum'?",
    a: "Množina objektů, o kterých mluvíme, neobsahuje žádné prvky.",
    b: "Svět, ve kterém platí jen negované výroky.",
    c: "Situace, kdy v tabulce jsou samé nuly.",
    ans: "a",
    expl: {
      a: "V klasické predikátové logice se obvykle předpokládá, že univerzum je neprázdné. Pokud by bylo prázdné, ∀x P(x) by bylo paradoxně pravdivé (není tam nic, co by to vyvrátilo).",
      b: "To s prázdnotou univerza nesouvisí.",
      c: "Tabulky se v predikátové logice (kvůli nekonečným doménám) nepoužívají stejně jako ve výrokové."
    }
  },
  {
    q: "Zápis '∀x ∃y (x < y)' v univerzu přirozených čísel znamená:",
    a: "Ke každému číslu existuje číslo větší.",
    b: "Existuje jedno největší číslo.",
    c: "Všechna čísla jsou stejná.",
    ans: "a",
    expl: {
      a: "Správně. Pro jakékoliv zvolené x dokážeme najít aspoň jedno y, které je větší. To vyjadřuje nekonečnost číselné řady směrem nahoru.",
      b: "To by byl zápis ∃y ∀x (x ≤ y).",
      c: "To by vyžadovalo relaci rovnosti (x = y)."
    }
  },
  {
    q: "Co vyjadřuje '∃x ∀y (x < y)' v univerzu přirozených čísel?",
    a: "Že existuje číslo, které je menší než všechna ostatní čísla.",
    b: "Že každé číslo má svého následníka.",
    c: "Že neexistuje žádné nejmenší číslo.",
    ans: "a",
    expl: {
      a: "Tento zápis říká, že existuje jedno pevné x, které je 'pod' všemi y. V přirozených číslech (pokud začínáme od 1 nebo 0) by to mohlo být pravdivé, pokud bychom uvažovali x < y pro y ≠ x.",
      b: "To je význam ∀x ∃y (y = x + 1).",
      c: "To by byla negace tohoto tvrzení."
    }
  },
  {
    q: "Jak zapíšeme: 'Jen ten, kdo (x) je učitel (U), může učit (C)'?",
    a: "∀x (C(x) → U(x))",
    b: "∀x (U(x) → C(x))",
    c: "∃x (U(x) ∧ C(x))",
    ans: "a",
    expl: {
      a: "Slovo 'jen' uvozuje nutnou podmínku. Pokud někdo učí, musí z toho vyplývat, že je učitel. Být učitelem je podmínkou sine qua non pro učení.",
      b: "To by znamenalo, že každý učitel musí učit (není tam prostor pro učitele v důchodu).",
      c: "To znamená pouze to, že aspoň jeden učitel skutečně učí."
    }
  },
  {
    q: "Výraz '∃x (P(x) ∧ Q(a))' je ekvivalentní s:",
    a: "Q(a) ∧ ∃x P(x)",
    b: "∀x (P(x) ∧ Q(a))",
    c: "P(a) ∧ Q(a)",
    ans: "a",
    expl: {
      a: "Protože Q(a) neobsahuje proměnnou x, není na kvantifikátoru závislé a můžeme ho 'vytknout' před něj. Kvantifikátor se pak vztahuje už jen na P(x).",
      b: "To rozhodně ne, existenční a všeobecný kvantifikátor nejsou zaměnitelné.",
      c: "To by platilo jen v případě, že x je nuceno být rovno 'a'."
    }
  },
  {
    q: "Co říká formule '¬∀x ¬P(x)'?",
    a: "Existuje alespoň jedno x s vlastností P.",
    b: "Žádné x nemá vlastnost P.",
    c: "Všechna x mají vlastnost P.",
    ans: "a",
    expl: {
      a: "Jde o definici existenčního kvantifikátoru pomocí všeobecného. 'Není pravda, že úplně všechna x postrádají P' znamená totéž co 'Aspoň jedno x vlastnost P má'.",
      b: "To by byl zápis ∀x ¬P(x).",
      c: "To by byl zápis ∀x P(x)."
    }
  },
  {
    q: "Jak zapíšeme: 'Některé (∃x) velké (V) ryby (R) požírají (P) jen malé (M) ryby'?",
    a: "∃x (V(x) ∧ R(x) ∧ ∀y (P(x, y) → M(y)))",
    b: "∃x (V(x) ∧ R(x) ∧ ∃y (P(x, y) ∧ M(y)))",
    c: "∀x ((V(x) ∧ R(x)) → ∀y (P(x, y) ∧ M(y)))",
    ans: "a",
    expl: {
      a: "Správně: Existuje velká ryba x a pro všechno, co tato ryba požírá (y), platí, že je to malé. To je přesný rozbor věty.",
      b: "To by znamenalo, že požírá aspoň jednu malou rybu, ale neříká to, že požírá JEN je.",
      c: "To by znamenalo, že úplně každá velká ryba požírá úplně všechno a všechno je to malé (logický nesmysl)."
    }
  },
  {
    q: "Věta 'Všichni (x) mají někoho (y), kdo je (y) nenávidí (N)' se zapíše:",
    a: "∀x ∃y N(y, x)",
    b: "∃y ∀x N(y, x)",
    c: "∀x ∃y N(x, y)",
    ans: "a",
    expl: {
      a: "Pro každé x existuje y, které stojí v relaci N k onomu x (y nenávidí x). Pořadí proměnných v N(y, x) určuje, kdo je subjekt a kdo objekt.",
      b: "To by znamenalo, že existuje jeden univerzální 'nenáviděč', který nenávidí úplně všechny lidi.",
      c: "To by znamenalo 'Všichni někoho nenávidí' (v roli subjektu)."
    }
  },
  {
    q: "Co znamená zápis '∀x (P(x) → ⊥)' (kde ⊥ je spor)?",
    a: "Žádné x nemá vlastnost P.",
    b: "Všechna x mají vlastnost P.",
    c: "Některá x mají vlastnost P.",
    ans: "a",
    expl: {
      a: "Pokud z P(x) vyplývá spor, nemůže P(x) nikdy nastat. Proto pro všechna x platí, že vlastnost P nemají. Je to v podstatě zápis negace ∀x ¬P(x).",
      b: "To by byl pravý opak.",
      c: "Pokud z něčeho plyne spor, nemůže to platit ani pro jedno jediné x."
    }
  },

  {
    q: "Jak zapíšeme větu: 'Každý má nejvýše jednoho otce' (O(x, y) = x je otcem y)?",
    a: "∀x ∀y ∀z ((O(y, x) ∧ O(z, x)) → y = z)",
    b: "∀x ∃y O(y, x)",
    c: "∀x ∀y (O(y, x) → y = x)",
    ans: "a",
    expl: {
      a: "Tento zápis definuje funkcionalitu (jednoznačnost). Říká: 'Pokud pro nějaké x platí, že y je jeho otcem a zároveň z je jeho otcem, pak y a z musí být tatáž osoba'. Tím vylučujeme existenci dvou různých otců.",
      b: "Toto znamená 'Každý má alespoň jednoho otce', což neřeší horní limit (nejvýše jednoho).",
      c: "Toto by znamenalo 'Každý je svým vlastním otcem'."
    }
  },
  {
    q: "Co vyjadřuje formule: '∃x (C(x) ∧ ∀y (C(y) ∧ x ≠ y → Starší(x, y)))'?",
    a: "Všichni lidé (C) jsou stejně staří.",
    b: "Existuje nejstarší člověk (ten, který je starší než všichni ostatní lidé).",
    c: "Existuje alespoň jeden člověk.",
    ans: "b",
    expl: {
      a: "To by vyžadovalo relaci rovnosti věku pro všechna x a y.",
      b: "Správně. Najdeme x (člověka), pro kterého platí, že jakýkoliv jiný člověk y (který není on sám) je vůči němu mladší (nebo on je starší než y). To je přesná definice maxima v množině.",
      c: "To je sice pravda, ale formule říká mnohem víc o jeho věku vůči ostatním."
    }
  },
  {
    q: "Jak zní negace věty: 'Všechna (∀x) jablka (J) jsou buď červená (C), nebo kyselá (K)'?",
    a: "Existuje jablko, které není červené ani kyselé.",
    b: "Existuje jablko, které je červené a zároveň kyselé.",
    c: "Žádné jablko není červené ani kyselé.",
    ans: "a",
    expl: {
      a: "Původně: ∀x (J(x) → (C(x) ∨ K(x))). Negace změní ∀ na ∃ a vnitřní disjunkci na konjunkci negací: J(x) ∧ ¬C(x) ∧ ¬K(x). Tedy najdeme jablko, které postrádá obě vlastnosti.",
      b: "To by byla negace vylučujícího 'nebo', nikoliv běžné disjunkce.",
      c: "To je opět příliš silné univerzální popření."
    }
  },
  {
    q: "Zápis '∀x (P(x) → ∃y (Q(y) ∧ R(x, y)))' znamená:",
    a: "Všechna P jsou v relaci R s nějakým Q.",
    b: "Všechna Q jsou v relaci R s nějakým P.",
    c: "Existuje jedno Q, které je v relaci R se všemi P.",
    ans: "a",
    expl: {
      a: "Správně. Vezmeme jakékoliv x s vlastností P a k němu (v jeho 'dosahu') najdeme aspoň jedno y s vlastností Q, které s ním tvoří dvojici v R.",
      b: "To by byly kvantifikátory i predikáty v opačném pořadí.",
      c: "To by vyžadovalo ∃y na začátku celé formule (před ∀x)."
    }
  },
  {
    q: "Co vyjadřuje formule '∃x ∃y (P(x) ∧ P(y) ∧ x ≠ y)'?",
    a: "Existují alespoň dva různé objekty s vlastností P.",
    b: "Existují právě dva objekty s vlastností P.",
    c: "Existují nejvýše dva objekty s vlastností P.",
    ans: "a",
    expl: {
      a: "Tento zápis říká: 'Máme x s vlastností P, máme y s vlastností P a x není totéž co y'. To garantuje minimální počet 2. Mohlo by jich být i 10, ale 2 tam jsou určitě.",
      b: "Pro 'právě dva' bychom museli dodat, že jakékoliv třetí z s vlastností P se musí rovnat buď x, nebo y.",
      c: "To by byl úplně jiný zápis pomocí všeobecného kvantifikátoru."
    }
  },
  {
    q: "Jak zapíšeme: 'Nikdo (x) nemůže milovat (M) každého (y)'?",
    a: "¬∃x ∀y M(x, y)",
    b: "∀x ∃y ¬M(x, y)",
    c: "Obě možnosti jsou správně.",
    ans: "c",
    expl: {
      a: "Doslova: 'Není pravda, že existuje někdo, kdo miluje úplně všechny'.",
      b: "Doslova: 'Každý člověk má aspoň jednu osobu, kterou nemiluje'.",
      c: "V logice jsou tyto dva zápisy ekvivalentní. Vyjadřují stejné omezení světa, jen jinými slovy (jeden popírá existenci super-milovníka, druhý garantuje u každého aspoň jednu ne-lásku)."
    }
  },
  {
    q: "Co znamená v predikátové logice termín 'Vázaná proměnná'?",
    a: "Proměnná, která spadla pod dosah kvantifikátoru (∀ nebo ∃).",
    b: "Proměnná, která má vždy hodnotu 'Pravda'.",
    c: "Proměnná, která není v závorkách.",
    ans: "a",
    expl: {
      a: "Pokud máme ∀x P(x), x je vázaná. Kvantifikátor jí dává význam. Pokud bychom měli jen P(x) bez kvantifikátoru, x je 'volná' a výraz není výrokem, dokud za x něco nedosadíme.",
      b: "Pravdivostní hodnota s vazbou nesouvisí.",
      c: "Závorky určují dosah, ale podstatou je přítomnost kvantifikátoru."
    }
  },
  {
    q: "Zápis '∀x P(x) ∨ ∀x Q(x)' je logicky SILNĚJŠÍ než '∀x (P(x) ∨ Q(x))'. Proč?",
    a: "Protože první vyžaduje, aby buď všichni měli P, nebo všichni měli Q. Druhý dovoluje směs.",
    b: "Není silnější, jsou ekvivalentní.",
    c: "Protože první obsahuje více symbolů.",
    ans: "a",
    expl: {
      a: "Přesně tak. V druhém případě může být polovina lidí modrá a polovina zelená (formule stále platí). V prvním případě by museli být buď všichni modří, nebo všichni zelení. První implikuje druhý, ale ne naopak.",
      b: "Ekvivalentní jsou u konjunkce (∀x P(x) ∧ ∀x Q(x) ≡ ∀x (P(x) ∧ Q(x))), ale u disjunkce nikoliv.",
      c: "Počet symbolů o logické síle nerozhoduje."
    }
  },
  {
    q: "Jak zapíšeme: 'Všichni (x) učitelé (U) kromě (x ≠) pana Nováka (n) jsou přísní (P)'?",
    a: "∀x ((U(x) ∧ x ≠ n) → P(x))",
    b: "∀x (U(x) → (x = n ∨ P(x)))",
    c: "Obě možnosti jsou logicky v pořádku.",
    ans: "c",
    expl: {
      a: "Tento zápis říká: 'Pokud jsi učitel a nejsi Novák, jsi přísný'. To je přímý překlad.",
      b: "Tento zápis říká: 'Každý učitel je buď Novák, nebo je přísný'. Logicky to vede ke stejnému výsledku (u všech učitelů kromě Nováka je vynucena přísnost).",
      c: "Logika často nabízí více cest, jak vyjádřit stejnou podmínku."
    }
  },
  {
    q: "Co tvrdí formule '∀x ∃y (P(x, y) ∧ ¬P(y, x))'?",
    a: "Relace P je asymetrická pro každý prvek.",
    b: "Pro každý objekt existuje jiný objekt, se kterým má jednostranný vztah P.",
    c: "Žádný vztah není opětován.",
    ans: "b",
    expl: {
      a: "Asymetrie by znamenala ∀x ∀y (P(x, y) → ¬P(y, x)).",
      b: "Správně. Ke každému x najdeme aspoň jedno y takové, že x má vztah k y, ale y ho nevrací x. Např. 'Každý má někoho, koho miluje, ale ten ho nemiluje'.",
      c: "To je příliš obecné, formule mluví o existenci alespoň jednoho takového y pro každé x."
    }
  },
  {
    q: "Jak zní negace: 'Existuje (∃x) někdo, kdo (∀y) všem pomáhá (P(x, y))'?",
    a: "Nikdo nepomáhá všem.",
    b: "Každý člověk má aspoň jednoho, komu nepomůže.",
    c: "Všichni lidé jsou sobci.",
    ans: "b",
    expl: {
      a: "To je negace ∃x ∀y P(x, y) zapsaná jako ∀x ∃y ¬P(x, y). Je to správně, ale varianta B je názornější rozklad.",
      b: "Původně: ∃x ∀y P(x, y). Negace: ∀x ∃y ¬P(x, y). Tedy u každého člověka najdeme někoho, komu on nepomáhá. Tím zmizela možnost 'vše-pomahače'.",
      c: "To je subjektivní interpretace, nikoliv logická negace."
    }
  },
  {
    q: "Výraz '∃x (P(x) → Q(x))' je v klasické logice pravdivý, pokud:",
    a: "Existuje objekt, který nemá vlastnost P, nebo má vlastnost Q.",
    b: "Všechny objekty mají vlastnost Q.",
    c: "Aspoň jedno x má vlastnost P a Q zároveň.",
    ans: "a",
    expl: {
      a: "Tohle je chyták. Implikace je pravdivá, i když je předpoklad nepravdivý. Stačí tedy najít jeden objekt, který není P, a celá existenční formule je pravda. Proto se ∃x s implikací v praxi téměř nepoužívá.",
      b: "To by byla pravda, ale je to zbytečně silná podmínka.",
      c: "To by byla pravda pro konjunkci, implikaci stačí i neexistence P."
    }
  },
  {
    q: "Co vyjadřuje '∀x ∀y ∀z ((R(x, y) ∧ R(y, z)) → R(x, z))'?",
    a: "Tranzitivitu relace R.",
    b: "Symetrii relace R.",
    c: "Reflexivitu relace R.",
    ans: "a",
    expl: {
      a: "Tranzitivita znamená, že se vztah přenáší. Pokud je x větší než y a y větší než z, pak x je větší než z. Formule to přesně popisuje.",
      b: "Symetrie je ∀x ∀y (R(x, y) → R(y, x)).",
      c: "Reflexivita je ∀x R(x, x)."
    }
  },
  {
    q: "Jak zapíšeme: 'Všichni lidé (L) kromě jednoho (∃!y) jsou v místnosti (M)'?",
    a: "∃!y (L(y) ∧ ¬M(y) ∧ ∀x ((L(x) ∧ x ≠ y) → M(x)))",
    b: "∃x (L(x) ∧ ¬M(x))",
    c: "∀x (L(x) → M(x)) ∧ ∃y ¬M(y)",
    ans: "a",
    expl: {
      a: "Tento komplexní zápis říká: 'Existuje právě jeden y, který je člověk a není v místnosti, a pro všechny ostatní lidi x (různé od y) platí, že v místnosti jsou'.",
      b: "Toto znamená pouze 'Existuje aspoň jeden člověk, který není v místnosti'.",
      c: "Zde chybí vazba, že ten, co tam není, je jen jeden a že ostatní tam jsou."
    }
  },
  {
    q: "Poslední z predikátové: Co znamená zápis '∀x P(x) ⊨ ∃x P(x)'?",
    a: "V neprázdném univerzu z všeobecné platnosti vyplývá existence alespoň jednoho případu.",
    b: "Pravda vyplývá z nepravdy.",
    c: "Všechna P jsou zároveň ∃.",
    ans: "a",
    expl: {
      a: "Pokud předpokládáme, že náš svět není prázdný, pak z faktu, že 'úplně všichni mají vlastnost P', logicky vyplývá, že 'existuje aspoň jeden, kdo má P'. Je to bezpečný krok v klasické logice.",
      b: "To by platilo jen u sporu.",
      c: "To je nedává smysl, ∃x není vlastnost, ale kvantifikátor."
    }
  }

    ]
};
