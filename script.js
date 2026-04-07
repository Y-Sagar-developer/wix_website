












// const nav = document.querySelector('nav');

// // Hero zoom — only index page లో
// const heroBg = document.querySelector('.herosection-bg');
// if (heroBg) {
//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         const heroHeight = document.querySelector('.hero-section').offsetHeight;
//         const zoomProgress = Math.min(scrollY / heroHeight, 1);
//         const scale = 1.25 - zoomProgress * 0.25;
//         heroBg.style.transform = `scale(${scale})`;
//     });
// }

// // Navbar hide — అన్ని pages లో పని చేస్తుంది
// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollPercent = (scrollY / docHeight) * 100;

//     if (scrollPercent >= 5) {
//         nav.classList.add('hidden');
//     } else {
//         nav.classList.remove('hidden');
//     }
// });

// // Testimonials slider — only index page లో
// const slides = document.querySelectorAll('.testi-slide');
// const dots = document.querySelectorAll('.testi-dot');

// if (slides.length > 0) {
//     let current = 0;

//     function goTo(n) {
//         slides[current].classList.remove('active');
//         dots[current].classList.remove('active');
//         current = (n + slides.length) % slides.length;
//         slides[current].classList.add('active');
//         dots[current].classList.add('active');
//     }

//     document.querySelector('.testi-prev').addEventListener('click', () => goTo(current - 1));
//     document.querySelector('.testi-next').addEventListener('click', () => goTo(current + 1));
//     dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

//     setInterval(() => goTo(current + 1), 5000);
// }

// // Show more / Show less
// document.querySelectorAll('.svc-more').forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         e.preventDefault();
//         var card = btn.closest('.svc-card');
//         var body = card.querySelector('.svc-body');
//         var extra = card.querySelector('.svc-body-extra');
//         if (!extra) return;
//         if (!body.dataset.short) {
//             body.dataset.short = body.textContent.trim();
//         }
//         var isOpen = extra.classList.contains('open');
//         if (!isOpen) {
//             body.textContent = body.textContent.trim() + ' ' + extra.textContent.trim();
//             extra.classList.add('open');
//             btn.textContent = 'Show less';
//         } else {
//             sessionStorage.setItem('scrollPos', window.scrollY);

//             location.reload();


//         }
//     });
// });



// window.addEventListener('load', function () {
//     var pos = sessionStorage.getItem('scrollPos');
//     if (pos) {
//         window.scrollTo(0, parseInt(pos));
//         sessionStorage.removeItem('scrollPos');
//     }
// })



// Scroll restore
var pos = sessionStorage.getItem('scrollPos');
if (pos) {
    window.scrollTo(0, parseInt(pos));
    sessionStorage.removeItem('scrollPos');
}

function initApp() {

    // Navbar hide/show
    document.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        const currentScrollY = document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (currentScrollY / docHeight) * 100;

        if (nav) {
            if (scrollPercent >= 5) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        }

        // Hero zoom
        const heroBg = document.querySelector('.herosection-bg');
        if (heroBg) {
            const heroHeight = document.querySelector('.hero-section').offsetHeight;
            const zoomProgress = Math.min(currentScrollY / heroHeight, 1);
            const scale = 1.25 - zoomProgress * 0.25;
            heroBg.style.transform = `scale(${scale})`;
        }
    }, true);

    // Testimonials slider
    const slides = document.querySelectorAll('.testi-slide');
    const dots = document.querySelectorAll('.testi-dot');

    if (slides.length > 0) {
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

        setInterval(() => goTo(current + 1), 5000);
    }

    // Show more / Show less
    document.querySelectorAll('.svc-more').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var card = btn.closest('.svc-card');
            var body = card.querySelector('.svc-body');
            var extra = card.querySelector('.svc-body-extra');
            if (!extra) return;

            if (!body.dataset.original) {
                body.dataset.original = body.textContent.trim();
            }

            var isOpen = extra.classList.contains('open');

            if (!isOpen) {
                body.textContent = body.dataset.original + ' ' + extra.textContent.trim();
                extra.classList.add('open');
                btn.textContent = 'Show less';
            } else {
                sessionStorage.setItem('scrollPos', window.scrollY);
                location.reload();
            }
        });
    });
}

// components.js ready అయిన తర్వాత init చేయి
if (window.__componentsReady) {
    initApp();
} else {
    document.addEventListener('componentsReady', initApp);
}