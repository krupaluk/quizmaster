window.data_logicke_hadanky = {
    "questions": [
  {
    q: "Premisa 1: Všichni savci mají srdce. Premisa 2: Velryba je savec. Co z toho logicky vyplývá?",
    a: "Všechna zvířata se srdcem jsou velryby.",
    b: "Velryba má srdce.",
    c: "Někteří savci nejsou velryby.",
    ans: "b",
    expl: {
      a: "To by byla nepřípustná generalizace. Srdce mají i ptáci nebo plazi.",
      b: "Jde o klasický Modus Ponens (specifikaci). Pokud vlastnost (srdce) platí pro celou množinu (savci) a velryba do ní patří, musí vlastnost platit i pro ni. Je to neprůstřelný logický závěr.",
      c: "To může být pravda, ale nevyplývá to z uvedených premis."
    }
  },
  {
    q: "Premisa 1: Pokud prší, je mokro. Premisa 2: Není mokro. Jaký je závěr?",
    a: "Prší.",
    b: "Neprší.",
    c: "Možná pršelo dříve.",
    ans: "b",
    expl: {
      a: "To by byl přímý rozpor s premisami.",
      b: "Pravidlo Modus Tollens: Pokud z A plyne B a víme, že neplatí následek (¬B), nemohl nastat ani předpoklad (¬A). Kdyby pršelo, muselo by být mokro.",
      c: "Logika pracuje pouze s informacemi v premisách, časový posun zde neřešíme."
    }
  },
  {
    q: "P1: Žádný politik není lhář. P2: Někteří lidé jsou politici. Závěr:",
    a: "Někteří lidé nejsou lháři.",
    b: "Všichni lidé jsou lháři.",
    c: "Žádný člověk není lhář.",
    ans: "a",
    expl: {
      a: "Tato skupina lidí (politici) je průnikem mezi 'lidmi' a těmi, co 'nejsou lháři'. Protože existují lidé-politici a žádný z nich nelže, existují lidé, kteří nejsou lháři.",
      b: "To je v přímém rozporu s informací, že aspoň někteří (politici) nelžou.",
      c: "O ostatních lidech (nepoliticích) premisy nic neříkají, závěr by byl příliš široký."
    }
  },
  {
    q: "P1: Pokud piju kávu, nespím. P2: Teď nespím. Co můžeme říct o kávě?",
    a: "Určitě jsem pil kávu.",
    b: "O pití kávy nelze nic s jistotou říct.",
    c: "Určitě jsem nepil kávu.",
    ans: "b",
    expl: {
      a: "To je logická chyba (potvrzení následku). Nespavost může mít i jiné příčiny (stres, hluk).",
      b: "Vztah A → B říká, co se stane, když platí A. Neříká ale, že B nemůže nastat i z jiného důvodu. Z přítomnosti následku (nespím) nelze zpětně potvrdit příčinu (kávu).",
      c: "To také nevíme, kávu jsem klidně mohl pít a nespavost je toho důsledkem."
    }
  },
  {
    q: "P1: Všechny růže jsou květiny. P2: Některé květiny rychle vadnou. Plyne z toho, že některé růže rychle vadnou?",
    a: "Ano, je to jasné.",
    b: "Ne, nevyplývá.",
    c: "Pouze pokud jsou růže červené.",
    ans: "b",
    expl: {
      a: "To je častá chyba. Množina 'vadnoucích květin' a množina 'růží' se nemusí vůbec překrývat, obě jsou jen podmnožiny 'květin'.",
      b: "Představte si to graficky (Vennovy diagramy). Růže jsou v jedné části květin, vadnoucí v jiné. Bez další informace o jejich průniku nelze závěr učinit.",
      c: "Barva růží je pro logickou platnost argumentu irelevantní."
    }
  },
  {
    q: "P1: Každý, kdo má klíč, může vstoupit. P2: Petr nemá klíč. Závěr:",
    a: "Petr nemůže vstoupit.",
    b: "Petr může vstoupit jinudy.",
    c: "Z uvedeného nevyplývá, že Petr nemůže vstoupit.",
    ans: "c",
    expl: {
      a: "To je chyba 'popření antecedentu'. Premisa říká, že klíč stačí ke vstupu, ale neříká, že je to jediný způsob (možná má Petr kartu nebo mu někdo otevře).",
      b: "To je spekulace mimo rámec zadaných informací.",
      c: "Abychom mohli říct, že Petr nemůže vstoupit, musela by premisa znít: 'Vstoupit může JEN TEN, kdo má klíč'."
    }
  },
  {
    q: "P1: Buď budu studovat, nebo půjdu do kina. P2: Do kina nejdu. Závěr:",
    a: "Budu studovat.",
    b: "Nepůjdu studovat.",
    c: "Budu spát.",
    ans: "a",
    expl: {
      a: "Jde o disjunktivní sylogismus. Pokud máme dvě možnosti a jedna je vyloučena, musí platit ta zbývající (za předpokladu, že disjunkce je pravdivá).",
      b: "To by popřelo první premisu.",
      c: "Informace o spánku v argumentu chybí."
    }
  },
  {
    q: "P1: Všichni psi jsou věrní. P2: Žádná kočka není pes. Vyplývá z toho, že žádná kočka není věrná?",
    a: "Ano.",
    b: "Ne.",
    c: "Pouze u některých koček.",
    ans: "b",
    expl: {
      a: "To je chyba. To, že psi jsou věrní, nebere možnost věrnosti kočkám. Je to stejné jako říct 'Všichni Italové jsou lidé, žádný Čech není Ital, tedy žádný Čech není člověk'.",
      b: "Věrnost může být vlastností mnoha druhů. Vyloučením psů nevylučujeme věrnost u jiných zvířat.",
      c: "Logika buď vyplývání potvrdí pro celou skupinu, nebo ne."
    }
  },
  {
    q: "P1: Pokud vyhraju, koupím ti auto. P2: Pokud ti koupím auto, nebudeš mít peníze na benzín. Závěr:",
    a: "Pokud vyhraju, nebudeš mít peníze na benzín.",
    b: "Pokud nevyhraju, budeš mít peníze na benzín.",
    c: "Vyhraju a koupím ti auto.",
    ans: "a",
    expl: {
      a: "Jde o hypotetický sylogismus (tranzitivitu). Pokud A vede k B a B vede k C, pak A vede k C. Řetězec je logicky souvislý.",
      b: "To je chyba popření předpokladu. Peníze na benzín ti mohou dojít i z jiného důvodu.",
      c: "To nevíme, premisy mluví o podmínkách, nikoliv o tom, co se skutečně stalo."
    }
  },
  {
    q: "P1: Všichni géniové jsou roztržití. P2: Albert byl roztržitý. Závěr:",
    a: "Albert byl génius.",
    b: "Z těchto premis nevyplývá, že Albert byl génius.",
    c: "Albert nebyl roztržitý.",
    ans: "b",
    expl: {
      a: "To je častá chyba 'přiřazení podmětu k následku'. Roztržitý může být i úplný hlupák.",
      b: "Množina géniů je celá uvnitř množiny roztržitých. Albert patří mezi roztržité, ale nevíme, zda do té malé 'géniální' části, nebo do té zbylé.",
      c: "To je v přímém rozporu s P2."
    }
  },
  {
    q: "P1: Pouze bohatí lidé si mohou dovolit tento jachting. P2: Marek si tento jachting dovolit nemůže. Závěr:",
    a: "Marek není bohatý.",
    b: "Marek je chudý.",
    c: "Z premis nevyplývá, že Marek není bohatý.",
    ans: "c",
    expl: {
      a: "Pozor na slovo 'pouze'. To říká, že bohatství je nutná podmínka, ale neříká, že je postačující. Marek může být bohatý, ale peníze má zablokované nebo jachting nesnáší.",
      b: "Logika nezná pojem 'chudý' jako opak, zná jen 'bohatý' a 'ne-bohatý'.",
      c: "Správně. 'Pouze A dělají B' znamená 'Pokud děláš B, musíš být A'. Marek ale B nedělá, což nám o jeho příslušnosti k A nic neříká."
    }
  },
  {
    q: "P1: Někteří umělci jsou bohémi. P2: Všichni bohémi jsou nespolehliví. Závěr:",
    a: "Všichni umělci jsou nespolehliví.",
    b: "Někteří umělci jsou nespolehliví.",
    c: "Žádný umělec není nespolehlivý.",
    ans: "b",
    expl: {
      a: "To je příliš silné tvrzení, premisa mluví jen o 'některých'.",
      b: "Protože existuje skupina lidí, kteří jsou zároveň umělci i bohémi, a každý bohém je nespolehlivý, musí být tito konkrétní umělci-bohémi nespolehliví.",
      c: "To popírá logický průnik skupin v premisách."
    }
  },
  {
    q: "P1: Žádný čtverec není kulatý. P2: Všechny mince jsou kulaté. Závěr:",
    a: "Žádná mince není čtverec.",
    b: "Některé mince jsou čtvercové.",
    c: "Mince jsou kulatější než čtverce.",
    ans: "a",
    expl: {
      a: "Množina čtverců a množina kulatých věcí jsou disjunktní (nemají průnik). Protože mince jsou celé v množině kulatých věcí, nemohou mít s množinou čtverců nic společného.",
      b: "To by byl logický spor s premisami.",
      c: "Logika neřeší míru vlastnosti (kulatější), ale její přítomnost."
    }
  },
  {
    q: "P1: Pokud vyhraje Sparta, budu smutný. P2: Pokud vyhraje Slavia, budu smutný. P3: Vyhraje buď Sparta, nebo Slavia. Závěr:",
    a: "Budu smutný.",
    b: "Budu veselý.",
    c: "Nevím, kdo vyhraje.",
    ans: "a",
    expl: {
      a: "Jde o dilema. Ať nastane kterákoliv z uvažovaných možností (Sparta nebo Slavia), obě vedou ke stejnému výsledku (smutek). Proto je výsledek jistý.",
      b: "To by popřelo obě podmínkové premisy.",
      c: "To je sice pravda, ale otázka zní na logický závěr o vašem stavu."
    }
  },
  {
    q: "P1: Všichni lidé jsou smrtelní. P2: Sókratés je smrtelný. Závěr:",
    a: "Sókratés je člověk.",
    b: "Z premis nevyplývá, že Sókratés je člověk.",
    c: "Sókratés není člověk.",
    ans: "b",
    expl: {
      a: "Toto je slavný 'sylogistický chyták'. Sókratés by mohl být kůň nebo pes – ti jsou také smrtelní.",
      b: "Stejně jako u Alberta (otázka 10), příslušnost k nadřazené skupině (smrtelní) nezaručuje příslušnost ke konkrétní podskupině (lidé).",
      c: "To také nevíme, premisy to nevylučují."
    }
  },
  
  {
    q: "P1: Všichni lvi jsou masožravci. P2: Někteří lvi jsou v zoo. Závěr:",
    a: "Všichni masožravci jsou v zoo.",
    b: "Někteří masožravci jsou v zoo.",
    c: "Žádný masožravec není v zoo.",
    ans: "b",
    expl: {
      a: "To je nepřípustné zobecnění. Premisa mluví jen o některých lvech, ne o všech masožravcích světa.",
      b: "Správně. Protože ti konkrétní lvi, kteří jsou v zoo, jsou zároveň masožravci (dle P1), existuje průnik mezi množinou 'v zoo' a 'masožravci'.",
      c: "To je v přímém rozporu s logickým spojením obou premis."
    }
  },
  {
    q: "P1: Pokud je dům zateplený, šetří energii. P2: Dům nešetří energii. Závěr:",
    a: "Dům není zateplený.",
    b: "Dům je zateplený, ale špatně.",
    c: "Zateplení nemá na energii vliv.",
    ans: "a",
    expl: {
      a: "Klasický Modus Tollens. Pokud platí pravidlo A → B a víme, že výsledek B nenastal, nemohla nastat ani příčina A.",
      b: "To je spekulace. Logika pracuje s binární hodnotou (buď je zateplený, nebo není).",
      c: "To popírá platnost první premisy, kterou musíme pro účely argumentu brát jako fakt."
    }
  },
  {
    q: "P1: Alespoň jeden student dostal jedničku. P2: Všichni, kdo dostali jedničku, jdou na výlet. Závěr:",
    a: "Všichni studenti jdou na výlet.",
    b: "Alespoň jeden student jde na výlet.",
    c: "Žádný student nejde na výlet.",
    ans: "b",
    expl: {
      a: "Nevíme, zda jedničku dostali všichni. Víme jen o 'alespoň jednom'.",
      b: "Přenášíme vlastnost 'jedničkáře' na vlastnost 'výletníka'. Protože existuje aspoň jeden student-jedničkář, musí tento konkrétní člověk jít na výlet.",
      c: "To by byl spor s informací v premisách."
    }
  },
  {
    q: "P1: Pouze dospělí (D) mají právo volit (V). P2: Petr je dospělý. Závěr:",
    a: "Petr má právo volit.",
    b: "Petr nemusí mít právo volit.",
    c: "Petr určitě nemá právo volit.",
    ans: "b",
    expl: {
      a: "Chyba. 'Pouze' uvozuje nutnou podmínku (V → D), nikoliv postačující. Petr může být dospělý, ale být cizinec nebo zbaven svéprávnosti.",
      b: "Správně. Být dospělým je 'vstupenka' k volbám, ale nezaručuje, že ji Petr skutečně dostal. Víme jen, že splnil jednu z nutných podmínek.",
      c: "To nevíme, dospělost mu v tom naopak pomáhá."
    }
  },
  {
    q: "P1: Žádný pták není savec. P2: Netopýr je savec. Závěr:",
    a: "Netopýr není pták.",
    b: "Netopýr je pták, který kojí.",
    c: "Někteří ptáci jsou netopýři.",
    ans: "a",
    expl: {
      a: "Množiny ptáků a savců jsou disjunktní (nemají průnik). Protože netopýr patří do jedné, nemůže logicky patřit do druhé.",
      b: "To je biologický i logický nesmysl vzhledem k P1.",
      c: "P1 to výslovně zakazuje."
    }
  },
  {
    q: "P1: Pokud budeš lhát, ztratíš důvěru. P2: Pokud ztratíš důvěru, nikdo ti nepůjčí peníze. Závěr:",
    a: "Lhaní vede k tomu, že ti nikdo nepůjčí peníze.",
    b: "Pokud ti někdo půjčil peníze, nelhal jsi.",
    c: "Obě možnosti jsou správně.",
    ans: "c",
    expl: {
      a: "Toto je přímý řetězec (A → B → C), tedy A → C.",
      b: "Toto je kontrapozice onoho řetězce (¬C → ¬A). Pokud nenastal konečný následek (někdo ti půjčil), nemohla nastat ani původní příčina (lhaní).",
      c: "Logika umožňuje vyvodit jak přímý směr, tak jeho obrácenou, negovanou verzi."
    }
  },
  {
    q: "P1: Všichni sportovci jsou disciplinovaní. P2: Karel není sportovec. Závěr:",
    a: "Karel není disciplinovaný.",
    b: "Karel může být disciplinovaný.",
    c: "Žádný nesportovec není disciplinovaný.",
    ans: "b",
    expl: {
      a: "To je logická chyba. Disciplína může být vlastností i vědců nebo umělců. Karel ji může mít, i když nesportuje.",
      b: "Správně. P1 říká 'sportovec → disciplína'. O nesportovcích (¬sportovec) premisy nic neříkají, jejich stav je tedy otevřený.",
      c: "To je nepřípustné rozšíření premisy na celou populaci."
    }
  },
  {
    q: "P1: Nejvýše tři lidé přišli na schůzi. P2: Petr a Pavel přišli na schůzi. Závěr:",
    a: "Na schůzi přišel ještě jeden člověk.",
    b: "Na schůzi mohl přijít ještě jeden člověk, nebo nikdo další.",
    c: "Na schůzi přišlo právě pět lidí.",
    ans: "b",
    expl: {
      a: "To nevíme, 'nejvýše tři' neznamená 'přesně tři'.",
      b: "Logický limit je 3. Petr (1) + Pavel (2) = 2. Zbývá místo pro maximálně jednoho dalšího člověka, ale schůze mohla skončit i jen s nimi dvěma.",
      c: "To je v přímém rozporu s horním limitem v P1."
    }
  },
  {
    q: "P1: Každé sudé číslo je dělitelné dvěma. P2: Číslo 7 není sudé. Závěr:",
    a: "Číslo 7 není dělitelné dvěma.",
    b: "Z těchto premis nevyplývá, zda je 7 dělitelná dvěma.",
    c: "Číslo 7 je liché.",
    ans: "b",
    expl: {
      a: "Matematicky je to pravda, ale logicky to z TĚCHTO premis neplyne. Museli bychom mít další premisu, že 'JEN sudá čísla jsou dělitelná dvěma'.",
      b: "Správně. Logika hlídá jen to, co je v textu. Pokud text neříká, co dělají ne-sudá čísla, nemůžeme o jejich dělitelnosti nic tvrdit.",
      c: "Pojem 'lichý' se v premisách vůbec nevyskytuje."
    }
  },
  {
    q: "P1: Buď je pachatelem zahradník, nebo komorník. P2: Pokud by to byl zahradník, musel by mít hlínu na botách. P3: Zahradník hlínu na botách nemá. Závěr:",
    a: "Pachatelem je komorník.",
    b: "Pachatelem je zahradník.",
    c: "Pachatel nebyl nalezen.",
    ans: "a",
    expl: {
      a: "Kombinace pravidel: Z P2 a P3 (Modus Tollens) vyplývá, že zahradník to nebyl. Z P1 (vylučovací 'nebo') pak zbývá jediná možnost – komorník.",
      b: "To vyloučil důkaz s hlínou.",
      c: "Pachatel je určen logickou eliminací ze zadaných možností."
    }
  },
  {
    q: "P1: Všechna auta v tomto bazaru jsou levná. P2: Moje auto není z tohoto bazaru. Závěr:",
    a: "Moje auto je drahé.",
    b: "Moje auto může být levné.",
    c: "Žádné levné auto není moje.",
    ans: "b",
    expl: {
      a: "Opět chyba. Levná auta se prodávají i v jiných bazarech nebo soukromě.",
      b: "Původní tvrzení 'bazar → levné' neříká nic o autech mimo bazar. Ta mohou být jakkoliv drahá i levná.",
      c: "To nevíme, vaše auto může být levné, jen jsme ho nekoupili v tomto konkrétním bazaru."
    }
  },
  {
    q: "P1: Žádný student (S) nespí (¬P) v hodině. P2: Petr (p) je student. Závěr:",
    a: "Petr v hodině nespí.",
    b: "Petr v hodině spí, protože se nudí.",
    c: "Někteří studenti spí.",
    ans: "a",
    expl: {
      a: "Univerzální zápor (Žádné S není P) znamená, že vlastnost 'nespaní' platí pro každého jednoho člena skupiny. Proto i pro Petra.",
      b: "To popírá premisu P1.",
      c: "To je v rozporu s 'žádný' (v klasické logice)."
    }
  },
  {
    q: "P1: Pokud vyhraju v loterii, dám výpověď. P2: Dal jsem výpověď. Závěr:",
    a: "Vyhrál jsem v loterii.",
    b: "Nevyhrál jsem v loterii.",
    c: "Z premis nelze o výhře nic s jistotou vyvodit.",
    ans: "c",
    expl: {
      a: "Logická chyba 'potvrzení následku'. Výpověď jste mohl dát, protože vás naštval šéf nebo jste si našel jinou práci.",
      b: "To také nevíme, výhra mohla být skutečným důvodem, ale premisy to nepotvrzují jednosměrně.",
      c: "Správně. Implikace funguje jen směrem dopředu (Výhra → Výpověď). Směrem dozadu funguje jen negace."
    }
  },
  {
    q: "P1: Někteří vědci jsou muzikanti. P2: Žádný muzikant není tichý člověk. Závěr:",
    a: "Někteří vědci nejsou tichí lidé.",
    b: "Všichni vědci jsou hluční.",
    c: "Žádný vědec není muzikant.",
    ans: "a",
    expl: {
      a: "Existuje skupina lidí (vědci-muzikanti). Protože žádný muzikant není tichý, nemohou být tichí ani tito konkrétní vědci.",
      b: "To je příliš silné tvrzení, o vědcích-nemuzikantech nic nevíme.",
      c: "To přímo popírá první premisu."
    }
  },
  {
    q: "P1: Právě když bude pršet (P), zůstanu doma (D). P2: Neprší. Závěr:",
    a: "Zůstanu doma.",
    b: "Nezůstanu doma.",
    c: "Půjdu do kina.",
    ans: "b",
    expl: {
      a: "To by popřelo vztah ekvivalence.",
      b: "Spojení 'právě když' označuje ekvivalent (P ↔ D). To znamená, že obě strany musí mít vždy stejnou hodnotu. Pokud neprší (0), nemohu zůstat doma (0).",
      c: "To je spekulace o tom, co budu dělat jiného, logika zná jen 'doma' a 'ne-doma'."
    }
  },

  {
    q: "P1: Pokud je detektiv zkušený (Z) a má důkazy (D), pak dopadne pachatele (P). P2: Pachatel nebyl dopaden (¬P). P3: Detektiv je zkušený (Z). Závěr:",
    a: "Detektiv nemá důkazy.",
    b: "Detektiv není zkušený.",
    c: "Pachatel utekl do ciziny.",
    ans: "a",
    expl: {
      a: "Jde o Modus Tollens na složený předpoklad. Aby platilo P, muselo by platit (Z ∧ D). Protože P neplatí, nesmí platit celá závorka (Z ∧ D). Jelikož víme, že Z platí, musí nutně selhat D (důkazy).",
      b: "To je v přímém rozporu s premisou P3.",
      c: "To je spekulace mimo logický systém premis."
    }
  },
  {
    q: "P1: Všechna jídla v této restauraci jsou buď veganská (V), nebo bezlepková (B). P2: Toto jídlo není veganské (¬V). Závěr:",
    a: "Toto jídlo je bezlepkové.",
    b: "Toto jídlo není ani veganské, ani bezlepkové.",
    c: "Toto jídlo je masové.",
    ans: "a",
    expl: {
      a: "Disjunktivní sylogismus: Pokud máme dvě možnosti (V ∨ B) a první je popřena (¬V), musí logicky platit ta druhá (B).",
      b: "To by popřelo první premisu, která říká, že každé jídlo spadá do jedné z těchto kategorií.",
      c: "O obsahu masa nic nevíme, víme jen, že splňuje podmínku bezlepkovosti."
    }
  },
  {
    q: "P1: Kdo (x) neumí cizí jazyk (¬J), ten (x) nemůže cestovat (¬C). P2: Petr (p) může cestovat (C). Závěr:",
    a: "Petr neumí cizí jazyk.",
    b: "Petr umí cizí jazyk.",
    c: "Petr cestuje jen po Česku.",
    ans: "b",
    expl: {
      a: "To by byl přímý rozpor s pravidlem v P1.",
      b: "P1 říká ¬J → ¬C. Kontrapozicí získáme C → J. Protože Petr může cestovat (C), musí nutně umět cizí jazyk (J).",
      c: "To je irelevantní informace vzhledem k logické struktuře."
    }
  },
  {
    q: "P1: Žádný lenoch (L) neuspěje (¬U). P2: Někteří sportovci (S) uspěli (U). Závěr:",
    a: "Všichni sportovci jsou lenoši.",
    b: "Někteří sportovci nejsou lenoši.",
    c: "Žádný sportovec není lenoch.",
    ans: "b",
    expl: {
      a: "To je v rozporu s P1 a P2 (lenoši přece neuspějí).",
      b: "Existuje skupina sportovců, kteří uspěli. Protože žádný lenoch neuspěje, tito úspěšní sportovci v žádném případě nemohou být lenochy.",
      c: "To nevíme, někteří jiní sportovci lenochy být mohou (pokud neuspěli)."
    }
  },
  {
    q: "P1: Pokud vím (V), že nic nevím (N), jsem moudrý (M). P2: Nejsem moudrý (¬M). Závěr:",
    a: "Nevím, že nic nevím.",
    b: "Vím všechno.",
    c: "Nic nevím.",
    ans: "a",
    expl: {
      a: "Aplikace Modus Tollens: Pokud (V ∧ N) → M a platí ¬M, pak neplatí (V ∧ N). Tedy není pravda, že vím, že nic nevím.",
      b: "To z negace 'vědění o nevědění' nevyplývá.",
      c: "To je jen část vyvráceného předpokladu, samo o sobě to jako závěr nestačí."
    }
  },
  {
    q: "P1: Alespoň jeden obraz v galerii je falzifikát (F). P2: Všechny falzifikáty budou zničeny (Z). Závěr:",
    a: "Všechny obrazy v galerii budou zničeny.",
    b: "Alespoň jeden obraz v galerii bude zničen.",
    c: "Žádný obraz nebude zničen.",
    ans: "b",
    expl: {
      a: "To by platilo jen v případě, že by všechny obrazy byly falzifikáty.",
      b: "Máme průnik množin 'obrazy' a 'falzifikáty'. Protože každý prvek z množiny 'falzifikáty' se přesouvá do množiny 'zničené', musí tam skončit i ten jeden (či více) obraz.",
      c: "To popírá obě premisy."
    }
  },
  {
    q: "P1: Pouze když (nutná podmínka) máš lístek (L), můžeš jít na koncert (K). P2: Máš lístek (L). Závěr:",
    a: "Můžeš jít na koncert.",
    b: "Z premis nevyplývá, že můžeš jít na koncert.",
    c: "Nesmíš jít na koncert.",
    ans: "b",
    expl: {
      a: "Pozor, 'pouze když' (K → L) neříká, že lístek je jediná podmínka. Můžeš mít lístek, ale koncert může být zrušen nebo můžeš být nemocný.",
      b: "Správně. Lístek je nutný (bez něj to nejde), ale není postačující (sám o sobě vstup nezaručuje).",
      c: "To nevíme, lístek ti v tom naopak dává šanci."
    }
  },
  {
    q: "P1: Všichni (x) havrani (H) jsou černí (C). P2: Tento pták (p) není havran (¬H). Závěr:",
    a: "Tento pták není černý.",
    b: "Tento pták je bílý.",
    c: "Z premis nevyplývá, jakou má pták barvu.",
    ans: "c",
    expl: {
      a: "Logická chyba (popření antecedentu). Černí mohou být i kosi nebo auta. Pokud pták není havran, barva zůstává neurčena.",
      b: "To je spekulace, bílá barva v premisách vůbec nefiguruje.",
      c: "Logika neumožňuje vyvodit závěr o barvě objektu, který nespadá do definované skupiny s danou vlastností."
    }
  },
  {
    q: "P1: Pokud (A nebo B), pak C. P2: Neplatí C. Závěr:",
    a: "Neplatí A a zároveň neplatí B.",
    b: "Neplatí A nebo neplatí B.",
    c: "Platí A, ale ne B.",
    ans: "a",
    expl: {
      a: "Modus Tollens nám dá ¬(A ∨ B). Podle De Morganových zákonů se negace disjunkce mění na konjunkci negací: ¬A ∧ ¬B. Tedy neplatí ani jedno.",
      b: "To je příliš slabé, neplatí totiž prokazatelně obojí.",
      c: "To by vedlo k platnosti C, což P2 vylučuje."
    }
  },
  {
    q: "P1: Každá (∀x) ryba (R) umí plavat (P). P2: Žádný (∀x) kámen (K) neumí plavat (¬P). Závěr:",
    a: "Žádný kámen není ryba.",
    b: "Některé ryby jsou kameny.",
    c: "Všechno, co plave, je ryba.",
    ans: "a",
    expl: {
      a: "Množina ryb je celá v množině 'plavců'. Množina kamenů je celá mimo množinu 'plavců'. Tyto dvě množiny tedy nemají žádný společný prvek.",
      b: "To je v přímém rozporu s oběma premisami.",
      c: "To nevíme, plavat mohou i lidé nebo lodě."
    }
  },
  {
    q: "P1: Pokud budu pracovat přesčas (P), vydělám víc (V). P2: Pokud vydělám víc (V), koupím si kolo (K). P3: Kolo jsem si nekoupil (¬K). Závěr:",
    a: "Nepracoval jsem přesčas.",
    b: "Pracoval jsem přesčas, ale peníze jsem ztratil.",
    c: "Vydělal jsem víc, ale kolo bylo drahé.",
    ans: "a",
    expl: {
      a: "Řetězový Modus Tollens. Z ¬K plyne přes P2 ¬V. Z ¬V plyne přes P1 ¬P. Celý řetězec se zhroutí od konce k začátku.",
      b: "To popírá první i druhou premisu.",
      c: "To popírá druhou premisu (V → K)."
    }
  },
  {
    q: "P1: Někteří studenti jsou nadaní. P2: Všichni nadaní lidé jsou skromní. P3: Petr není skromný. Závěr:",
    a: "Petr není nadaný.",
    b: "Petr není student.",
    c: "Petr je student, ale není nadaný.",
    ans: "a",
    expl: {
      a: "Z P2 a P3 (Modus Tollens) jasně vyplývá, že Petr nepatří do skupiny nadaných (protože by jinak musel být skromný).",
      b: "To nevíme, o Petrově studiu premisy nic neříkají (studenti mohou být i nenadaní).",
      c: "To, že Petr není nadaný, víme, ale o jeho studiu nemáme informace."
    }
  },
  {
    q: "P1: Buď lžeš (L), nebo se mýlíš (M). P2: Pokud se mýlíš (M), pak jsi nepozorný (N). P3: Jsi pozorný (¬N). Závěr:",
    a: "Lžeš.",
    b: "Mýlíš se.",
    c: "Jsi nepozorný a lžeš.",
    ans: "a",
    expl: {
      a: "Z P2 a P3 plyne ¬M (nemýlíš se). Protože P1 říká, že nastává buď L, nebo M, a my jsme vyloučili M, zbývá jediná možnost – že lžeš (L).",
      b: "To vyloučila premisa P3.",
      c: "To je logický spor s premisou P3."
    }
  },
  {
    q: "P1: Všichni (x) politici (P) jsou buď čestní (C), nebo populární (R). P2: Žádný (x) politik není čestný (¬C). Závěr:",
    a: "Všichni politici jsou populární.",
    b: "Někteří politici nejsou populární.",
    c: "Všichni lidé jsou populární.",
    ans: "a",
    expl: {
      a: "Protože každému politikovi zbývá jen jedna ze dvou povinných cest (čestnost byla pro všechny vyloučena v P2), musí všichni nutně spadat do kategorie populárních.",
      b: "To by popřelo P1 pro danou skupinu.",
      c: "O ne-politicích nemáme v premisách žádné informace."
    }
  },
  {
    q: "P1: Pokud si koupím lístek (L) a budu mít štěstí (S), vyhraju (V). P2: Nevyhrál jsem (¬V). Co z toho plyne?",
    a: "Nekoupil jsem si lístek nebo jsem neměl štěstí.",
    b: "Nekoupil jsem si lístek a zároveň jsem neměl štěstí.",
    c: "Měl jsem štěstí, ale lístek jsem si nekoupil.",
    ans: "a",
    expl: {
      a: "Negace konjunkce v předpokladu (L ∧ S) znamená ¬L ∨ ¬S. K neúspěchu stačí, aby chyběla aspoň jedna z těch dvou věcí.",
      b: "To je možné, ale logika to negarantuje (stačí výpadek jen jedné podmínky).",
      c: "To je jen jedna z možných variant, kterou ale ze zadaného nevyvodíme s jistotou."
    }
  },
  {
    q: "P1: Jen ten (x), kdo se učí (U) a má talent (T), uspěje (P). P2: Petr (p) neuspěl (¬P). Závěr:",
    a: "Petr se neučil nebo nemá talent.",
    b: "Petr se učil, ale nemá talent.",
    c: "Z premis nelze o Petrově učení či talentu nic s jistotou vyvodit.",
    ans: "c",
    expl: {
      a: "Tato možnost je častou chybou. P1 říká P → (U ∧ T), tedy úspěch vyžaduje obojí. Pokud Petr neuspěl (¬P), nevíme o splnění podmínek nic – mohl mít obojí a přesto neuspět (podmínka byla nutná, nikoliv postačující).",
      b: "To je spekulace, premisy neříkají, která z podmínek nebyla splněna (pokud vůbec nějaká).",
      c: "Správně. 'Jen ten, kdo...' uvozuje následek implikace. Absence úspěchu (¬P) nám o předpokladech (U, T) v tomto směru nic neříká."
    }
  },
  {
    q: "P1: Žádný (x) viník (V) není nevinný (¬N). P2: Někteří (x) podezřelí (P) jsou nevinní (N). Závěr:",
    a: "Někteří podezřelí nejsou viníci.",
    b: "Všichni podezřelí jsou viníci.",
    c: "Žádný podezřelý není viník.",
    ans: "a",
    expl: {
      a: "Existuje skupina podezřelých, kteří jsou nevinní. Protože žádný viník nemůže být nevinný (P1), tito konkrétní nevinní podezřelí logicky nemohou patřit do skupiny viníků.",
      b: "To přímo popírá P2 v kombinaci s P1.",
      c: "To nevíme, jiní podezřelí klidně viníky být mohou."
    }
  },
  {
    q: "P1: Pokud nepodepíšeš smlouvu (¬S), nedostaneš práci (¬P). P2: Práci jsi dostal (P). Závěr:",
    a: "Podepsal jsi smlouvu.",
    b: "Nepodepsal jsi smlouvu.",
    c: "Smlouva nebyla potřeba.",
    ans: "a",
    expl: {
      a: "Kontrapozice P1 (¬S → ¬P) je S → P, resp. v tomto případě P → S. Pokud nastal následek (dostal jsi práci), musel nastat i nezbytný předpoklad (podpis smlouvy).",
      b: "To by byl přímý rozpor s pravidlem v P1.",
      c: "P1 jasně říká, že bez podpisu to nejde, takže potřeba byla."
    }
  },
  {
    q: "P1: Každý (x) svědek (S), který mluvil s policií (P), mluvil i s právníkem (R). P2: Žádný (x) svědek nemluvil s právníkem (¬R). Závěr:",
    a: "Žádný svědek nemluvil s policií.",
    b: "Někteří svědci mluvili s policií tajně.",
    c: "Všichni svědci lhali.",
    ans: "a",
    expl: {
      a: "P1 říká S ∧ P → R. Modus Tollens s P2 (¬R) nám dává ¬(S ∧ P). Jelikož mluvíme o svědcích (S), musí být nepravdivá druhá část konjunkce – tedy nikdo z nich nemluvil s policií.",
      b: "To je spekulace mimo logický rámec.",
      c: "O pravdivosti výpovědí premisy nic neříkají."
    }
  },
  {
    q: "P1: Buď lžeš (L), nebo se mýlíš (M). P2: Pokud lžeš (L), cítíš vinu (V). P3: Necítíš vinu (¬V). Závěr:",
    a: "Mýlíš se.",
    b: "Lžeš.",
    c: "Nepamatuješ si to.",
    ans: "a",
    expl: {
      a: "Z P2 a P3 (Modus Tollens) vyplývá, že nelžeš (¬L). Protože P1 říká, že musí platit buď L, nebo M, zbývá po vyloučení lži jediná možnost – že se mýlíš.",
      b: "To vyloučila absence pocitu viny v P3.",
      c: "To je informace, která v argumentu vůbec nefiguruje."
    }
  },
  {
    q: "P1: Všichni (x) dobří řidiči (D) jsou ohleduplní (O). P2: Někteří (x) lidé (L) nejsou ohleduplní (¬O). Závěr:",
    a: "Někteří lidé nejsou dobří řidiči.",
    b: "Žádný člověk není dobrý řidič.",
    c: "Všichni špatní řidiči jsou lidé.",
    ans: "a",
    expl: {
      a: "Máme skupinu neohleduplných lidí. Protože být dobrým řidičem vyžaduje ohleduplnost, tito konkrétní lidé logicky nemohou být dobrými řidiči.",
      b: "To nevíme, jiní lidé (ti ohleduplní) dobrými řidiči být mohou.",
      c: "O vztahu 'špatných řidičů' a 'lidí' premisy nic neříkají."
    }
  },
  {
    q: "P1: Pokud je (x) číslo sudé (S), je dělitelné dvěma (D). P2: Číslo 'n' není dělitelné dvěma (¬D). Závěr:",
    a: "Číslo 'n' není sudé.",
    b: "Číslo 'n' je liché.",
    c: "Obě možnosti jsou v klasické aritmetice i logice správně.",
    ans: "c",
    expl: {
      a: "Logicky to vyplývá přímo přes Modus Tollens z P1 a P2.",
      b: "V klasické aritmetice je negací 'sudého' právě 'liché', takže jde o ekvivalentní závěr.",
      c: "Logický systém i vlastnosti čísel se zde shodují na stejném výsledku."
    }
  },
  {
    q: "P1: Pouze (x) ti, co mají vstupenku (V), jsou v sále (S). P2: Petr (p) není v sále (¬S). Závěr:",
    a: "Petr nemá vstupenku.",
    b: "Petr má vstupenku, ale je venku.",
    c: "Z premis nevyplývá, zda Petr má vstupenku.",
    ans: "c",
    expl: {
      a: "To je chyba. P1 říká S → V (vstupenka je nutná k pobytu v sále). To, že Petr v sále není, nám neříká nic o tom, zda vstupenku vlastní (může ji mít v kapse a být na kávě).",
      b: "To je jen jedna z možností, kterou ale logika negarantuje.",
      c: "Správně. Logika v tomto směru (popření antecedentu u nutné podmínky) mlčí."
    }
  },
  {
    q: "P1: Žádný (x) rozumný člověk (R) neriskuje zbytečně (¬Z). P2: Všichni (x) hazardní hráči (H) riskují zbytečně (Z). Závěr:",
    a: "Žádný hazardní hráč není rozumný člověk.",
    b: "Někteří hazardní hráči jsou rozumní.",
    c: "Riziko je rozumné.",
    ans: "a",
    expl: {
      a: "Množina rozumných a množina riskujících jsou disjunktní. Protože hazardní hráči jsou podmnožinou riskujících, nemohou mít s množinou rozumných žádný průnik.",
      b: "To je v přímém rozporu s oběma premisami.",
      c: "To je filozofický soud, nikoliv logický závěr z premis."
    }
  },
  {
    q: "P1: Pokud (A a B), pak C. P2: Pokud (D nebo E), pak ne-C. P3: Platí A a B. Co platí o D a E?",
    a: "Neplatí D a zároveň neplatí E.",
    b: "Neplatí D nebo neplatí E.",
    c: "Platí D i E.",
    ans: "a",
    expl: {
      a: "Z P1 a P3 vyplývá C. Druhá premisa říká (D ∨ E) → ¬C. Kontrapozicí získáme C → ¬(D ∨ E). Protože platí C, neplatí (D ∨ E), což podle De Morgana znamená ¬D ∧ ¬E.",
      b: "To je příliš slabé, neplatí prokazatelně obojí.",
      c: "To by vedlo k ¬C, což je ve sporu s tím, co jsme vyvodili z P1 a P3."
    }
  },
  {
    q: "P1: Všichni (x) svědkové (S) jsou buď nespolehliví (N), nebo podplacení (P). P2: Žádný (x) svědek není nespolehlivý (¬N). Závěr:",
    a: "Všichni svědkové jsou podplacení.",
    b: "Někteří svědkové jsou poctiví.",
    c: "Žádný svědek není podplacený.",
    ans: "a",
    expl: {
      a: "Každý svědek musí splňovat aspoň jednu ze dvou podmínek (N, P). Protože P2 paušálně vylučuje N pro všechny, zbývá pro každého jediná možnost – být podplacený (P).",
      b: "Pojem 'poctivý' premisy nedefinují a P1 ho v podstatě vylučuje.",
      c: "To by vedlo k logickému sporu u každého jednoho svědka."
    }
  },
  {
    q: "P1: Pouze když (x) svítí slunce (S), jdou lidé (L) na pláž (P). P2: Slunce nesvítí (¬S). Závěr:",
    a: "Lidé nejdou na pláž.",
    b: "Lidé jdou na pláž, ale je jim zima.",
    c: "Z premis nevyplývá, co lidé dělají.",
    ans: "a",
    expl: {
      a: "Správně. 'Pouze když' uvozuje nutnou podmínku (P → S). Pokud tato podmínka neplatí (¬S), nemůže nastat ani následek (P). Bez slunce není pláž.",
      b: "To je v přímém rozporu s logickou podmínkou v P1.",
      c: "Vyplývá to zcela jasně díky Modus Tollens."
    }
  },
  {
    q: "P1: Každý (x) student (S), který uspěl (U), musel buď hodně studovat (H), nebo mít štěstí (S). P2: Petr (p) uspěl (U). P3: Petr nestudoval (¬H). Závěr:",
    a: "Petr měl štěstí.",
    b: "Petr podváděl.",
    c: "Petr je geniální.",
    ans: "a",
    expl: {
      a: "Z P1 a P2 vyplývá, že Petr musel splnit (H ∨ S). Protože P3 vylučuje H, zbývá jediné logické vysvětlení v rámci systému – Petr měl štěstí.",
      b: "Možnost 'podvodu' systém nenabízí, nemůžeme ji vyvodit.",
      c: "To je opět spekulace mimo zadané premisy."
    }
  },
  {
    q: "P1: Pokud (A), pak (B nebo C). P2: Neplatí B ani C. Závěr:",
    a: "Neplatí A.",
    b: "Platí A.",
    c: "Platí B.",
    ans: "a",
    expl: {
      a: "Z P2 víme, že neplatí (B ∨ C). To je negace celého následku v P1. Podle Modus Tollens tedy nemohl nastat ani předpoklad A.",
      b: "To by vedlo k (B ∨ C), což P2 výslovně vylučuje.",
      c: "P2 říká přesný opak."
    }
  },
  {
    q: "Poslední otázka: P1: Žádné (x) nebezpečné zvíře (N) není krotké (¬K). P2: Tento tygr (t) je krotký (K). Závěr:",
    a: "Tento tygr není nebezpečné zvíře.",
    b: "Tento tygr je nebezpečný, ale krotký.",
    c: "Všichni tygři jsou nebezpeční.",
    ans: "a",
    expl: {
      a: "Množina nebezpečných a krotkých zvířat nemá průnik. Protože náš tygr patří mezi krotké, nemůže logicky patřit mezi nebezpečné (v rámci definic v premisách).",
      b: "To je logický spor s P1.",
      c: "O 'všech tygrech' premisy nic neříkají, mluví jen o tomto jednom konkrétním."
    }
  }

    ]
};
