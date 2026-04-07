// 


// CONSULTATION
const consultEl = document.querySelector('#consultation-placeholder');
if (consultEl) {
    consultEl.innerHTML = `
<section class="consultation-section" id="contact">
    <h2 class="consultation-title">GET A FREE CONSULTATION</h2>
    <div class="consultation-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJames+Consulting!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>`;
}

// FOOTER
const footerEl = document.querySelector('#footer-placeholder');
if (footerEl) {
    footerEl.innerHTML = `
<footer class="site-footer" id="footer">
    <div class="footer-inner">
        <div class="footer-col footer-brand">
            <h3 class="footer-logo">JAMES CONSULTING</h3>
            <p class="footer-info">500 Terry Francine Street,<br>San Francisco, CA 94158</p>
            <p class="footer-info">Mail: info@mysite.com</p>
            <p class="footer-info">Tel: 123-456-7890</p>
        </div>
        <div class="footer-col footer-menu">
            <h4 class="footer-col-title">MENU</h4>
            <ul class="footer-links">
                <li><a href="./index.html#about">About</a></li>
                <li><a href="./index.html#our-services">Services</a></li>
                <li><a href="./project.html">Projects</a></li>
                <li><a href="./pricing.html">Plans &amp; Pricing</a></li>
                <li><a href="./tools.html">Tools &amp; Tips</a></li>
                <li><a href="./index.html#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-col footer-socials">
            <h4 class="footer-col-title">SOCIALS</h4>
            <div class="footer-social-icons">
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="white"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
            </div>
            <p class="footer-copy">© 2035 by JAMES CONSULTING.<br>Powered and secured by <a href="#" class="footer-wix">Wix</a></p>
        </div>
    </div>
</footer>`;
}

// NAV
const navEl = document.querySelector('#nav-placeholder');
if (navEl) {
    navEl.innerHTML = `
<nav>
    <a href="./index.html" class="nav-james">JAMES CONSULTING</a>
    <ul class="nav-links">
        <li><a href="./index.html#about-us">About</a></li>
        <li><a href="./index.html#our-services">Services</a></li>
        <li><a href="./project.html">Projects</a></li>
        <li><a href="./pricing.html">Plans &amp; Pricing</a></li>
        <li><a href="./tools.html">Tools &amp; Tips</a></li>
        <li><a href="./index.html#contact">Contact</a></li>
    </ul>
    <a class="nav-login" href="#">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
        Log In
    </a>
</nav>`;
}

// CHAT
const chatEl = document.querySelector('#chat-placeholder');
if (chatEl) {
    chatEl.innerHTML = `
<div class="chat-btn" title="Chat with us">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
    </svg>
</div>`;
}

window.__componentsReady = true;
document.dispatchEvent(new Event('componentsReady'));







// DEMO POPUP
document.body.insertAdjacentHTML('beforeend', `
<div id="demo-popup" style="display:none;position:fixed;inset:0;background:white;z-index:9999;align-items:center;justify-content:center;flex-direction:column;text-align:center;">
    <button onclick="document.getElementById('demo-popup').style.display='none'" style="position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;font-size:1.5rem;cursor:pointer;">✕</button>
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:2.5rem;font-weight:300;margin-bottom:1rem;">Demo Mode</h2>
    <p style="font-family:'Raleway',sans-serif;font-size:0.95rem;color:#555;margin-bottom:2rem;">To make this template yours, start editing it.</p>
    <button onclick="document.getElementById('demo-popup').style.display='none'" style="background:#111;color:white;border:none;padding:1rem 4rem;font-family:'Raleway',sans-serif;font-size:0.9rem;cursor:pointer;">OK</button>
</div>
`);

// Login click
const navLogin = document.querySelector('.nav-login');
if (navLogin) {
    navLogin.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('demo-popup').style.display = 'flex';
    });
}






