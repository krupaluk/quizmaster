window.sum = window.sum || {};

window.sum.klasicka_recka_filosofie = {
    "chronologie_klasicka_filosofie": {
        "title": "Souhrn: Klasická řecká filosofie",
        "content": `
<p>Vývoj <strong>řecké filosofie</strong> od <strong>6. století př. n. l.</strong> po <strong>4. století př. n. l.</strong> od předsokratovských hledačů arché přes sofisty až po vrcholné systémy Sókrata, Platóna a Aristotela.</p>

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
.pred-sokrate { border-color: #0071e3; }
.pred-sokrate .period-title { background: #0071e3; }
.pred-sokrate .entity-card { border-left-color: #0071e3; }
.sofiste { border-color: #5e5ce6; }
.sofiste .period-title { background: #5e5ce6; }
.sofiste .entity-card { border-left-color: #5e5ce6; }
.vrcholne-obdobi { border-color: #40c057; }
.vrcholne-obdobi .period-title { background: #40c057; }
.vrcholne-obdobi .entity-card { border-left-color: #40c057; }
</style>

<div class="timeline-tree">
  <div class="summary-header">🌳 ŘECKÁ FILOZOFIE: ARCHÉ → IDEJE → VĚDA</div>

  <!-- PŘEDSOCRATOVÉ -->
  <div class="period-section pred-sokrate">
    <div class="period-header">
      <span class="period-title">🔥 PŘEDSOCRATOVÉ</span>
      <span class="period-years">6.–5. století př. n. l.</span>
    </div>

    <!-- 1. Sedm mudrců -->
    <div class="sub-section">
      <div class="sub-section-title">Sedm mudrců</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Bias z Prieny</span>
          <span class="entity-years">6. století př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">řecký právník a soudce</span>
          <span class="tag tag-highlight">„Všechno své si nosím s sebou"</span>
          <span class="tag">moudrost jako nejvyšší ctnost, skutečná síla</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Kleobulos z Lindu</span>
          <span class="entity-years">6. století př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">král ostrova Rhodos</span>
          <span class="tag tag-highlight">„Všeho s mírou" (métron ariston)</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Pittakos z Mytilény</span>
          <span class="entity-years">640–568 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">zákonodárce (Lesbos) zvolený občany</span>
          <span class="tag tag-highlight">„Je těžké být dobrým člověkem"</span>
          <span class="tag">úctu ke všem (i nepřátelům)</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Chilon ze Sparty</span>
          <span class="entity-years">6. století př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">spartský efor (vysoký úředník)</span>
          <span class="tag tag-highlight">„Poznej sám sebe"</span>
          <span class="tag">sebeovládání</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Mysón z Chénu</span>
          <span class="entity-years">6. století př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">skromnost a soběstačnost</span>
          <span class="tag tag-highlight">„Mít co nejméně potřeb"</span>
          <span class="tag">rozvaha v řeči</span>
          <span class="tag">skutky nad slovy</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Solón z Athén</span>
          <span class="entity-years">638–558 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">athénský zákonodárce</span>
          <span class="tag tag-highlight">„Nikoho nenazývej šťastným před jeho smrtí"</span>
          <span class="tag">zrušení dluhového otroctví (seisachtheia)</span>
          <span class="tag">čtyři třídy podle majetku</span>
        </div>
      </div>
    </div>

    <!-- 2. Milétská škola -->
    <div class="sub-section">
      <div class="sub-section-title">Milétská škola</div>
      <span class="tag tag-group">hledání pralátky</span>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Thalés z Milétu</span>
          <span class="entity-years">624–546 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">jeden z mudrců</span>
          <span class="tag">milétská škola</span>
          <span class="tag">hledání racionálních vysvětlení namísto mýtů</span>
          <span class="tag tag-highlight">arché: voda</span>
          <span class="tag">předpověď zatmění Slunce</span>
          <span class="tag">měření výšky pyramid</span>
          <span class="tag">olivové lisy</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Anaximandros</span>
          <span class="entity-years">611–547 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">milétská škola</span>
          <span class="tag tag-highlight">arché: apeiron (bezmezno)</span>
          <span class="tag">v apeironu vše vzniká i zaniká</span>
          <span class="tag">Země jako válec v prostoru</span>
          <span class="tag">člověk se dříve podobal rybě (evolucionista)</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Anaximenés</span>
          <span class="entity-years">585–528 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">milétská škola</span>
          <span class="tag">řecký filosof</span>
          <span class="tag tag-highlight">arché: vzduch (pneuma)</span>
          <span class="tag">zhušťování a zřeďování</span>
          <span class="tag">dech jako princip</span>
          <span class="tag">Země jako plochá deska plující ve vzduchu</span>
        </div>
      </div>
    </div>

    <!-- 3. Pythagorejci -->
    <div class="sub-section">
      <div class="sub-section-title">Pythagorejská škola</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Pythagoras</span>
          <span class="entity-years">570–495 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">zakladatel pythagorejské školy</span>
          <span class="tag">řecký filosof</span>
          <span class="tag">vegetarián (víra v převtělování duší)</span>
          <span class="tag tag-highlight">podstata všeho: čísla</span>
          <span class="tag">„kosmos": uspořádaný & harmonický svět</span>
          <span class="tag">harmonie strun (monochord)</span>
          <span class="tag">zavedení slova 'filosof'</span>
        </div>
      </div>
    </div>

    <!-- 4. Eleaté -->
    <div class="sub-section">
      <div class="sub-section-title">Eleatská škola</div>
      <span class="tag tag-group">první ontologové (jsoucno)</span>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Xenofanés z Kolofónu</span>
          <span class="entity-years">570–475 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">řecký filosof, satirik, kritik</span>
          <span class="tag">předchůdce eleatů</span>
          <span class="tag tag-highlight">kritika antropomorfního náboženství</span>
          <span class="tag">'Kdyby koně měli bohy, byli by podobni koním'</span>
          <span class="tag">kritika bohů za neřestné chování</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Parmenidés z Eleje</span>
          <span class="entity-years">515–450 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">zakladatel elejské školy</span>
          <span class="tag">řecký filosof</span>
          <span class="tag tag-highlight">„Bytí jest, nebytí není"</span>
          <span class="tag">Xenofanův žák</span>
          <span class="tag">jsoucno nelze poznat smysly</span>
          <span class="tag">jsoucno je věčné, dokonalé a dokončené</span>
          <span class="tag">oddělení rozumu a smyslového poznání</span>
          <span class="tag">„myslet a být je totéž"</span>
          
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Zénón z Eleje</span>
          <span class="entity-years">490–430 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">eleatská škola</span>
          <span class="tag">žák Parmenida</span>
          <span class="tag tag-highlight">aporie (paradoxy) – popření pohybu</span>
          <span class="tag">Achilles a želva</span>
          <span class="tag">letící šíp</span>
        </div>
      </div>
    </div>

    <!-- Hérakleitos - samostatně mezi Eleaté a Pluralisty -->
    <div class="sub-section">
      <div class="sub-section-title">Protiklad eleatů</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Hérakleitos z Efesu</span>
          <span class="entity-years">535–475 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">řecký filosof</span>
          <span class="tag">„panta rhei" – vše plyne</span>          
          <span class="tag">„Nevstoupíš dvakrát do téže řeky"</span>
          <span class="tag tag-highlight">arché: oheň (symbol změny)</span>          
          <span class="tag">nezbytnost protikladů</span>
          <span class="tag">„Válka je otec všech věcí"</span>
          <span class="tag">sebezkoumání</span>
          <span class="tag">Logos je uvnitř duše, ne venku</span>          
        </div>
      </div>
    </div>

    <!-- 5. Pluralisté -->
    <div class="sub-section">
      <div class="sub-section-title">Pluralisté</div>
      <span class="tag tag-group">svět je tvořen více látkami</span>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Empedoklés</span>
          <span class="entity-years">494–434 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">řecký filosof</span>
          <span class="tag">lékař, politik</span>
          <span class="tag tag-highlight"">arché: 4 živly (voda, země, oheň, vzduch)</span>
          <span class="tag>láska spojuje a svár rozděluje (živly)</span>
          <span class="tag">sféros – dokonalá jednota</span>
          <span class="tag">smrt v Etně (legenda)</span>
        </div>
      </div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Anaxagorás</span>
          <span class="entity-years">500–428 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">řecký Athénký filosof</span>
          <span class="tag">Teorie semen</span>
          <span class="tag">na počátku chaos → semena promísena</span>
          <span class="tag tag-highlight">nutný Nús (Rozum) → uspořádání semen</span>
          <span class="tag">„všechno v každém"</span>
          <span class="tag">Slunce je rozžhavený kámen</span>
          <span class="tag">vyhnán za kacířství</span>
        </div>
      </div>
    </div>

    <!-- 6. Atomisté -->
    <div class="sub-section">
      <div class="sub-section-title">Atomisté</div>
      <div class="entity-card">
        <div class="entity-header">
          <span class="entity-name">Démokritos</span>
          <span class="entity-years">460–370 př. n. l.</span>
        </div>
        <div class="entity-tags">
          <span class="tag">řecký filosof</span>
          <span class="tag">zakladatel atomismu</span>
          <span class="tag tag-highlight">atomos – nedělitelné</span>
          <span class="tag">nejsoucno existuje (stejně skutečné jako hmota)</span>
          <span class="tag">náhodné víření atomů</span>
          <span class="tag">důsledný materialismus/mechanicismus</span>
          <span class="tag">není třeba zásahů Boha</span>
        </div>
      </div>
    </div>
  </div>

  <!-- SOFISTÉ -->
  <div class="period-section sofiste">
    <div class="period-header">
      <span class="period-title">🗣️ SOFISTÉ</span>
      <span class="period-years">5. století př. n. l.</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-tags">
        <span class="tag tag-group">antropologický obrat</span>
        <span class="tag tag-group">gnozeologický obrat</span>
        <span class="tag tag-group">etický relativismus</span>
        <span class="tag tag-group">placení učitelé</span>
      </div>
      <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Prótagorás</span>
        <span class="entity-years">485–411 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">nejvlivnější řecký sofista</span>
        <span class="tag">první profesionální učitel</span>
        <span class="tag">položil základy rétoriky</span>
        <span class="tag tag-highlight">'Měrou všech věcí je člověk'</span>
        <span class="tag">relativismus</span>
        <span class="tag">eristika (umění sporu)</span>
        <span class="tag">agnosticismus (o bozích nemůžeme nic vědět)</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Gorgiás z Leontín</span>
        <span class="entity-years">485–380 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký sofista</span>
        <span class="tag">mistr rétoriky</span>
        <span class="tag tag-highlight">dílo: O přírodě neboli o nejsoucím</span>
        <span class="tag">'Jakékoliv poznání je nemožné' (nihilismus)</span>
        <span class="tag">síla rétoriky bez ohledu na pravdivost</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Antifón ze Soloi</span>
        <span class="entity-years">480–411 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký sofista</span>
        <span class="tag tag-highlight">fysis (příroda) vs. nomos (zákon)</span>
        <span class="tag">zákony jsou jen konvence</span>
        <span class="tag">rovnost lidí podle přírody</span>
      </div>
    </div>
    </div>
  </div>

  <!-- VRCHOLNÉ OBDOBÍ -->
  <div class="period-section vrcholne-obdobi">
    <div class="period-header">
      <span class="period-title">⭐ VRCHOLNÉ OBDOBÍ</span>
      <span class="period-years">5.–4. století př. n. l.</span>
    </div>
    <div class="sub-section">
      <div class="sub-section-tags">
        <span class="tag tag-group">antropologický obrat</span>
        <span class="tag tag-group">hledání pravdy</span>
        <span class="tag tag-group">moudrost</span>
        <span class="tag tag-group">etika</span>
      </div>    
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Sókratés</span>
        <span class="entity-years">470–399 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký athénský filosof</span>
        <span class="tag">mistr v kladení otázek</span>
        <span class="tag tag-highlight">'Moudrost je poznání jak málo toho víme.'</span>
        <span class="tag">maieutika (porodnice pravdy)</span>
        <span class="tag">kritické myšlení</span>
        <span class="tag">otázky pokládány tak aby nutili přemýšlet</span>
        <span class="tag">snaha aby si člověk sám odpověděl</span>
        <span class="tag">daimonion (vnitřní hlas)</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Platón</span>
        <span class="entity-years">427–347 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký filosof, Sokratův žák</span>
        <span class="tag">zakladatel Akademie v Athénách</span>
        <span class="tag tag-highlight">dualismus: svět idejí (skutečný) vs svět smyslový (stínový)</span>        
        <span class="tag">podobenství o jeskyni</span>
        <span class="tag">anamnésis (rozpomínání)</span>
        <span class="tag">Demiurgos, Chóra</span>
        <span class="tag tag-highlight">dílo: Ústava</span>
        <span class="tag">problém demokracie: vláda nevzdělanců ovládaných emocemi</span>        
        <span class="tag">filozofové-králové</span>
      </div>
    </div>
    <div class="entity-card">
      <div class="entity-header">
        <span class="entity-name">Aristotelés</span>
        <span class="entity-years">384–322 př. n. l.</span>
      </div>
      <div class="entity-tags">
        <span class="tag">řecký filosof</span>
        <span class="tag">zakladatel Lykeionu (Peripatos)</span>
        <span class="tag tag-highlight">Organon: logika & sylogismus</span>
        <span class="tag">hylémorfismus (oproti idejím)</span>
        <span class="tag">Teorie poznání: 4 příčiny</span>
        <span class="tag">První hybatel</span>
        <span class="tag tag-highlight">ctnost: rovnováha mezi extrémy</span>
        <span class="tag">pocit štěstí: aktivita</span>
        <span class="tag">3 druhy přátelství</span>
        <span class="tag">přátelství je důležitější než spravedlnost</span>
      </div>
    </div>
  </div>
</div>
`
    }
};
