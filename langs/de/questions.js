var questions = [
    // Constructivism/Essentialism
    {
        question: '"Man wird nicht als Frau geboren, sondern man wird zu einer."',
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
        question: 'Unterschiede im Umgang mit verschiedenen Gruppen in unserer Gesellschaft sowie in deren Lebensqualität zeigen, dass Rassismus in unserer Gesellschaft immer noch allgegenwärtig ist.',
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
        question: 'Alle Wissenschaften, sogar Chemie und Biologie, sind nicht absolut, sondern werden von unserer Gesellschaft bestimmt.',
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
        question: 'Die Kategorien "Mann" und "Frau" sind soziale Konstrukte, die aufgegeben werden sollten.',
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
        question: 'Niemand ist von Natur aus zur Kriminalität geneigt.',
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
        question: 'Sexuelle Orientierung ist ein soziales Konstrukt.',
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
        question: 'Soziale Unterschiede zwischen ethnischen Gruppen lassen sich nicht biologisch erklären.',
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
        question: 'Die sozialen Rollen von Mann und Frau in unserer Gesellschaft können teilweise biologisch erklärt werden.',
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
        question: 'Hormonelle Unterschiede können manche individuellen Charakterunterschiede zwischen Frauen und Männern erklären.',
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
        question: 'Sexuelle Übergriffe können zum Teil durch die natürlichen Triebe von Männern erklärt werden.',
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
        question: 'Transgender Individuen werden nie wirklich das Geschlecht sein, dass sie gerne wären.',
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
        question: 'Mitglieder einer Nation oder Kultur haben unveränderliche Charakteristiken, die sie ausmachen.',
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
        question: 'Biologisch gesehen ist die menschliche Spezies für Heterosexualität gemacht.',
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
        question: 'Unabhängig vom Kontext ist Egoismus der Hauptantrieb der menschlichen Spezies.',
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
        question: 'Grenzen sollten irgendwann abgeschafft werden.',
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
        question: 'Menschen sollten für ihre Ideale einstehen, selbst wenn das dazu führt, dass sie ihr Land verraten.',
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
        question: 'Mein Land muss für die Schäden zahlen, die durch die Verbrechen verursacht worden sind, die es im Ausland begangen hat.',
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
        question: 'Wenn zwei Länder eine Wirtschaft, soziale Systeme, und ähnliche Umweltnormen teilen, stellt ein freier Handel zwischen ihnen keine Probleme dar.',
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
        question: 'Nationalchauvinismus ist bei sportlichen Wettkämpfen inakzeptabel.',
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
        question: 'Ich bin gleichermaßen besorgt um die Bewohner meines Landes und der Bewohner anderer Länder.',
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
        question: 'Ausländer, die in meinem Land leben, sollten politisch genauso handeln können, wie Menschen mit Staatsangehörigkeit.',
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
        question: 'Staatsbürger sollten gegenüber Ausländern Priorität haben.',
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
        question: 'Die Werte meines Landes sind denen anderer Länder überlegen.',
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
        question: 'Multikulturalismus ist eine Bedrohung für unsere Gesellschaft.',
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
        question: 'Ein guter Bürger ist ein Patriot.',
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
        question: 'Es ist legitim, dass ein Land militärisch im Ausland eingreift, um seine wirtschaftlichen Interessen zu verteidigen.',
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
        question: 'Geschichte sollte auf solch eine Weise unterrichtet werden, dass ein Gefühl der Zugehörigkeit zur Nation geschaffen wird.',
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
        question: 'Forschungen meines Landes sollten anderen Ländern nicht verfügbar sein.',
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
        question: 'Niemand sollte davon reich werden, ein Geschäft, Häuser, oder Land zu besitzen.',
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
        question: 'Löhne von Privatunternehmen sind eine Art des Diebstahls von den Arbeitern.',
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
        question: 'Es ist wichtig, dass Gesundheit eine Angelegenheit des Staates bleibt.',
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
        question: 'Energie und Transport/Mobilität sollten eine öffentliche Angelegenheit sein.',
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
        question: 'Patente sollten nicht existieren.',
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
        question: 'Es ist wichtig, Versammlungen zu haben, die unsere Produktion den Bedürfnissen der Verbraucher anpasst.',
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
        question: 'Der Arbeitsmarkt versklavt die Arbeiter.',
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
        question: 'Suche nach dem eigenen persönlichen Profit ist gesund für die Wirtschaft.',
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
        question: 'Leistungsunterschiede erklären unterschiedlichen Wohlstand zwischen zwei Personen.',
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
        question: 'Dass manche Schulen und Universitäten privat sind ist kein Problem.',
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
        question: 'Betriebsverlagerungen sind ein notwendiges Übel, um Produktion zu steigern.',
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
        question: 'Es ist in Ordnung, dass es reiche und arme Menschen gibt.',
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
        question: 'Industriesektoren in privater Hand sind in Ordnung.',
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
        question: 'Banken sollten privat bleiben.',
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
        question: 'Einkommen und Kapital sollten besteuert werden, um Reichtum umzuverteilen.',
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
        question: 'Das Rentenalter sollte gesenkt werden.',
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
        question: 'Willkürliche Entlassungen sollten verboten werden.',
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
        question: 'Es sollte einen Mindestlohn geben, um zu garantieren, dass ein Arbeiter von seiner Arbeit leben kann.',
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
        question: 'Private Monopole müssen vermieden werden.',
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
        question: 'Schulden der öffentlichen Träger (Staaten, Länder, Gemeinden...) müssen nicht unbedingt zurückgezahlt werden.',
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
        question: 'Manche Branchen oder Arten von Beschäftigung sollten finanziell unterstützt werden.',
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
        question: 'Die Marktwirtschaft ist optimal, wenn sie nicht reguliert wird.',
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
        question: 'Heutzutage ist ein Arbeitnehmer*in frei Entscheidungen zu treffen, wenn er/sie einen Vertrag mit seinem zukünftigen Arbeitgeber unterschreibt.',
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
        question: 'Es ist notwendig arbeitsrechtliche Regelungen abzuschaffen, damit die Unternehmen angeregt werden, Angestellte einzustellen.',
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
        question: 'Die legal erlaubte Arbeitszeit sollte erhöht werden.',
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
        question: 'Umweltfreundliche Regeln sollten von dem Massenverbrauch und nicht von einer staatlichen Instanz beeinflusst werden.',
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
        question: 'Sozialhilfe hält Leute davon ab, zu arbeiten.',
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
        question: 'Staatseigene Unternehmen sollten verwaltet werden, wie private Unternehmen d. h. nach der Logik des Marktes (Konkurrenz, Rentabilität).',
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
        question: 'Sitten und Traditionen sollten hinterfragt werden.',
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
        question: 'Ich habe kein Problem damit, wenn andere Sprachen neben der bisherigen Amtssprache oder statt dieser offizielle Landessprache werden.',
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
        question: 'Heiraten/Ehe sollte abgeschafft werden.',
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
        question: 'Ausländer bereichern unsere Kultur.',
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
        question: 'Der Einfluss von Religionen sollte verringert werden.',
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
        question: 'Eine Sprache wird von deren Nutzern und nicht von Akademikern definiert.',
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
        question: 'Sterbehilfe sollte erlaubt sein.',
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
        question: 'Homosexuellen sollten im Vergleich zu Heterosexuellen anders behandelt werden, z. B. Bei der Ehe, Adoption, Zeugung.',
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
        question: 'Die Todesstrafe ist unter bestimmten Umständen gerechtfertigt.',
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
        question: 'Technischer Fortschritt sollte die Gesellschaft nicht zu schnell verändern.',
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
        question: 'Die Schule sollte unsere Werte, Traditionen und grundlegendes Wissen lehren.',
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
        question: 'Abtreiben sollte auf spezifische Fälle begrenzt werden.',
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
        question: 'Das Hauptziel eines Paars ist mindestens ein Kind zu bekommen.',
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
        question: 'Abstinenz ist Verhütungsmitteln vorzuziehen, um die wahre Natur des Geschlechtsverkehrs zu bewahren.',
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
        question: 'Es ist nicht hinnehmbar, dass Tierarten durch menschliche Handlungen aussterben.',
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
        question: 'Gentechnisch veränderte Organismen sollten - abgesehen von Forschung und medizinischen Zwecken - verboten sein.',
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
        question: 'Wir müssen die globale Erderwärmung bekämpfen.',
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
        question: 'Wir sollten Veränderungen unserer Essgewohnheiten akzeptieren, um die Ausbeutung der Natur einzuschränken.',
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
        question: 'Es ist wichtig eine umweltfreundliche Landwirtschaft zu fördern, die die Artenvielfalt bewahrt, selbst wenn der Ertrag geringer ist.',
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
        question: 'Die Erhaltung von ländlichen Ökosystemen is wichtiger als Arbeitschaffung.',
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
        question: 'Die Verringerung von Abfall sollte durch die Verringerung von Produktion erfolgen.',
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
        question: 'Die Weltraumkolonisierung ist eine gute Alternative, um den Mangel an Rohstoffen (Seltene Metalle, Öl...) zu überwinden',
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
        question: 'Ökosysteme dauerhaft zu verändern, um menschliche Lebensqualität zu verbessern, ist gerechtfertigt.',
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
        question: 'Es ist notwendig, massiv in die Forschung zu investieren, um die Produktivität zu erhöhen.',
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
        question: 'Transhumanismus ist vorteilhaft, denn es erlaubt uns, unser Potenzial zu erweitern.',
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
        question: 'Kernspaltung, sofern vernünftig instand gehalten, ist eine gute Energiequelle.',
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
        question: 'Die Verwertung fossiler Brennstoffe ist notwendig.',
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
        question: 'Ein Ziel der Regierung sollte sein, starkes Wirtschaftswachstum zu erhalten.',
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
        question: 'Gefängnisse sollten abgeschafft werden.',
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
        question: 'Minimalstrafen für Vergehen oder Straftaten sind ungerecht.',
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
        question: 'Personen, die aus dem Gefängnis entlassen werden, sollten bei ihrer Wiedereingliederung in die Gesellschaft unterstützt werden.',
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
        question: 'Die Justiz sollte immer den Kontext und die Vorgeschichte des Verurteilten beachten und die Strafe dementsprechend anpassen.',
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
        question: 'Die Haftbedingungen im Gefängnis sollten deutlich verbessert werden.',
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
        question: 'Das Speichern persönlicher Daten sollte stark eingeschränkt und der Abgleich verschiedener Datenbanken sollte verboten werden.',
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
        question: 'Das Recht, anonym im Internet zu sein, sollte gewährleistet werden.',
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
        question: 'Der Zweck der Justiz sollte es sein, diejenigen zu bestrafen, die gegen das Gesetz verstoßen.',
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
        question: 'Die Polizei sollte bewaffnet sein.',
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
        question: 'Das Opfern von einigen bürgerlichen Freiheiten ist eine Notwendigkeit, um vor Terroranschlägen zu schützen.',
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
        question: 'Ordnung und Autorität sollten unter allen Umständen Respektiert werden.',
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
        question: 'Schwere Strafen sind effektiv, da sie abschreckend sind.',
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
        question: 'Es ist besser, jemand potenziell Gefährlichen präventiv zu verhaften, anstatt sich der Gefahr auszusetzen, dass er eine Straftat begeht.',
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
        question: 'Ein Generalstreik ist eine guter Weg um neue Rechte zu erwerben.',
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
        question: 'Bewaffneter Kampf in einem Land ist manchmal notwendig.',
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
        question: 'Ein Aufstand ist notwendig um die Gesellschaft nachhaltig zu verändern.',
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
        question: 'Aktivismus in bestehenden politischen Organisationen ist nicht relevant um Gesellschaft zu verändern.',
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
        question: 'Vom Staat organisierte Wahlen können die Herrschenden nicht hinterfragen.',
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
        question: 'Hacken ist ein legitimes Mittel in politischen Auseinandersetzungen.',
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
        question: 'Sabotage ist unter bestimmten Umständen legitim.',
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
        question: 'Aktivisten müssen immer in strikter Übereinstimmung mit dem Gesetz handeln.',
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
        question: 'Revolutionen werden immer schlecht enden.',
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
        question: 'Das System radikal zu verändern, ist kontraproduktiv. Wir sollten es eher schrittweise ändern.',
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
        question: 'Gewalt gegen Menschen ist niemals sinnvoll.',
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
        question: 'Wir sollten niemals Demonstranten unterstützen, die Gewalt anwenden.',
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
        question: 'Wir müssen Kompromisse mit der Opposition machen, um unsere Ideen umzusetzen.',
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
        question: 'Veränderung im eigenen Leben kann zu Veränderungen in der Gesellschaft führen.',
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
        question: 'Meine Religion muss so weit verbreitet werden wie möglich.',
        answer: 0,
        valuesYes: [{
                axis: 'reli',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Es ist eine kleine Gruppe, die bewusst und heimlich die Welt beherrscht.',
        answer: 0,
        valuesYes: [{
                axis: 'comp',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Eine gute Politik ist pragmatisch und hat keine Ideologie.',
        answer: 0,
        valuesYes: [{
                axis: 'prag',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Wir sollten eine Monarchie etablieren um die Menschen zu verbinden und unsere Souveränität zu schützen.',
        answer: 0,
        valuesYes: [{
                axis: 'mona',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Menschen sollten Tiere weder essen noch ausbeuten.',
        answer: 0,
        valuesYes: [{
                axis: 'vega',
                value: 3
            }],
        valuesNo: []
    },
    {
        question: 'Der Staat sollte abgeschafft werden.',
        answer: 0,
        valuesYes: [{
                axis: 'anar',
                value: 3
            }],
        valuesNo: []
    }
];