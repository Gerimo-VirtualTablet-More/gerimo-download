export class Tablet {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.isExpanded = false;
        this.onExpandCallbacks = [];
        this.init();
    }

    init() {
        this.element.addEventListener('click', (e) => {
            if (!this.isExpanded && !e.target.closest('.website-content')) {
                this.expand();
            }
        });

        this.element.addEventListener('touchstart', (e) => {
            if (!this.isExpanded) {
                e.preventDefault();
                this.expand();
            }
        }, { passive: false });
    }

    expand() {
        this.isExpanded = true;
        this.element.classList.remove('initial');
        this.element.classList.add('active');
        this.onExpandCallbacks.forEach(callback => callback());
    }

    onExpand(callback) {
        this.onExpandCallbacks.push(callback);
    }

    getState() {
        return {
            isExpanded: this.isExpanded
        };
    }
}
