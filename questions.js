const QUESTIONS = [
  {
    "field": "HF1",
    "topic": "Duales System",
    "q": "Welche Lernorte tragen die duale Berufsausbildung typischerweise gemeinsam?",
    "a": [
      "Universität und Agentur für Arbeit",
      "IHK und Finanzamt",
      "Nur der Betrieb",
      "Betrieb und Berufsschule"
    ],
    "correct": [
      3
    ],
    "exp": "Die duale Ausbildung findet im Betrieb und in der Berufsschule statt. Beide Lernorte ergänzen sich.",
    "type": "single",
    "id": 1
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "q": "Welche Aussage zur Ausbildungsordnung ist richtig?",
    "a": [
      "Sie ersetzt den Ausbildungsvertrag.",
      "Sie gilt nur für die Berufsschule.",
      "Sie wird nur mündlich vereinbart.",
      "Sie ist verbindliche Grundlage für einen anerkannten Ausbildungsberuf."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung regelt u. a. Berufsbild, Dauer, Rahmenplan und Prüfungsanforderungen.",
    "type": "single",
    "id": 2
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsrahmenplan",
    "q": "Wozu dient der Ausbildungsrahmenplan?",
    "a": [
      "Als Ersatz für den Ausbildungsnachweis.",
      "Als Urlaubsantrag.",
      "Als Gehaltsabrechnung.",
      "Als sachliche und zeitliche Orientierung für betriebliche Ausbildungsinhalte."
    ],
    "correct": [
      3
    ],
    "exp": "Der Rahmenplan wird in den betrieblichen Ausbildungsplan übertragen.",
    "type": "single",
    "id": 3
  },
  {
    "field": "HF1",
    "topic": "Betrieblicher Ausbildungsplan",
    "q": "Warum braucht der Betrieb einen betrieblichen Ausbildungsplan?",
    "a": [
      "Damit die Probezeit entfällt.",
      "Damit keine Berufsschule nötig ist.",
      "Damit Inhalte zeitlich und sachlich geplant im Betrieb vermittelt werden.",
      "Damit Azubis keine Prüfung ablegen müssen."
    ],
    "correct": [
      2
    ],
    "exp": "Der betriebliche Ausbildungsplan konkretisiert die Ausbildungsordnung für die reale Ausbildung im Unternehmen.",
    "type": "single",
    "id": 4
  },
  {
    "field": "HF1",
    "topic": "Eignung der Ausbildungsstätte",
    "q": "Wann ist eine Ausbildungsstätte geeignet?",
    "a": [
      "Wenn sie mindestens 100 Mitarbeitende hat.",
      "Wenn nur Theorie vermittelt wird.",
      "Wenn keine Ausbilder benannt sind.",
      "Wenn die erforderlichen beruflichen Fertigkeiten, Kenntnisse und Fähigkeiten vermittelt werden können."
    ],
    "correct": [
      3
    ],
    "exp": "Entscheidend sind Ausstattung, Arbeitsprozesse und Personal, nicht eine feste Mindestgröße.",
    "type": "single",
    "id": 5
  },
  {
    "field": "HF1",
    "topic": "Persönliche Eignung",
    "q": "Was kann gegen die persönliche Eignung eines Ausbilders sprechen?",
    "a": [
      "Ein anderer Wohnort.",
      "Teilzeitbeschäftigung.",
      "Ein mittlerer Schulabschluss.",
      "Schwere oder wiederholte Verstöße gegen Ausbildungsvorschriften."
    ],
    "correct": [
      3
    ],
    "exp": "Persönliche Eignung bedeutet insbesondere Zuverlässigkeit und rechtskonformes Verhalten.",
    "type": "single",
    "id": 6
  },
  {
    "field": "HF1",
    "topic": "Fachliche Eignung",
    "q": "Was gehört zur fachlichen Eignung?",
    "a": [
      "Nur ein Führerschein.",
      "Nur Sympathie.",
      "Berufliche Fachkompetenz und berufs- und arbeitspädagogische Eignung.",
      "Nur Alter über 40 Jahre."
    ],
    "correct": [
      2
    ],
    "exp": "Fachliche Eignung umfasst berufliche Handlungsfähigkeit und pädagogische Befähigung.",
    "type": "single",
    "id": 7
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsbedarf",
    "q": "Was gehört zur Ermittlung des Ausbildungsbedarfs?",
    "a": [
      "Fachkräftebedarf, Kapazitäten und geeignete Ausbildungsberufe prüfen.",
      "Nur die Farbe der Arbeitskleidung.",
      "Nur die Anzahl der Kaffeemaschinen.",
      "Nur private Wünsche des Ausbilders."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbildungsplanung orientiert sich am Personalbedarf und an betrieblichen Möglichkeiten.",
    "type": "single",
    "id": 8
  },
  {
    "field": "HF1",
    "topic": "Verbundausbildung",
    "q": "Wann ist Verbundausbildung sinnvoll?",
    "a": [
      "Wenn man keinen Vertrag schließen will.",
      "Wenn Azubis gar nicht im Betrieb lernen sollen.",
      "Wenn keine Berufsschule besucht werden soll.",
      "Wenn ein Betrieb nicht alle Inhalte selbst vermitteln kann."
    ],
    "correct": [
      3
    ],
    "exp": "Kooperationen können fehlende Ausbildungsinhalte abdecken.",
    "type": "single",
    "id": 9
  },
  {
    "field": "HF1",
    "topic": "Nutzen Ausbildung",
    "q": "Was ist ein Vorteil betrieblicher Ausbildung?",
    "a": [
      "Wegfall aller Arbeitgeberpflichten.",
      "Keine Prüfungspflichten.",
      "Keine Kosten.",
      "Passgenaue Fachkräftesicherung."
    ],
    "correct": [
      3
    ],
    "exp": "Eigene Ausbildung bindet und entwickelt Nachwuchskräfte.",
    "type": "single",
    "id": 10
  },
  {
    "field": "HF2",
    "topic": "Bewerberauswahl",
    "q": "Was macht ein Auswahlverfahren fairer?",
    "a": [
      "Vorher festgelegte, berufsbezogene Kriterien.",
      "Fragen nach Familienplanung.",
      "Spontane Bauchentscheidung ohne Dokumentation.",
      "Auswahl nach Foto."
    ],
    "correct": [
      0
    ],
    "exp": "Strukturierte Kriterien reduzieren Diskriminierung und erhöhen Aussagekraft.",
    "type": "single",
    "id": 11
  },
  {
    "field": "HF2",
    "topic": "AGG",
    "q": "Welche Frage ist im Vorstellungsgespräch grundsätzlich unzulässig?",
    "a": [
      "Sind Sie schwanger?",
      "Welche Erwartungen haben Sie an die Ausbildung?",
      "Warum interessiert Sie der Beruf?",
      "Welche Erfahrungen haben Sie im Team?"
    ],
    "correct": [
      0
    ],
    "exp": "Fragen nach Schwangerschaft sind diskriminierungsrelevant.",
    "type": "single",
    "id": 12
  },
  {
    "field": "HF2",
    "topic": "Ausbildungsvertrag",
    "q": "Was muss vor Ausbildungsbeginn vorliegen?",
    "a": [
      "Eine mündliche Zusage reicht immer aus.",
      "Ein Kaufvertrag.",
      "Die schriftliche Vertragsniederschrift mit wesentlichen Inhalten.",
      "Ein bestandener Abschluss des Ausbilders in jedem Schulfach."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsvertrag muss rechtzeitig schriftlich niedergelegt werden.",
    "type": "single",
    "id": 13
  },
  {
    "field": "HF2",
    "topic": "Minderjährige",
    "q": "Wer unterschreibt zusätzlich bei minderjährigen Auszubildenden?",
    "a": [
      "Die Polizei.",
      "Gesetzliche Vertreter.",
      "Ein Kunde.",
      "Der Klassensprecher."
    ],
    "correct": [
      1
    ],
    "exp": "Minderjährige brauchen die Zustimmung der gesetzlichen Vertreter.",
    "type": "single",
    "id": 14
  },
  {
    "field": "HF2",
    "topic": "Probezeit",
    "q": "Welche Probezeit ist in der Berufsausbildung zulässig?",
    "a": [
      "Genau 12 Monate.",
      "Mindestens 1 Monat, höchstens 4 Monate.",
      "Nie länger als 2 Tage.",
      "Immer 6 Monate."
    ],
    "correct": [
      1
    ],
    "exp": "Das BBiG regelt die besondere Probezeit in der Ausbildung.",
    "type": "single",
    "id": 15
  },
  {
    "field": "HF2",
    "topic": "Eintragung",
    "q": "Wer trägt IHK-Ausbildungsverhältnisse in das Verzeichnis ein?",
    "a": [
      "Das Finanzamt.",
      "Der Betriebsrat allein.",
      "Die Krankenkasse.",
      "Die zuständige Stelle, z. B. IHK."
    ],
    "correct": [
      3
    ],
    "exp": "Die zuständige Stelle prüft und registriert die Verträge.",
    "type": "single",
    "id": 16
  },
  {
    "field": "HF2",
    "topic": "Onboarding",
    "q": "Was gehört zu einem guten Ausbildungsstart?",
    "a": [
      "Begrüßung, Ansprechpartner, Regeln, Sicherheitsunterweisung und Plan.",
      "Sofortige Abschlussprüfung.",
      "Nur Schlüsselübergabe.",
      "Keine Informationen, damit Selbstständigkeit entsteht."
    ],
    "correct": [
      0
    ],
    "exp": "Orientierung am Anfang reduziert Unsicherheit und schafft Motivation.",
    "type": "single",
    "id": 17
  },
  {
    "field": "HF2",
    "topic": "Datenschutz",
    "q": "Wie sind Bewerbungsunterlagen zu behandeln?",
    "a": [
      "An alle Kunden versenden.",
      "Öffentlich im Betrieb aushängen.",
      "Vertraulich und nur zweckgebunden.",
      "Unbegrenzt privat speichern."
    ],
    "correct": [
      2
    ],
    "exp": "Bewerberdaten unterliegen Datenschutz und Vertraulichkeit.",
    "type": "single",
    "id": 18
  },
  {
    "field": "HF2",
    "topic": "JArbSchG",
    "q": "Ein 17-jähriger Auszubildender ist rechtlich ein ...",
    "a": [
      "Senior.",
      "Jugendlicher.",
      "Prüfer.",
      "Kind."
    ],
    "correct": [
      1
    ],
    "exp": "Jugendliche sind 15 bis unter 18 Jahre alt.",
    "type": "single",
    "id": 19
  },
  {
    "field": "HF2",
    "topic": "Ärztliche Untersuchung",
    "q": "Was gilt bei Jugendlichen vor Ausbildungsbeginn?",
    "a": [
      "Eine Erstuntersuchung nach JArbSchG ist erforderlich.",
      "Sie ist nur bei Hochschulstudium nötig.",
      "Sie ersetzt den Ausbildungsvertrag.",
      "Sie ist immer verboten."
    ],
    "correct": [
      0
    ],
    "exp": "Jugendliche müssen vor Beginn ärztlich untersucht worden sein.",
    "type": "single",
    "id": 20
  },
  {
    "field": "HF3",
    "topic": "Lernziele",
    "q": "Welche drei Lernzielbereiche werden häufig unterschieden?",
    "a": [
      "Kognitiv, affektiv, psychomotorisch.",
      "Brutto, netto, steuerfrei.",
      "Rot, blau, grün.",
      "Kurz, mittel, lang."
    ],
    "correct": [
      0
    ],
    "exp": "Lernziele können Wissen, Einstellungen und praktische Fertigkeiten betreffen.",
    "type": "single",
    "id": 21
  },
  {
    "field": "HF3",
    "topic": "Feinlernziel",
    "q": "Was beschreibt ein Feinlernziel?",
    "a": [
      "Den Urlaubskalender.",
      "Das Jahresbudget.",
      "Ein konkret beobachtbares Lernergebnis.",
      "Nur die Stimmung des Ausbilders."
    ],
    "correct": [
      2
    ],
    "exp": "Feinlernziele sollen möglichst überprüfbar formuliert werden.",
    "type": "single",
    "id": 22
  },
  {
    "field": "HF3",
    "topic": "Vier-Stufen-Methode",
    "q": "Welche Reihenfolge passt zur Vier-Stufen-Methode?",
    "a": [
      "Planen – Bezahlen – Feiern – Schlafen.",
      "Lesen – Schweigen – Warten – Beenden.",
      "Vorbereiten – Vormachen/Erklären – Nachmachen lassen – Üben/Festigen.",
      "Prüfen – Kündigen – Mahnen – Vergessen."
    ],
    "correct": [
      2
    ],
    "exp": "Die Methode eignet sich besonders für praktische Fertigkeiten.",
    "type": "single",
    "id": 23
  },
  {
    "field": "HF3",
    "topic": "Leittextmethode",
    "q": "Wozu dient die Leittextmethode?",
    "a": [
      "Selbstständiges Erarbeiten mit Leitfragen fördern.",
      "Nur Frontalvortrag halten.",
      "Prüfungen abschaffen.",
      "Jede Eigenaktivität verhindern."
    ],
    "correct": [
      0
    ],
    "exp": "Leitfragen führen den Lernprozess, ohne jeden Schritt vorzugeben.",
    "type": "single",
    "id": 24
  },
  {
    "field": "HF3",
    "topic": "Projektmethode",
    "q": "Welche Kompetenz fördert Projektarbeit besonders?",
    "a": [
      "Passives Zuhören.",
      "Selbstständiges Planen, Durchführen und Bewerten.",
      "Nur Abschreiben.",
      "Nur Auswendiglernen ohne Anwendung."
    ],
    "correct": [
      1
    ],
    "exp": "Projekte bilden vollständige berufliche Handlungen ab.",
    "type": "single",
    "id": 25
  },
  {
    "field": "HF3",
    "topic": "Vollständige Handlung",
    "q": "Welche Phase gehört zur vollständigen Handlung?",
    "a": [
      "Nur Durchführen.",
      "Nur Bewerten.",
      "Informieren, Planen, Entscheiden, Durchführen, Kontrollieren, Bewerten.",
      "Nur Warten."
    ],
    "correct": [
      2
    ],
    "exp": "Die vollständige Handlung stärkt berufliche Handlungskompetenz.",
    "type": "single",
    "id": 26
  },
  {
    "field": "HF3",
    "topic": "Feedback",
    "q": "Wie sollte Feedback sein?",
    "a": [
      "Konkret, zeitnah, wertschätzend und verhaltensbezogen.",
      "Pauschal und verletzend.",
      "Nur anonym und unverständlich.",
      "Ausschließlich am Ausbildungsende."
    ],
    "correct": [
      0
    ],
    "exp": "Gutes Feedback fördert Lernen und Motivation.",
    "type": "single",
    "id": 27
  },
  {
    "field": "HF3",
    "topic": "Konflikt",
    "q": "Ein Azubi kommt wiederholt zu spät. Was ist pädagogisch zuerst sinnvoll?",
    "a": [
      "Sofort ohne Gespräch kündigen.",
      "Ignorieren.",
      "Gespräch führen, Ursachen klären, Erwartungen festlegen.",
      "Öffentlich bloßstellen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbilder klären Ursachen, setzen Grenzen und dokumentieren Schritte.",
    "type": "single",
    "id": 28
  },
  {
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "q": "Wozu dient der Ausbildungsnachweis?",
    "a": [
      "Dokumentation von Inhalten und Verlauf der Ausbildung.",
      "Vertrag der Berufsschule.",
      "Ersatz der Abschlussprüfung.",
      "Privater Kalender ohne Bedeutung."
    ],
    "correct": [
      0
    ],
    "exp": "Der Nachweis ist wichtig für Kontrolle und Prüfungszulassung.",
    "type": "single",
    "id": 29
  },
  {
    "field": "HF3",
    "topic": "Beurteilungsfehler",
    "q": "Was ist der Halo-Effekt?",
    "a": [
      "Ein auffälliges Merkmal überstrahlt die Gesamtbeurteilung.",
      "Alle Merkmale werden perfekt getrennt.",
      "Nur Maschinen beurteilen.",
      "Der Azubi beurteilt den Ausbilder."
    ],
    "correct": [
      0
    ],
    "exp": "Einzelne Eindrücke können Bewertungen verzerren.",
    "type": "single",
    "id": 30
  },
  {
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "q": "Wer meldet normalerweise zur Abschlussprüfung an?",
    "a": [
      "Nur der Azubi ohne Betrieb.",
      "Immer der Nachbar.",
      "Niemand, alles läuft automatisch.",
      "Der Ausbildende/Betrieb bei der zuständigen Stelle."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb achtet auf Fristen und Unterlagen.",
    "type": "single",
    "id": 31
  },
  {
    "field": "HF4",
    "topic": "Zulassung",
    "q": "Was ist häufig wichtig für die Prüfungszulassung?",
    "a": [
      "Mindestalter 30 Jahre.",
      "Ausbildungszeit und geführter Ausbildungsnachweis.",
      "Lieblingsfarbe.",
      "Führerschein Klasse B."
    ],
    "correct": [
      1
    ],
    "exp": "Zulassungsvoraussetzungen ergeben sich aus Prüfungsordnung und BBiG.",
    "type": "single",
    "id": 32
  },
  {
    "field": "HF4",
    "topic": "Bestehen",
    "q": "Wann endet die Ausbildung bei bestandener Abschlussprüfung grundsätzlich?",
    "a": [
      "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss.",
      "Schon bei Anmeldung.",
      "Immer am 31. Dezember.",
      "Erst fünf Jahre später."
    ],
    "correct": [
      0
    ],
    "exp": "Mit Bestehen endet das Ausbildungsverhältnis vorzeitig zum Ergebniszeitpunkt.",
    "type": "single",
    "id": 33
  },
  {
    "field": "HF4",
    "topic": "Nichtbestehen",
    "q": "Was kann der Azubi bei nicht bestandener Prüfung verlangen?",
    "a": [
      "Keine Wiederholung.",
      "Sofortige Verbeamtung.",
      "Verlängerung bis zur nächstmöglichen Wiederholungsprüfung innerhalb gesetzlicher Grenzen.",
      "Automatische unendliche Verlängerung."
    ],
    "correct": [
      2
    ],
    "exp": "Das BBiG ermöglicht eine Verlängerung zur Wiederholungsprüfung.",
    "type": "single",
    "id": 34
  },
  {
    "field": "HF4",
    "topic": "Zeugnis",
    "q": "Welches Zeugnis muss am Ende ausgestellt werden?",
    "a": [
      "Ein Steuerbescheid.",
      "Nur eine Sprachnachricht.",
      "Keines.",
      "Ein schriftliches Ausbildungszeugnis."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildende muss ein Ausbildungszeugnis ausstellen.",
    "type": "single",
    "id": 35
  },
  {
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "q": "Was enthält ein qualifiziertes Zeugnis zusätzlich?",
    "a": [
      "Nur die Adresse der IHK.",
      "Angaben zu Leistung und Verhalten.",
      "Nur das Wetter.",
      "Nur die Kontonummer."
    ],
    "correct": [
      1
    ],
    "exp": "Auf Verlangen ist ein qualifiziertes Zeugnis mit Leistung und Verhalten auszustellen.",
    "type": "single",
    "id": 36
  },
  {
    "field": "HF4",
    "topic": "Übernahme",
    "q": "Was gehört in ein Übernahmegespräch?",
    "a": [
      "Perspektive, Einsatzbereich, Leistung und Vertragsbedingungen.",
      "Nur Smalltalk.",
      "Keine Rückfragen zulassen.",
      "Bewusstes Verschweigen aller Informationen."
    ],
    "correct": [
      0
    ],
    "exp": "Transparenz unterstützt Bindung und Planung.",
    "type": "single",
    "id": 37
  },
  {
    "field": "HF4",
    "topic": "Prüfungsvorbereitung",
    "q": "Was ist gute Prüfungsvorbereitung?",
    "a": [
      "Nur Druck aufbauen.",
      "Erst am Prüfungstag beginnen.",
      "Berufsschule ignorieren.",
      "Lernstand analysieren, üben, simulieren, Feedback geben."
    ],
    "correct": [
      3
    ],
    "exp": "Prüfungsvorbereitung braucht Struktur, Übung und Rückmeldung.",
    "type": "single",
    "id": 38
  },
  {
    "field": "HF4",
    "topic": "Kündigung nach Probezeit",
    "q": "Wann kann der Azubi nach der Probezeit ordentlich kündigen?",
    "a": [
      "Wenn er die Berufsausbildung aufgeben oder eine andere Berufstätigkeit lernen will.",
      "Nie.",
      "Immer ohne Grund und ohne Frist.",
      "Nur wenn der Ausbilder zustimmt."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Probezeit gelten besondere Kündigungsregeln.",
    "type": "single",
    "id": 39
  },
  {
    "field": "HF4",
    "topic": "Weiterbildung",
    "q": "Wie unterstützt der Ausbilder nach Ausbildungsende?",
    "a": [
      "Prüfungsergebnisse geheim halten.",
      "Zeugnis verweigern.",
      "Jede Entwicklung verbieten.",
      "Über Weiterbildungs- und Entwicklungsmöglichkeiten informieren."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbilder können berufliche Perspektiven aufzeigen.",
    "type": "single",
    "id": 40
  },
  {
    "field": "HF1",
    "topic": "BBiG",
    "q": "Welche Aussage trifft am ehesten zu: BBiG?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      1
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 41
  },
  {
    "field": "HF1",
    "topic": "BBiG",
    "q": "Was sollte ein Ausbilder beim Thema „BBiG“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen."
    ],
    "correct": [
      3
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 42
  },
  {
    "field": "HF1",
    "topic": "BBiG",
    "q": "Welche Antwort beschreibt „BBiG“ im AEVO-Kontext richtig?",
    "a": [
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      0
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 43
  },
  {
    "field": "HF1",
    "topic": "BBiG",
    "q": "Ein Betrieb prüft „BBiG“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      0
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 44
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "q": "Welche Aussage trifft am ehesten zu: Ausbildungsordnung?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 45
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "q": "Was sollte ein Ausbilder beim Thema „Ausbildungsordnung“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 46
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "q": "Welche Antwort beschreibt „Ausbildungsordnung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 47
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "q": "Ein Betrieb prüft „Ausbildungsordnung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      1
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 48
  },
  {
    "field": "HF1",
    "topic": "Rahmenplan",
    "q": "Welche Aussage trifft am ehesten zu: Rahmenplan?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 49
  },
  {
    "field": "HF1",
    "topic": "Rahmenplan",
    "q": "Was sollte ein Ausbilder beim Thema „Rahmenplan“ besonders beachten?",
    "a": [
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 50
  },
  {
    "field": "HF1",
    "topic": "Rahmenplan",
    "q": "Welche Antwort beschreibt „Rahmenplan“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 51
  },
  {
    "field": "HF1",
    "topic": "Rahmenplan",
    "q": "Ein Betrieb prüft „Rahmenplan“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 52
  },
  {
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "q": "Welche Aussage trifft am ehesten zu: Eignung Betrieb?",
    "a": [
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      0
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 53
  },
  {
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "q": "Was sollte ein Ausbilder beim Thema „Eignung Betrieb“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 54
  },
  {
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "q": "Welche Antwort beschreibt „Eignung Betrieb“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 55
  },
  {
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "q": "Ein Betrieb prüft „Eignung Betrieb“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 56
  },
  {
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "q": "Welche Aussage trifft am ehesten zu: Eignung Ausbilder?",
    "a": [
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 57
  },
  {
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "q": "Was sollte ein Ausbilder beim Thema „Eignung Ausbilder“ besonders beachten?",
    "a": [
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 58
  },
  {
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "q": "Welche Antwort beschreibt „Eignung Ausbilder“ im AEVO-Kontext richtig?",
    "a": [
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 59
  },
  {
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "q": "Ein Betrieb prüft „Eignung Ausbilder“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 60
  },
  {
    "field": "HF1",
    "topic": "Kooperation",
    "q": "Welche Aussage trifft am ehesten zu: Kooperation?",
    "a": [
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      0
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 61
  },
  {
    "field": "HF1",
    "topic": "Kooperation",
    "q": "Was sollte ein Ausbilder beim Thema „Kooperation“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 62
  },
  {
    "field": "HF1",
    "topic": "Kooperation",
    "q": "Welche Antwort beschreibt „Kooperation“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      1
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 63
  },
  {
    "field": "HF1",
    "topic": "Kooperation",
    "q": "Ein Betrieb prüft „Kooperation“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken."
    ],
    "correct": [
      3
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 64
  },
  {
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "q": "Welche Aussage trifft am ehesten zu: Bedarfsplanung?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 65
  },
  {
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "q": "Was sollte ein Ausbilder beim Thema „Bedarfsplanung“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 66
  },
  {
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "q": "Welche Antwort beschreibt „Bedarfsplanung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 67
  },
  {
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "q": "Ein Betrieb prüft „Bedarfsplanung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 68
  },
  {
    "field": "HF1",
    "topic": "Lernorte",
    "q": "Welche Aussage trifft am ehesten zu: Lernorte?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 69
  },
  {
    "field": "HF1",
    "topic": "Lernorte",
    "q": "Was sollte ein Ausbilder beim Thema „Lernorte“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Betrieb und Berufsschule wirken im dualen System zusammen."
    ],
    "correct": [
      3
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 70
  },
  {
    "field": "HF1",
    "topic": "Lernorte",
    "q": "Welche Antwort beschreibt „Lernorte“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      2
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 71
  },
  {
    "field": "HF1",
    "topic": "Lernorte",
    "q": "Ein Betrieb prüft „Lernorte“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      2
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 72
  },
  {
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "q": "Welche Aussage trifft am ehesten zu: Nachhaltigkeit?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden."
    ],
    "correct": [
      3
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 73
  },
  {
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "q": "Was sollte ein Ausbilder beim Thema „Nachhaltigkeit“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden."
    ],
    "correct": [
      3
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 74
  },
  {
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "q": "Welche Antwort beschreibt „Nachhaltigkeit“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      1
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 75
  },
  {
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "q": "Ein Betrieb prüft „Nachhaltigkeit“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      1
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 76
  },
  {
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "q": "Welche Aussage trifft am ehesten zu: Qualitätssicherung?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 77
  },
  {
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "q": "Was sollte ein Ausbilder beim Thema „Qualitätssicherung“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 78
  },
  {
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "q": "Welche Antwort beschreibt „Qualitätssicherung“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 79
  },
  {
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "q": "Ein Betrieb prüft „Qualitätssicherung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 80
  },
  {
    "field": "HF2",
    "topic": "Auswahl",
    "q": "Welche Aussage trifft am ehesten zu: Auswahl?",
    "a": [
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      0
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 81
  },
  {
    "field": "HF2",
    "topic": "Auswahl",
    "q": "Was sollte ein Ausbilder beim Thema „Auswahl“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein."
    ],
    "correct": [
      3
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 82
  },
  {
    "field": "HF2",
    "topic": "Auswahl",
    "q": "Welche Antwort beschreibt „Auswahl“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      1
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 83
  },
  {
    "field": "HF2",
    "topic": "Auswahl",
    "q": "Ein Betrieb prüft „Auswahl“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 84
  },
  {
    "field": "HF2",
    "topic": "AGG",
    "q": "Welche Aussage trifft am ehesten zu: AGG?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      1
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 85
  },
  {
    "field": "HF2",
    "topic": "AGG",
    "q": "Was sollte ein Ausbilder beim Thema „AGG“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 86
  },
  {
    "field": "HF2",
    "topic": "AGG",
    "q": "Welche Antwort beschreibt „AGG“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      1
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 87
  },
  {
    "field": "HF2",
    "topic": "AGG",
    "q": "Ein Betrieb prüft „AGG“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter."
    ],
    "correct": [
      3
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 88
  },
  {
    "field": "HF2",
    "topic": "Vertrag",
    "q": "Welche Aussage trifft am ehesten zu: Vertrag?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 89
  },
  {
    "field": "HF2",
    "topic": "Vertrag",
    "q": "Was sollte ein Ausbilder beim Thema „Vertrag“ besonders beachten?",
    "a": [
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 90
  },
  {
    "field": "HF2",
    "topic": "Vertrag",
    "q": "Welche Antwort beschreibt „Vertrag“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      1
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 91
  },
  {
    "field": "HF2",
    "topic": "Vertrag",
    "q": "Ein Betrieb prüft „Vertrag“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      1
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 92
  },
  {
    "field": "HF2",
    "topic": "Probezeit",
    "q": "Welche Aussage trifft am ehesten zu: Probezeit?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      1
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 93
  },
  {
    "field": "HF2",
    "topic": "Probezeit",
    "q": "Was sollte ein Ausbilder beim Thema „Probezeit“ besonders beachten?",
    "a": [
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 94
  },
  {
    "field": "HF2",
    "topic": "Probezeit",
    "q": "Welche Antwort beschreibt „Probezeit“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      2
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 95
  },
  {
    "field": "HF2",
    "topic": "Probezeit",
    "q": "Ein Betrieb prüft „Probezeit“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      0
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 96
  },
  {
    "field": "HF2",
    "topic": "Eintragung",
    "q": "Welche Aussage trifft am ehesten zu: Eintragung?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein."
    ],
    "correct": [
      3
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 97
  },
  {
    "field": "HF2",
    "topic": "Eintragung",
    "q": "Was sollte ein Ausbilder beim Thema „Eintragung“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 98
  },
  {
    "field": "HF2",
    "topic": "Eintragung",
    "q": "Welche Antwort beschreibt „Eintragung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      1
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 99
  },
  {
    "field": "HF2",
    "topic": "Eintragung",
    "q": "Ein Betrieb prüft „Eintragung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      2
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 100
  },
  {
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "q": "Welche Aussage trifft am ehesten zu: Jugendarbeitsschutz?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 101
  },
  {
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "q": "Was sollte ein Ausbilder beim Thema „Jugendarbeitsschutz“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 102
  },
  {
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "q": "Welche Antwort beschreibt „Jugendarbeitsschutz“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      1
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 103
  },
  {
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "q": "Ein Betrieb prüft „Jugendarbeitsschutz“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      2
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 104
  },
  {
    "field": "HF2",
    "topic": "Onboarding",
    "q": "Welche Aussage trifft am ehesten zu: Onboarding?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 105
  },
  {
    "field": "HF2",
    "topic": "Onboarding",
    "q": "Was sollte ein Ausbilder beim Thema „Onboarding“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 106
  },
  {
    "field": "HF2",
    "topic": "Onboarding",
    "q": "Welche Antwort beschreibt „Onboarding“ im AEVO-Kontext richtig?",
    "a": [
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      0
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 107
  },
  {
    "field": "HF2",
    "topic": "Onboarding",
    "q": "Ein Betrieb prüft „Onboarding“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      0
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 108
  },
  {
    "field": "HF2",
    "topic": "Datenschutz",
    "q": "Welche Aussage trifft am ehesten zu: Datenschutz?",
    "a": [
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      0
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 109
  },
  {
    "field": "HF2",
    "topic": "Datenschutz",
    "q": "Was sollte ein Ausbilder beim Thema „Datenschutz“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 110
  },
  {
    "field": "HF2",
    "topic": "Datenschutz",
    "q": "Welche Antwort beschreibt „Datenschutz“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      1
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 111
  },
  {
    "field": "HF2",
    "topic": "Datenschutz",
    "q": "Ein Betrieb prüft „Datenschutz“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 112
  },
  {
    "field": "HF2",
    "topic": "Berufsschule",
    "q": "Welche Aussage trifft am ehesten zu: Berufsschule?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 113
  },
  {
    "field": "HF2",
    "topic": "Berufsschule",
    "q": "Was sollte ein Ausbilder beim Thema „Berufsschule“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 114
  },
  {
    "field": "HF2",
    "topic": "Berufsschule",
    "q": "Welche Antwort beschreibt „Berufsschule“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 115
  },
  {
    "field": "HF2",
    "topic": "Berufsschule",
    "q": "Ein Betrieb prüft „Berufsschule“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 116
  },
  {
    "field": "HF2",
    "topic": "Mitbestimmung",
    "q": "Welche Aussage trifft am ehesten zu: Mitbestimmung?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      1
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 117
  },
  {
    "field": "HF2",
    "topic": "Mitbestimmung",
    "q": "Was sollte ein Ausbilder beim Thema „Mitbestimmung“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 118
  },
  {
    "field": "HF2",
    "topic": "Mitbestimmung",
    "q": "Welche Antwort beschreibt „Mitbestimmung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      2
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 119
  },
  {
    "field": "HF2",
    "topic": "Mitbestimmung",
    "q": "Ein Betrieb prüft „Mitbestimmung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein."
    ],
    "correct": [
      3
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 120
  },
  {
    "field": "HF3",
    "topic": "Lernziele",
    "q": "Welche Aussage trifft am ehesten zu: Lernziele?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein."
    ],
    "correct": [
      3
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 121
  },
  {
    "field": "HF3",
    "topic": "Lernziele",
    "q": "Was sollte ein Ausbilder beim Thema „Lernziele“ besonders beachten?",
    "a": [
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      0
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 122
  },
  {
    "field": "HF3",
    "topic": "Lernziele",
    "q": "Welche Antwort beschreibt „Lernziele“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein."
    ],
    "correct": [
      3
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 123
  },
  {
    "field": "HF3",
    "topic": "Lernziele",
    "q": "Ein Betrieb prüft „Lernziele“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      2
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 124
  },
  {
    "field": "HF3",
    "topic": "Methoden",
    "q": "Welche Aussage trifft am ehesten zu: Methoden?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 125
  },
  {
    "field": "HF3",
    "topic": "Methoden",
    "q": "Was sollte ein Ausbilder beim Thema „Methoden“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      1
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 126
  },
  {
    "field": "HF3",
    "topic": "Methoden",
    "q": "Welche Antwort beschreibt „Methoden“ im AEVO-Kontext richtig?",
    "a": [
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      0
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 127
  },
  {
    "field": "HF3",
    "topic": "Methoden",
    "q": "Ein Betrieb prüft „Methoden“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      2
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 128
  },
  {
    "field": "HF3",
    "topic": "Vier-Stufen",
    "q": "Welche Aussage trifft am ehesten zu: Vier-Stufen?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 129
  },
  {
    "field": "HF3",
    "topic": "Vier-Stufen",
    "q": "Was sollte ein Ausbilder beim Thema „Vier-Stufen“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      2
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 130
  },
  {
    "field": "HF3",
    "topic": "Vier-Stufen",
    "q": "Welche Antwort beschreibt „Vier-Stufen“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      1
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 131
  },
  {
    "field": "HF3",
    "topic": "Vier-Stufen",
    "q": "Ein Betrieb prüft „Vier-Stufen“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      1
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 132
  },
  {
    "field": "HF3",
    "topic": "Leittext",
    "q": "Welche Aussage trifft am ehesten zu: Leittext?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      2
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 133
  },
  {
    "field": "HF3",
    "topic": "Leittext",
    "q": "Was sollte ein Ausbilder beim Thema „Leittext“ besonders beachten?",
    "a": [
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      0
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 134
  },
  {
    "field": "HF3",
    "topic": "Leittext",
    "q": "Welche Antwort beschreibt „Leittext“ im AEVO-Kontext richtig?",
    "a": [
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      0
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 135
  },
  {
    "field": "HF3",
    "topic": "Leittext",
    "q": "Ein Betrieb prüft „Leittext“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Alle Nachweise vernichten.",
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      1
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 136
  },
  {
    "field": "HF3",
    "topic": "Projekt",
    "q": "Welche Aussage trifft am ehesten zu: Projekt?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 137
  },
  {
    "field": "HF3",
    "topic": "Projekt",
    "q": "Was sollte ein Ausbilder beim Thema „Projekt“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 138
  },
  {
    "field": "HF3",
    "topic": "Projekt",
    "q": "Welche Antwort beschreibt „Projekt“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz."
    ],
    "correct": [
      3
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 139
  },
  {
    "field": "HF3",
    "topic": "Projekt",
    "q": "Ein Betrieb prüft „Projekt“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      2
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 140
  },
  {
    "field": "HF3",
    "topic": "Motivation",
    "q": "Welche Aussage trifft am ehesten zu: Motivation?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 141
  },
  {
    "field": "HF3",
    "topic": "Motivation",
    "q": "Was sollte ein Ausbilder beim Thema „Motivation“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 142
  },
  {
    "field": "HF3",
    "topic": "Motivation",
    "q": "Welche Antwort beschreibt „Motivation“ im AEVO-Kontext richtig?",
    "a": [
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      0
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 143
  },
  {
    "field": "HF3",
    "topic": "Motivation",
    "q": "Ein Betrieb prüft „Motivation“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung."
    ],
    "correct": [
      3
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 144
  },
  {
    "field": "HF3",
    "topic": "Feedback",
    "q": "Welche Aussage trifft am ehesten zu: Feedback?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      2
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 145
  },
  {
    "field": "HF3",
    "topic": "Feedback",
    "q": "Was sollte ein Ausbilder beim Thema „Feedback“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 146
  },
  {
    "field": "HF3",
    "topic": "Feedback",
    "q": "Welche Antwort beschreibt „Feedback“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      1
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 147
  },
  {
    "field": "HF3",
    "topic": "Feedback",
    "q": "Ein Betrieb prüft „Feedback“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      2
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 148
  },
  {
    "field": "HF3",
    "topic": "Konflikt",
    "q": "Welche Aussage trifft am ehesten zu: Konflikt?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 149
  },
  {
    "field": "HF3",
    "topic": "Konflikt",
    "q": "Was sollte ein Ausbilder beim Thema „Konflikt“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      1
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 150
  },
  {
    "field": "HF3",
    "topic": "Konflikt",
    "q": "Welche Antwort beschreibt „Konflikt“ im AEVO-Kontext richtig?",
    "a": [
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      0
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 151
  },
  {
    "field": "HF3",
    "topic": "Konflikt",
    "q": "Ein Betrieb prüft „Konflikt“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      1
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 152
  },
  {
    "field": "HF3",
    "topic": "Lernerfolg",
    "q": "Welche Aussage trifft am ehesten zu: Lernerfolg?",
    "a": [
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      0
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 153
  },
  {
    "field": "HF3",
    "topic": "Lernerfolg",
    "q": "Was sollte ein Ausbilder beim Thema „Lernerfolg“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Rechtsgrundlagen ignorieren."
    ],
    "correct": [
      2
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 154
  },
  {
    "field": "HF3",
    "topic": "Lernerfolg",
    "q": "Welche Antwort beschreibt „Lernerfolg“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      1
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 155
  },
  {
    "field": "HF3",
    "topic": "Lernerfolg",
    "q": "Ein Betrieb prüft „Lernerfolg“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      2
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 156
  },
  {
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "q": "Welche Aussage trifft am ehesten zu: Ausbildungsnachweis?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Es betrifft ausschließlich private Freizeitfragen."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 157
  },
  {
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "q": "Was sollte ein Ausbilder beim Thema „Ausbildungsnachweis“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 158
  },
  {
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "q": "Welche Antwort beschreibt „Ausbildungsnachweis“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      1
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 159
  },
  {
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "q": "Ein Betrieb prüft „Ausbildungsnachweis“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 160
  },
  {
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "q": "Welche Aussage trifft am ehesten zu: Prüfungsanmeldung?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 161
  },
  {
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "q": "Was sollte ein Ausbilder beim Thema „Prüfungsanmeldung“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 162
  },
  {
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "q": "Welche Antwort beschreibt „Prüfungsanmeldung“ im AEVO-Kontext richtig?",
    "a": [
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 163
  },
  {
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "q": "Ein Betrieb prüft „Prüfungsanmeldung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 164
  },
  {
    "field": "HF4",
    "topic": "Zulassung",
    "q": "Welche Aussage trifft am ehesten zu: Zulassung?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      1
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 165
  },
  {
    "field": "HF4",
    "topic": "Zulassung",
    "q": "Was sollte ein Ausbilder beim Thema „Zulassung“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus.",
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 166
  },
  {
    "field": "HF4",
    "topic": "Zulassung",
    "q": "Welche Antwort beschreibt „Zulassung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus."
    ],
    "correct": [
      3
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 167
  },
  {
    "field": "HF4",
    "topic": "Zulassung",
    "q": "Ein Betrieb prüft „Zulassung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus."
    ],
    "correct": [
      3
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 168
  },
  {
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "q": "Welche Aussage trifft am ehesten zu: Abschlussprüfung?",
    "a": [
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      0
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 169
  },
  {
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "q": "Was sollte ein Ausbilder beim Thema „Abschlussprüfung“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 170
  },
  {
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "q": "Welche Antwort beschreibt „Abschlussprüfung“ im AEVO-Kontext richtig?",
    "a": [
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      0
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 171
  },
  {
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "q": "Ein Betrieb prüft „Abschlussprüfung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Alle Nachweise vernichten.",
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 172
  },
  {
    "field": "HF4",
    "topic": "Wiederholung",
    "q": "Welche Aussage trifft am ehesten zu: Wiederholung?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 173
  },
  {
    "field": "HF4",
    "topic": "Wiederholung",
    "q": "Was sollte ein Ausbilder beim Thema „Wiederholung“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 174
  },
  {
    "field": "HF4",
    "topic": "Wiederholung",
    "q": "Welche Antwort beschreibt „Wiederholung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden."
    ],
    "correct": [
      3
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 175
  },
  {
    "field": "HF4",
    "topic": "Wiederholung",
    "q": "Ein Betrieb prüft „Wiederholung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden."
    ],
    "correct": [
      3
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 176
  },
  {
    "field": "HF4",
    "topic": "Zeugnis",
    "q": "Welche Aussage trifft am ehesten zu: Zeugnis?",
    "a": [
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen."
    ],
    "correct": [
      3
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 177
  },
  {
    "field": "HF4",
    "topic": "Zeugnis",
    "q": "Was sollte ein Ausbilder beim Thema „Zeugnis“ besonders beachten?",
    "a": [
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Azubis möglichst wenig informieren.",
      "Rechtsgrundlagen ignorieren.",
      "Entscheidungen ohne Dokumentation treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 178
  },
  {
    "field": "HF4",
    "topic": "Zeugnis",
    "q": "Welche Antwort beschreibt „Zeugnis“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      1
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 179
  },
  {
    "field": "HF4",
    "topic": "Zeugnis",
    "q": "Ein Betrieb prüft „Zeugnis“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      1
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 180
  },
  {
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "q": "Welche Aussage trifft am ehesten zu: Qualifiziertes Zeugnis?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 181
  },
  {
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "q": "Was sollte ein Ausbilder beim Thema „Qualifiziertes Zeugnis“ besonders beachten?",
    "a": [
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      0
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 182
  },
  {
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "q": "Welche Antwort beschreibt „Qualifiziertes Zeugnis“ im AEVO-Kontext richtig?",
    "a": [
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten."
    ],
    "correct": [
      3
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 183
  },
  {
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "q": "Ein Betrieb prüft „Qualifiziertes Zeugnis“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      2
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 184
  },
  {
    "field": "HF4",
    "topic": "Übernahme",
    "q": "Welche Aussage trifft am ehesten zu: Übernahme?",
    "a": [
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      1
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 185
  },
  {
    "field": "HF4",
    "topic": "Übernahme",
    "q": "Was sollte ein Ausbilder beim Thema „Übernahme“ besonders beachten?",
    "a": [
      "Azubis möglichst wenig informieren.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Übernahmegespräche klären Perspektiven und Bedingungen."
    ],
    "correct": [
      3
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 186
  },
  {
    "field": "HF4",
    "topic": "Übernahme",
    "q": "Welche Antwort beschreibt „Übernahme“ im AEVO-Kontext richtig?",
    "a": [
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden."
    ],
    "correct": [
      0
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 187
  },
  {
    "field": "HF4",
    "topic": "Übernahme",
    "q": "Ein Betrieb prüft „Übernahme“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Alle Nachweise vernichten.",
      "Nur nach Bauchgefühl handeln.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      0
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 188
  },
  {
    "field": "HF4",
    "topic": "Weiterbildung",
    "q": "Welche Aussage trifft am ehesten zu: Weiterbildung?",
    "a": [
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Es ersetzt immer die Abschlussprüfung.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 189
  },
  {
    "field": "HF4",
    "topic": "Weiterbildung",
    "q": "Was sollte ein Ausbilder beim Thema „Weiterbildung“ besonders beachten?",
    "a": [
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      2
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 190
  },
  {
    "field": "HF4",
    "topic": "Weiterbildung",
    "q": "Welche Antwort beschreibt „Weiterbildung“ im AEVO-Kontext richtig?",
    "a": [
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 191
  },
  {
    "field": "HF4",
    "topic": "Weiterbildung",
    "q": "Ein Betrieb prüft „Weiterbildung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 192
  },
  {
    "field": "HF4",
    "topic": "Prüfungsangst",
    "q": "Welche Aussage trifft am ehesten zu: Prüfungsangst?",
    "a": [
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      1
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 193
  },
  {
    "field": "HF4",
    "topic": "Prüfungsangst",
    "q": "Was sollte ein Ausbilder beim Thema „Prüfungsangst“ besonders beachten?",
    "a": [
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Rechtsgrundlagen ignorieren.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      0
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 194
  },
  {
    "field": "HF4",
    "topic": "Prüfungsangst",
    "q": "Welche Antwort beschreibt „Prüfungsangst“ im AEVO-Kontext richtig?",
    "a": [
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Es darf nie im Betrieb angewendet werden.",
      "Es gilt nur für Hochschulen.",
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug."
    ],
    "correct": [
      0
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 195
  },
  {
    "field": "HF4",
    "topic": "Prüfungsangst",
    "q": "Ein Betrieb prüft „Prüfungsangst“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Die Berufsschule vollständig ausschließen.",
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Nur nach Bauchgefühl handeln.",
      "Alle Nachweise vernichten."
    ],
    "correct": [
      1
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 196
  },
  {
    "field": "HF4",
    "topic": "Beendigung",
    "q": "Welche Aussage trifft am ehesten zu: Beendigung?",
    "a": [
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen.",
      "Das Thema ist für AEVO grundsätzlich unwichtig.",
      "Es betrifft ausschließlich private Freizeitfragen.",
      "Es ersetzt immer die Abschlussprüfung."
    ],
    "correct": [
      0
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 197
  },
  {
    "field": "HF4",
    "topic": "Beendigung",
    "q": "Was sollte ein Ausbilder beim Thema „Beendigung“ besonders beachten?",
    "a": [
      "Rechtsgrundlagen ignorieren.",
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen.",
      "Entscheidungen ohne Dokumentation treffen.",
      "Azubis möglichst wenig informieren."
    ],
    "correct": [
      1
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 198
  },
  {
    "field": "HF4",
    "topic": "Beendigung",
    "q": "Welche Antwort beschreibt „Beendigung“ im AEVO-Kontext richtig?",
    "a": [
      "Es ist nur ein freiwilliges Hobby ohne Ausbildungsbezug.",
      "Es gilt nur für Hochschulen.",
      "Es darf nie im Betrieb angewendet werden.",
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen."
    ],
    "correct": [
      3
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 199
  },
  {
    "field": "HF4",
    "topic": "Beendigung",
    "q": "Ein Betrieb prüft „Beendigung“. Welche Handlung ist fachlich sinnvoll?",
    "a": [
      "Alle Nachweise vernichten.",
      "Die Berufsschule vollständig ausschließen.",
      "Nur nach Bauchgefühl handeln.",
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen."
    ],
    "correct": [
      3
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. Prüfe in Aufgaben immer die Rolle von Ausbilder, Betrieb, Azubi und zuständiger Stelle.",
    "type": "single",
    "id": 200
  },
  {
    "field": "HF2",
    "topic": "Bewerbung",
    "q": "Eine Bewerberin erwähnt im Gespräch ihre Familienplanung nicht. Was ist korrekt?",
    "a": [
      "Die Frage nach Schwangerschaft ist immer Pflicht.",
      "Der Betrieb muss sie deshalb automatisch ablehnen.",
      "Der Betrieb darf sie nicht wegen vermuteter Schwangerschaft benachteiligen.",
      "Familienplanung ist das einzige Auswahlkriterium."
    ],
    "correct": [
      2
    ],
    "exp": "Auswahl muss anforderungsbezogen und diskriminierungsfrei erfolgen.",
    "type": "single",
    "id": 201
  },
  {
    "field": "HF3",
    "topic": "Lernschwierigkeit",
    "q": "Ein Azubi versteht eine Aufgabe trotz Erklärung nicht. Was tun?",
    "a": [
      "Sofort aufgeben.",
      "Den Ausbildungsnachweis verweigern.",
      "Nur schimpfen.",
      "Lernstand prüfen, Erklärung anpassen, üben lassen und Fortschritt kontrollieren."
    ],
    "correct": [
      3
    ],
    "exp": "Förderung und methodische Anpassung gehören zur Ausbildungsdurchführung.",
    "type": "single",
    "id": 202
  },
  {
    "field": "HF3",
    "topic": "Sicherheit",
    "q": "Ein Azubi soll erstmals an einer Maschine arbeiten. Was ist vorher wichtig?",
    "a": [
      "Tätigkeitsbezogene Sicherheitsunterweisung und Anleitung.",
      "Abschlusszeugnis ausstellen.",
      "Nur ein Witz zur Auflockerung.",
      "Keine Erklärung, damit er selbst lernt."
    ],
    "correct": [
      0
    ],
    "exp": "Arbeitssicherheit hat Vorrang vor Geschwindigkeit.",
    "type": "single",
    "id": 203
  },
  {
    "field": "HF4",
    "topic": "Prüfung",
    "q": "Der Azubi hat die Abschlussprüfung nicht bestanden. Was ist richtig?",
    "a": [
      "Der Betrieb darf den Nachweis rückwirkend löschen.",
      "Der Vertrag wird automatisch zehn Jahre verlängert.",
      "Er kann unter Voraussetzungen Verlängerung bis zur Wiederholungsprüfung verlangen.",
      "Er darf nie wieder antreten."
    ],
    "correct": [
      2
    ],
    "exp": "Nichtbestehen eröffnet regelmäßig Wiederholungs- und Verlängerungsmöglichkeiten.",
    "type": "single",
    "id": 204
  },
  {
    "field": "HF2",
    "topic": "Ausbildungsvertrag",
    "q": "Welche Angaben gehören typischerweise in die Vertragsniederschrift?",
    "a": [
      "Lieblingsessen des Azubis",
      "Ausbildungsberuf",
      "Vergütung",
      "Beginn und Dauer"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "exp": "Wesentliche Vertragsbedingungen sind zu dokumentieren; private Vorlieben gehören nicht dazu.",
    "type": "multi",
    "id": 205
  },
  {
    "field": "HF3",
    "topic": "Gutes Feedback",
    "q": "Welche Merkmale hat gutes Feedback?",
    "a": [
      "Zeitnah",
      "Konkret",
      "Möglichst beleidigend",
      "Wertschätzend"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "exp": "Feedback soll Lernen ermöglichen und die Person respektieren.",
    "type": "multi",
    "id": 206
  },
  {
    "field": "HF1",
    "topic": "Ausbildungsplanung",
    "q": "Welche Punkte gehören zur Ausbildungsplanung?",
    "a": [
      "Ausbildungsberuf auswählen",
      "Prüfung abschaffen",
      "Kapazitäten prüfen",
      "Betrieblichen Ausbildungsplan erstellen"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "exp": "Planung verbindet Beruf, Ressourcen und konkrete Umsetzung.",
    "type": "multi",
    "id": 207
  },
  {
    "field": "HF4",
    "topic": "Ausbildungsende",
    "q": "Welche Ereignisse können zum Ende der Ausbildung führen?",
    "a": [
      "Bestehen der Abschlussprüfung",
      "Ablauf der Ausbildungszeit",
      "Wirksame Kündigung",
      "Beliebiger Wunsch eines Kunden"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "exp": "Das Ende folgt rechtlichen Tatbeständen, nicht Kundenwünschen.",
    "type": "multi",
    "id": 208
  },
  {
    "id": 209,
    "field": "HF1",
    "topic": "BBiG",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „BBiG“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 210,
    "field": "HF1",
    "topic": "BBiG",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „BBiG“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      2
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 211,
    "field": "HF1",
    "topic": "BBiG",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „BBiG“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden.",
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen."
    ],
    "correct": [
      3
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 212,
    "field": "HF1",
    "topic": "BBiG",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „BBiG“?",
    "a": [
      "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Das Berufsbildungsgesetz regelt zentrale Grundlagen der Berufsbildung, u. a. Rechte, Pflichten und Prüfungsrahmen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 213,
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Ausbildungsordnung“?",
    "a": [
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 214,
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Ausbildungsordnung“?",
    "a": [
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      0
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 215,
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Ausbildungsordnung“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 216,
    "field": "HF1",
    "topic": "Ausbildungsordnung",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Ausbildungsordnung“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsordnung ist verbindliche Mindestgrundlage des anerkannten Ausbildungsberufs. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 217,
    "field": "HF1",
    "topic": "Rahmenplan",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Rahmenplan“?",
    "a": [
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 218,
    "field": "HF1",
    "topic": "Rahmenplan",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Rahmenplan“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen.",
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 219,
    "field": "HF1",
    "topic": "Rahmenplan",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Rahmenplan“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 220,
    "field": "HF1",
    "topic": "Rahmenplan",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Rahmenplan“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsrahmenplan wird in einen betrieblichen Ausbildungsplan übertragen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 221,
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Eignung Betrieb“?",
    "a": [
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 222,
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Eignung Betrieb“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Pädagogische Unterstützung vermeiden.",
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 223,
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Eignung Betrieb“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 224,
    "field": "HF1",
    "topic": "Eignung Betrieb",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Eignung Betrieb“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen."
    ],
    "correct": [
      3
    ],
    "exp": "Die Ausbildungsstätte muss Inhalte, Ausstattung und Personal zur Vermittlung bereitstellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 225,
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Eignung Ausbilder“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Pädagogische Unterstützung vermeiden.",
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 226,
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Eignung Ausbilder“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Ausbilder benötigen persönliche und fachliche Eignung."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 227,
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Eignung Ausbilder“?",
    "a": [
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 228,
    "field": "HF1",
    "topic": "Eignung Ausbilder",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Eignung Ausbilder“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Ausbilder benötigen persönliche und fachliche Eignung.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbilder benötigen persönliche und fachliche Eignung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 229,
    "field": "HF1",
    "topic": "Kooperation",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Kooperation“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken."
    ],
    "correct": [
      3
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 230,
    "field": "HF1",
    "topic": "Kooperation",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Kooperation“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 231,
    "field": "HF1",
    "topic": "Kooperation",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Kooperation“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 232,
    "field": "HF1",
    "topic": "Kooperation",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Kooperation“?",
    "a": [
      "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken.",
      "Den Azubi möglichst nicht beteiligen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      0
    ],
    "exp": "Verbund- und Auftragsausbildung helfen, fehlende Inhalte abzudecken. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 233,
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Bedarfsplanung“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 234,
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Bedarfsplanung“?",
    "a": [
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus.",
      "Pädagogische Unterstützung vermeiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 235,
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Bedarfsplanung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 236,
    "field": "HF1",
    "topic": "Bedarfsplanung",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Bedarfsplanung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbildung richtet sich am Fachkräftebedarf und betrieblichen Kapazitäten aus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 237,
    "field": "HF1",
    "topic": "Lernorte",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Lernorte“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      1
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 238,
    "field": "HF1",
    "topic": "Lernorte",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Lernorte“?",
    "a": [
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 239,
    "field": "HF1",
    "topic": "Lernorte",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Lernorte“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 240,
    "field": "HF1",
    "topic": "Lernorte",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Lernorte“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Betrieb und Berufsschule wirken im dualen System zusammen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Betrieb und Berufsschule wirken im dualen System zusammen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 241,
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Nachhaltigkeit“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden."
    ],
    "correct": [
      3
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 242,
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Nachhaltigkeit“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      2
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 243,
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Nachhaltigkeit“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 244,
    "field": "HF1",
    "topic": "Nachhaltigkeit",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Nachhaltigkeit“?",
    "a": [
      "Nachhaltigkeit kann in berufliche Aufgaben integriert werden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      0
    ],
    "exp": "Nachhaltigkeit kann in berufliche Aufgaben integriert werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 245,
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "type": "single",
    "q": "Ein Unternehmen plant erstmals auszubilden. Welche Vorgehensweise passt zum Thema „Qualitätssicherung“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität."
    ],
    "correct": [
      3
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 246,
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "type": "single",
    "q": "Der Ausbildungsrahmenplan soll umgesetzt werden. Welche Vorgehensweise passt zum Thema „Qualitätssicherung“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 247,
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "type": "single",
    "q": "Ein kleiner Betrieb kann nicht alle Inhalte abdecken. Welche Vorgehensweise passt zum Thema „Qualitätssicherung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Ausbildungsplanung und Kontrolle sichern die Qualität.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      1
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 248,
    "field": "HF1",
    "topic": "Qualitätssicherung",
    "type": "single",
    "q": "Die Geschäftsführung fragt nach Nutzen eigener Ausbildung. Welche Vorgehensweise passt zum Thema „Qualitätssicherung“?",
    "a": [
      "Ausbildungsplanung und Kontrolle sichern die Qualität.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Ausbildungsplanung und Kontrolle sichern die Qualität. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 249,
    "field": "HF2",
    "topic": "Auswahl",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Auswahl“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein."
    ],
    "correct": [
      3
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 250,
    "field": "HF2",
    "topic": "Auswahl",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Auswahl“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein."
    ],
    "correct": [
      3
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 251,
    "field": "HF2",
    "topic": "Auswahl",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Auswahl“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 252,
    "field": "HF2",
    "topic": "Auswahl",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Auswahl“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein."
    ],
    "correct": [
      3
    ],
    "exp": "Auswahlverfahren sollten strukturiert, anforderungsbezogen und diskriminierungsfrei sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 253,
    "field": "HF2",
    "topic": "AGG",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „AGG“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter."
    ],
    "correct": [
      3
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 254,
    "field": "HF2",
    "topic": "AGG",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „AGG“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      1
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 255,
    "field": "HF2",
    "topic": "AGG",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „AGG“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 256,
    "field": "HF2",
    "topic": "AGG",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „AGG“?",
    "a": [
      "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      0
    ],
    "exp": "Das AGG schützt vor Benachteiligung, z. B. wegen Geschlecht, Herkunft, Religion oder Alter. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 257,
    "field": "HF2",
    "topic": "Vertrag",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Vertrag“?",
    "a": [
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 258,
    "field": "HF2",
    "topic": "Vertrag",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Vertrag“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 259,
    "field": "HF2",
    "topic": "Vertrag",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Vertrag“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 260,
    "field": "HF2",
    "topic": "Vertrag",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Vertrag“?",
    "a": [
      "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsvertrag muss wesentliche Inhalte schriftlich enthalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 261,
    "field": "HF2",
    "topic": "Probezeit",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Probezeit“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate."
    ],
    "correct": [
      3
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 262,
    "field": "HF2",
    "topic": "Probezeit",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Probezeit“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      2
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 263,
    "field": "HF2",
    "topic": "Probezeit",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Probezeit“?",
    "a": [
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 264,
    "field": "HF2",
    "topic": "Probezeit",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Probezeit“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen.",
      "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate."
    ],
    "correct": [
      3
    ],
    "exp": "Die Probezeit in der Ausbildung beträgt mindestens 1 und höchstens 4 Monate. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 265,
    "field": "HF2",
    "topic": "Eintragung",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Eintragung“?",
    "a": [
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Pädagogische Unterstützung vermeiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 266,
    "field": "HF2",
    "topic": "Eintragung",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Eintragung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      1
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 267,
    "field": "HF2",
    "topic": "Eintragung",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Eintragung“?",
    "a": [
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      0
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 268,
    "field": "HF2",
    "topic": "Eintragung",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Eintragung“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein."
    ],
    "correct": [
      3
    ],
    "exp": "Die zuständige Stelle trägt Berufsausbildungsverhältnisse ein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 269,
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Jugendarbeitsschutz“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz."
    ],
    "correct": [
      3
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 270,
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Jugendarbeitsschutz“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      2
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 271,
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Jugendarbeitsschutz“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Den Azubi möglichst nicht beteiligen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      1
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 272,
    "field": "HF2",
    "topic": "Jugendarbeitsschutz",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Jugendarbeitsschutz“?",
    "a": [
      "Minderjährige Auszubildende stehen unter besonderem Schutz.",
      "Den Azubi möglichst nicht beteiligen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Minderjährige Auszubildende stehen unter besonderem Schutz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 273,
    "field": "HF2",
    "topic": "Onboarding",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Onboarding“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit."
    ],
    "correct": [
      3
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 274,
    "field": "HF2",
    "topic": "Onboarding",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Onboarding“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      2
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 275,
    "field": "HF2",
    "topic": "Onboarding",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Onboarding“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      2
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 276,
    "field": "HF2",
    "topic": "Onboarding",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Onboarding“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Ein strukturierter Ausbildungsstart schafft Orientierung und Sicherheit. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 277,
    "field": "HF2",
    "topic": "Datenschutz",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Datenschutz“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 278,
    "field": "HF2",
    "topic": "Datenschutz",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Datenschutz“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      1
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 279,
    "field": "HF2",
    "topic": "Datenschutz",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Datenschutz“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Pädagogische Unterstützung vermeiden.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 280,
    "field": "HF2",
    "topic": "Datenschutz",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Datenschutz“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Bewerbungs- und Personaldaten sind vertraulich und zweckgebunden zu verarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 281,
    "field": "HF2",
    "topic": "Berufsschule",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Berufsschule“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 282,
    "field": "HF2",
    "topic": "Berufsschule",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Berufsschule“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 283,
    "field": "HF2",
    "topic": "Berufsschule",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Berufsschule“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 284,
    "field": "HF2",
    "topic": "Berufsschule",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Berufsschule“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Der Betrieb muss Azubis für die Berufsschule freistellen.",
      "Pädagogische Unterstützung vermeiden.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Der Betrieb muss Azubis für die Berufsschule freistellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 285,
    "field": "HF2",
    "topic": "Mitbestimmung",
    "type": "single",
    "q": "Ein neuer Azubi wird eingestellt. Welche Vorgehensweise passt zum Thema „Mitbestimmung“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 286,
    "field": "HF2",
    "topic": "Mitbestimmung",
    "type": "single",
    "q": "Im Vorstellungsgespräch entstehen rechtliche Unsicherheiten. Welche Vorgehensweise passt zum Thema „Mitbestimmung“?",
    "a": [
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 287,
    "field": "HF2",
    "topic": "Mitbestimmung",
    "type": "single",
    "q": "Der Ausbildungsvertrag wird vorbereitet. Welche Vorgehensweise passt zum Thema „Mitbestimmung“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 288,
    "field": "HF2",
    "topic": "Mitbestimmung",
    "type": "single",
    "q": "Ein minderjähriger Bewerber startet bald. Welche Vorgehensweise passt zum Thema „Mitbestimmung“?",
    "a": [
      "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Interessenvertretungen können bei Ausbildungsthemen beteiligt sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 289,
    "field": "HF3",
    "topic": "Lernziele",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Lernziele“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 290,
    "field": "HF3",
    "topic": "Lernziele",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Lernziele“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Pädagogische Unterstützung vermeiden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      1
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 291,
    "field": "HF3",
    "topic": "Lernziele",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Lernziele“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      1
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 292,
    "field": "HF3",
    "topic": "Lernziele",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Lernziele“?",
    "a": [
      "Lernziele sollen konkret, überprüfbar und adressatengerecht sein.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Lernziele sollen konkret, überprüfbar und adressatengerecht sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 293,
    "field": "HF3",
    "topic": "Methoden",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Methoden“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 294,
    "field": "HF3",
    "topic": "Methoden",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Methoden“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 295,
    "field": "HF3",
    "topic": "Methoden",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Methoden“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 296,
    "field": "HF3",
    "topic": "Methoden",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Methoden“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt."
    ],
    "correct": [
      3
    ],
    "exp": "Methoden werden nach Lernziel, Situation und Zielgruppe ausgewählt. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 297,
    "field": "HF3",
    "topic": "Vier-Stufen",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Vier-Stufen“?",
    "a": [
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 298,
    "field": "HF3",
    "topic": "Vier-Stufen",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Vier-Stufen“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 299,
    "field": "HF3",
    "topic": "Vier-Stufen",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Vier-Stufen“?",
    "a": [
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 300,
    "field": "HF3",
    "topic": "Vier-Stufen",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Vier-Stufen“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Die Vier-Stufen-Methode eignet sich für praktische Fertigkeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 301,
    "field": "HF3",
    "topic": "Leittext",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Leittext“?",
    "a": [
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 302,
    "field": "HF3",
    "topic": "Leittext",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Leittext“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden.",
      "Leittexte fördern selbstständiges Erarbeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 303,
    "field": "HF3",
    "topic": "Leittext",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Leittext“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Leittexte fördern selbstständiges Erarbeiten.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      2
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 304,
    "field": "HF3",
    "topic": "Leittext",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Leittext“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Leittexte fördern selbstständiges Erarbeiten."
    ],
    "correct": [
      3
    ],
    "exp": "Leittexte fördern selbstständiges Erarbeiten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 305,
    "field": "HF3",
    "topic": "Projekt",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Projekt“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz."
    ],
    "correct": [
      3
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 306,
    "field": "HF3",
    "topic": "Projekt",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Projekt“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      1
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 307,
    "field": "HF3",
    "topic": "Projekt",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Projekt“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 308,
    "field": "HF3",
    "topic": "Projekt",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Projekt“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Projektarbeit fördert vollständige berufliche Handlungskompetenz.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      2
    ],
    "exp": "Projektarbeit fördert vollständige berufliche Handlungskompetenz. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 309,
    "field": "HF3",
    "topic": "Motivation",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Motivation“?",
    "a": [
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 310,
    "field": "HF3",
    "topic": "Motivation",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Motivation“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Pädagogische Unterstützung vermeiden.",
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      2
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 311,
    "field": "HF3",
    "topic": "Motivation",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Motivation“?",
    "a": [
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Pädagogische Unterstützung vermeiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 312,
    "field": "HF3",
    "topic": "Motivation",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Motivation“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      2
    ],
    "exp": "Motivation entsteht durch Sinn, Erfolgserlebnisse, Anerkennung und Beteiligung. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 313,
    "field": "HF3",
    "topic": "Feedback",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Feedback“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein."
    ],
    "correct": [
      3
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 314,
    "field": "HF3",
    "topic": "Feedback",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Feedback“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      1
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 315,
    "field": "HF3",
    "topic": "Feedback",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Feedback“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 316,
    "field": "HF3",
    "topic": "Feedback",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Feedback“?",
    "a": [
      "Feedback sollte konkret, zeitnah und wertschätzend sein.",
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      0
    ],
    "exp": "Feedback sollte konkret, zeitnah und wertschätzend sein. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 317,
    "field": "HF3",
    "topic": "Konflikt",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Konflikt“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet."
    ],
    "correct": [
      3
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 318,
    "field": "HF3",
    "topic": "Konflikt",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Konflikt“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 319,
    "field": "HF3",
    "topic": "Konflikt",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Konflikt“?",
    "a": [
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      0
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 320,
    "field": "HF3",
    "topic": "Konflikt",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Konflikt“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Konflikte werden sachlich geklärt und pädagogisch begleitet.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      2
    ],
    "exp": "Konflikte werden sachlich geklärt und pädagogisch begleitet. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 321,
    "field": "HF3",
    "topic": "Lernerfolg",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Lernerfolg“?",
    "a": [
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 322,
    "field": "HF3",
    "topic": "Lernerfolg",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Lernerfolg“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Pädagogische Unterstützung vermeiden.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      1
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 323,
    "field": "HF3",
    "topic": "Lernerfolg",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Lernerfolg“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 324,
    "field": "HF3",
    "topic": "Lernerfolg",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Lernerfolg“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Lernerfolgskontrollen zeigen Zielerreichung und Förderbedarf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 325,
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "type": "single",
    "q": "Während der Ausbildung tritt ein Lernproblem auf. Welche Vorgehensweise passt zum Thema „Ausbildungsnachweis“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf."
    ],
    "correct": [
      3
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 326,
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "type": "single",
    "q": "Eine praktische Tätigkeit soll vermittelt werden. Welche Vorgehensweise passt zum Thema „Ausbildungsnachweis“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 327,
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "type": "single",
    "q": "Der Ausbilder plant eine Unterweisung. Welche Vorgehensweise passt zum Thema „Ausbildungsnachweis“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      2
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 328,
    "field": "HF3",
    "topic": "Ausbildungsnachweis",
    "type": "single",
    "q": "Ein Konflikt mit dem Azubi entsteht. Welche Vorgehensweise passt zum Thema „Ausbildungsnachweis“?",
    "a": [
      "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Der Ausbildungsnachweis dokumentiert Inhalte und Verlauf. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 329,
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Prüfungsanmeldung“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      2
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 330,
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Prüfungsanmeldung“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 331,
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Prüfungsanmeldung“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise."
    ],
    "correct": [
      3
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 332,
    "field": "HF4",
    "topic": "Prüfungsanmeldung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Prüfungsanmeldung“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Der Betrieb achtet auf Anmeldung, Fristen und Nachweise. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 333,
    "field": "HF4",
    "topic": "Zulassung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Zulassung“?",
    "a": [
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      0
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 334,
    "field": "HF4",
    "topic": "Zulassung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Zulassung“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus."
    ],
    "correct": [
      3
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 335,
    "field": "HF4",
    "topic": "Zulassung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Zulassung“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 336,
    "field": "HF4",
    "topic": "Zulassung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Zulassung“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Zulassung setzt u. a. Ausbildungszeit und Nachweise voraus. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 337,
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Abschlussprüfung“?",
    "a": [
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 338,
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Abschlussprüfung“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses."
    ],
    "correct": [
      3
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 339,
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Abschlussprüfung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Pädagogische Unterstützung vermeiden.",
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses."
    ],
    "correct": [
      3
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 340,
    "field": "HF4",
    "topic": "Abschlussprüfung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Abschlussprüfung“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Bestehen endet das Ausbildungsverhältnis mit Bekanntgabe des Ergebnisses. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 341,
    "field": "HF4",
    "topic": "Wiederholung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Wiederholung“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 342,
    "field": "HF4",
    "topic": "Wiederholung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Wiederholung“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden."
    ],
    "correct": [
      3
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 343,
    "field": "HF4",
    "topic": "Wiederholung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Wiederholung“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 344,
    "field": "HF4",
    "topic": "Wiederholung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Wiederholung“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Bei Nichtbestehen kann Verlängerung bis zur nächsten Wiederholungsprüfung verlangt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 345,
    "field": "HF4",
    "topic": "Zeugnis",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Zeugnis“?",
    "a": [
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 346,
    "field": "HF4",
    "topic": "Zeugnis",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Zeugnis“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 347,
    "field": "HF4",
    "topic": "Zeugnis",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Zeugnis“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Pädagogische Unterstützung vermeiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      1
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 348,
    "field": "HF4",
    "topic": "Zeugnis",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Zeugnis“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Am Ende ist ein Ausbildungszeugnis auszustellen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Am Ende ist ein Ausbildungszeugnis auszustellen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 349,
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Qualifiziertes Zeugnis“?",
    "a": [
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 350,
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Qualifiziertes Zeugnis“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten."
    ],
    "correct": [
      3
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 351,
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Qualifiziertes Zeugnis“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 352,
    "field": "HF4",
    "topic": "Qualifiziertes Zeugnis",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Qualifiziertes Zeugnis“?",
    "a": [
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Auf Wunsch enthält das Zeugnis Leistung und Verhalten.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      2
    ],
    "exp": "Auf Wunsch enthält das Zeugnis Leistung und Verhalten. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 353,
    "field": "HF4",
    "topic": "Übernahme",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Übernahme“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      2
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 354,
    "field": "HF4",
    "topic": "Übernahme",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Übernahme“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Den Azubi möglichst nicht beteiligen.",
      "Pädagogische Unterstützung vermeiden."
    ],
    "correct": [
      1
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 355,
    "field": "HF4",
    "topic": "Übernahme",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Übernahme“?",
    "a": [
      "Übernahmegespräche klären Perspektiven und Bedingungen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 356,
    "field": "HF4",
    "topic": "Übernahme",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Übernahme“?",
    "a": [
      "Alle Entscheidungen nach Sympathie treffen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Übernahmegespräche klären Perspektiven und Bedingungen."
    ],
    "correct": [
      3
    ],
    "exp": "Übernahmegespräche klären Perspektiven und Bedingungen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 357,
    "field": "HF4",
    "topic": "Weiterbildung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Weiterbildung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden."
    ],
    "correct": [
      1
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 358,
    "field": "HF4",
    "topic": "Weiterbildung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Weiterbildung“?",
    "a": [
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Nur mündlich und ohne Nachweis handeln."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 359,
    "field": "HF4",
    "topic": "Weiterbildung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Weiterbildung“?",
    "a": [
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Pädagogische Unterstützung vermeiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 360,
    "field": "HF4",
    "topic": "Weiterbildung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Weiterbildung“?",
    "a": [
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Nach der Ausbildung können Fortbildungswege aufgezeigt werden.",
      "Den Azubi möglichst nicht beteiligen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      1
    ],
    "exp": "Nach der Ausbildung können Fortbildungswege aufgezeigt werden. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 361,
    "field": "HF4",
    "topic": "Prüfungsangst",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Prüfungsangst“?",
    "a": [
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 362,
    "field": "HF4",
    "topic": "Prüfungsangst",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Prüfungsangst“?",
    "a": [
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Pädagogische Unterstützung vermeiden.",
      "Die zuständige Stelle grundsätzlich umgehen."
    ],
    "correct": [
      1
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 363,
    "field": "HF4",
    "topic": "Prüfungsangst",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Prüfungsangst“?",
    "a": [
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen."
    ],
    "correct": [
      0
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 364,
    "field": "HF4",
    "topic": "Prüfungsangst",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Prüfungsangst“?",
    "a": [
      "Pädagogische Unterstützung vermeiden.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Probeprüfungen und Struktur helfen gegen Prüfungsangst."
    ],
    "correct": [
      3
    ],
    "exp": "Probeprüfungen und Struktur helfen gegen Prüfungsangst. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 365,
    "field": "HF4",
    "topic": "Beendigung",
    "type": "single",
    "q": "Die Abschlussprüfung steht bevor. Welche Vorgehensweise passt zum Thema „Beendigung“?",
    "a": [
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen.",
      "Den Azubi möglichst nicht beteiligen."
    ],
    "correct": [
      0
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 366,
    "field": "HF4",
    "topic": "Beendigung",
    "type": "single",
    "q": "Der Azubi besteht die Prüfung nicht. Welche Vorgehensweise passt zum Thema „Beendigung“?",
    "a": [
      "Nur mündlich und ohne Nachweis handeln.",
      "Pädagogische Unterstützung vermeiden.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen."
    ],
    "correct": [
      3
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 367,
    "field": "HF4",
    "topic": "Beendigung",
    "type": "single",
    "q": "Die Ausbildung endet bald. Welche Vorgehensweise passt zum Thema „Beendigung“?",
    "a": [
      "Den Azubi möglichst nicht beteiligen.",
      "Nur mündlich und ohne Nachweis handeln.",
      "Eine sachfremde Maßnahme ohne Bezug zur Ausbildung wählen.",
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen."
    ],
    "correct": [
      3
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  },
  {
    "id": 368,
    "field": "HF4",
    "topic": "Beendigung",
    "type": "single",
    "q": "Ein Übernahmegespräch wird geplant. Welche Vorgehensweise passt zum Thema „Beendigung“?",
    "a": [
      "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen.",
      "Rechtsgrundlagen ignorieren und spontan entscheiden.",
      "Die zuständige Stelle grundsätzlich umgehen.",
      "Alle Entscheidungen nach Sympathie treffen."
    ],
    "correct": [
      0
    ],
    "exp": "Beendigung kann durch Bestehen, Zeitablauf oder Kündigung erfolgen. In IHK-Aufgaben ist meist die strukturierte, rechtssichere und pädagogisch begründete Lösung richtig."
  }
];
