const quizCategories = {
    Filosofie: {
        icon: "🧠",
        description: "Cesta ke kořenům západního myšlení",
        quizzes: {
            pocatkyPoVrcholneReckeObdobi: {
                id: "pocatky_po_vrcholne_recke_obdobi",
                title: "Od počátků k vrcholu řecké filosofie",
                desc: "Od mýtů k logu, přes hledání pralátky (arché) až po vrcholné systémy Platóna a Aristotela.",
                lastUpdated: null, // Will be auto-populated
                version: "1.0"
            },
            helenismus: {
                id: "obdobi_helenismu",
                title: "Období Helénismu",
                desc: "Filosofická cesta za vnitřní svobodou v rozbouřeném světě skrze praktickou etiku stoiků, epikurejců a skeptiků.",
                lastUpdated: null,
                version: "1.0"
            }
        }
    },
    Logika: {
        icon: "🧩",
        description: "Ovládněte abecedu myšlení",
        quizzes: {
            dejinyAPredstavitele: {
                id: "dejiny_a_predstavitele",
                title: "Dějiny a významní představitelé",
                desc: "Klíčové postavy, které formovaly naše myšlení. Od Aristotelových sylogismů přes Leibnizův sen o univerzálním jazyce až po Gödelovy věty.",
                lastUpdated: null,
                version: "1.0"
            },
            formalniLogika: {
                id: "formalni_logika",
                title: "Formální Logika",
                desc: "Naučíte se číst logické zápisy (¬, ∧, ∨, →), používat De Morganovy zákony a provádět ekvivalentní úpravy.",
                lastUpdated: null,
                version: "1.0"
            },
            predikatovaLogika: {
                id: "predikatova_logika",
                title: "Predikátová Logika",
                desc: "Pronikněte do tajů kvantifikátorů (∀, ∃), pochopte kritické rozdíly v jejich pořadí a naučte se precizně negovat i ty nejsložitější věty.",
                lastUpdated: null,
                version: "1.0"
            },
            logickeHadanky: {
                id: "logicke_hadanky",
                title: "Logické hádanky",
                desc: "Ovládněte umění neprůstřelné argumentace, odhalte logické klamy a vyřešte složité situace pomocí čisté dedukce.",
                lastUpdated: null,
                version: "1.0"
            }
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
                lastUpdated: null,
                version: "1.0"
            }
        }
    }
};

// Helper function to generate file path from category and id
function generateQuizFilePath(category, quizId) {
    const categoryPrefix = category.toLowerCase();
    return `quizdata/${categoryPrefix}/${quizId}.js`;
}

// Funkce pro automatickou aktualizaci lastUpdated
async function updateQuizFileDates() {
    for (const category of Object.keys(quizCategories)) {
        for (const quizKey of Object.keys(quizCategories[category].quizzes)) {
            const quiz = quizCategories[category].quizzes[quizKey];
            const filePath = generateQuizFilePath(category, quiz.id);
            
            try {
                const response = await fetch(filePath, { method: 'HEAD' });
                if (response.ok) {
                    const lastModified = response.headers.get('last-modified');
                    if (lastModified) {
                        quiz.lastUpdated = new Date(lastModified).toISOString();
                    }
                }
            } catch (error) {
                // Fallback - použijeme aktuální datum při prvním načtení
                if (!quiz.lastUpdated) {
                    quiz.lastUpdated = new Date().toISOString();
                }
            }
        }
    }
}

// Automaticky aktualizovat data při načtení
if (typeof window !== 'undefined') {
    updateQuizFileDates();
}
