/* =========================================================
   NESTDEV — Page Interactions
   (Header, footer and nav behaviour live in components.js)
   ========================================================= */

(function () {
  'use strict';

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

  // -- Project gallery lightbox
  const PROJECTS = {
    fincore: {
      title: 'FinCore AI',
      tag: 'Voice AI for Finance',
      desc: 'A voice agent that runs a bank call center. It listens to callers, works out what they need, looks up accounts, books appointments and starts refunds. When a case looks like fraud it hands the call to a human agent with the full story so far. A second AI helper answers staff questions about rules and policy using the company documents.',
      tech: ['LangGraph', 'LiveKit', 'GPT-4o', 'Deepgram', 'MCP', 'RAG', 'FastAPI'],
      images: 11,
    },
    leadflow: {
      title: 'LeadFlow AI',
      tag: 'AI for Sales Teams',
      desc: 'A team of AI agents that grows your sales pipeline on its own. They find businesses that fit your target, get the owner contact details, spot problems your service can solve and write a personal email for each one. Nothing is sent until you approve it with a quick tap on WhatsApp.',
      tech: ['Multi-agent', 'GPT-4o', 'Apollo.io', 'Hunter.io', 'WhatsApp', 'GoHighLevel', 'Gmail'],
      images: 7,
    },
    medflow: {
      title: 'MedFlow AI',
      tag: 'AI for Healthcare',
      desc: 'An AI helper for clinics that takes care of patient intake and insurance approvals. It collects patient details, fills and sends the approval forms and tracks each one to the end. It also reviews rejected claims to find the reason. In real use it cut approval time by more than 90 percent and saved staff over 200 hours a month.',
      tech: ['LangGraph', 'Claude', 'FHIR', 'FastAPI', 'Postgres'],
      images: 8,
    },
    propiq: {
      title: 'PropIQ Real Estate Intelligence',
      tag: 'AI for Real Estate',
      desc: 'Five AI agents that work around the clock for real estate teams. One scores new leads, one matches them to live listings, one tracks the local market, one sends follow up emails and one rates how likely each deal is to close. New leads get a reply within five minutes.',
      tech: ['LangGraph', 'GPT-4o', 'MLS', 'Next.js', 'Postgres'],
      images: 6,
    },
    reviewiq: {
      title: 'ReviewIQ Review Insights',
      tag: 'AI for Analytics',
      desc: 'A review tool for restaurants. It reads reviews from Google, Yelp and Tripadvisor, sorts them into what customers love and what they complain about, and keeps an eye on nearby competitors. Then it gives the owner a short list of the most important things to fix first.',
      tech: ['Python', 'LLM', 'Sentiment Analysis', 'Reviews APIs'],
      images: 7,
    },
    loopline: {
      title: 'LoopLine Content Autopilot',
      tag: 'AI for Content',
      desc: 'A content helper that turns rough ideas into ready to post content. It saves your ideas in one place, spots trending topics, writes drafts and makes the images to go with them. Nothing goes live until you approve it, and the posts that do well help shape better drafts next time.',
      tech: ['LangGraph', 'GPT-4o', 'Trends', 'Next.js'],
      images: 7,
    },
  };

  const modal = document.getElementById('projectModal');
  if (modal) {
    const mediaBox = document.getElementById('pmMedia');
    const thumbsBox = document.getElementById('pmThumbs');
    const elTitle = document.getElementById('pmTitle');
    const elTag = document.getElementById('pmTag');
    const elDesc = document.getElementById('pmDesc');
    const elMeta = document.getElementById('pmMeta');
    const elCount = document.getElementById('pmCount');
    const btnPrev = modal.querySelector('.pm-prev');
    const btnNext = modal.querySelector('.pm-next');

    let media = [];      // [{type:'video'|'image', src, poster?}]
    let index = 0;
    let lastFocus = null;

    const pad = (n) => String(n).padStart(2, '0');

    const buildMedia = (slug, p) => {
      const base = `assets/projects/${slug}`;
      const list = [{ type: 'video', src: `${base}/demo.mp4`, poster: `${base}/cover.jpg` }];
      for (let i = 1; i <= p.images; i++) list.push({ type: 'image', src: `${base}/${pad(i)}.jpg` });
      return list;
    };

    const renderStage = () => {
      const item = media[index];
      mediaBox.innerHTML = '';
      if (item.type === 'video') {
        const v = document.createElement('video');
        v.controls = true;
        v.autoplay = true;
        v.preload = 'metadata';
        v.playsInline = true;
        v.poster = item.poster;
        const s = document.createElement('source');
        s.src = item.src;
        s.type = 'video/mp4';
        v.appendChild(s);
        mediaBox.appendChild(v);
        elCount.textContent = 'Demo video';
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `${elTitle.textContent} screenshot`;
        mediaBox.appendChild(img);
        elCount.textContent = `Screenshot ${index} / ${media.length - 1}`;
      }
      thumbsBox.querySelectorAll('.pm-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === index);
      });
    };

    const go = (i) => {
      index = (i + media.length) % media.length;
      renderStage();
    };

    const buildThumbs = () => {
      thumbsBox.innerHTML = '';
      media.forEach((item, i) => {
        const btn = document.createElement('button');
        btn.className = 'pm-thumb';
        if (item.type === 'video') {
          btn.classList.add('pm-thumb-video');
          btn.style.backgroundImage = `url(${item.poster})`;
          btn.style.backgroundSize = 'cover';
          btn.style.backgroundPosition = 'top center';
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.5)"/><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>';
          btn.setAttribute('aria-label', 'Play demo video');
        } else {
          const img = document.createElement('img');
          img.src = item.src;
          img.loading = 'lazy';
          img.alt = '';
          btn.appendChild(img);
          btn.setAttribute('aria-label', `Screenshot ${i}`);
        }
        btn.addEventListener('click', () => go(i));
        thumbsBox.appendChild(btn);
      });
    };

    const open = (slug) => {
      const p = PROJECTS[slug];
      if (!p) return;
      lastFocus = document.activeElement;
      elTitle.textContent = p.title;
      elTag.textContent = p.tag;
      elDesc.textContent = p.desc;
      elMeta.innerHTML = '';
      p.tech.forEach((t) => {
        const s = document.createElement('span');
        s.textContent = t;
        elMeta.appendChild(s);
      });
      media = buildMedia(slug, p);
      index = 0;
      buildThumbs();
      renderStage();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('pm-lock');
      modal.querySelector('.pmodal-close').focus();
    };

    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('pm-lock');
      mediaBox.innerHTML = ''; // stop/unload video
      if (lastFocus) lastFocus.focus();
    };

    document.querySelectorAll('.project-card[data-project]').forEach((card) => {
      const slug = card.getAttribute('data-project');
      card.addEventListener('click', () => open(slug));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(slug); }
      });
    });

    modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close));
    btnPrev.addEventListener('click', () => go(index - 1));
    btnNext.addEventListener('click', () => go(index + 1));

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(index - 1);
      else if (e.key === 'ArrowRight') go(index + 1);
    });
  }
})();
