var questions = [
    // Constructivism/Essentialism
    {
        question: '&quot;Non si nasce donna, lo si diventa.&quot;',
        answer: 0,
        valuesYes: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Le diversità di trattamento e di qualità della vita nella nostra società mostrano come il razzismo sia sempre onnipresente.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Tutte le scienze, incluse la chimica e la biologia, non sono esenti da compromessi e vengono condizionate dalla società.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Le categorie &quot;donna&quot; e &quot;uomo&quot; sono costrutti sociali ai quali dovremmo rinunciare.',
        answer: 0,
        valuesYes: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Nessuno è per sua natura predisposto al crimine.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'L&#39;orientamento sessuale è un costrutto sociale',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'Le differenze sociali tra gruppi etnici non possono essere spiegate dalla biologia.',
        answer: 0,
        valuesYes: [{
                axis: 'c0',
                value: 3
            }],
        valuesNo: [{
                axis: 'c1',
                value: 3
            }]
    },
    {
        question: 'I ruoli sociali di donne e uomini possono parzialmente essere spiegati da differenze biologiche.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Le differenze ormonali possono spiegare alcune diversità nelle caratteristiche individuali tra donne e uomini.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Le aggressioni sessuali sono in parte causate da un naturale impulso presente del maschio.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 'c0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'Gli individui transgender non saranno mai davvero del genere che vorrebbero essere.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'I membri di una nazione o di una cultura possiedono alcune caratteristiche immutabili che li definiscono.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'Gli esseri umani sono biologicamente progettati per l&#39;eterosessualità.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    {
        question: 'L&#39;egoismo è la motivazione prevalente nella specie umana, a prescindere dal contesto.',
        answer: 0,
        valuesYes: [{
                axis: 'c1',
                value: 3
            }],
        valuesNo: [{
                axis: 'c0',
                value: 3
            }]
    },
    // Internationalism/Nationalism
    {
        question: 'I confini un giorno dovrebbero essere aboliti.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Le persone devono combattere per i propri ideali, anche se ciò le portasse a tradire il proprio paese.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Il mio paese deve pagare per i danni causati dai crimini che esso ha commesso in altri paesi.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Se due paesi hanno economie, sistemi sociali e norme ambientali simili, allora il libero mercato tra di loro non ha alcun impatto negativo.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Lo sciovinismo nazionale nelle competizioni sportive non è accettabile.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Mi preoccupo sia per gli abitanti del mio paese che per quelli degli altri paesi.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'Agli stranieri che vivono nel mio paese dovrebbe essere permesso di agire politicamente allo stesso modo di coloro che hanno la nazionalità.',
        answer: 0,
        valuesYes: [{
                axis: 'b0',
                value: 3
            }],
        valuesNo: [{
                axis: 'b1',
                value: 3
            }]
    },
    {
        question: 'I cittadini di un paese devono avere la priorità sugli stranieri.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'I valori del mio paese sono superiori a quelli degli altri paesi.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Il multiculturalismo è una minaccia per la nostra società.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'Un buon cittadino è un patriota.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'È legittimo per un paese intervenire militarmente per difendere i propri interessi economici.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'È necessario insegnare la storia al fine di creare un senso di appartenenza alla nazione.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    {
        question: 'La ricerca prodotta nel mio paese non dovrebbe essere messa a disposizione di altri paesi.',
        answer: 0,
        valuesYes: [{
                axis: 'b1',
                value: 3
            }],
        valuesNo: [{
                axis: 'b0',
                value: 3
            }]
    },
    // Communism/Capitalism
    {
        question: 'Nessuno dovrebbe arricchirsi per il fatto di possedere una attività economica, case o terreni.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Gli stipendi delle ditte private sono un furto nei confronti dei lavoratori.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'È importante che la sanità resti pubblica.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'I trasporti e l&#39;energia dovrebbero essere pubblici.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'I brevetti non dovrebbero esistere.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'È necessario creare dei comitati per razionare la produzione ai consumatori secondo le loro esigenze.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Il mercato del lavoro schiavizza i lavoratori.',
        answer: 0,
        valuesYes: [{
                axis: 'p0',
                value: 3
            }],
        valuesNo: [{
                axis: 'p1',
                value: 3
            }]
    },
    {
        question: 'Cercare il proprio profitto è salutare per l&#39;economia.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Il merito spiega le differenze di ricchezza tra due individui.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Il fatto che alcune scuole ed università siano private non è un problema.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'La delocalizzazione è un male necessario per migliorare la produzione.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'È accettabile che vi siano persone ricche e persone povere.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'È accettabile che alcuni settori dell&#39;industria siano privati.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    {
        question: 'Le banche devono rimanere private.',
        answer: 0,
        valuesYes: [{
                axis: 'p1',
                value: 3
            }],
        valuesNo: [{
                axis: 'p0',
                value: 3
            }]
    },
    // Regulation/Laissez-faire
    {
        question: 'Bisogna tassare ricavi e capitale per ridistribuire la ricchezza.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'L&#39;età pensionabile dovrebbe essere abbassata.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Il licenziamento di un dipendente dovrebbe essere vietato tranne se giustificato.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Bisognerebbe garantire livelli minimi di salario in modo che un lavoratore o una lavoratrice possa vivere del proprio lavoro.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'È necessario evitare il monopolio privato.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'I prestiti contratti nella sfera pubblica (stato, regioni, collettività...) non devono necessariamente essere restituiti.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'Alcuni settori o tipi di impiego dovrebbero essere sostenuti finanziariamente.',
        answer: 0,
        valuesYes: [{
                axis: 'm0',
                value: 3
            }],
        valuesNo: [{
                axis: 'm1',
                value: 3
            }]
    },
    {
        question: 'L&#39;economia di mercato è ottimale quando non è regolamentata.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Al giorno d&#39;oggi un dipendente è libero di scegliere quando firma un contratto con il suo futuro datore di lavoro',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'È necessario rimuovere i regolamenti nella legislazione del lavoro per incoraggiare le imprese ad assumere.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'L&#39;orario di lavoro stabilito per legge dovrebbe essere aumentato.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Le norme riguardanti l&#39;ambiente dovrebbero essere influenzate dai consumi di massa e non da un&#39;autorità.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Gli aiuti sociali scoraggiano le persone dal lavorare.',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    {
        question: 'Le aziende statali devono essere gestite come quelle private e seguire la logica del mercato (concorrenza, redditività...).',
        answer: 0,
        valuesYes: [{
                axis: 'm1',
                value: 3
            }],
        valuesNo: [{
                axis: 'm0',
                value: 3
            }]
    },
    // Progressive/Conservative
    {
        question: 'Le tradizioni devono essere messe in discussione.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Non è un problema se altre lingue ufficiali vengono aggiunte o vanno a sostituire la lingua ufficiale del mio paese.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Il matrimonio dovrebbe essere abolito.',
        answer: 0,
        valuesYes: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Gli stranieri arricchiscono la nostra cultura.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'L&#39;influenza della religione dovrebbe diminuire.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Una lingua è definita da chi la usa, non dagli studiosi.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'L&#39;eutanasia dovrebbe essere legale.',
        answer: 0,
        valuesYes: [{
                axis: 's0',
                value: 3
            }],
        valuesNo: [{
                axis: 's1',
                value: 3
            }]
    },
    {
        question: 'Gli omosessuali non devono avere gli stessi diritti degli eterosessuali per quanto riguarda il matrimonio, l&#39;avere figli, l&#39;adozione o la procreazione.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'In alcuni casi particolari, la pena di morte è giustificata.',
        answer: 0,
        valuesYes: [
            {
                axis: 's1',
                value: 3
            },
            {
                axis: 'j1',
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'j0',
                value: 3
            }
        ]
    },
    {
        question: 'Il progresso tecnico non dovrebbe cambiare la società troppo rapidamente.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'La scuola dovrebbe insegnare soprattutto i nostri valori, le tradizioni e le conoscenze fondamentali.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'L&#39;aborto dovrebbe essere limitato a casi particolari.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [
            {
                axis: 's0',
                value: 3
            },
            {
                axis: 'femi',
                value: 3
            }
        ]
    },
    {
        question: 'L&#39;obiettivo principale di una coppia è di fare almeno un figlio.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    {
        question: 'L&#39;astinenza dovrebbe essere preferita alla contraccezione, per preservare la vera natura dell&#39;atto sessuale.',
        answer: 0,
        valuesYes: [{
                axis: 's1',
                value: 3
            }],
        valuesNo: [{
                axis: 's0',
                value: 3
            }]
    },
    // Ecology/Production
    {
        question: 'Non è accettabile che le azioni umane portino all&#39;estinzione della specie.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Gli OGM dovrebbero essere vietati, se non per scopi di ricerca o medici.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Dobbiamo combattere il riscaldamento globale.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'Dovremmo accettare cambiamenti nel modo in cui consumiamo il cibo in modo da limitare lo sfruttamento della natura.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'È importante incoraggiare un&#39;agricoltura che mantenga una biodiversità alimentare, anche se la resa fosse inferiore.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'La conservazione degli ecosistemi non urbani è più importante rispetto alla creazione di posti di lavoro.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'La riduzione dei rifiuti dovrebbe essere ottenuta riducendo la produzione.',
        answer: 0,
        valuesYes: [{
                axis: 'e0',
                value: 3
            }],
        valuesNo: [{
                axis: 'e1',
                value: 3
            }]
    },
    {
        question: 'La colonizzazione dello spazio è una buona alternativa per supplire alla mancanza di materie prime sulla terra (metalli rari, petrolio...)',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Trasformare gli ecosistemi in maniera durevole per migliorare la qualità della vita degli esseri umani è legittimo.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'È necessario investire massicciamente nella ricerca per migliorare la produttività.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Il transumanesimo sarà utile perché ci permetterà di migliorare le nostre capacità.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'La fissione nucleare, se ben controllata, è una buona fonte di energia.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Lo sfruttamento dei combustibili fossili è necessario.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    {
        question: 'Mantenere una crescita economica forte dovrebbe essere un obiettivo per il governo.',
        answer: 0,
        valuesYes: [{
                axis: 'e1',
                value: 3
            }],
        valuesNo: [{
                axis: 'e0',
                value: 3
            }]
    },
    // Rehabilitative Justice/Punitive Justice
    {
        question: 'Il carcere non dovrebbe più esistere.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Non è giusto fissare una pena o sanzione minima per un reato o una contravvenzione.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Gli individui che escono di prigione dovrebbero essere accompagnati nel loro reinserimento.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'La giustizia deve sempre prendere in considerazione il contesto e il passato del condannato e di conseguenza adattare la pena.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Le condizioni di vita in carcere dovrebbero essere molto migliorate.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'L&#39;archiviazione e la memorizzazione dei dati personali deve essere limitata in maniera rigorosa e il controllo incrociato su database dovrebbe essere vietato.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Il diritto a essere anonimi su Internet deve essere garantito.',
        answer: 0,
        valuesYes: [{
                axis: 'j0',
                value: 3
            }],
        valuesNo: [{
                axis: 'j1',
                value: 3
            }]
    },
    {
        question: 'Lo scopo del sistema giudiziario dovrebbe essere quello di punire coloro che hanno contravvenuto alla legge.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'La polizia deve essere armata.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Il sacrificio di alcune libertà civili è necessario per essere protetti da atti terroristici.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Legge e autorità devono essere rispettate in ogni circostanza.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'Pene pesanti sono efficaci perché dissuasive.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    {
        question: 'È meglio arrestare qualcuno potenzialmente pericoloso in maniera preventiva piuttosto che correre il rischio che commetta un reato.',
        answer: 0,
        valuesYes: [{
                axis: 'j1',
                value: 3
            }],
        valuesNo: [{
                axis: 'j0',
                value: 3
            }]
    },
    // Revolution/Reform
    {
        question: 'Lo sciopero di massa è un buon modo di acquisire nuovi diritti.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'La lotta armata in un paese a volte è necessaria.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'L&#39;insurrezione è necessaria per cambiare profondamente la società.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'L&#39;attivismo in seno a organizzazioni politiche esistenti non serve a cambiare la società.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Le elezioni organizzate dallo Stato non possono mettere in questione i poteri in carica.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Gli hacker hanno un ruolo legittimo nella lotta politica.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Il sabotaggio è legittimo in determinate condizioni.',
        answer: 0,
        valuesYes: [{
                axis: 't0',
                value: 3
            }],
        valuesNo: [{
                axis: 't1',
                value: 3
            }]
    },
    {
        question: 'Gli attivisti devono sempre agire in conformità con la legge.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Le rivoluzioni finiscono sempre male.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Cambiare il sistema radicalmente è controproducente. Dovremmo piuttosto trasformarlo progressivamente.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'La violenza contro i singoli non porta mai ad alcun risultato.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Bisogna sempre prendere le distanze dai manifestanti che usano violenza.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'Bisogna fare compromessi con l&#39;opposizione per far passare le nostre idee.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    {
        question: 'I cambiamenti nel modo di vivere dei singoli possono indurre cambiamenti nella società.',
        answer: 0,
        valuesYes: [{
                axis: 't1',
                value: 3
            }],
        valuesNo: [{
                axis: 't0',
                value: 3
            }]
    },
    // Bonus Badges
    {
        question: 'La mia religione deve essere diffusa quanto più possibile.',
        answer: 0,
        valuesYes: [{
                axis: 'reli',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Esiste un piccolo gruppo di persone che segretamente e consapevolmente controlla il mondo.',
        answer: 0,
        valuesYes: [{
                axis: 'comp',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Una buona politica è una politica pragmatica senza ideologia.',
        answer: 0,
        valuesYes: [{
                axis: 'prag',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Bisogna stabilire una monarchia per unire il popolo e preservare la nostra sovranità.',
        answer: 0,
        valuesYes: [{
                axis: 'mona',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Gli esseri umani non dovrebbero mangiare né sfruttare gli animali.',
        answer: 0,
        valuesYes: [{
                axis: 'vega',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Lo Stato dovrebbe essere abolito.',
        answer: 0,
        valuesYes: [{
                axis: 'anar',
                value: 3
            }],
        valuesNo: []
    }
];