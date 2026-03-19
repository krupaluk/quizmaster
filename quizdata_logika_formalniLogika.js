window. data_logika_FormalniLogika = {
    "quizTitle": "Logika: Formální Logika",
    "questions": [
// --- 1. NEGACE (10x) ---
        {
            q: "Jaká je negace výroku 'Všichni studenti prospěli'?",
            a: "Všichni studenti neprospěli", b: "Alespoň jeden student neprospěl", c: "Žádný student neprospěl",
            ans: "b",
            expl: {
                a: "To je opačný extrém. K popření stačí jediný neúspěch.",
                b: "Správně. Negací 'Všichni' je 'Existuje alespoň jeden, který ne'.",
                c: "To je pouze silnější verze odpovědi A, logicky nesprávná negace."
            }
        },
        {
            q: "Negace výroku 'Prší a mrzne' je:",
            a: "Neprší a nemrzne", b: "Neprší nebo nemrzne", c: "Prší nebo mrzne",
            ans: "b",
            expl: {
                a: "Pozor na De Morganovy zákony. Negace spojky 'a' se mění na 'nebo'.",
                b: "Správně. ¬(A ∧ B) ≡ ¬A ∨ ¬B.",
                c: "To je nesmysl, musíte popřít obě složky."
            }
        },
        {
            q: "Negace výroku 'Někteří lidé nelžou' je:",
            a: "Všichni lidé lžou", b: "Nikdo nelže", c: "Někteří lidé lžou",
            ans: "a",
            expl: {
                a: "Správně. Negací 'Někteří ne' (O) je 'Všichni' (A).",
                b: "To by byla negace 'Někteří lžou'.",
                c: "To není negace, ale pouze jiný popis stavu."
            }
        },
        {
            q: "Jak negujeme 'Pokud prší, zůstanu doma'?",
            a: "Neprší a zůstanu doma", b: "Prší a nezůstanu doma", c: "Pokud neprší, nezůstanu doma",
            ans: "b",
            expl: {
                a: "Negace implikace musí zachovat pravdivost předpokladu a popřít následek.",
                b: "Správně. ¬(p → q) ≡ p ∧ ¬q. (Slib porušen: prší, ale venku jsem).",
                c: "To je klam, změna předpokladu není negací slibu."
            }
        },
        {
            q: "Negace 'Budu pít čaj nebo kávu' je:",
            a: "Nebudu pít čaj a nebudu pít kávu", b: "Nebudu pít čaj nebo nebudu pít kávu", c: "Budu pít jen vodu",
            ans: "a",
            expl: {
                a: "Správně. ¬(A ∨ B) ≡ ¬A ∧ ¬B. Popřete obojí najednou.",
                b: "Špatně, spojka 'nebo' se musí změnit na 'a'.",
                c: "To je sice fakticky možné, ale logicky to není negace výroku."
            }
        },
        {
            q: "Výrok 'Není pravda, že neposlouchám' je ekvivalentní s:",
            a: "Neposlouchám", b: "Poslouchám", c: "Někdy poslouchám",
            ans: "b",
            expl: {
                a: "Dvě negace se v klasické logice ruší.",
                b: "Správně. Zákon dvojí negace ¬(¬p) ≡ p.",
                c: "Dvojí negace vrací plnou platnost, nikoliv jen částečnou."
            }
        },
        {
            q: "Negace 'Žádný učený z nebe nespadl' je:",
            a: "Všichni učení z nebe spadli", b: "Alespoň jeden učený z nebe spadl", c: "Někteří učení spadli ze stromu",
            ans: "b",
            expl: {
                a: "To je opačný extrém, nikoliv minimální logická negace.",
                b: "Správně. Negací 'Žádný není' je 'Alespoň jeden je'.",
                c: "To je irelevantní záměna pojmů."
            }
        },
        {
            q: "Negace 'Mám auto i dům' je:",
            a: "Nemám auto nebo nemám dům", b: "Nemám auto ani dům", c: "Mám auto, ale ne dům",
            ans: "a",
            expl: {
                a: "Správně. Stačí, když mi chybí jedna z věcí, aby tvrzení 'mám obojí' neplatilo.",
                b: "To je silnější popření, k logické negaci stačí disjunkce záporů.",
                c: "To je jen jeden z případů, kdy negace platí, ne její obecná forma."
            }
        },
        {
            q: "Jak negujeme 'Půjdeš buď se mnou, nebo s ním' (exkluzivní)?",
            a: "Nepůjdeš se mnou a nepůjdeš s ním", b: "Půjdeš s oběma nebo s nikým", c: "Půjdeš s ním",
            ans: "b",
            expl: {
                a: "To je jen polovina pravdy negace exkluzivity.",
                b: "Správně. Negace 'buď, anebo' znamená, že nastanou obě možnosti nebo žádná.",
                c: "To je pouze jedna z možností původního výroku."
            }
        },
        {
            q: "Negace výroku 'Alespoň 3 lidé přišli' je:",
            a: "Nejvýše 2 lidé přišli", b: "Žádný člověk nepřišel", c: "Méně než 3 lidé přišli",
            ans: "c",
            expl: {
                a: "Správně, ale C je přesnější matematické vyjádření. V logice se obvykle uznává C.",
                b: "To by platilo, kdyby jich přišlo 0, ale co když přišli 2?",
                c: "Správně. Negací '3 a více' je '2 a méně' (ostře méně než 3)."
            }
        },
		
// --- 2. SPOJKY (10x) ---
        {
            q: "Kdy je konjunkce (p ∧ q) pravdivá?",
            a: "Když je aspoň jeden pravdivý", b: "Když jsou oba pravdivé", c: "Když je aspoň jeden nepravdivý",
            ans: "b",
            expl: {
                a: "To je disjunkce.",
                b: "Správně. Spojka 'a' vyžaduje současnou platnost obou částí.",
                c: "To je definice nepravdivosti konjunkce."
            }
        },
        {
            q: "Kdy je disjunkce (p ∨ q) nepravdivá?",
            a: "Když je jeden pravdivý a druhý ne", b: "Když jsou oba nepravdivé", c: "Když je první nepravdivý",
            ans: "b",
            expl: {
                a: "V disjunkci 'nebo' stačí jedna pravda k celkové pravdě.",
                b: "Správně. 0 nebo 0 dává 0.",
                c: "Druhý může být pravda, pak by disjunkce platila."
            }
        },
        {
            q: "Která spojka odpovídá 'pokud..., pak...'?",
            a: "Konjunkce", b: "Implikace", c: "Ekvivalence",
            ans: "b",
            expl: {
                a: "To je 'a'.",
                b: "Správně. Vyjadřuje podmíněný vztah.",
                c: "To je 'právě tehdy, když'."
            }
        },
        {
            q: "Co vyjadřuje ekvivalence (p ↔ q)?",
            a: "Oba výroky mají stejnou hodnotu", b: "Jeden výrok vylučuje druhý", c: "Z p plyne q",
            ans: "a",
            expl: {
                a: "Správně. Jsou-li oba 1 nebo oba 0, ekvivalence platí.",
                b: "To by byla non-ekvivalence (XOR).",
                c: "To je pouze jednostranná implikace."
            }
        },
        {
            q: "Výrok 'Prší nebo neprší' je:",
            a: "Kontradikce", b: "Tautologie", c: "Empirický fakt",
            ans: "b",
            expl: {
                a: "Kontradikce je vždy nepravda (Prší a neprší).",
                b: "Správně. Výrok p ∨ ¬p je vždy pravdivý bez ohledu na počasí.",
                c: "Není třeba se dívat z okna, abyste věděli, že toto platí."
            }
        },
        {
            q: "Pokud p=1 a q=0, jaká je hodnota p → q?",
            a: "1", b: "0", c: "Nelze určit",
            ans: "b",
            expl: {
                a: "Z pravdy nemůže plynout lež.",
                b: "Správně. Toto je jediný případ, kdy je implikace nepravdivá.",
                c: "V klasické logice jsou hodnoty pevně dané tabulkou."
            }
        },
        {
            q: "Kdy je ekvivalence (0 ↔ 0) pravdivá?",
            a: "Ne, 0 je nepravda", b: "Ano, hodnoty jsou stejné", c: "Jen v neděli",
            ans: "b",
            expl: {
                a: "Hodnota výroku je 0, ale vztah ekvivalence mezi nimi je 1.",
                b: "Správně. Ekvivalence říká, že obě strany 'souhlasí'.",
                c: "Logika je nadčasová."
            }
        },
        {
            q: "Výrok 'p ∧ ¬p' (Prší a neprší) je:",
            a: "Kontradikce", b: "Tautologie", c: "Možný stav",
            ans: "a",
            expl: {
                a: "Správně. Jde o spor, který nemůže nastat.",
                b: "Tautologie je vždy pravda.",
                c: "V klasické logice není spor možný."
            }
        },
        {
            q: "Spojka 'buď..., anebo...' se liší od 'nebo' tím, že:",
            a: "Neliší se", b: "Vylučuje možnost, že platí oba", c: "Je vždy nepravdivá",
            ans: "b",
            expl: {
                a: "Liší se zásadně v případě (1, 1).",
                b: "Správně. Jde o exkluzivní disjunkci.",
                c: "Je pravdivá právě v polovině případů."
            }
        },
        {
            q: "Implikace 0 → 1 je:",
            a: "0", b: "1", c: "Nesmysl",
            ans: "b",
            expl: {
                a: "Špatně. Pokud slibuji 'Když vyhraješ, dám ti kilo' a ty nevyhraješ, ale já ti kilo přesto dám, slib jsem neporušil.",
                b: "Správně. Z nepravdy může plynout pravda.",
                c: "V logice má toto jasnou hodnotu 1."
            }
        },
		
    // --- 3. ÚSUDKY (10x) ---		
        {
            q: "Máme úsudek: p → q, p. Co vyplývá?",
            a: "q", b: "¬q", c: "Nic",
            ans: "a",
            expl: {
                a: "Správně. Toto je pravidlo Modus Ponens.",
                b: "To by byl spor s předpoklady.",
                c: "Vyplývá jasný závěr q."
            }
        },
        {
            q: "Úsudek: p → q, ¬q. Co vyplývá?",
            a: "p", b: "¬p", c: "Nic",
            ans: "b",
            expl: {
                a: "Kdyby platilo p, muselo by platit q, což víme, že neplatí.",
                b: "Správně. Pravidlo Modus Tollens.",
                c: "Vyplývá ¬p."
            }
        },
        {
            q: "Úsudek: p ∨ q, ¬p. Co vyplývá?",
            a: "q", b: "¬q", c: "p ∧ q",
            ans: "a",
            expl: {
                a: "Správně. Disjunktivní sylogismus. Pokud musí platit aspoň jeden a první neplatí, musí druhý.",
                b: "To by popřelo první předpoklad p ∨ q.",
                c: "O p víme, že neplatí."
            }
        },
        {
            q: "Klam 'Potvrzení následku' vypadá takto:",
            a: "p → q, p, tedy q", b: "p → q, q, tedy p", c: "p → q, ¬p, tedy ¬q",
            ans: "b",
            expl: {
                a: "To je platný Modus Ponens.",
                b: "Správně. To, že nastal následek, neznamená, že musela nastat zrovna tato příčina.",
                c: "To je klam popření antecedentu."
            }
        },
        {
            q: "Co vyplývá z: 'Všichni lidé jsou smrtelní' a 'Sókratés je člověk'?",
            a: "Sókratés je smrtelný", b: "Sókratés je bůh", c: "Lidé jsou Sókratové",
            ans: "a",
            expl: {
                a: "Správně. Klasický sylogismus (Barbara).",
                b: "To odporuje první premisě.",
                c: "To je logicky nesmyslná konverze."
            }
        },
        {
            q: "Klam 'Popření antecedentu' je:",
            a: "p → q, ¬p, tedy ¬q", b: "p → q, q, tedy p", c: "p → q, ¬q, tedy ¬p",
            ans: "a",
            expl: {
                a: "Správně. To, že nenastala jedna příčina, neznamená, že následek nezpůsobilo něco jiného.",
                b: "To je klam potvrzení následku.",
                c: "To je platný Modus Tollens."
            }
        },
        {
            q: "Máme p ↔ q a ¬p. Co vyplývá?",
            a: "q", b: "¬q", c: "p ∨ q",
            ans: "b",
            expl: {
                a: "Ekvivalence vyžaduje stejnou hodnotu. p je 0, tedy i q musí být 0.",
                b: "Správně. Jsou na 'stejné lodi'.",
                c: "To by znamenalo, že aspoň jeden je 1, ale oba jsou 0."
            }
        },
        {
            q: "Úsudek 'A → B, B → C, tedy A → C' je:",
            a: "Hypotetický sylogismus", b: "Klam", c: "Kontradikce",
            ans: "a",
            expl: {
                a: "Správně. Jde o tranzitivitu implikace.",
                b: "Není to klam, je to jeden z nejpevnějších pilířů dedukce.",
                c: "Není to spor, ale logická pravda."
            }
        },
        {
            q: "Co znamená v logice 'Ex falso quodlibet'?",
            a: "Z nepravdy plyne cokoli", b: "Lež má krátké nohy", c: "Pravda zvítězí",
            ans: "a",
            expl: {
                a: "Správně. Pokud přijmeme spor (0), můžeme dokázat jakýkoliv nesmysl.",
                b: "To je přísloví, nikoliv logický princip.",
                c: "To je motto, ale ne logické pravidlo."
            }
        },
        {
            q: "Úsudek 'Někteří A jsou B, Někteří B jsou C, tedy Někteří A jsou C' je:",
            a: "Platný", b: "Neplatný", c: "Tautologie",
            ans: "b",
            expl: {
                a: "Špatně. Množiny A a C se nemusí vůbec dotýkat.",
                b: "Správně. Z dvou částečných premis nelze v sylogismu nic vyvodit.",
                c: "Tautologie je pravda za všech okolností, toto je naopak chyba."
            }
        },
// --- 4. EXPERTNÍ (10x - SLOŽITĚJŠÍ) ---
        {
            q: "Jaká je negace výroku 'Pokud prší a fouká, zůstanu doma'?",
            a: "Prší, fouká a nezůstanu doma", b: "Neprší nebo nefouká a zůstanu doma", c: "Pokud neprší, nezůstanu doma",
            ans: "a",
            expl: {
                a: "Správně. ¬((p ∧ q) → r) ≡ (p ∧ q) ∧ ¬r. Předpoklad platí, slib (zůstat doma) porušen.",
                b: "To je pokus o negaci částí, ale ne celého vztahu implikace.",
                c: "To je klam záměny podmínky."
            }
        },
        {
            q: "Výrok 'p → (q → p)' je:",
            a: "Tautologie", b: "Kontradikce", c: "Splnitelný, ale ne platný",
            ans: "a",
            expl: {
                a: "Správně. Jde o zákon zjednodušení. Pokud p platí, tak p plyne z čehokoliv.",
                b: "Zkuste dosadit 0 a 1, nikdy nedostanete 0.",
                c: "Je to platný zákon klasické logiky."
            }
        },
        {
            q: "Co je kontrapozicí složeného výroku (p ∧ q) → r?",
            a: "¬r → (¬p ∨ ¬q)", b: "r → (p ∧ q)", c: "¬(p ∧ q) → ¬r",
            ans: "a",
            expl: {
                a: "Správně. Obrátíme směr a negujeme obě strany (včetně aplikace De Morgana na závorku).",
                b: "To je konverze, která není ekvivalentní.",
                c: "To je inverze, která není ekvivalentní."
            }
        },
        {
            q: "Výrok ¬p ↔ p je:",
            a: "Vždy pravdivý", b: "Vždy nepravdivý (kontradikce)", c: "Pravdivý, jen když p je 0",
            ans: "b",
            expl: {
                a: "Ekvivalence vyžaduje stejné hodnoty, ale ¬p a p jsou vždy opačné.",
                b: "Správně. Žádný výrok nemůže být ekvivalentní své negaci.",
                c: "Když p=0, ¬p=1. 1 ↔ 0 je 0. Stále nepravda."
            }
        },
        {
            q: "Pokud platí ¬(p ↔ q), co to říká o hodnotách p a q?",
            a: "Jsou stejné", b: "Jsou různé", c: "Obě jsou 1",
            ans: "b",
            expl: {
                a: "To by platila ekvivalence bez negace.",
                b: "Správně. Negace ekvivalence je XOR (exkluzivní disjunkce).",
                c: "To by byla ekvivalence pravdivá."
            }
        },
        {
            q: "Úsudek: ((p → q) ∧ ¬q) → ¬p je:",
            a: "Tautologie", b: "Kontradikce", c: "Závislý na obsahu p",
            ans: "a",
            expl: {
                a: "Správně. Je to zápis pravidla Modus Tollens jako jednoho výroku.",
                b: "Modus Tollens není spor, je to zákon.",
                c: "Zákony logiky na obsahu (počasí, barvy) nezávisí."
            }
        },
        {
            q: "Co získáme negací ∀x (P(x) → Q(x))?",
            a: "∃x (P(x) ∧ ¬Q(x))", b: "∀x (¬P(x) ∨ Q(x))", c: "∃x (¬P(x) → ¬Q(x))",
            ans: "a",
            expl: {
                a: "Správně. Negace 'všech' je 'existuje' a negace implikace je konjunkce s negovaným následkem.",
                b: "To je pouze přepis implikace, nikoliv negace.",
                c: "Kvantifikátor se sice změnil, ale vnitřek je špatně negován."
            }
        },
        {
            q: "Výrok (p ∧ q) ∨ (¬p ∨ ¬q) je:",
            a: "Tautologie", b: "Kontradikce", c: "Výrok o počasí",
            ans: "a",
            expl: {
                a: "Správně. Jde o (X) ∨ ¬(X). Buď platí konjunkce, nebo její negace. Jedno z toho vždy.",
                b: "Spor by to byl se spojkou 'a' uprostřed.",
                c: "Je to abstraktní logická forma."
            }
        },
        {
            q: "Který vztah je tranzitivní?",
            a: "Implikace", b: "Negace", c: "Disjunkce",
            ans: "a",
            expl: {
                a: "Správně. Pokud p→q a q→r, pak p→r.",
                b: "Negace se sčítá (negace negace), netvoří řetězce.",
                c: "U disjunkce p∨q a q∨r nevyplývá p∨r."
            }
        },
        {
            q: "V klasické logice výrok ¬(p → ¬p) odpovídá čemu?",
            a: "p ∧ p (tedy p)", b: "¬p", c: "Vždy 1",
            ans: "a",
            expl: {
                a: "Správně. ¬(p → ¬p) ≡ p ∧ ¬(¬p) ≡ p ∧ p ≡ p.",
                b: "To by byla hodnota vnitřku závorky před negací.",
                c: "Záleží na hodnotě p. Pokud p=0, výrok je 0."
            }
        }


    ]
};
