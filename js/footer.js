document.addEventListener('DOMContentLoaded', function() {
    // Get the current path and base URL
    const currentPath = window.location.pathname;
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? 'https://siko-ctrl.github.io/salvium-site/' : '';
    const repoName = isGitHubPages ? '/salvium-site' : '';
    const basePath = isGitHubPages ? '' : './';
    const isInSubdirectory = !currentPath.includes('salvium-site');
    const imagePath = isInSubdirectory ? '../images/' : './images/';
    
    const footerHtml = `
    <footer class="border-t border-[#40E0D0]/10 mt-0 pt-16">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div class="text-center">
                    <img src="${imagePath}salvium_coin_square_white_512x512px_transparent.png" 
                         onerror="this.src='./images/salvium_coin_square_white_512x512px_transparent.png'"
                         alt="Salvium Logo" 
                         style="height: 80px; width: auto;" 
                         class="mb-6 mx-auto">
                    <p class="text-white max-w-md mx-auto mb-6 font-arial">Private blockchain with DeFi</p>
                    <!-- Social Icons -->
                    <div class="flex justify-center space-x-6">
                        <a href="https://x.com/salvium_io" class="hover:opacity-80 transition-opacity">
                            <i class="fa-brands fa-x-twitter text-2xl" style="color: #40E0D0 !important;"></i>
                        </a>
                        <a href="https://t.me/salviumcommunity="hover:opacity-80 transition-opacity">
                            <i class="fa-brands fa-telegram text-2xl" style="color: #40E0D0 !important;"></i>
                        </a>
                        <a href="https://discord.gg/salvium" class="hover:opacity-80 transition-opacity">
                            <i class="fa-brands fa-discord text-2xl" style="color: #40E0D0 !important;"></i>
                        </a>
                        <a href="https://github.com/salvium" class="hover:opacity-80 transition-opacity">
                            <i class="fa-brands fa-github text-2xl" style="color: #40E0D0 !important;"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-josefin font-semibold mb-4 text-[#40E0D0]">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="${baseUrl}about.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">About Us</a></li>
                        <li><a href="${baseUrl}blogs.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">Blog</a></li>
                        <li><a href="${baseUrl}faq.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">FAQ</a></li>
                        <li><a href="${baseUrl}exchanges.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">Exchanges</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-josefin font-semibold mb-4 text-[#40E0D0]">Tools</h4>
                    <ul class="space-y-2">
                        <li><a href="${baseUrl}download.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">Wallets</a></li>
                        <li><a href="https://explorer.salvium.io/" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">Explorer</a></li>
                        <li><a href=${baseUrl}stats.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">Stats</a></li>
                        <li><a href="${baseUrl}tools.html" style="color: #40E0D0 !important;" class="hover:text-[#40E0D0]/80 transition-colors font-arial">3rd Party Tools</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center text-white text-sm">
                <p class="font-arial">&copy; ${new Date().getFullYear()} Salvium Protocol. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Remove any existing footer
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.remove();
    }

    // Insert the new footer
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHtml;
    }
});
