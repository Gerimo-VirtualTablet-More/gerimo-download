export class Page {
    constructor(contentElementId) {
        this.contentElement = document.getElementById(contentElementId);
        this.init();
    }
    
    init() {
        this.render();
        this.setupSmoothScroll();
    }
    
    render() {
        this.contentElement.innerHTML = `
            section class=hero
                div class=hero-content
                    h1Gerimoh1
                    p class=headline-large
                        Verwandle dein Android-Gerät in ein professionelles Eingabegerät für Windows. 
                        Nutze Stift-Druck, Neigung und Touch-Gesten mit Echtzeit-Übertragung via UDP.
                    p
                    div class=cta-group
                        a href=#download class=btn btn-filledJetzt herunterladena
                        a href=#features class=btn btn-outlinedFeatures ansehena
                    div
                div
            section

            div class=container
                section id=download class=section
                    div class=section-header
                        h2 class=title-largeDownloadsh2
                        p class=body-largeServer und Client für dein individuelles Setupp
                    div

                    div class=cards-grid
                        div class=card
                            span class=label-largeWindowsspan
                            div
                                h3 class=title-mediumWindows Serverh3
                            div
                            p class=body-medium
                                Der Windows-Server empfängt Eingaben von deinem Android-Gerät und simuliert sie über die Windows API. 
                                Automatische Erkennung im Netzwerk oder manuelle Konfiguration möglich.
                            p
                            ul class=card-list
                                liWindows 1011 erforderlichli
                                liAutomatische Serversuche (NSD)li
                                liManuelle Port-Konfigurationli
                                liMulti-Monitor Workarea Supportli
                            ul
                            button class=card-button primaryWindows Server herunterladenbutton
                        div

                        div class=card
                            span class=label-largeAndroidspan
                            div
                                h3 class=title-mediumAndroid Clienth3
                            div
                            p class=body-medium
                                Die Android-App überträgt Stift-Daten (Position, Druck, Neigung) in Echtzeit via UDP. 
                                Erstelle Profile für verschiedene Workflows und speichere alles lokal.
                            p
                            ul class=card-list
                                liAndroid 8.0+ (API 26+)li
                                liStylus-Support (alle Typen)li
                                liProfile & Shortcuts lokal gespeichertli
                                liJSON ImportExportli
                            ul
                            button class=card-button secondaryAndroid Client herunterladenbutton
                        div
                    div
                section

                section id=features class=section
                    div class=section-header
                        h2 class=title-largeFeaturesh2
                        p class=body-largeFlexibel, individuell und präzise – für jeden Workflowp
                    div

                    div class=features-list
                        div class=feature-item
                            div class=feature-number01div
                            h3 class=feature-titleProfile & Shortcut-Profileh3
                            p class=feature-description
                                Erstelle individuelle Profile für jeden Workflow Streaming, Zeichnen, Modellierung. Jedes Profil kann mehrere Shortcut-Profile enthalten – zum Beispiel ein Streaming-Profil mit separaten Shortcuts für OBS oder verschiedene Spiele.
                            p
                        div

                        div class=feature-item
                            div class=feature-number02div
                            h3 class=feature-titleKI-gestützte Shortcut-Generierungh3
                            p class=feature-description
                                Erstelle Shortcuts manuell oder lass sie von der KI generieren. Benötigt wird ein OpenRouter API-Key. Ein kostenloses Modell wird automatisch gewählt. Mit Guthaben kannst du ohne Rate-Limits arbeiten.
                            p
                        div

                        div class=feature-item
                            div class=feature-number03div
                            h3 class=feature-titleUniverseller Stylus-Supporth3
                            p class=feature-description
                                Unterstützt alle Stylus-Typen. Übertragung von Position, Druck und Neigung in Echtzeit via UDP an den Windows-Server, wo die Eingaben über die Windows API simuliert werden.
                            p
                        div

                        div class=feature-item
                            div class=feature-number04div
                            h3 class=feature-titleGesten & Integriertes Touchpadh3
                            p class=feature-description
                                Aktiviere Zoom-Gesten mit zwei Fingern oder nutze das integrierte Touchpad für präzise Steuerung. Optimiert die Kontrolle je nach Anwendungsfall.
                            p
                        div

                        div class=feature-item
                            div class=feature-number05div
                            h3 class=feature-titleFlexibles Toolbar-Layouth3
                            p class=feature-description
                                Die Toolbar kann links oder rechts positioniert werden – ideal für Links- und Rechtshänder. Freie Wahl des Arbeitsbereichs ermöglicht intuitive Anpassung an dein Setup.
                            p
                        div

                        div class=feature-item
                            div class=feature-number06div
                            h3 class=feature-titleLokale Datensicherheith3
                            p class=feature-description
                                Alle Profile und Shortcuts werden lokal gespeichert. Import und Export als JSON-Dateien für einfaches Backup und Sharing zwischen Geräten. Automatische oder manuelle Serververbindung.
                            p
                        div
                    div
                section
            div

            footer
                div class=footer-content
                    pGerimo © 2025p
                div
            footer
        `;
    }
    
setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

}
window.addEventListener('DOMContentLoaded', () => {
    new Tablet('tablet'); // vorausgesetzt <div id="tablet" ...> im HTML vorhanden
    new Page('content');  // vorausgesetzt <div id="content"></div> im HTML vorhanden
});
