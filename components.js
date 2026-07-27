/* =========================================================
   NESTDEV — Shared header, footer and WhatsApp button
   Injected on every page. Set <body data-page="home"> etc.
   ========================================================= */
(function () {
  'use strict';

  // Replace this with your real WhatsApp number in full format, e.g. https://wa.me/447911123456
  var WHATSAPP_URL = 'https://wa.me/10000000000';
  var EMAIL = 'aideveloper250@gmail.com';
  var LINKEDIN = 'https://www.linkedin.com/in/ai-asadnawaz/';
  var GITHUB = 'https://github.com/aideveloper250-lgtm';

  var page = document.body.getAttribute('data-page') || '';

  var caret = '<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var header =
    '<header class="nav" id="nav">' +
      '<div class="container">' +
        '<div class="nav-bar">' +
          '<a href="index.html" class="logo" aria-label="Nestdev home">' +
            '<span class="logo-mark"><img src="assets/nestdev-icon.png" alt="Nestdev logo" /></span>' +
            '<span class="logo-text">nest<span class="logo-accent">dev</span></span>' +
          '</a>' +
          '<ul class="nav-links" aria-label="Primary">' +
            '<li data-page="home"><a href="index.html">Home</a></li>' +
            '<li data-page="about"><a href="about.html">Who We Are</a></li>' +
            '<li data-page="services"><a href="services.html">Solutions ' + caret + '</a>' +
              '<ul class="dropdown">' +
                '<li><a href="services.html#ai-agents">AI Agents</a></li>' +
                '<li><a href="services.html#chatbots">Chatbots and Search</a></li>' +
                '<li><a href="services.html#web-apps">AI Web Apps</a></li>' +
                '<li><a href="services.html#automation">AI Automation</a></li>' +
                '<li><a href="services.html#cloud">Cloud and Hosting</a></li>' +
              '</ul>' +
            '</li>' +
            '<li data-page="industries"><a href="industries.html">Industries ' + caret + '</a>' +
              '<ul class="dropdown">' +
                '<li><a href="industries.html#healthcare">Healthcare</a></li>' +
                '<li><a href="industries.html#finance">Finance</a></li>' +
                '<li><a href="industries.html#real-estate">Real Estate</a></li>' +
                '<li><a href="industries.html#sales">Sales and Marketing</a></li>' +
                '<li><a href="industries.html">See all industries</a></li>' +
              '</ul>' +
            '</li>' +
            '<li data-page="work"><a href="work.html">Case Studies</a></li>' +
            '<li data-page="contact"><a href="contact.html">Contact</a></li>' +
          '</ul>' +
          '<a href="contact.html" class="btn btn-primary nav-cta">' +
            '<span>Let’s Talk</span>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</a>' +
          '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="footer">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<a href="index.html" class="logo" aria-label="Nestdev home">' +
              '<span class="logo-mark"><img src="assets/nestdev-icon.png" alt="Nestdev logo" /></span>' +
              '<span class="logo-text">nest<span class="logo-accent">dev</span></span>' +
            '</a>' +
            '<p class="footer-tag">We are an AI development company. We build AI agents, chatbots, automation tools and full web apps for growing teams.</p>' +
            '<div class="footer-socials">' +
              '<a href="' + GITHUB + '" target="_blank" rel="noopener" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 000 12.5a12 12 0 008.21 11.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12.5 12 12 0 0012 .5z"/></svg></a>' +
              '<a href="' + LINKEDIN + '" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V10H5.67v8.34h2.67zM7 8.84A1.55 1.55 0 105.45 7.3 1.55 1.55 0 007 8.84zM18.34 18.34v-4.57c0-2.39-1.28-3.5-3-3.5a2.59 2.59 0 00-2.34 1.29V10h-2.67v8.34h2.67v-4.65a1.43 1.43 0 011.5-1.55c.84 0 1.17.64 1.17 1.55v4.65h2.67z"/></svg></a>' +
              '<a href="mailto:' + EMAIL + '" aria-label="Email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col"><h5>Services</h5><ul>' +
            '<li><a href="services.html#ai-agents">AI Agents</a></li>' +
            '<li><a href="services.html#chatbots">Chatbots and Search</a></li>' +
            '<li><a href="services.html#web-apps">AI Web Apps</a></li>' +
            '<li><a href="services.html#automation">AI Automation</a></li>' +
            '<li><a href="services.html#cloud">Cloud and Hosting</a></li>' +
          '</ul></div>' +
          '<div class="footer-col"><h5>Company</h5><ul>' +
            '<li><a href="about.html">Who We Are</a></li>' +
            '<li><a href="work.html">Case Studies</a></li>' +
            '<li><a href="industries.html">Industries</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul></div>' +
          '<div class="footer-col"><h5>Get in touch</h5><ul>' +
            '<li><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
            '<li><a href="' + GITHUB + '" target="_blank" rel="noopener">github.com/aideveloper250-lgtm</a></li>' +
            '<li><a href="' + LINKEDIN + '" target="_blank" rel="noopener">linkedin.com/in/ai-asadnawaz</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>&copy; <span id="year"></span> Nestdev. All rights reserved.</span>' +
          '<span>Built with care for growing AI teams.</span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var whatsapp =
    '<a class="wa-float" href="' + WHATSAPP_URL + '" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">' +
      '<svg viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 22a10 10 0 118.9-14.5A10 10 0 0112 22z"/></svg>' +
    '</a>';

  var headSlot = document.getElementById('site-header');
  var footSlot = document.getElementById('site-footer');
  if (headSlot) headSlot.outerHTML = header;
  if (footSlot) footSlot.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', whatsapp);

  // Active nav item
  var current = document.querySelector('.nav-links li[data-page="' + page + '"]');
  if (current) current.classList.add('active');

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav shadow on scroll
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  if (nav) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
