import { Tablet } from './tablet.js';

/**
 * Page Class
 * Manages the content and interactions of the Gerimo landing page
 */
export class Page {
    constructor(contentElementId) {
        this.contentElement = document.getElementById(contentElementId);
        this.init();
    }

    /**
     * Initialize the page
     */
    init() {
        this.render();
        this.setupEventHandlers();
        this.setupSmoothScroll();
    }

    /**
     * Render the page content
     */
    render() {
        this.contentElement.innerHTML = `
            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <h1>Gerimo</h1>
                    <p class="headline-large">
                        Turn your Android device into a professional input device for Windows.<br>
                        Use pen pressure, tilt, and touch gestures with real-time transmission via UDP.
                    </p>
                    <div class="cta-group">
                        <a href="#download" class="btn btn-filled">Download now</a>
                        <a href="#features" class="btn btn-outlined">View features</a>
                    </div>
                </div>
            </section>

            <!-- Main Content Container -->
            <div class="container">
                
                <!-- Download Section -->
                <section id="download" class="section">
                    <div class="section-header">
                        <h2 class="title-large">Download</h2>
                        <p class="body-large">Server and client for your individual setup</p>
                    </div>
                    
                    <div class="cards-grid">
                        <!-- Windows Server Card -->
                        <div class="card">
                            <span class="label-large">Windows</span>
                            <div>
                                <h3 class="title-medium">Windows Server</h3>
                                <p class="body-medium">
                                    The Windows server receives input from your Android device and simulates it via the Windows API.<br>
                                    Automatic discovery in the network or manual configuration possible.
                                </p>
                                <ul class="card-list">
                                    <li>Requires Windows 10/11</li>
                                    <li>Automatic server discovery (NSD)</li>
                                    <li>Manual port configuration</li>
                                    <li>Multi-monitor work area support</li>
                                </ul>
                                <button id="btn-github" class="card-button primary">
                                    Download Windows server
                                </button>
                            </div>
                        </div>

                        <!-- Android Client Card -->
                        <div class="card">
                            <span class="label-large">Android</span>
                            <div>
                                <h3 class="title-medium">Android Client</h3>
                                <p class="body-medium">
                                    The Android app transmits pen data (position, pressure, tilt) in real time via UDP.<br>
                                    Create profiles for different workflows and store everything locally.
                                </p>
                                <ul class="card-list">
                                    <li>Android 8.0+ (API 26+)</li>
                                    <li>Stylus support (all types)</li>
                                    <li>Profiles & shortcuts stored locally</li>
                                    <li>Multi-monitor work area support</li>
                                    <li>JSON import/export</li>
                                </ul>
                                <button id="btn-playstore" class="card-button secondary">
                                    Download Android client
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features Section -->
                <section id="features" class="section">
                    <div class="section-header">
                        <h2 class="title-large">Features</h2>
                        <p class="body-large">Everything that makes Gerimo unique</p>
                    </div>
                    
                    <div class="features-list">
                        <!-- Feature 01 -->
                        <div class="feature-item">
                            <div class="feature-number">01</div>
                            <h3 class="feature-title">Profiles & shortcut profiles</h3>
                            <p class="feature-description">
                                Create custom profiles for every workflow: streaming, drawing, modeling.<br>
                                Each profile can contain multiple shortcut profiles – for example, a streaming profile with separate shortcuts for OBS or different games.
                            </p>
                        </div>

                        <!-- Feature 02 -->
                        <div class="feature-item">
                            <div class="feature-number">02</div>
                            <h3 class="feature-title">AI-powered shortcut generation</h3>
                            <p class="feature-description">
                                Create shortcuts manually or let the AI generate them for you.<br>
                                An OpenRouter API key is required. A free model is selected automatically. With credit, you can work without rate limits.<br>
                                <a href="#openrouter-info" class="info-link">Show Model-ID & API Info</a>
                            </p>
                        </div>

                        <!-- Feature 03 -->
                        <div class="feature-item">
                            <div class="feature-number">03</div>
                            <h3 class="feature-title">Universal stylus support</h3>
                            <p class="feature-description">
                                Supports all types of stylus.<br>
                                Transmits position, pressure, and tilt in real time via UDP to the Windows server, where input is simulated through the Windows API.
                            </p>
                        </div>

                        <!-- Feature 04 -->
                        <div class="feature-item">
                            <div class="feature-number">04</div>
                            <h3 class="feature-title">Gestures & integrated touchpad</h3>
                            <p class="feature-description">
                                Enable two-finger pinch gestures for zooming or use the integrated touchpad for precise control.<br>
                                Optimizes control depending on the use case.
                            </p>
                        </div>

                        <!-- Feature 05 -->
                        <div class="feature-item">
                            <div class="feature-number">05</div>
                            <h3 class="feature-title">Flexible toolbar layout</h3>
                            <p class="feature-description">
                                Place the toolbar on the left or right – ideal for left- and right-handed users.<br>
                                Flexible work area selection lets you intuitively adapt to your setup.
                            </p>
                        </div>

                        <!-- Feature 06 -->
                        <div class="feature-item">
                            <div class="feature-number">06</div>
                            <h3 class="feature-title">Local data security</h3>
                            <p class="feature-description">
                                All profiles and shortcuts are stored locally.<br>
                                Import and export as JSON files for easy backup and sharing between devices.<br>
                                Automatic or manual server connection.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- OpenRouter Info Section -->
                <section id="openrouter-info" class="info-section">
                    <div class="info-header">
                        <h2 class="title-medium">OpenRouter API & Model-ID Explanation</h2>
                    </div>
                    
                    <div class="info-content body-medium">
                        <ol class="setup-steps">
                            <li>
                                <strong>Generate API key:</strong>
                                Go to <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a>, 
                                log in with Google/GitHub, and copy your key.
                            </li>
                            
                            <li>
                                <strong>Find a model:</strong>
                                Visit the <a href="https://openrouter.ai/models" target="_blank" rel="noopener">OpenRouter Models</a> page 
                                and select your preferred model.<br>
                                Free models are marked with the <span style="font-weight:bold;">Free</span> badge.
                            </li>
                            
                            <li>
                                <strong>Model-ID format:</strong>
                                The Model-ID follows this pattern: <code>provider/model-name:suffix</code>.<br>
                                Examples:<br>
                                • <code>google/gemini-2.0-flash-thinking-exp:free</code><br>
                                • <code>meta-llama/llama-3.2-3b-instruct:free</code><br>
                                • <code>openai/gpt-4o</code><br>
                                • <code>anthropic/claude-3.5-sonnet</code>
                            </li>
                            
                            <li>
                                <strong>Copy & paste the ID:</strong>
                                Copy the full Model-ID <b>including the provider and any suffix</b> 
                                and paste it into the field in Gerimo.
                            </li>
                        </ol>
                        
                        <div class="info-tip">
                            <strong>Tip:</strong> Start with free models like 
                            <code>google/gemini-2.0-flash-thinking-exp:free</code> 
                            to try the feature without any cost.
                        </div>
                        
                        <div class="info-disclaimer">
                            <strong>Disclaimer – Commercial Use & Liability:</strong><br>
                            The Application only provides a technical interface to use any AI model available through OpenRouter. 
                            The selection and usage of models—including their use for commercial purposes—are the sole responsibility of the user. 
                            Please verify that your selected model is licensed and permitted for your intended use case, especially for commercial applications. 
                            The Service Provider is not responsible for any license violations or misuse of AI models by the user.
                        </div>
                    </div>
                </section>
                
            </div>

            <!-- Footer -->
            <footer>
                <div class="footer-content">
                    <p>Gerimo © 2025</p>
                </div>
                <div class="footer-content">
                <p>Made with ❤️</p>
                </div>
                <div class="footer-content">
<a href="https://gerimo-virtualtablet-more.github.io/gerimo-privacy-policy/">
  Privacy Policy
</a>
                </div>
            </footer>
        `;
    }

    /**
     * Setup event handlers for interactive elements
     */
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

    /**
     * Open Google Play Store page
     */
    openPlaystore() {
        window.open(
            'https://play.google.com/store/apps/details?id=com.gerimo.client',
            '_blank'
        );
    }

    /**
     * Open GitHub page
     */
    openMicrosoftPage() {
        window.open(
            'https://apps.microsoft.com/detail/9P8XMM7RGJRT?hl=neutral&gl=DE&ocid=pdpshare',
            '_blank'
        );
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

/**
 * Initialize page on DOM load
 */
window.addEventListener('DOMContentLoaded', () => {
    new Tablet('tablet');
    new Page('content');
});