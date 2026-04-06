
const heroBg = document.querySelector('.herosection-bg');
const aboutBg = document.getElementById('aboutbg');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;



    // Hero zoom in on scroll
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    const zoomProgress = Math.min(scrollY / heroHeight, 1);

    // const scale = 1 + zoomProgress * 0.25;
    const scale = 1.25 - zoomProgress * 0.25;

    heroBg.style.transform = `scale(${scale})`;


    // About section parallax — bg moves up slower than content
    // const aboutSection = document.getElementById('about-us');
    // const aboutTop = aboutSection.getBoundingClientRect().top;
    // const aboutOffset = (aboutTop / window.innerHeight) * 40;
    // aboutBg.style.transform = `translateY(${aboutOffset}px)`;


    
    // Hide navbar when page is 80% scrolled
    if (scrollPercent >= 5) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
});

// Testimonials slider
const slides = document.querySelectorAll('.testi-slide');
const dots = document.querySelectorAll('.testi-dot');
let current = 0;



































































function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
}

document.querySelector('.testi-prev').addEventListener('click', () => goTo(current - 1));
document.querySelector('.testi-next').addEventListener('click', () => goTo(current + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

// Auto slide every 5s
setInterval(() => goTo(current + 1), 5000);


document.querySelectorAll('.svc-more').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var card = btn.closest('.svc-card');
        var body = card.querySelector('.svc-body');
        var extra = card.querySelector('.svc-body-extra');
        if (!extra) return;
        if (!body.dataset.short) {
            body.dataset.short = body.textContent.trim();
        }
        var isOpen = extra.classList.contains('open');
        if (!isOpen) {
            // append extra text seamlessly into body
            // body.textContent = body.dataset.short + ' ' + extra.textContent.trim();
            // extra.classList.add('open');
             body.textContent = body.dataset.short + ' ' + extra.textContent.trim();
            btn.textContent = 'Show less';
        } else {
            body.textContent = body.dataset.short;
            // extra.classList.remove('open');
            btn.textContent = 'Show more';
        }
    });
});