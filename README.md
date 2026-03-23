# QUIZ-MASTER (v2.0)

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
* `quizdata_*.js` – Samostatné datové soubory s otázkami a vysvětlivkami.

## 📝 Jak přidat nový kvíz
1. Vytvořte datový soubor (např. `quizdata_dejepis.js`), který začíná definicí: `window.data_dejepis = { ... }`.
2. Zaregistrujte nový soubor v `quizMaster_config.js` v příslušné kategorii:
   ```javascript
   Dejepis: {
       icon: "📚",
       description: "Cesta minulostí",
       quizzes: {
           dejepisNovovek: {
               id: "dejepis_novovek",
               file: "quizdata_dejepis_novovek.js",
               title: "Novověk",
               desc: "Období od renesance po současnost",
               version: "1.0"
           }
       }
   }
   ```
3. Aplikace téma automaticky zobrazí v příslušné kategorii.

## 🎨 Novinky ve verzi 2.0
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
