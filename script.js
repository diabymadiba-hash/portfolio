/* =====================================================
   PORTFOLIO — DIABY MADIBA
   script.js
   ===================================================== */

/* ── Nav scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Mobile menu ── */
const navToggle  = document.getElementById('navToggle');
const navMobile  = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMobile.classList.toggle('open');
});
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ── Typing effect ── */
const phrases = [
  'Développeur Full-Stack Junior',
  'Passionné React & Node.js',
  'Créateur d\'expériences web',
  'Basé à Tourcoing 📍',
];
const typingEl = document.getElementById('typingEl');
let pi = 0, ci = 0, deleting = false;

function type() {
  const phrase = phrases[pi];
  const cursor = '<span class="cursor"></span>';
  if (!deleting) {
    ci++;
    typingEl.innerHTML = phrase.slice(0, ci) + cursor;
    if (ci === phrase.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    ci--;
    typingEl.innerHTML = phrase.slice(0, ci) + cursor;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();

/* ── Reveal on scroll ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

/* ── Skill bars ── */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill__fill[data-level]').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills__card').forEach(card => skillObserver.observe(card));

/* ── Scroll-to-top ── */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Contact form ── */
const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  if (!fname || !lname || !email || !subject || !message) {
    showStatus('Veuillez remplir tous les champs obligatoires.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showStatus('Veuillez entrer une adresse email valide.', 'error');
    return;
  }

  const btn = form.querySelector('.form__submit');
  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;

  setTimeout(() => {
    showStatus('✅ Message envoyé ! Je vous répondrai sous 24h.', 'success');
    form.reset();
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Envoyer le message';
    btn.disabled = false;
  }, 1500);
});

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form__status form__status--' + type;
}
