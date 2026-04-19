window.data_logicke_hadanky = {
    "groups": {
        "sylogismy": {
            "title": "Sylogismy",
            "questions": 
[
    {
        q: "P1: Všichni lidé jsou smrtelní. P2: Sókratés je člověk. Závěr:",
        a: "Sókratés je smrtelný.",
        b: "Všichni lidé jsou Sókratés.",
        c: "Sókratés není smrtelný.",
        ans: "a",
        expl: {
            a: "Klasický sylogismus (Barbara): Pokud vlastnost náleží celému druhu (lidé), náleží i každému jednotlivci z tohoto druhu (Sókratés).",
            b: "Tento závěr by znamenal, že množina lidí je identická s jedním člověkem, což je nesmysl.",
            c: "To je v přímém rozporu s logickým vyplýváním z premis."
        },
            },
        {
        q: "P1: Žádný kámen není živý. P2: Žula je kámen. Závěr:",
        a: "Žula je živá.",
        b: "Žádná žula není živá.",
        c: "Žula není kámen.",
        ans: "b",
        expl: {
            a: "Pravidlo P1 říká, že nic z množiny kamenů není živé, tedy ani žula.",
            b: "Sylogismus (Celarent): Pokud se negativní vlastnost týká celé skupiny, týká se i každého poddruhu nebo předmětu v ní.",
            c: "P2 jasně říká, že žula je kámen, nemůžeme to v závěru popřít."
        },
            },
        {
        q: "P1: Všechny ryby mají žábry. P2: Kapr je ryba. Závěr:",
        a: "Kapr má žábry.",
        b: "Všechno, co má žábry, je kapr.",
        c: "Některé ryby nejsou kapři.",
        ans: "a",
        expl: {
            a: "Vlastnost (žábry) přechází z celku (ryby) na prvek (kapr).",
            b: "To je logická chyba - mít žábry je podmínka pro rybu, ale neznamená to, že nic jiného žábry nemá nebo že všechno jsou kapři.",
            c: "To může být pravda v realitě, ale tento závěr nijak nevyplývá z daných dvou premis."
        }
    },
            },
    {
        q: "P1: Všechny kovy jsou vodivé. P2: Železo je kov. Závěr:",
        a: "Železo je vodivé.",
        b: "Vše, co je vodivé, je železo.",
        c: "Železo není kov.",
        ans: "a",
        expl: {
            a: "Jednoduchá dedukce: vlastnost vodivosti náleží všem kovům, tedy i železu.",
            b: "Chybná obrácená implikace. Vodivá je i slaná voda, a přesto není kovem.",
            c: "P2 výslovně tvrdí, že železo je kov."
        }
    },
            },
    {
        q: "P1: Žádný savec nemá peří. P2: Pes je savec. Závěr:",
        a: "Pes má peří.",
        b: "Pes nemá peří.",
        c: "Někteří psi mají peří.",
        ans: "b",
        expl: {
            a: "Pravidlo P1 výslovně zakazuje, aby savec (včetně psa) měl peří.",
            b: "Negativní dedukce: vlastnost (mít peří) je vyloučena pro celou skupinu, do které pes patří.",
            c: "To by vyžadovalo výjimku z P1, která tam není."
        }
    },
            },
    {
        q: "P1: Všichni studenti mají ISIC kartu. P2: Někteří lidé v autobuse jsou studenti. Závěr:",
        a: "Všichni lidé v autobuse mají ISIC kartu.",
        b: "Někteří lidé v autobuse mají ISIC kartu.",
        c: "Nikdo v autobuse nemá ISIC kartu.",
        ans: "b",
        expl: {
            a: "To nevíme. Víme jen o studentech, o ostatních lidech v autobuse premisy nic neříkají.",
            b: "Sylogismus (Darii): Pokud někteří lidé patří do skupiny (studenti) a celá ta skupina má vlastnost (ISIC), pak i tito konkrétní lidé ji mají.",
            c: "To je v rozporu s informací, že jsou tam studenti, kteří kartu mít musí."
        }
    },
            },
    {
        q: "P1: Žádný mrak není z kamene. P2: Některé bílé věci jsou mraky. Závěr:",
        a: "Některé bílé věci nejsou z kamene.",
        b: "Všechny bílé věci jsou z kamene.",
        c: "Žádná bílá věc není z kamene.",
        ans: "a",
        expl: {
            a: "Sylogismus (Ferio): Pokud se část množiny (bílé věci) nachází v množině (mraky), která je zcela oddělena od kamenů, pak tato část určitě není z kamene.",
            b: "To by popíralo P1 pro ty bílé věci, které jsou mraky.",
            c: "Ostatní bílé věci (třeba sochy) z kamene být mohou, to premisy nezakazují."
        }
    },
            },
    {
        q: "P1: Všichni dravci jedí maso. P2: Sokol je dravec. Závěr:",
        a: "Sokol jí maso.",
        b: "Sokol nejí maso.",
        c: "Sokol je maso.",
        ans: "a",
        expl: {
            a: "Standardní přenos vlastnosti z druhu na jedince.",
            b: "Rozpor s P1.",
            c: "Kategorie sokol spadá pod dravce (subjekty), nikoliv pod maso (objekt stravy)."
        }
    },
            },
    {
        q: "P1: Každý čtverec je pravoúhlý. P2: Některé obrazce jsou čtverce. Závěr:",
        a: "Všechny obrazce jsou pravoúhlé.",
        b: "Některé obrazce jsou pravoúhlé.",
        c: "Žádný obrazec není pravoúhlý.",
        ans: "b",
        expl: {
            a: "To nemůžeme tvrdit, nevíme nic o obrazcích, které nejsou čtverce (např. trojúhelníky).",
            b: "Protože jsou v množině obrazců čtverce, musí tam být i něco pravoúhlého.",
            c: "Přímo popírá existenci čtverců zmíněnou v P2."
        }
    },
            },
    {
        q: "P1: Všechny květiny potřebují vodu. P2: Všechny růže jsou květiny. Závěr:",
        a: "Všechny růže potřebují vodu.",
        b: "Některé růže nepotřebují vodu.",
        c: "Vše, co potřebuje vodu, je růže.",
        ans: "a",
        expl: {
            a: "Tranzitivita: Pokud A patří do B a B patří do C, pak A patří do C.",
            b: "To by popřelo P1, protože růže jsou květiny.",
            c: "Vodu potřebují i psi, a růže to nejsou. Obrácení nefunguje."
        }
    },
            },
    {
        q: "P1: Všichni psi jsou šelmy. P2: Všechny kočky jsou šelmy. Plyne z toho, že někteří psi jsou kočky?",
        a: "Ano, protože obojí jsou šelmy.",
        b: "Ne, z těchto premis to nevyplývá.",
        c: "Ano, psi a kočky jsou totéž.",
        ans: "b",
        expl: {
            a: "Chyba nerozděleného středního členu. To, že dvě skupiny patří do jedné nadřazené, neznamená, že mají mezi sebou vztah.",
            b: "Správně. Můžeme mít dvě oddělené skupiny uvnitř jedné velké (šelmy), aniž by se překrývaly.",
            c: "Biologický i logický nesmysl."
        }
    },
            },
    {
        q: "P1: Žádný pták není savec. P2: Všichni netopýři jsou savci. Závěr:",
        a: "Někteří netopýři jsou ptáci.",
        b: "Žádný netopýr není pták.",
        c: "Všichni netopýři jsou ptáci.",
        ans: "b",
        expl: {
            a: "Vyloučeno premisou P1.",
            b: "Sylogismus (Cesare): Pokud se dvě skupiny (ptáci a savci) vůbec nepřekrývají, nemůže žádný prvek z jedné (netopýr) patřit do druhé.",
            c: "Přímý logický rozpor s oběma premisami."
        }
    },
            },
    {
        q: "P1: Někteří umělci jsou bohémi. P2: Všichni bohémi žijí nespoutaně. Závěr:",
        a: "Všichni umělci žijí nespoutaně.",
        b: "Někteří umělci žijí nespoutaně.",
        c: "Nikdo, kdo žije nespoutaně, není umělec.",
        ans: "b",
        expl: {
            a: "To nevíme, P1 mluví jen o 'některých' umělcích.",
            b: "Část umělců (ti, co jsou bohémi) nutně přebírá vlastnost nespoutanosti.",
            c: "Přímo popírá existenci bohémských umělců."
        }
    },
            },
    {
        q: "P1: Všechny drahokamy jsou vzácné. P2: Některé modré věci jsou drahokamy. Závěr:",
        a: "Všechny modré věci jsou vzácné.",
        b: "Některé modré věci jsou vzácné.",
        c: "Modré věci nejsou drahokamy.",
        ans: "b",
        expl: {
            a: "To nevíme, modré může být i levné plastové víčko.",
            b: "Ty modré věci, které jsou zároveň drahokamy, jsou nutně vzácné.",
            c: "P2 říká opak."
        }
    },
            },
    {
        q: "P1: Všichni géniové jsou roztržití. P2: Petr je roztržitý. Plyne z toho, že Petr je génius?",
        a: "Ano, splňuje podmínku roztržitosti.",
        b: "Ne, z těchto premis to nevyplývá.",
        c: "Petr nemůže být génius.",
        ans: "b",
        expl: {
            a: "Logická chyba. Roztržitost je vlastnost géniů, ale může ji mít i kdokoli jiný. Být géniem je postačující, nikoliv nutná podmínka pro roztržitost.",
            b: "Správně. Množina roztržitých lidí je širší než množina géniů. Petr může být v té části, která génii nejsou.",
            c: "To také nevíme. Petr génius být může, ale tyto dvě věty nám to nepotvrzují."
        }
    }
]

        },
        "logicke_spojky": {
            "title": "Logické spojky",
            "questions": 
[
    {
        q: "P1: Prší (P). P2: Sněží (S). Závěr (P ∧ S):",
        a: "Prší nebo sněží.",
        b: "Prší a zároveň sněží.",
        c: "Neprší ani nesněží.",
        ans: "b",
        expl: {
            a: "To je disjunkce (nebo). Konjunkce (∧) vyžaduje, aby platilo oboje naráz.",
            b: "Konjunkce (∧) spojuje dva pravdivé výroky do jednoho společného celku.",
            c: "To by byla dvojitá negace původních faktů."
        },
            },
        {
        q: "P1: Dám si kávu (K), nebo čaj (Č). P2: Nedám si kávu (¬K). Závěr:",
        a: "Dám si čaj.",
        b: "Nedám si ani čaj.",
        c: "Dám si kávu i čaj.",
        ans: "a",
        expl: {
            a: "Disjunktivní sylogismus: Pokud musí platit aspoň jedna možnost a první padne, druhá musí být pravdivá.",
            b: "To by popřelo první předpoklad, že si něco z toho dám.",
            c: "P2 výslovně říká, že kávu si nedám."
        }
    },
            },
    {
        q: "P1: Jestliže svítí slunce (S), jdeme ven (V). P2: Svítí slunce (S). Závěr:",
        a: "Nejdeme ven.",
        b: "Jdeme ven.",
        c: "Venku prší.",
        ans: "b",
        expl: {
            a: "Pravidlo v P1 říká, že slunce je dostatečným důvodem pro odchod ven.",
            b: "Modus Ponens: Základní pravidlo. Pokud platí podmínka (S), musí nastat i následek (V).",
            c: "Informace o dešti v premisách vůbec není."
        },
            },
        {
        q: "P1: Jestliže udeří blesk (B), zazní hrom (H). P2: Nezazněl hrom (¬H). Závěr:",
        a: "Udeřil blesk.",
        b: "Neudeřil blesk.",
        c: "Bude pršet.",
        ans: "b",
        expl: {
            a: "To by vyvolalo hrom, který ale podle P2 nezazněl.",
            b: "Modus Tollens: Pokud nenastal nutný následek (H), nemohla nastat ani příčina (B).",
            c: "Spekulace mimo logický rámec premis."
        }
    },
            },
    {
        q: "P1: Abych mohl řídit (Ř), musím mít řidičák (P). P2: Nemám řidičák (¬P). Závěr:",
        a: "Můžu řídit.",
        b: "Nemůžu řídit.",
        c: "Mám auto.",
        ans: "b",
        expl: {
            a: "Přímo porušuje podmínku v P1.",
            b: "Pokud chybí nutná podmínka (P), nemůže nastat výsledek (Ř).",
            c: "O vlastnictví auta premisy nic neříkají."
        }
    },
            },
    {
        q: "P1: Buď vyhraješ (V), nebo prohraješ (P). P2: Vyhrál jsi (V). Závěr:",
        a: "Prohrál jsi.",
        b: "Neprohrál jsi.",
        c: "Remizoval jsi.",
        ans: "b",
        expl: {
            a: "Vylučovací disjunkce nedovoluje, aby platilo oboje naráz.",
            b: "V logice 'buď, nebo' platí právě jedna možnost. Pokud nastala jedna, druhá je vyloučena.",
            c: "Remíza v možnostech P1 vůbec nebyla."
        }
    },
            },
    {
        q: "P1: Jestliže zapneš plyn (P), sporák hoří (H). P2: Sporák hoří (H). Plyne z toho, že jsi zapnul plyn?",
        a: "Ano, je to jediná možnost.",
        b: "Ne, mohl ho zapnout někdo jiný nebo hoří z jiného důvodu.",
        c: "Plyn je vypnutý.",
        ans: "b",
        expl: {
            a: "Logická chyba (potvrzení konsekventu). To, že vidíme následek, neznamená, že známe konkrétní příčinu.",
            b: "Správně. Logika neříká, že plyn je *jediný* způsob, jak sporák zapálit. Závěr je nejistý.",
            c: "To také nevíme, víme jen, že sporák hoří."
        }
    },
            },
    {
        q: "P1: Jestliže sníš hodně cukru (C), zkazí se ti zuby (Z). P2: Nesnědl jsi hodně cukru (¬C). Závěr:",
        a: "Zuby se ti nezkazí.",
        b: "Zuby se ti zkazí z něčeho jiného.",
        c: "Z těchto premis nelze o stavu zubů nic jistého vyvodit.",
        ans: "c",
        expl: {
            a: "Chyba (popření antecedentu). Cukr je jedna příčina, ale zuby se mohou kazit i z nedostatku hygieny.",
            b: "To je sice možné, ale premisy o 'něčem jiném' nemluví.",
            c: "Pokud nenastala tato konkrétní příčina (C), pravidlo P1 nám o výsledku (Z) už nic neříká."
        }
    },
            },
    {
        q: "P1: Jsem v Praze (P) a zároveň jsem v Brně (B). Je tento složený výrok pravdivý?",
        a: "Ano, pokud se rychle pohybuji.",
        b: "Ne, pokud jsou P a B na různých místech a já jsem jedna osoba.",
        c: "Ano, vždy.",
        ans: "b",
        expl: {
            a: "Fyzikálně nemožné pro jednu osobu v jeden čas.",
            b: "Zákon sporu: Nemůžeš být zároveň v P i v B, pokud se tyto možnosti vylučují. Konjunkce je nepravdivá, pokud je jedna část nepravdivá.",
            c: "Konjunkce vyžaduje pravdivost obou částí."
        }
    },
            },
    {
        q: "P1: Pokud mám klíče (K), odemknu (O). P2: Odemkl jsem (O). Plyne z toho, že jsem měl klíče?",
        a: "Ano, bez klíčů to nejde.",
        b: "Ne, mohl jsem mít paklíč nebo bylo odemčeno.",
        c: "Klíče jsem ztratil.",
        ans: "b",
        expl: {
            a: "Předpokládáte znalost světa, ale logika pracuje jen s tím, co je v P1. P1 neříká 'jen s klíči'.",
            b: "Opět chyba potvrzení následku. Z přítomnosti následku (O) nemůžeme zpětně potvrdit konkrétní příčinu (K).",
            c: "O ztrátě nemáme v zadání informaci."
        }
    },
            },
    {
        q: "P1: Jestliže studuješ (S), uděláš zkoušku (Z). P2: Jestliže uděláš zkoušku (Z), dostaneš diplom (D). Závěr:",
        a: "Jestliže studuješ, dostaneš diplom.",
        b: "Diplom dostaneš i bez studia.",
        c: "Zkouška není potřeba.",
        ans: "a",
        expl: {
            a: "Hypotetický sylogismus: Řetězení implikací. Pokud A vede k B a B vede k C, pak A vede k C.",
            b: "To premisy nepovolují.",
            c: "Naopak, zkouška je v řetězci nutným mezikrokem."
        }
    },
            },
    {
        q: "P1: Půjdeme do kina (K), nebo do divadla (D). P2: Půjdeme do kina (K). Plyne z toho, že nejdeme do divadla?",
        a: "Ano, vybrali jsme si kino.",
        b: "Ne, pokud to není vylučovací 'buď, nebo', můžeme jít do obojího.",
        c: "Divadlo je zavřené.",
        ans: "b",
        expl: {
            a: "To by platilo jen u ostré disjunkce. Běžné 'nebo' v logice připouští i obě možnosti.",
            b: "Standardní logická disjunkce (∨) je pravdivá, i když platí obě části. Kino nevylučuje divadlo.",
            c: "O stavu divadla nic nevíme."
        }
    },
            },
    {
        q: "P1: Není pravda, že (pracuji (P) a zároveň spím (S)). P2: Pracuji (P). Závěr:",
        a: "Spím.",
        b: "Nespím.",
        c: "Pracuji ve spánku.",
        ans: "b",
        expl: {
            a: "To by byl rozpor s P1.",
            b: "Pokud je vyloučeno, aby platilo oboje naráz (P ∧ S) a víme, že první platí, druhá musí být nepravdivá.",
            c: "P1 takovou kombinaci výslovně popírá."
        }
    },
            },
    {
        q: "P1: Pokud nikoho nezabiješ (¬Z), jsi dobrý člověk (D). P2: Petr někoho zabil (Z). Plyne z toho, že je zlý člověk (¬D)?",
        a: "Ano, je to vrah.",
        b: "Ne, z této logické struktury to nevyplývá.",
        c: "Petr je dobrý člověk.",
        ans: "b",
        expl: {
            a: "Morálně ano, ale logicky je to chyba popření antecedentu. P1 neříká, co se stane, když podmínku porušíš.",
            b: "Pravidlo P1 definuje jen cestu k 'dobrotě'. Neříká, že vražda je jedinou cestou ke 'zlosti'.",
            c: "To by byl nesmysl, P1 mu cestu k dobrotě přes nezabití uzavřela."
        }
    },
            },
    {
        q: "P1: Jen tehdy, když svítí zelená (Z), smíš jet (J). P2: Nesvítí zelená (¬Z). Závěr:",
        a: "Smíš jet.",
        b: "Nesmíš jet.",
        c: "Semafor nefunguje.",
        ans: "b",
        expl: {
            a: "Přímo porušuje 'jen tehdy' v P1.",
            b: "Spojení 'Jen tehdy, když' označuje nutnou podmínku. Bez ní (¬Z) výsledek (J) nesmí nastat.",
            c: "Irelevantní spekulace."
        }
    }
]

        },
        "logicke_klamy": {
            "title": "Logické klamy",
            "questions": 
[
    {
        q: "Argument: 'Pokud je někdo sportovec (S), pije hodně vody (V). Petr pije hodně vody. Tedy Petr je sportovec.' Je tento úsudek platný?",
        a: "Ano, Petr splňuje podmínku pití vody.",
        b: "Ne, jde o chybu potvrzení následku (konsekventu).",
        c: "Ano, voda je zdravá pro každého.",
        ans: "b",
        expl: {
            a: "To je intuitivní odhad, ale logicky chybný. Pití vody není výsadou jen sportovců.",
            b: "Chyba: Z existence následku (pití vody) nelze zpětně vyvodit konkrétní příčinu (být sportovcem). Vodu pijí i nesportovci.",
            c: "To je sice pravda, ale pro logickou platnost argumentu je to irelevantní informace."
        }
    },
            },
    {
        q: "Argument: 'Když prší (P), silnice je mokrá (M). Teď neprší (¬P). Tedy silnice není mokrá (¬M).' Je tento úsudek platný?",
        a: "Ano, pršet přestalo, tak silnice uschla.",
        b: "Ne, jde o chybu popření předpokladu (antecedentu).",
        c: "Ano, déšť je jediný zdroj vody.",
        ans: "b",
        expl: {
            a: "To je předpoklad o čase, ale logika řeší okamžitý stav. Silnice může být mokrá z jiného důvodu.",
            b: "Chyba: Pokud nenastala jedna konkrétní příčina (déšť), neznamená to, že nenastal následek (mokro) z jiné příčiny (např. kropicí vůz).",
            c: "To je věcně nepravdivý předpoklad, který v logice neobstojí."
        }
    },
            },
    {
        q: "Argument: 'Buď jsi s námi (N), nebo jsi proti nám (P). Nejsi s námi (¬N). Tedy jsi proti nám (P).' Jak se říká tomuto klamu?",
        a: "Falešné dilema (černobílé vidění).",
        b: "Slaměný panák.",
        c: "Útok na osobu (Ad Hominem).",
        ans: "a",
        expl: {
            a: "Klam spočívá v tom, že nám předkládá jen dvě extrémní možnosti, i když jich existuje víc (např. neutralita).",
            b: "Slaměný panák je překroucení soupeřova argumentu, ne omezení počtu voleb.",
            c: "Ad Hominem útočí na charakter člověka, zde se řeší jen jeho postoj."
        }
    },
            },
    {
        q: "P1: Všechny kočky jsou smrtelné. P2: Můj pes je smrtelný. Závěr: Můj pes je kočka. Kde je chyba?",
        a: "V premisách, psi nejsou smrtelní.",
        b: "V nerozděleném středním členu (smrtelnost).",
        c: "V závěru, pes nemůže mňoukat.",
        ans: "b",
        expl: {
            a: "Premisy jsou pravdivé, chyba je v cestě k závěru.",
            b: "Chyba: Obě skupiny patří do nadmnožiny 'smrtelných', ale to neznamená, že se ty dvě skupiny (psi a kočky) jakkoliv překrývají.",
            c: "To je věcná poznámka, nikoliv logický rozbor struktury."
        }
    },
            },
    {
        q: "Argument: 'Lékař mi řekl, že kouření škodí zdraví. Ale on sám kouří, takže to nemůže být pravda.' O jaký klam jde?",
        a: "Apel na autoritu.",
        b: "Ad Hominem (Tu Quoque - 'ty taky').",
        c: "Klouzavá plocha.",
        ans: "b",
        expl: {
            a: "Apel na autoritu by byl, kdybychom věřili něčemu jen proto, že to řekl lékař.",
            b: "Chyba: Pravdivost tvrzení (kouření škodí) nezávisí na tom, jestli se mluvčí podle toho chová. Útočíme na mluvčího, ne na fakt.",
            c: "Klouzavá plocha tvrdí, že jeden krok povede k řetězci katastrof."
        }
    },
            },
    {
        q: "P1: Žádný učitel není hloupý. P2: Někteří hloupí lidé mají štěstí. Plyne z toho, že někteří učitelé mají štěstí?",
        a: "Ano, štěstí má každý.",
        b: "Ne, z těchto premis to nevyplývá.",
        c: "Ne, učitelé štěstí nepotřebují.",
        ans: "b",
        expl: {
            a: "Příliš zobecňujete, premisy o všech lidech nemluví.",
            b: "Správně: Množina učitelů a množina šťastných lidí se nemusí vůbec dotýkat. Střední člen (hloupí) učitele od štěstí spíše odděluje.",
            c: "To je subjektivní názor, nikoliv logický vývod."
        }
    },
            },
    {
        q: "Argument: 'Když povolíme studentům používat kalkulačky při sčítání, za chvíli nebudou umět ani číst a nakonec se celá civilizace zhroutí.' Jak se tento klam nazývá?",
        a: "Šikmá plocha (Klouzavá plocha).",
        b: "Kruhový argument.",
        c: "Falešná stopa.",
        ans: "a",
        expl: {
            a: "Chyba: Bez důkazů tvrdíme, že malý první krok nevyhnutelně povede k extrémním a nesouvisejícím následkům.",
            b: "Kruhový argument dokazuje tvrzení jím samým.",
            c: "Falešná stopa odvádí pozornost k jinému tématu."
        }
    },
            },
    {
        q: "Argument: 'Všichni moji kamarádi říkali, že ten film je skvělý, takže to musí být pravda.' Jde o logicky platný důkaz?",
        a: "Ano, většina má vždy pravdu.",
        b: "Ne, jde o klam 'Apel na lid' (Ad Populum).",
        c: "Ano, kamarádi nelžou.",
        ans: "b",
        expl: {
            a: "Historie ukazuje, že většina se může mýlit (např. plochá Země).",
            b: "Chyba: Popularita nebo počet lidí, kteří něčemu věří, není důkazem pravdivosti dané věci.",
            c: "Důvěra v kamarády je emoce, nikoliv logický argument."
        }
    },
            },
    {
        q: "Věta: 'Tato věta je nepravdivá.' Co o ní z hlediska logiky můžeme říct?",
        a: "Je pravdivá.",
        b: "Je to logický paradox.",
        c: "Je to prostě lež.",
        ans: "b",
        expl: {
            a: "Kdyby byla pravdivá, muselo by platit to, co říká – tedy že je nepravdivá. To je spor.",
            b: "Paradox lháře: Pokud je pravdivá, je nepravdivá. Pokud je nepravdivá, je vlastně pravdivá. Logický systém zde selhává.",
            c: "Lež je prostá nepravda, ale zde se pravda a lež nekonečně zacyklují."
        }
    },
            },
    {
        q: "P1: Kdo pije alkohol (A), ten si ničí játra (J). P2: Petr nepije alkohol (¬A). Závěr: Petr má zdravá játra (¬J). Je závěr nutný?",
        a: "Ano, Petr se o sebe stará.",
        b: "Ne, játra si může ničit špatnou stravou nebo nemocí.",
        c: "Ano, alkohol je jediný jed pro játra.",
        ans: "b",
        expl: {
            a: "To je předpoklad mimo text.",
            b: "Zase chyba popření antecedentu. Absence jedné příčiny (alkohol) nezaručuje absenci výsledku (nemocná játra).",
            c: "Vědecky i logicky nepravdivé."
        }
    },
            },
    {
        q: "Argument: 'V Bibli se píše, že je slovem Božím. A Bůh nelže, takže Bible musí být pravdivá.' V čem je problém?",
        a: "V Bibli je moc stránek.",
        b: "Jde o kruhový argument (Petitio Principii).",
        c: "Argument je příliš krátký.",
        ans: "b",
        expl: {
            a: "Irelevantní.",
            b: "Chyba: Předpokládáte pravdivost závěru (Bible je slovo Boží) už v samotných premisách, abyste ho dokázali.",
            c: "Délka argumentu neurčuje jeho kvalitu."
        }
    },
            },
    {
        q: "Argument: 'Buď budeme investovat do školství, nebo naše země zchudne. Investujeme do školství, takže nezchudneme.' Je to jisté?",
        a: "Ano, peníze do škol se vždy vrátí.",
        b: "Ne, země může zchudnout z jiných důvodů (válka, krize).",
        c: "Školství je zbytečné.",
        ans: "b",
        expl: {
            a: "To je ekonomický optimismus, ne logická nutnost.",
            b: "P1 říká, že školství je jedna z podmínek, ale neříká, že je to podmínka jediná a samospásná.",
            c: "Subjektivní názor."
        }
    },
            },
    {
        q: "Argument: 'Všichni vědci jsou inteligentní. Můj soused není vědec, takže není inteligentní.' O jakou chybu jde?",
        a: "Záměna nutné a postačující podmínky.",
        b: "Útok na souseda.",
        c: "Pravdivý úsudek.",
        ans: "a",
        expl: {
            a: "Být vědcem je postačující pro inteligenci, ale ne nutné. Inteligentní může být i soused automechanik.",
            b: "Argument neútočí na souseda jako osobu, jen chybně vyvozuje jeho vlastnosti.",
            c: "Závěr je logicky neplatný."
        }
    },
            },
    {
        q: "Argument: 'Statistiky ukazují, že lidé, kteří jedí víc zmrzliny, se častěji utopí. Zmrzlina tedy způsobuje utonutí.' V čem je chyba?",
        a: "Záměna korelace (souvislosti) za kauzalitu (příčinu).",
        b: "Lidé neumějí plavat.",
        c: "Zmrzlina je příliš studená.",
        ans: "a",
        expl: {
            a: "Chyba: To, že se dvě věci dějí naráz (v létě se jí zmrzlina i víc plave), neznamená, že jedna způsobuje druhou. Společnou příčinou je horké počasí.",
            b: "To nevysvětluje logickou chybu v argumentu.",
            c: "Věcně nesouvisející."
        }
    },
            },
    {
        q: "P1: Jen géniové (G) rozumí kvantové fyzice (K). P2: Petr rozumí kvantové fyzice (K). Závěr: Petr je génius (G). Je tento úsudek platný?",
        a: "Ano, díky formulaci 'Jen géniové'.",
        b: "Ne, Petr může mít jen štěstí.",
        c: "Záleží na tom, co Petr studoval.",
        ans: "a",
        expl: {
            a: "Správně: Slovo 'JEN' mění logický vztah. Zde je genialita NUTNOU podmínkou. Pokud rozumí, MUSÍ být génius podle P1.",
            b: "P1 možnost štěstí u negéniů vylučuje slovem 'Jen'.",
            c: "Logika pracuje s tím, co je dáno v premisách, ne s Petrovou historií."
        }
    }
]

        },
        "logika_negace": {
            "title": "Logika negace",
            "questions": 
[
    {
        q: "Jak správně znegujete větu: 'Prší (P) a zároveň mrzne (M)'?",
        a: "Neprší a nemrzne.",
        b: "Neprší nebo nemrzne.",
        c: "Prší nebo mrzne.",
        ans: "b",
        expl: {
            a: "To je častá chyba. Negace 'obojího naráz' neznamená, že neplatí ani jedno, ale že aspoň jedno z toho neplatí.",
            b: "De Morganův zákon: ¬(P ∧ M) ⇔ ¬P ∨ ¬M. Stačí, když přestane pršet NEBO přestane mrznout, a původní věta už není pravda.",
            c: "To by byla pouze změna spojky bez negace faktů."
        }
    },
            },
    {
        q: "Jaká je správná negace věty: 'Půjdu do kina (K) nebo do divadla (D)'?",
        a: "Nepůjdu do kina a nepůjdu do divadla.",
        b: "Nepůjdu do kina nebo nepůjdu do divadla.",
        c: "Půjdu do obojího.",
        ans: "a",
        expl: {
            a: "De Morganův zákon: ¬(K ∨ D) ⇔ ¬K ∧ ¬D. Pokud popíráme, že nastane aspoň jedna možnost, znamená to, že nenastane ani jedna.",
            b: "To by znamenalo, že nepůjdu do jednoho z nich, což nevylučuje, že půjdu do druhého.",
            c: "To je v rozporu s negací."
        }
    },
            },
    {
        q: "Jak zní negace věty: 'Všichni (∀) studenti prospěli'?",
        a: "Žádný student neprospěl.",
        b: "Alespoň jeden student neprospěl.",
        c: "Všichni studenti neprospěli.",
        ans: "b",
        expl: {
            a: "To je příliš silné tvrzení. K vyvrácení 'všech' stačí najít jediný protipříklad.",
            b: "Negace kvantifikátoru: ¬∀x P(x) ⇔ ∃x ¬P(x). Opakem 'všech' je 'existuje aspoň jeden, který ne...'.",
            c: "To je totéž co možnost 'a', jen jinak řečeno."
        }
    },
            },
    {
        q: "Co je opakem tvrzení: 'Někteří (∃) lidé lžou'?",
        a: "Všichni lidé lžou.",
        b: "Někteří lidé nelžou.",
        c: "Nikdo nelže.",
        ans: "c",
        expl: {
            a: "To není negace, ale opačný extrém.",
            b: "To může platit zároveň s původní větou, takže to není její negace.",
            c: "Negace kvantifikátoru: ¬∃x L(x) ⇔ ∀x ¬L(x). Pokud není pravda, že existuje aspoň jeden lhář, pak musí všichni mluvit pravdu."
        }
    },
            },
    {
        q: "Negujte: 'Mám talent (T) a zároveň tvrdě pracuji (P)'.",
        a: "Nemám talent nebo netvrdě pracuji.",
        b: "Nemám talent a netvrdě pracuji.",
        c: "Mám talent, ale nepracuji.",
        ans: "a",
        expl: {
            a: "Opět De Morgan: 'A' se mění na 'NEBO' a oba pojmy se znegují.",
            b: "Chyba - negace konjunkce není konjunkce negací.",
            c: "To je jen jedna z možností, jak může být původní věta nepravdivá."
        }
    },
            },
    {
        q: "Jak zní negace: 'Není pravda, že (A nebo B)'?",
        a: "A a zároveň B.",
        b: "Není A a zároveň není B.",
        c: "Není A nebo není B.",
        ans: "b",
        expl: {
            a: "To je opak negace.",
            b: "Dvojitá negace se vyruší (¬¬), ale zde negujeme 'nebo' na 'a' a přidáváme negace k prvkům.",
            c: "Špatná spojka podle De Morgana."
        }
    },
            },
    {
        q: "Negujte větu: 'Žádný (∀¬) politik nekrade'.",
        a: "Všichni politici kradou.",
        b: "Někteří politici kradou.",
        c: "Jeden politik nekrade.",
        ans: "b",
        expl: {
            a: "Příliš silné. K vyvrácení nulového výskytu stačí jeden jediný výskyt.",
            b: "Negace 'nikdo ne...' je 'aspoň někdo ano...'.",
            c: "To by potvrzovalo původní větu."
        }
    },
            },
    {
        q: "Jak znegujete složenou podmínku: 'Jestliže piju (A), tak neřídím (¬B)'?",
        a: "Piju a řídím.",
        b: "Nepiju nebo řídím.",
        c: "Když nepiju, tak řídím.",
        ans: "a",
        expl: {
            a: "Negace implikace: ¬(A → B) ⇔ A ∧ ¬B. Jediný způsob, jak porušit slib 'pokud A, pak B', je udělat A a zároveň neudělat B.",
            b: "To je logický ekvivalent původní věty, ne její negace.",
            c: "To je úplně jiná podmínka."
        }
    },
            },
    {
        q: "Co je negací věty: 'Učím se (U) nebo mám talent (T)'?",
        a: "Neučím se a nemám talent.",
        b: "Neučím se nebo nemám talent.",
        c: "Učím se a mám talent.",
        ans: "a",
        expl: {
            a: "¬(U ∨ T) ⇔ ¬U ∧ ¬T. Popření výběru znamená, že neplatí ani jedno.",
            b: "Chyba ve spojce.",
            c: "To je potvrzení, ne negace."
        }
    },
            },
    {
        q: "Znegujte: 'Všichni (∀) lvi jsou masožravci (M)'.",
        a: "Všichni lvi jsou býložravci.",
        b: "Existuje (∃) lev, který není masožravec (¬M).",
        c: "Žádný lev není masožravec.",
        ans: "b",
        expl: {
            a: "To je věcný protiklad, ne logická negace.",
            b: "Přesný logický postup: 'Všichni' se mění na 'existuje' a vlastnost se popře.",
            c: "Příliš silné tvrzení."
        }
    },
            },
    {
        q: "Jak zní negace věty: 'Některé (∃) růže jsou modré (M)'?",
        a: "Všechny (∀) růže nejsou modré (¬M).",
        b: "Některé růže jsou červené.",
        c: "Žádná růže není modrá.",
        ans: "a",
        expl: {
            a: "Obojí 'a' i 'c' jsou fakticky totéž, ale 'a' lépe ukazuje transformaci kvantifikátoru ∃ na ∀.",
            b: "To o modré barvě nic neříká.",
            c: "Odpovídá formálně možnosti 'a', v přirozeném jazyce jsou zaměnitelné."
        }
    },
            },
    {
        q: "Negujte: 'Pracuji (P) a zároveň nepiju kávu (¬K)'.",
        a: "Nepracuji nebo piju kávu.",
        b: "Nepracuji a piju kávu.",
        c: "Pracuji a piju kávu.",
        ans: "a",
        expl: {
            a: "¬(P ∧ ¬K) ⇔ ¬P ∨ ¬¬K ⇔ ¬P ∨ K. Spojka se otočí, negace u kávy se vyruší.",
            b: "Chyba ve spojce.",
            c: "Chybí negace u práce."
        }
    },
            },
    {
        q: "Co popírá větu: 'Budu buď v Praze, nebo v Brně' (ostrá disjunkce)?",
        a: "Nesu v ani jednom městě, nebo jsem v obou zároveň.",
        b: "Jsem v Praze i v Brně.",
        c: "Nejsem v Praze.",
        ans: "a",
        expl: {
            a: "Ostrá disjunkce (XOR) vyžaduje právě jedno. Negací je tedy 'ani jedno' nebo 'obojí'.",
            b: "To je jen polovina negace.",
            c: "To je jen malá část možností."
        }
    },
            },
    {
        q: "Jak zní negace slibu: 'Když vyhraju (V), koupím ti auto (A)'?",
        a: "Nevyhraju a koupím ti auto.",
        b: "Vyhraju a auto ti nekoupím.",
        c: "Když nevyhraju, nekoupím ti auto.",
        ans: "b",
        expl: {
            a: "To není porušení slibu, to je jen velkorysost.",
            b: "Slib (implikaci) negujeme tak, že nastane podmínka, ale nenastane slíbený výsledek.",
            c: "To je častý omyl, ale logicky to není negace původního slibu."
        }
    },
            },
    {
        q: "Negujte: 'Některé (∃) dny jsou veselé (V) a zároveň slunné (S)'.",
        a: "Všechny (∀) dny jsou neveselé nebo neslunné.",
        b: "Žádný den není veselý ani slunný.",
        c: "Všechny dny jsou neveselé a neslunné.",
        ans: "a",
        expl: {
            a: "Kombinace negace kvantifikátoru (∃ na ∀) a De Morgana (∧ na ∨).",
            b: "Příliš silné, popírá oboje naráz v každém dni.",
            c: "Chyba ve spojce (∧ místo ∨)."
        }
    }
]

        },
        "analyticke_hadanky": {
            "title": "Analytické hádanky",
            "questions": 
[
    {
        q: "Vrah (V) nechal na místě činu buď otisky (O), nebo DNA (D). Policie zjistila, že na místě žádné otisky nejsou (¬O). Co z toho vyplývá?",
        a: "Vrah nezanechal žádné stopy.",
        b: "Vrah zanechal DNA.",
        c: "Vrah nebyl na místě činu.",
        ans: "b",
        expl: {
            a: "To popírá první premisu o existenci alespoň jedné stopy.",
            b: "Disjunktivní sylogismus: Máme-li dvě možnosti a jedna je vyloučena, druhá musí platit.",
            c: "To je v rozporu se zadáním, že tam vrah nechal stopy."
        }
    },
            },
    {
        q: "Pokud je pachatel zahradník (Z), má na botách bláto (B). Zahradník má boty úplně čisté (¬B). Co můžeme říct o pachateli?",
        a: "Pachatel není zahradník.",
        b: "Pachatel je zahradník, který se přezul.",
        c: "Pachatel je zahradník a boty si umyl.",
        ans: "a",
        expl: {
            a: "Modus Tollens: Pokud neplatí nutný následek (bláto), nemůže platit ani předpoklad (pachatel = zahradník).",
            b: "To je spekulace mimo logický rámec zadání.",
            c: "Logika pracuje s daným stavem (čisté boty), který vylučuje identitu zahradníka podle P1."
        }
    },
            },
    {
        q: "Na ostrově jsou dva typy lidí: rytíři (vždy mluví pravdu) a lháři (vždy lžou). Člověk A řekne: 'Já jsem lhář.' Co je člověk A zač?",
        a: "Rytíř.",
        b: "Lhář.",
        c: "Tato situace nemůže nastat (je to paradox).",
        ans: "c",
        expl: {
            a: "Kdyby byl rytíř, musel by mluvit pravdu, ale on říká, že lže – to je spor.",
            b: "Kdyby byl lhář, musel by lhát, takže jeho věta 'Já jsem lhář' by musela být lež, což by znamenalo, že je rytíř – opět spor.",
            c: "Jde o variaci na paradox lháře. Žádný obyvatel tohoto ostrova nemůže tuto větu vyslovit."
        }
    },
            },
    {
        q: "V trezoru je buď zlato (Z), nebo diamanty (D), nebo obojí. Pokud v něm není zlato (¬Z), tak v něm musí být diamanty (D). Víme, že v něm zlato je (Z). Co víme o diamantech?",
        a: "V trezoru určitě nejsou diamanty.",
        b: "V trezoru určitě jsou diamanty.",
        c: "O přítomnosti diamantů nemůžeme z těchto informací nic říct.",
        ans: "c",
        expl: {
            a: "To nevíme, zlato existenci diamantů nevylučuje.",
            b: "To nevíme, podmínka pro diamanty (nepřítomnost zlata) nebyla naplněna.",
            c: "Chyba popření antecedentu: Pokud podmínka pro diamanty (¬Z) nenastala, nevíme o diamantech nic."
        }
    },
            },
    {
        q: "Tři podezřelí: Adam, Bedřich a Cyril. Víme: 1. Aspoň jeden z nich je vrah. 2. Pokud je vrah Adam, je vrah i Bedřich. 3. Adam je vrah. Kdo je vrah?",
        a: "Pouze Adam.",
        b: "Adam i Bedřich.",
        c: "Všichni tři.",
        ans: "b",
        expl: {
            a: "To popírá druhou podmínku, která Adama a Bedřicha svazuje.",
            b: "Modus Ponens: Pokud je Adam vrah a on jím je, pak je vrah i Bedřich. O Cyrilovi nevíme nic, ale Adam a Bedřich jsou jistí.",
            c: "O Cyrilovi nemáme žádnou informaci, která by ho usvědčovala."
        }
    },
            },
    {
        q: "Pokud bude svítit slunce (S), půjdeme na pláž (P). Pokud nepůjdeme na pláž (¬P), půjdeme do kina (K). Nesvítí slunce (¬S). Co uděláme?",
        a: "Půjdeme do kina.",
        b: "Půjdeme na pláž.",
        c: "Z těchto informací nelze určit, co uděláme.",
        ans: "c",
        expl: {
            a: "To by platilo, jen kdybychom věděli, že na pláž nepůjdeme. Ale to, že nesvítí slunce, neznamená, že na pláž nepůjdeme (můžeme tam jít i v dešti).",
            b: "To také nevíme, slunce byla jen jedna z možných příčin.",
            c: "Klasický chyták: Nepotvrdili jsme podmínku pro kino, protože nevíme, jestli na tu pláž skutečně nejdeme."
        }
    },
            },
    {
        q: "V krabici jsou míčky. Všechny červené míčky (Č) jsou malé (M). Některé malé míčky (M) jsou gumové (G). Plyne z toho, že některé červené míčky jsou gumové?",
        a: "Ano.",
        b: "Ne.",
        c: "Všechny gumové míčky jsou červené.",
        ans: "b",
        expl: {
            a: "Chyba nerozděleného středního členu: Červené míčky a gumové míčky se mohou nacházet v různých částech 'malých míčků' a nikdy se nepotkat.",
            b: "Správně. Logicky není zaručen žádný průnik mezi červenými a gumovými míčky.",
            c: "To je úplně jiná a nepodložená informace."
        }
    },
            },
    {
        q: "U dveří stojí strážce. Pustí tě dál, jen pokud (J) máš heslo (H) a zároveň máš pozvánku (P). Ty máš heslo (H), ale nemáš pozvánku (¬P). Pustí tě?",
        a: "Ano, stačí heslo.",
        b: "Ne.",
        c: "Ano, pokud se usměješ.",
        ans: "b",
        expl: {
            a: "Podmínka byla konjunkce (A ZÁROVEŇ), musí tedy platit obě části.",
            b: "Pokud chybí jedna část konjunktivní podmínky, podmínka jako celek neplatí.",
            c: "Logika nepočítá s úsměvy, pokud nejsou v premisách."
        }
    },
            },
    {
        q: "Máme tři krabice: A, B, C. V jedné je cena. Na krabici A je: 'Cena není zde.' Na krabici B je: 'Cena je v C.' Právě jeden nápis je pravdivý. Kde je cena?",
        a: "V krabici A.",
        b: "V krabici B.",
        c: "V krabici C.",
        ans: "a",
        expl: {
            a: "Pokud je cena v A, pak nápis na A lže a nápis na B také lže (protože cena není v C). To sedí (oba lžou, což odporuje 'právě jeden je pravdivý'). Zkusme to znovu: Pokud je cena v B, nápis na A je pravda a nápis na B lže. To přesně odpovídá zadání!",
            b: "Moment, oprava úvahy: Pokud je cena v B: Nápis A (není v A) = Pravda. Nápis B (je v C) = Lež. Máme právě jeden pravdivý nápis. Tedy cena je v B.",
            c: "Kdyby byla v C: Nápis A = Pravda, Nápis B = Pravda. To jsou dva pravdivé nápisy, což zadání zakazuje."
        }
    },
            },
    {
        q: "Každý, kdo vyhraje závod (V), dostane medaili (M). Petr nevyhrál závod (¬V). Znamená to, že Petr nedostal medaili (¬M)?",
        a: "Ano.",
        b: "Ne, mohl dostat pamětní medaili nebo medaili za jiný závod.",
        c: "Petr dostal pohár.",
        ans: "b",
        expl: {
            a: "Chyba popření antecedentu. Vítězství je jedna cesta k medaili, ale ne nutně jediná.",
            b: "Logicky nevíme o Petrově medaili nic. Vyhrát je dostatečná, ale ne nutná podmínka.",
            c: "O pohárech nepadlo ani slovo."
        }
    },
            },
    {
        q: "V místnosti jsou buď jen muži, nebo jen ženy. Vejdeš a uvidíš jednu osobu v klobouku. Víš, že žádný muž v této místnosti nenosí klobouk. Co víš o lidech v místnosti?",
        a: "Jsou to všechno ženy.",
        b: "Jsou to všechno muži.",
        c: "V místnosti je jen jedna osoba.",
        ans: "a",
        expl: {
            a: "Dedukce: Pokud osoba v klobouku nemůže být muž (podle P2), musí to být žena. A protože v místnosti jsou jen lidé jednoho pohlaví (P1), jsou to všechno ženy.",
            b: "To by byl přímý rozpor s kloboukem a P2.",
            c: "To nevíme, víme jen, že ty, kteří tam jsou, jsou ženy."
        }
    },
            },
    {
        q: "Všechny drahé restaurace (D) mají dobré jídlo (J). Tato restaurace má špatné jídlo (¬J). Co z toho plyne?",
        a: "Restaurace je levná (¬D).",
        b: "Restaurace je drahá, ale kuchař má špatný den.",
        c: "Restaurace je střední cenové kategorie.",
        ans: "a",
        expl: {
            a: "Modus Tollens: Pokud nemá vlastnost (dobré jídlo), nemůže patřit do skupiny (drahé restaurace).",
            b: "To popírá absolutní platnost P1.",
            c: "Kategorie 'střední' v zadání neexistuje."
        }
    },
            },
    {
        q: "Pokud je dnes úterý (U), musím do práce (P). Dnes není úterý (¬U). Znamená to, že do práce nemusím (¬P)?",
        a: "Ano.",
        b: "Ne.",
        c: "Dnes je středa.",
        ans: "b",
        expl: {
            a: "Zase chyba popření antecedentu. Do práce se chodí i v jiné dny.",
            b: "Logika neumožňuje říct nic o práci v jiné dny než v úterý.",
            c: "To je spekulace, může být pondělí."
        }
    },
            },
    {
        q: "Někdo v této místnosti ukradl koláč. Víme, že: 1. Pokud to byl Jan, tak to nebyl Petr. 2. Pokud to nebyl Petr, tak to byl Pavel. Jan to nebyl. Kdo to byl?",
        a: "Petr.",
        b: "Pavel.",
        c: "Nelze určit, zda Petr nebo Pavel.",
        ans: "c",
        expl: {
            a: "To nemůžeme tvrdit, o Petrovi nemáme přímou informaci.",
            b: "To by platilo, jen kdybychom věděli, že to nebyl Petr. Ale to nevíme.",
            c: "P1 říká 'Pokud Jan, pak ne Petr'. Protože to Jan nebyl, podmínka neplatí a o Petrovi (a tím pádem i o Pavlovi z P2) nevíme nic."
        }
    },
            },
    {
        q: "Každý student (S) je buď pilný (P), nebo chytrý (C). Petr je student (S). Víme, že Petr není pilný (¬P). Co o něm víme?",
        a: "Petr je chytrý.",
        b: "Petr je líný.",
        c: "Petr není student.",
        ans: "a",
        expl: {
            a: "Disjunktivní sylogismus: Petr je v kategorii student, musí tedy splnit aspoň jednu ze dvou vlastností. Pokud není pilný, zbývá jen chytrost.",
            b: "To je interpretace slova 'nepilný', ale logicky nás zajímá jen vlastnost 'chytrý'.",
            c: "P2 výslovně říká, že Petr je student."
        }
    }
]

        },
        "formalizace_logiky": {
            "title": "Formalizace logiky",
            "questions": 
[
    {
        q: "Jak správně zapíšete větu: 'Prší (P) a zároveň mrzne (M)'?",
        a: "P ∨ M",
        b: "P ∧ M",
        c: "P → M",
        ans: "b",
        expl: {
            a: "Symbol ∨ znamená 'nebo'.",
            b: "Symbol ∧ (stříška) označuje konjunkci, tedy spojku 'a zároveň'.",
            c: "Symbol → označuje podmínku 'jestliže, pak'."
        }
    },
            },
    {
        q: "Který zápis odpovídá větě: 'Jestliže se učím (U), pak uspěji (P)'?",
        a: "U ∧ P",
        b: "P → U",
        c: "U → P",
        ans: "c",
        expl: {
            a: "To by znamenalo, že se učím i uspěji zároveň, nikoliv podmíněně.",
            b: "Tento zápis říká: 'Jestliže uspěji, pak se učím' (obrácená podmínka).",
            c: "Šipka směřuje od předpokladu (učení) k následku (úspěch)."
        }
    },
            },
    {
        q: "Jak zní formální zápis věty: 'Všichni (x) lidé (L) jsou smrtelní (S)'?",
        a: "∃x (L(x) ∧ S(x))",
        b: "∀x (L(x) → S(x))",
        c: "∀x (L(x) ∧ S(x))",
        ans: "b",
        expl: {
            a: "To znamená: 'Existuje aspoň jeden člověk, který je smrtelný'.",
            b: "Správný zápis pro 'Všechny': Pro každé x platí, že pokud je to člověk, pak je smrtelný.",
            c: "To by znamenalo, že úplně všechno ve vesmíru je zároveň člověk i smrtelné."
        }
    },
            },
    {
        q: "Zapište: 'Není pravda, že (mám čas (Č) i peníze (P))'.",
        a: "¬Č ∧ ¬P",
        b: "¬(Č ∧ P)",
        c: "¬Č ∨ ¬P",
        ans: "b",
        expl: {
            a: "To znamená: 'Nemám čas a zároveň nemám peníze'.",
            b: "Závorka s negací před ní popírá platnost celého spojení 'čas i peníze'.",
            c: "To je sice logicky ekvivalentní výsledek (podle De Morgana), ale neodpovídá to doslovnému zadání 'Není pravda, že...'."
        }
    },
            },
    {
        q: "Který symbol vyjadřuje větu: 'Půjdu ven tehdy a jen tehdy, když nebude pršet'?",
        a: "V → ¬P",
        b: "V ↔ ¬P",
        c: "V ∧ ¬P",
        ans: "b",
        expl: {
            a: "To je pouze jednostranná podmínka.",
            b: "Obousměrná šipka (ekvivalence) vyjadřuje vztah 'tehdy a jen tehdy'.",
            c: "To znamená, že jdu ven a neprší, ale neříká to nic o pravidle."
        }
    },
            },
    {
        q: "Jak zapíšete: 'Existuje (x) aspoň jeden lhář (L)'?",
        a: "∀x L(x)",
        b: "∃x L(x)",
        c: "L(x) → ∃",
        ans: "b",
        expl: {
            a: "To znamená, že všichni jsou lháři.",
            b: "Symbol ∃ (obrácené E) vyjadřuje existenci alespoň jednoho prvku s danou vlastností.",
            c: "Tento zápis je syntakticky nesmyslný."
        }
    },
            },
    {
        q: "Formalizujte: 'Někteří (x) psi (P) nekoušou (¬K)'.",
        a: "∃x (P(x) ∧ ¬K(x))",
        b: "∃x (P(x) → ¬K(x))",
        c: "∀x (P(x) ∧ ¬K(x))",
        ans: "a",
        expl: {
            a: "Správně: Existuje aspoň jedno x, které je psem a zároveň nekouše.",
            b: "V predikátové logice se u existenčního kvantifikátoru implikace (→) téměř nikdy nepoužívá, protože by věta byla pravdivá i pro věci, které nejsou psi.",
            c: "To by znamenalo, že všechno na světě je pes, který nekouše."
        }
    },
            },
    {
        q: "Zápis ¬P ∨ Q odpovídá větě:",
        a: "Neprší a je teplo.",
        b: "Neprší nebo je teplo.",
        c: "Pokud prší, je teplo.",
        ans: "b",
        expl: {
            a: "Chyba ve spojce (má být ∧).",
            b: "Přesný překlad symbolů: negace P, disjunkce, Q.",
            c: "To je logicky ekvivalentní význam, ale ne doslovný překlad zápisu."
        }
    },
            },
    {
        q: "Jak zapíšete podmínku: 'Jen ten, kdo má lístek (L), může vstoupit (V)'?",
        a: "L → V",
        b: "V → L",
        c: "L ∧ V",
        ans: "b",
        expl: {
            a: "To znamená: 'Když máš lístek, musíš vstoupit'.",
            b: "Slovo 'JEN' obrací směr implikace. Pokud jsi vstoupil (V), je to důkaz, že jsi musel mít lístek (L).",
            c: "To neříká nic o pravidle vstupu."
        }
    },
            },
    {
        q: "Věta: 'Žádný (x) havran (H) není bílý (B)'.",
        a: "¬∀x (H(x) → B(x))",
        b: "∀x (H(x) → ¬B(x))",
        c: "∃x (H(x) ∧ ¬B(x))",
        ans: "b",
        expl: {
            a: "To znamená: 'Není pravda, že všichni havrani jsou bílí' (což připouští, že někteří bílí jsou).",
            b: "Správně: Pro každé x platí, že pokud je to havran, pak není bílý.",
            c: "To znamená: 'Existuje aspoň jeden havran, který není bílý'."
        }
    },
            },
    {
        q: "Co znamená zápis: ¬(P → Q)?",
        a: "Není pravda, že z P plyne Q.",
        b: "Pokud neplatí P, pak neplatí Q.",
        c: "P neplatí a Q platí.",
        ans: "a",
        expl: {
            a: "Negace před celou závorkou popírá vztah implikace uvnitř.",
            b: "To by byl zápis ¬P → ¬Q.",
            c: "To by byl výsledek negace (P ∧ ¬Q), nikoliv její zadání."
        }
    },
            },
    {
        q: "Zapište: 'Buď vyhraje Petr (P), nebo vyhraje Pavel (Q), ale ne oba.'",
        a: "P ∨ Q",
        b: "(P ∨ Q) ∧ ¬(P ∧ Q)",
        c: "P ∧ Q",
        ans: "b",
        expl: {
            a: "To je klasické 'nebo', které připouští i výhru obou.",
            b: "Ostrá disjunkce (XOR): Platí buď jedno, nebo druhé, a zároveň neplatí oboje naráz.",
            c: "To by znamenalo, že vyhrají oba."
        }
    },
            },
    {
        q: "Jak zní zápis: 'Každý (x) student (S) má nějakého (y) učitele (U)'?",
        a: "∀x (S(x) → ∃y U(y,x))",
        b: "∃y ∀x (S(x) → U(y,x))",
        c: "∀x ∀y (S(x) ∧ U(y,x))",
        ans: "a",
        expl: {
            a: "Správně: Pro každého studenta existuje aspoň jeden (jeho vlastní) učitel.",
            b: "To by znamenalo, že existuje jeden super-učitel, který učí úplně všechny studenty.",
            c: "To by znamenalo, že úplně všichni jsou studenti a úplně všichni všechny učí."
        }
    },
            },
    {
        q: "Zápis: P ∧ (Q ∨ R) odpovídá větě:",
        a: "Platí P a zároveň (Q nebo R).",
        b: "Platí P nebo (Q a zároveň R).",
        c: "Jestliže platí P, pak platí Q nebo R.",
        ans: "a",
        expl: {
            a: "Přesné dodržení priority závorek a symbolů.",
            b: "Záměna symbolů ∧ a ∨.",
            c: "Záměna konjunkce za implikaci."
        }
    },
            },
    {
        q: "Jak formalizujete: 'Něco (x) je shnilého (S) ve státě dánském (D)'?",
        a: "∀x (D(x) → S(x))",
        b: "∃x (D(x) ∧ S(x))",
        c: "D(x) ∧ S(x)",
        ans: "b",
        expl: {
            a: "To by znamenalo, že všechno v Dánsku je shnilé.",
            b: "Správně: Existuje aspoň jedna věc, která je v Dánsku a zároveň je shnilá.",
            c: "Chybí kvantifikátor, zápis není úplná věta."
        }
    }
]

        }}
};
