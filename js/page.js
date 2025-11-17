import { Tablet } from './tablet.js';

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
<section class="hero">
    <div class="hero-content">
        <h1>Gerimo</h1>
        <p class="headline-large">
            Verwandle dein Android-Gerät in ein professionelles Eingabegerät für Windows.<br>
            Nutze Stift-Druck, Neigung und Touch-Gesten mit Echtzeit-Übertragung via UDP.
        </p>
        <div class="cta-group">
            <a href="#download" class="btn btn-filled">Jetzt herunterladen</a>
            <a href="#features" class="btn btn-outlined">Features ansehen</a>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <section id="download" class="section">
            <div class="section-header">
                <h2 class="title-large">Download</h2>
                <p class="body-large">Server und Client für dein individuelles Setup</p>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <span class="label-large">Windows</span>
                    <div>
                        <h3 class="title-medium">Windows Server</h3>
                        <p class="body-medium">
                            Der Windows-Server empfängt Eingaben von deinem Android-Gerät und simuliert sie über die Windows API.<br>
                            Automatische Erkennung im Netzwerk oder manuelle Konfiguration möglich.
                        </p>
                        <ul class="card-list">
                            <li>Windows 10/11 erforderlich</li>
                            <li>Automatische Serversuche (NSD)</li>
                            <li>Manuelle Port-Konfiguration</li>
                            <li>Multi-Monitor Workarea Support</li>
                        </ul>
                        <button class="card-button primary">Windows Server herunterladen</button>
                    </div>
                </div>
                <div class="card">
                    <span class="label-large">Android</span>
                    <div>
                        <h3 class="title-medium">Android Client</h3>
                        <p class="body-medium">
                            Die Android-App überträgt Stift-Daten (Position, Druck, Neigung) in Echtzeit via UDP.<br>
                            Erstelle Profile für verschiedene Workflows und speichere alles lokal.
                        </p>
                        <ul class="card-list">
                            <li>Android 8.0+ (API 26+)</li>
                            <li>Stylus-Support (alle Typen)</li>
                            <li>Profile & Shortcuts lokal gespeichert</li>
                            <li>Multi-Monitor Workarea Support</li>
                            <li>JSON Import/Export</li>
                        </ul>
                        <button class="card-button secondary">Android Client herunterladen</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="features" class="section">
            <div class="section-header">
                <h2 class="title-large">Features</h2>
                <p class="body-large">Alles, was Gerimo einzigartig macht</p>
            </div>
            <div class="features-list">
                <div class="feature-item">
                    <div class="feature-number">01</div>
                    <h3 class="feature-title">Profile & Shortcut-Profile</h3>
                    <p class="feature-description">
                        Erstelle individuelle Profile für jeden Workflow: Streaming, Zeichnen, Modellierung.<br>
                        Jedes Profil kann mehrere Shortcut-Profile enthalten – zum Beispiel ein Streaming-Profil mit separaten Shortcuts für OBS oder verschiedene Spiele.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">02</div>
                    <h3 class="feature-title">KI-gestützte Shortcut-Generierung</h3>
                    <p class="feature-description">
                        Erstelle Shortcuts manuell oder lass sie von der KI generieren.<br>
                        Benötigt wird ein OpenRouter API-Key. Ein kostenloses Modell wird automatisch gewählt. Mit Guthaben kannst du ohne Rate-Limits arbeiten.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">03</div>
                    <h3 class="feature-title">Universeller Stylus-Support</h3>
                    <p class="feature-description">
                        Unterstützt alle Stylus-Typen.<br>
                        Übertragung von Position, Druck und Neigung in Echtzeit via UDP an den Windows-Server, wo die Eingaben über die Windows API simuliert werden.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">04</div>
                    <h3 class="feature-title">Gesten & Integriertes Touchpad</h3>
                    <p class="feature-description">
                        Aktiviere Zoom-Gesten mit zwei Fingern oder nutze das integrierte Touchpad für präzise Steuerung.<br>
                        Optimiert die Kontrolle je nach Anwendungsfall.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">05</div>
                    <h3 class="feature-title">Flexibles Toolbar-Layout</h3>
                    <p class="feature-description">
                        Die Toolbar kann links oder rechts positioniert werden – ideal für Links- und Rechtshänder.<br>
                        Freie Wahl des Arbeitsbereichs ermöglicht intuitive Anpassung an dein Setup.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-number">06</div>
                    <h3 class="feature-title">Lokale Datensicherheit</h3>
                    <p class="feature-description">
                        Alle Profile und Shortcuts werden lokal gespeichert.<br>
                        Import und Export als JSON-Dateien für einfaches Backup und Sharing zwischen Geräten.<br>
                        Automatische oder manuelle Serververbindung.
                    </p>
                </div>
            </div>
        </section>
    </div>
</section>
<footer>
    <div class="footer-content">
        <p>Gerimo © 2025</p>
    </div>
</footer>
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
    new Tablet('tablet');
    new Page('content');
});
