window. data_logika_FormalniLogika = {
    "quizTitle": "Logika: Formální Logika",
    "questions": [
        {
            q: "Co ve formální logice nejčastěji zastupují písmena jako P, Q nebo A, B?",
            a: "Celé věty (výroky), které jsou buď pravdivé, nebo nepravdivé.", b: "Náhodná čísla.", c: "Jména slavných logiků.",
            ans: "a",
            expl: {
                a: "Písmena jsou 'zkratky' za tvrzení typu 'Prší' nebo 'Sókratés je člověk'.",
                b: "K práci s čísly slouží matematika, logika pracuje s pravdivostí tvrzení.",
                c: "Jména se v zápisu nepoužívají, logika je abstraktní."
            }
        },
        {
            q: "Jak se nazývá symbol '¬' (někdy psaný jako '~') a co znamená?",
            a: "Konjunkce (a zároveň)", b: "Negace (není pravda, že...)", c: "Implikace (jestliže... pak)",
            ans: "b",
            expl: {
                a: "Konjunkce má jiný symbol (∧).",
                b: "Tento háček prostě otočí pravdivost věty na opak.",
                c: "Implikace se značí šipkou (→)."
            }
        },
        {
            q: "Symbol '∧' připomíná stříšku nebo velké 'A'. Co znamená?",
            a: "Nebo (disjunkce)", b: "A zároveň (konjunkce)", c: "Rovná se",
            ans: "b",
            expl: {
                a: "Pro 'nebo' se používá symbol '∨', který vypadá jako písmeno 'v'.",
                b: "Mnemotechnická pomůcka: 'A' jako 'And' (anglicky 'a'). Musí platit obě části najednou.",
                c: "Rovnost nebo ekvivalence má symbol '↔' nebo '≡'."
            }
        },
        {
            q: "Symbol '∨' vypadá jako rozevřený kalich. Co vyjadřuje?",
            a: "Disjunkci (nebo)", b: "Negaci (ne)", c: "Vyloučení",
            ans: "a",
            expl: {
                a: "V logice to znamená, že platí alespoň jedna z možností (nebo obě).",
                b: "Negace je háček před písmenem.",
                c: "Vyloučení (buď, anebo) se značí speciálním symbolem, '∨' je mírnější."
            }
        },
        {
            q: "Pokud 'P' znamená 'Venku prší', co znamená zápis '¬P'?",
            a: "Venku sněží.", b: "Není pravda, že venku prší.", c: "Venku je hezky.",
            ans: "b",
            expl: {
                a: "Logika neví o sněhu, jen o popření deště.",
                b: "Negace pouze popírá původní výrok, neříká, co se děje místo toho.",
                c: "To je interpretace, logicky je to jen 'ne-P'."
            }
        },
        {
            q: "Mějme P = 'Jím' a Q = 'Piju'. Jak zapíšeme 'Jím a zároveň piju'?",
            a: "P ∨ Q", b: "P ∧ Q", c: "P → Q",
            ans: "b",
            expl: {
                a: "To by znamenalo, že dělám alespoň jedno z toho (možná jen jím).",
                b: "Stříška spojuje obě činnosti do jednoho celku.",
                c: "Šipka by znamenala, že když jím, tak z toho vyplývá, že piju."
            }
        },
        {
            q: "Jak se čte symbol '→' v logické větě 'P → Q'?",
            a: "P, právě když Q", b: "Jestliže P, pak Q", c: "P a zároveň Q",
            ans: "b",
            expl: {
                a: "To je ekvivalence (obousměrná šipka).",
                b: "Šipka ukazuje směr vyplývání – z předpokladu k následku.",
                c: "To je konjunkce (stříška)."
            }
        },
        {
            q: "Co vyjadřuje symbol obousměrné šipky '↔'?",
            a: "Ekvivalenci (P platí tehdy a jen tehdy, když platí Q)", b: "Rozpor (P se tluče s Q)", c: "Možnost",
            ans: "a",
            expl: {
                a: "Obě strany musí mít vždy stejnou pravdivostní hodnotu.",
                b: "Rozpor nemá vlastní jednoduchou šipku.",
                c: "Možnost řeší modální logika jinými symboly."
            }
        },
        {
            q: "K čemu slouží v logických zápisech závorky, např. ¬(P ∧ Q)?",
            a: "Pro ozdobu.", b: "Určují prioritu – co se má vyhodnotit jako celek.", c: "Označují šeptanou část věty.",
            ans: "b",
            expl: {
                a: "V logice má každý znak svůj přísný účel.",
                b: "Podobně jako v matematice říkají, na co se vztahuje negace nebo jiná spojka.",
                c: "Logika neřeší hlasitost ani emoce, jen pravdu."
            }
        },
        {
            q: "Pokud je výrok P pravdivý, jakou hodnotu má výrok ¬P?",
            a: "Pravda", b: "Nepravda", c: "Nula",
            ans: "b",
            expl: {
                a: "Negace pravdu vždy obrací.",
                b: "Opakem pravdy je v klasické logice vždy nepravda.",
                c: "Nula se používá v matematickém zápisu, ale logicky je to nepravda."
            }
        },
        {
            q: "Kdy je výrok 'P ∧ Q' (P a Q) pravdivý?",
            a: "Když je pravdivý alespoň jeden z nich.", b: "Jen když jsou pravdivé oba současně.", c: "Když je jeden z nich nepravdivý.",
            ans: "b",
            expl: {
                a: "To by platilo pro 'nebo' (∨).",
                b: "Spojka 'a' je přísná – vyžaduje pravdu na obou stranách.",
                c: "Pokud je jeden nepravdivý, celý 'balíček' je nepravdivý."
            }
        },
        {
            q: "Kdy je výrok 'P ∨ Q' (P nebo Q) nepravdivý?",
            a: "Když jsou oba nepravdivé.", b: "Když je jeden z nich pravdivý.", c: "Nikdy, vždycky je to pravda.",
            ans: "a",
            expl: {
                a: "Stačí jedna pravda a 'nebo' platí. Aby neplatilo, musí selhat oba.",
                b: "Pokud je jeden pravdivý, celé 'nebo' je už zachráněno.",
                c: "Výrok může být nepravdivý, pokud jsou obě možnosti lživé."
            }
        },
        {
            q: "Jak se v logice nazývá výrok, který je vždy pravdivý (např. P ∨ ¬P)?",
            a: "Kontradikce", b: "Tautologie", c: "Axiom",
            ans: "b",
            expl: {
                a: "Kontradikce je výrok, který je vždy nepravdivý.",
                b: "Tautologie (např. 'Prší, nebo neprší') platí za všech okolností.",
                c: "Axiom je základní předpoklad, tautologie je vlastnost složeného výroku."
            }
        },
        {
            q: "Co znamená výraz 'P ≡ Q'?",
            a: "P je definováno jako Q (jsou identické).", b: "P je větší než Q.", c: "P popírá Q.",
            ans: "a",
            expl: {
                a: "Tři čárky znamenají logickou identitu nebo ekvivalenci.",
                b: "Logika nepoužívá 'větší/menší' pro výroky.",
                c: "To by byl zápis P ∧ ¬Q."
            }
        },
        {
            q: "Představ si P='Svítí slunce'. Jak zapíšeš 'Není pravda, že nesvítí slunce'?",
            a: "¬P", b: "¬¬P", c: "P ∧ P",
            ans: "b",
            expl: {
                a: "To je jen 'Nesvítí slunce'.",
                b: "Dvojitá negace se vyruší (v klasické logice), tedy 'není pravda (¬), že ne(¬)svítí(P)'.",
                c: "To je jen zbytečné opakování téhož."
            }
        },
        {
            q: "Co znamená symbol '∀'?",
            a: "Existuje alespoň jeden.", b: "Pro všechny (všeobecný kvantifikátor).", c: "Prázdná množina.",
            ans: "b",
            expl: {
                a: "Pro existenci používáme obrácené 'E' (∃).",
                b: "Vypadá jako obrácené 'A' (All - všichni).",
                c: "Prázdná množina se značí přeškrtnutou nulou (∅)."
            }
        },
        {
            q: "Co znamená symbol '∃'?",
            a: "Pro žádné.", b: "Existuje alespoň jeden (existenční kvantifikátor).", c: "Konec důkazu.",
            ans: "b",
            expl: {
                a: "Žádné se zapisuje jako negace existence (¬∃).",
                b: "Vypadá jako obrácené 'E' (Exists - existuje).",
                c: "Konec důkazu se značí čtverečkem (∎)."
            }
        },
        {
            q: "Jak zapíšeme: 'Jestliže studuji (S), pak udělám zkoušku (Z)'?",
            a: "S ∧ Z", b: "S → Z", c: "S ↔ Z",
            ans: "b",
            expl: {
                a: "To říká, že studuji a dělám zkoušku zároveň.",
                b: "Šipka vyjadřuje podmínku 'jestliže-pak'.",
                c: "To by znamenalo, že studuji jen tehdy, když dělám zkoušku (a naopak)."
            }
        },
        {
            q: "Co v logice znamená 'logická hodnota'?",
            a: "Cena knihy o logice.", b: "Pravda (1) nebo Nepravda (0).", c: "Důležitost argumentu.",
            ans: "b",
            expl: {
                a: "Ekonomika do formální logiky nepatří.",
                b: "Každý výrok má v klasické logice právě jednu z těchto dvou hodnot.",
                c: "Logika neřeší, jak je téma důležité, ale zda je pravdivé."
            }
        },
        {
            q: "Která spojka odpovídá českému 'buď, anebo' (platí jen jedna možnost)?",
            a: "Inkluzivní nebo (∨)", b: "Exkluzivní nebo (XOR / ⊕)", c: "Implikace (→)",
            ans: "b",
            expl: {
                a: "Běžné '∨' dovoluje, aby platily obě možnosti.",
                b: "XOR (exclusive or) vylučuje možnost, že by platilo obojí naráz.",
                c: "Šipka není volba mezi možnostmi, ale závislost."
            }
        },
		        {
            q: "Jak přečteš zápis ¬(P ∧ Q)?",
            a: "Není pravda, že P a zároveň Q.", b: "Ne-P a ne-Q.", c: "P nebo Q.",
            ans: "a",
            expl: {
                a: "Negace před závorkou popírá celý obsah závorky jako celek.",
                b: "To by se zapsalo jako ¬P ∧ ¬Q (bez velkých závorek).",
                c: "To je úplně jiná spojka."
            }
        },
        {
            q: "Co znamená zápis (P → Q) ∧ P?",
            a: "Jestliže P, pak Q, a navíc víme, že P platí.", b: "P a Q jsou stejné.", c: "P nebo Q, ale ne obojí.",
            ans: "a",
            expl: {
                a: "První část je podmínka, druhá část potvrzuje, že předpoklad (P) nastal.",
                b: "To by byla ekvivalence (↔).",
                c: "To je exkluzivní disjunkce (⊕)."
            }
        },
        {
            q: "Který z těchto zápisů říká: 'Nenastane ani P, ani Q'?",
            a: "¬P ∨ ¬Q", b: "¬P ∧ ¬Q", c: "¬(P → Q)",
            ans: "b",
            expl: {
                a: "To říká, že neplatí alespoň jedno z nich.",
                b: "Znamená to: 'Neplatí P a zároveň neplatí Q'.",
                c: "To popírá vztah vyplývání, nikoliv oba jevy."
            }
        },
        {
            q: "Jak logicky zapíšeš: 'Půjdu ven (V) jen tehdy, když nebude pršet (¬P)'?",
            a: "V ↔ ¬P", b: "V → ¬P", c: "P ∧ V",
            ans: "b",
            expl: {
                a: "To by znamenalo, že ven chodíš vždy a jen tehdy, když neprší (nikdy jindy).",
                b: "Šipka říká: 'Pokud jsem venku, nutně z toho plyne, že neprší'.",
                c: "To říká, že prší a jsi venku."
            }
        },
        {
            q: "Máme výrok: 'P ∨ (Q ∧ R)'. Co musí platit, aby byl pravdivý?",
            a: "Musí platit P, nebo musí platit Q i R zároveň.", b: "Musí platit všechna tři písmena.", c: "Nesmí platit P.",
            ans: "a",
            expl: {
                a: "Spojka 'nebo' (∨) rozděluje výrok na dvě hlavní cesty: levou (P) a pravou (Q ∧ R).",
                b: "Stačilo by jen P, ostatní nemusí být pravda.",
                c: "P klidně platit může, je to jedna z možností."
            }
        },
        {
            q: "Co se stane s pravdivostí 'P → Q', pokud je P (předpoklad) nepravdivý?",
            a: "Celý výrok je nepravdivý.", b: "Celý výrok je automaticky pravdivý.", c: "Výrok nemá žádnou hodnotu.",
            ans: "b",
            expl: {
                a: "To je častá chyba. Implikace lže jen tehdy, když z pravdy plyne lež.",
                b: "V logice z nepravdy (ex falso) může plynout cokoliv, proto je šipka 'pravdivá'.",
                c: "V klasické logice má každý výrok vždy hodnotu 0 nebo 1."
            }
        },
        {
            q: "Jak zapíšeš 'Není pravda, že (P nebo Q)'?",
            a: "¬P ∨ Q", b: "¬(P ∨ Q)", c: "P ∨ ¬Q",
            ans: "b",
            expl: {
                a: "Zde neguješ jen P, nikoliv celou volbu.",
                b: "Závorka s negací venku popírá celou disjunkci (nebo).",
                c: "Zde neguješ jen Q."
            }
        },
        {
            q: "Představ si zápis ¬¬P ↔ P. Co nám říká?",
            a: "Že dvě negace se vyruší a výsledek je stejný jako původní P.", b: "Že P je vždy nepravdivé.", c: "Že P a jeho negace jsou totéž.",
            ans: "a",
            expl: {
                a: "Je to zákon dvojí negace – 'není pravda, že nejsem' znamená 'jsem'.",
                b: "Zápis nic neříká o tom, zda je P pravda, jen že se rovná své dvojité negaci.",
                c: "P a ¬P jsou opaky, nikoliv totéž."
            }
        },
        {
            q: "Co znamená symbol '⊥'?",
            a: "Pravda", b: "Spor / Konstanta nepravda", c: "Kolmice",
            ans: "b",
            expl: {
                a: "Pravda se značí '⊤' (top).",
                b: "Tento symbol (falsum) reprezentuje výrok, který je vždy nepravdivý.",
                c: "V geometrii ano, v logice je to symbol pro nepravdu/spor."
            }
        },
        {
            q: "Jaký je rozdíl mezi (P ∧ Q) ∨ R  a  P ∧ (Q ∨ R)?",
            a: "Žádný, jsou stejné.", b: "Záleží na prioritě – v prvním případě je hlavní spojka 'nebo', v druhém 'a'.", c: "První je latinsky, druhý řecky.",
            ans: "b",
            expl: {
                a: "Závorky zásadně mění strukturu. V prvním stačí, když platí R, aby to byla pravda.",
                b: "U druhého musí platit P vždy, jinak je celý výrok nepravdivý.",
                c: "Jazyk logiky je univerzální, neřeší národní jazyky."
            }
        },
        {
            q: "Jak zapíšeš 'A i B jsou nepravdivé'?",
            a: "¬A ∧ ¬B", b: "¬(A ∧ B)", c: "A ↔ B",
            ans: "a",
            expl: {
                a: "Tento zápis jasně říká: Ne-A a zároveň Ne-B.",
                b: "To by znamenalo jen to, že neplatí obě naráz (jedna by platit mohla).",
                c: "To říká jen to, že mají stejnou hodnotu (klidně obě pravdivé)."
            }
        },
        {
            q: "Který zápis odpovídá větě: 'Jestliže vyhraju (V), koupím auto (A) i dům (D)'?",
            a: "V → (A ∧ D)", b: "(V → A) ∧ D", c: "V ∧ A ∧ D",
            ans: "a",
            expl: {
                a: "Výhra je podmínkou pro obě věci v závorce najednou.",
                b: "To by znamenalo: 'Když vyhraju, koupím auto, a k tomu (bez podmínek) koupím dům'.",
                c: "To říká, že se staly všechny tři věci najednou."
            }
        },
        {
            q: "Co vyjadřuje zápis P ⊕ Q?",
            a: "P a Q jsou přátelé.", b: "Buď P, nebo Q, ale nikdy obojí najednou.", c: "P plus Q.",
            ans: "b",
            expl: {
                a: "Logika neřeší mezilidské vztahy.",
                b: "Symbol s křížkem v kroužku (XOR) je ostré 'nebo'.",
                c: "V logice 'plus' neexistuje, nejbližší je disjunkce (∨)."
            }
        },
        {
            q: "Pokud P ↔ Q je pravdivé, co to znamená pro hodnoty P a Q?",
            a: "Musí být obě pravdivé.", b: "Musí mít stejnou hodnotu (buď obě pravda, nebo obě lež).", c: "P musí být pravdivé a Q nepravdivé.",
            ans: "b",
            expl: {
                a: "Mohou být i obě nepravdivé a ekvivalence bude stále platit.",
                b: "Ekvivalence (↔) je 'váha' – obě strany musí vážit stejně.",
                c: "V tom případě by ekvivalence byla nepravdivá."
            }
        },
        {
            q: "Jak zapíšeš: 'Není pravda, že pokud prší (P), tak nepůjdu ven (¬V)'?",
            a: "¬(P → ¬V)", b: "P → V", c: "¬P ∧ V",
            ans: "a",
            expl: {
                a: "Negace před celou implikací (šipkou) popírá ono pravidlo 'když prší...'.",
                b: "To je zjednodušení, ale ne přesný překlad popření původní věty.",
                c: "To by znamenalo: 'Neprší a jdu ven'."
            }
        },
        {
            q: "Který symbol se používá pro 'vyplývání' (z premis plyne závěr)?",
            a: "⊢", b: "+", c: "#",
            ans: "a",
            expl: {
                a: "Tzv. 'tack' (připínáček) značí, že z předchozích tvrzení lze odvodit to následující.",
                b: "Plus se v logice nepoužívá.",
                c: "Hashtag nemá v logickém zápisu funkci."
            }
        },
        {
            q: "Co znamená zápis P ∨ ¬P?",
            a: "Něco platí, nebo to neplatí (zákon vyloučení třetího).", b: "Někdy ano, někdy ne.", c: "P je nula.",
            ans: "a",
            expl: {
                a: "Je to základní tautologie – jedna z těchto možností musí nastat vždy.",
                b: "Logika nezná 'někdy', jen 'vždy' nebo 'nikdy' v rámci dané situace.",
                c: "P je proměnná, nikoliv nutně nula."
            }
        },
        {
            q: "Jak se čte ¬P ∨ Q?",
            a: "Ne-P nebo Q.", b: "Pokud P, pak Q (logicky ekvivalentní forma).", c: "Obě předchozí odpovědi jsou správně.",
            ans: "c",
            expl: {
                a: "To je doslovný překlad symbolů.",
                b: "V logice je '¬P ∨ Q' přesná definice toho, jak funguje implikace P → Q.",
                c: "Logika ukazuje, že 'jestliže P, pak Q' je totéž jako 'neplatí P, nebo platí Q'."
            }
        },
        {
            q: "Co znamená zápis ∃x P(x)?",
            a: "Všichni lidé mají vlastnost P.", b: "Existuje alespoň jeden objekt x, pro který platí vlastnost P.", c: "Žádné x nemá vlastnost P.",
            ans: "b",
            expl: {
                a: "To by byl kvantifikátor ∀x.",
                b: "Obrácené E (∃) hlásí přítomnost alespoň jednoho takového případu.",
                c: "To by byla negace: ¬∃x P(x)."
            }
        },
        {
            q: "Jak zapíšeš: 'Některá jablka (J) jsou červená (C)'?",
            a: "∀x (J(x) → C(x))", b: "∃x (J(x) ∧ C(x))", c: "J ∧ C",
            ans: "b",
            expl: {
                a: "To by znamenalo 'Všechna jablka jsou červená'.",
                b: "Říkáme: 'Existuje něco, co je zároveň jablkem i červeným'.",
                c: "To by znamenalo, že jablko a červená jsou jedna a tatáž věc obecně."
            }
        },
		        {
            q: "Kdy je implikace 'P → Q' nepravdivá?",
            a: "Když je P pravda a Q lež.", b: "Když jsou P i Q lež.", c: "Když je P lež a Q pravda.",
            ans: "a",
            expl: {
                a: "To je jediný případ, kdy šipka selže – z pravdy nesmí plynout lež.",
                b: "Z nepravdy může plynout cokoliv, takže celá šipka je 'pravdivá'.",
                c: "To je platný vztah, šipka zůstává pravdivá."
            }
        },
        {
            q: "Jak vypadá negace výroku 'P ∧ Q' podle De Morganových zákonů?",
            a: "¬P ∧ ¬Q", b: "¬P ∨ ¬Q", c: "¬P → ¬Q",
            ans: "b",
            expl: {
                a: "To je častá chyba – negace 'a' se mění na 'nebo'.",
                b: "Negace 'P a Q' znamená, že 'neplatí P' NEBO 'neplatí Q'.",
                c: "Implikace není negací konjunkce."
            }
        },
        {
            q: "Jak vypadá negace výroku 'P ∨ Q'?",
            a: "¬P ∧ ¬Q", b: "¬P ∨ ¬Q", c: "P ∧ Q",
            ans: "a",
            expl: {
                a: "Negace 'P nebo Q' znamená, že neplatí ani jedno (Ne-P a zároveň Ne-Q).",
                b: "To by byla negace 'a zároveň'.",
                c: "To je původní výrok bez negací a se špatnou spojkou."
            }
        },
        {
            q: "Kolik řádků má pravdivostní tabulka pro výrok se 3 proměnnými (P, Q, R)?",
            a: "6", b: "8", c: "9",
            ans: "b",
            expl: {
                a: "Počet řádků se řídí mocninou dvou (2 na n-tou).",
                b: "2³ = 8. Pro každou proměnnou se počet kombinací zdvojnásobí.",
                c: "Lichý počet kombinací v binární logice nenastává."
            }
        },
        {
            q: "Co znamená v tabulce zápis '1' pod výsledným sloupcem?",
            a: "Že výrok je v daném případě pravdivý.", b: "Že ve větě je jedna chyba.", c: "Že výrok je první v pořadí.",
            ans: "a",
            expl: {
                a: "Jednička zastupuje True (pravdu), nula False (nepravdu).",
                b: "Tabulka nehledá chyby v psaní, ale logickou hodnotu.",
                c: "Pořadí s hodnotou nesouvisí."
            }
        },
        {
            q: "Jak zapíšeme negaci věty 'Všichni lidé (L) jsou smrtelní (S)'?",
            a: "Žádný člověk není smrtelný.", b: "Existuje alespoň jeden člověk, který není smrtelný.", c: "Všichni lidé jsou nesmrtelní.",
            ans: "b",
            expl: {
                a: "To je příliš silné tvrzení, stačí najít jeden protipříklad.",
                b: "Negace 'všech' (∀) je 'existuje alespoň jeden, pro kterého to neplatí' (∃ + ¬).",
                c: "To je opět opačný extrém, nikoliv logická negace."
            }
        },
        {
            q: "Co získáme negací existenčního kvantifikátoru ¬∃x P(x)?",
            a: "∀x ¬P(x) (Pro všechny platí, že nemají vlastnost P)", b: "∃x ¬P(x)", c: "∀x P(x)",
            ans: "a",
            expl: {
                a: "Říct 'neexistuje nikdo takový' je totéž jako 'všichni jsou opační'.",
                b: "To by znamenalo, že někdo takový existuje, ale s opačnou vlastností.",
                c: "To je přesný opak původního tvrzení."
            }
        },
        {
            q: "Výraz 'P ↔ Q' je pravdivý právě tehdy, když:",
            a: "P i Q mají stejnou pravdivostní hodnotu.", b: "P je pravda a Q je lež.", c: "Alespoň jeden z nich je pravda.",
            ans: "a",
            expl: {
                a: "Ekvivalence (↔) vyžaduje shodu – buď 1 a 1, nebo 0 a 0.",
                b: "V tomto případě je ekvivalence nepravdivá.",
                c: "To platí pro disjunkci (∨)."
            }
        },
        {
            q: "Jak lze zjednodušit zápis ¬¬¬P?",
            a: "P", b: "¬P", c: "¬¬P",
            ans: "b",
            expl: {
                a: "Dvě negace se vyruší, ale třetí zůstává.",
                b: "Lichý počet negací se vždy chová jako jedna negace.",
                c: "To lze dále zjednodušit na P, takže to není konečný výsledek."
            }
        },
        {
            q: "Co říká zákon 'Distributivnosti' v logice?",
            a: "P ∧ (Q ∨ R) je totéž jako (P ∧ Q) ∨ (P ∧ R).", b: "P ∧ Q je totéž jako Q ∧ P.", c: "Všechny výroky se musí rozdělit mezi lidi.",
            ans: "a",
            expl: {
                a: "Funguje to podobně jako roznásobování závorek v matematice.",
                b: "To je zákon komutativnosti (pořadí u 'a' i 'nebo' nehraje roli).",
                c: "To je sociální princip, nikoliv logický."
            }
        },
        {
            q: "Která z těchto tabulek odpovídá spojce '∧' (konjunkce)?",
            a: "1-0-0-0", b: "1-1-1-0", c: "0-1-1-0",
            ans: "a",
            expl: {
                a: "Pravda je jen v prvním případě (když jsou oba 1), zbytek jsou nuly.",
                b: "To odpovídá spojce 'nebo' (∨).",
                c: "To odpovídá spojce 'buď, anebo' (⊕)."
            }
        },
        {
            q: "Představ si zápis (P → Q) ∧ (Q → P). Čím ho lze nahradit?",
            a: "P ∧ Q", b: "P ↔ Q", c: "P ∨ Q",
            ans: "b",
            expl: {
                a: "To je příliš silné, vyžadovalo by to, aby oba byli vždy pravdiví.",
                b: "Ekvivalence je definována jako oboustranná implikace.",
                c: "To s implikacemi nesouvisí."
            }
        },
        {
            q: "Co znamená, že logická spojka je 'binární'?",
            a: "Že pracuje se dvěma výroky.", b: "Že má jen dvě barvy.", c: "Že ji vymysleli roboti.",
            ans: "a",
            expl: {
                a: "Spojky jako ∧, ∨, → propojují dva argumenty. Negace (¬) je unární (stačí jí jeden).",
                b: "Logika barvy neřeší.",
                c: "Binární soustava je základem robotiky, ale termín označuje počet vstupů."
            }
        },
        {
            q: "Jak se nazývá výsledek negace tautologie?",
            a: "Další tautologie.", b: "Kontradikce (vždy nepravdivý výrok).", c: "Splnitelný výrok.",
            ans: "b",
            expl: {
                a: "Negace pravdy je lež, takže nemůže vzniknout tautologie.",
                b: "Pokud je něco 'vždy pravda', jeho negace je 'vždy lež'.",
                c: "Kontradikce není splnitelná (nikdy není pravda)."
            }
        },
        {
            q: "Jak zapíšeš 'Není pravda, že (Prší a zároveň nesvítí slunce)'?",
            a: "¬(P ∧ ¬S)", b: "¬P ∧ S", c: "¬P ∨ ¬S",
            ans: "a",
            expl: {
                a: "Závorka drží situaci pohromadě, negace venku ji popírá jako celek.",
                b: "To by znamenalo 'Neprší a svítí slunce'.",
                c: "To by znamenalo 'Neprší nebo nesvítí slunce'."
            }
        },
        {
            q: "Co nám říká 'Zákon absorpce'?",
            a: "P ∧ (P ∨ Q) se rovná prostě P.", b: "P se vyruší s Q.", c: "Všechny nuly se změní na jedničky.",
            ans: "a",
            expl: {
                a: "Pokud už víme, že platí P, pak přidání podmínky 'P nebo Q' nic nového nepřináší.",
                b: "Absorpce neznamená vyrušení dvou různých proměnných.",
                c: "Logika hodnoty nemění jen tak, musí k tomu být operátor."
            }
        },
        {
            q: "V pravdivostní tabulce implikace P → Q najdeme nulu (nepravdu) v kolika řádcích?",
            a: "V jednom (1 → 0).", b: "Ve dvou.", c: "Ve všech.",
            ans: "a",
            expl: {
                a: "Všechny ostatní kombinace (1→1, 0→1, 0→0) jsou v logice považovány za pravdivé.",
                b: "To by platilo pro ekvivalenci nebo exkluzivní 'nebo'.",
                c: "To by byla kontradikce."
            }
        },
        {
            q: "Jaký je význam symbolu '≡' mezi dvěma složitými zápisy?",
            a: "Znamená to, že oba zápisy mají identickou pravdivostní tabulku.", b: "Znamená to, že první je důležitější.", c: "Znamená to, že se mají sečíst.",
            ans: "a",
            expl: {
                a: "Používá se pro logickou ekvivalenci formulí (např. De Morganovy zákony).",
                b: "V logice si jsou všechny správné formule rovny v hodnotě.",
                c: "Logika nesčítá, ale vyhodnocuje pravdu."
            }
        },
        {
            q: "Který výrok je negací věty 'Někdo (∃) v této místnosti lže (L)'?",
            a: "Někdo v této místnosti mluví pravdu.", b: "Všichni (∀) v této místnosti mluví pravdu (¬L).", c: "Nikdo v této místnosti neexistuje.",
            ans: "b",
            expl: {
                a: "To není negace, obojí může být pravda zároveň.",
                b: "Negací 'aspoň jeden' je 'všichni ne' (nebo 'nikdo ne').",
                c: "Logika neguje vlastnost (lhaní), nikoliv existenci místnosti."
            }
        },
        {
            q: "Co vyjadřuje zápis P ∧ ¬P?",
            a: "Spor (kontradikci).", b: "Hlubokou filozofickou pravdu.", c: "Možnost volby.",
            ans: "a",
            expl: {
                a: "Něco nemůže zároveň být i nebýt (v klasické logice). Výsledek je vždy 0.",
                b: "Logika je technická disciplína, spor v ní není přípustný.",
                c: "Volbu vyjadřuje disjunkce (∨)."
            }
        },
		        {
            q: "Zákon ¬(A ∨ B) ≡ ¬A ∧ ¬B se nazývá De Morganův. Jak se dá vyjádřit slovy?",
            a: "Negace 'nebo' je 'ne-A a zároveň ne-B'.", b: "Negace 'nebo' zůstává 'nebo', jen se přidají háčky.", c: "A i B zmizí.",
            ans: "a",
            expl: {
                a: "Když popřeme, že platí alespoň jedna z možností, říkáme tím, že neplatí ani jedna.",
                b: "To je chyba – při negaci závorky se spojka '∨' vždy otočí na '∧'.",
                c: "Proměnné v logice nikdy jen tak nemizí."
            }
        },
        {
            q: "Jak zní druhý De Morganův zákon pro negaci konjunkce: ¬(A ∧ B)?",
            a: "¬A ∨ ¬B", b: "¬A ∧ ¬B", c: "A ∨ B",
            ans: "a",
            expl: {
                a: "Negace 'A a zároveň B' znamená, že neplatí A, nebo neplatí B (nebo ani jedno).",
                b: "To by byla negace disjunkce (nebo).",
                c: "Negace musí obsahovat symboly pro popření (¬)."
            }
        },
        {
            q: "Výraz A → B je logicky totožný s ¬A ∨ B. Proč?",
            a: "Protože implikace 'lže' jen když A platí a B ne (což přesně odpovídá pravé straně).", b: "Protože se to tak logici dohodli.", c: "Protože A a B jsou si rovni.",
            ans: "a",
            expl: {
                a: "Zkus si tabulku: obě formy dají stejné výsledky (1-1-0-1).",
                b: "Logika není o dohodě, ale o pravdivostních funkcích.",
                c: "To by platilo jen pro ekvivalenci."
            }
        },
        {
            q: "Co získáš negací implikace ¬(A → B)?",
            a: "A ∧ ¬B", b: "¬A → ¬B", c: "A ∨ ¬B",
            ans: "a",
            expl: {
                a: "Popřít slib 'když vyhraju, dám ti peníze' znamená říct: 'vyhrál jsem, ale peníze jsem nedal'.",
                b: "To je tzv. inverze, která není logicky ekvivalentní negaci.",
                c: "Disjunkce zde neodpovídá selhání podmínky."
            }
        },
        {
            q: "Jak zjednodušíš výraz (A ∧ B) ∨ (A ∧ ¬B)?",
            a: "A", b: "B", c: "A ∧ B",
            ans: "a",
            expl: {
                a: "V obou případech platí A, a je jedno, zda B platí či ne (zákon distribuce a vyloučení třetího).",
                b: "B se v tomto výrazu v podstatě 'vyruší'.",
                c: "To by bylo příliš omezené."
            }
        },
        {
            q: "Čemu je rovno ¬(¬A ∨ ¬B)?",
            a: "A ∧ B", b: "A ∨ B", c: "¬A ∧ ¬B",
            ans: "a",
            expl: {
                a: "Podle De Morgana otočíme '∨' na '∧' a znegujeme obě strany. Dvojitá negace zmizí.",
                b: "Spojka se musí otočit.",
                c: "Negace před závorkou musí zrušit negace uvnitř."
            }
        },
        {
            q: "Výraz A ↔ B lze rozložit na:",
            a: "(A → B) ∧ (B → A)", b: "(A → B) ∨ (B → A)", c: "A ∧ B",
            ans: "a",
            expl: {
                a: "Ekvivalence je 'obousměrná šipka', tedy součin dvou implikací.",
                b: "To by byla tautologie (vždy pravda).",
                c: "Ekvivalence může platit, i když jsou oba nepravdiví (0 ↔ 0)."
            }
        },
        {
            q: "Co říká zákon kontrapozice pro implikaci A → B?",
            a: "¬B → ¬A", b: "B → A", c: "¬A → ¬B",
            ans: "a",
            expl: {
                a: "Tato forma je vždy ekvivalentní (např. 'Když prší, je mokro' = 'Když není mokro, neprší').",
                b: "Obrácená implikace nemusí být pravdivá.",
                c: "To je inverze, která také není logicky ekvivalentní."
            }
        },
        {
            q: "Jak zapíšeš 'A je nutnou podmínkou pro B'?",
            a: "B → A", b: "A → B", c: "A ∧ B",
            ans: "a",
            expl: {
                a: "Nutná podmínka znamená: 'pokud nastalo B, muselo předtím platit A'.",
                b: "To by byla podmínka postačující.",
                c: "To je jen konstatování, že nastaly oba jevy."
            }
        },
        {
            q: "Zápis A ∨ (B ∧ C) je ekvivalentní s:",
            a: "(A ∨ B) ∧ (A ∨ C)", b: "(A ∧ B) ∨ (A ∧ C)", c: "A ∨ B ∨ C",
            ans: "a",
            expl: {
                a: "Jde o distributivní zákon – 'nebo' roznásobí závorku s 'a'.",
                b: "To by platilo, kdyby spojky byly prohozené.",
                c: "To by platilo, kdyby uvnitř závorky bylo také 'nebo'."
            }
        },
        {
            q: "Čemu se rovná výraz A ∧ (A ∨ B)?",
            a: "A", b: "B", c: "A ∨ B",
            ans: "a",
            expl: {
                a: "Zákon absorpce: pokud platí A, pak celá závorka (A nebo B) je už splněna.",
                b: "Hodnota B nemá na výsledek vliv, pokud známe A.",
                c: "Vnější spojka '∧' vyžaduje platnost A."
            }
        },
        {
            q: "Jak zní negace věty: 'Pokud budu pít (P), nebudu řídit (¬Ř)'?",
            a: "P ∧ Ř", b: "¬P → Ř", c: "P → Ř",
            ans: "a",
            expl: {
                a: "Negace implikace (A → B) je (A ∧ ¬B). Tedy: Piju a zároveň řídím.",
                b: "To by byla jiná podmínka.",
                c: "To by znamenalo 'Když piju, tak řídím'."
            }
        },
        {
            q: "Co vyjadřuje zápis A ⊕ B (exkluzivní disjunkce) pomocí základních spojek?",
            a: "(A ∨ B) ∧ ¬(A ∧ B)", b: "(A ∧ B) ∨ ¬(A ∨ B)", c: "A ↔ B",
            ans: "a",
            expl: {
                a: "Říkáme: 'Platí A nebo B, ale neplatí obě zároveň'.",
                b: "To by znamenalo 'Buď oba, nebo žádný'.",
                c: "To je přesný opak (negace) exkluzivního nebo."
            }
        },
        {
            q: "Který z těchto výrazů je kontradikce (vždy nepravda)?",
            a: "A ∧ ¬A", b: "A ∨ ¬A", c: "A → ¬A",
            ans: "a",
            expl: {
                a: "Něco nemůže být a zároveň nebýt.",
                b: "To je tautologie (vždy pravda).",
                c: "Tato implikace může být pravdivá (pokud je A nepravda)."
            }
        },
        {
            q: "Jak zjednodušíš ¬(A ↔ B)?",
            a: "A ⊕ B", b: "A ↔ ¬B", c: "Obě odpovědi jsou správně.",
            ans: "c",
            expl: {
                a: "Negace ekvivalence je skutečně 'buď, anebo'.",
                b: "Pokud A a B nejsou stejné, musí být A stejné jako 'ne-B'.",
                c: "V logice existuje více způsobů, jak zapsat stejnou pravdivostní funkci."
            }
        },
        {
            q: "Co znamená v logice zápis T ⊨ A?",
            a: "Z teorie T logicky vyplývá výrok A.", b: "T je rovno A.", c: "T je negací A.",
            ans: "a",
            expl: {
                a: "Symbol 'dvojitého připínáčku' značí sémantické vyplývání.",
                b: "Rovnost se značí symbolem ≡.",
                c: "Negace se značí symbolem ¬."
            }
        },
        {
            q: "Čemu je ekvivalentní ¬A → ¬B?",
            a: "B → A", b: "A → B", c: "¬(A → B)",
            ans: "a",
            expl: {
                a: "Podle zákona kontrapozice otočíme směr šipky a znegujeme obě strany.",
                b: "To by platilo jen v případě, že by A a B byly stejné.",
                c: "Negace implikace není další implikace."
            }
        },
        {
            q: "Jak zapíšeš: 'Prší (P) tehdy a jen tehdy, když je mokro (M)'?",
            a: "P ↔ M", b: "P → M", c: "P ∧ M",
            ans: "a",
            expl: {
                a: "Spojení 'tehdy a jen tehdy' je standardní český obrat pro ekvivalenci.",
                b: "To by byla pouze jedna cesta (jestliže prší, pak je mokro).",
                c: "To jen konstatuje, že teď prší a je mokro."
            }
        },
        {
            q: "Zápis ∀x (P(x) ∧ Q(x)) je ekvivalentní s:",
            a: "(∀x P(x)) ∧ (∀x Q(x))", b: "(∀x P(x)) ∨ (∀x Q(x))", c: "∃x (P(x) ∧ Q(x))",
            ans: "a",
            expl: {
                a: "Kvantifikátor 'pro všechna' lze rozdělit přes konjunkci (a zároveň).",
                b: "Přes 'nebo' se kvantifikátor takto jednoduše rozdělit nedá.",
                c: "Existence je mnohem slabší tvrzení než všeobecnost."
            }
        },
        {
            q: "Jaký je výsledek (A → B) ∨ (B → A)?",
            a: "Tautologie (vždy 1).", b: "Kontradikce (vždy 0).", c: "Záleží na hodnotách A a B.",
            ans: "a",
            expl: {
                a: "Alespoň jedna šipka bude v klasické logice vždy pravdivá.",
                b: "Nikdy to nebude vždy nepravda.",
                c: "U tohoto konkrétního výrazu na hodnotách nezáleží, výsledek je vždy 1."
            }
        },
		        {
            q: "Jak se nazývá vlastnost formule, která je pravdivá aspoň v jednom řádku tabulky?",
            a: "Tautologie", b: "Splnitelná", c: "Kontradikce",
            ans: "b",
            expl: {
                a: "Tautologie musí být pravdivá ve všech řádcích.",
                b: "Splnitelnost znamená, že existuje alespoň jedna interpretace, kde výrok platí.",
                c: "Kontradikce není pravdivá v žádném řádku."
            }
        },
        {
            q: "Co nám říká 'Zákon rezoluce' používaný v programování (Prolog)?",
            a: "Z (A ∨ B) a (¬A ∨ C) vyplývá (B ∨ C).", b: "A se vždy rovná B.", c: "Všechny závorky se musí smazat.",
            ans: "a",
            expl: {
                a: "Pokud víme, že platí A nebo B, a zároveň víme, že neplatí A nebo platí C, pak musí platit B nebo C.",
                b: "To není obecné pravidlo vyvozování.",
                c: "Rezoluce je algoritmus pro důkazy, nikoliv pro mazání znaků."
            }
        },
        {
            q: "Čemu je ekvivalentní zápis ¬(A ↔ B)?",
            a: "A ↔ ¬B", b: "¬A ↔ ¬B", c: "A ∧ B",
            ans: "a",
            expl: {
                a: "Popřít, že jsou stejné, je totéž jako říct, že jedno je rovno negaci druhého.",
                b: "To je opět ekvivalence (stejnost), protože se obě negace vyruší.",
                c: "To je jen jedna z mnoha možností, kdy ekvivalence neplatí."
            }
        },
        {
            q: "Jak zapíšeš: 'Existuje právě jedno x (unikitní), pro které platí P'?",
            a: "∃x P(x)", b: "∃!x P(x)", c: "∀x P(x)",
            ans: "b",
            expl: {
                a: "To znamená 'alespoň jedno', může jich být milion.",
                b: "Vykřičník za symbolem existence značí jednoznačnost (unique existence).",
                c: "To znamená, že vlastnost mají úplně všichni."
            }
        },
        {
            q: "Co znamená sémantický zápis ⊨ A (bez levé strany)?",
            a: "A je tautologie.", b: "A je nepravda.", c: "A je nedokazatelné.",
            ans: "a",
            expl: {
                a: "Pokud před symbolem vyplývání nic není, znamená to, že A platí samo o sobě (vždy).",
                b: "Pro nepravdu by se použil symbol falsum (⊥).",
                c: "Pro nedokazatelnost se používá přeškrtnutý symbol ⊬."
            }
        },
        {
            q: "Výraz (A ∧ (A → B)) → B je známý jako:",
            a: "Modus Ponens", b: "Modus Tollens", c: "Reductio ad absurdum",
            ans: "a",
            expl: {
                a: "Je to základní pravidlo: 'Mám-li A a vím, že z A plyne B, pak mám B'.",
                b: "Modus Tollens vyvozuje z negace následku negaci předpokladu.",
                c: "To je důkaz sporem, nikoliv přímé vyvození."
            }
        },
        {
            q: "Jak vypadá pravidlo Modus Tollens v symbolickém zápisu?",
            a: "((A → B) ∧ ¬B) → ¬A", b: "((A → B) ∧ B) → A", c: "A ∧ ¬A → B",
            ans: "a",
            expl: {
                a: "Pokud z A plyne B, ale B nenastalo, nemohlo nastat ani A.",
                b: "To je logická chyba (potvrzení následku nezaručuje předpoklad).",
                c: "To je princip 'ex falso quodlibet' (ze sporu plyne cokoliv)."
            }
        },
        {
            q: "Co je to 'Prenexní normální forma'?",
            a: "Zápis, kde jsou všechny kvantifikátory (∀, ∃) na úplném začátku formule.", b: "Zápis bez závorek.", c: "Zápis v latině.",
            ans: "a",
            expl: {
                a: "Usnadňuje to automatické dokazování vět v počítačové logice.",
                b: "Závorky jsou v této formě stále potřeba uvnitř jádra formule.",
                c: "Název je z latiny (pre-nex), ale zápis je moderní symbolika."
            }
        },
        {
            q: "Jaký je vztah mezi ∃x ∀y P(x, y) a ∀y ∃x P(x, y)?",
            a: "Jsou ekvivalentní.", b: "Z prvního vyplývá druhé, ale ne naopak.", c: "Z druhého vyplývá první.",
            ans: "b",
            expl: {
                a: "Pořadí kvantifikátorů různých druhů zásadně mění význam.",
                b: "Pokud existuje jedno x pro všechny y, tak pro každé y určitě najdeme to dané x.",
                c: "To neplatí (např. 'Každý má matku' neznamená 'Existuje jedna žena, co je matkou všech')."
            }
        },
        {
            q: "Čemu je ekvivalentní negace implikace ¬(A → B)?",
            a: "A ∧ ¬B", b: "¬A ∨ B", c: "B → A",
            ans: "a",
            expl: {
                a: "Implikace tvrdí, že nenastane případ (A a zároveň ne-B). Negace tedy tvrdí, že nastal.",
                b: "To je definice implikace, nikoliv její negace.",
                c: "To je obrácená implikace, která má jinou tabulku."
            }
        },
        {
            q: "Co znamená, že je logický systém 'Korektní' (Sound)?",
            a: "Že všechno, co v něm dokážeme, je pravdivé.", b: "Že je v něm hodně symbolů.", c: "Že v něm nelze nic dokázat.",
            ans: "a",
            expl: {
                a: "Korektnost zaručuje, že nebudeme vyvozovat lži z pravd.",
                b: "Počet symbolů s korektností nesouvisí.",
                c: "To by byl systém neužitečný, nikoliv nutně nekorektní."
            }
        },
        {
            q: "Co znamená, že je logický systém 'Úplný' (Complete)?",
            a: "Že v něm lze dokázat všechny pravdivé formule daného systému.", b: "Že má všechny strany v knize.", c: "Že ho nikdo nepoužívá.",
            ans: "a",
            expl: {
                a: "Úplnost znamená, že nám žádná pravda neproklouzne mezi prsty.",
                b: "Fyzický stav knihy nemá s logickou vlastností nic společného.",
                c: "Úplné systémy jsou naopak velmi žádané (např. výroková logika)."
            }
        },
        {
            q: "Jak zapíšeš negaci '∀x (P(x) → Q(x))'?",
            a: "∃x (P(x) ∧ ¬Q(x))", b: "∀x (¬P(x) ∨ Q(x))", c: "∃x (P(x) → ¬Q(x))",
            ans: "a",
            expl: {
                a: "Negujeme 'všechny' na 'existuje' a následně negujeme vnitřní implikaci.",
                b: "To je původní výrok v jiné formě, nikoliv negace.",
                c: "Negace implikace není implikace."
            }
        },
        {
            q: "Co je to 'Skolemizace'?",
            a: "Odstranění existenčních kvantifikátorů (∃) pomocí speciálních funkcí.", b: "Učení logiky ve školách.", c: "Změna všech 'A' na 'B'.",
            ans: "a",
            expl: {
                a: "Používá se k převodu formulí do formy vhodné pro automatické řešiče (SAT solvers).",
                b: "S pedagogikou tento technický termín nesouvisí.",
                c: "To je jen přejmenování proměnných."
            }
        },
        {
            q: "Jaký je výsledek operace (A ∧ B) ∨ (A ∧ ¬B) ∨ (¬A ∧ B) ∨ (¬A ∧ ¬B)?",
            a: "Tautologie (1)", b: "Kontradikce (0)", c: "A ∧ B",
            ans: "a",
            expl: {
                a: "Tento výraz pokrývá všechny čtyři možné kombinace hodnot A a B, tedy vždy bude jedna závorka platit.",
                b: "To by byl výsledek, kdyby mezi závorkami bylo 'a zároveň' a uvnitř spory.",
                c: "To je jen jedna ze čtyř částí výrazu."
            }
        },
        {
            q: "Co znamená symbol '≡' v kontextu formulí A ≡ B?",
            a: "Formule jsou sémanticky ekvivalentní (mají stejné modely).", b: "Formule jsou napsány stejným fontem.", c: "První formule je delší.",
            ans: "a",
            expl: {
                a: "Označuje, že pro jakékoliv ohodnocení proměnných vyjdou obě formule stejně.",
                b: "Grafika zápisu není logicky významná.",
                c: "Délka formule neurčuje její logickou hodnotu."
            }
        },
        {
            q: "Která spojka je funkčně úplná (sama o sobě stačí na vyjádření všech ostatních)?",
            a: "NAND (Shefferova čárka |)", b: "Konjunkce (∧)", c: "Implikace (→)",
            ans: "a",
            expl: {
                a: "Pomocí NANDu (negovaný součin) lze sestavit 'ne', 'a' i 'nebo'.",
                b: "Samotným 'a' nevyjádříte negaci ani disjunkci.",
                c: "Samotná šipka bez negace také nestačí na všechny funkce."
            }
        },
        {
            q: "Jak zapíšeš 'Pravda' a 'Nepravda' jako logické konstanty?",
            a: "⊤ (Top) a ⊥ (Bottom)", b: "1 a -1", c: "Y a N",
            ans: "a",
            expl: {
                a: "Tato symbolika (verum a falsum) se používá v pokročilých důkazových systémech.",
                b: "V logice se používá 0, nikoliv -1.",
                c: "Yes/No se používá v mluvené řeči, ne ve formálním zápisu."
            }
        },
        {
            q: "Co říká 'Princip identity'?",
            a: "∀x (x = x)", b: "∃x (x = x)", c: "∀x (x → x)",
            ans: "a",
            expl: {
                a: "Každý objekt je identický sám se sebou. Základ predikátové logiky s rovností.",
                b: "To říká jen, že existuje aspoň jeden takový objekt.",
                c: "To je tautologie výrokové logiky, ale ne definice identity objektů."
            }
        },
        {
            q: "Pokud o systému víme, že je 'Bezesporný' (Consistent), znamená to, že:",
            a: "V něm nelze dokázat formuli A a zároveň ¬A.", b: "V něm jsou všechny formule pravdivé.", c: "Je v něm jen jedna proměnná.",
            ans: "a",
            expl: {
                a: "Bezespornost je minimální požadavek na smysluplný logický systém.",
                b: "To by byl systém triviální a k ničemu.",
                c: "Počet proměnných není pro bezespornost určující."
            }
        }


    ]
};
