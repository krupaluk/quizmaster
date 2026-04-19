window.sum = window.sum || {};

window.sum.stredovek_a_renesance = {
    "chronologie_strom": {
        "title": "Souhrn: Středověk a Renesance",
        "content": `
<p>Vývoj <strong>středověké filozofie</strong> a <strong>renesance</strong> od <strong>2. století</strong> po <strong>17. století</strong> s hlavními představiteli a jejich přínosy.</p>

<style>
.timeline-tree { font-family: system-ui, -apple-system, sans-serif; margin: 20px 0; }
.main-branch { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; border-radius: 10px; text-align: center; font-weight: bold; font-size: 18px; margin-bottom: 30px; }
.period-section { margin: 20px 0; border-left: 4px solid; padding-left: 20px; }
.period-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
.period-title { font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 20px; color: white; }
.period-years { font-size: 13px; color: #666; font-style: italic; }
.philosopher-card { background: #f8f9fa; border-radius: 8px; padding: 12px 15px; margin: 8px 0; border-left: 3px solid; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.philosopher-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.philosopher-name { font-weight: bold; font-size: 14px; color: #333; }
.philosopher-years { font-size: 12px; color: #888; }
.philosopher-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.tag { font-size: 11px; padding: 3px 8px; border-radius: 12px; background: #e9ecef; color: #495057; }
.tag-highlight { background: #ffd43b; color: #5c4800; }

/* Barvy období */
.patristika { border-color: #e8590c; }
.patristika .period-title { background: #e8590c; }
.patristika .philosopher-card { border-left-color: #e8590c; }

.rana-schol { border-color: #40c057; }
.rana-schol .period-title { background: #40c057; }
.rana-schol .philosopher-card { border-left-color: #40c057; }

.vrcholna-schol { border-color: #339af0; }
.vrcholna-schol .period-title { background: #339af0; }
.vrcholna-schol .philosopher-card { border-left-color: #339af0; }

.pozdni-schol { border-color: #be4bdb; }
.pozdni-schol .period-title { background: #be4bdb; }
.pozdni-schol .philosopher-card { border-left-color: #be4bdb; }

.renesance { border-color: #f76707; }
.renesance .period-title { background: #f76707; }
.renesance .philosopher-card { border-left-color: #f76707; }

.sub-branch { margin-left: 30px; border-left: 2px dashed #adb5bd; padding-left: 15px; margin-top: 10px; }
.sub-title { font-size: 13px; font-weight: 600; color: #495057; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
</style>

<div class="timeline-tree">
  <div class="main-branch">🌳 FILOZOFIE: PATRISTIKA → SCHOLASTIKA → RENESANCE</div>

  <!-- PATRISTIKA -->
  <div class="period-section patristika">
    <div class="period-header">
      <span class="period-title">📖 PATRISTIKA</span>
      <span class="period-years">2.–6. století (185–524)</span>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Origenes</span>
        <span class="philosopher-years">185–253</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">alexandrijský učenec</span>
        <span class="tag">novoplatonik</span>
        <span class="tag tag-highlight">apokatastasis</span>
        <span class="tag">subordinacianismus</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Tertullian</span>
        <span class="philosopher-years">160–220</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">řečník</span>
        <span class="tag">právník</span>
        <span class="tag tag-highlight">„Věřím, protože je to absurdní"</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Ambrož z Milána</span>
        <span class="philosopher-years">340–397</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">biskup</span>
        <span class="tag">kazatel</span>
        <span class="tag tag-highlight">církev nad státem</span>
        <span class="tag">pokřtil Augustina</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Jeroným</span>
        <span class="philosopher-years">347–420</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">překladatel</span>
        <span class="tag">mnich</span>
        <span class="tag tag-highlight">Vulgata</span>
        <span class="tag">biblický filolog</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Augustinus</span>
        <span class="philosopher-years">354–430</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">biskup hippo</span>
        <span class="tag">novoplatonik</span>
        <span class="tag tag-highlight">„Věřím, abych rozuměl"</span>
        <span class="tag">teodicea</span>
        <span class="tag">Obec Boží</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Boëthius</span>
        <span class="philosopher-years">480–524</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">poslední Říman</span>
        <span class="tag">logik</span>
        <span class="tag tag-highlight">Útěcha z filozofie</span>
        <span class="tag">Kolo Štěstěny</span>
      </div>
    </div>
  </div>

  <!-- RANÁ SCHOLASTIKA -->
  <div class="period-section rana-schol">
    <div class="period-header">
      <span class="period-title">🌱 RANÁ SCHOLASTIKA</span>
      <span class="period-years">9.–12. století (800–1150)</span>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Jan Scotus Eriugena</span>
        <span class="philosopher-years">800–877</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">irský učenec</span>
        <span class="tag">panteista</span>
        <span class="tag tag-highlight">„O rozdělení přírody"</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Anselm z Canterbury</span>
        <span class="philosopher-years">1033–1109</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">mnich</span>
        <span class="tag">ontolog</span>
        <span class="tag tag-highlight">ontologický důkaz Boha</span>
        <span class="tag">realismus</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Jan Roscellinus</span>
        <span class="philosopher-years">1050–1125</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">kompozicionista</span>
        <span class="tag">radikál</span>
        <span class="tag tag-highlight">„flatus vocis"</span>
        <span class="tag">triteismus</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Petr Abélard</span>
        <span class="philosopher-years">1079–1142</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">dialektik</span>
        <span class="tag">kritik autorit</span>
        <span class="tag tag-highlight">„Sic et non"</span>
        <span class="tag">konceptualismus</span>
      </div>
    </div>
  </div>

  <!-- VRCHOLNÁ SCHOLASTIKA -->
  <div class="period-section vrcholna-schol">
    <div class="period-header">
      <span class="period-title">🌲 VRCHOLNÁ SCHOLASTIKA</span>
      <span class="period-years">13. století (1200–1280)</span>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Albert Veliký</span>
        <span class="philosopher-years">1200–1280</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">dominikán</span>
        <span class="tag">přírodovědec</span>
        <span class="tag tag-highlight">Doctor Universalis</span>
        <span class="tag">aristotelik</span>
        <span class="tag">experiment</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Tomáš Akvinský</span>
        <span class="philosopher-years">1225–1274</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">dominikán</span>
        <span class="tag">systematik</span>
        <span class="tag tag-highlight">Summa theologiae</span>
        <span class="tag">5 cest k Bohu</span>
        <span class="tag">tomismus</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Svatý Bonaventura</span>
        <span class="philosopher-years">1217–1274</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">františkán</span>
        <span class="tag">mystik</span>
        <span class="tag tag-highlight">teorie osvícení</span>
        <span class="tag">platonik</span>
      </div>
    </div>
  </div>

  <!-- POZDNÍ SCHOLASTIKA -->
  <div class="period-section pozdni-schol">
    <div class="period-header">
      <span class="period-title">🍂 POZDNÍ SCHOLASTIKA</span>
      <span class="period-years">14.–15. století (1260–1350)</span>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Mistr Eckhart</span>
        <span class="philosopher-years">1260–1328</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">dominikán</span>
        <span class="tag">mystik</span>
        <span class="tag tag-highlight">„jiskra duše"</span>
        <span class="tag">vnitřní Bůh</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">Jan Duns Scotus</span>
        <span class="philosopher-years">1266–1308</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">františkán</span>
        <span class="tag">skotský mnich</span>
        <span class="tag tag-highlight">voluntarismus</span>
        <span class="tag">haecceitas</span>
      </div>
    </div>
    <div class="philosopher-card">
      <div class="philosopher-header">
        <span class="philosopher-name">William Occam</span>
        <span class="philosopher-years">1287–1347</span>
      </div>
      <div class="philosopher-tags">
        <span class="tag">františkán</span>
        <span class="tag">logik</span>
        <span class="tag tag-highlight">Occamova břitva</span>
        <span class="tag">nominalismus</span>
        <span class="tag">fideismus</span>
      </div>
    </div>
  </div>

  <!-- RENESANCE -->
  <div class="period-section renesance">
    <div class="period-header">
      <span class="period-title">🌅 RENESANCE</span>
      <span class="period-years">15.–17. století (1401–1642)</span>
    </div>
    
    <div class="sub-branch">
      <div class="sub-title">🎨 Humanismus & Filozofie</div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Mikuláš Kusánský</span>
          <span class="philosopher-years">1401–1464</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">kardinál</span>
          <span class="tag">matematik</span>
          <span class="tag tag-highlight">docta ignorantia</span>
          <span class="tag">nekonečno</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Marsilio Ficino</span>
          <span class="philosopher-years">1433–1499</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">platónská akademie</span>
          <span class="tag">překladatel</span>
          <span class="tag tag-highlight">amor platonicus</span>
          <span class="tag">synkretismus</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Giovanni Pico della Mirandola</span>
          <span class="philosopher-years">1463–1494</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">humanista</span>
          <span class="tag">synkretik</span>
          <span class="tag tag-highlight">„O důstojnosti člověka"</span>
          <span class="tag">900 tezí</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Erasmus Rotterdamský</span>
          <span class="philosopher-years">1466–1536</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">kníže humanistů</span>
          <span class="tag">satirik</span>
          <span class="tag tag-highlight">„Chvála bláznivosti"</span>
          <span class="tag">kritik scholastiky</span>
        </div>
      </div>
    </div>

    <div class="sub-branch">
      <div class="sub-title">⚔️ Politická filozofie</div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Niccolò Machiavelli</span>
          <span class="philosopher-years">1469–1527</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">diplomat</span>
          <span class="tag">realista</span>
          <span class="tag tag-highlight">„Vladař"</span>
          <span class="tag">virtù vs fortuna</span>
        </div>
      </div>
    </div>

    <div class="sub-branch">
      <div class="sub-title">🔬 Vědecká revoluce</div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Mikuláš Koperník</span>
          <span class="philosopher-years">1473–1543</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">astronom</span>
          <span class="tag">kanovník</span>
          <span class="tag tag-highlight">heliocentrismus</span>
          <span class="tag">koperníkovský obrat</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Pietro Pomponazzi</span>
          <span class="philosopher-years">1462–1525</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">aristotelik</span>
          <span class="tag">přírodní filosof</span>
          <span class="tag tag-highlight">smrtelnost duše</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Giordano Bruno</span>
          <span class="philosopher-years">1548–1600</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">dominikán</span>
          <span class="tag">panteista</span>
          <span class="tag tag-highlight">nekonečný vesmír</span>
          <span class="tag">mnoho světů</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Galileo Galilei</span>
          <span class="philosopher-years">1564–1642</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">fyzik</span>
          <span class="tag">astronom</span>
          <span class="tag tag-highlight">experiment + matematika</span>
          <span class="tag">„A přece se točí!"</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Johannes Kepler</span>
          <span class="philosopher-years">1571–1630</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">astronom</span>
          <span class="tag">matematik</span>
          <span class="tag tag-highlight">eliptické dráhy</span>
          <span class="tag">3 zákony pohybu</span>
        </div>
      </div>
      <div class="philosopher-card">
        <div class="philosopher-header">
          <span class="philosopher-name">Francis Bacon</span>
          <span class="philosopher-years">1561–1626</span>
        </div>
        <div class="philosopher-tags">
          <span class="tag">státník</span>
          <span class="tag">filosof</span>
          <span class="tag tag-highlight">Nový Organon</span>
          <span class="tag">indukce</span>
          <span class="tag">„Vědění je moc"</span>
        </div>
      </div>
    </div>
  </div>
</div>

<p style="font-size: 14px; color: #555; margin-top: 20px;"><strong>💡 Legenda:</strong> <span style="background: #ffd43b; padding: 2px 8px; border-radius: 10px;">zlaté tagy</span> = klíčový přínos/koncept | Barvy období: 🟠 patristika | 🟢 raná scholastika | 🔵 vrcholná scholastika | 🟣 pozdní scholastika | 🟠 renesance</p>
        `
    }
};
