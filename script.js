const navbar = document.getElementById("navbar"); window.addEventListener("scroll", () => { navbar.classList.toggle("scrolled", window.scrollY > 20) }); const navToggle = document.getElementById("navToggle"), navMenu = document.querySelector(".nav-liens"); navToggle.addEventListener("click", () => { navToggle.classList.toggle("open"), navMenu.classList.toggle("open") }), navMenu.querySelectorAll("a").forEach(a => { a.addEventListener("click", () => { navToggle.classList.remove("open"), navMenu.classList.remove("open") }) }); const sections = document.querySelectorAll("section[id]"), navLinks = document.querySelectorAll(".nav-liens a"); window.addEventListener("scroll", () => { let current = ""; sections.forEach(s => { window.scrollY >= s.offsetTop - 100 && (current = s.id) }), navLinks.forEach(a => { a.classList.toggle("active", a.getAttribute("href") === "#" + current) }) }); const reveals = document.querySelectorAll(".reveal"), revealObserver = new IntersectionObserver(entries => { entries.forEach(e => { e.isIntersecting && (e.target.classList.add("visible"), revealObserver.unobserve(e.target)) }) }, { threshold: .12 }); reveals.forEach(el => revealObserver.observe(el)); const grillePhares = document.querySelector(".grille-projets-phares"), grilleAutres = document.querySelector(".grille-projets"), delaisReveal = ["", "delay-1", "delay-2", "delay-3"]; function carteProjetPhareHTML(projet, delai) {
  return `
    <a href="${projet.lienDetail}" class="carte-projet carte-projet-phare reveal ${delai}">
      <div class="carte-image ${projet.gradientClass}">
        <span class="badge-phare">\u2605 Projet phare</span>
        <img src="${projet.image}" alt="${projet.imageAlt}">
        <div class="carte-survol">
          <span class="survol-btn survol-btn-bleu">Voir le projet complet</span>
        </div>
      </div>
      <div class="carte-contenu">
        <div class="carte-tags">
          ${projet.tags.map(tag => `<span class="carte-tag">${tag}</span>`).join("")}
        </div>
        <h3 class="carte-titre">${projet.titre}</h3>
        <p class="carte-texte">${projet.description}</p>
        <div class="carte-pied">
          <span class="carte-lien">Voir le d\xE9tail \u2192</span>
        </div>
      </div>
    </a>`} function carteProjetHTML(projet, delai) {
  return `
    <div class="carte-projet reveal ${delai}">
      <div class="carte-image carte-image-statique ${projet.gradientClass}">
        <img src="${projet.image}" alt="${projet.imageAlt}">
      </div>
      <div class="carte-contenu">
        <div class="carte-tags">
          ${projet.tags.map(tag => `<span class="carte-tag">${tag}</span>`).join("")}
        </div>
        <h3 class="carte-titre">${projet.titre}</h3>
        <p class="carte-texte">${projet.description}</p>
        <div class="carte-pied carte-pied-liens">
          <a href="${projet.lienLive}" target="_blank" rel="noopener" class="carte-lien">Voir le site \u2192</a>
          <a href="${projet.lienGithub}" target="_blank" rel="noopener" class="carte-lien-github" aria-label="GitHub">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>`} async function chargerProjets() { try { const projets = await (await fetch("data/projets.json")).json(), phares = projets.filter(p => p.phare), autres = projets.filter(p => !p.phare); grillePhares.innerHTML = phares.map((p, i) => carteProjetPhareHTML(p, delaisReveal[i] || "")).join(""), grilleAutres.innerHTML = autres.map((p, i) => carteProjetHTML(p, delaisReveal[i] || "")).join(""), document.querySelectorAll("#projects .reveal").forEach(el => revealObserver.observe(el)) } catch (err) { console.error("Erreur de chargement des projets :", err) } } chargerProjets(), document.querySelectorAll(".barre-niveau[data-level]").forEach(bar => { bar.style.width = bar.dataset.level + "%" }); const scrollTopBtn = document.getElementById("scrollTop"); window.addEventListener("scroll", () => { scrollTopBtn.classList.toggle("visible", window.scrollY > 400) }), scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })); const form = document.getElementById("contactForm"), formStatus = document.getElementById("formStatus"); form.addEventListener("submit", async e => { e.preventDefault(); const fname = document.getElementById("fname").value.trim(), lname = document.getElementById("lname").value.trim(), email = document.getElementById("email").value.trim(), subject = document.getElementById("subject").value, message = document.getElementById("message").value.trim(); if (!fname || !lname || !email || !subject || !message) { showStatus("Veuillez remplir tous les champs obligatoires.", "err"); return } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showStatus("Veuillez entrer une adresse email valide.", "err"); return } const btn = form.querySelector(".form-submit"); btn.textContent = "Envoi en cours\u2026", btn.disabled = !0; try { (await fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: "application/json" } })).ok ? (showStatus("\u2705 Message envoy\xE9 !", "ok"), form.reset()) : showStatus("Une erreur est survenue, veuillez r\xE9essayer.", "err") } catch { showStatus("Une erreur est survenue, veuillez r\xE9essayer.", "err") } finally { btn.innerHTML = '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Envoyer le message', btn.disabled = !1 } }); function showStatus(msg, type) { formStatus.textContent = msg, formStatus.className = "form-statut form-statut-" + type }
