# QUIZ-MASTER (v1.10)

Lehký, modulární a mobilně optimalizovaný kvízový systém postavený na čistém HTML, CSS a JavaScriptu (Vanilla JS).

## 🚀 Hlavní funkce
* **Modulární struktura:** Kvízy jsou uloženy v samostatných .js souborech a načítají se dynamicky podle potřeby.
* **Moderní UI:** Čistý design inspirovaný iOS, optimalizovaný pro mobilní zařízení.
* **Chytré míchání:** Možnost zapnutí/vypnutí náhodného pořadí otázek a automatické míchání odpovědí (A, B, C).
* **Režim opravy chyb:** Po skončení testu lze spustit smyčku pouze pro opravu chybně zodpovězených otázek.
* **Soft-Exit:** Bezpečnostní obrazovka při ukončení testu s 10sekundovým odpočtem pro zamezení nechtěné ztráty postupu.
* **Vizuální indikátory:** Progress bar, počitadla správných/špatných odpovědí a zbývajících otázek v reálném čase.

## 🛠 Struktura souborů
* `index.html` – Hlavní aplikace (obsahuje kompletní UI a logiku).
* `quizMaster_config.js` – Konfigurační soubor pro seznam dostupných kvízů.
* `quizdata_*.js` – Samostatné datové soubory s otázkami a vysvětlivkami.

## 📝 Jak přidat nový kvíz
1. Vytvořte datový soubor (např. `quizdata_dejepis.js`), který začíná definicí: `window.data_dejepis = { ... }`.
2. Zaregistrujte nový soubor v `quizMaster_config.js` přidáním objektu:
   `{ id: "dejepis", file: "quizdata_dejepis.js", title: "Dějepis" }`.
3. Aplikace téma automaticky zobrazí v nabídce výběru.

## 💻 Technologie
* HTML5 (Struktura)
* CSS3 (Flexbox, Grid design)
* Vanilla JavaScript (ES6+ dynamické načítání)

## 📄 Licence
Tento projekt je volně k použití a úpravám.
