window.data_teorie_logiky = {
    "groups": {
        "pojem_a_jazyk": {
            "title": "Pojem a jazyk",
            "questions": [
            {
                q: "Jaká je základní hierarchie forem logického myšlení podle jejich složitosti?",
                a: "Úsudek → Soud → Pojem",
                b: "Soud → Pojem → Úsudek",
                c: "Pojem → Soud → Úsudek",
                ans: "c",
                expl: {
                    a: "Tento sled je obrácený; úsudek je nejkomplexnější formou, která nemůže existovat bez nižších prvků.",
                    b: "Soud nelze vytvořit bez pojmů, které do něj vstupují jako jeho základní stavební kameny.",
                    c: "Logika postupuje od nejjednoduššího ke složitějšímu. Pojem je základní prvek zachycující význam věci, spojením pojmů vzniká soud (tvrzení) a z logické vazby mezi soudy pak vyvozujeme úsudek. Tato hierarchie odráží, jak v mysli budujeme logické argumenty."
                }
            },
            {
                q: "Jaký je hlavní rozdíl mezi 'slovem' a 'pojmem'?",
                a: "Pojem je myšlenkový obsah (význam), zatímco slovo je pouze jeho vnější jazykové vyjádření.",
                b: "Mezi slovem a pojmem není rozdíl, jsou to dvě označení pro stejnou lingvistickou jednotku.",
                c: "Slovo je vždy pravdivé nebo nepravdivé, zatímco pojem pravdivostní hodnotu nemá.",
                ans: "a",
                expl: {
                    a: "Slovo (jazykový výraz) se v různých jazycích mění (např. strom, tree), ale pojem (význam stromu) zůstává stejný. Zatímco lingvistika zkoumá gramatiku a hlásky slov, logika se zabývá právě tímto fixním významem – pojmem. Jeden pojem může být vyjádřen i více slovy (synonyma) nebo celým slovním spojením.",
                    b: "To je omyl; logika striktně odlišuje vnější formu (slovo) od vnitřního smyslu (pojem).",
                    c: "Ani slovo, ani pojem samy o sobě nemají pravdivostní hodnotu; tu získávají až v rámci soudu (věty)."
                }
            },
            {
                q: "Co v logice označujeme termínem 'denotace'?",
                a: "Vnitřní citové zabarvení, které v nás slovo vyvolává.",
                b: "Vztah, kterým slovo (jazykový výraz) označuje konkrétní objekty v realitě.",
                c: "Pravidlo pro správné psaní velkých písmen u vlastních jmen.",
                ans: "b",
                expl: {
                    a: "Citové zabarvení (konotace) je předmětem psychologie nebo stylistiky, nikoliv formální logiky.",
                    b: "Denotace je proces, kdy jazykový výraz odkazuje na třídu předmětů nebo na konkrétního jedince. Samotné objekty, na které slovo ukazuje, se pak nazývají denotáty. Například slovem 'planeta' denotujeme (označujeme) tělesa jako Mars, Jupiter nebo Země.",
                    c: "Pravopisná pravidla logiku nezajímají, ta se soustředí na sémantickou vazbu mezi výrazem a objektem."
                }
            },
            {
                q: "Který z následujících příkladů představuje 'obecný pojem'?",
                a: "Vltava",
                b: "Nejvyšší hora České republiky",
                c: "Strom",
                ans: "c",
                expl: {
                    a: "Vltava je vlastní jméno (jedinečný pojem), protože označuje jednu konkrétní řeku.",
                    b: "I když jde o popis, tento pojem označuje právě jeden unikátní objekt (Sněžku), je tedy jedinečný.",
                    c: "Obecný pojem označuje celou množinu (třídu) objektů, které sdílejí společné podstatné vlastnosti. Pod pojem 'strom' spadají miliony konkrétních rostlin, které splňují definici. Obecné pojmy jsou základem pro tvorbu obecných zákonů a vědeckých tvrzení."
                }
            },
            {
                q: "Co charakterizuje 'jedinečný pojem'?",
                a: "Má právě jeden denotát, tedy označuje jeden konkrétní, unikátní předmět.",
                b: "Lze jej v diskuzi použít pouze jednou, pak ztrácí svůj logický význam.",
                c: "Je to pojem, který vymyslel pouze jeden konkrétní filozof.",
                ans: "a",
                expl: {
                    a: "Jedinečný pojem (individuální pojem) nepřipouští záměnu s jiným objektem. Může jím být vlastní jméno (Aristotelés) nebo jednoznačný popis (první kosmonaut ve vesmíru). Rozsah takového pojmu obsahuje vždy právě jeden prvek.",
                    b: "Počet použití slova v textu nemá na jeho logickou povahu žádný vliv.",
                    c: "Původ pojmu je historická zajímavost, nikoliv logická charakteristika jeho rozsahu."
                }
            },
            {
                q: "Pojem 'vodník' nebo 'největší přirozené číslo' označujeme jako:",
                a: "Obecný pojem",
                b: "Jedinečný pojem",
                c: "Prázdný pojem",
                ans: "c",
                expl: {
                    a: "Obecný pojem vyžaduje existenci třídy objektů v realitě, což 'vodník' nesplňuje.",
                    b: "Jedinečný pojem vyžaduje právě jeden reálný objekt, což v těchto případech neplatí.",
                    c: "Prázdný pojem má srozumitelný smysl (víme, co si pod ním představit), ale v reálném světě mu neodpovídá žádný objekt. Množina jeho denotátů je tedy prázdná. V logice s nimi musíme zacházet opatrně, abychom o neexistujících věcech netvrdili vlastnosti, které implikují jejich existenci."
                }
            },
            {
                q: "Jaký je vztah mezi 'obsahem' (vlastnosti) a 'rozsahem' (počet objektů) pojmu?",
                a: "Čím více vlastností do obsahu pojmu přidáme, tím více objektů pod něj bude spadat.",
                b: "S rostoucím obsahem (více určujících znaků) klesá rozsah (méně objektů, které je splňují).",
                c: "Obsah a rozsah jsou na sobě nezávislé a jejich vztah nelze logicky určit.",
                ans: "b",
                expl: {
                    a: "To je logický nesmysl; čím přísnější kritéria nastavíte (více vlastností), tím méně věcí jimi projde.",
                    b: "Tento vztah nepřímé úměry je klíčový. Například pojem 'pes' má široký rozsah. Pokud přidáme vlastnost 'lovecký', rozsah se zúží. Přidáme-li 'zlatý retrívr', rozsah se zmenší ještě více. Čím přesněji věc definujeme (bohatší obsah), tím méně existuje věcí, které definici beze zbytku naplňují.",
                    c: "Vztah mezi obsahem a rozsahem je jedním ze základních a stabilních zákonů formální logiky."
                }
            },
            {
                q: "Co v logice znamená, že pojem je 'vágni'?",
                a: "Že má nejasné hranice rozsahu, takže v určitých případech nelze rozhodnout, zda pod něj objekt spadá.",
                b: "Že je pojem napsán nečitelným písmem nebo je v textu gramaticky nesprávně použit.",
                c: "Že pojem označuje věc, která se v přírodě vyskytuje pouze ve formě plynu nebo páry.",
                ans: "a",
                expl: {
                    a: "Vágnost je přirozená vlastnost mnoha slov (např. 'mladý', 'hromada'). Neexistuje přesná sekunda, kdy člověk přestane být mladý, což v logice způsobuje problémy s určením pravdivosti. Explikace slouží právě k tomu, aby tyto vágní hranice pro vědecké účely zpřesnila.",
                    b: "Grafická podoba nebo gramatika jsou věcí zápisu, nikoliv logické vlastnosti významu (pojmu).",
                    c: "Vágnost se týká logické srozumitelnosti a ostrosti hranic pojmu, nikoliv skupenství hmoty."
                }
            },
            {
                q: "Jaký je rozdíl mezi 'vlastním jménem' a 'určitým popisem' (deskripcí)?",
                a: "Vlastní jméno je vymyšlené, zatímco určitý popis musí být vždy historicky pravdivý.",
                b: "Vlastní jméno přímo označuje jedince (Petr), zatímco určitý popis ho identifikuje pomocí vlastností.",
                c: "Mezi vlastním jménem a popisem není v logice žádný rozdíl, oba jsou to obecné pojmy.",
                ans: "b",
                expl: {
                    a: "Pravdivost s tímto rozdělením nesouvisí; i fiktivní postava může mít vlastní jméno.",
                    b: "Vlastní jméno je jednoduchý 'štítek' pro jedince. Určitý popis (např. 'vítěz bitvy u Slavkova') identifikuje jedince skrze jeho unikátní atributy. V logice je tento rozdíl důležitý pro analýzu vět o existenci, protože popis může selhat (být prázdný), zatímco jméno nikoliv.",
                    c: "Oba jsou to jedinečné pojmy (označují jednoho jedince), ale jejich logická cesta k objektu je odlišná."
                }
            },
            {
                q: "Co v logice vyjadřuje 'intenze' pojmu?",
                a: "Množinu všech reálných objektů, které pod daný pojem spadají.",
                b: "Soubor všech vlastností, které pojmu dávají jeho specifický význam.",
                c: "Sílu hlasu, se kterou mluvčí daný pojem v diskuzi vyslovuje.",
                ans: "b",
                expl: {
                    a: "Množina reálných objektů se nazývá extenze (rozsah).",
                    b: "Intenze je vnitřní obsah pojmu. Jsou to všechny nutné vlastnosti, které musí věc mít, aby mohla být tímto pojmem označena. Například intenze pojmu 'čtverec' obsahuje vlastnosti 'být rovinným útvarem', 'mít čtyři strany' a 'mít pravé úhly'.",
                    c: "Intenzita hlasu je akustický jev, formální logika se zabývá pouze významovým obsahem."
                }
            }
            ]
        },
        "teorie_definice": {
            "title": "Teorie definice",
            "questions": [
            {
                q: "Z jakých dvou základních částí se skládá každá formálně správná definice?",
                a: "Z premisy (předpokladu) a konkluze (závěru), které tvoří logický důkaz.",
                b: "Z definienda (výraz, který definujeme) a definiense (výraz, kterým definujeme).",
                c: "Ze subjektu (podmětu) a predikátu (přísudku), které tvoří gramatickou větu.",
                ans: "b",
                expl: {
                    a: "Tato struktura se týká úsudků a argumentace, nikoliv vymezení významu slova v rámci jedné definice.",
                    b: "Definiendum je slovo nebo symbol, jehož význam chceme vysvětlit. Definiens je pak text nebo popis, který tento význam jednoznačně určuje. Mezi oběma částmi obvykle stojí spojka 'je' nebo symbol rovnosti, čímž vyjadřujeme, že oba výrazy mají v daném kontextu totožný význam a lze je logicky zaměnit.",
                    c: "Subjekt a predikát tvoří vnitřní strukturu soudu (věty), což je jiná logická úroveň než technika definování pojmů."
                }
            },
            {
                q: "Co v teorii definice znamená pravidlo 'souměrnosti'?",
                a: "Že rozsah definovaného pojmu musí být totožný s rozsahem vysvětlujícího výrazu.",
                b: "Že definiens musí obsahovat přesně stejný počet písmen a slov jako definiendum.",
                c: "Že definice musí být napsána symetrickým typem písma v levé i pravé části textu.",
                ans: "a",
                expl: {
                    a: "Pravidlo souměrnosti (ekvivalence) říká, že definice nesmí být ani příliš široká, ani příliš úzká. Pokud byste definovali 'čtverec' jako 'čtyřúhelník', byla by definice příliš široká, protože zahrnuje i obdélníky. Správná definice musí pokrýt všechny objekty daného pojmu a zároveň žádné jiné, aby byly obě strany definice vzájemně zaměnitelné bez ztráty významu.",
                    b: "Počet slov není důležitý; definiens bývá z podstaty věci téměř vždy delší a popisnější, aby mohl význam pojmu dostatečně a srozumitelně vysvětlit.",
                    c: "Typografie nebo grafická úprava textu (např. zarovnání na střed) nemají na logickou správnost a platnost definice vůbec žádný vliv."
                }
            },
            {
                q: "Jaký je hlavní cíl 'analytické' (lexikální) definice?",
                a: "Vymyslet úplně nové slovo pro věc, která už svůj název v jazyce dávno má.",
                b: "Zjistit a popsat, jak se dané slovo v jazyce skutečně používá a jaký má ustálený význam.",
                c: "Zcela změnit význam slova tak, aby vyhovoval aktuálním potřebám mluvčího.",
                ans: "b",
                expl: {
                    a: "Zavádění nových slov pro staré věci je otázkou neologismů a stylistiky, nikoliv analytického zkoumání významu.",
                    b: "Analytická definice (zjišťující) je typická pro výkladové slovníky. Nesnaží se význam aktivně tvořit, ale pouze ho věrně zaznamenat na základě dosavadní jazykové praxe v dané kultuře. Je buď pravdivá, nebo nepravdivá podle toho, zda skutečně odpovídá realitě, jak lidé danému slovu v dané době rozumí.",
                    c: "Svévolná změna významu bez upozornění je manipulační technikou, která je v přímém rozporu s principem analytické definice."
                }
            },
            {
                q: "Kdy v logické praxi využijeme 'syntetickou' (stipulativní) definici?",
                a: "Při zavádění nového termínu nebo při dohodě o přesném významu pro účely konkrétní diskuze či zákona.",
                b: "Když potřebujeme v etymologickém slovníku vyhledat, co dané slovo znamenalo v dávné minulosti.",
                c: "Při analýze uměleckých textů, kde je hlavním cílem nejednoznačnost a citové zabarvení.",
                ans: "a",
                expl: {
                    a: "Syntetická definice (stanovující) vzniká 'rozhodnutím' nebo dohodou mluvčích. Používá se například v úvodu právních norem ('Pro účely tohoto zákona se pod pojmem X rozumí Y'), aby se předešlo zdlouhavým výkladovým sporům. U takové definice nelze říct, zda je pravdivá nebo lživá, ale pouze zda je v daném logickém systému užitečná a srozumitelná.",
                    b: "Historický vývoj slova zkoumá etymologie nebo analytická definice zaměřená na minulost, nikoliv definice syntetická, která význam aktivně vytváří.",
                    c: "Umělecký jazyk pracuje s metaforou a záměrnou neurčitostí, zatímco syntetická definice směřuje k absolutní přesnosti a eliminaci jakýchkoliv výkladových variant."
                }
            },
            {
                q: "V čem spočívá proces 'explikace' pojmu?",
                a: "In nahrazení odborného termínu jeho cizojazyčným ekvivalentem pro mezinárodní prestiž.",
                b: "V transformaci nejasného a vágního pojmu z běžné řeči na přesný pojem vědecký.",
                c: "V úmyslném zamlžení významu slova tak, aby mu rozuměli pouze vybraní odborníci.",
                ans: "b",
                expl: {
                    a: "Překlad mezi jazyky není explikací, ale prostým převodem významu, který sám o sobě nijak nezvyšuje logickou přesnost daného pojmu.",
                    b: "Běžný jazyk je často plný nepřesností (např. slova jako 'teplo' nebo 'spravedlnost' používáme v mnoha významech). Explikace vezme toto 'předvědecké' slovo a dá mu striktní hranice a pravidla pro potřeby konkrétní teorie. Je to nezbytný krok při budování každé vědy, která vyžaduje absolutní jednoznačnost.",
                    c: "Cílem explikace je naopak maximální vyjasnění a zpřístupnění významu pro přesné logické operace, nikoliv jeho záměrné skrývání."
                }
            },
            {
                q: "V čem spočívá logická chyba zvaná 'definice kruhem' (circulus vitiosus)?",
                a: "V použití definovaného pojmu (nebo jeho synonyma) uvnitř samotné vysvětlující části definice.",
                b: "V tom, že definice je napsána tak složitě a dlouze, že se čtenář v jejím obsahu na konci ztratí.",
                c: "V definování věcí, které nejsou kruhového tvaru, pomocí termínů určených výhradně pro geometrii.",
                ans: "a",
                expl: {
                    a: "Účelem definice je osvětlit neznámé pomocí známého. Pokud definujete 'spravedlnost' jako 'vlastnost jednat spravedlivě', nepředali jste čtenáři žádnou novou informaci, protože myšlenka se uzavřela do bludného kruhu, který vyžaduje znalost slova ještě předtím, než je vysvětleno. Takový postup je v logice nepřípustný, protože neposkytuje žádné skutečné vymezení významu.",
                    b: "Přílišná délka nebo složitost definice může být stylistickým nedostatkem, ale sama o sobě nepředstavuje logickou chybu bludného kruhu.",
                    c: "Termín 'kruh' je v tomto kontextu pouze logickou metaforou pro uzavřený myšlenkový postup, nikoliv odkazem na reálné geometrické tvary."
                }
            },
            {
                q: "Definice 'Člověk je savec, který se pohybuje po dvou končetinách' je logicky chybná, protože:",
                a: "Je příliš úzká – vylučuje lidi, kteří o končetiny nešťastnou náhodou přišli.",
                b: "Je kruhová – nepřípustně v definici člověka používá biologický termín 'savec'.",
                c: "Je příliš široká – pod tento popis spadají i jiní živočichové, například klokani.",
                ans: "c",
                expl: {
                    a: "Logika se při definování druhu zaměřuje na podstatné a obecné vlastnosti celku, nikoliv na náhodné fyzické odchylky nebo zranění konkrétních jednotlivců.",
                    b: "Slovo 'savec' není se slovem 'člověk' v logickém kruhu; jde o nadřazený rod (genus), což je v klasické definici zcela v pořádku a žádoucí.",
                    c: "Tato definice porušuje pravidlo souměrnosti, protože definiens (dvounohý savec) pokrývá i jiné objekty než jen lidi, například klokany. Správná definice musí obsahovat tzv. specifickou diferenci, tedy vlastnost, kterou má pouze a jenom definovaný objekt a nikdo jiný. Bez tohoto zpřesnění definice 'přetéká' i na jiné druhy."
                }
            },
            {
                q: "Co v logice zakazuje pravidlo o definování 'obscurum per obscurius'?",
                a: "Neznámý pojem nesmíme definovat pomocí pojmů, které jsou pro čtenáře ještě méně srozumitelné.",
                b: "Pojmy, které vyvolávají negativní nebo temné emoce, by se v logice neměly definovat vůbec.",
                c: "Definiční text nesmí být psán v prostředí se špatným osvětlením nebo v úplné tmě.",
                ans: "a",
                expl: {
                    a: "Latinský název v doslovném překladu znamená 'vysvětlovat nejasné ještě nejasnějším'. Definice má sloužit k pochopení a vyjasnění významu, proto musí k popisu používat slova, která jsou čtenáři již známá nebo jsou obecně srozumitelnější. Pokud k vysvětlení jednoduchého slova použijeme složitý odborný žargon, definice selhává ve své základní funkci.",
                    b: "Logika je hodnotově neutrální věda; definovat lze jakýkoliv pojem bez ohledu na jeho citový náboj, pokud jsou splněna formální pravidla srozumitelnosti.",
                    c: "Toto je doslovný, ale zcela chybný výklad latinského rčení, které se metaforicky týká srozumitelnosti textu, nikoliv fyzických podmínek při psaní."
                }
            },
            {
                q: "Která z těchto chyb v definici se nazývá 'příliš úzká definice'?",
                a: "Definiens (vysvětlení) pokrývá méně objektů, než kolik jich reálně spadá pod definiendum (pojem).",
                b: "Definice používá slova, která mají v českém jazyce méně než čtyři písmena.",
                c: "Definice je napsána tak malým písmem, že ji nelze přečíst bez použití lupy.",
                ans: "a",
                expl: {
                    a: "Příkladem je definice: 'Člověk je savec, který žije v Evropě'. Tato definice je příliš úzká, protože vylučuje miliony lidí žijících na jiných kontinentech, kteří definici člověka přesto splňují. Správná definice musí mít stejný rozsah jako definovaný pojem, nesmí z něj nikoho neprávem vynechat.",
                    b: "Délka použitých slov nemá na logickou šířku nebo úzkost definice žádný vliv.",
                    c: "Velikost písma je technický parametr zobrazení, nikoliv logická vada definice."
                }
            },
            {
                q: "Co v teorii definice znamená, že definice má být 'vystihující'?",
                a: "Že musí uvádět podstatné vlastnosti předmětu, nikoliv vlastnosti náhodné či druhotné.",
                b: "Že musí obsahovat alespoň jeden vtip nebo anekdotu, aby si ji čtenář lépe zapamatoval.",
                c: "Že musí být napsána tak rychle, aby pisatel stihl zachytit svou úplně první myšlenku.",
                ans: "a",
                expl: {
                    a: "Pokud definujete člověka jako 'bytost, která má ušní lalůčky', je to sice pravda, ale není to vlastnost podstatná (vystihující). Správná definice se musí zaměřit na to, co dělá věc tím, čím je (např. rozumnost, schopnost řeči), nikoliv na znaky, které jsou pro její podstatu sekundární nebo náhodné.",
                    b: "Humor může pomoci pedagogicky, ale logicky je v definici irelevantní a často spíše matoucí.",
                    c: "Rychlost zápisu často vede k povrchním definicím, které podstatu věci zcela míjejí. Definice vyžaduje hloubkovou analýzu."
                }
            },
            {
                q: "Může být jedna definice zároveň příliš široká i příliš úzká?",
                a: "Ne, v logice se tyto dvě chyby navzájem logicky vylučují a nemohou nastat najednou.",
                b: "Ano, pokud na jedné straně zahrnuje objekty, které tam nepatří, a na druhé vylučuje ty, které tam patří.",
                c: "Ano, ale pouze v případě, že je definice napsána v cizím, čtenáři zcela nesrozumitelném jazyce.",
                ans: "b",
                expl: {
                    a: "Tato kombinovaná chyba je naopak velmi častá u nepřesných pokusů o vymezení složitých pojmů.",
                    b: "Představte si definici: 'Ovoce je sladká plodina pěstovaná v ČR'. Je příliš široká (zahrnuje i sladkou zeleninu, jako je mrkev, pokud ji někdo považuje za plodinu) a zároveň příliš úzká (vylučuje exotické ovoce jako banány, které do kategorie ovoce patří). To ukazuje na zásadní selhání při určování hranic pojmu.",
                    c: "Jazyk definice ovlivňuje srozumitelnost pro čtenáře, ale logický vztah mezi rozsahy (extenzemi) pojmů zůstává objektivně stejný."
                }
            }
            ]
        },
        "soudy_a_logické_operace": {
            "title": "Soudy a logické operace",
            "questions": [
            {
                q: "Co je v logice základní definicí 'soudu' (propozice)?",
                a: "Jakákoliv věta v přirozeném jazyce, která vyjadřuje emoce nebo přání mluvčího.",
                b: "Myšlenka vyjádřená oznamovací větou, u které má smysl se ptát, zda je pravdivá, či nepravdivá.",
                c: "Právní rozhodnutí vynesené soudcem v soudní síni na základě platných zákonů.",
                ans: "b",
                expl: {
                    a: "Věty vyjadřující emoce, přání nebo otázky nic netvrdí o stavu světa, a proto u nich v logice neurčujeme pravdivostní hodnotu.",
                    b: "Soud je vyšší forma myšlení než pojem. Vzniká spojením pojmů a něco o realitě vypovídá – buď jí odpovídá (je pravdivý), nebo ne (je nepravdivý). Pro logiku je klíčové, že soud musí mít tzv. pravdivostní hodnotu (označovanou obvykle 1 pro pravdu a 0 pro nepravdu).",
                    c: "Slovo 'soud' má v běžné řeči více významů; v logice však neoznačuje instituci, ale konkrétní formu myšlení a tvrzení."
                }
            },
            {
                q: "Co v klasické logice tvoří vnitřní strukturu jednoduchého soudu (S-P)?",
                a: "Skládá se ze subjektu (předmětu), predikátu (vlastnosti) a spony (kopuly), která je spojuje.",
                b: "Skládá se z podstatného jména a příslovce, která spolu netvoří větu.",
                c: "Skládá se ze dvou negací, které se navzájem vyruší a vytvoří pravdu.",
                ans: "a",
                expl: {
                    a: "Tato struktura (např. 'Sókratés je smrtelný') je základem aristotelské logiky. Sókratés je subjekt (S), smrtelný je predikát (P) a slovo 'je' funguje jako spona, která subjektu vlastnost přisuzuje. Bez této trojice prvků nelze v tradiční logice vytvořit jednoduché tvrzení, o jehož pravdivosti bychom mohli rozhodnout.",
                    b: "Slova bez logické vazby (spony) netvoří soud, ale pouze seznam pojmů, u kterého nelze určit pravdivost.",
                    c: "Dvojitá negace je sice zákon, ale netvoří základní vnitřní strukturu jednoduchého kladného soudu."
                }
            },
            {
                q: "Jaký je hlavní rozdíl mezi jednoduchým a složeným soudem?",
                a: "Složený soud vzniká spojením jednoduchých soudů pomocí logických spojek (funktorů).",
                b: "Jednoduchý soud obsahuje pouze jedno slovo, zatímco složený soud jich musí mít alespoň deset.",
                c: "Složený soud je v logice vždy pravdivý, zatímco jednoduchý soud je vždy nepravdivý.",
                ans: "a",
                expl: {
                    a: "Jednoduchý soud tvoří jeden základní výrok (např. 'Prší'). Složený soud propojuje dva a více takových výroků pomocí spojek jako 'a', 'nebo', 'jestliže, pak' či 'právě tehdy, když'. Logika pak zkoumá, jak pravdivost těchto jednotlivých částí ovlivňuje pravdivost celého složeného tvrzení.",
                    b: "Délka věty nebo počet slov nejsou pro rozlišení jednoduchého a složeného soudu podstatné; rozhodující je přítomnost logické spojky.",
                    c: "Pravdivost jakéhokoliv soudu závisí na jeho obsahu nebo struktuře, nikoliv na tom, zda je jednoduchý, nebo složený."
                }
            },
            {
                q: "Který z těchto soudů je v logickém čtverci označen jako 'částečný záporný' (typ O)?",
                a: "Všichni lidé jsou smrtelní.",
                b: "Někteří lidé nejsou sportovci.",
                c: "Žádný člověk není neomylný.",
                ans: "b",
                expl: {
                    a: "Toto je soud obecný kladný (typ A), protože vypovídá o všech členech skupiny.",
                    b: "Soud typu O (Některá S nejsou P) je specifický tím, že popírá vlastnost pouze u části skupiny. Stačí, aby existoval alespoň jeden prvek, který danou vlastnost nemá, a soud je pravdivý. V logickém čtverci stojí v opozici (kontradikci) k soudu obecnému kladnému.",
                    c: "Toto je soud obecný záporný (typ E), který vlastnost vylučuje u úplně všech členů."
                }
            },
            {
                q: "Co v logice vyjadřuje unární operace 'negace'?",
                a: "Obrácení pravdivostní hodnoty původního soudu (z pravdy na nepravdu a naopak).",
                b: "Potvrzení a zdůraznění pravdivosti původního soudu pomocí logického symbolu.",
                c: "Úplné smazání daného soudu z logického systému, protože přestal platit.",
                ans: "a",
                expl: {
                    a: "Negace (¬) je unární operátor, což znamená, že působí na jeden soud. Pokud je výrok pravdivý, jeho negace je nepravdivá, a naopak. V češtině jí odpovídá předpona 'ne-' nebo fráze 'není pravda, že'. Je to základní nástroj pro vyjádření opaku jakéhokoliv tvrzení.",
                    b: "To by byla operace identity; negace má za úkol původní tvrzení logicky popřít.",
                    c: "Logika výroky ze systému nemaže; negace pouze mění jejich pravdivostní ohodnocení v rámci výpočtu."
                }
            },
            {
                q: "Složený soud spojený konjunkcí (logické 'a') je pravdivý pouze v případě, že:",
                a: "Alespoň jeden z obou dílčích soudů je pravdivý.",
                b: "Oba dílčí soudy jsou zároveň pravdivé.",
                c: "První soud je pravdivý a druhý soud je zároveň nepravdivý.",
                ans: "b",
                expl: {
                    a: "Toto pravidlo platí pro disjunkci (nebo), nikoliv pro konjunkci, která je mnohem přísnější.",
                    b: "Konjunkce (∧) spojuje dva výroky a celý celek (např. 'Prší a mrzne') je pravdivý jen tehdy, když v realitě nastanou obě situace současně. Pokud je byť jen jedna část nepravdivá, je logicky nepravdivý i celý složený výrok. Funguje to podobně jako násobení v matematice (1 * 0 = 0).",
                    c: "V tomto případě (pravda a nepravda) by výsledná hodnota konjunkce byla nepravda (0)."
                }
            },
            {
                q: "Výrok v 'disjunkci' (logické 'nebo') je pravdivý v případě, že:",
                a: "Musí být bezpodmínečně pravdivé oba dílčí soudy najednou.",
                b: "Alespoň jeden z dílčích soudů (případně oba) je pravdivý.",
                c: "První soud je pravdivý a druhý soud je povinně nepravdivý.",
                ans: "b",
                expl: {
                    a: "Toto pravidlo platí pro konjunkci (a zároveň), nikoliv pro disjunkci.",
                    b: "Logická disjunkce (∨) odpovídá spojce 'nebo' v nevylučovacím smyslu. To znamená, že výrok 'Prší nebo sněží' je pravdivý, pokud prší, pokud sněží, a i tehdy, pokud se děje obojí naráz. Jediný případ, kdy je disjunkce nepravdivá, nastává tehdy, když neplatí ani jedna její část (0 ∨ 0 = 0).",
                    c: "Tento případ by disjunkci učinil pravdivou, ale není to její jediná ani základní podmínka."
                }
            },
            {
                q: "Co vyjadřuje logická spojka 'vylučovací disjunkce' (ostré nebo)?",
                a: "Pravdivý je celý výrok pouze tehdy, když platí právě jedna z obou částí, ale nikdy ne obě najednou.",
                b: "Výrok je pravdivý vždy, když je alespoň jedna část pravdivá, i kdyby platily obě.",
                c: "Tato spojka v logice neexistuje; 'nebo' má v logice vždy jen jeden význam.",
                ans: "a",
                expl: {
                    a: "Vylučovací disjunkce (např. 'Buď vyhraje Sparta, nebo Slavia') nepřipouští remízu ani dvojité vítězství. Pokud by platily obě části naráz (1, 1), je celý výrok nepravdivý. Liší se tak od běžné disjunkce, která připouští, že se obě varianty mohou doplňovat.",
                    b: "Toto je definice standardní disjunkce, nikoliv vylučovací.",
                    c: "Logika rozlišuje oba typy 'nebo', protože v přirozeném jazyce mají tyto spojky odlišné dopady na pravdivostní tabulku."
                }
            },
            {
                q: "Kdy je složený soud v 'implikaci' (jestliže A, pak B) považován za nepravdivý?",
                a: "Pouze tehdy, když je první část (A) pravdivá a druhá část (B) je nepravdivá.",
                b: "Vždy, když je alespoň jedna z obou částí (A nebo B) nepravdivá.",
                c: "Pouze tehdy, když jsou obě části (A i B) nepravdivé.",
                ans: "a",
                expl: {
                    a: "Implikace (→) vyjadřuje vztah podmínky a následku. Představte si slib: 'Jestliže vyhraješ, dostaneš odměnu'. Slib je porušen pouze v momentě, kdy vyhraješ (pravda), ale odměnu nedostaneš (nepravda). Ve všech ostatních případech se považuje za logicky pravdivou, i když se to může zdát neintuitivní.",
                    b: "To není pravda; pokud je první část nepravdivá (podmínka nenastala), implikace je pravdivá bez ohledu na výsledek.",
                    c: "Naopak – v logice platí, že z nepravdy může vyplynout cokoliv, takže pokud jsou obě části nepravdivé, implikace je pravdivá."
                }
            },
            {
                q: "Kdy je pravdivý složený soud v 'ekvivalenci' (právě tehdy, když)?",
                a: "Pouze v případě, že je první část pravdivá a druhá část je zároveň nepravdivá.",
                b: "Když mají oba dílčí soudy stejnou pravdivostní hodnotu (oba pravda, nebo oba nepravda).",
                c: "Když je alespoň jeden z dílčích soudů pravdivý, bez ohledu na hodnotu toho druhého.",
                ans: "b",
                expl: {
                    a: "Tento případ by ekvivalenci učinil nepravdivou, protože obě strany by si logicky neodpovídaly.",
                    b: "Ekvivalence (↔) vyjadřuje vzájemnou rovnost pravdivostních hodnot. Celý výrok je pravdivý tehdy, když obě jeho části 'ladí' – tedy buď platí obě naráz (1 ↔ 1), nebo neplatí ani jedna (0 ↔ 0). Pokud by jedna část platila a druhá ne, rovnováha se poruší a výsledkem je nepravda.",
                    c: "Toto pravidlo definuje disjunkci (nebo), nikoliv ekvivalenci, která vyžaduje shodu obou stran."
                }
            },
            {
                q: "Co v klasické logice vyjadřuje 'Zákon sporu'?",
                a: "Žádný výrok nemůže být zároveň pravdivý i nepravdivý ve stejném čase a stejném vztahu.",
                b: "V každém platném úsudku musí dojít ke sporu mezi premisami, aby bylo co řešit.",
                c: "Pokud se dva lidé v diskuzi neshodnou, musí být jeden z nich logicky zcela vyloučen.",
                ans: "a",
                expl: {
                    a: "Zákon sporu (¬(A ∧ ¬A)) říká, že v jednom systému není možné tvrdit, že něco 'je' a zároveň 'není'. Pokud v logickém systému narazíme na spor, znamená to chybu v předpokladech nebo postupu. Je to absolutní pravidlo, které brání logickému chaosu a umožňuje vést důkazy.",
                    b: "To je omyl; naopak se snažíme o to, aby premisy byly bezrozporné a vzájemně se doplňovaly.",
                    c: "Logický zákon sporu se týká pravdivostních hodnot výroků, nikoliv mezilidských vztahů v diskuzi."
                }
            },
            {
                q: "Jaký je hlavní význam 'Zákona vyloučeného třetího'?",
                a: "Každý logický problém musí mít vždy právě tři možná řešení, jinak je neplatný.",
                b: "Každý výrok je buď pravdivý, nebo nepravdivý; žádná třetí možnost mezi tím neexistuje.",
                c: "Pokud jsou dva lidé ve sporu, třetí nezávislá osoba v pozadí má vždy logickou pravdu.",
                ans: "b",
                expl: {
                    a: "Tento zákon naopak počet možností omezuje na dvě, nikoliv na tři.",
                    b: "Zákon vyloučeného třetího (A ∨ ¬A) stanovuje, že pro každý soud platí buď on sám, nebo jeho negace. V klasické logice neexistuje stav 'možná' nebo 'částečně' – systém je striktně dvouhodnotový. Tento zákon je nezbytný pro jednoznačné vyvozování závěrů.",
                    c: "Název 'vyloučený třetí' se netýká osob, ale pravdivostních hodnot (třetí pravdivostní hodnota je vyloučena)."
                }
            },
            {
                q: "Proč je v logice důležitý rozdíl mezi 'kontradikcí' a 'kontrárností'?",
                a: "Kontrární výroky nemohou být oba pravdivé, ale mohou být oba zároveň nepravdivé.",
                b: "Kontradikce znamená, že oba výroky jsou v každém případě pravdivé současně.",
                c: "Žádný rozdíl neexistuje; oba pojmy znamenají, že se dvě věci prostě hádají.",
                ans: "a",
                expl: {
                    a: "Příkladem kontrárnosti jsou věty: 'Všichni jsou zde' a 'Nikdo zde není'. Nemohou platit obě naráz, ale může se stát, že neplatí ani jedna – například když je zde jen polovina lidí. V takovém případě jsou oba tyto extrémní výroky nepravdivé, což u kontradikce (kde jeden musí být pravda) není možné.",
                    b: "To je omyl; kontradikce znamená, že jeden z dvojice musí být pravda a druhý lež.",
                    c: "Logika je o přesnosti; způsob, jakým se výroky vylučují, má zásadní vliv na platnost argumentů."
                }
            },
            {
                q: "Co v logice označujeme termínem 'tautologie'?",
                a: "Složený výrok, který je díky své formě vždy pravdivý bez ohledu na pravdivost svých částí.",
                b: "Logickou chybu, kdy mluvčí používá v jedné větě příliš mnoho cizích odborných slov.",
                c: "Tvrzení, které je vždy nepravdivé, i kdyby byly všechny jeho dílčí části pravdivé.",
                ans: "a",
                expl: {
                    a: "Tautologie je logicky nutná pravda, která vyplývá ze struktury (např. 'Prší, nebo neprší'). Nepotřebujeme zkoumat realitu, abychom věděli, že výrok platí, protože pokrývá všechny logické možnosti. Tautologie tvoří základní pravidla odvozování v celém systému.",
                    b: "Zbytečné používání složitých slov může být stylistický nešvar, ale logicky to není tautologie.",
                    c: "Vždy nepravdivý výrok se nazývá kontradikce (spor), což je přesný opak tautologie."
                }
            }
            ]
        },
        "usudek_a_argumentace": {
            "title": "Úsudek a argumentace",
            "questions": [
            {
                q: "Z jakých dvou hlavních částí se skládá každý logický 'úsudek'?",
                a: "Z definienda (vysvětlované) a definiense (vysvětlující), které tvoří celek.",
                b: "Z předpokladů (premis) a z nich vyvozeného závěru (konkluze).",
                c: "Z otázky mluvčího a následné odpovědi posluchače v rámci diskuze.",
                ans: "b",
                expl: {
                    a: "Tato struktura se týká definice pojmů, nikoliv procesu vyvozování nových informací z již známých tvrzení.",
                    b: "Úsudek je myšlenkový proces, kde z pravdivosti určitých tvrzení (premis) odvozujeme pravdivost tvrzení nového (závěru). Pokud přijmeme premisy za pravdivé, logický úsudek nám dává návod, jak dojít k platnému výsledku. Mezi těmito dvěma částmi musí existovat vztah vyplývání, jinak se jedná pouze o náhodný shluk vět.",
                    c: "Dialog mezi dvěma lidmi je formou komunikace, ale logický úsudek je vnitřní struktura důkazu, která může existovat i bez přítomnosti druhé osoby."
                }
            },
            {
                q: "Jaký je v logice rozdíl mezi 'formální správností' (validitou) a 'pravdivostí' úsudku?",
                a: "Pravdivost se týká obsahu vět (shoda s realitou), zatímco správnost se týká pouze logické struktury (vazby mezi větami).",
                b: "Validita znamená, že úsudek je napsán gramaticky správně, zatímco pravdivost znamená, že je napsán čitelně.",
                c: "Mezi správností a pravdivostí není žádný rozdíl; každý logicky správný úsudek musí mít vždy pravdivý závěr.",
                ans: "a",
                expl: {
                    a: "Úsudek může mít správnou formu, i když mluví o nesmyslech. Například: 'Všichni marťani jsou fialoví. Karel je marťan. Tedy Karel je fialový.' Tento úsudek je logicky správný (validní), i když jsou jeho části nepravdivé. Logika hlídá, aby se 'pravda' neztratila během cesty od premis k závěru, ale neručí za to, co do systému vložíte na začátku.",
                    b: "Gramatika a čitelnost jsou záležitostí jazyka a estetiky, nikoliv formální platnosti logického vyplývání.",
                    c: "To je omyl; i logicky bezchybný úsudek může vést k nepravdivému závěru, pokud vyjdeme z nepravdivých předpokladů."
                }
            },
            {
                q: "Co je hlavní charakteristikou 'deduktivního' argumentu?",
                a: "Závěr je v něm vždy pouze pravděpodobný a může se s novými objevy změnit.",
                b: "Závěr logicky nutně vyplývá z premis; pokud jsou pravdivé premisy, musí být pravdivý i závěr.",
                c: "Vychází z pozorování náhodných jevů a snaží se z nich vytvořit obecnou teorii.",
                ans: "b",
                expl: {
                    a: "Tento popis odpovídá indukci, nikoliv dedukci, kde je vztah mezi premisami a závěrem absolutní.",
                    b: "U dedukce je pravdivost závěru 'vynucena' strukturou argumentu. Závěr totiž nepřináší žádnou novou informaci, která by už nebyla skryta v předpokladech (premisách). Pokud přijmeme, že všichni lidé jsou smrtelní a Sókratés je člověk, závěr o jeho smrtelnosti je logicky nezvratný a stoprocentně jistý.",
                    c: "To je princip induktivního postupu, dedukce naopak postupuje od obecných pravidel k jednotlivým případům."
                }
            },
            {
                q: "Jak se liší 'induktivní' úsudek od deduktivního?",
                a: "Induktivní úsudek vede pouze k pravděpodobnému závěru, který rozšiřuje naše poznání o novou informaci.",
                b: "Induktivní úsudek je v logice zakázaný, protože nikdy nemůže vést k pravdivému výsledku.",
                c: "Mezi indukcí a dedukcí není v moderní formální logice žádný věcný ani strukturální rozdíl.",
                ans: "a",
                expl: {
                    a: "Indukce postupuje od pozorování konkrétních případů k obecnému závěru. Protože nemůžeme pozorovat úplně všechno na světě, závěr indukce zůstává vždy jen s určitou mírou pravděpodobnosti. Na rozdíl od dedukce nám ale umožňuje objevovat nové zákonitosti v přírodních vědách (např. 'Zatím všechny labutě byly bílé').",
                    b: "Indukce je základem všech experimentálních věd (fyzika, biologie); bez ní bychom nemohli tvořit žádné vědecké teorie.",
                    c: "Rozdíl je zásadní – týká se míry jistoty závěru a směru, kterým myšlení postupuje (od obecného k jednotlivému vs. od jednotlivého k obecnému)."
                }
            },
            {
                q: "Kdy můžeme mluvit o tzv. 'úplné indukci'?",
                a: "Když se nám podaří prověřit úplně všechny členy dané množiny objektů.",
                b: "Když je argument napsán tak přesvědčivě, že o něm nikdo v diskuzi nepochybuje.",
                c: "Když indukce trvá dostatečně dlouho, například několik let pozorování.",
                ans: "a",
                expl: {
                    a: "Úplná indukce je možná jen u uzavřených a konečných skupin (např. 'Všichni prezidenti ČR byli muži'). Protože jsme prověřili každý jednotlivý prvek, závěr je v tomto případě stoprocentně jistý, podobně jako u dedukce. Většinou je ale v přírodě indukce 'neúplná', protože nemůžeme prozkoumat úplně všechno.",
                    b: "Subjektivní pocit přesvědčivosti nemá s logickým rozdělením indukce na úplnou a neúplnou nic společného.",
                    c: "Doba pozorování není rozhodující; podstatné je, zda byl prověřen vyčerpávající počet všech existujících prvků dané třídy."
                }
            },
            {
                q: "Schéma 'Jestliže A, pak B. Platí A. Tedy platí B.' se nazývá:",
                a: "Modus Tollens",
                b: "Modus Ponens",
                c: "Argument z analogie",
                ans: "b",
                expl: {
                    a: "Modus Tollens pracuje s popřením následku (Neplatí B, tedy neplatí A), nikoliv s potvrzením podmínky.",
                    b: "Modus Ponens (pravidlo odloučení) je nejzákladnější schéma dedukce. Pokud víme, že z určité podmínky něco vyplývá a tato podmínka nastala, musí nutně nastat i následek. Příklad: 'Jestliže mrzne, mrzne i voda. Teď mrzne. Tedy i voda je zmrzlá.'",
                    c: "Analogie nepracuje s pevnou strukturou implikace, ale s podobností mezi dvěma různými jevy."
                }
            },
            {
                q: "Jak vypadá logicky správné schéma 'Modus Tollens'?",
                a: "Jestliže A, pak B. Platí B. Tedy platí A.",
                b: "Jestliže A, pak B. Neplatí B. Tedy neplatí A.",
                c: "Jestliže A, pak B. Neplatí A. Tedy neplatí B.",
                ans: "b",
                expl: {
                    a: "Toto je logická chyba (potvrzení následku); z toho, že platí následek, nelze jistě vyvodit, že nastala právě tato konkrétní podmínka.",
                    b: "Modus Tollens je velmi silný nástroj vyvracení teorií. Říká nám, že pokud z teorie (A) vyplývá určitý jev (B) a tento jev nenastal, musí být chybná i samotná výchozí teorie. Je to bezpečný způsob, jak logicky dospět k negaci původního předpokladu.",
                    c: "Toto je logická chyba (popření podmínky); následek B mohl nastat z úplně jiných příčin než z A."
                }
            },
            {
                q: "Co v klasické logice tvoří strukturu 'sylogismu'?",
                a: "Právě dvě premisy (větší a menší) a z nich vyplývající závěr.",
                b: "Dlouhý řetězec nekonečného množství tvrzení, která na sebe navazují.",
                c: "Pouze jeden soud, který je natolik jasný, že nepotřebuje žádné další zdůvodnění.",
                ans: "a",
                expl: {
                    a: "Sylogismus je klasická forma úsudku. Skládá se ze tří částí: vyšší premisy (obecné pravidlo), nižší premisy (konkrétní fakt) a závěru. Příklad: 'Všichni lidé jsou smrtelní. Sókratés je člověk. Tedy Sókratés je smrtelný.' Tato struktura umožňuje přehledně kontrolovat správnost odvození.",
                    b: "Řetězec úsudků se nazývá sorités, nikoliv sylogismus, který je omezen na dvě premisy.",
                    c: "Samostatný soud bez vazby na jiné tvrzení nemůže tvořit úsudek, protože v něm chybí proces vyvozování."
                }
            },
            {
                q: "Jakou roli hraje v sylogismu tzv. 'střední člen' (M)?",
                a: "Je to pojem, který se vyskytuje v obou premisách a umožňuje jejich logické propojení, ale v závěru mizí.",
                b: "Je to věta, která stojí uprostřed mezi první premisou a závěrem, ale nemá žádný význam.",
                c: "Je to mluvčí, který úsudek přednáší a stojí uprostřed mezi posluchači.",
                ans: "a",
                expl: {
                    a: "Střední člen je 'lepidlo' úsudku. Například v úsudku 'Lidé (M) jsou smrtelní. Sókratés je člověk (M)' je středním členem pojem 'člověk'. Díky němu můžeme přenést vlastnost 'smrtelnost' na Sókrata. Jakmile splní svou roli spojnice v premisách, v samotném závěru už ho nepotřebujeme.",
                    b: "Logická struktura není o pořadí vět na papíře, ale o vztazích mezi pojmy uvnitř těchto vět.",
                    c: "Subjektivní role mluvčího je v rámci formální logiky zcela irelevantní."
                }
            },
            {
                q: "Na čem je založen 'argument z analogie'?",
                a: "Na srovnání dvou věcí, které se shodují v určitých znacích, z čehož vyvodíme, že se shodují i v dalších.",
                b: "Na vyhledávání logických rozporů v řeči soupeře, které ho mají zesměšnit.",
                c: "Na přísném matematickém výpočtu pravděpodobnosti výskytu určitého jevu.",
                ans: "a",
                expl: {
                    a: "Analogie je úsudek založený na podobnosti. Pokud se objekt X podobá objektu Y ve vlastnostech A, B a C, usuzujeme, že by se mu mohl podobat i ve vlastnosti D. Je to velmi kreativní způsob myšlení, který vede k novým nápadům, ale logicky je závěr vždy jen pravděpodobný.",
                    b: "Vyhledávání rozporů je součástí kritiky argumentace, nikoliv podstatou analogie.",
                    c: "Analogie je kvalitativní srovnání vlastností, nikoliv kvantitativní statistický výpočet."
                }
            },
            {
                q: "Co je to 'entyméma' v rámci argumentace?",
                a: "Úsudek, ve kterém je jedna z premis (nebo i závěr) zamlčena, protože je považována za samozřejmou.",
                b: "Druh logického klamu, který záměrně používá příliš složitá a nesrozumitelná slova.",
                c: "Grafické znázornění úsudku pomocí kružnic a čtverců na tabuli.",
                ans: "a",
                expl: {
                    a: "V běžné řeči málokdy říkáme úplné sylogismy. Řekneme: 'Sókratés je člověk, takže je jasné, že umře.' Zamlčeli jsme premisu 'Všichni lidé jsou smrtelní'. Logika se učí entymémata 'doplňovat', abychom mohli prověřit, zda celý argument drží pohromadě.",
                    b: "Složitost slov se nazývá žargon, entyméma je stručnost v logické struktuře.",
                    c: "Grafické znázornění se nazývá Vennovy diagramy, nikoliv entyméma."
                }
            },
            {
                q: "Kdy dochází k logické chybě 'přílišného zjednodušení' (redukcionismus)?",
                a: "Když složitý jev vysvětlíme pomocí jediné příčiny, přestože jich ve skutečnosti působí více.",
                b: "Když v úsudku použijeme pouze jedno slovo místo celého souvětí.",
                c: "Když definici napíšeme tak krátce, že ji nikdo v diskuzi nestihne zaregistrovat.",
                ans: "a",
                expl: {
                    a: "Redukcionismus (např. 'Války vznikají jen kvůli penězům') ignoruje komplexitu světa. V logice úsudku to znamená, že premisy jsou neúplné a závěr, i když vypadá logicky, je chybný, protože opomíjí podstatné části reality. Správný argument musí zohlednit všechny nutné podmínky.",
                    b: "Počet slov neurčuje logickou kvalitu vysvětlení; důležitý je počet zohledněných faktorů.",
                    c: "Stručnost zápisu je věcí stylu, redukcionismus je věcí nedostatečné analýzy příčin a následků."
                }
            }
            ]
        },
        "klamy_a_kriticky_mysleni": {
            "title": "Klamy a kritické myšlení",
            "questions": [
            {
                q: "V čem spočívá argumentační klam 'Slaměný panák' (straw man)?",
                a: "Mluvčí napadne osobní charakter soupeře, aby ho v očích veřejnosti zcela zdiskreditoval.",
                b: "Mluvčí zkreslí soupeřův argument do slabší nebo extrémní podoby a pak útočí na tuto verzi.",
                c: "Mluvčí v diskusi mlčí a nechává za sebe mluvit pouze připravené písemné podklady.",
                ans: "b",
                expl: {
                    a: "Tento postup se nazývá 'Ad hominem' a zaměřuje se na osobu, nikoliv na zkreslení myšlenky.",
                    b: "Při tomto klamu mluvčí 'vytvoří panáka' – tedy karikaturu soupeřova názoru, kterou je snadné rozmetat. Pokud například někdo navrhne mírnější tresty, zastánce klamu odpoví: 'Takže vy chcete pustit všechny vrahy na svobodu?'. Bojuje tak proti něčemu, co soupeř nikdy neřekl, čímž vytváří iluzi vítězství v diskusi.",
                    c: "Mlčení v diskusi není logickým klamem, ale spíše komunikační strategií nebo pasivitou."
                }
            },
            {
                q: "Proč je klam 'Ad hominem' (útok na osobu) logicky neplatný?",
                a: "Protože vlastnosti nebo činy mluvčího nijak neovlivňují pravdivost jeho konkrétního argumentu.",
                b: "Protože je v rozporu s pravidly slušného chování, která jsou v logice nadřazena pravdě.",
                c: "Protože útok na osobu je povolen pouze v politických debatách, nikoliv v čisté logice.",
                ans: "a",
                expl: {
                    a: "Logika zkoumá vztah mezi premisami a závěrem, nikoliv charakter mluvčího. I člověk se špatnou pověstí může mít v konkrétní věci pravdu a předložit logicky neprůstřelný důkaz. Odvedení pozornosti k soukromí či minulosti soupeře je pouze snahou vyhnout se věcnému vyvracení jeho tvrzení.",
                    b: "Slušné chování je věcí etikety; logika je chladná věda o struktuře myšlení a charakter mluvčího ignoruje.",
                    c: "Logické zákony platí univerzálně v každém kontextu, tedy i v politice, i když se tam často porušují."
                }
            },
            {
                q: "Jak poznáme argumentační klam 'Falešné dilema'?",
                a: "Mluvčí tvrdí, že jeho argument je pravdivý jen proto, že ho zatím nikdo nedokázal vyvrátit.",
                b: "Mluvčí předkládá pouze dvě krajní možnosti, přestože ve skutečnosti existují i jiná řešení.",
                c: "Mluvčí používá v jedné větě příliš mnoho protichůdných pojmů, které se navzájem vylučují.",
                ans: "b",
                expl: {
                    a: "Toto je definice klamu 'Argument z nevědomosti' (ad ignorantiam), nikoliv falešného dilematu.",
                    b: "Tento klam nutí posluchače k výběru mezi dvěma extrémy (např. 'Buď jsi s námi, nebo jsi nepřítel'). Úmyslně se přitom ignoruje 'šedá zóna' nebo třetí varianta, která by mohla být nejlepším řešením. Cílem je vmanipulovat soupeře do pozice, kde jsou obě nabízené volby pro něj nevýhodné nebo radikální.",
                    c: "Protichůdné pojmy mohou vést ke sporu (kontradikci), ale samy o sobě netvoří klam falešného dilematu."
                }
            },
            {
                q: "Co je podstatou 'Argumentu z nevědomosti' (ad ignorantiam)?",
                a: "Tvrzení, že něco je pravda jen proto, že dosud nebyl podán důkaz o opaku.",
                b: "Odmítání jakékoliv diskuse s lidmi, kteří nemají v daném oboru dostatečné vzdělání.",
                c: "Používání zastaralých vědeckých dat, o kterých mluvčí neví, že už byla dávno vyvrácena.",
                ans: "a",
                expl: {
                    a: "Tento klam zneužívá chybějící důkaz jako potvrzení své teorie (např. 'Nikdo nedokázal, že duchové neexistují, tedy existují'). V logice však nedostatek důkazů pro jednu stranu neznamená automatické vítězství strany druhé. Důkazní břemeno leží vždy na tom, kdo s konkrétním tvrzením o existenci něčeho přichází.",
                    b: "To je projev elitářství nebo arogance, ale logicky jde o jiný typ problému než argument z nevědomosti.",
                    c: "Použití starých dat je faktická chyba, nikoliv formální logický klam založený na absenci důkazu."
                }
            },
            {
                q: "Co zkoumáme v kritickém myšlení pomocí otázky 'Cui bono?' (v čí prospěch)?",
                a: "Hledáme, kdo je autorem daného citátu, abychom ho mohli správně uvést v bibliografii.",
                b: "Zjišťujeme, komu předložená informace nebo závěr přináší prospěch, abychom odhalili skryté zájmy.",
                c: "Ptáme se, zda je daný úsudek napsán v latinském jazyce, který je symbolem vzdělanosti.",
                ans: "b",
                expl: {
                    a: "Citace jsou otázkou akademické poctivosti, otázka 'Cui bono' však míří hlouběji na motivaci.",
                    b: "Tato otázka je základním nástrojem odolnosti vůči manipulaci. Pokud zjistíme, že mluvčí nebo zdroj má z přijetí určitého názoru zisk (finanční, politický, mocenský), musíme k informaci přistupovat se zvýšenou opatrností. Pomáhá nám to rozlišit objektivní pravdu od účelového tvrzení.",
                    c: "Latina je v logice jen historickým nástrojem; na samotnou pravdivost nebo prospěšnost vliv nemá."
                }
            },
            {
                q: "Co v psychologii logického myšlení znamená 'Potvrzovací zkreslení' (confirmation bias)?",
                a: "Tendence našeho mozku vyhledávat jen ty informace, které jsou v souladu s naším přesvědčením.",
                b: "Povinnost vědce zveřejňovat výsledky pouze tehdy, když se jeho původní hypotéza potvrdila.",
                c: "Schopnost mluvčího přesvědčit v diskusi úplně každého bez ohledu na sílu jeho argumentů.",
                ans: "a",
                expl: {
                    a: "Lidská mysl přirozeně upřednostňuje důkazy, které jí 'hrají do karet', a naopak ignoruje nebo znevažuje ty, které jí odporují. Kritické myšlení vyžaduje toto zkreslení aktivně překonávat tím, že záměrně vyhledáváme protichůdné názory. Bez toho zůstáváme uvězněni v názorové bublině.",
                    b: "To by byla vědecká nepoctivost; poctivá věda musí zkoumat i data, která hypotézu vyvracejí.",
                    c: "Tato schopnost se nazývá charisma nebo sugestivní rétorika, nikoliv potvrzovací zkreslení."
                }
            },
            {
                q: "Jak se v diskusi projevuje klam 'Přání otcem myšlenky' (wishful thinking)?",
                a: "Mluvčí nutí své děti (potomky), aby v diskusi zastávali stejné názory jako on sám.",
                b: "Mluvčí věří, že něco je pravda jednoduše proto, že si přeje, aby to pravda byla.",
                c: "Mluvčí si přeje vítězství v diskusi natolik, že začne soupeři fyzicky vyhrožovat.",
                ans: "b",
                expl: {
                    a: "To je výchovný nebo sociální problém, nikoliv logický klam o povaze pravdy.",
                    b: "Tento klam zaměňuje pocity a touhy za fakta. Člověk nekriticky přijme závěr, který mu vyhovuje (např. 'Tento lék určitě funguje, protože se opravdu chci uzdravit'), i když pro něj neexistují objektivní důkazy. V logické argumentaci musí být přání mluvčího zcela odděleno od analýzy pravdivosti.",
                    c: "Vyhrožování je klam 'Ad baculum' (apel na sílu), který nahrazuje logiku násilím a strachem."
                }
            },
            {
                q: "Co vyžaduje 'etika argumentace' vůči soupeřovým argumentům?",
                a: "Snažit se soupeře v diskusi za každou cenu zesměšnit a vyvolat v něm pocit méněcennosti.",
                b: "Vždy interpretovat soupeřův argument v jeho nejsilnější a nejférovější možné podobě.",
                c: "Využít každé gramatické chyby nebo přeřeknutí soupeře k tomu, abychom ukončili debatu.",
                ans: "b",
                expl: {
                    a: "Zesměšňování je znakem neetické diskuse a slouží k odvedení pozornosti od podstaty problému.",
                    b: "Tento princip (princip vstřícnosti) říká, že pokud chceme skutečně vyvrátit nějaký názor, musíme se vypořádat s jeho nejlepší verzí. Tím zajišťujeme, že diskuse vede k hledání pravdy a nikoliv jen k prázdnému vítězství. Je to základní kámen čestného a produktivního dialogu.",
                    c: "Slovíčkaření a chytání za gramatiku je logicky irelevantní a v etické diskusi nepřípustné."
                }
            },
            {
                q: "Klam 'Argumentum ad populum' (společenský apel) spočívá v tom, že:",
                a: "Tvrdíme, že něco je pravdivé jen proto, že tomu věří velké množství lidí.",
                b: "Útočíme na chudé vrstvy obyvatelstva a obviňujeme je z nedostatku logického myšlení.",
                c: "Snažíme se přesvědčit publikum pomocí složitých matematických grafů a statistik.",
                ans: "a",
                expl: {
                    a: "Pravda v logice není demokratická. To, že si většina lidí něco myslí, neznamená, že je to pravdivé (kdysi si většina myslela, že Země je placatá). Tento klam využívá lidskou touhu po sounáležitosti ke skupině, aby obešel nutnost předložit věcné důkazy.",
                    b: "To je projev sociální předsudečnosti, nikoliv podstata klamu 'ad populum'.",
                    c: "Statistiky jsou formou důkazu; pokud nejsou zfalšované, nejedná se o klam 'ad populum'."
                }
            },
            {
                q: "Co charakterizuje logický klam 'Klouzavá plocha' (slippery slope)?",
                a: "Mluvčí tvrdí, že i malý krok určitým směrem povede k řetězci katastrofických následků.",
                b: "Mluvčí se v diskusi neustále vrací k prvnímu bodu, čímž znemožňuje jakýkoliv pokrok.",
                c: "Mluvčí používá v argumentaci kluzké a nejednoznačné pojmy, které mění svůj význam.",
                ans: "a",
                expl: {
                    a: "Tento klam straší extrémními následky bez prokázání příčinné souvislosti (např. 'Když povolíme X, zanedlouho nastane úplný rozvrat společnosti'). Logicky je chybný proto, že nepředkládá důkazy, proč by onen katastrofický scénář musel nutně nastat po prvním malém kroku.",
                    b: "To je spíše obstrukce v diskuzi, nikoliv specifický klam klouzavé plochy.",
                    c: "Používání nejednoznačných pojmů se nazývá ekvivokace, nikoliv klouzavá plocha."
                }
            },
            {
                q: "Klam 'Apel na tradici' (argumentum ad antiquitatem) tvrdí, že:",
                a: "Něco je správné nebo pravdivé jen proto, že se to tak dělalo vždycky.",
                b: "Všechno staré je špatné a musíme to nahradit moderními technologiemi.",
                c: "Historie se neustále opakuje a nemá smysl se snažit o jakoukoliv změnu.",
                ans: "a",
                expl: {
                    a: "Stáří zvyku nebo myšlenky není zárukou její pravdivosti či morálnosti (např. otroctví mělo dlouhou tradici, a přesto bylo špatné). Logika vyžaduje věcné zdůvodnění platnosti v současném kontextu, nikoliv pouhý odkaz na minulost.",
                    b: "To je opačný klam – apel na novost, který rovněž nekriticky upřednostňuje jednu vlastnost (modernost).",
                    c: "To je pesimistický světonázor, nikoliv specifický argumentační klam založený na tradici."
                }
            },
            {
                q: "V čem spočívá chyba 'Falešné příčiny' (post hoc ergo propter hoc)?",
                a: "V domněnce, že pokud jev B nastal po jevu A, musí být jev A jeho příčinou.",
                b: "V tvrzení, že žádná věc na světě nemá svou skutečnou a dohledatelnou příčinu.",
                c: "V záměrném lhaní o tom, kdo způsobil určitou nehodu nebo chybu v práci.",
                ans: "a",
                expl: {
                    a: "Časová následnost neznamená příčinnost. Příklad: 'Zakokrhal kohout a pak vyšlo slunce, tedy slunce vyšlo kvůli kohoutovi'. Logika vyžaduje prokázání mechanismu, jak jedna věc způsobuje druhou, pouhé 'potom' nestačí.",
                    b: "To je nihilismus nebo skepse, nikoliv konkrétní logická chyba v určení příčiny.",
                    c: "Lež je morální selhání, zatímco falešná příčina je chyba v logickém uvažování o vztazích mezi jevy."
                }
            },
            {
                q: "Co je hlavním nástrojem 'kritického myšlení' při posuzování informací?",
                a: "Slepá důvěra v autority, které mají nejvíce titulů a nejdelší praxi v oboru.",
                b: "Aktivní prověřování zdrojů, hledání logických rozporů a zvažování protidůkazů.",
                c: "Okamžité odmítnutí každé informace, která nám není na první pohled sympatická.",
                ans: "b",
                expl: {
                    a: "Apel na autoritu je často klamem; i odborník se může mýlit nebo být zaujatý.",
                    b: "Kritické myšlení není o negaci všeho, ale o poctivém testování platnosti. Zahrnuje schopnost odstoupit od vlastních emocí, analyzovat strukturu argumentů a ptát se po důkazech. Je to jediná spolehlivá cesta, jak se nenechat v informačním věku zmanipulovat.",
                    c: "To je projev potvrzovacího zkreslení a emocí, což je přesný opak kritického přístupu."
                }
            }
            ]
        }
    }
};
