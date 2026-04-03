window.wiki_predikatova_logika = {
    "predikaty": {
        "title": "Základy predikátové logiky",
        "content": `
            <p>Predikátová logika rozšiřuje výrokovou logiku o kvantifikátory a predikáty:</p>
            
            <table class="wiki-table">
                <tr><th class="w-20">Pojem</th><th class="w-30">Zápis</th><th>Význam</th></tr>
                <tr>
                    <td><strong>Predikát</strong></td>
                    <td style="font-family: monospace;">P(x)</td>
                    <td>Vlastnost P objektu x (např. „x je člověk")</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td><strong>Relace</strong></td>
                    <td style="font-family: monospace;">R(x, y)</td>
                    <td>Vztah R mezi x a y (např. „x miluje y")</td>
                </tr>
                <tr>
                    <td><strong>Konstanta</strong></td>
                    <td style="font-family: monospace;">a, b, c</td>
                    <td>Konkrétní pojmenovaný objekt (např. Sókratés)</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td><strong>Proměnná</strong></td>
                    <td style="font-family: monospace;">x, y, z</td>
                    <td>Obecný objekt (vázaný nebo volný)</td>
                </tr>
            </table>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">Pravidla pro zápis vět:</h4>
                <ul style="margin: 0; font-size: 14px;">
                    <li><strong>„Všichni P jsou Q"</strong> → ∀x (P(x) → Q(x))</li>
                    <li><strong>„Někteří P jsou Q"</strong> → ∃x (P(x) ∧ Q(x))</li>
                    <li><strong>„Žádný P není Q"</strong> → ∀x (P(x) → ¬Q(x))</li>
                    <li><strong>„Existuje P, který není Q"</strong> → ∃x (P(x) ∧ ¬Q(x))</li>
                </ul>
            </div>
            
            <p style="background: #fff9e6; padding: 10px; border-radius: 8px; border-left: 4px solid #f5a623; margin-top: 15px; font-size: 13px;">
                <strong>⚠️ Pozor:</strong> „Všichni" používá implikaci (→), „někteří" používá konjunkci (∧)!
            </p>
        `
    },
    "kvantifikatory_prehled": {
        "title": "Kvantifikátory: ∀ a ∃",
        "content": `
            <p>Základní symboly predikátové logiky pro vyjadřování množství:</p>
            
            <table class="wiki-table">
                <tr><th class="w-15">Symbol</th><th class="w-30">Název</th><th>Význam</th></tr>
                <tr>
                    <td style="font-size: 20px;">∀</td>
                    <td><strong>Všeobecný kvantifikátor</strong></td>
                    <td>„Pro všechny, každý" <span style="color: #666;">• Platí pro všechny prvky</span></td>
                </tr>
                <tr>
                    <td style="font-size: 20px;">∃</td>
                    <td><strong>Existenční kvantifikátor</strong></td>
                    <td>„Existuje alespoň jeden" <span style="color: #666;">• Platí pro minimálně jeden prvek</span></td>
                </tr>
            </table>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">Příklad vyhodnocení:</h4>
                <p style="margin: 0 0 10px 0; font-size: 14px;">
                    <strong>Formule:</strong> ∀x C(x) → ∃x C(x)<br>
                    <strong>Hodnoty:</strong> Univerzum = {a, b}, C(a)=1, C(b)=1
                </p>
                
                <table class="wiki-table" style="margin-top: 10px; font-size: 13px;">
                    <tr><th class="w-15">Postup</th><th>Výpočet</th><th class="w-15">Výsledek</th></tr>
                    <tr><td>1. ∀x C(x)</td><td>C(a) ∧ C(b) = 1 ∧ 1</td><td><strong>1</strong></td></tr>
                    <tr><td>2. ∃x C(x)</td><td>C(a) ∨ C(b) = 1 ∨ 1</td><td><strong>1</strong></td></tr>
                    <tr><td>3. Implikace</td><td>1 → 1</td><td><strong style="color: #34c759;">1 ✓</strong></td></tr>
                </table>
            </div>
            
            <p style="background: #fff9e6; padding: 10px; border-radius: 8px; border-left: 4px solid #f5a623; margin-top: 15px; font-size: 13px;">
                <strong>💡 Zákon:</strong> Z "všichni" (∀) vždy plyne "někdo" (∃) – pokud je univerzum neprázdné.
            </p>
        `
    },
    "relace_vlastnosti": {
        "title": "Vlastnosti relací",
        "content": `
            <p>Relace mezi objekty mají specifické vlastnosti, které ovlivňují jejich chování:</p>
            
            <table class="wiki-table">
                <tr><th class="w-25">Vlastnost</th><th class="w-35">Zápis</th><th>Význam</th></tr>
                <tr>
                    <td><strong>Reflexivita</strong></td>
                    <td style="font-family: monospace;">∀x R(x, x)</td>
                    <td>Každý je v relaci sám se sebou</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td><strong>Symetrie</strong></td>
                    <td style="font-family: monospace;">∀x∀y (R(x,y) → R(y,x))</td>
                    <td>Pokud x je v relaci s y, pak i y s x</td>
                </tr>
                <tr>
                    <td><strong>Tranzitivita</strong></td>
                    <td style="font-family: monospace;">∀x∀y∀z ((R(x,y) ∧ R(y,z)) → R(x,z))</td>
                    <td>Přenositelnost relace</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td><strong>Antisymetrie</strong></td>
                    <td style="font-family: monospace;">∀x∀y ((R(x,y) ∧ R(y,x)) → x=y)</td>
                    <td>Pokud obě strany, pak jsou stejné</td>
                </tr>
            </table>
            
            <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0;">Příklady relací:</h4>
                <ul style="margin: 0; font-size: 14px;">
                    <li><strong>= (rovnost):</strong> reflexivní, symetrická, tranzitivní</li>
                    <li><strong>≤ (menší nebo rovno):</strong> reflexivní, antisymetrická, tranzitivní</li>
                    <li><strong>&lt; (menší):</strong> antireflexivní, antisymetrická, tranzitivní</li>
                </ul>
            </div>
        `
    },
    "negace_kvantifikatoru": {
        "title": "Negace kvantifikátorů",
        "content": `
            <p>Jak negovat formule s kvantifikátory – klíčové pro důkazy sporem:</p>
            
            <div style="background: #ffebee; padding: 15px; border-radius: 12px; margin: 15px 0;">
                <h4 style="margin: 0 0 10px 0; color: #ff3b30;">Základní pravidla negace:</h4>
                <table class="wiki-table" style="background: white;">
                    <tr>
                        <td style="font-family: monospace; font-size: 16px;">¬∀x P(x)</td>
                        <td style="font-size: 20px;">=</td>
                        <td style="font-family: monospace; font-size: 16px;">∃x ¬P(x)</td>
                    </tr>
                    <tr style="background: #fafafa;">
                        <td style="font-family: monospace; font-size: 16px;">¬∃x P(x)</td>
                        <td style="font-size: 20px;">=</td>
                        <td style="font-family: monospace; font-size: 16px;">∀x ¬P(x)</td>
                    </tr>
                </table>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #007aff;">Příklad negace:</h4>
                <p style="margin: 0; font-size: 14px;">
                    <strong>Původní:</strong> „Všichni lidé jsou smrtelní" (∀x L(x) → M(x))<br>
                    <strong>Negace:</strong> „Existuje někdo, kdo není smrtelný" (∃x L(x) ∧ ¬M(x))
                </p>
            </div>
            
            <p style="font-size: 13px; color: #666; margin-top: 15px;">
                <strong>🔑 Pravidlo:</strong> Při negaci se ∀ mění na ∃, ∃ mění na ∀ a predikát se zneguje.
            </p>
        `
    },
    "pokrocile_zapisy": {
        "title": "Pokročilé zápisy",
        "content": `
            <p>Komplexnější konstrukce pro specifické situace:</p>
            
            <table class="wiki-table">
                <tr><th class="w-30">Význam</th><th class="w-35">Zápis</th><th>Vysvětlení</th></tr>
                <tr>
                    <td><strong>Právě jeden</strong></td>
                    <td style="font-family: monospace; font-size: 12px;">∃!x P(x)</td>
                    <td>∃x (P(x) ∧ ∀y (P(y) → y=x))</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td><strong>Alespoň dva</strong></td>
                    <td style="font-family: monospace; font-size: 12px;">∃x∃y (P(x) ∧ P(y) ∧ x≠y)</td>
                    <td>Dva různé objekty splňují P</td>
                </tr>
                <tr>
                    <td><strong>Funkcionalita</strong></td>
                    <td style="font-family: monospace; font-size: 11px;">∀x∀y∀z ((R(y,x) ∧ R(z,x)) → y=z)</td>
                    <td>Každý má nejvýše jedno R</td>
                </tr>
            </table>
            
            <div style="background: #fff3e0; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #ff9500;">Vázaná vs volná proměnná:</h4>
                <p style="margin: 0; font-size: 14px;">
                    <strong>Vázaná:</strong> Spadá pod kvantifikátor (např. x ve ∀x P(x))<br>
                    <strong>Volná:</strong> Není pod kvantifikátorem (např. x v P(x) bez ∀/∃)
                </p>
            </div>
            
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; border-left: 4px solid #34c759; margin-top: 15px; font-size: 13px;">
                <strong>✓ Tip:</strong> Formule s volnou proměnnou není výrokem – nemá určenou pravdivostní hodnotu.
            </p>
        `
    }
};
