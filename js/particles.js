// Particle animation
let particleSystem;

function createParticle() {
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    const particle = document.createElement('div');
    
    // Random size between 2-4px
    const size = Math.random() * 2 + 2;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = '#40E0D0';
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.1';
    particle.style.pointerEvents = 'none';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    particles.appendChild(particle);
    
    // Animate the particle
    const animation = particle.animate([
        { transform: 'translate(0, 0)', opacity: 0.1 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    animation.onfinish = () => {
        if (particle.parentNode) {
            particle.remove();
            if (particleSystem) createParticle();
        }
    };
}

// Initialize particle system
function initParticles() {
    if (particleSystem) return; // Already initialized
    particleSystem = true;
    
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    // Clear any existing particles
    particles.innerHTML = '';
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}

// Create initial particles
document.addEventListener('DOMContentLoaded', initParticles);

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        particleSystem = false;
    } else {
        initParticles();
    }
});
