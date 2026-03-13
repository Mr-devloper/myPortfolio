// ============================================
// MIZANUR RAHMAN — PORTFOLIO JS 2024
// ============================================

// ---- SPLASH SCREEN ----
const splash = document.getElementById('splash');
const tdataEl = document.getElementById('tdata');

const txt = 'Welcome · Click to explore';
let i = 0;
function typeWriter() {
  if (i < txt.length) {
    tdataEl.textContent += txt.charAt(i++);
    setTimeout(typeWriter, 60);
  }
}
setTimeout(typeWriter, 400);

function hideSplash() {
  splash.classList.add('hide');
  document.getElementById('hero').classList.add('hero-loaded');
  setTimeout(() => {
    splash.style.display = 'none';
    initReveal();
  }, 650);
}

splash.addEventListener('click', hideSplash);
// Auto-hide after load bar finishes
setTimeout(hideSplash, 3200);

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
}, { passive: true });

// ---- ACTIVE NAV LINK ----
const sections = ['hero', 'about', 'skills', 'contact'];
function updateActiveNav() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const link = document.querySelector(`.nav-link[data-nav="${id}"]`);
    if (!link) return;
    if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

// ---- HAMBURGER / MOBILE MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

window.closeMobileMenu = function() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
};

// ---- INTERSECTION OBSERVER — REVEAL ----
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const skillBars = document.querySelectorAll('.skill-bar');

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), Number(delay));
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObs.observe(el));

  // Skill bars
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const w = bar.dataset.width;
        setTimeout(() => { bar.style.width = w + '%'; }, 200);
        barObs.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => barObs.observe(bar));
}

// In case splash auto-hides immediately for repeat visitors
if (document.readyState === 'complete') {
  // initReveal will be called when splash hides
}
