const heroBg = document.querySelector('.herosection-bg');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;

    // Zoom in background image as user scrolls
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    const zoomProgress = Math.min(scrollY / heroHeight, 1);
    const scale = 1 + zoomProgress * 0.25;
    heroBg.style.transform = `scale(${scale})`;

    // Hide navbar when page is 80% scrolled
    if (scrollPercent >= 80) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
});

