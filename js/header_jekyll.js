document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
    <nav class="nav-fixed fixed w-full z-50" style="background: rgba(30, 30, 30, 0.98); backdrop-filter: blur(8px); height: 4rem;">
        <div class="container mx-auto px-4 h-full">
            <div class="flex justify-between items-center h-full">
                <!-- Logo -->
                <a href="{{ site.baseurl }}/" class="flex items-center">
                    <img src="{{ site.baseurl }}/images/salvium_wordmark_white_1024x1024px.svg" alt="Salvium Logo" class="w-24 opacity-100" style="height: auto;">
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <!-- Get Started Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Get Started
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="{{ site.baseurl }}/exchanges" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Exchanges</a>
                                <a href="{{ site.baseurl }}/about" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">About</a>
                                <a href="{{ site.baseurl }}/papers" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Lite Paper</a>
                                <a href="{{ site.baseurl }}/download" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Downloads</a>
                            </div>
                        </div>
                    </div>

                    <!-- Knowledge Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Knowledge
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="{{ site.baseurl }}/faq" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">FAQ</a>
                                <a href="{{ site.baseurl }}/knowledge-base" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Knowledge Base</a>
                                <a href="{{ site.baseurl }}/blogs" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Blog</a>
                            </div>
                        </div>
                    </div>

                    <!-- Tools Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Tools
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="{{ site.baseurl }}/stats" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Stats</a>
                                <a href="https://explorer.salvium.io/" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Explorer</a>
                            </div>
                        </div>
                    </div>

                    <!-- Get Involved Dropdown -->
                    <div class="relative dropdown-container font-body">
                        <button class="flex items-center dropdown-button" style="color: #40E0D0">
                            Get Involved
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="dropdown-menu absolute left-0 mt-2 w-48 rounded-lg shadow-xl hidden" style="background: rgba(30, 30, 30, 0.98);">
                            <div class="py-1">
                                <a href="https://github.com/salvium" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">GitHub</a>
                                <a href="https://discord.gg/salvium" class="block px-4 py-2 transition-all duration-200" style="color: #40E0D0">Discord</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button class="mobile-menu-button p-2 focus:outline-none" style="color: #40E0D0">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insert the header HTML
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
});

// Function to initialize dropdowns
function initializeDropdowns() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Handle dropdown toggles
    dropdownButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenus[index].classList.toggle('hidden');
            
            // Close other dropdowns
            dropdownMenus.forEach((menu, i) => {
                if (i !== index) {
                    menu.classList.add('hidden');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdownMenus.forEach(menu => {
            menu.classList.add('hidden');
        });
    });

    // Prevent dropdown menu clicks from closing the menu
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// Initialize dropdowns
initializeDropdowns();
