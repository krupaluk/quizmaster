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
      a: "Slovo (jazykový výraz) se v různých jazycích mění (např. strom, tree, Baum), ale pojem (myšlenka stromu) zůstává stejný. Zatímco lingvistika zkoumá gramatiku a hlásky slov, logika se zabývá právě tímto fixním významem – pojmem. Jeden pojem může být vyjádřen i více slovy (synonyma) nebo celým slovním spojením.",
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
      c: "Obecný pojem označuje celou množinu (třídu) objektů, které sdílejí společné podstatné vlastnosti. Pod pojem 'strom' spadají miliony konkrétních rostlin, které splňují definici kmene, větví a listí. Obecné pojmy jsou základem pro tvorbu obecných zákonů a vědeckých tvrzení."
    }
  },
  {
    q: "Co charakterizuje 'jedinečný pojem'?",
    a: "Lze jej v diskuzi použít pouze jednou, pak ztrácí svůj logický význam.",
    b: "Má právě jeden denotát, tedy označuje jeden konkrétní, unikátní předmět.",
    c: "Je to pojem, který vymyslel pouze jeden konkrétní filozof.",
    ans: "b",
    expl: {
      a: "Počet použití slova v textu nemá na jeho logickou povahu žádný vliv.",
      b: "Jedinečný pojem (individuální pojem) nepřipouští záměnu s jiným objektem. Může jím být vlastní jméno (Aristotelés) nebo jednoznačný popis (první kosmonaut ve vesmíru). Rozsah takového pojmu obsahuje vždy právě jeden prvek.",
      c: "Původ pojmu je historická zajímavost, nikoliv logická charakteristika jeho rozsahu."
    }
  },
  {
    q: "Pojem 'vodník' nebo 'největší přirozené číslo' označujeme jako:",
    a: "Prázdný pojem",
    b: "Obecný pojem",
    c: "Jedinečný pojem",
    ans: "a",
    expl: {
      a: "Prázdný pojem má srozumitelný smysl (víme, co si pod ním představit), ale v reálném světě mu neodpovídá žádný objekt. Množina jeho denotátů je tedy prázdná. V logice s nimi musíme zacházet opatrně, abychom o neexistujících věcech netvrdili vlastnosti, které implikují jejich existenci.",
      b: "Obecný pojem vyžaduje existenci třídy objektů v realitě, což 'vodník' nesplňuje.",
      c: "Jedinečný pojem vyžaduje právě jeden reálný objekt, což v těchto případech neplatí."
    }
  },
  {
    q: "Jaký je vztah mezi 'obsahem' (vlastnosti) a 'rozsahem' (počet objektů) pojmu?",
    a: "Čím více vlastností do obsahu pojmu přidáme, tím více objektů pod něj bude spadat.",
    b: "S rostoucím obsahem (více určujících znaků) klesá rozsah (méně objektů, které je splňují).",
    c: "Obsah a rozsah jsou na sobě nezávislé a jejich vztah nelze logicky určit.",
    ans: "b",
    expl: {
      a: "To je logický nesmysl; čím přísnější kritéria nastavíte, tím méně věcí jimi projde.",
      b: "Tento vztah nepřímé úměry je klíčový. Například pojem 'pes' má široký rozsah. Pokud přidáme vlastnost 'lovecký', rozsah se zúží (ne každý pes je lovecký). Přidáme-li další vlastnost 'zlatý retrívr', rozsah se zmenší ještě více. Čím přesněji věc definujeme (bohatší obsah), tím méně existuje věcí, které definici beze zbytku naplňují.",
      c: "Vztah mezi obsahem a rozsahem je jedním ze základních a stabilních zákonů formální logiky."
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
    a: "Pravidlo souměrnosti (ekvivalence) říká, že definice nesmí být ani příliš široká, ani příliš úzká. Pokud byste definovali 'čtverec' jako 'čtyřúhelník', byla by definice příliš široká, protože zahrnuje i obdélníky nebo kosočtverce. Správná definice musí pokrýt všechny objekty daného pojmu a zároveň žádné jiné, aby byly obě strany definice vzájemně zaměnitelné bez ztráty významu.",
    b: "Počet slov není důležitý; definiens bývá z podstaty věci téměř vždy delší a popisnější, aby mohl význam pojmu dostatečně a srozumitelně vysvětlit.",
    c: "Typografie nebo grafická úprava textu (např. zarovnání na střed) nemají na logickou správnost a platnost definice vůbec žádný vliv."
  }
},
{
  q: "Jaký je hlavní cíl 'analytické' (lexikální) definice?",
  a: "Vymyslet úplně nové slovo pro věc, která už svůj název v jazyce dávno má.",
  b: "Zcela změnit význam slova tak, aby vyhovoval aktuálním potřebám mluvčího.",
  c: "Zjistit a popsat, jak se dané slovo v jazyce skutečně používá a jaký má ustálený význam.",
  ans: "c",
  expl: {
    a: "Zavádění nových slov pro staré věci je otázkou neologismů a stylistiky, nikoliv analytického zkoumání významu.",
    b: "Svévolná změna významu bez upozornění je manipulační technikou, která je v přímém rozporu s principem analytické definice.",
    c: "Analytická definice (zjišťující) je typická pro výkladové slovníky. Nesnaží se význam aktivně tvořit, ale pouze ho věrně zaznamenat na základě dosavadní jazykové praxe v dané kultuře. Je buď pravdivá, nebo nepravdivá podle toho, zda skutečně odpovídá realitě, jak lidé danému slovu v dané době rozumí."
  }
},
{
  q: "Kdy v logické praxi využijeme 'syntetickou' (stipulativní) definici?",
  a: "Když potřebujeme v etymologickém slovníku vyhledat, co dané slovo znamenalo v dávné minulosti.",
  b: "Při zavádění nového termínu nebo při dohodě o přesném významu pro účely konkrétní diskuze či zákona.",
  c: "Při analýze uměleckých textů, kde je hlavním cílem nejednoznačnost a citové zabarvení.",
  ans: "b",
  expl: {
    a: "Historický vývoj slova zkoumá etymologie nebo analytická definice zaměřená na minulost, nikoliv definice syntetická, která význam aktivně vytváří.",
    b: "Syntetická definice (stanovující) vzniká 'rozhodnutím' nebo dohodou mluvčích, nikoliv pozorováním reality. Používá se například v úvodu právních norem ('Pro účely tohoto zákona se pod pojmem X rozumí Y'), aby se předešlo zdlouhavým výkladovým sporům. U takové definice nelze říct, zda je pravdivá nebo lživá, ale pouze zda je v daném logickém systému užitečná a srozumitelná.",
    c: "Umělecký jazyk pracuje s metaforou a záměrnou neurčitostí, zatímco syntetická definice směřuje k absolutní přesnosti a eliminaci jakýchkoliv výkladových variant."
  }
},
{
  q: "V čem spočívá proces 'explikace' pojmu?",
  a: "V nahrazení českého odborného termínu jeho anglickým ekvivalentem pro mezinárodní srozumitelnost.",
  b: "V transformaci nejasného a vágního pojmu z běžné řeči na přesný pojem vědecký.",
  c: "V úmyslném zamlžení významu slova tak, aby mu rozuměli pouze vybraní odborníci v daném oboru.",
  ans: "b",
  expl: {
    a: "Překlad mezi jazyky není explikací, ale prostým převodem významu, který sám o sobě nijak nezvyšuje logickou přesnost daného pojmu.",
    b: "Běžný jazyk je často plný nepřesností – například slova jako 'teplo' nebo 'spravedlnost' používáme v mnoha různých významech. Explikace vezme toto 'předvědecké' slovo a dá mu striktní hranice a pravidla pro potřeby konkrétní teorie. Je to nezbytný krok při budování každé vědy, která vyžaduje absolutní jednoznačnost a vyloučení subjektivního výkladu.",
    c: "Cílem explikace je naopak maximální vyjasnění a zpřístupnění významu pro přesné logické operace, nikoliv jeho záměrné skrývání před veřejností."
  }
},
{
  q: "V čem spočívá logická chyba zvaná 'definice kruhem' (circulus vitiosus)?",
  a: "V tom, že definice je napsána tak složitě a dlouze, že se čtenář v jejím obsahu na konci ztratí a musí začít číst znovu.",
  b: "V definování věcí, které nejsou kruhového tvaru, pomocí odborných termínů určených výhradně pro geometrii.",
  c: "V použití definovaného pojmu (nebo jeho přímého synonyma) uvnitř samotné vysvětlující části definice.",
  ans: "c",
  expl: {
    a: "Přílišná délka nebo složitost definice může být stylistickým nedostatkem, ale sama o sobě nepředstavuje logickou chybu bludného kruhu.",
    b: "Termín 'kruh' je v tomto kontextu pouze logickou metaforou pro uzavřený myšlenkový postup, nikoliv odkazem na reálné geometrické tvary.",
    c: "Účelem definice je osvětlit neznámé pomocí známého. Pokud definujeme 'spravedlnost' jako 'vlastnost jednat spravedlivě', nepředali jsme čtenáři žádnou novou informaci, protože myšlenka se uzavřela do bludného kruhu, který vyžaduje znalost slova ještě předtím, než je vysvětleno. Takový postup je v logice nepřípustný, protože neposkytuje žádné skutečné vymezení významu."
  }
},
{
  q: "Definice 'Člověk je savec, který se pohybuje po dvou končetinách' je logicky chybná, protože:",
  a: "Je příliš široká – pod tento popis spadají i jiní živočichové, například klokani.",
  b: "Je příliš úzká – vylučuje lidi, kteří o končetiny nešťastnou náhodou přišli.",
  c: "Je kruhová – nepřípustně v definici člověka používá biologický termín 'savec'.",
  ans: "a",
  expl: {
    a: "Tato definice porušuje pravidlo souměrnosti, protože definiens (dvounohý savec) pokrývá i jiné objekty než jen lidi, například klokany. Správná definice musí obsahovat tzv. specifickou diferenci, tedy vlastnost, kterou má pouze a jenom definovaný objekt a nikdo jiný. Bez tohoto zpřesnění definice 'přetéká' i na jiné živočišné druhy, čímž ztrácí svou základní rozlišovací schopnost.",
    b: "Logika se při definování druhu zaměřuje na podstatné a obecné vlastnosti celku, nikoliv na náhodné fyzické odchylky nebo zranění konkrétních jednotlivců.",
    c: "Slovo 'savec' není se slovem 'člověk' v logickém kruhu; jde o nadřazený rod (genus), což je v klasické definici zcela v pořádku a žádoucí."
  }
},
{
  q: "Co v logice zakazuje pravidlo o definování 'obscurum per obscurius'?",
  a: "Pojmy, které vyvolávají negativní nebo temné emoce, by se v logice neměly definovat vůbec.",
  b: "Definiční text nesmí být psán v prostředí se špatným osvětlením nebo v úplné tmě.",
  c: "Neznámý pojem nesmíme definovat pomocí pojmů, které jsou pro čtenáře ještě méně srozumitelné.",
  ans: "c",
  expl: {
    a: "Logika je hodnotově neutrální věda; definovat lze jakýkoliv pojem bez ohledu na jeho citový náboj, pokud jsou splněna formální pravidla srozumitelnosti.",
    b: "Toto je doslovný, ale zcela chybný výklad latinského rčení, které se metaforicky týká srozumitelnosti textu, nikoliv fyzických podmínek při psaní.",
    c: "Latinský název v doslovném překladu znamená 'vysvětlovat nejasné ještě nejasnějším'. Definice má sloužit k pochopení a vyjasnění významu, proto musí k popisu používat slova, která jsou čtenáři již známá nebo jsou obecně srozumitelnější. Pokud k vysvětlení jednoduchého slova použijeme složitý odborný žargon, kterému nikdo nerozumí, definice selhává ve své základní funkci."
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
    q: "Co v logice vyjadřuje unární operace 'negace'?",
    a: "Obrácení pravdivostní hodnoty původního soudu (z pravdy na nepravdu a naopak).",
    b: "Potvrzení a zdůraznění pravdivosti původního soudu pomocí logického symbolu.",
    c: "Úplné smazání daného soudu z logického systému, protože přestal platit.",
    ans: "a",
    expl: {
      a: "Negace (značíme ¬) je unární operátor, což znamená, že působí na jeden konkrétní soud. Pokud je původní výrok pravdivý, jeho negace je nepravdivá, a pokud je původní výrok nepravdivý, jeho negace je pravdivá. V přirozeném jazyce jí odpovídá předpona 'ne-' nebo fráze 'není pravda, že'.",
      b: "To by byla operace identity, nikoliv negace; negace má za úkol původní tvrzení popřít.",
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
      b: "Konjunkce (značíme ∧) spojuje dva výroky a celý tento složený celek (např. 'Prší a mrzne') je pravdivý jen tehdy, když v realitě nastanou obě situace současně. Pokud je byť jen jedna část nepravdivá, je logicky nepravdivý i celý složený výrok. Je to v podstatě logický součin pravdivostních hodnot.",
      c: "V tomto případě (1 ∧ 0) by výsledná hodnota konjunkce byla nepravda (0)."
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
      b: "Logická disjunkce (značíme ∨) odpovídá spojce 'nebo' v nevylučovacím smyslu. To znamená, že výrok 'Prší nebo sněží' je pravdivý, pokud prší, pokud sněží, a dokonce i tehdy, pokud se děje obojí naráz. Jediný případ, kdy je disjunkce nepravdivá, nastává tehdy, když neplatí ani jedna její část.",
      c: "Tento specifický případ by sice disjunkci učinil pravdivou, ale není to její základní definiční podmínka."
    }
  },
  {
    q: "Kdy je složený soud v 'implikaci' (jestliže A, pak B) považován za nepravdivý?",
    a: "Pouze tehdy, když je první část (A) pravdivá a druhá část (B) je nepravdivá.",
    b: "Vždy, když je alespoň jedna z obou částí (A nebo B) nepravdivá.",
    c: "Pouze tehdy, když jsou obě části (A i B) nepravdivé.",
    ans: "a",
    expl: {
      a: "Implikace (značíme →) vyjadřuje vztah podmínky a následku. Představte si slib: 'Jestliže vyhraješ, dostaneš odměnu'. Slib je porušen (výrok je nepravdivý) pouze v momentě, kdy vyhraješ (pravda), ale odměnu nedostaneš (nepravda). Ve všech ostatních případech se považuje za logicky pravdivou.",
      b: "To není pravda; pokud je první část nepravdivá, celá implikace je pravdivá bez ohledu na druhou část.",
      c: "Naopak – v logice platí, že z nepravdy může vyplynout cokoliv, takže pokud jsou obě části nepravdivé, implikace jako celek je pravdivá."
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
      b: "Ekvivalence (značíme ↔) vyjadřuje vzájemnou podmíněnost. Celý výrok je pravdivý tehdy, když obě jeho části 'ladí' – tedy buď platí obě naráz (1 ↔ 1), nebo neplatí ani jedna (0 ↔ 0). Pokud by jedna část platila a druhá ne, rovnováha se poruší a výsledkem ekvivalence je nepravda.",
      c: "Toto pravidlo definuje disjunkci (nebo), nikoliv ekvivalenci, která vyžaduje shodu obou stran."
    }
  },
  {
    q: "Co v klasické logice vyjadřuje 'Zákon sporu' (principium contradictionis)?",
    a: "Žádný výrok nemůže být zároveň pravdivý i nepravdivý ve stejném čase a stejném vztahu.",
    b: "V každém platném úsudku musí dojít ke sporu mezi premisami, aby bylo co řešit.",
    c: "Pokud se dva lidé v diskuzi neshodnou, musí být jeden z nich logicky zcela vyloučen.",
    ans: "a",
    expl: {
      a: "Zákon sporu (značíme ¬(A ∧ ¬A)) je základním kamenem logiky. Říká, že v jednom systému není možné tvrdit, že něco 'je' a zároveň 'není' (např. 'Tento čtverec je kulatý'). Pokud v systému narazíme na spor, znamená to, že naše výchozí předpoklady nebo postup jsou chybné, což je základem důkazů sporem.",
      b: "To je omyl; naopak se snažíme o to, aby premisy byly bezrozporné, tedy aby se vzájemně nepřebíjely.",
      c: "Logický zákon sporu se týká pravdivostních hodnot výroků, nikoliv mezilidských vztahů nebo vylučování osob."
    }
  },
  {
    q: "Jaký je hlavní význam 'Zákona vyloučeného třetího' (tertium non datur)?",
    a: "Každý logický problém musí mít vždy právě tři možná řešení, jinak je neplatný.",
    b: "Pokud jsou dva lidé ve sporu, třetí nezávislá osoba v pozadí má vždy logickou pravdu.",
    c: "Každý výrok je buď pravdivý, nebo nepravdivý; žádná třetí možnost mezi tím neexistuje.",
    ans: "c",
    expl: {
      a: "Tento zákon naopak počet možností omezuje na dvě, nikoliv na tři.",
      b: "Latinský název 'vyloučený třetí' se netýká osob, ale pravdivostních hodnot (třetí hodnota je vyloučena).",
      c: "Zákon vyloučeného třetího (značíme A ∨ ¬A) stanovuje, že pro každý soud platí buď on sám, nebo jeho negace. V klasické logice neexistuje stav 'napůl pravda' nebo 'možná' – systém je striktně dvouhodnotový. Tento zákon nám umožňuje dělat jasné a jednoznačné závěry bez pochybností.",
    }
  },
  {
    q: "Co v logice označujeme termínem 'tautologie'?",
    a: "Logickou chybu, kdy mluvčí používá v jedné větě příliš mnoho cizích odborných slov.",
    b: "Složený výrok, který je díky své formě vždy pravdivý bez ohledu na pravdivost svých částí.",
    c: "Tvrzení, které je vždy nepravdivé, i kdyby byly všechny jeho dílčí části pravdivé.",
    ans: "b",
    expl: {
      a: "Zbytečné používání složitých slov může být stylistický nešvar, ale logicky to není tautologie.",
      b: "Tautologie je logicky nutná pravda, která vyplývá ze struktury (např. 'Prší, nebo neprší'). Nepotřebujeme se dívat z okna, abychom věděli, že výrok platí, protože pokrývá všechny možnosti dané zákony logiky. Tautologie jsou důležité, protože tvoří základní logické zákony a pravidla odvozování.",
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
      a: "Toto je zásadní princip logiky: úsudek může mít správnou formu, i když mluví o nesmyslech. Například: 'Všichni marťani jsou fialoví. Karel je marťan. Tedy Karel je fialový.' Tento úsudek je logicky perfektně správný (validní), i když jsou jeho části nepravdivé. Logika hlídá, aby se 'pravda' neztratila během cesty od premis k závěru, ale neručí za to, co do systému vložíte na začátku.",
      b: "Gramatika a čitelnost jsou záležitostí jazyka a estetiky, nikoliv formální platnosti logického vyplývání.",
      c: "To je omyl; i logicky bezchybný úsudek může vést k nepravdivému závěru, pokud vyjdeme z nepravdivých předpokladů."
    }
  },
  {
    q: "Co je hlavní charakteristikou 'deduktivního' argumentu?",
    a: "Závěr je v něm vždy pouze pravděpodobný a může se s novými objevy změnit.",
    b: "Vychází z pozorování náhodných jevů a snaží se z nich vytvořit obecnou teorii.",
    c: "Závěr logicky nutně vyplývá z premis; pokud jsou pravdivé premisy, musí být pravdivý i závěr.",
    ans: "c",
    expl: {
      a: "Tento popis odpovídá indukci, nikoliv dedukci, kde je vztah mezi premisami a závěrem absolutní.",
      b: "To je princip induktivního postupu, dedukce naopak postupuje od obecných pravidel k jednotlivým případům.",
      c: "U dedukce je pravdivost závěru 'vynucena' strukturou argumentu. Závěr totiž nepřináší žádnou novou informaci, která by už nebyla skryta v předpokladech (premisách). Pokud přijmeme, že všichni lidé jsou smrtelní a Sókratés je člověk, závěr o jeho smrtelnosti je logicky nezvratný a stoprocentně jistý."
    }
  },
  {
    q: "Jak se liší 'induktivní' úsudek od deduktivního?",
    a: "Induktivní úsudek vede pouze k pravděpodobnému závěru, který rozšiřuje naše poznání o novou informaci.",
    b: "Induktivní úsudek je v logice zakázaný, protože nikdy nemůže vést k pravdivému výsledku.",
    c: "Mezi indukcí a dedukcí není v moderní formální logice žádný věcný ani strukturální rozdíl.",
    ans: "a",
    expl: {
      a: "Indukce postupuje od pozorování konkrétních případů k obecnému závěru (např. 'Všechny labutě, které jsem viděl, byly bílé, tedy asi všechny labutě jsou bílé'). Protože nemůžeme pozorovat úplně všechno na světě, závěr indukce zůstává vždy jen s určitou mírou pravděpodobnosti. Na rozdíl od dedukce nám ale umožňuje objevovat nové zákonitosti v přírodních vědách.",
      b: "Indukce je základem všech experimentálních věd (fyzika, biologie); bez ní bychom nemohli tvořit žádné vědecké teorie.",
      c: "Rozdíl je zásadní – týká se míry jistoty závěru a směru, kterým myšlení postupuje (od obecného k partikulárnímu vs. od partikulárního k obecnému)."
    }
  },
  {
    q: "Kdy můžeme mluvit o tzv. 'úplné indukci'?",
    a: "Když se nám podaří prověřit úplně všechny členy dané množiny objektů.",
    b: "Když je argument napsán tak přesvědčivě, že o něm nikdo v diskuzi nepochybuje.",
    c: "Když indukce trvá dostatečně dlouho, například několik let pozorování.",
    ans: "a",
    expl: {
      a: "Úplná indukce je možná jen u uzavřených a konečných skupin (např. 'Všichni prezidenti ČR byli muži'). Protože jsme prověřili každý jednotlivý prvek, závěr je v tomto případě stoprocentně jistý, podobně jako u dedukce. Většinou je ale v přírodě indukce 'neúplná', protože nemůžeme prozkoumat například všechny hvězdy ve vesmíru.",
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
      b: "Modus Ponens (pravidlo odloučení) je nejzákladnější schéma dedukce. Využívá se v běžném životě i v matematice: pokud víme, že z určité podmínky něco vyplývá a tato podmínka nastala, musí nutně nastat i následek. Příklad: 'Jestliže mrzne, mrzne i voda v kalužích. Teď mrzne. Tedy i voda v kalužích je zmrzlá.'",
      c: "Analogie nepracuje s pevnou strukturou implikace, ale s podobností mezi dvěma různými jevy."
    }
  },
  {
    q: "Jak vypadá logicky správné schéma 'Modus Tollens'?",
    a: "Jestliže A, pak B. Platí B. Tedy platí A.",
    b: "Jestliže A, pak B. Neplatí A. Tedy neplatí B.",
    c: "Jestliže A, pak B. Neplatí B. Tedy neplatí A.",
    ans: "c",
    expl: {
      a: "Toto je logická chyba (potvrzení následku); z toho, že platí následek, nelze jistě vyvodit, že nastala právě tato konkrétní podmínka.",
      b: "Toto je rovněž logická chyba (popření podmínky); následek B mohl nastat z úplně jiných příčin než z A.",
      c: "Modus Tollens je velmi silný nástroj vyvracení teorií. Říká nám, že pokud z teorie (A) vyplývá určitý jev (B) a tento jev nenastal, musí být chybná i samotná výchozí teorie. Je to bezpečný způsob, jak logicky dospět k negaci původního předpokladu na základě chybějícího následku."
    }
  },
  {
    q: "Na čem je založen 'argument z analogie'?",
    a: "Na vyhledávání logických rozporů v řeči soupeře, které ho mají zesměšnit.",
    b: "Na srovnání dvou věcí, které se shodují v určitých znacích, z čehož vyvodíme, že se shodují i v dalších.",
    c: "Na přísném matematickém výpočtu pravděpodobnosti výskytu určitého jevu.",
    ans: "b",
    expl: {
      a: "Vyhledávání rozporů je součástí kritiky argumentace, nikoliv podstatou analogie.",
      b: "Analogie je úsudek založený na podobnosti. Pokud se objekt X podobá objektu Y ve vlastnostech A, B a C, usuzujeme, že by se mu mohl podobat i ve vlastnosti D. Je to velmi kreativní způsob myšlení, který vede k novým nápadům, ale logicky je závěr vždy jen pravděpodobný, nikdy ne jistý.",
      c: "Analogie je kvalitativní srovnání významů a vlastností, nikoliv kvantitativní statistický výpočet."
    }
  },
  {
    q: "Co v klasické logice tvoří strukturu 'sylogismu'?",
    a: "Právě dvě premisy (větší a menší) a z nich vyplývající závěr.",
    b: "Dlouhý řetězec nekonečného množství tvrzení, která na sebe navazují.",
    c: "Pouze jeden soud, který je natolik jasný, že nepotřebuje žádné další zdůvodnění.",
    ans: "a",
    expl: {
      a: "Sylogismus je klasická forma úsudku zavedená Aristotelem. Skládá se ze tří částí: vyšší premisy (obecné pravidlo), nižší premisy (konkrétní fakt) a závěru. Příklad: 'Všichni lidé (M) jsou smrtelní (P). Sókratés (S) je člověk (M). Tedy Sókratés (S) je smrtelný (P).' Tato struktura umožňuje přehledně kontrolovat správnost odvození.",
      b: "Řetězec úsudků se nazývá sorités, nikoliv sylogismus, který je omezen na dvě premisy.",
      c: "Samostatný soud bez vazby na jiné tvrzení nemůže tvořit úsudek, protože v něm chybí proces vyvozování."
    }
  },
  {
    q: "Kdy označujeme argument za 'přesvědčivý' (sound argument)?",
    a: "Když je mluvčí sympatický a mluví velmi hlasitě a srozumitelně.",
    b: "Když je úsudek logicky platný (validní) a zároveň jsou všechny jeho premisy fakticky pravdivé.",
    c: "Když je úsudek velmi složitý a obsahuje mnoho cizích slov, kterým nikdo nerozumí.",
    ans: "b",
    expl: {
      a: "Sympatie a hlasitost jsou řečnické (rétorické) prvky, které s logickou silou argumentu nesouvisí.",
      b: "V logice nestačí mít jen správnou 'formu' (validitu), ale musíme mít i pravdivý 'obsah'. Pokud je argument logicky bezchybný a zároveň vychází z nezpochybnitelně pravdivých faktů, je jeho závěr nevyvratitelný. Takový argument je ideálem vědeckého i racionálního dokazování.",
      c: "Složitost a nesrozumitelnost jsou spíše překážkou v argumentaci a často slouží k zakrytí logických nedostatků."
    }
  },
  {
    q: "Proč je schéma 'Jestliže A, pak B. Platí B. Tedy platí A.' logickou chybou?",
    a: "Protože porušuje etiku diskuse a je neslušné vůči soupeři.",
    b: "Protože stejný následek (B) mohl být způsoben úplně jinou příčinou než (A).",
    c: "Protože v logice nesmí po písmenu B nikdy následovat písmeno A.",
    ans: "b",
    expl: {
      a: "Logická platnost je nezávislá na slušnosti; i neslušný člověk může argumentovat logicky správně.",
      b: "Tato chyba se nazývá 'potvrzení následku'. Příklad: 'Jestliže prší (A), je mokrá silnice (B). Silnice je mokrá (B). Tedy prší (A).' To nemusí být pravda – silnici mohl postříkat kropicí vůz. Z existence následku nemůžeme s jistotou vyvodit jednu konkrétní příčinu, pokud jich může existovat více.",
      c: "Písmena jsou v logice pouze proměnné, jejich abecední pořadí nemá na platnost úsudku žádný vliv."
    }
  },
  {
    q: "Vztah 'logického vyplývání' mezi premisami a závěrem znamená, že:",
    a: "Mezi větami neexistuje žádná souvislost a každá mluví o něčem jiném.",
    b: "Závěr je v textu napsán hned pod premisami, aby to vypadalo jako úsudek.",
    c: "Není možné, aby byly premisy pravdivé a závěr byl zároveň nepravdivý.",
    ans: "c",
    expl: {
      a: "Logika je právě věda o hledání a definování souvislostí; nesouvisející věty netvoří logický systém.",
      b: "Grafické umístění textu (pod sebe) logickou vazbu nevytváří; ta musí být v obsahu a struktuře myšlenek.",
      c: "Vyplývání je jádrem logiky. Pokud závěr z premis skutečně vyplývá, pak pravda předpokladů 'teče' do závěru a zaručuje jeho pravdivost. Pokud by bylo možné mít pravdivé premisy a lživý závěr, logická vazba vyplývání mezi nimi neexistuje a úsudek je neplatný.",
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
      b: "Slušné chování je věcí etikety; logika je chladná věda o struktuře myšlení a Character mluvčího ignoruje.",
      c: "Logické zákony platí univerzálně v každém kontextu, tedy i v politice, i když se tam často porušují."
    }
  },
  {
    q: "Jak poznáme argumentační klam 'Falešné dilema'?",
    a: "Mluvčí tvrdí, že jeho argument je pravdivý jen proto, že ho zatím nikdo nedokázal vyvrátit.",
    b: "Mluvčí používá v jedné větě příliš mnoho protichůdných pojmů, které se navzájem vylučují.",
    c: "Mluvčí předkládá pouze dvě krajní možnosti, přestože ve skutečnosti existují i jiná řešení.",
    ans: "c",
    expl: {
      a: "Toto je definice klamu 'Argument z nevědomosti' (ad ignorantiam), nikoliv falešného dilematu.",
      b: "Protichůdné pojmy mohou vést ke sporu (kontradikci), ale samy o sobě netvoří klam falešného dilematu.",
      c: "Tento klam nutí posluchače k výběru mezi dvěma extrémy (např. 'Buď jsi s námi, nebo jsi nepřítel'). Úmyslně se přitom ignoruje 'šedá zóna' nebo třetí varianta, která by mohla být nejlepším řešením. Cílem je vmanipulovat soupeře do pozice, kde jsou obě nabízené volby pro něj nevýhodné nebo radikální.",
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
      b: "Tato otázka je základním nástrojem odolnosti vůči manipulaci a propagandě. Pokud zjistíme, že mluvčí nebo médium má z přijetí určitého názoru zisk (finanční, politický, mocenský), musíme k informaci přistupovat se zvýšenou opatrností. Pomáhá nám to rozlišit objektivní pravdu od účelového tvrzení.",
      c: "Latina je v logice jen historickým nástrojem; na samotnou pravdivost nebo prospěšnost vliv nemá."
    }
  },
  {
    q: "Co v psychologii logického myšlení znamená 'Potvrzovací zkreslení' (confirmation bias)?",
    a: "Povinnost vědce zveřejňovat výsledky pouze tehdy, když se jeho původní hypotéza potvrdila.",
    b: "Tendence našeho mozku vyhledávat jen ty informace, které jsou v souladu s naším přesvědčením.",
    c: "Schopnost mluvčího přesvědčit v diskusi úplně každého bez ohledu na sílu jeho argumentů.",
    ans: "b",
    expl: {
      a: "To by byla vědecká nepoctivost; poctivá věda musí zkoumat i data, která hypotézu vyvracejí.",
      b: "Lidská mysl přirozeně upřednostňuje důkazy, které jí 'hrají do karet', a naopak ignoruje nebo znevažuje ty, které jí odporují. Kritické myšlení vyžaduje toto zkreslení aktivně překonávat tím, že záměrně vyhledáváme protichůdné názory a zvažujeme je se stejnou váhou jako ty své. Bez toho zůstáváme uvězněni v názorové bublině.",
      c: "Tato schopnost se nazývá charisma nebo sugestivní rétorika, nikoliv potvrzovací zkreslení."
    }
  },
  {
    q: "Jak se v diskusi projevuje klam 'Přání otcem myšlenky' (wishful thinking)?",
    a: "Mluvčí věří, že něco je pravda jednoduše proto, že si přeje, aby to pravda byla.",
    b: "Mluvčí nutí své děti (potomky), aby v diskusi zastávali stejné názory jako on sám.",
    c: "Mluvčí si přeje vítězství v diskusi natolik, že začne soupeři fyzicky vyhrožovat.",
    ans: "a",
    expl: {
      a: "Tento klam zaměňuje pocity a touhy za fakta. Člověk nekriticky přijme závěr, který mu vyhovuje (např. 'Tento lék určitě funguje, protože se opravdu chci uzdravit'), i když pro něj neexistují objektivní důkazy. V logické argumentaci musí být přání mluvčího zcela odděleno od analýzy pravdivosti výroků.",
      b: "To je výchovný nebo sociální problém, nikoliv logický klam o povaze pravdy.",
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
      b: "Tento princip (princip vstřícnosti) říká, že pokud chceme skutečně vyvrátit nějaký názor, musíme se vypořádat s jeho nejlepší verzí, nikoliv s jeho karikaturou. Tím zajišťujeme, že diskuse vede k hledání pravdy a nikoliv jen k prázdnému vítězství. Je to základní kámen čestného a produktivního dialogu.",
      c: "Slovíčkaření a chytání za gramatiku je logicky irelevantní a v etické diskusi nepřípustné."
    }
  }
]

        }
    } 
};

