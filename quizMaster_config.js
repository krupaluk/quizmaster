const quizCategories = {
    Filosofie: {
        icon: "🧠",
        description: "Cesta ke kořenům západního myšlení",
        quizzes: {
            predsokratovciPoAristotela: {
                id: "predsokratovci_po_aristotela",
                title: "Předsokratovci po Aristotela",
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
                desc: "Proniknete do tajů kvantifikátorů (∀, ∃), pochopíte rozdíly v jejich pořadí a naučíte se precizně negovat věty.",
                lastUpdated: null,
                version: "1.0"
            },
            logickeHadanky: {
                id: "logicke_hadanky",
                title: "Logické hádanky",
                desc: "Praktický trénink vyvozování závěrů z premis, odhalování logických klamů a řešení deduktivních detektivek.",
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
                id: "domaci_a_hospodarska_zvirata",
                title: "Domácí a hospodářská zvířata",
                desc: "Základní přehled o zvířatech, která potkáte na dvorku i na statku. Rozlišení druhů, jejich užitku a způsobu života.",
                lastUpdated: null,
                version: "1.0"
            }
        }
    }
};

// Pro zpětnou kompatibilitu - automaticky generovat flat array
const availableQuizzes = [];
Object.keys(quizCategories).forEach(category => {
    Object.keys(quizCategories[category].quizzes).forEach(quizKey => {
        const quiz = quizCategories[category].quizzes[quizKey];
        // Generovat file path z category a id
        const categoryPrefix = category.toLowerCase();
        const filePath = `quizdata_${categoryPrefix}_${quiz.id}.js`;
        
        availableQuizzes.push({
            ...quiz,
            file: filePath,
            category: category,
            quizKey: quizKey
        });
    });
});

// Funkce pro automatickou aktualizaci lastUpdated
async function updateQuizFileDates() {
    for (const category of Object.keys(quizCategories)) {
        for (const quizKey of Object.keys(quizCategories[category].quizzes)) {
            const quiz = quizCategories[category].quizzes[quizKey];
            // Generovat file path z category a id
            const categoryPrefix = category.toLowerCase();
            const filePath = `quizdata_${categoryPrefix}_${quiz.id}.js`;
            
            try {
                const response = await fetch(filePath, { method: 'HEAD' });
                if (response.ok) {
                    const lastModified = response.headers.get('last-modified');
                    if (lastModified) {
                        quiz.lastUpdated = new Date(lastModified).toISOString();
                    }
                }
            } catch (error) {
                console.warn(`Nepodařilo se zjistit datum pro ${filePath}:`, error);
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
