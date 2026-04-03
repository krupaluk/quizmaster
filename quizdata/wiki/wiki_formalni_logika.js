window.wiki_formalni_logika = {
    "symboly_prehled": {
        "title": "Přehled logických symbolů",
        "content": `
            <p>Základní symboly výrokové logiky a jejich význam:</p>
            
            <table class="wiki-table">
                <tr><th class="w-15">Symbol</th><th class="w-25">Název</th><th>Význam</th></tr>
                <tr><td style="font-size: 20px;">¬</td><td><strong>Negace</strong></td><td>„neplatí, že..." <span style="color: #666;">• Obrací hodnotu</span></td></tr>
                <tr><td style="font-size: 20px;">∧</td><td><strong>Konjunkce</strong></td><td>„a, zároveň" <span style="color: #666;">• Pravda jen když oba 1</span></td></tr>
                <tr><td style="font-size: 20px;">∨</td><td><strong>Disjunkce</strong></td><td>„nebo" <span style="color: #666;">• Nepravda jen když oba 0</span></td></tr>
                <tr><td style="font-size: 20px;">→</td><td><strong>Implikace</strong></td><td>„jestliže..., pak" <span style="color: #666;">• Nepravda jen u 1→0</span></td></tr>
                <tr><td style="font-size: 20px;">↔</td><td><strong>Ekvivalence</strong></td><td>„právě tehdy, když" <span style="color: #666;">• Pravda když stejné hodnoty</span></td></tr>
            </table>
            
            <div style="background: #f5f5f7; padding: 10px; border-radius: 8px; margin: 15px 0;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;"><strong>💡 Priorita vyhodnocení</strong> (od nejsilnější):</p>
                <table style="width: 100%; text-align: center; font-size: 14px; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 6px 2px; background: #e3f2fd; font-weight: 700;">¬</td>
                        <td style="padding: 6px 1px; color: #999;">></td>
                        <td style="padding: 6px 2px; background: #e8f5e9; font-weight: 700;">∧</td>
                        <td style="padding: 6px 1px; color: #999;">></td>
                        <td style="padding: 6px 2px; background: #fff3e0; font-weight: 700;">∨</td>
                        <td style="padding: 6px 1px; color: #999;">></td>
                        <td style="padding: 6px 2px; background: #f3e5f5; font-weight: 700;">→</td>
                        <td style="padding: 6px 1px; color: #999;">></td>
                        <td style="padding: 6px 2px; background: #fce4ec; font-weight: 700;">↔</td>
                    </tr>
                </table>
            </div>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">Příklad vyhodnocení:</h4>
                <p style="margin: 0 0 10px 0; font-size: 14px;">
                    <strong>Formule:</strong> (¬A ∧ B) → C<br>
                    <strong>Hodnoty:</strong> A=1, B=1, C=0
                </p>
                
                <table class="wiki-table" style="margin-top: 10px; font-size: 13px;">
                    <tr><th class="w-10">Postup</th><th class="w-30">Výraz</th><th>Výpočet</th><th class="w-15">Výsledek</th></tr>
                    <tr><td>1</td><td>¬A</td><td>¬1 = 0</td><td><strong>0</strong></td></tr>
                    <tr><td>2</td><td>¬A ∧ B</td><td>0 ∧ 1 = 0</td><td><strong>0</strong></td></tr>
                    <tr><td>3</td><td>(¬A ∧ B) → C</td><td>0 → 0 = 1</td><td><strong style="color: #34c759;">1 ✓</strong></td></tr>
                </table>
            </div>
        `
    },
    "pravdivostni_tabulky": {
        "title": "Pravdivostní tabulky",
        "content": `
            <p>Pravdivostní hodnoty (1 = pravda, 0 = nepravda) pro základní spojky:</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 20px 0; justify-content: center;">
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; flex: 1; min-width: 140px;">
                    <h4 style="margin: 0 0 10px 0; text-align: center; color: #333;">Negace ¬A</h4>
                    <table style="width: 100%; font-size: 13px; text-align: center;">
                        <tr style="background: #e3f2fd; font-weight: 600;">
                            <td>A</td><td>¬A</td>
                        </tr>
                        <tr><td>1</td><td>0</td></tr>
                        <tr style="background: #fff;"><td>0</td><td>1</td></tr>
                    </table>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; flex: 1; min-width: 140px;">
                    <h4 style="margin: 0 0 10px 0; text-align: center; color: #333;">Konjunkce A∧B</h4>
                    <table style="width: 100%; font-size: 13px; text-align: center;">
                        <tr style="background: #e3f2fd; font-weight: 600;">
                            <td>A</td><td>B</td><td>A∧B</td>
                        </tr>
                        <tr><td>1</td><td>1</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr style="background: #fff;"><td>1</td><td>0</td><td>0</td></tr>
                        <tr><td>0</td><td>1</td><td>0</td></tr>
                        <tr style="background: #fff;"><td>0</td><td>0</td><td>0</td></tr>
                    </table>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; flex: 1; min-width: 140px;">
                    <h4 style="margin: 0 0 10px 0; text-align: center; color: #333;">Disjunkce A∨B</h4>
                    <table style="width: 100%; font-size: 13px; text-align: center;">
                        <tr style="background: #e3f2fd; font-weight: 600;">
                            <td>A</td><td>B</td><td>A∨B</td>
                        </tr>
                        <tr><td>1</td><td>1</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr style="background: #fff;"><td>1</td><td>0</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr><td>0</td><td>1</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr style="background: #fff;"><td>0</td><td>0</td><td style="background: #ff3b30; color: white; font-weight: 600;">0</td></tr>
                    </table>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; flex: 1; min-width: 140px;">
                    <h4 style="margin: 0 0 10px 0; text-align: center; color: #333;">Implikace A→B</h4>
                    <table style="width: 100%; font-size: 13px; text-align: center;">
                        <tr style="background: #e3f2fd; font-weight: 600;">
                            <td>A</td><td>B</td><td>A→B</td>
                        </tr>
                        <tr><td>1</td><td>1</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr style="background: #fff;"><td>1</td><td>0</td><td style="background: #ff3b30; color: white; font-weight: 600;">0</td></tr>
                        <tr><td>0</td><td>1</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                        <tr style="background: #fff;"><td>0</td><td>0</td><td style="background: #34c759; color: white; font-weight: 600;">1</td></tr>
                    </table>
                </div>
            </div>
            
            <p style="background: #ffebee; padding: 12px; border-radius: 8px; border-left: 4px solid #ff3b30; font-size: 14px;">
                <strong>⚠️ Pozor:</strong> Implikace je nepravdivá <strong>pouze v jednom případě</strong> – když z pravdy (1) vyplývá nepravda (0).
            </p>
        `
    },
    "de_morgan_zakony": {
        "title": "De Morganovy zákony",
        "content": `
            <p>Zákony pro negaci složených výroků – klíčové pro úpravu formulí:</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
                <div style="background: #e3f2fd; padding: 20px; border-radius: 12px; border-left: 4px solid #007aff;">
                    <h4 style="margin: 0 0 15px 0; color: #007aff;">1. Negace konjunkce</h4>
                    <div style="font-size: 24px; text-align: center; margin: 15px 0; font-family: monospace;">
                        ¬(A ∧ B) = ¬A ∨ ¬B
                    </div>
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        „Není pravda, že platí obojí" = „Buď neplatí první, nebo neplatí druhé"
                    </p>
                </div>
                
                <div style="background: #fff3e0; padding: 20px; border-radius: 12px; border-left: 4px solid #ff9500;">
                    <h4 style="margin: 0 0 15px 0; color: #ff9500;">2. Negace disjunkce</h4>
                    <div style="font-size: 24px; text-align: center; margin: 15px 0; font-family: monospace;">
                        ¬(A ∨ B) = ¬A ∧ ¬B
                    </div>
                    <p style="margin: 0; font-size: 14px; color: #666;">
                        „Není pravda, že platí alespoň jedno" = „Neplatí první a zároveň neplatí druhé"
                    </p>
                </div>
            </div>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">🔑 Pravidlo:</h4>
                <p style="margin: 0; font-size: 14px;">
                    Při negaci závorky se <strong>spojka otočí</strong> (∧↔∨) a <strong>všechny členy se znegují</strong>.
                </p>
            </div>
            
            <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0;">Příklad:</h4>
                <p style="margin: 0; font-size: 14px; font-family: monospace;">
                    ¬(prší ∧ mrzne) = neprší ∨ nemrzne
                </p>
            </div>
        `
    },
    "zakony_logiky": {
        "title": "Zákony výrokové logiky",
        "content": `
            <p>Důležité zákony pro zjednodušování a přepisování formulí:</p>
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin: 20px 0;">
                <div style="background: #e3f2fd; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 8px 0; color: #007aff;">⚖️ Zákon vyloučeného třetího</h4>
                    <code style="font-size: 18px; background: white; padding: 5px 10px; border-radius: 5px;">A ∨ ¬A = 1</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Vždy platí buď výrok, nebo jeho negace. Třetí možnost není.</p>
                </div>
                
                <div style="background: #ffebee; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 8px 0; color: #ff3b30;">🚫 Zákon sporu</h4>
                    <code style="font-size: 18px; background: white; padding: 5px 10px; border-radius: 5px;">A ∧ ¬A = 0</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Nemůže platit výrok a jeho negace zároveň.</p>
                </div>
                
                <div style="background: #e8f5e9; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 8px 0; color: #34c759;">🔄 Zákon dvojí negace</h4>
                    <code style="font-size: 18px; background: white; padding: 5px 10px; border-radius: 5px;">¬(¬A) = A</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Dvě negace se vyruší.</p>
                </div>
                
                <div style="background: #fff3e0; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 8px 0; color: #ff9500;">💫 Kontrapozice</h4>
                    <code style="font-size: 18px; background: white; padding: 5px 10px; border-radius: 5px;">(A → B) = (¬B → ¬A)</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Implikace je ekvivalentní své obrácené a znegované formě.</p>
                </div>
                
                <div style="background: #f3e5f5; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 8px 0; color: #9c27b0;">📐 Absorpce</h4>
                    <code style="font-size: 18px; background: white; padding: 5px 10px; border-radius: 5px;">A ∨ (A ∧ B) = A</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Pokud platí A, celá disjunkce platí bez ohledu na B.</p>
                </div>
            </div>
        `
    },
    "pravidla_usudku_prehled": {
        "title": "Pravidla úsudku",
        "content": `
            <p>Základní odvozovací pravidla pro logické důkazy:</p>
            
            <table class="wiki-table">
                <tr><th class="w-25">Pravidlo</th><th class="w-35">Zápis</th><th>Význam</th></tr>
                <tr>
                    <td style="background: #34c759; color: white; font-weight: 700;">Modus Ponens</td>
                    <td style="font-family: monospace; font-size: 13px; font-weight: 600;">A → B<br>A<br>─────<br>∴ B</td>
                    <td>Z pravidla a jeho předpokladu vyplývá následek.</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td style="background: #5856d6; color: white; font-weight: 700;">Modus Tollens</td>
                    <td style="font-family: monospace; font-size: 13px; font-weight: 600;">A → B<br>¬B<br>─────<br>∴ ¬A</td>
                    <td>Z pravidla a neplatnosti následku vyplývá neplatnost předpokladu.</td>
                </tr>
                <tr>
                    <td style="background: #ff9500; color: white; font-weight: 700;">Hypotetický sylogismus</td>
                    <td style="font-family: monospace; font-size: 13px; font-weight: 600;">A → B<br>B → C<br>─────<br>∴ A → C</td>
                    <td>Řetězení implikací – tranzitivita.</td>
                </tr>
                <tr style="background: #fafafa;">
                    <td style="background: #007aff; color: white; font-weight: 700;">Disjunktivní sylogismus</td>
                    <td style="font-family: monospace; font-size: 13px; font-weight: 600;">A ∨ B<br>¬A<br>─────<br>∴ B</td>
                    <td>Vyloučení jedné možnosti potvrzuje druhou.</td>
                </tr>
            </table>
        `
    },
    "pokrocile_koncepty": {
        "title": "Pokročilé koncepty",
        "content": `
            <p>Speciální symboly a pojmy pokročilé logiky:</p>
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin: 20px 0;">
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 10px 0;">⊻ Vylučující nebo (XOR)</h4>
                    <code style="font-size: 16px;">A ⊻ B = (A ∨ B) ∧ ¬(A ∧ B)</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Pravdivé když má A a B různé hodnoty.</p>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 10px 0;">⊨ Sémantické vyplývání</h4>
                    <code style="font-size: 16px;">A ⊨ B</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Z pravdivosti A nutně plyne pravdivost B.</p>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 10px 0;">⊥ Falsum (nepravda)</h4>
                    <code style="font-size: 16px;">A → ⊥ ≡ ¬A</code>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">Konstanta pro vždy nepravdivý výrok.</p>
                </div>
                
                <div style="background: #f5f5f7; padding: 15px; border-radius: 12px;">
                    <h4 style="margin: 0 0 10px 0;">⊤ Verum (pravda)</h4>
                    <code style="font-size: 16px;">Vždy pravdivá formule</code>
                </div>
            </div>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 12px; margin-top: 15px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">Typy formulí:</h4>
                <ul style="margin: 0; font-size: 14px;">
                    <li><strong>Tautologie:</strong> Vždy pravdivá (např. A ∨ ¬A)</li>
                    <li><strong>Kontradikce:</strong> Vždy nepravdivá (např. A ∧ ¬A)</li>
                    <li><strong>Kontingentní:</strong> Někdy pravda, někdy ne (např. A → B)</li>
                    <li><strong>Nesplnitelná množina:</strong> Nemohou být pravdivé najednou</li>
                </ul>
            </div>
        `
    }
};
