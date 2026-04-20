/* BLUEVET — Interactions
   Mobile nav toggle, scroll reveal animations, smooth anchor scrolling
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---------- Scroll reveal ----------
  const revealables = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add('visible'));
  }

  // ---------- Animated counters in trust bar ----------
  const nums = document.querySelectorAll('[data-count]');
  const countUp = (el) => {
    const target = parseFloat(el.dataset.count);
    const duration = 1500;
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString('tr-TR');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString('tr-TR');
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && nums.length) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          countUp(e.target);
          io2.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    nums.forEach((el) => io2.observe(el));
  }

  // ---------- Active hash nav (for single-page anchors on home) ----------
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
