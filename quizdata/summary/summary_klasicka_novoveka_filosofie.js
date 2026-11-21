window.sum = window.sum || {};

window.sum.klasicka_novoveka_filosofie = {
    "chronologie_novoveka_filosofie": {
        "title": "Souhrn: Klasická novověká filosofie",
        "content": `
<p>Vývoj <strong>novověké filozofie</strong> od <strong>17. století</strong> po <strong>počátek 19. století</strong> – od metodické skepse přes racionalismus a empirismus až k německému idealismu.</p>

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
.racionalismus { border-color: #0071e3; }
.racionalismus .period-title { background: #0071e3; }
.racionalismus .entity-card { border-left-color: #0071e3; }

.empirismus { border-color: #40c057; }
.empirismus .period-title { background: #40c057; }
.empirismus .entity-card { border-left-color: #40c057; }

.osvicenstvi { border-color: #f76707; }
.osvicenstvi .period-title { background: #f76707; }
.osvicenstvi .entity-card { border-left-color: #f76707; }

.nemecky-idealismus { border-color: #be4bdb; }
.nemecky-idealismus .period-title { background: #be4bdb; }
.nemecky-idealismus .entity-card { border-left-color: #be4bdb; }
</style>

<div class="timeline-tree">
  <div class="summary-header">🧠 NOVOVĚKÁ FILOZOFIE: GNOZEOLOGIE → IDEALISMUS</div>

  <!-- RACIONALISMUS -->
  <div class="period-section racionalismus">
    <div class="period-header">
      <span class="period-title">📐 RACIONALISMUS</span>
      <span class="period-years">důraz na rozum a vrozené ideje</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Zakladatel moderního racionalismu</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">René Descartes</span>
          <span class="entity-years">1596–1650</span>
        </div>
        <div class="entity-tags">
          <span class="tag">metodická skepse</span>
          <span class="tag tag-highlight">"Myslím, tedy jsem" (cogito)</span>
          <span class="tag">dualismus: res cogitans × res extensa</span>
          <span class="tag">vrozené ideje</span>
          <span class="tag">ontologický důkaz Boha</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Monismus a panteismus</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Baruch Spinoza</span>
          <span class="entity-years">1632–1677</span>
        </div>
        <div class="entity-tags">
          <span class="tag">monismus: jedna substance</span>
          <span class="tag tag-highlight">Deus sive Natura (Bůh nebo Příroda)</span>
          <span class="tag">panteismus</span>
          <span class="tag">svoboda = poznaná nutnost</span>
          <span class="tag">Etika, Traktát teologicko-politický</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Pluralismus a monády</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Gottfried Wilhelm Leibniz</span>
          <span class="entity-years">1646–1716</span>
        </div>
        <div class="entity-tags">
          <span class="tag">monády: nedělitelné duchovní substance</span>
          <span class="tag tag-highlight">předjednaná harmonie</span>
          <span class="tag">"bez oken" - žádná interakce</span>
          <span class="tag">teodicea: nejlepší z možných světů</span>
          <span class="tag">kritika Descarta a Spinozy</span>
        </div>
      </div>
    </div>
  </div>

  <!-- EMPIRISMUS -->
  <div class="period-section empirismus">
    <div class="period-header">
      <span class="period-title">👁️ EMPIRISMUS</span>
      <span class="period-years">důraz na zkušenost a smysly</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Zakladatel empirismu</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">John Locke</span>
          <span class="entity-years">1632–1704</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">tabula rasa (prázdná deska)</span>
          <span class="tag">odmítnutí vrozených idejí</span>
          <span class="tag">jednoduché × komplexní ideje</span>
          <span class="tag">empirická zkušenost</span>
          <span class="tag">Esej o lidském rozumu</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Subjektivní idealismus</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">George Berkeley</span>
          <span class="entity-years">1685–1753</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">esse est percipi (být znamená být vnímán)</span>
          <span class="tag">odmítnutí hmoty</span>
          <span class="tag">Bůh jako věčný vnímač</span>
          <span class="tag">subjektivní idealismus</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Radikální skepse</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">David Hume</span>
          <span class="entity-years">1711–1776</span>
        </div>
        <div class="entity-tags">
          <span class="tag">kritika kauzality = zvyk</span>
          <span class="tag tag-highlight">probuzení Kanta z dogmatického spánku</span>
          <span class="tag">personální identita = proud fenoménů</span>
          <span class="tag">zrcadlo jednoty a identity</span>
          <span class="tag">agnosticismus</span>
        </div>
      </div>
    </div>
  </div>

  <!-- OSVÍCENSTVÍ -->
  <div class="period-section osvicenstvi">
    <div class="period-header">
      <span class="period-title">💡 OSVÍCENSTVÍ</span>
      <span class="period-years">důraz na rozum, svobodu a pokrok</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-tags">
        <span class="tag tag-group">Sapere aude - měj odvahu používat rozum</span>
        <span class="tag tag-group">emancipace od autorit</span>
        <span class="tag tag-group">sekularizace</span>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Voltaire</span>
          <span class="entity-years">1694–1778</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">deismus: Bůh jako hodinář</span>
          <span class="tag">kritika náboženského dogmatismu</span>
          <span class="tag">"Rozdrtíme skandál!"</span>
          <span class="tag">Filozofický slovník</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Jean-Jacques Rousseau</span>
          <span class="entity-years">1712–1778</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">společenská smlouva a obecná vůle</span>
          <span class="tag">kritika soukromého vlastnictví</span>
          <span class="tag">"dobý divoch" vs. civilizace</span>
          <span class="tag">primitivismus a romantismus</span>
          <span class="tag">přímá demokracie</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Immanuel Kant</span>
          <span class="entity-years">1724–1804</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">"Co je osvícenství?"</span>
          <span class="tag">východisko z nezralosti</span>
          <span class="tag">tolerance a svoboda tisku</span>
          <span class="tag">morální autonomie</span>
        </div>
      </div>
    </div>
  </div>

  <!-- NĚMECKÝ IDEALISMUS -->
  <div class="period-section nemecky-idealismus">
    <div class="period-header">
      <span class="period-title">🌀 NĚMECKÝ IDEALISMUS</span>
      <span class="period-years">duch jako absolutní princip</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Kritický idealismus</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Immanuel Kant</span>
          <span class="entity-years">1724–1804</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">kopernikovský obrat</span>
          <span class="tag">fenomen × noumenon</span>
          <span class="tag">apriorní kategorie</span>
          <span class="tag">kategoriální imperativ</span>
          <span class="tag">transcendentální vs. transcendentní</span>
          <span class="tag">praktický rozum: Bůh, svoboda, nesmrtelnost</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Subjektivní idealismus</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Johann Gottlieb Fichte</span>
          <span class="entity-years">1762–1814</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">absolutní Já tvoří svět</span>
          <span class="tag">"Ne-Já" jako projekce</span>
          <span class="tag">tři principy: Já × Ne-Já × jednota</span>
          <span class="tag">filosofie práva a obchodní společnosti</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Filosofie identity</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Friedrich Wilhelm Joseph Schelling</span>
          <span class="entity-years">1775–1854</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">filosofie identity</span>
          <span class="tag">subjekt a objekt jsou jedno</span>
          <span class="tag">příroda jako organický celek</span>
          <span class="tag">duch a příroda: dvě stránky absolutna</span>
          <span class="tag">sebeorganizující síla</span>
        </div>
      </div>
    </div>
    <div class="sub-section">
      <div class="sub-section-title">Absolutní idealismus</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Georg Wilhelm Friedrich Hegel</span>
          <span class="entity-years">1770–1831</span>
        </div>
        <div class="entity-tags">
          <span class="tag tag-highlight">dialektická triáda: teze-antiteze-syntéza</span>
          <span class="tag">světový duch (Weltgeist)</span>
          <span class="tag">filosofie dějin jako pokrok svobody</span>
          <span class="tag">"Skutečné je racionální"</span>
          <span class="tag">systém: logika - příroda - duch</span>
          <span class="tag">absolutní duch se poznává sám</span>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }
};
