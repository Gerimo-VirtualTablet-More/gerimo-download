import { Tablet } from './tablet.js';

export class Page {
    constructor(contentElementId) {
        this.contentElement = document.getElementById(contentElementId);
        this.init();
    }

    init() {
        this.render();
        this.setupEventHandlers();
        this.setupSmoothScroll();
    }

    render() {
        this.contentElement.innerHTML = `
            <section class="hero">
                <div class="hero-content">
                    <h1>Gerimo</h1>
                    <p class="hero-description">
                        Everything you touch, draw, or type on your device is transmitted to Windows as genuine mouse, keyboard, 
                        or pen input with extremely low latency and high precision.
                    </p>
                    
                    <div class="hero-use-cases">
                        <div class="use-case">
                            <span class="emoji">🎨</span>
                            <span>Drawing tablet with stylus support</span>
                        </div>
                        <div class="use-case">
                            <span class="emoji">💼</span>
                            <span>Remote desktop control & presentations</span>
                        </div>
                        <div class="use-case">
                            <span class="emoji">⚙️</span>
                            <span>AI shortcuts & workflow automation</span>
                        </div>
                    </div>

                    <div class="hero-specs">
                        <span>Multi-monitor support</span>
                        <span>•</span>
                        <span>WiFi, Bluetooth, USB</span>
                        <span>•</span>
                        <span>Low latency</span>
                    </div>

                    <div class="cta-group">
                        <a href="#download" class="btn btn-primary">Download</a>
                        <a href="#features" class="btn btn-secondary">Features</a>
                    </div>
                </div>
            </section>

            <div class="container">
                <section id="download" class="section">
                    <h2>Download</h2>
                    
                    <div class="download-grid">
                        <div class="download-card">
                            <div class="card-header">
                                <span class="platform-badge">Windows</span>
                                <h3>Windows Server</h3>
                            </div>
                            <p>Receives input from your Android device and simulates it via the Windows API.</p>
                            <ul>
                                <li>Windows 10/11</li>
                                <li>Automatic network discovery</li>
                                <li>Multi-monitor support</li>
                            </ul>
                            <button id="btn-github" class="download-btn">Download for Windows</button>
                        </div>

                        <div class="download-card">
                            <div class="card-header">
                                <span class="platform-badge">Android</span>
                                <h3>Android Client</h3>
                            </div>
                            <p>Transmits pen data (position, pressure, tilt) in real time via UDP.</p>
                            <ul>
                                <li>Android 8.0+</li>
                                <li>All stylus types supported</li>
                                <li>Local profile storage</li>
                            </ul>
                            <button id="btn-playstore" class="download-btn">Download for Android</button>
                        </div>
                    </div>
                </section>

                <section id="features" class="section">
                    <h2>Features</h2>
                    
                    <div class="features-grid">
                        <div class="feature">
                            <h3>🛠️ Modular UI</h3>
                            <p>Flexible control bar—customize, move freely, switch modes without interrupting work.</p>
                        </div>

                        <div class="feature">
                            <h3>🖊️ Professional Pen</h3>
                            <p>High precision graphics tablet for Windows drawing and note-taking apps.</p>
                        </div>

                        <div class="feature">
                            <h3>🤖 AI Shortcuts</h3>
                            <p>Create macros and automations in seconds. Trigger with physical stylus buttons.</p>
                        </div>

                        <div class="feature">
                            <h3>👆 Gesture Control</h3>
                            <p>Touch gestures, trackpad mode, pinch to zoom with visual feedback.</p>
                        </div>

                        <div class="feature">
                            <h3>⌨️ Keyboard Input</h3>
                            <p>Type directly from Android—every keystroke sent in real time to Windows.</p>
                        </div>

                        <div class="feature">
                            <h3>🖥️ Window Control</h3>
                            <p>Minimize, maximize, close apps. Quick Ctrl+Z / Ctrl+Y access.</p>
                        </div>
                    </div>

                    <div class="language-note">
                        Available in English, German, Spanish, French, Italian, Korean, Portuguese, Russian, Turkish, Chinese, Hindi, Japanese, Indonesian, Arabic
                    </div>
                </section>
            </div>

            <footer>
                <div class="footer-links">
                    <a href="https://gerimo-virtualtablet-more.github.io/gerimo-privacy-policy/">Privacy Policy</a>
                </div>
                <p>Gerimo © 2025</p>
            </footer>
        `;
    }

    setupEventHandlers() {
        const playstoreButton = this.contentElement.querySelector('#btn-playstore');
        const githubButton = this.contentElement.querySelector('#btn-github');

        if (playstoreButton) {
            playstoreButton.addEventListener('click', () => this.openPlaystore());
        }
        if (githubButton) {
            githubButton.addEventListener('click', () => this.openMicrosoftPage());
        }
    }

    openPlaystore() {
        window.open('https://play.google.com/store/apps/details?id=com.antozstudios.gerimo', '_blank');
    }

    openMicrosoftPage() {
        window.open('https://apps.microsoft.com/detail/9P8XMM7RGJRT?hl=neutral&gl=DE&ocid=pdpshare', '_blank');
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                const target = href ? document.querySelector(href) : null;
                if (target) {
                    e.preventDefault();
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
