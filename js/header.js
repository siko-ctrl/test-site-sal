document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in a blog page
    const isBlogPage = window.location.pathname.includes('/blog_pages/');
    const pathPrefix = isBlogPage ? '../' : './';

    const headerHtml = `
    <nav class="nav-fixed fixed w-full z-50" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px); height: 4rem;">
        <div class="container mx-auto px-4 h-full">
            <div class="flex justify-between items-center h-full">
                <!-- Logo -->
                <a href="${pathPrefix}index.html" class="flex items-center">
                    <img src="${pathPrefix}images/salvium_wordmark_white_1024x1024px.svg" alt="Salvium Logo" class="w-24 opacity-100" style="height: auto;">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <!-- Get Started Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Get Started
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${pathPrefix}exchanges.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Exchanges</a>
                                <a href="${pathPrefix}about.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">About</a>
                                <a href="${pathPrefix}papers.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Lite Paper</a>
                                <a href="${pathPrefix}download.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Downloads</a>
                            </div>
                        </div>
                    </div>

                    <!-- Knowledge Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Knowledge
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${pathPrefix}faq.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">FAQ</a>
                                <a href="https://siko-ctrl.github.io/docs-salvium/" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Knowledge Base</a>
                                <a href="${pathPrefix}blogs.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Blog</a>
                            </div>
                        </div>
                    </div>

                    <!-- Tools Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Tools
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="${pathPrefix}stats.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Stats</a>
                                <a href="https://explorer.salvium.io/" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Explorer</a>
                                <a href="${pathPrefix}tools.html" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">3rd Party Tools</a>
                            </div>
                        </div>
                    </div>

                    <!-- Get Involved Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button font-josefin" style="color: #40E0D0">
                            Get Involved
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="https://discord.gg/salvium" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Discord</a>
                                <a href="https://github.com/salvium-io" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">GitHub</a>
                                <a href="https://twitter.com/salvium_io" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Twitter</a>
                                <a href="https://t.me/salviumcommunity" class="block px-4 py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Telegram</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="transition-colors" style="color: #40E0D0" data-mobile-menu>
                        <svg class="w-6 h-6 hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden hidden fixed w-full top-16 left-0 right-0" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px);" id="mobile-menu" data-mobile-menu-panel>
            <div class="px-4 py-3 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <!-- Get Started Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button font-josefin">
                        <span>Get Started</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="${pathPrefix}exchanges.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Exchanges</a>
                        <a href="${pathPrefix}about.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">About</a>
                        <a href="${pathPrefix}papers.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Lite Paper</a>
                        <a href="${pathPrefix}download.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Downloads</a>
                    </div>
                </div>

                <!-- Knowledge Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button font-josefin">
                        <span>Knowledge</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="${pathPrefix}faq.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">FAQ</a>
                        <a href="https://siko-ctrl.github.io/docs-salvium/" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Knowledge Base</a>
                        <a href="${pathPrefix}blogs.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Blog</a>
                    </div>
                </div>

                <!-- Tools Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button font-josefin">
                        <span>Tools</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="${pathPrefix}stats.html" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Stats</a>
                        <a href="https://explorer.salvium.io/" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Explorer</a>
                    </div>
                </div>

                <!-- Get Involved Section -->
                <div class="mobile-dropdown">
                    <button class="w-full flex justify-between items-center text-[#40E0D0] py-2 mobile-dropdown-button font-josefin">
                        <span>Get Involved</span>
                        <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="mobile-dropdown-menu hidden pl-4 pb-2">
                        <a href="https://discord.gg/salvium" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Discord</a>
                        <a href="https://github.com/salvium-io" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">GitHub</a>
                        <a href="https://twitter.com/salvium_io" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Twitter</a>
                        <a href="https://t.me/salviumcommunity" class="block py-2 transition-all duration-200 font-arial" style="color: #40E0D0">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insert the header HTML
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Initialize dropdowns after inserting the header
    initializeDropdowns();
});

// Function to initialize dropdowns
function initializeDropdowns() {
    // Desktop dropdowns
    document.querySelectorAll('.dropdown-container').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const menu = dropdown.querySelector('.dropdown-menu');

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close all other dropdown menus first
            document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                if (otherMenu !== menu && !otherMenu.classList.contains('hidden')) {
                    otherMenu.classList.add('hidden');
                }
            });
            
            menu.classList.toggle('hidden');
        });
    });

    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile dropdowns
    document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.mobile-dropdown-button');
        const menu = dropdown.querySelector('.mobile-dropdown-menu');

        button.addEventListener('click', () => {
            // Close all other mobile dropdown menus first
            document.querySelectorAll('.mobile-dropdown-menu').forEach(otherMenu => {
                if (otherMenu !== menu && !otherMenu.classList.contains('hidden')) {
                    otherMenu.classList.add('hidden');
                    const otherIcon = otherMenu.parentElement.querySelector('svg');
                    otherIcon.classList.remove('rotate-180');
                }
            });

            menu.classList.toggle('hidden');
            const icon = button.querySelector('svg');
            icon.classList.toggle('rotate-180');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    });
}
