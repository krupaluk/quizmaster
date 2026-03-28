# QUIZ-MASTER

Lehký, modulární a mobilně optimalizovaný kvízový systém postavený na čistém HTML, CSS a JavaScriptu (Vanilla JS).

## 🚀 Hlavní funkce
* **Modulární struktura:** Kvízy jsou uloženy v samostatných .js souborech a načítají se dynamicky podle potřeby.
* **Rozbalovací kategorie:** Přehledné organizace témat do kategorií s ikonami a popisky.
* **Moderní UI:** Čistý design inspirovaný iOS, optimalizovaný pro mobilní zařízení.
* **Chytré výběr počtu otázek:** Flexibilní tlačítka s automatickým přírůstkem (5, 10, 15...) a MAX volbou.
* **Chytré míchání:** Možnost zapnutí/vypnutí náhodného pořadí otázek a automatické míchání odpovědí (A, B, C).
* **Režim opravy chyb:** Po skončení testu lze spustit smyčku pouze pro opravu chybně zodpovězených otázek.
* **Soft-Exit:** Bezpečnostní obrazovka při ukončení testu s 10sekundovým odpočtem pro zamezení nechtěné ztráty postupu.
* **Vizuální indikátory:** Progress bar, počitadla správných/špatných odpovědí a zbývajících otázek v reálném čase.
* **Meta-data kvízů:** Automatická detekce poslední aktualizace, verze a popisky.
* **Cache systém:** Rychlejší načítání kvízů pomocí inteligentního cache.

## 🛠 Struktura souborů
* `index.html` – Hlavní aplikace (obsahuje kompletní UI a logiku).
* `quizMaster_config.js` – Hierarchická konfigurace kategorií a kvízů.
* `quizdata/` – Hlavní adresář pro kvízová data
  * `quizdata/filosofie/` – Kvízy z oblasti filosofie
  * `quizdata/logika/` – Kvízy z oblasti logiky  
  * `quizdata/prvouka/` – Kvízy z oblasti prvouky

## 📝 Jak přidat nový kvíz
1. Vytvořte datový soubor v příslušném kategorickém adresáři s názvem `{id}.js` (např. `quizdata/dejepis/novovek.js`), který začíná definicí: `window.data_novovek = { ... }`.
2. Zaregistrujte nový kvíz v `quizMaster_config.js` v příslušné kategorii:
   ```javascript
   Dejepis: {
       icon: "📚",
       description: "Cesta minulostí",
       quizzes: {
           dejepisNovovek: {
               id: "novovek",
               title: "Novověk",
               desc: "Období od renesance po současnost",
           }
       }
   }
   ```
3. Název souboru se automaticky generuje jako `quizdata/{kategorie}/{id}.js`
4. Aplikace téma automaticky zobrazí v příslušné kategorii.

### 📄 Struktura datového souboru kvízu
Příklad `quizdata/filosofie/obdobi_helenismu.js`:
```javascript
window.data_obdobi_helenismu = {
    "quizTitle": "Filosofie: Období Helénismu",
    "questions": [
        {
            q: "Co bylo hlavním politickým impulsem pro vznik helénistické filosofie?",
            a: "Rozkvět nezávislých řeckých městských států (polis)",
            b: "Zánik jistot městského státu a vznik rozlehlých říší",
            c: "Úplný zákaz filosofování v Athénách",
            ans: "b",
            expl: {
                a: "Chyba. Rozkvět polis charakterizuje klasické období (Sókratés, Platón), nikoliv helénismus, který naopak reaguje na jejich úpadek.",
                b: "Správně. Se zánikem polis ztratil člověk pocit bezpečí a vlivu na veřejné dění. Helénistická filosofie se proto obrátila do nitra jedince a hledala cestu, jak dosáhnout štěstí nezávisle na vnějších okolnostech a politickém chaosu velkých říší.",
                c: "Chyba. Filosofie v Athénách nebyla zakázána; naopak, Athény zůstaly intelektuálním centrem, kde sídlila Akademie, Lykeion i nové školy jako Zahrada nebo Stoa."
            }
        },
        {
            q: "Která historická osobnost svou expanzí umožnila míšení řecké a orientální kultury?",
            a: "Periklés", b: "Alexandr Veliký", c: "Julius Caesar",
            ans: "b",
            expl: {
                a: "Chyba. Periklés byl státník zlatého věku Athén, který se soustředil na vnitřní rozvoj a demokracii jednoho města.",
                b: "Správně. Alexandr svými výboji propojil řecký svět s Egyptem a Persií, čímž vznikla kosmopolitní kultura. Tento proces 'helénizace' přinesl do řecké filosofie nové náboženské a mystické prvky z Východu a vytvořil prostor pro myšlenku světoobčanství.",
                c: "Chyba. Caesar žil o několik století později a upevňoval římskou moc, i když z helénistické kultury silně čerpal."
            }
        }
    ]
};
```

## 🎨 Nedávné aktualizace
* **Reorganizace datové struktury** - nový adresář quizdata/ s kategoriemi
* **Zjednodušení názvů souborů** - pouhé ID místo dlouhých prefixů
* **Optimalizace kódu** - konsolidace duplicitní logiky
* **Čistší produkční kód** - odstranění debug výpisů

## 🎨 Dřívější aktualizace
* **Rozbalovací kategorie** s ikonami a popisky
* **Moderní nastavení** se summary boxem a sekcionovaným layoutem
* **Chytrá tlačítka** pro výběr počtu otázek (MAX 3 řádky, flexibilní přírůstky)
* **Vylepšené vizuální stavy** tlačítek a MAX badge
* **Automatická detekce poslední aktualizace** kvízových souborů
* **Hierarchická konfigurace** pro lepší organizaci
* **Cache systém** pro rychlejší načítání

## 💻 Technologie
* HTML5 (Struktura)
* CSS3 (Flexbox, Grid design, CSS Variables)
* Vanilla JavaScript (ES6+ modulární objekty, dynamické načítání)

## 📄 Licence
Tento projekt je volně k použití a úpravám.
