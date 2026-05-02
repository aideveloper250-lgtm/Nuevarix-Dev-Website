/* =========================================================
   NUEVARIX DEV — Site Interactions
   ========================================================= */

(function () {
  'use strict';

  // -- Sticky nav blur on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // -- Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -- Reveal-on-scroll using IntersectionObserver
  const revealTargets = document.querySelectorAll(
    '.section-head, .service-card, .industry, .project-card, .process-step, .team-card, .testimonial, .cta-card, .stat'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent for a nice cascade
          const el = entry.target;
          const parent = el.parentElement;
          const siblings = parent ? Array.from(parent.children).filter(c => c.classList.contains('reveal')) : [el];
          const idx = siblings.indexOf(el);
          el.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`;
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  // -- Animated number counters for the stats bar
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target).toString();
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(animateCount);
  }

  // -- Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -- Contact form (mailto fallback so the site works without a backend)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in your name, email, and message.';
        status.className = 'form-status error';
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        status.textContent = 'Please enter a valid email address.';
        status.className = 'form-status error';
        return;
      }

      const subject = encodeURIComponent(`New project inquiry from ${name}${company ? ' — ' + company : ''}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\n\nProject:\n${message}\n\n— Sent from nestdev contact form`
      );
      window.location.href = `mailto:aideveloper250@gmail.com?subject=${subject}&body=${body}`;

      status.textContent = 'Opening your email client… Thanks, we\'ll be in touch within 24 hours.';
      status.className = 'form-status success';
      form.reset();
    });
  }

  // -- Subtle parallax on the floating capability cards (desktop only)
  const caps = document.querySelectorAll('.cap-card');
  if (caps.length && window.matchMedia('(min-width: 980px)').matches) {
    let ticking = false;
    const onMove = (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        caps.forEach((c, i) => {
          const f = (i + 1) * 6;
          c.style.translate = `${dx * f}px ${dy * f}px`;
        });
        ticking = false;
      });
    };
    window.addEventListener('mousemove', onMove);
  }
})();
