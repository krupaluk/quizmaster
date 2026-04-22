window.sum = window.sum || {};

window.sum.stredovek_a_renesance = {
    "chronologie_strom": {
        "title": "Souhrn: Středověk a Renesance",
        "content": `
<p>Vývoj <strong>středověké filozofie</strong> a <strong>renesance</strong> od <strong>2. století</strong> po <strong>17. století</strong> s hlavními představiteli a jejich přínosy.</p>

<style>
.timeline-tree { font-family: system-ui, -apple-system, sans-serif; margin: 20px 0; }
.summary-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; border-radius: 10px; text-align: center; font-weight: bold; font-size: 18px; margin-bottom: 30px; }
.period-section { margin: 20px 0; border-left: 4px solid; padding-left: 20px; }
.period-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
.period-title { font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 20px; color: white; }
.period-years { font-size: 13px; color: #666; font-style: italic; }
.entity-card { background: #f8f9fa; border-radius: 8px; padding: 12px 15px; margin: 8px 0; border-left: 3px solid; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.entity-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.entity-name { font-weight: bold; font-size: 14px; color: #333; }
.entity-years { font-size: 12px; color: #888; }
.entity-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.tag { font-size: 11px; padding: 3px 8px; border-radius: 12px; background: #e9ecef; color: #495057; }
.tag-group { background: #dbeafe; color: #1e40af; margin-top: -10px; margin-bottom: 8px; border: 1px solid #60a5fa; border-radius: 4px; font-size: 12px; padding: 3px 8px; display: inline-block; }
.tag-highlight { background: #ffd43b; color: #5c4800; }
.sub-section { margin-left: 30px; border-left: 2px dashed #adb5bd; padding-left: 15px; margin-top: 10px; }
.sub-section-title { font-size: 13px; font-weight: 600; color: #495057; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
.sub-section-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }

/* Period colors */
.patristika { border-color: #e8590c; }
.patristika .period-title { background: #e8590c; }
.patristika .entity-card { border-left-color: #e8590c; }
.rana-schol { border-color: #40c057; }
.rana-schol .period-title { background: #40c057; }
.rana-schol .entity-card { border-left-color: #40c057; }
.vrcholna-schol { border-color: #339af0; }
.vrcholna-schol .period-title { background: #339af0; }
.vrcholna-schol .entity-card { border-left-color: #339af0; }
.pozdni-schol { border-color: #be4bdb; }
.pozdni-schol .period-title { background: #be4bdb; }
.pozdni-schol .entity-card { border-left-color: #be4bdb; }
.renesance { border-color: #f76707; }
.renesance .period-title { background: #f76707; }
.renesance .entity-card { border-left-color: #f76707; }
</style>

<div class="timeline-tree">
  <div class="summary-header">🌳 FILOZOFIE: PATRISTIKA → SCHOLASTIKA → RENESANCE</div>

  <!-- PATRISTIKA -->
  <div class="period-section patristika">
    <div class="period-header">
      <span class="period-title">📖 PATRISTIKA</span>
      <span class="period-years">2.–6. století (185–524)</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Origenes</span>
        <span class="entity-years">185–253</span>
      </div>
      <div class="entity-tags">
        <span class="tag">alexandrijský učenec</span>
        <span class="tag">novoplatonik</span>
        <span class="tag tag-highlight">apokatastasis</span>
        <span class="tag">subordinacianismus</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Tertullian</span>
        <span class="entity-years">160–220</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řečník</span>
        <span class="tag">právník</span>
        <span class="tag tag-highlight">„Věřím, protože je to absurdní"</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Ambrož z Milána</span>
        <span class="entity-years">340–397</span>
      </div>
      <div class="entity-tags">
        <span class="tag">biskup</span>
        <span class="tag">kazatel</span>
        <span class="tag tag-highlight">církev nad státem</span>
        <span class="tag">pokřtil Augustina</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Jeroným</span>
        <span class="entity-years">347–420</span>
      </div>
      <div class="entity-tags">
        <span class="tag">překladatel</span>
        <span class="tag">mnich</span>
        <span class="tag tag-highlight">Vulgata</span>
        <span class="tag">biblický filolog</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Augustinus</span>
        <span class="entity-years">354–430</span>
      </div>
      <div class="entity-tags">
        <span class="tag">biskup hippo</span>
        <span class="tag">novoplatonik</span>
        <span class="tag tag-highlight">„Věřím, abych rozuměl"</span>
        <span class="tag">teodicea</span>
        <span class="tag">Obec Boží</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Boëthius</span>
        <span class="entity-years">480–524</span>
      </div>
      <div class="entity-tags">
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
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Jan Scotus Eriugena</span>
        <span class="entity-years">800–877</span>
      </div>
      <div class="entity-tags">
        <span class="tag">irský učenec</span>
        <span class="tag">panteista</span>
        <span class="tag tag-highlight">„O rozdělení přírody"</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Anselm z Canterbury</span>
        <span class="entity-years">1033–1109</span>
      </div>
      <div class="entity-tags">
        <span class="tag">mnich</span>
        <span class="tag">ontolog</span>
        <span class="tag tag-highlight">ontologický důkaz Boha</span>
        <span class="tag">realismus</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Jan Roscellinus</span>
        <span class="entity-years">1050–1125</span>
      </div>
      <div class="entity-tags">
        <span class="tag">kompozicionista</span>
        <span class="tag">radikál</span>
        <span class="tag tag-highlight">„flatus vocis"</span>
        <span class="tag">triteismus</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Petr Abélard</span>
        <span class="entity-years">1079–1142</span>
      </div>
      <div class="entity-tags">
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
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Albert Veliký</span>
        <span class="entity-years">1200–1280</span>
      </div>
      <div class="entity-tags">
        <span class="tag">dominikán</span>
        <span class="tag">přírodovědec</span>
        <span class="tag tag-highlight">Doctor Universalis</span>
        <span class="tag">aristotelik</span>
        <span class="tag">experiment</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Tomáš Akvinský</span>
        <span class="entity-years">1225–1274</span>
      </div>
      <div class="entity-tags">
        <span class="tag">dominikán</span>
        <span class="tag">systematik</span>
        <span class="tag tag-highlight">Summa theologiae</span>
        <span class="tag">5 cest k Bohu</span>
        <span class="tag">tomismus</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Svatý Bonaventura</span>
        <span class="entity-years">1217–1274</span>
      </div>
      <div class="entity-tags">
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
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Mistr Eckhart</span>
        <span class="entity-years">1260–1328</span>
      </div>
      <div class="entity-tags">
        <span class="tag">dominikán</span>
        <span class="tag">mystik</span>
        <span class="tag tag-highlight">„jiskra duše"</span>
        <span class="tag">vnitřní Bůh</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Jan Duns Scotus</span>
        <span class="entity-years">1266–1308</span>
      </div>
      <div class="entity-tags">
        <span class="tag">františkán</span>
        <span class="tag">skotský mnich</span>
        <span class="tag tag-highlight">voluntarismus</span>
        <span class="tag">haecceitas</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">William Occam</span>
        <span class="entity-years">1287–1347</span>
      </div>
      <div class="entity-tags">
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
    
    <div class="sub-section">
      <div class="sub-section-title">🎨 Humanismus & Filozofie</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Mikuláš Kusánský</span>
          <span class="entity-years">1401–1464</span>
        </div>
        <div class="entity-tags">
          <span class="tag">kardinál</span>
          <span class="tag">matematik</span>
          <span class="tag tag-highlight">docta ignorantia</span>
          <span class="tag">nekonečno</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Marsilio Ficino</span>
          <span class="entity-years">1433–1499</span>
        </div>
        <div class="entity-tags">
          <span class="tag">platónská akademie</span>
          <span class="tag">překladatel</span>
          <span class="tag tag-highlight">amor platonicus</span>
          <span class="tag">synkretismus</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Giovanni Pico della Mirandola</span>
          <span class="entity-years">1463–1494</span>
        </div>
        <div class="entity-tags">
          <span class="tag">humanista</span>
          <span class="tag">synkretik</span>
          <span class="tag tag-highlight">„O důstojnosti člověka"</span>
          <span class="tag">900 tezí</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Erasmus Rotterdamský</span>
          <span class="entity-years">1466–1536</span>
        </div>
        <div class="entity-tags">
          <span class="tag">kníže humanistů</span>
          <span class="tag">satirik</span>
          <span class="tag tag-highlight">„Chvála bláznivosti"</span>
          <span class="tag">kritik scholastiky</span>
        </div>
      </div>
    </div>

    <div class="sub-section">
      <div class="sub-section-title">⚔️ Politická filozofie</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Niccolò Machiavelli</span>
          <span class="entity-years">1469–1527</span>
        </div>
        <div class="entity-tags">
          <span class="tag">diplomat</span>
          <span class="tag">realista</span>
          <span class="tag tag-highlight">„Vladař"</span>
          <span class="tag">virtù vs fortuna</span>
        </div>
      </div>
    </div>

    <div class="sub-section">
      <div class="sub-section-title">🔬 Vědecká revoluce</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Mikuláš Koperník</span>
          <span class="entity-years">1473–1543</span>
        </div>
        <div class="entity-tags">
          <span class="tag">astronom</span>
          <span class="tag">kanovník</span>
          <span class="tag tag-highlight">heliocentrismus</span>
          <span class="tag">koperníkovský obrat</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Pietro Pomponazzi</span>
          <span class="entity-years">1462–1525</span>
        </div>
        <div class="entity-tags">
          <span class="tag">aristotelik</span>
          <span class="tag">přírodní filosof</span>
          <span class="tag tag-highlight">smrtelnost duše</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Giordano Bruno</span>
          <span class="entity-years">1548–1600</span>
        </div>
        <div class="entity-tags">
          <span class="tag">dominikán</span>
          <span class="tag">panteista</span>
          <span class="tag tag-highlight">nekonečný vesmír</span>
          <span class="tag">mnoho světů</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Galileo Galilei</span>
          <span class="entity-years">1564–1642</span>
        </div>
        <div class="entity-tags">
          <span class="tag">fyzik</span>
          <span class="tag">astronom</span>
          <span class="tag tag-highlight">experiment + matematika</span>
          <span class="tag">„A přece se točí!"</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Johannes Kepler</span>
          <span class="entity-years">1571–1630</span>
        </div>
        <div class="entity-tags">
          <span class="tag">astronom</span>
          <span class="tag">matematik</span>
          <span class="tag tag-highlight">eliptické dráhy</span>
          <span class="tag">3 zákony pohybu</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Francis Bacon</span>
          <span class="entity-years">1561–1626</span>
        </div>
        <div class="entity-tags">
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
