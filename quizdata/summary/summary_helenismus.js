window.sum = window.sum || {};

window.sum.helenismus = {
    "chronologie_helanismu": {
        "title": "Souhrn: Helénismus",
        "content": `
<p>Vývoj <strong>helénistické filosofie</strong> od <strong>4. století př. n. l.</strong> do <strong>5. století n. l.</strong> s hlavními představiteli a jejich přínosy.</p>

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
.tag-highlight { background: #ffd43b; color: #5c4800; }

/* Period colors */
.stoicismus { border-color: #0071e3; }
.stoicismus .period-title { background: #0071e3; }
.stoicismus .entity-card { border-left-color: #0071e3; }
.epikureismus { border-color: #5e5ce6; }
.epikureismus .period-title { background: #5e5ce6; }
.epikureismus .entity-card { border-left-color: #5e5ce6; }
.skepticismus { border-color: #ff9500; }
.skepticismus .period-title { background: #ff9500; }
.skepticismus .entity-card { border-left-color: #ff9500; }
.kynismus { border-color: #bf5af2; }
.kynismus .period-title { background: #bf5af2; }
.kynismus .entity-card { border-left-color: #bf5af2; }
.eklekticismus { border-color: #34c759; }
.eklekticismus .period-title { background: #34c759; }
.eklekticismus .entity-card { border-left-color: #34c759; }
.novoplatonismus { border-color: #af52de; }
.novoplatonismus .period-title { background: #af52de; }
.novoplatonismus .entity-card { border-left-color: #af52de; }
</style>

<div class="timeline-tree">
  <div class="summary-header">🌳 HELÉNISTICKÁ FILOZOFIE: ETICKÉ ŠKOLY → NOVOPLATONISMUS</div>

  <!-- STOICISMUS -->
  <div class="period-section stoicismus">
    <div class="period-header">
      <span class="period-title">🏛️ STOICISMUS</span>
      <span class="period-years">300 př. n. l. – 180 n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Zénón z Kitia</span>
        <span class="entity-years">334–262 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">obchodník</span>
        <span class="tag">zakladatel</span>
        <span class="tag tag-highlight">žít v souladu s přírodou</span>
        <span class="tag">Stoa poikilé</span>
        <span class="tag">logika + fyzika + etika</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Chrysippos</span>
        <span class="entity-years">280–208 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">druhý zakladatel</span>
        <span class="tag">otec stoické logiky</span>
        <span class="tag tag-highlight">„Nebýt Chrysippa, nebyla by Stoa"</span>
        <span class="tag">systém dialektiky</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Seneca</span>
        <span class="entity-years">4 př. n. l. – 65 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">politik</span>
        <span class="tag">poradce císaře Nerona</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">„Hněv jako volba"</span>
        <span class="tag">O hněvu</span>
        <span class="tag">4 fáze vzniku hněvu</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Epiktétos</span>
        <span class="entity-years">55–135 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">původem otrok</span>
        <span class="tag">římský stoik</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">„Některé věci jsou v naší moci"</span>
        <span class="tag">svoboda přijetí</span>
        <span class="tag">vůle</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Marcus Aurelius</span>
        <span class="entity-years">121–180 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">římský císař</span>
        <span class="tag">římský stoik</span>
        <span class="tag tag-highlight">Hovory k sobě</span>
        <span class="tag">vztah k povinnostem císaře</span>
        <span class="tag">„překážka se stává cestou"</span>
      </div>
    </div>
  </div>

  <!-- EPIKUREISMUS -->
  <div class="period-section epikureismus">
    <div class="period-header">
      <span class="period-title">🌸 EPIKUREISMUS</span>
      <span class="period-years">341–40 př. n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Epikuros</span>
        <span class="entity-years">341–270 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">zakladatel školy Zahrada</span>
        <span class="tag">řecký filosof</span>
        <span class="tag">atomista</span>
        <span class="tag tag-highlight">„smrt se nás netýká"</span>
        <span class="tag">ataraxie</span>
        <span class="tag">přátelství</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Titus Lucretius Carus</span>
        <span class="entity-years">110–40 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">římský básník-filosof</span>
        <span class="tag tag-highlight">De rerum natura</span>
        <span class="tag">atomismus</span>
        <span class="tag">clinamen (odchylka)</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Diogenés Laertios</span>
        <span class="entity-years">3. století n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">archivář</span>
        <span class="tag">řecký historik</span>
        <span class="tag tag-highlight">Životy, názory a výroky filosofů</span>
        <span class="tag">zachoval Epikúrovy texty</span>
      </div>
    </div>
  </div>

  <!-- SKEPTICISMUS -->
  <div class="period-section skepticismus">
    <div class="period-header">
      <span class="period-title">❓ SKEPTICISMUS</span>
      <span class="period-years">365 př. n. l. – 210 n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Pyrrhón z Élidy</span>
        <span class="entity-years">365–275 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">zakladatel pyrrhonismu</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">epoché (zákaz soudu)</span>
        <span class="tag">ataraxie</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Sextus Empiricus</span>
        <span class="entity-years">160–210 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">lékař-filosof</span>
        <span class="tag">systematizátor</span>
        <span class="tag tag-highlight">Pyrrhonovy základy</span>
        <span class="tag">Proti učencům</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Karneadés z Kyrény</span>
        <span class="entity-years">214–129 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">představitel Mladší Akademie</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">argumentace pro i proti</span>
        <span class="tag">isostheneia</span>
      </div>
    </div>
  </div>

  <!-- KYNISMUS -->
  <div class="period-section kynismus">
    <div class="period-header">
      <span class="period-title">🐕 KYNISMUS</span>
      <span class="period-years">413–327 př. n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Diógenés ze Sinópé</span>
        <span class="entity-years">413–327 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký filosof</span>
        <span class="tag">kyón (pes)</span>
        <span class="tag">žil v hliněné nádobě (pithos)</span>
        <span class="tag tag-highlight">„Ustup mi ze slunce!"</span>
        <span class="tag">autarkeia (soběstačnost)</span>
        <span class="tag">parrhésia (svoboda řeči)</span>
      </div>
    </div>
  </div>

  <!-- EKLEKTICISMUS -->
  <div class="period-section eklekticismus">
    <div class="period-header">
      <span class="period-title">⚖️ EKLEKTICISMUS</span>
      <span class="period-years">106–43 př. n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Cicero</span>
        <span class="entity-years">106–43 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">římksý politik</span>
        <span class="tag">římksý rétor</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">De officiis (O povinnostech)</span>
        <span class="tag">Listy Luciliovi</span>
        <span class="tag">syntéza stoicismu + skepticismu</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Filón Alexandrijský</span>
        <span class="entity-years">20 př. n. l. – 50 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">židovský filosof</span>
        <span class="tag">syntéza Tóry a řecké filosofie</span>
        <span class="tag tag-highlight">pojem Logos</span>
        <span class="tag">vliv na křesťanskou teologii</span>
      </div>
    </div>
  </div>

  <!-- NOVOPLATONISMUS -->
  <div class="period-section novoplatonismus">
    <div class="period-header">
      <span class="period-title">✨ NOVOPLATONISMUS</span>
      <span class="period-years">204–529 n. l.</span>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Plotínos</span>
        <span class="entity-years">204–270 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">zakladatel</span>
        <span class="tag">řecký filosof</span>
        <span class="tag">učil v Římě</span>
        <span class="tag tag-highlight">Ennéady</span>
        <span class="tag">Jedno (nejvyšší princip)</span>
        <span class="tag">emanace</span>
        <span class="tag">epistrophé (návrat duše)</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Porphyrios</span>
        <span class="entity-years">232–305 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">žák Plotína</span>
        <span class="tag">řecký filosof</span>
        <span class="tag tag-highlight">Isagoge (Úvod ke kategoriím)</span>
        <span class="tag">Porfyriův strom</span>
        <span class="tag">Proti křesťanům</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Hypatia</span>
        <span class="entity-years">355–415 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">novoplatonička</span>
        <span class="tag">matematička</span>
        <span class="tag">učitelka v Alexandrii</span>
        <span class="tag tag-highlight">zavražděna 415 n. l.</span>
        <span class="tag">symbol konce antiky</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Iulianus Apostata</span>
        <span class="entity-years">331–363 n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">římský císař</span>
        <span class="tag">pokus o obnovu pohanství</span>
        <span class="tag tag-highlight">theurgie</span>
        <span class="tag">reforma náboženství</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Pseudo-Dionysios Areopagita</span>
        <span class="entity-years">5.–6. století n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">anonymní autor</span>
        <span class="tag">křesťanský novoplatonik</span>
        <span class="tag tag-highlight">Nebeská hierarchie</span>
        <span class="tag">přetvořil novoplatonismus do křesťanství</span>
      </div>
    </div>
  </div>
</div>
`
    }
};
