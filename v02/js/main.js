/**
 * =====================================================
 *  RTardim — main.js
 *  Requer: config.js carregado antes deste script
 * =====================================================
 */
(function () {
  'use strict';

  /* Aguarda DOM pronto */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    applyConfig();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initWhatsApp();
    initTestimonials();
    initYear();
  }

  /* ===================================================
     APLICA CONFIG — injeta telefone, links e dados
  =================================================== */
  function applyConfig() {
    var C = window.SITE_CONFIG;
    if (!C) return;

    /* WhatsApp links */
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      el.href = C.whatsappUrl;
      if (el.dataset.waText) el.textContent = el.dataset.waText;
    });

    /* Telefone clicável */
    document.querySelectorAll('[data-phone]').forEach(function (el) {
      el.href = C.company.phoneLink;
      if (el.dataset.phoneText !== undefined) el.textContent = C.company.phone;
    });

    /* Email */
    document.querySelectorAll('[data-email]').forEach(function (el) {
      el.href = 'mailto:' + C.company.email;
      if (el.dataset.emailText !== undefined) el.textContent = C.company.email;
    });

    /* Redes sociais */
    var si = document.getElementById('social-instagram');
    var sf = document.getElementById('social-facebook');
    var sl = document.getElementById('social-linkedin');
    if (si) si.href = C.social.instagram;
    if (sf) sf.href = C.social.facebook;
    if (sl) sl.href = C.social.linkedin;
  }

  /* ===================================================
     NAVBAR — scroll effect
  =================================================== */
  function initNavbar() {
    var nb = document.getElementById('navbar');
    if (!nb) return;
    function check() { nb.classList.toggle('scrolled', window.scrollY > 24); }
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  /* ===================================================
     MOBILE MENU
  =================================================== */
  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var menu   = document.getElementById('mobile-menu');
    var iconM  = document.getElementById('icon-menu');
    var iconX  = document.getElementById('icon-close');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu de navegação');
      if (iconM) iconM.style.display = '';
      if (iconX) iconX.style.display = 'none';
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu de navegação');
      if (iconM) iconM.style.display = isOpen ? 'none' : '';
      if (iconX) iconX.style.display = isOpen ? '' : 'none';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ===================================================
     SCROLL REVEAL — Intersection Observer
  =================================================== */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    if (!els.length) return;

    /* Respeita prefers-reduced-motion */
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach(function (el) { el.classList.add('vis'); });
      return;
    }

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { obs.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('vis'); });
    }
  }

  /* ===================================================
     WHATSAPP FLOATING BUTTON
  =================================================== */
  function initWhatsApp() {
    var btn = document.getElementById('wa-btn');
    if (!btn) return;

    /* Aplica URL via config */
    var C = window.SITE_CONFIG;
    if (C) btn.href = C.whatsappUrl;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 350);
    }, { passive: true });
  }

  /* ===================================================
     TESTIMONIALS — slider com autoplay
  =================================================== */
  function initTestimonials() {
    var testimonials = [
      {
        quote: '\u201cAgradecemos \u00e0 equipe dedicada pelo trabalho excepcional em nosso projeto. Profissionalismo e comprometimento evidentes \u2014 estamos extremamente satisfeitos com os resultados.\u201d',
        name: 'Jerferson Mestre',
        role: 'Gerente \u2014 Transportadora Mestre',
      },
      {
        quote: '\u201cServi\u00e7os de qualidade, curto prazo de entrega, facilidade de pagamento e \u00f3tima negocia\u00e7\u00e3o. Atendimento de primeira, recomendo sem d\u00favidas.\u201d',
        name: 'Gerente de Engenharia',
        role: 'Gerente \u2014 3ws Transporte',
      },
      {
        quote: '\u201c\u00d3tima empresa, servi\u00e7o de qualidade e confian\u00e7a. Pontual com a entrega do servi\u00e7o \u2014 recomendo de olhos fechados.\u201d',
        name: 'Adriano Rosa',
        role: 'Diretor \u2014 Adriano Rosa Transportes',
      },
      {
        quote: '\u201cA equipe realmente se destaca. Abordagem colaborativa e criativa, processo tranquilo e resultados que falam por si.\u201d',
        name: 'Ann Smith',
        role: 'Gerente \u2014 Smith Log\u00edstica',
      },
    ];

    var inner    = document.getElementById('testi-inner');
    var quoteEl  = document.getElementById('testi-quote');
    var avatarEl = document.getElementById('testi-avatar');
    var nameEl   = document.getElementById('testi-name');
    var roleEl   = document.getElementById('testi-role');
    var dotsWrap = document.getElementById('testi-dots');
    var prevBtn  = document.getElementById('testi-prev');
    var nextBtn  = document.getElementById('testi-next');

    if (!inner || !quoteEl) return;

    var current = 0;
    var autoPlay = null;

    /* Build dots */
    testimonials.forEach(function (t, i) {
      var btn = document.createElement('button');
      btn.className = 'testi-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.setAttribute('aria-label', 'Depoimento de ' + t.name);
      btn.addEventListener('click', function () { goTo(i); resetAutoPlay(); });
      dotsWrap.appendChild(btn);
    });

    function updateDots() {
      dotsWrap.querySelectorAll('.testi-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
        d.setAttribute('aria-selected', String(i === current));
      });
    }

    function goTo(idx) {
      inner.classList.add('fade-out');
      setTimeout(function () {
        current = idx;
        var t = testimonials[current];
        quoteEl.textContent = t.quote;
        nameEl.textContent  = t.name;
        roleEl.textContent  = t.role;
        avatarEl.textContent = t.name
          .split(' ')
          .map(function (n) { return n[0]; })
          .slice(0, 2)
          .join('');
        updateDots();
        inner.classList.remove('fade-out');
      }, 280);
    }

    function resetAutoPlay() {
      clearInterval(autoPlay);
      autoPlay = setInterval(function () {
        goTo((current + 1) % testimonials.length);
      }, 6000);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () {
      goTo((current - 1 + testimonials.length) % testimonials.length);
      resetAutoPlay();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      goTo((current + 1) % testimonials.length);
      resetAutoPlay();
    });

    /* Pause on hover/focus */
    var section = document.getElementById('testimonials');
    if (section) {
      section.addEventListener('mouseenter', function () { clearInterval(autoPlay); });
      section.addEventListener('mouseleave', resetAutoPlay);
      section.addEventListener('focusin',    function () { clearInterval(autoPlay); });
      section.addEventListener('focusout',   resetAutoPlay);
    }

    /* Swipe support (touch) */
    var touchStartX = 0;
    if (inner) {
      inner.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      inner.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          goTo(diff > 0
            ? (current + 1) % testimonials.length
            : (current - 1 + testimonials.length) % testimonials.length);
          resetAutoPlay();
        }
      }, { passive: true });
    }

    goTo(0);
    resetAutoPlay();
  }

  /* ===================================================
     YEAR
  =================================================== */
  function initYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

})();
