/**
 * InfraWatch Application
 * Main application logic and initialization
 */

class InfraWatch {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadDashboard();
    }

    setupEventListeners() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.handleTabClick(e));
        });

        // Modal close button
        const modalClose = document.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }

        // Modal overlay click
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.closeModal();
                }
            });
        }
    }

    handleTabClick(event) {
        const tabName = event.target.dataset.page;
        if (tabName) {
            this.switchPage(tabName);
        }
    }

    switchPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Remove active class from all tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        // Show selected page
        const selectedPage = document.querySelector(`[data-page="${pageName}"]`);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }

        // Mark tab as active
        const selectedTab = document.querySelector(`.nav-tab[data-page="${pageName}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        this.currentPage = pageName;
    }

    loadDashboard() {
        console.log('Loading dashboard...');
        // Dashboard initialization logic
    }

    openModal(infraId) {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.add('open');
            // Load infrastructure details
            this.loadInfraDetails(infraId);
        }
    }

    closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('open');
        }
    }

    loadInfraDetails(infraId) {
        console.log(`Loading details for infrastructure: ${infraId}`);
        // Fetch and display infrastructure details
    }

    initializeMap() {
        if (typeof L !== 'undefined') {
            // Leaflet map initialization
            console.log('Initializing map...');
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InfraWatch();
});

export default InfraWatch;