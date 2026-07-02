/* =============================================
   PORTFOLIO — DIABY MADIBA
   script.js
   ============================================= */

/* ===== NAVIGATION ===== */

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* Menu mobile */
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-liens');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* Lien actif selon la section visible */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-liens a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ===== ANIMATIONS D'ENTRÉE AU SCROLL ===== */

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

/* ===== PROJETS DYNAMIQUES ===== */

const grillePhares = document.querySelector('.grille-projets-phares');
const grilleAutres = document.querySelector('.grille-projets');
const delaisReveal = ['', 'delay-1', 'delay-2', 'delay-3'];

function carteProjetPhareHTML(projet, delai) {
  return `
    <a href="${projet.lienDetail}" class="carte-projet carte-projet-phare reveal ${delai}">
      <div class="carte-image ${projet.gradientClass}">
        <span class="badge-phare">★ Projet phare</span>
        <img src="${projet.image}" alt="${projet.imageAlt}">
        <div class="carte-survol">
          <span class="survol-btn survol-btn-bleu">Voir le projet complet</span>
        </div>
      </div>
      <div class="carte-contenu">
        <div class="carte-tags">
          ${projet.tags.map(tag => `<span class="carte-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="carte-titre">${projet.titre}</h3>
        <p class="carte-texte">${projet.description}</p>
        <div class="carte-pied">
          <span class="carte-lien">Voir le détail →</span>
        </div>
      </div>
    </a>`;
}

function carteProjetHTML(projet, delai) {
  return `
    <div class="carte-projet reveal ${delai}">
      <div class="carte-image carte-image-statique ${projet.gradientClass}">
        <img src="${projet.image}" alt="${projet.imageAlt}">
      </div>
      <div class="carte-contenu">
        <div class="carte-tags">
          ${projet.tags.map(tag => `<span class="carte-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="carte-titre">${projet.titre}</h3>
        <p class="carte-texte">${projet.description}</p>
        <div class="carte-pied carte-pied-liens">
          <a href="${projet.lienLive}" target="_blank" rel="noopener" class="carte-lien">Voir le site →</a>
          <a href="${projet.lienGithub}" target="_blank" rel="noopener" class="carte-lien-github" aria-label="GitHub">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>`;
}

async function chargerProjets() {
  try {
    const reponse = await fetch('data/projets.json');
    const projets = await reponse.json();
    const phares = projets.filter(p => p.phare);
    const autres = projets.filter(p => !p.phare);

    grillePhares.innerHTML = phares.map((p, i) => carteProjetPhareHTML(p, delaisReveal[i] || '')).join('');
    grilleAutres.innerHTML = autres.map((p, i) => carteProjetHTML(p, delaisReveal[i] || '')).join('');

    document.querySelectorAll('#projects .reveal').forEach(el => revealObserver.observe(el));
  } catch (err) {
    console.error('Erreur de chargement des projets :', err);
  }
}

chargerProjets();

/* ===== BARRES DE COMPÉTENCES ===== */

/* Applique la largeur depuis data-level au chargement de la page */
document.querySelectorAll('.barre-niveau[data-level]').forEach(bar => {
  bar.style.width = bar.dataset.level + '%';
});

/* ===== RETOUR EN HAUT ===== */

const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== FORMULAIRE DE CONTACT ===== */

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
    showStatus('Veuillez remplir tous les champs obligatoires.', 'err');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showStatus('Veuillez entrer une adresse email valide.', 'err');
    return;
  }

  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;

  setTimeout(() => {
    showStatus('✅ Message envoyé ! Je vous répondrai sous 24h.', 'ok');
    form.reset();
    btn.innerHTML = '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Envoyer le message';
    btn.disabled = false;
  }, 1500);
});

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = 'form-statut form-statut-' + type;
}
