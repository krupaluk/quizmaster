const quizCategories = {
    Filosofie: {
        icon: "🦉",
        description: "Cesta ke kořenům západního myšlení",
        quizzes: {
            prijimackyFFOU: {
                id: "prijimacky_ff_ou",
                title: "Otázky z přijímaček FF OU",
                desc: "Oficiální otázky z přijímaček FF OU z období 2018-2024 rozdělené podle témat.",
            },
            pocatkyPoVrcholneReckeObdobi: {
                id: "pocatky_po_vrcholne_recke_obdobi",
                title: "Od počátků k vrcholu řecké filosofie",
                desc: "Od mýtů k logu, přes hledání pralátky (arché) až po vrcholné systémy Platóna a Aristotela.",
            },            
            helenismus: {
                id: "obdobi_helenismu",
                title: "Období Helénismu",
                desc: "Filosofická cesta za vnitřní svobodou v rozbouřeném světě skrze praktickou etiku stoiků, epikurejců a skeptiků.",
            }
        }
    },
    Logika: {
        icon: "🧩",
        description: "Ovládněte abecedu myšlení",
        quizzes: {
            dejinyAPredstavitele: {
                id: "dejiny_a_predstavitele",
                title: "Dějiny logiky",
                desc: "Klíčová období a představitelé. Od Aristotelových sylogismů přes Leibnizův sen o univerzálním jazyce až po Gödelovy věty.",
            },
            teorieLogiky: {
                id: "teorie_logiky",
                title: "Teorie Logiky",
                desc: "Od pojmů a definic přes logické operace až po úsudky, argumentaci a odhalování klamů.",
            },
            logickeHadanky: {
                id: "logicke_hadanky",
                title: "Logické hádanky",
                desc: "První krok k řešení logických úloh formou přirozeného jazyka. Od sylogismů přes logické spojky, klamy, negace až po analytické hádanky a formalizaci logiky.",
            },
            vyrokovaLogika: {
                id: "vyrokova_logika",
                title: "Výroková Logika",
                desc: "Naučíte se číst logické zápisy (¬, ∧, ∨, →), používat De Morganovy zákony a provádět ekvivalentní úpravy.",
            },
            predikatovaLogika: {
                id: "predikatova_logika",
                title: "Predikátová Logika",
                desc: "Pronikněte do tajů kvantifikátorů (∀, ∃), pochopte kritické rozdíly v jejich pořadí a naučte se precizně negovat i ty nejsložitější věty.",
            },
        }
    },
    Prvouka: {
        icon: "🌱",
        description: "Základy pro nejmenší badatele",
        quizzes: {
            domaciAHospodarskaZvirata: {
                id: "zvirata_na_statku",
                title: "Zvířata na statku",
                desc: "Poznejte zvířátka ze statku, zjistěte, jak se jmenují jejich mláďata, co dobrého papají a jaké zajímavé zvuky vydávají!",
            }
        }
    },
    Debug: {
        icon: "🔧",
        description: "Debug mode pro testování aplikace",
        quizzes: {
            debug3q: {
                id: "debug_3q",
                title: "Debug 3 otázky",
                desc: "Testovací kvíz se 3 jednoduchými otázkami pro ladění aplikace",
            },
            debug5q: {
                id: "debug_5q",
                title: "Debug 5 otázek",
                desc: "Testovací kvíz se 5 jednoduchými otázkami pro ladění aplikace",
            }
        }
    }    
};

