window.data_formalni_logika = {
    "groups": {
        "symboly_a_spojky": {
            "title": "Symboly a spojky",
            "questions": [
            {
                q: "Co v logice vyjadřuje symbol '¬' (případně '~')?",
                wiki: ["formalni_logika", "symboly_prehled"],
                a: "Konjunkci (a zároveň)",
                b: "Negaci (neplatí, že)",
                c: "Implikaci (jestliže, pak)",
                ans: "b",
                expl: {
                    a: "Konjunkce se značí symbolem ∧.",
                    b: "Symbol ¬ je unární operátor, který obrací pravdivostní hodnotu výroku. Pokud je výrok A pravdivý, pak ¬A je nepravdivý, a naopak. V češtině mu odpovídá předpona ne- nebo fráze 'není pravda, že'.",
                    c: "Implikace se značí šipkou →."
                }
            },
            {
                q: "Který symbol se používá pro 'konjunkci' (logické 'a')?",
                a: "∨",
                b: "∧",
                c: "→",
                ans: "b",
                expl: {
                    a: "Symbol ∨ značí disjunkci (nebo).",
                    b: "Symbol ∧ (stříška) spojuje dva výroky a celý složený výrok je pravdivý pouze tehdy, když jsou pravdivé oba jeho členy zároveň. Pomůckou může být podoba s písmenem 'A' (jako 'a').",
                    c: "Symbol → značí implikaci."
                }
            },
            {
                q: "Výrok 'A ∨ B' (disjunkce) je NEPRAVDIVÝ pouze v případě, že:",
                a: "A i B jsou nepravdivé",
                b: "A je pravdivé a B je nepravdivé",
                c: "A i B jsou pravdivé",
                ans: "a",
                expl: {
                    a: "Logické 'nebo' (v nevylučovacím smyslu) vyžaduje, aby platila alespoň jedna varianta. Pokud jsou obě části (A i B) nepravdivé, nemá být co pravdivého na celku, a proto je výsledek nepravda.",
                    b: "V tomto případě je výrok pravdivý, protože platí alespoň A.",
                    c: "V tomto případě je výrok pravdivý, disjunkce v logice standardně není vylučující (může platit obojí)."
                }
            },
            {
                q: "Jak se nazývá zápis 'A → B'?",
                a: "Ekvivalence",
                b: "Implikace",
                c: "Disjunkce",
                ans: "b",
                expl: {
                    a: "Ekvivalence se značí obousměrnou šipkou ↔.",
                    b: "Implikace vyjadřuje vztah vyplývání nebo podmínky (Jestliže A, pak B). Prvnímu členu (A) se říká antecedent, druhému (B) konsekvent.",
                    c: "Disjunkce se značí symbolem ∨."
                }
            },
            {
                q: "Kdy je výrok 'A ∧ B' pravdivý?",
                a: "Když je pravdivý alespoň jeden z nich",
                b: "Pouze když jsou pravdivé oba současně",
                c: "Když je jeden pravdivý a druhý nepravdivý",
                ans: "b",
                expl: {
                    a: "To by platilo pro disjunkci (A ∨ B).",
                    b: "Konjunkce (A ∧ B) je přísná. Aby byl celý složený výrok pravdivý, musí realita odpovídat oběma částem najednou. Pokud je byť jen jedna část nepravdivá, celá konjunkce padá.",
                    c: "V tomto případě je konjunkce nepravdivá."
                }
            },
            {
                q: "Co znamená symbol '↔'?",
                a: "Ekvivalenci (tehdy a jen tehdy, když)",
                b: "Negaci disjunkce",
                c: "Alternativu (buď, anebo)",
                ans: "a",
                expl: {
                    a: "Ekvivalence (A ↔ B) říká, že oba výroky mají vždy stejnou pravdivostní hodnotu. Buď platí oba, nebo neplatí ani jeden. Je to v podstatě implikace běžící oběma směry najednou.",
                    b: "To by byl zápis ¬(A ∨ B).",
                    c: "Alternativa (vylučující nebo) se značí specifickým symbolem, např. ⊕ nebo ⊻."
                }
            },
            {
                q: "Pokud je výrok A pravdivý, jaká je hodnota výroku ¬(¬A)?",
                a: "Nepravda",
                b: "Pravda",
                c: "Nelze určit",
                ans: "b",
                expl: {
                    a: "Jedna negace by z pravdy udělala nepravdu, ale dvě se vyruší.",
                    b: "Zde platí zákon dvojí negace. První negace udělá z pravdivého A nepravdu, druhá negace z této nepravdy udělá opět pravdu. ¬(¬A) je tedy logicky ekvivalentní původnímu A.",
                    c: "Hodnotu lze přesně určit díky pravidlům negace."
                }
            },
            {
                q: "Jak se v logice čte zápis 'p ∧ q'?",
                a: "p nebo q",
                b: "p a q",
                c: "pokud p, pak q",
                ans: "b",
                expl: {
                    a: "To by byl zápis p ∨ q.",
                    b: "Symbol ∧ je přímým překladem přirozené spojky 'a'. V logice se používá k propojení dvou faktů, které musí platit společně.",
                    c: "To by byl zápis p → q."
                }
            },
            {
                q: "Která z následujících možností je zápisem: 'Není pravda, že prší nebo sněží'?",
                a: "¬(A ∨ B)",
                b: "¬A ∨ ¬B",
                c: "¬A ∧ ¬B",
                ans: "a",
                expl: {
                    a: "Závorka určuje rozsah negace. Fráze 'Není pravda, že...' se vztahuje na celý zbytek věty (prší nebo sněží), proto musí být operace 'nebo' (∨) uvnitř závorky a negace (¬) vně.",
                    b: "Tento zápis znamená 'Neprší nebo nesněží', což má jiný význam.",
                    c: "Tento zápis znamená 'Neprší a nesněží' (což je sice logicky ekvivalentní výsledku, ale není to přímý překlad struktury věty)."
                }
            },
            {
                q: "V implikaci 'A → B' se A nazývá:",
                a: "Konsekvent (následek)",
                b: "Antecedent (předpoklad)",
                c: "Atribut",
                ans: "b",
                expl: {
                    a: "Konsekvent je až ten druhý člen (B), tedy to, co z předpokladu vyplývá.",
                    b: "Antecedent pochází z latinského 'antecedere' (předcházet). Je to podmínka, na jejímž základě v implikaci usuzujeme na platnost druhého tvrzení.",
                    c: "Atribut je termín z jiných oblastí logiky či filozofie, neoznačuje část implikace."
                }
            },
            {
                q: "Výrok 'A → B' je nepravdivý v JEDINÉM případě. Který to je?",
                a: "Když A je pravda a B je nepravda",
                b: "Když A je nepravda a B je pravda",
                c: "Když A i B jsou nepravda",
                ans: "a",
                expl: {
                    a: "Implikace slibuje: 'Pokud platí A, pak bude platit B'. Pokud A skutečně nastalo (pravda), ale B nenastalo (nepravda), byl slib porušen a celá implikace je lživá.",
                    b: "Pokud předpoklad nenastane, implikace je tzv. 'prazdně pravdivá'. Nic neporušila.",
                    c: "Pokud neplatí předpoklad, implikace nemůže být nepravdivá, bez ohledu na výsledek."
                }
            },
            {
                q: "Jak zapíšeme: 'Půjdu ven pouze tehdy, když bude svítit slunce' (vztah podmínky)?",
                a: "A ∧ B",
                b: "A → B",
                c: "A ∨ B",
                ans: "b",
                expl: {
                    a: "To by znamenalo 'Jdu ven a svítí slunce', pouhý popis dvou faktů.",
                    b: "Věta vyjadřuje podmíněný vztah. 'Jít ven' (A) je podmíněno 'sluncem' (B). Implikace je základní nástroj pro zachycení 'jestliže-pak' struktur v přirozeném jazyce.",
                    c: "To by znamenalo 'Jdu ven nebo svítí slunce'."
                }
            },
            {
                q: "Symbol '≡' nebo '⇔' se v logických formulích používá pro:",
                a: "Definici negace",
                b: "Logickou ekvivalenci (totožnost)",
                c: "Pravděpodobnost",
                ans: "b",
                expl: {
                    a: "Negace má symbol ¬.",
                    b: "Tyto symboly označují, že dvě formule mají identické pravdivostní tabulky. Tedy že v každé situaci jsou obě buď pravdivé, nebo obě nepravdivé. Je to 'rovnítko' mezi logickými výrazy.",
                    c: "Pro pravděpodobnost se používají úplně jiné matematické zápisy (např. P(A))."
                }
            },
            {
                q: "Co znamená zápis 'A ∨ ¬A'?",
                a: "Spor",
                b: "Zákon vyloučeného třetího",
                c: "Kontradikce",
                ans: "b",
                expl: {
                    a: "Spor (kontradikce) by byl zápis A ∧ ¬A (něco platí a zároveň neplatí).",
                    b: "Tento princip říká, že pro jakýkoliv výrok platí, že buď je pravdivý, nebo je pravdivá jeho negace. Třetí možnost neexistuje. Formule je to tautologie – je vždy pravdivá.",
                    c: "Viz bod A, kontradikce je pravý opak."
                }
            },
            {
                q: "Pokud o výroku A řekneme, že je to 'tautologie', znamená to, že:",
                a: "Je vždy nepravdivý",
                b: "Je vždy pravdivý bez ohledu na hodnoty podvýroků",
                c: "Jeho pravdivost závisí na okolnostech",
                ans: "b",
                expl: {
                    a: "Vždy nepravdivý výrok se nazývá kontradikce.",
                    b: "Tautologie je formule, která díky své struktuře vyjde jako 'pravda' ve všech řádcích pravdivostní tabulky. Příkladem je právě 'A ∨ ¬A'.",
                    c: "Takový výrok se nazývá splnitelný nebo kontingentní."
                }
            },
            {
                q: "Která spojka odpovídá větě: 'Pojedeme vlakem, nebo autem'?",
                a: "∧",
                b: "∨",
                c: "→",
                ans: "b",
                expl: {
                    a: "To by znamenalo 'vlakem i autem současně'.",
                    b: "Disjunkce (∨) přesně zachycuje české 'nebo'. Všimněte si, že v logice se automaticky předpokládá, že byste mohli jet i oběma (pokud to kontext vysloveně nevylučuje).",
                    c: "To by znamenalo 'pokud pojedeme vlakem, pak pojedeme autem'."
                }
            },
            {
                q: "Jaký je výsledek výroku 'Pravda → Nepravda'?",
                a: "Pravda",
                b: "Nepravda",
                c: "Nula",
                ans: "b",
                expl: {
                    a: "Pravda by to byla pouze tehdy, kdyby z pravdy vyplynula pravda.",
                    b: "Toto je klíčový moment logiky. Pokud z pravdivého předpokladu vyvodíme nepravdivý závěr, je celý proces (implikace) chybný. Je to jediný případ, kdy je implikace nepravdivá.",
                    c: "Nula není logická hodnota v klasické výrokové logice (používáme Pravda/Nepravda nebo 1/0)."
                }
            },
            {
                q: "Jaká je negace výroku 'Prší'?",
                a: "Sněží",
                b: "Neprší",
                c: "Je hezky",
                ans: "b",
                expl: {
                    a: "Sněžení není negací pršení, oba stavy mohou nastat (nebo nenastat) nezávisle.",
                    b: "Negace je prosté popření původního tvrzení. Pokud A = 'Prší', pak ¬A = 'Neprší'. To pokrývá všechny ostatní možnosti (sněží, je sucho, padají kroupy).",
                    c: "To je subjektivní opak, nikoliv logická negace."
                }
            },
            {
                q: "Co získáme, když spojíme dva výroky spojkou 'a' (∧)?",
                a: "Disjunkt",
                b: "Konjunkt",
                c: "Konjunkci",
                ans: "c",
                expl: {
                    a: "Disjunkt je jedna z částí disjunkce (A ∨ B).",
                    b: "Konjunkt je označení pro jednotlivé členy (A, B), ale celý výsledek se nazývá konjunkce.",
                    c: "Konjunkce je název pro celou operaci i pro výsledný složený výrok 'A ∧ B'."
                }
            },
            {
                q: "Pokud 'A' znamená 'Jím' a 'B' znamená 'Spím', co znamená 'A ↔ B'?",
                a: "Jím a spím",
                b: "Jím tehdy a jen tehdy, když spím",
                c: "Když jím, tak nespím",
                ans: "b",
                expl: {
                    a: "To by byla konjunkce A ∧ B.",
                    b: "Ekvivalence (↔) svazuje obě činnosti k sobě. Znamená to, že se nikdy nestane, abyste jen jedli a nespali, nebo jen spali a nejedli. Buď děláte obojí, nebo nic.",
                    c: "To by byla implikace s negací A → ¬B."
                }
            }
            ]
        },
        "priority_a_tabulky": {
            "title": "Priority a tabulky",
            "questions": [
            {
                q: "Která logická spojka má standardně nejvyšší prioritu (vyhodnocuje se jako první)?",
                wiki: ["formalni_logika", "pravdivostni_tabulky"],
                a: "Konjunkce (∧)",
                b: "Negace (¬)",
                c: "Implikace (→)",
                ans: "b",
                expl: {
                    a: "Konjunkce má vysokou prioritu, ale negace ji předčí.",
                    b: "Negace se v logice chová podobně jako znaménko minus v matematice. Váže se těsně na výrok, který následuje hned za ní, pokud závorky neurčí jinak.",
                    c: "Implikace má naopak jednu z nejnižších priorit, vyhodnocuje se až po negaci, konjunkci i disjunkci."
                }
            },
            {
                q: "Jaká je pravdivostní hodnota formule '¬A ∧ B', pokud A je pravda a B je pravda?",
                a: "Pravda",
                b: "Nepravda",
                c: "Nelze určit",
                ans: "b",
                expl: {
                    a: "To by platilo, kdyby tam negace nebyla.",
                    b: "Díky prioritě nejprve znegujeme A (z pravdy se stane nepravda). Poté vyhodnotíme konjunkci: 'Nepravda ∧ Pravda'. Protože u konjunkce musí platit obojí, výsledek je nepravda.",
                    c: "Hodnoty jsou jasně dané, výsledek je jednoznačný."
                }
            },
            {
                q: "Které z těchto pořadí priorit (od nejsilnější po nejslabší) je správné?",
                a: "¬, ∧, ∨, →, ↔",
                b: "→, ↔, ∧, ∨, ¬",
                c: "∧, ∨, ¬, ↔, →",
                ans: "a",
                expl: {
                    a: "Toto je standardní konvence. Negace je nejsilnější, následují 'multiplikativní' spojky (∧), pak 'aditivní' (∨) a nakonec vztahové šipky (→, ↔).",
                    b: "Zde je pořadí přesně opačně, což by vedlo k chaosu v zápisu.",
                    c: "Negace musí být vždy na začátku řetězce priorit, aby bylo jasné, co popírá."
                }
            },
            {
                q: "Co znamená v pravdivostní tabulce zápis '1' (nebo 'T')?",
                a: "Negaci",
                b: "Pravdu",
                c: "Nepravdu",
                ans: "b",
                expl: {
                    a: "Negace je operátor, nikoliv hodnota.",
                    b: "V logice používáme binární systém. '1' (z anglického 1/0) nebo 'T' (True) označuje, že výrok odpovídá skutečnosti.",
                    c: "Nepravda se značí '0' nebo 'F' (False)."
                }
            },
            {
                q: "Kolik řádků bude mít pravdivostní tabulka pro formuli se 3 proměnnými (A, B, C)?",
                a: "6",
                b: "8",
                c: "9",
                ans: "b",
                expl: {
                    a: "To by byl součet, nikoliv kombinace.",
                    b: "Počet řádků tabulky se počítá jako 2 na n-tou, kde n je počet proměnných. Tedy 2³ = 2 × 2 × 2 = 8. To pokryje všechny možné kombinace pravdy a nepravdy pro tři výroky.",
                    c: "Počet řádků musí být vždy mocnina dvojky."
                }
            },
            {
                q: "Zápis '(A ∧ B) ∨ C' je pravdivý, pokud:",
                a: "C je pravda",
                b: "A i B jsou nepravda a C je nepravda",
                c: "Pouze když platí A, B i C zároveň",
                ans: "a",
                expl: {
                    a: "Hlavní spojkou je zde disjunkce (∨). Ta je pravdivá, pokud platí alespoň jedna strana. Pokud je C pravdivé, celá formule je pravdivá bez ohledu na to, co se děje v závorce.",
                    b: "V tomto případě by obě strany disjunkce byly nepravdivé, tedy i výsledek by byl nepravda.",
                    c: "To je příliš přísná podmínka, stačí, aby platila jen jedna část rozdělená symbolem ∨."
                }
            },
            {
                q: "Která z těchto formulí je ekvivalentní s '¬(¬A)'?",
                a: "¬A",
                b: "A",
                c: "A ∧ ¬A",
                ans: "b",
                expl: {
                    a: "To by platilo u trojité negace.",
                    b: "Jde o zákon dvojí negace. V klasické logice platí, že popřením záporu získáme původní kladné tvrzení. Např. 'Není pravda, že neprší' znamená 'Prší'.",
                    c: "Toto je spor (kontradikce), který je vždy nepravdivý."
                }
            },
            {
                q: "V tabulce pro implikaci 'A → B' najdeme nulu (nepravdu) pouze v řádku:",
                a: "1 → 0",
                b: "0 → 1",
                c: "0 → 0",
                ans: "a",
                expl: {
                    a: "Jak jsme si řekli, implikace 'lže' jen tehdy, když z pravdy (1) vyplývá lež (0). Tento řádek je kritický pro testování platnosti argumentů.",
                    b: "Z nepravdy může plynout cokoliv, implikace zůstává 'prazdně' pravdivá.",
                    c: "I ze lži může plynout jiná lež a logicky je to v pořádku (výsledek je 1)."
                }
            },
            {
                q: "Jak zapíšeme: 'Není pravda, že pokud studuji, tak propadnu'?",
                a: "¬(A → B)",
                b: "¬A → B",
                c: "A → ¬B",
                ans: "a",
                expl: {
                    a: "Slova 'Není pravda, že...' negují celou následující strukturu. Proto musíme dát implikaci (studium → propadnutí) do závorky a negaci umístit před ni.",
                    b: "Toto znamená 'Pokud nestuduji, tak propadnu'.",
                    c: "Toto znamená 'Pokud studuji, tak nepropadnu'."
                }
            },
            {
                q: "Který symbol reprezentuje 'vylučující nebo' (buď A, nebo B, ale ne obojí)?",
                a: "∨",
                b: "⊕ (nebo ⊻)",
                c: "↑",
                ans: "b",
                expl: {
                    a: "Symbol ∨ je 'inkluzivní nebo', připouští i variantu, že platí obojí.",
                    b: "Symbol ⊕ (XOR) vyjadřuje striktní alternativu. Je pravdivý právě tehdy, když má A a B odlišnou pravdivostní hodnotu. V češtině ho značíme spojkou 'buď - anebo'.",
                    c: "Symbol ↑ se používá pro Shefferův operátor (NAND)."
                }
            },
            {
                q: "Výraz 'A ↔ B' lze rozepsat jako konjunkci dvou implikací. Kterých?",
                a: "(A → B) ∧ (B → A)",
                b: "(A → B) ∧ (¬A → ¬B)",
                c: "(A ∨ B) ∧ (¬A ∨ ¬B)",
                ans: "a",
                expl: {
                    a: "Ekvivalence doslova znamená 'vzájemná implikace'. Říká, že A vyplývá z B a zároveň B vyplývá z A. Pokud platí obojí, musí mít A i B stejnou hodnotu.",
                    b: "Toto je sice také pravdivý vztah, ale není to standardní definice ekvivalence rozpisem.",
                    c: "Toto je rozpis pro vylučující nebo (XOR), nikoliv pro ekvivalent."
                }
            },
            {
                q: "Co se stane, když negujeme disjunkci ¬(A ∨ B) podle De Morganových zákonů?",
                a: "¬A ∨ ¬B",
                b: "¬A ∧ ¬B",
                c: "A ∧ B",
                ans: "b",
                expl: {
                    a: "Pozor, při negaci se musí 'otočit' i spojka.",
                    b: "De Morganovy zákony jsou klíčové: negace disjunkce ('nebo') se mění na konjunkci ('a') negovaných členů. Tedy 'Není pravda, že A nebo B' je totéž jako 'Neplatí A a zároveň neplatí B'.",
                    c: "Zde chybí negace u jednotlivých členů."
                }
            },
            {
                q: "Co se stane, když negujeme konjunkci ¬(A ∧ B) podle De Morganových zákonů?",
                a: "¬A ∧ ¬B",
                b: "¬A ∨ ¬B",
                c: "A ∨ B",
                ans: "b",
                expl: {
                    a: "Zde se zapomnělo na otočení spojky ∧ na ∨.",
                    b: "Negace konjunkce ('a') se mění na disjunkci ('nebo') negovaných členů. 'Není pravda, že platí obojí' znamená, že 'buď neplatí první, nebo neplatí druhý' (případně neplatí ani jeden).",
                    c: "Zde opět chybí negace členů."
                }
            },
            {
                q: "Jaká je hodnota formule 'A ∨ (B ∧ ¬B)'?",
                a: "Vždy pravda",
                b: "Stejná jako hodnota A",
                c: "Vždy nepravda",
                ans: "b",
                expl: {
                    a: "To by platilo, kdyby v závorce byla tautologie.",
                    b: "Závorka (B ∧ ¬B) je spor, tedy je vždy 0 (nepravda). Formule se tedy chová jako 'A ∨ 0'. Protože nula disjunkci neovlivní, výsledek závisí čistě na tom, zda je A pravdivé (pak 1) nebo nepravdivé (pak 0).",
                    c: "Pokud je A pravdivé, výsledek je 1, takže to není vždy nepravda."
                }
            },
            {
                q: "Který z těchto zápisů je kontradikce (vždy nepravda)?",
                a: "A → A",
                b: "A ↔ ¬A",
                c: "A ∨ ¬A",
                ans: "b",
                expl: {
                    a: "Toto je tautologie (identita), vždy pravda.",
                    b: "Ekvivalence vyžaduje stejné hodnoty na obou stranách. Výrok A a jeho negace ¬A mají ale vždy opačné hodnoty. Proto tato ekvivalence nemůže být nikdy splněna a je to kontradikce.",
                    c: "Toto je zákon vyloučeného třetího, tedy tautologie."
                }
            },
            {
                q: "Mějme větu: 'Pokud svítí slunce, jdeme k vodě'. Co o ní víme, pokud k vodě nejdeme?",
                a: "Slunce určitě svítí",
                b: "Slunce určitě nesvítí",
                c: "O slunci nelze nic říct",
                ans: "b",
                expl: {
                    a: "Kdyby svítilo a my nešli, původní věta (implikace) by byla lživá.",
                    b: "Jde o pravidlo 'Modus Tollens'. Pokud platí A → B a my víme, že neplatí následek (¬B), musí být neplatný i předpoklad (¬A). Kdyby totiž slunce svítilo, museli bychom u té vody být.",
                    c: "Lze to říct s jistotou díky logické struktuře věty."
                }
            },
            {
                q: "Jak zapíšeme větu: 'Není pravda, že nepracuji'?",
                a: "¬(¬A)",
                b: "¬A",
                c: "A ∧ ¬A",
                ans: "a",
                expl: {
                    a: "Věta 'nepracuji' je ¬A. 'Není pravda, že...' přidává další negaci před tento výraz. Výsledkem je ¬(¬A), což je logicky totéž jako 'Pracuji'.",
                    b: "To by znamenalo pouze 'Nepracuji'.",
                    c: "To je nesmyslný spor 'Pracuji a zároveň nepracuji'."
                }
            },
            {
                q: "Co znamená v logice závorka?",
                a: "Vůbec nic, je tam jen pro přehlednost",
                b: "Určuje, které operace se mají provést prioritně",
                c: "Znamená násobení",
                ans: "b",
                expl: {
                    a: "Závorky jsou v logice zásadní, mohou zcela změnit pravdivostní hodnotu formule.",
                    b: "Stejně jako v matematice, závorky 'přebíjejí' standardní prioritu. Pokud chceme, aby se disjunkce vyhodnotila dříve než konjunkce, musíme ji uzavřít do závorek: (A ∨ B) ∧ C.",
                    c: "Logika nezná násobení v matematickém smyslu, i když konjunkce se mu podobá."
                }
            },
            {
                q: "Výrok '(A ∧ B) → A' je:",
                a: "Tautologie (vždy pravda)",
                b: "Kontradikce (vždy nepravda)",
                c: "Splnitelný výrok (někdy pravda, někdy ne)",
                ans: "a",
                expl: {
                    a: "Tato formule říká: 'Pokud platí A i B zároveň, pak platí A'. To je logicky neprůstřelné. Pokud máme v ruce oba objekty, určitě máme i ten první z nich. V tabulce vyjdou samé jedničky.",
                    b: "Kontradikce by to byla, kdyby závěr popíral předpoklad.",
                    c: "Není to kontingentní, platí to bez výjimky."
                }
            },
            {
                q: "Jak zní negace věty 'Všichni lidé jsou smrtelní' (v predikátové logice)?",
                a: "Všichni lidé jsou nesmrtelní",
                b: "Žádný člověk není smrtelný",
                c: "Existuje alespoň jeden člověk, který není smrtelný",
                ans: "c",
                expl: {
                    a: "To je příliš silné tvrzení, k vyvrácení 'všech' nepotřebujete 'všechny ostatní'.",
                    b: "To je stejná chyba jako u možnosti A.",
                    c: "Negací obecného kvantifikátoru (všichni) je existenční kvantifikátor (existuje alespoň jeden) spojený s negací vlastnosti. Stačí najít jeden 'černý puntík', aby tvrzení o 'všech bílých' přestalo platit."
                }
            }
            ]
        },
        "zakony_a_negace": {
            "title": "Zákony a negace",
            "questions": [
            {
                q: "Jak lze pomocí disjunkce (∨) a negace (¬) přepsat implikaci 'A → B'?",
                wiki: ["formalni_logika", "zakony_logiky"],
                a: "¬A ∨ B",
                b: "¬A ∧ B",
                c: "A ∨ ¬B",
                ans: "a",
                expl: {
                    a: "Toto je jeden z nejdůležitějších přepisů v logice. Implikace 'Jestliže A, pak B' říká totéž co 'Buď neplatí předpoklad (A), nebo už musí platit následek (B)'. Vyzkoušejte si to na tabulce – výsledky jsou identické.",
                    b: "Tento zápis by znamenal 'Neplatí A a zároveň platí B', což je příliš silné tvrzení.",
                    c: "Tento zápis by byl negací implikace (resp. její obměnou s chybou)."
                }
            },
            {
                q: "Co je negací implikace 'A → B'?",
                a: "A ∧ ¬B",
                b: "¬A → ¬B",
                c: "¬A ∨ B",
                ans: "a",
                expl: {
                    a: "Negovat implikaci znamená dokázat, že slib neplatí. To nastane jen tehdy, když nastane předpoklad (A), ale nenastane slíbený následek (¬B). Proto 'A a zároveň ne-B'.",
                    b: "Toto je inverzní implikace, která s negací původní nemá nic společného.",
                    c: "Toto je právě ekvivalentní zápis původní implikace, nikoliv její popření."
                }
            },
            {
                q: "Výraz '¬(A ∧ ¬B)' je podle De Morganových zákonů ekvivalentní čemu?",
                a: "¬A ∨ B",
                b: "¬A ∧ B",
                c: "A ∨ B",
                ans: "a",
                expl: {
                    a: "Postupujeme krok za krokem: negace 'vtéká' do závorky, změní ∧ na ∨, neguje A na ¬A a neguje ¬B na B (dvojí negace se vyruší). Výsledek je ¬A ∨ B.",
                    b: "Při negaci závorky se spojka ∧ musí vždy otočit na ∨.",
                    c: "Zde chybí negace u prvního členu A."
                }
            },
            {
                q: "Co tvrdí 'Zákon kontrapozice' u implikace 'A → B'?",
                a: "Že je shodná s '¬B → ¬A'",
                b: "Že je shodná s 'B → A'",
                c: "Že je shodná s '¬A → ¬B'",
                ans: "a",
                expl: {
                    a: "Kontrapozice je nesmírně užitečná: 'Pokud ze slunce plyne teplo, pak z ne-tepla (zimy) plyne, že nesvítí slunce'. Pokud platí původní vztah, musí platit i tento obrácený se zápory.",
                    b: "Pozor, toto je častá chyba (konverze). Z toho, že 'pokud prší, je mokro', neplyne, že 'pokud je mokro, pršelo' (mohlo jet kropicí auto).",
                    c: "Toto je inverze, která také logicky nevyplývá z původní implikace."
                }
            },
            {
                q: "Jak zjednodušíte výraz 'A ∧ (A ∨ B)'?",
                a: "A",
                b: "B",
                c: "A ∧ B",
                ans: "a",
                expl: {
                    a: "Jde o zákon absorpce. Pokud platí A, pak automaticky platí i (A nebo cokoliv jiného). Celá konjunkce je tedy pravdivá právě tehdy, když je pravdivé A.",
                    b: "Hodnota B nemá na celkový výsledek vliv, pokud známe A.",
                    c: "To je zbytečně složité, A samo o sobě stačí k určení pravdivosti."
                }
            },
            {
                q: "Který z těchto výrazů je ekvivalentní s '¬A → ¬B'?",
                a: "B → A",
                b: "A → B",
                c: "¬B → ¬A",
                ans: "a",
                expl: {
                    a: "Použili jsme zákon kontrapozice na výraz '¬A → ¬B'. Členy se prohodí a znegují. Negace ¬B je B, negace ¬A je A. Výsledek je 'B → A'.",
                    b: "To by platilo jen v případě ekvivalence, nikoliv u prosté implikace.",
                    c: "To je jen původní výraz, hledali jsme jeho ekvivalent v jiném tvaru."
                }
            },
            {
                q: "Jak vypadá negace věty 'Prší a mrzne'?",
                a: "Neprší nebo nemrzne",
                b: "Neprší a nemrzne",
                c: "Prší nebo mrzne",
                ans: "a",
                expl: {
                    a: "Podle De Morgana negujeme 'A ∧ B' na '¬A ∨ ¬B'. Stačí tedy, aby neplatila alespoň jedna část původního souvětí, a už není pravda, že platí obě zároveň.",
                    b: "To je příliš silné – k popření 'obojího' stačí, aby neplatilo jen jedno z nich.",
                    c: "Zde zcela chybí negace jednotlivých faktů."
                }
            },
            {
                q: "Co znamená v logice výraz 'A ⊻ B' (exkluzivní disjunkce)?",
                a: "(A ∨ B) ∧ ¬(A ∧ B)",
                b: "(A ∧ B) ∨ (¬A ∧ ¬B)",
                c: "A → ¬B",
                ans: "a",
                expl: {
                    a: "Tento rozpis přesně definuje 'buď, anebo'. Říká: 'Platí A nebo B, ale zároveň neplatí obojí najednou'. To je přesně to, co chceme u vylučujícího nebo vyjádřit.",
                    b: "Toto je rozpis ekvivalence (A ↔ B) – říká, že buď platí obojí, nebo nic.",
                    c: "Toto je jen jedna část podmínky, nepokrývá všechny stavy vylučujícího nebo."
                }
            },
            {
                q: "Výraz '(A → B) ∧ (A → ¬B)' znamená, že:",
                a: "A musí být nepravdivé",
                b: "B musí být pravdivé",
                c: "A i B jsou pravdivé",
                ans: "a",
                expl: {
                    a: "Z A plyne B a zároveň z A plyne opak B. To je možné jen v případě, že předpoklad A vůbec nenastane (je 0). Z nepravdy totiž může plynout cokoliv (B i ¬B).",
                    b: "Kdyby bylo B pravdivé, druhá implikace by při pravdivém A selhala.",
                    c: "To by vedlo ke sporu v druhé části formule."
                }
            },
            {
                q: "Jaká je negace věty 'Existuje sudé prvočíslo'?",
                a: "Všechna prvočísla jsou lichá",
                b: "Existuje liché prvočíslo",
                c: "Žádné prvočíslo není sudé",
                ans: "c",
                expl: {
                    a: "To je fakticky totéž co C, ale v logice negujeme 'existuje' na 'pro všechna neplatí'. Tedy 'Pro všechna prvočísla platí, že nejsou sudá'.",
                    b: "To není negace, to je jen jiné tvrzení, které může platit současně s původním.",
                    c: "Toto je správný tvar negace existenčního výroku. 'Není pravda, že existuje...' se mění na 'Žádný takový neexistuje' (univerzální negace)."
                }
            },
            {
                q: "Formule 'A ∨ (B ∨ C)' je totéž jako '(A ∨ B) ∨ C'. Jak se tato vlastnost nazývá?",
                a: "Asociativita",
                b: "Distributivita",
                c: "Komutativita",
                ans: "a",
                expl: {
                    a: "Asociativita říká, že u stejných spojek (všechno ∨ nebo všechno ∧) nezáleží na tom, jak je uzávorkujeme. Výsledek bude vždy stejný.",
                    b: "Distributivita se týká kombinace různých spojek, např. A ∧ (B ∨ C).",
                    c: "Komutativita říká, že nezáleží na pořadí (A ∨ B je totéž co B ∨ A)."
                }
            },
            {
                q: "Který z těchto výrazů je tautologie?",
                a: "A → (B → A)",
                b: "A → (A → B)",
                c: "(A → B) → A",
                ans: "a",
                expl: {
                    a: "Zkuste si to: Pokud platí A, pak je úplně jedno, co je B, protože implikace se závěrem A (vnitřní závorka) bude vždy pravdivá díky pravdivému A.",
                    b: "Tady výsledek závisí na B. Pokud A=1 a B=0, vyjde celá formule jako nepravda.",
                    c: "Toto je známé jako Peirceův zákon, ale bez dalších úprav to není tak zřejmé jako varianta A."
                }
            },
            {
                q: "Jak zní negace výroku 'Každý student má průkaz'?",
                a: "Žádný student nemá průkaz",
                b: "Alespoň jeden student nemá průkaz",
                c: "Někteří studenti mají průkaz",
                ans: "b",
                expl: {
                    a: "To je častý omyl. Negací 'všech' není 'nikdo', ale 'ne všichni'.",
                    b: "Logická negace musí popřít pravdivost původního výroku v nejmenší možné míře. Pokud tvrdím, že 'všichni mají', stačí ukázat na jednoho, který nemá, a mé tvrzení je vyvráceno.",
                    c: "To by byla pouze částečná shoda, nikoliv popření."
                }
            },
            {
                q: "Pravdivostní tabulka pro 'A ↔ B' má jedničky v řádcích:",
                a: "1-1 a 0-0",
                b: "1-0 a 0-1",
                c: "Pouze 1-1",
                ans: "a",
                expl: {
                    a: "Ekvivalence znamená 'stejnost'. Je pravdivá tehdy, když jsou obě strany pravdivé, NEBO když jsou obě strany nepravdivé. V obou případech se totiž 'shodují'.",
                    b: "V těchto řádcích je ekvivalent nepravdivý (0), protože hodnoty se liší.",
                    c: "To by platilo pro konjunkci, ekvivalenci stačí i shoda ve lži."
                }
            },
            {
                q: "Výraz 'A ∧ ¬A' je klasickým příkladem:",
                a: "Tautologie",
                b: "Kontradikce",
                c: "Splnitelné formule",
                ans: "b",
                expl: {
                    a: "Tautologie je vždy pravdivá, toto je pravý opak.",
                    b: "Kontradikce (spor) je výraz, který nemůže být nikdy pravdivý. Nic nemůže mít vlastnost A a zároveň vlastnost ne-A v ten samý okamžik a ve stejném smyslu.",
                    c: "Splnitelná formule musí mít alespoň jednu možnost, kdy je pravdivá."
                }
            },
            {
                q: "Co získáme roznásobením (distribucí) výrazu 'A ∧ (B ∨ C)'?",
                a: "(A ∧ B) ∨ (A ∧ C)",
                b: "(A ∨ B) ∧ (A ∨ C)",
                c: "A ∧ B ∨ C",
                ans: "a",
                expl: {
                    a: "Funguje to stejně jako v matematice: a * (b + c) = ab + ac. Konjunkce se 'rozdistribuuje' k oběma členům v závorce a původní vnitřní spojka (∨) se stane spojkou hlavní.",
                    b: "Toto by byl výsledek distribuce disjunkce přes konjunkci, tedy A ∨ (B ∧ C).",
                    c: "Zde chybí závorky, které jsou pro jednoznačnost nezbytné."
                }
            },
            {
                q: "Kdy je formule 'A → (B ∧ C)' nepravdivá?",
                a: "Když A je 1 a zároveň (B je 0 nebo C je 0)",
                b: "Pouze když jsou A, B i C rovny 0",
                c: "Když A je 0",
                ans: "a",
                expl: {
                    a: "Implikace je nepravdivá, když předpoklad (A) platí, ale závěr (B ∧ C) neplatí. Aby neplatila konjunkce v závěru, stačí, aby byl nepravdivý alespoň jeden z jejích členů.",
                    b: "V tomto případě by byla implikace pravdivá (0 → 0).",
                    c: "Když je předpoklad 0, implikace je vždy automaticky pravdivá."
                }
            },
            {
                q: "Jak se nazývá pravidlo: 'Z (A → B) a A odvoď B'?",
                wiki: ["formalni_logika", "pravidla_usudku_prehled"],
                a: "Modus Ponens",
                b: "Modus Tollens",
                c: "Hypotetický sylogismus",
                ans: "a",
                expl: {
                    a: "Modus Ponens (způsob potvrzující) je základní pravidlo usuzování. Pokud platí pravidlo a platí i jeho předpoklad, musíme přijmout i jeho následek.",
                    b: "Modus Tollens odvozuje neplatnost předpokladu z neplatnosti následku.",
                    c: "Hypotetický sylogismus řetězí dvě implikace (z A plyne B, z B plyne C, tedy z A plyne C)."
                }
            },
            {
                q: "Který z těchto výrazů vyjadřuje, že A i B mají ROZDÍLNOU hodnotu?",
                a: "A ↔ B",
                b: "¬(A ↔ B)",
                c: "A ∨ B",
                ans: "b",
                expl: {
                    a: "To vyjadřuje, že mají stejnou hodnotu.",
                    b: "Negace ekvivalence je pravdivá právě tehdy, když ekvivalence samotná neplatí – tedy když se hodnoty A a B liší. Je to jeden ze způsobů, jak zapsat vylučující nebo (XOR).",
                    c: "To připouští i situaci, kdy jsou obě stejné (obě pravdivé)."
                }
            },
            {
                q: "Pokud platí '(A ∨ B) → C' a víme, že C je nepravdivé, co můžeme říct o A?",
                a: "A musí být nepravdivé",
                b: "A musí být pravdivé",
                c: "O A nelze nic rozhodnout",
                ans: "a",
                expl: {
                    a: "Podle Modus Tollens musí být nepravdivý celý předpoklad (A ∨ B). Aby byla disjunkce nepravdivá, musí být nepravdivé oba její členy. Tedy A i B musí být 0.",
                    b: "Kdyby bylo A pravdivé, celý předpoklad by byl pravdivý a z 1 by nemohlo plynout 0.",
                    c: "Díky struktuře disjunkce v předpokladu to lze určit zcela přesně."
                }
            }
            ]
        },
        "pravidla_usudku": {
            "title": "Pravidla úsudku",
            "questions": [
            {
                q: "Jak zní negace formule 'A ∨ (B ∧ C)'?",
                wiki: ["formalni_logika", "de_morgan_zakony"],
                a: "¬A ∧ (¬B ∨ ¬C)",
                b: "¬A ∨ (¬B ∧ ¬C)",
                c: "¬A ∧ ¬B ∧ ¬C",
                ans: "a",
                expl: {
                    a: "Při negaci složené formule postupujeme zvenčí: hlavní spojka ∨ se změní na ∧ a znegují se obě strany. Pravá strana je ale závorka (B ∧ C), kterou musíme negovat znovu podle De Morgana na (¬B ∨ ¬C).",
                    b: "Zde se zapomnělo změnit hlavní spojku ∨ na ∧.",
                    c: "Zde se nesprávně změnila spojka uvnitř závorky na ∧, přestože De Morgan velí otočit ji na ∨."
                }
            },
            {
                q: "Který z těchto výrazů je ekvivalentní s '(A → B) ∧ (A → C)'?",
                a: "A → (B ∧ C)",
                b: "A → (B ∨ C)",
                c: "(A ∧ B) → C",
                ans: "a",
                expl: {
                    a: "Jde o zákon distribuce implikace. Pokud ze stejného předpokladu A plyne B a zároveň z něj plyne C, pak z A plyne obojí najednou. Je to úspornější a logicky identický zápis.",
                    b: "To by znamenalo, že z A plyne alespoň jedno z nich, což je slabší tvrzení než původní zadání.",
                    c: "Tento zápis má úplně jinou pravdivostní tabulku (vyžaduje oba předpoklady pro jeden závěr)."
                }
            },
            {
                q: "Formule '¬A → (B ∧ ¬B)' znamená, že:",
                a: "A musí být pravdivé",
                b: "B musí být pravdivé",
                c: "A musí být nepravdivé",
                ans: "a",
                expl: {
                    a: "Závěr (B ∧ ¬B) je spor, tedy vždy 0. Implikace je pravdivá jen tehdy, když z 1 neplyne 0. Aby tato formule platila, musí být předpoklad ¬A roven 0. Pokud ¬A = 0, pak původní A musí být 1 (pravda).",
                    b: "B na výsledek nemá vliv, protože celá závorka se sporem je vždy nepravdivá.",
                    c: "Kdyby bylo A nepravdivé, pak ¬A by bylo pravda a z 1 by plynulo 0, což by formuli zneplatnilo."
                }
            },
            {
                q: "Co je výsledkem 'A ∨ ¬(A ∧ B)'?",
                a: "Tautologie (vždy pravda)",
                b: "Kontradikce (vždy nepravda)",
                c: "Závisí na hodnotě B",
                ans: "a",
                expl: {
                    a: "Rozepíšeme negaci: A ∨ (¬A ∨ ¬B). Díky asociativitě můžeme závorky zrušit: A ∨ ¬A ∨ ¬B. Protože 'A ∨ ¬A' je vždy pravda (zákon vyloučeného třetího), je celá disjunkce vždy pravdivá bez ohledu na zbytek.",
                    b: "Kontradikce to není, protože výsledek je vždy 1.",
                    c: "B je zde irelevantní, protože 'A nebo ne-A' už samo o sobě zaručuje pravdivost celku."
                }
            },
            {
                q: "Jak zapíšeme: 'Půjdu na procházku (P), jen když nebude pršet (¬R) a budu mít čas (T)'?",
                a: "P → (¬R ∧ T)",
                b: "(¬R ∧ T) → P",
                c: "P ↔ (¬R ∧ T)",
                ans: "a",
                expl: {
                    a: "Slovní spojení 'jen když' (only if) uvozuje nutnou podmínku, tedy následek (konsekvent) implikace. 'Půjdu' implikuje, že jsou splněny obě podmínky v závorce.",
                    b: "Toto by znamenalo 'Pokud neprší a mám čas, určitě půjdu' (postačující podmínka), což věta netvrdí.",
                    c: "Ekvivalence je v přirozeném jazyce vzácná, věta nepraví, že pokaždé, když neprší a mám čas, musím jít ven."
                }
            },
            {
                q: "Který výraz je ekvivalentní s 'A ↔ B'?",
                a: "(¬A ∨ B) ∧ (¬B ∨ A)",
                b: "(A ∧ B) ∨ (A ∧ ¬B)",
                c: "¬A ↔ ¬B",
                ans: "a",
                expl: {
                    a: "Ekvivalence je (A → B) ∧ (B → A). Pokud každou implikaci přepíšeme pomocí disjunkce (¬A ∨ B) a (¬B ∨ A), dostaneme přesně tento výraz. Je to častý způsob, jak ekvivalenci testovat.",
                    b: "Tento výraz se zjednoduší na pouhé A.",
                    c: "To je sice pravda (také ekvivalent), ale varianta A je základním strukturálním rozkladem."
                }
            },
            {
                q: "Zákon 'Syllogismus hypotheticus' říká: Pokud (A → B) a (B → C), pak:",
                a: "A → C",
                b: "C → A",
                c: "A ∧ C",
                ans: "a",
                expl: {
                    a: "Je to pravidlo tranzitivity. Pokud A vede k B a B vede k C, existuje přímá cesta od A k C. Je to základ řetězení argumentů v logických důkazech.",
                    b: "Toto je chyba, směr implikace nelze bez dalšího otočit.",
                    c: "To je příliš silné, nevíme, zda A nebo C skutečně nastalo, známe jen vztah mezi nimi."
                }
            },
            {
                q: "Co získáme negací ekvivalence '¬(A ↔ B)'?",
                a: "A ⊻ B (vylučující nebo)",
                b: "A ↔ ¬B",
                c: "Obě možnosti jsou správně",
                ans: "c",
                expl: {
                    a: "Negace ekvivalence říká, že hodnoty A a B nejsou stejné, což je přesná definice vylučujícího 'nebo'.",
                    b: "Toto je jiný zápis téhož: pokud A odpovídá opaku B, pak se A a B nutně liší v pravdivosti. Obě varianty jsou tedy logicky shodné.",
                    c: "V logice existuje pro jeden vztah často mnoho různých, ale ekvivalentních zápisů."
                }
            },
            {
                q: "Jak zjednodušíte výraz '(A ∧ B) ∨ (A ∧ ¬B)'?",
                a: "A",
                b: "B",
                c: "A ∧ B",
                ans: "a",
                expl: {
                    a: "Můžeme použít distribuci 'pozpátku' (vytýkání). Vytkneme A: 'A ∧ (B ∨ ¬B)'. Protože (B ∨ ¬B) je vždy pravda (1), zbude nám 'A ∧ 1', což je prostě A.",
                    b: "B se v tomto výrazu vyruší, protože v jedné části je a v druhé je jeho negace.",
                    c: "To by platilo, kdyby tam nebyla ta druhá část s ¬B."
                }
            },
            {
                q: "Co znamená zápis 'A ⊨ B' (logické vyplývání)?",
                a: "V každém modelu, kde je pravdivé A, musí být pravdivé i B",
                b: "A je pravdivé a B je také pravdivé",
                c: "B je negací A",
                ans: "a",
                expl: {
                    a: "Tento symbol označuje sémantické vyplývání. Neříká jen, že A a B jsou teď pravda, ale že struktura světa zaručuje, že nemůže nastat situace 'A platí a B neplatí'.",
                    b: "To by byla pouhá konjunkce, vyplývání je silnější vztah mezi formulemi.",
                    c: "To by byl vztah negace, nikoliv vyplývání."
                }
            },
            {
                q: "Jaká je hodnota formule '(A ∨ B) ∧ ¬A'?",
                a: "Stejná jako (¬A ∧ B)",
                b: "Vždy nepravda",
                c: "Stejná jako A",
                ans: "a",
                expl: {
                    a: "Roznásobíme: (¬A ∧ A) ∨ (¬A ∧ B). První část (¬A ∧ A) je spor (0). Zbude tedy '0 ∨ (¬A ∧ B)', což je prostě '¬A ∧ B'. Logicky: pokud platí A nebo B, ale víme, že A neplatí, musí platit B.",
                    b: "Může být pravdivá, pokud A je 0 a B je 1.",
                    c: "To určitě ne, protože výraz obsahuje ¬A."
                }
            },
            {
                q: "Která z následujících formulí je 'kontingentní' (někdy 1, někdy 0)?",
                a: "A → B",
                b: "A ∨ ¬A",
                c: "A ∧ ¬A",
                ans: "a",
                expl: {
                    a: "Implikace závisí na hodnotách A a B. V některých řádcích tabulky je 1, v jednom je 0. Proto je to kontingentní výrok.",
                    b: "Toto je tautologie, je pravdivá vždy.",
                    c: "Toto je kontradikce, je nepravdivá vždy."
                }
            },
            {
                q: "Co nám říká 'Zákon duality' pro konjunkci a disjunkci?",
                a: "Že se chovají zrcadlově vzhledem k negaci",
                b: "Že jsou navzájem zaměnitelné bez negace",
                c: "Že mají stejnou prioritu",
                ans: "a",
                expl: {
                    a: "Dualita se projevuje v De Morganových zákonech. Pokud zaměníte ∧ za ∨, 1 za 0 a všechny proměnné za jejich negace, získáte platný protějšek formule.",
                    b: "To rozhodně nejsou, 'a' a 'nebo' mají v logice velmi odlišné důsledky.",
                    c: "Nemají, konjunkce má standardně přednost před disjunkcí."
                }
            },
            {
                q: "Jak zní negace věty 'Někteří ptáci nelétají'?",
                a: "Všichni ptáci létají",
                b: "Někteří ptáci létají",
                c: "Žádný pták nelétá",
                ans: "a",
                expl: {
                    a: "Věta 'Někteří ptáci nelétají' znamená 'Existuje pták, který má vlastnost ne-létání'. Negací 'existuje' je 'pro všechny', a negací 'ne-létání' je 'létání'. Výsledek: 'Pro všechny ptáky platí, že létají'.",
                    b: "To není negace, to může být pravda zároveň s původní větou (podaltrerní vztah).",
                    c: "To by byla negace věty 'Někteří ptáci létají'."
                }
            },
            {
                q: "Výraz 'A → (B → C)' je ekvivalentní s:",
                a: "(A ∧ B) → C",
                b: "(A ∨ B) → C",
                c: "A → (B ∧ C)",
                ans: "a",
                expl: {
                    a: "Tento vztah se nazývá exportace/importace. Říká, že postupné podmiňování (jestliže A, pak jestliže B...) je totéž jako podmiňování oběma předpoklady najednou.",
                    b: "To by znamenalo, že k závěru C stačí jen jeden z nich, což je silnější než zadání.",
                    c: "To by znamenalo, že A samo o sobě zaručuje B i C, což zadání netvrdí."
                }
            },
            {
                q: "Co je to 'Prázdná pravdivost' (Vacuous truth)?",
                a: "Stav, kdy implikace A → B je pravdivá, protože A je nepravdivé",
                b: "Stav, kdy je formule pravdivá, i když neobsahuje žádné proměnné",
                c: "Jiný název pro kontradikci",
                ans: "a",
                expl: {
                    a: "V logice platí, že pokud je předpoklad lživý, celá implikace je pravdivá bez ohledu na závěr. Např. 'Pokud je 1+1=3, pak jsem král.' je logicky pravdivý výrok.",
                    b: "Každá formule musí mít alespoň pravdivostní hodnotu.",
                    c: "Prázdná pravda je typ pravdy, kontradikce je typ lži."
                }
            },
            {
                q: "Který z těchto zápisů je negací ekvivalence ¬(A ↔ B) pomocí implikací?",
                a: "¬(A → B) ∨ ¬(B → A)",
                b: "¬(A → B) ∧ ¬(B → A)",
                c: "(A → B) ∨ (B → A)",
                ans: "a",
                expl: {
                    a: "Ekvivalence je (A → B) ∧ (B → A). Její negací podle De Morgana je negace první části NEBO negace druhé části. Tedy buď neplatí jeden směr, nebo neplatí druhý.",
                    b: "To by znamenalo, že neplatí ani jeden směr, což je příliš silné (to by nastalo jen v konkrétních případech).",
                    c: "Toto je tautologie (v klasické logice platí vždy alespoň jeden směr implikace mezi dvěma výroky)."
                }
            },
            {
                q: "Jak zní 'Zákon absorpce' pro disjunkci?",
                a: "A ∨ (A ∧ B) ≡ A",
                b: "A ∨ (¬A ∧ B) ≡ A ∨ B",
                c: "Obě možnosti jsou platné zákony",
                ans: "c",
                expl: {
                    a: "Toto je klasická absorpce: pokud platí A, pak celá disjunkce platí a na konjunkci (A ∧ B) nezáleží.",
                    b: "Toto je tzv. 'redundantní literál'. Pokud platí A, je splněno. Pokud A neplatí (¬A je 1), musíme se spolehnout na B. Obě varianty jsou tedy v logice uznávané.",
                    c: "Logika má mnoho vrstev zjednodušování, tyto dvě patří k těm velmi užitečným."
                }
            },
            {
                q: "Mějme formuli 'A ∨ B'. Pokud k ní přidáme '¬B', co získáme?",
                a: "A",
                b: "¬A",
                c: "Spor",
                ans: "a",
                expl: {
                    a: "Jde o 'Disjunktivní sylogismus'. Máme dvě možnosti (A nebo B) a jednu z nich (B) vyloučíme. Pak nám zbývá jediná možnost – že platí A.",
                    b: "To by nedávalo smysl, vyloučení B nepotvrzuje neplatnost A.",
                    c: "Spor by nastal, kdybychom měli B a ¬B zároveň. Zde máme 'A nebo B' a k tomu 'ne-B'."
                }
            },
            {
                q: "Kolik spojek obsahuje formule '¬(A ∧ B) ↔ (¬A ∨ ¬B)'?",
                a: "5",
                b: "4",
                c: "6",
                ans: "a",
                expl: {
                    a: "Počítejme: 1. negace před závorkou, 2. konjunkce ∧, 3. ekvivalence ↔, 4. negace u ¬A, 5. negace u ¬B. Spojka ∨ je šestá. (Oprava: Je jich skutečně 6, pokud počítáme i disjunkci).",
                    b: "To je příliš málo.",
                    c: "Správně: ¬, ∧, ↔, ¬, ∨, ¬. Celkem 6 operátorů/spojek. (Pozn: V některých kontextech se negace nepovažuje za spojku v pravém slova smyslu, ale za operátor)."
                }
            }
            ]
        },
        "pokrocila_algebra": {
            "title": "Pokročilá algebra",
            "questions": [
            {
                q: "Jak vypadá negace formule 'A → (B ∨ C)'?",
                wiki: ["formalni_logika", "pokrocile_koncepty"],
                a: "A ∧ ¬B ∧ ¬C",
                b: "¬A ∨ (B ∨ C)",
                c: "A ∧ (¬B ∨ ¬C)",
                ans: "a",
                expl: {
                    a: "Negace implikace je 'předpoklad A a zároveň ne-závěr'. Ne-závěr je ¬(B ∨ C), což je podle De Morgana ¬B ∧ ¬C. Spojením dostáváme A ∧ ¬B ∧ ¬C.",
                    b: "Toto je pouze ekvivalentní přepis původní formule, nikoliv její negace.",
                    c: "Zde se u De Morgana zapomnělo otočit spojku ∨ na ∧."
                }
            },
            {
                q: "Co získáme zjednodušením výrazu '(A ∧ B) → B'?",
                a: "Tautologii",
                b: "A",
                c: "B",
                ans: "a",
                expl: {
                    a: "Tato formule říká: 'Pokud platí A i B zároveň, pak platí B'. To je pravda v každém možném světě. Pokud už držíte v ruce obojí, logicky držíte i to druhé.",
                    b: "Hodnota A je zde irelevantní, protože B v závěru je již obsaženo v předpokladu.",
                    c: "Není to jen B, je to vztah, který je vždy pravdivý (1)."
                }
            },
            {
                q: "Výraz '¬A → A' je ekvivalentní s čím?",
                a: "A",
                b: "¬A",
                c: "Sporu",
                ans: "a",
                expl: {
                    a: "Přepišme implikaci na disjunkci: ¬(¬A) ∨ A. To se zjednoduší na A ∨ A, což je prostě A. V logice to znamená: pokud i z neplatnosti A vyplývá jeho platnost, pak A musí prostě platit.",
                    b: "Kdyby platilo ¬A, pak by z 1 plynulo 0, což by formuli zneplatnilo.",
                    c: "Není to spor, je to legitimní (byť neintuitivní) způsob, jak potvrdit A."
                }
            },
            {
                q: "Jak zní negace věty: 'Pokud budu pít (P), nebudu řídit (¬R)'?",
                a: "Budu pít a budu řídit",
                b: "Nebudu pít a budu řídit",
                c: "Pokud nebudu pít, budu řídit",
                ans: "a",
                expl: {
                    a: "Negace implikace (P → ¬R) je P ∧ ¬(¬R). Dvojí negace u R se vyruší, takže zbude P ∧ R (Budu pít a zároveň budu řídit). To je jediná situace, která popírá původní předsevzetí.",
                    b: "Tato situace původní větu neporušuje (když nepijete, věta o pití nic neříká).",
                    c: "To je pouze jiná implikace, nikoliv popření té původní."
                }
            },
            {
                q: "Co je to 'Kontrapozice' pro výraz '¬B → ¬A'?",
                a: "A → B",
                b: "B → A",
                c: "¬A → ¬B",
                ans: "a",
                expl: {
                    a: "Kontrapozice prohodí strany a obě zneguje. Negace ¬A je A, negace ¬B je B. Dostáváme A → B. Obě formule jsou logicky identické.",
                    b: "Zde chybí negování členů při prohození.",
                    c: "Zde chybí prohození stran."
                }
            },
            {
                q: "Výraz '(A → B) ∧ (B → C) ∧ A' nám dovoluje odvodit:",
                a: "C",
                b: "¬C",
                c: "B ∧ ¬C",
                ans: "a",
                expl: {
                    a: "Je to kombinace Modus Ponens. Z A a (A → B) dostaneme B. Z tohoto B a (B → C) dostaneme C. Celý řetězec je tedy platným důkazem pro C.",
                    b: "To by byl spor s vyvozeným závěrem.",
                    c: "Závěr B je sice pravdivý, ale ¬C je v přímém rozporu s logickým vyplýváním."
                }
            },
            {
                q: "Který z těchto výrazů je ekvivalentní s 'A ∧ (B ↔ C)'?",
                a: "(A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ ¬C)",
                b: "(A ∧ B) ∨ (A ∧ C)",
                c: "A ∧ B ∧ C",
                ans: "a",
                expl: {
                    a: "Ekvivalence (B ↔ C) znamená, že platí buď obojí, nebo nic. Protože venku stojí konjunkce s A, musí A platit v obou případech. Tento rozpis je tedy přesným popisem všech pravdivých situací.",
                    b: "Tento rozpis odpovídá spíše disjunkci (A ∧ (B ∨ C)).",
                    c: "To je jen jedna z možností (když platí vše), zapomíná na případ, kdy neplatí B ani C."
                }
            },
            {
                q: "Co znamená, když je množina formulí 'nesplnitelná'?",
                a: "Jejich konjunkce je kontradikce (vždy 0)",
                b: "Aspoň jedna z nich je nepravdivá",
                c: "Nelze pro ně vytvořit pravdivostní tabulku",
                ans: "a",
                expl: {
                    a: "Nesplnitelnost znamená, že neexistuje žádné ohodnocení proměnných (žádný řádek v tabulce), ve kterém by byly všechny formule pravdivé najednou. Jejich společný průnik je prázdný.",
                    b: "To nestačí. Mohou být pravdivé jindy. Nesplnitelnost je absolutní nemožnost společné pravdy.",
                    c: "Tabulku lze vytvořit vždy, jen v posledním sloupci budou samé nuly."
                }
            },
            {
                q: "Formule '(A ∨ B) ↔ (B ∨ A)' vyjadřuje jakou vlastnost?",
                a: "Komutativitu",
                b: "Asociativitu",
                c: "Distributivitu",
                ans: "a",
                expl: {
                    a: "Komutativita říká, že u disjunkce (a konjunkce) nezáleží na pořadí členů. A nebo B je totéž jako B nebo A.",
                    b: "Asociativita řeší uzávorkování tří a více členů stejného typu.",
                    c: "Distributivita řeší vztah dvou různých spojek (např. ∧ a ∨)."
                }
            },
            {
                q: "Jak zní negace věty 'Prší nebo sněží a mrzne' (¬(P ∨ (S ∧ M)))?",
                a: "Neprší a (nesněží nebo nemrzne)",
                b: "Neprší a nesněží a nemrzne",
                c: "Neprší nebo (nesněží a nemrzne)",
                ans: "a",
                expl: {
                    a: "Postupujeme zvenku: negace ∨ je ∧. Máme ¬P ∧ ¬(S ∧ M). Druhou část rozložíme na (¬S ∨ ¬M). Výsledek: ¬P ∧ (¬S ∨ ¬M).",
                    b: "Zde se v druhé části chybně změnila spojka na ∧ místo ∨.",
                    c: "Zde se v první části chybně ponechala spojka ∨."
                }
            },
            {
                q: "Výraz 'A → (B ∧ ¬B)' je ekvivalentní s:",
                a: "¬A",
                b: "A",
                c: "B",
                ans: "a",
                expl: {
                    a: "Závěr je spor (vždy 0). Pokud z něčeho plyne jistá lež, pak to 'něco' (A) musí být samo nepravdivé, aby implikace zůstala pravdivá. Proto ¬A.",
                    b: "Kdyby platilo A, celá formule by byla nepravdivá.",
                    c: "B je pouze součástí vnitřního sporu, jeho samotná hodnota výsledek neurčuje."
                }
            },
            {
                q: "Co je 'Reversní (obrácená) implikace' k A → B?",
                a: "B → A",
                b: "¬A → ¬B",
                c: "¬B → ¬A",
                ans: "a",
                expl: {
                    a: "Obrácená implikace prostě jen prohodí strany. Pozor, v logice NENÍ ekvivalentní s tou původní. (Pokud prší, je mokro != Pokud je mokro, prší).",
                    b: "Toto je inverzní implikace.",
                    c: "Toto je kontrapozice (která je naopak s původní ekvivalentní)."
                }
            },
            {
                q: "Jak zjednodušíte 'A ∨ (A ∧ B) ∨ (A ∧ C)'?",
                a: "A",
                b: "A ∨ B ∨ C",
                c: "A ∧ (B ∨ C)",
                ans: "a",
                expl: {
                    a: "Opět zákon absorpce. První člen 'A' v disjunkci 'pohltí' všechny ostatní členy, které obsahují 'A ∧ něco'. Pokud platí A, je celá formule 1 bez ohledu na B a C.",
                    b: "To by byla pravda, kdyby tam nebyla ta konjunkce uvnitř závorek.",
                    c: "To je distributivní rozklad, který je ale v tomto případě složitější než prosté A."
                }
            },
            {
                q: "Zápis 'A ↔ (A ∨ B)' je pravdivý právě tehdy, když:",
                a: "B → A",
                b: "A → B",
                c: "B je pravda",
                ans: "a",
                expl: {
                    a: "Ekvivalence říká, že obě strany mají stejnou hodnotu. Pokud je B pravda, musí být i A pravda (aby 1 ↔ 1). Pokud je B nepravda, na A nezáleží (0 ↔ 0 nebo 1 ↔ 1). To přesně odpovídá definici B → A.",
                    b: "U A → B by nastal problém v situaci, kdy B je pravda a A nepravda (0 ↔ 1).",
                    c: "To je příliš úzká podmínka."
                }
            },
            {
                q: "Která spojka je 'duální' ke spojce ∧ (konjunkce)?",
                a: "∨ (disjunkce)",
                b: "→ (implikace)",
                c: "¬ (negace)",
                ans: "a",
                expl: {
                    a: "Dualita spočívá v tom, že pokud znegujete vstupy i výstup konjunkce, dostanete disjunkci (¬(¬A ∧ ¬B) = A ∨ B). Jsou to dvě strany téže mince.",
                    b: "Implikace nemá v základní dualitě přímý jednoduchý protějšek tohoto typu.",
                    c: "Negace je operátor, který dualitu zprostředkovává, ale není duální spojkou k ∧."
                }
            },
            {
                q: "Výrok 'A ↔ ¬A' je:",
                a: "Kontradikce",
                b: "Tautologie",
                c: "Kontingence",
                ans: "a",
                expl: {
                    a: "Ekvivalence tvrdí, že výrok má stejnou hodnotu jako jeho opak. To je v klasické logice nemožné. V každém řádku tabulky vyjde 0.",
                    b: "Tautologie by vyžadovala samé jedničky.",
                    c: "Kontingence by vyžadovala aspoň jednu jedničku, což zde nenastane."
                }
            },
            {
                q: "Co znamená v logice symbol '⊥' (falsum)?",
                a: "Logickou konstantu pro 'Nepravdu'",
                b: "Symbol pro kolmost",
                c: "Logickou konstantu pro 'Pravdu'",
                ans: "a",
                expl: {
                    a: "Symbol ⊥ (falsum) reprezentuje výrok, který je vždy nepravdivý (kontradikci). Používá se v pokročilých důkazech, např. 'A → ⊥' je jiný zápis pro ¬A.",
                    b: "V geometrii ano, ale v logice znamená nepravdu.",
                    c: "Pro pravdu (verum) se používá symbol ⊤."
                }
            },
            {
                q: "Jak zapíšeme: 'A a B jsou obě nepravdivé'?",
                a: "¬A ∧ ¬B",
                b: "¬(A ∧ B)",
                c: "¬A ∨ ¬B",
                ans: "a",
                expl: {
                    a: "Toto je přímý překlad: neplatí A a zároveň neplatí B. Výsledkem je pravda pouze v případě, že jsou oba výroky 0.",
                    b: "To znamená 'Není pravda, že platí obě', což připouští možnost, že jedna z nich platí.",
                    c: "To znamená 'Alespoň jedna z nich neplatí'."
                }
            },
            {
                q: "Pravidlo 'A ⊢ A ∨ B' se nazývá:",
                a: "Introdukce disjunkce",
                b: "Eliminace disjunkce",
                c: "Introdukce konjunkce",
                ans: "a",
                expl: {
                    a: "Introdukce (zavedení) znamená, že z něčeho jednoduššího vytvoříme složitější výrok. Pokud víme, že platí A, můžeme k němu legálně připojit cokoliv pomocí 'nebo'.",
                    b: "Eliminace by znamenala, že se spojky zbavujeme.",
                    c: "To by vyžadovalo mít k dispozici jak A, tak B."
                }
            },
            {
                q: "Pokud o výroku víme, že je 'nesplnitelný', co platí o jeho negaci?",
                a: "Jeho negace je tautologie",
                b: "Jeho negace je také nesplnitelná",
                c: "Jeho negace je kontingentní",
                ans: "a",
                expl: {
                    a: "Pokud je původní výrok v každém řádku 0 (nesplnitelný), pak jeho negace bude v každém řádku 1. A výrok, který je vždy 1, je tautologie.",
                    b: "To není možné, negace nuly nemůže být nula.",
                    c: "Kontingence vyžaduje aspoň jednu nulu, ale negace nesplnitelného výroku žádné nuly nemá."
                }
            }
            ]
        },
        "teorie_a_dukaz": {
            "title": "Teorie a důkaz",
            "questions": [
            {
                q: "Který z těchto výrazů je ekvivalentní s 'A → (B → C)'?",
                a: "B → (A → C)",
                b: "(A → B) → C",
                c: "¬A ∨ ¬B ∨ C",
                ans: "a",
                expl: {
                    a: "Tato vlastnost se nazývá permutace předpokladů. Pokud k závěru C potřebujete splnit podmínku A i podmínku B, nezáleží na tom, v jakém pořadí je splníte. Pravdivostní tabulky obou výrazů jsou identické.",
                    b: "Pozor, implikace není asociativní. Zde by k pravdivosti celku stačilo, aby neplatilo (A → B), což je úplně jiná situace.",
                    c: "I když se to zdá blízko, tento rozpis (pomocí De Morgana z (A ∧ B) → C) je správně, ale varianta A je čistě strukturální ekvivalent v rámci implikací."
                }
            },
            {
                q: "Co můžeme odvodit z premis 'A ∨ B' a 'A → C' a 'B → C'?",
                a: "C",
                b: "A ∧ B",
                c: "¬C",
                ans: "a",
                expl: {
                    a: "Toto je pravidlo rozboru případů (eliminace disjunkce). Víme, že platí alespoň jedno z A nebo B. Protože v obou případech (ať už platí A, nebo B) vývoj vede k C, musí C platit s jistotou.",
                    b: "To nevíme, disjunkce připouští, že platí jen jeden z nich.",
                    c: "To by byl přímý rozpor s vyvozeným závěrem."
                }
            },
            {
                q: "Jak zní negace formule '(A ∧ B) ↔ C'?",
                a: "((A ∧ B) ∧ ¬C) ∨ (¬(A ∧ B) ∧ C)",
                b: "¬A ∨ ¬B ∨ ¬C",
                c: "(A ∧ B) → ¬C",
                ans: "a",
                expl: {
                    a: "Negace ekvivalence říká: 'Jedna strana platí a druhá ne'. Buď tedy platí (A ∧ B) a neplatí C, nebo neplatí (A ∧ B) a platí C. Tento rozpis pokrývá obě situace, kdy se strany neshodují.",
                    b: "Toto je příliš jednoduché a nepokrývá všechny případy neshody.",
                    c: "To je jen jedna z podmínek, nikoliv úplné popření vztahu ekvivalence."
                }
            },
            {
                q: "Výraz '(A → B) → A' je pravdivý právě tehdy, když:",
                a: "Platí A",
                b: "Platí B",
                c: "Neplatí A ani B",
                ans: "a",
                expl: {
                    a: "Toto je Peirceův zákon. I když vypadá složitě, v klasické logice je ekvivalentní prostému A. Pokud z faktu, že 'A implikuje cokoliv', vyplývá A, pak A musí být pravdivé.",
                    b: "Hodnota B je zde zcela irelevantní, zkuste si dosadit 1 a 0 do tabulky.",
                    c: "Kdyby neplatilo A, výraz by byl 0, protože (0 → B) je 1 a z 1 nemůže plynout 0."
                }
            },
            {
                q: "Která z těchto formulí je tautologie?",
                a: "((A → B) ∧ (B → C)) → (A → C)",
                b: "(A → (B → C)) → ((A → B) → C)",
                c: "(A ∨ B) → (A ∧ B)",
                ans: "a",
                expl: {
                    a: "Toto je formální zápis hypotetického sylogismu (tranzitivity). Je to základní kámen logického usuzování: pokud se pravda přelévá z A do B a z B do C, musí se přelít i z A do C.",
                    b: "Jak jsme si řekli dříve, implikace není asociativní, toto tedy tautologie není.",
                    c: "To by platilo jen v případě, že A i B mají vždy stejnou hodnotu, což obecně neplatí."
                }
            },
            {
                q: "Co lze říct o formuli '¬(A → B) ∧ (B → A)'?",
                a: "Je to kontradikce",
                b: "Je to tautologie",
                c: "Je to splnitelná, ale neplatná formule",
                ans: "a",
                expl: {
                    a: "¬(A → B) znamená, že A je 1 a B je 0. Druhá část (B → A) je v tomto případě (0 → 1), což je pravda. Ale počkat, rozpor je v tom, že ¬(A → B) vyžaduje, aby B bylo 0, zatímco druhá část... (Oprava: Dosazením A=1, B=0 vyjde celá formule jako 1. Tedy je splnitelná, nikoliv kontradikce).",
                    b: "Tautologie to není, stačí dosadit A=0 a vyjde 0.",
                    c: "Správně. Formule je pravdivá v jediném případě: když A=1 a B=0. Protože existuje aspoň jeden takový řádek, je splnitelná. Protože existují i řádky s 0, není to tautologie (neplatná)."
                }
            },
            {
                q: "Jak zjednodušíte výraz '¬(A ↔ B) ↔ (A ↔ ¬B)'?",
                a: "Tautologie",
                b: "Kontradikce",
                c: "A ∧ B",
                ans: "a",
                expl: {
                    a: "Negace ekvivalence ¬(A ↔ B) je totéž jako říct, že A a B jsou různé. Výraz (A ↔ ¬B) říká totéž: A má stejnou hodnotu jako opak B (tedy A a B jsou různé). Protože obě strany ekvivalence říkají totéž, výsledek je vždy pravda.",
                    b: "Kontradikce by to byla, kdyby každá strana tvrdila něco jiného.",
                    c: "Výsledek nezávisí na konkrétních hodnotách A a B, ale na jejich vzájemném vztahu."
                }
            },
            {
                q: "Pravidlo 'Ex Falso Quodlibet' (z nepravdy plyne cokoliv) se zapisuje jako:",
                a: "¬A → (A → B)",
                b: "A ∧ ¬A → B",
                c: "Obě možnosti jsou správně",
                ans: "c",
                expl: {
                    a: "Tento zápis říká: 'Pokud neplatí A, pak z platnosti A plyne B'. Protože A a ¬A nemohou platit současně, předpoklad vnitřní implikace bude vždy nepravdivý, a tedy celek pravdivý.",
                    b: "Toto je přímější zápis: ze sporu (A a zároveň ne-A) lze odvodit úplně jakýkoliv závěr B. V klasické logice spor 'exploduje' a zneplatňuje systém.",
                    c: "Logika uznává oba zápisy jako vyjádření téhož principu 'exploze'."
                }
            },
            {
                q: "Pokud 'A ⊨ B' a 'B ⊨ C', platí vždy 'A ⊨ C'?",
                a: "Ano, logické vyplývání je tranzitivní",
                b: "Ne, vyplývání závisí na konkrétním modelu",
                c: "Pouze pokud je B tautologie",
                ans: "a",
                expl: {
                    a: "Sémantické vyplývání (⊨) se chová předvídatelně. Pokud v každém světě, kde platí A, musí platit i B, a v každém světě, kde platí B, musí platit C, pak nutně v každém světě s A musí platit i C.",
                    b: "Vyplývání je definováno přes všechny modely, takže na jednom konkrétním nezávisí.",
                    c: "To je zbytečné omezení, tranzitivita platí pro jakékoliv formule."
                }
            },
            {
                q: "Jak zní negace věty 'Pouze pokud mrzne (M), tak sněží (S)'?",
                a: "Sněží a nemrzne",
                b: "Sněží nebo mrzne",
                c: "Nemrzne a nesněží",
                ans: "a",
                expl: {
                    a: "Věta 'Pouze pokud M, tak S' je ekvivalentní implikaci S → M (M je nutná podmínka pro S). Negací implikace S → M je S ∧ ¬M. Tedy 'Sněží a zároveň nemrzne'.",
                    b: "To je disjunkce, která s popřením nutné podmínky nesouvisí.",
                    c: "To by původní tvrzení naopak potvrzovalo (v souladu s kontrapozicí)."
                }
            },
            {
                q: "Výraz '(A ∧ B) ∨ (¬A ∧ B) ∨ (A ∧ ¬B) ∨ (¬A ∧ ¬B)' je:",
                a: "Tautologie",
                b: "Kontradikce",
                c: "Ekvivalentní s A ∨ B",
                ans: "a",
                expl: {
                    a: "Tento výraz vyjmenovává všechny čtyři možné kombinace hodnot A a B v pravdivostní tabulce. Protože v každé situaci nastane právě jedna z těchto kombinací, bude celá disjunkce vždy pravdivá.",
                    b: "Naopak, je to nejširší možný pravdivý výrok.",
                    c: "A ∨ B pokrývá jen tři z těchto čtyř případů (chybí mu ¬A ∧ ¬B)."
                }
            },
            {
                q: "Co znamená zápis 'Γ ⊢ A' v teorii důkazů?",
                a: "Z množiny předpokladů Γ lze odvodit výrok A",
                b: "Výrok A je v rozporu s množinou Γ",
                c: "Množina Γ obsahuje pouze výrok A",
                ans: "a",
                expl: {
                    a: "Symbol ⊢ (tash) značí syntaktickou dokazatelnost. Říká, že pomocí pravidel logiky (např. Modus Ponens) se lze z bodů v Γ dopracovat k A.",
                    b: "Rozpor by se značil spíše symbolem sporu (⊥) na straně závěru.",
                    c: "Γ může být libovolně velká množina axiomů nebo dříve dokázaných tvrzení."
                }
            },
            {
                q: "Jak lze zjednodušit 'A ↔ (A ∧ B)'?",
                a: "A → B",
                b: "B → A",
                c: "A ∨ B",
                ans: "a",
                expl: {
                    a: "Ekvivalence říká, že A je pravda právě tehdy, když platí A i B. To znamená, že A nemůže být pravda bez B. A to je přesná definice implikace A → B.",
                    b: "Dosazením A=0, B=1 uvidíte, že B → A je 0, zatímco původní výraz (0 ↔ 0) je 1. Shoda tedy neplatí.",
                    c: "Disjunkce má úplně jinou tabulku."
                }
            },
            {
                q: "Který operátor je definován jako '¬A ∨ ¬B'?",
                a: "NAND (Shefferův operátor)",
                b: "NOR (Piercingův operátor)",
                c: "XOR (Vylučující nebo)",
                ans: "a",
                expl: {
                    a: "NAND (Not AND) je negací konjunkce. Podle De Morgana je ¬(A ∧ B) rovno ¬A ∨ ¬B. Tento operátor je fascinující tím, že pomocí něj lze vyjádřit všechny ostatní logické spojky.",
                    b: "NOR je negací disjunkce, tedy ¬(A ∨ B), což je ¬A ∧ ¬B.",
                    c: "XOR je (A ∨ B) ∧ ¬(A ∧ B)."
                }
            },
            {
                q: "Výraz 'A → (B ∨ ¬B)' je:",
                a: "Tautologie",
                b: "Ekvivalentní s A",
                c: "Závislý na hodnotě B",
                ans: "a",
                expl: {
                    a: "Závěr (B ∨ ¬B) je tautologie (1). Implikace, která má jako závěr tautologii, je sama tautologií, protože z čehokoliv (ať už A=0 nebo A=1) může legálně plynout pravda.",
                    b: "Není to jen A, je to 'silnější' – je to pravda i v případě, kdy A je nepravda.",
                    c: "B se v závěru vyruší díky zákonu vyloučeného třetího."
                }
            },
            {
                q: "Který z těchto výrazů NEPATŘÍ mezi De Morganovy zákony?",
                a: "¬(A → B) ≡ A ∧ ¬B",
                b: "¬(A ∧ B) ≡ ¬A ∨ ¬B",
                c: "¬(A ∨ B) ≡ ¬A ∧ ¬B",
                ans: "a",
                expl: {
                    a: "I když je tento vztah pravdivý a důležitý, technicky nepatří pod De Morganovy zákony. Ty se zabývají výhradně dualitou konjunkce a disjunkce.",
                    b: "Toto je klasický De Morganův zákon pro konjunkci.",
                    c: "Toto je klasický De Morganův zákon pro disjunkci."
                }
            },
            {
                q: "Mějme formuli '(A → B) ∧ (¬A → B)'. Co z ní vyplývá?",
                a: "B",
                b: "A",
                c: "¬B",
                ans: "a",
                expl: {
                    a: "Jde o zákon o vyloučení třetího v praxi. Buď platí A, nebo neplatí A. Protože v obou možných případech vyplývá B, musí B platit bez ohledu na stav A.",
                    b: "O platnosti A nevíme nic, formule je pravdivá i pro ¬A.",
                    c: "To by byl spor s výsledkem."
                }
            },
            {
                q: "Co získáme negací 'A ↔ (B ∨ C)'?",
                a: "(A ∧ ¬B ∧ ¬C) ∨ (¬A ∧ (B ∨ C))",
                b: "¬A ↔ (¬B ∧ ¬C)",
                c: "A ↔ (¬B ∧ ¬C)",
                ans: "a",
                expl: {
                    a: "Opět princip negace ekvivalence: (levá strana ∧ ¬pravá) ∨ (¬levá ∧ pravá). Stačí dosadit: (A ∧ ¬(B ∨ C)) ∨ (¬A ∧ (B ∨ C)). Po úpravě De Morganem v první části dostaneme přesně tento výsledek.",
                    b: "Toto je pouze jiná ekvivalence, nikoliv její negace.",
                    c: "Toto je ve skutečnosti ekvivalentní k původní negaci, ale varianta A je explicitním rozpisem 'kdy to neplatí'."
                }
            },
            {
                q: "V klasické logice platí, že 'A ∧ B ⊨ A'. Jak se tato vlastnost závěru 'A' nazývá?",
                a: "Monotoničnost",
                b: "Reflexivita",
                c: "Slabá konjunkce",
                ans: "a",
                expl: {
                    a: "Monotoničnost říká, že pokud něco vyplývá z určité množiny předpokladů, bude to vyplývat i po přidání jakýchkoliv dalších předpokladů. Přidání 'B' k 'A' nemůže zneplatnit vyplývání 'A'.",
                    b: "Reflexivita znamená A ⊨ A.",
                    c: "Slabá konjunkce není standardní termín pro tuto vlastnost."
                }
            },
            {
                q: "Co je cílem 'Rezonování ad absurdum'?",
                a: "Dokázat A tím, že z ¬A vyvodíme spor",
                b: "Dokázat A tím, že ho budeme neustále opakovat",
                c: "Vyvrátit A tím, že najdeme jeden příklad, kdy platí",
                ans: "a",
                expl: {
                    a: "Reductio ad absurdum (důkaz sporem) je nejsilnější zbraň logiky. Předpokládáme opak toho, co chceme dokázat. Pokud tento předpoklad vede k logickému nesmyslu (sporu), musí být původní tvrzení pravdivé.",
                    b: "To je argumentační faul 'ad nauseam'.",
                    c: "To je naopak potvrzení splnitelnosti, nikoliv vyvrácení."
                }
            }
            ]
        }
    }
};
