window.wiki_logika_teorie = {
    "predikat_vs_vyrokova": {
        "title": "Predikátová vs Výroková logika",
        "content": `
<p><strong>Dva světy logiky:</strong> Od samého počátku se logika vyvíjela ve dvou paralelních směrech - predikátové a výrokové. Každá se zaměřuje na jiný aspekt lidského uvažování a po staletí zůstávaly oddělené, až do revolučního spojení v 19. století.</p>

<p style="font-size: 14px; margin: 12px 0;"><strong>Predikátová logika - logika věcí a vlastností:</strong></p>
<p>Predikátová logika studuje, z čeho se věci skládají a jaké vlastnosti mají. Zaměřuje se na <strong>vnitřní strukturu</strong> výroků: podměty, přísudky a vztahy mezi třídami. Řeší otázky typu „Všichni lidé jsou smrtelní" - co znamená být člověkem, co je smrtelnost, a jak tyto vlastnosti propojit.</p>

<p style="font-size: 14px; margin: 12px 0;"><strong>Aristotelés - zakladatel predikátové logiky:</strong></p>
<p>Už <strong>Aristotelés</strong> se svými syllogismy vlastně začal s predikátovou logikou. Jeho „Všichni A jsou B, všichni B jsou C, tedy všichni A jsou C" je predikátová analýza vztahů mezi třídami. Aristotelés zkoumal, jak se věci skládají z podstaty a případnosti - to je jádro predikátového myšlení.</p>

<p style="font-size: 14px; margin: 12px 0;"><strong>Výroková logika - logika řetězců a následků:</strong></p>
<p>Výroková logika se nezabývá tím, čím věci jsou, ale jak spolu <strong>výroky souvisejí</strong>. Studuje řetězce událostí, možné příčiny a následky. Zkoumá: „Pokud prší, pak je mokro" - nezáleží na tom, co je déšť nebo mokro, ale na vztahu mezi tvrzeními.</p>

<p style="font-size: 14px; margin: 12px 0;"><strong>Chrysippos - základy výrokové logiky:</strong></p>
<p>Starověký stoik <strong>Chrysippos</strong> položil základy výrokové logiky svými kondicionály: „Jestliže první, pak druhé". Boole pak tuto logiku rozvedl matematicky - ukázal, že vztahy mezi výroky lze počítat jako algebraické operace (AND, OR, NOT).</p>

<table class="wiki-table">
<tr><th>Aspekt</th><th>Predikátová logika</th><th>Výroková logika</th></tr>
<tr><td><strong>Co studuje</strong></td><td>Vnitřní strukturu výroků (podměty, přísudky)</td><td>Vztahy mezi výroky jako celky</td></tr>
<tr><td><strong>Základ</strong></td><td>Aristotelés - syllogismy o třídách</td><td>Chrysippos - kondicionály o výrocích</td></tr>
<tr><td><strong>Příklad</strong></td><td>„Všichni psi jsou černí" - analýza pojmů „pes" a „černý"</td><td>„Prší a fouká vítr" - analýza spojky „a"</td></tr>
<tr><td><strong>Mathematizace</strong></td><td>Frege - kvantifikátory ∀, ∃</td><td>Boole - algebraické operace +, ·, 1-x</td></tr>
<tr><td><strong>Fokus</strong></td><td>Co jsou věci za vlastnosti</td><td>Jak výroky navazují jeden na druhý</td></tr>
</table>

<p style="font-size: 14px; margin: 12px 0;"><strong>Frege - revoluční spojení obou světů:</strong></p>
<p><strong>Gottlob Frege</strong> byl průlomový tím, že <strong>propojil predikátovou i výrokovou logiku</strong>. Navázal na Booleho výrokovou algebru, ale rozšířil ji o predikátovou analýzu vnitřní struktury výroků pomocí kvantifikátorů (∀, ∃). Díky Fregemu mohly oba světy existovat společně v jednom formálním systému - moderní predikátová logika obsahuje jak výrokové spojky (AND, OR, NOT), tak predikátovou analýzu (kvantifikátory, proměnné, predikáty).</p>

<p style="font-size: 13px; color: #555;"><strong>Dopad:</strong> Dnešní logika, programování i umělá inteligence používají oba přístupy současně. Databázové dotazy (SQL) kombinují predikátovou selekci (vlastnosti záznamů) s výrokovými podmínkami (AND/OR). Bez Fregého spojení by moderní informatika neexistovala.</p>
        `
    },
    "uvod_do_logiky": {
        "title": "Co je logika?",
        "content": `
            <p><strong>Logika</strong> je věda o správném usuzování a formálních pravidlech myšlení. Zabývá se strukturou argumentace, nikoliv obsahem.</p>
            
            <p><strong>Klíčový princip:</strong> Logika nezjišťuje, zda jsou premisy pravdivé ve smyslu shody s realitou, ale zda z nich vyplývá závěr.</p>
            
            <p><strong>Příklad struktury:</strong><br>
            Premisa 1: Všichni trpaslíci jsou modří.<br>
            Premisa 2: Karel je trpaslík.<br>
            Závěr: Tedy Karel je modrý.</p>
            
            <p>Úsudek je <span style="color: #34c759;">logicky správný</span> i když jsou trpaslíci smyšlení a Karel neexistuje. Správnost závisí na vztahu mezi premisami a závěrem, nikoliv na pravdivosti obsahu.</p>
            
            <p><strong>Proč se logika učí?</strong></p>
            <ul>
                <li>Rozpoznává argumentační klamy a manipulace</li>
                <li>Zajišťuje konzistentnost myšlení</li>
                <li>Umožňuje kontrolovat platnost důkazů</li>
                <li>Je základem matematiky, informatiky a práva</li>
            </ul>
        `
    },
    "stavba_mysleni": {
        "title": "Souvislosti: pojem, soud a úsudek",
        "content": `
            <p>Myšlení stavíme hierarchicky jako stavbu z LEGO kostek:</p>
            
            <div style="background: #f5f5f7; padding: 15px; border-radius: 12px; margin: 15px 0;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <div style="font-size: 32px;">🧱</div>
                    <div>
                        <strong>1. POJEM</strong> = základní kostka<br>
                        <span style="font-size: 13px; color: #666;">Zachycuje význam věci (strom, člověk, spravedlnost)</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px; margin-left: 20px;">
                    <div style="font-size: 32px;">🔗</div>
                    <div>
                        <strong>2. SOUD</strong> = spojení dvou kostek<br>
                        <span style="font-size: 13px; color: #666;">Tvrzení o vztahu (Sókratés je člověk)</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 15px; margin-left: 40px;">
                    <div style="font-size: 32px;">🏗️</div>
                    <div>
                        <strong>3. ÚSUDEK</strong> = celá stavba<br>
                        <span style="font-size: 13px; color: #666;">Řetězec tvrzení vedoucí k závěru</span>
                    </div>
                </div>
            </div>
            
            <p><strong>Závislost:</strong></p>
            <ul>
                <li>Bez pojmů nemůžeme tvořit soudy</li>
                <li>Bez soudů nemůžeme usuzovat</li>
                <li>Bez úsudků nemůžeme dokazovat</li>
            </ul>
            
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; border-left: 4px solid #34c759;">
                <strong>Tip:</strong> Chyba v pojmu se projeví ve všech vyšších úrovních. Proto je důležité definovat pojmy správně hned na začátku.
            </p>
        `
    },
    "definice_jako_most": {
        "title": "Definice: proč je potřebujeme",
        "content": `
            <p><strong>Definice je most</strong> mezi pojmy - umožňuje přesnou komunikaci a přesun významu z jednoho pojmu na druhý.</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
                <div style="background: #ffebee; padding: 15px; border-radius: 12px; border-left: 4px solid #ff3b30;">
                    <div style="font-size: 20px; margin-bottom: 8px; color: #ff3b30; font-weight: 600;">❌ Příliš úzká definice</div>
                    <p style="font-size: 14px; margin: 0 0 8px 0;">"Člověk je tvor co chodí po dvou nohách"</p>
                    <ul style="font-size: 13px; margin: 0; color: #666;">
                        <li>Vylučuje lidi bez nohy</li>
                        <li>Zahrnuje klokany</li>
                    </ul>
                </div>
                <div style="background: #e3f2fd; padding: 15px; border-radius: 12px; border-left: 4px solid #007aff;">
                    <div style="font-size: 20px; margin-bottom: 8px; color: #007aff; font-weight: 600;">✅ Správná definice</div>
                    <p style="font-size: 14px; margin: 0 0 8px 0;">"Člověk je rozumný tvor"</p>
                    <ul style="font-size: 13px; margin: 0; color: #666;">
                        <li>Zahrnuje všechny lidi</li>
                        <li>Vylučuje ostatní živočichy</li>
                    </ul>
                </div>
                <div style="background: #fff3e0; padding: 15px; border-radius: 12px; border-left: 4px solid #ff9500;">
                    <div style="font-size: 20px; margin-bottom: 8px; color: #ff9500; font-weight: 600;">❌ Příliš široká definice</div>
                    <p style="font-size: 14px; margin: 0 0 8px 0;">"Člověk je savec"</p>
                    <ul style="font-size: 13px; margin: 0; color: #666;">
                        <li>Zahrnuje myši, slony</li>
                        <li>Netuší podstatu člověka</li>
                    </ul>
                </div>
            </div>
            
            <p><strong>Pravidlo souměrnosti:</strong></p>
            <p>Rozsah definovaného pojmu musí být <span style="color: #007aff; font-weight: 600;">totožný</span> s rozsahem vysvětlujícího výrazu.</p>
            
            <p style="background: #fff9e6; padding: 10px; border-radius: 8px; border-left: 4px solid #f5a623;">
                <strong>Pravidlo:</strong> Dobrá definice je jako správně nastavené síto - pustí skrz vše co má, a zachytí vše co nemá.
            </p>
        `
    },
    "logicky_ctverec": {
        "title": "Logický čtverec A-E-I-O",
        "content": `
            <p>Logický čtverec (A-E-I-O) ukazuje vztahy mezi obecnými a částečnými tvrzeními:</p>
            
            <div style="background: #f5f5f7; padding: 20px; border-radius: 12px; margin: 15px 0; text-align: center;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 400px; margin: 0 auto;">
                    <div style="background: #34c759; color: white; padding: 20px; border-radius: 8px;">
                        <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">A</div>
                        <div style="font-size: 14px; font-weight: 600;">Všichni lidé jsou smrtelní</div>
                    </div>
                    <div style="background: #ff3b30; color: white; padding: 20px; border-radius: 8px;">
                        <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">E</div>
                        <div style="font-size: 14px; font-weight: 600;">Žádný člověk není smrtelný</div>
                    </div>
                    <div style="background: #5856d6; color: white; padding: 20px; border-radius: 8px;">
                        <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">I</div>
                        <div style="font-size: 14px; font-weight: 600;">Někteří lidé jsou smrtelní</div>
                    </div>
                    <div style="background: #ff9500; color: white; padding: 20px; border-radius: 8px;">
                        <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">O</div>
                        <div style="font-size: 14px; font-weight: 600;">Někteří lidé nejsou smrtelní</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Vztahy mezi typy:</strong></p>
            <ul>
                <li><strong>Kontradikce</strong> (diagonála A-O, E-I): Jeden musí být pravda, druhý lež</li>
                <li><strong>Kontrárnost</strong> (horní strana A-E): Nemohou být oba pravdivé, ale mohou být oba nepravdivé</li>
                <li><strong>Subkontrárnost</strong> (spodní strana I-O): Nemohou být oba nepravdivé, ale mohou být oba pravdivé</li>
            </ul>
            
            <p style="background: #e3f2fd; padding: 10px; border-radius: 8px; border-left: 4px solid #007aff;">
                <strong>Příklad kontrárnosti:</strong> "Všichni jsou zde" a "Nikdo není zde" - pokud je zde polovina lidí, jsou oba výroky nepravdivé!
            </p>
        `
    },
    "dedukce_vs_indukce": {
        "title": "Dedukce vs. indukce",
        "content": `
            <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
                <div style="background: #e8f5e9; padding: 20px; border-radius: 12px; border-left: 4px solid #34c759;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                        <div style="font-size: 32px;">📋</div>
                        <h3 style="margin: 0; color: #34c759;">DEDUKCE = Recept</h3>
                    </div>
                    <p style="font-size: 14px; margin: 0 0 10px 0;">Máš suroviny (premisy), postupuješ přesně podle receptu (logika), výsledek je <strong>zaručen</strong>.</p>
                    <div style="background: white; padding: 10px; border-radius: 8px; font-size: 13px;">
                        <strong>Příklad:</strong><br>
                        Všichni psi jsou savci.<br>
                        Max je pes.<br>
                        → Max je savec. ✓
                    </div>
                    <p style="font-size: 12px; color: #666; margin: 10px 0 0 0;">Od obecného k jednotlivému</p>
                </div>
                <div style="background: #fff3e0; padding: 20px; border-radius: 12px; border-left: 4px solid #ff9500;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                        <div style="font-size: 32px;">🥄</div>
                        <h3 style="margin: 0; color: #ff9500;">INDUKCE = Ochutnávání</h3>
                    </div>
                    <p style="font-size: 14px; margin: 0 0 10px 0;">Ochutnáš několik lžiček (pozorování), usoudíš na celou polévku (obecný závěr). Můžeš se <strong>splést</strong>.</p>
                    <div style="background: white; padding: 10px; border-radius: 8px; font-size: 13px;">
                        <strong>Příklad:</strong><br>
                        Zatím všechny labutě byly bílé.<br>
                        → Všechny labutě jsou bílé.<br>
                        (Ale pak našli černou labuť v Austrálii!) ⚠️
                    </div>
                    <p style="font-size: 12px; color: #666; margin: 10px 0 0 0;">Od jednotlivého k obecnému</p>
                </div>
            </div>
            
            <p style="background: #f5f5f7; padding: 15px; border-radius: 8px;">
                <strong>Kdy použít co:</strong><br>
                • Dedukce: matematika, právo, programování (potřebujeme jistotu)<br>
                • Indukce: věda, statistika, každodenní rozhodování (objevujeme nové)
            </p>
        `
    },
    "manipulace_v_diskuzi": {
        "title": "Manipulace v diskuzi",
        "content": `
            <p><strong>3 varovné signály manipulace:</strong></p>
            
            <div style="margin: 20px 0;">
                <div style="background: #ffebee; padding: 15px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid #ff3b30;">
                    <h4 style="margin: 0 0 8px 0; color: #ff3b30;">1️⃣ Ad hominem - Útok na osobu</h4>
                    <p style="margin: 0; font-size: 14px;">"Jsi hloupý, proto nemáš pravdu"<br>
                    <span style="color: #666; font-size: 12px;">Místo vyvrácení argumentu se útočí na charakter mluvčího.</span></p>
                </div>
                
                <div style="background: #fff3e0; padding: 15px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid #ff9500;">
                    <h4 style="margin: 0 0 8px 0; color: #ff9500;">2️⃣ Falešné dilema - Černobílé vidění</h4>
                    <p style="margin: 0; font-size: 14px;">"Buď jsi s námi, nebo proti nám"<br>
                    <span style="color: #666; font-size: 12px;">Ignoruje šedou zónu a třetí možnosti mezi extrémy.</span></p>
                </div>
                
                <div style="background: #e3f2fd; padding: 15px; border-radius: 12px; border-left: 4px solid #007aff;">
                    <h4 style="margin: 0 0 8px 0; color: #007aff;">3️⃣ Odvolání na emoce místo faktů</h4>
                    <p style="margin: 0; font-size: 14px;">"Všichni to tak dělají" / "Vždycky se to tak dělalo"<br>
                    <span style="color: #666; font-size: 12px;">Apel na tradici nebo většinu místo věcných důkazů.</span></p>
                </div>
            </div>
            
            <div style="background: #e8f5e9; padding: 20px; border-radius: 12px;">
                <h4 style="margin: 0 0 10px 0; color: #34c759;">🛡️ Zlaté pravidlo kritického myšlení</h4>
                <p style="margin: 0;">Vždy se ptej:</p>
                <ul style="margin: 10px 0;">
                    <li><strong>Jaké jsou důkazy?</strong> (ne emoce, ale fakta)</li>
                    <li><strong>Cui bono?</strong> - Komu to prospívá? (odhalení skrytých zájmů)</li>
                </ul>
                <p style="margin: 10px 0 0 0; font-size: 13px; color: #666;">
                    Manipulátor se vždy snaží odvést pozornost od podstaty argumentu. Drž se faktů a logické struktury.
                </p>
            </div>
        `
    }
};
