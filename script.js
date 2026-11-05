/* =============================================
   PLASTIC WATCH PORTFOLIO — script.js
   Pure Vanilla JS, ES6+, No libraries
   ============================================= */

'use strict';

/* ─────────────────────────────────────────────
   1. LOADING SCREEN
   ───────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      triggerHeroReveal();
    }, 2000);
  });
  document.body.style.overflow = 'hidden';
})();

/* ─────────────────────────────────────────────
   2. CUSTOM CURSOR
   ───────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring over interactive elements
  const interactives = 'a, button, .project-card, .service-card, .skill-tag, .filter-btn, .social-icon, .social-link, .back-to-top';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = ''; ring.style.opacity = ''; });
})();

/* ─────────────────────────────────────────────
   3. NAVBAR — scroll behaviour + mobile menu
   ───────────────────────────────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const links     = document.querySelectorAll('.nav-link');

  if (!navbar) return;

  // Scroll: add .scrolled class
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
    toggleBackToTop();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      navLinks && navLinks.classList.remove('open');
    });
  });

  // Active link highlight on scroll
  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(sec => {
      const top    = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id     = sec.getAttribute('id');
      const link   = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }
})();

/* ─────────────────────────────────────────────
   4. BACK TO TOP BUTTON
   ───────────────────────────────────────────── */
function toggleBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
}
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─────────────────────────────────────────────
   5. SMOOTH SCROLL for nav links
   ───────────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar')?.offsetHeight || 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ─────────────────────────────────────────────
   6. TYPEWRITER EFFECT
   ───────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const words = ['Frontend Developer', 'UI/UX Designer', 'Problem Solver'];
  let wordIdx = 0, charIdx = 0, deleting = false;
  const typingSpeed  = 100;
  const deletingSpeed = 55;
  const pauseAfterWord = 1800;
  const pauseAfterDelete = 400;

  function type() {
    const current = words[wordIdx];
    if (!deleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, pauseAfterWord);
        return;
      }
      setTimeout(type, typingSpeed);
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, pauseAfterDelete);
        return;
      }
      setTimeout(type, deletingSpeed);
    }
  }
  type();
})();

/* ─────────────────────────────────────────────
   7. PARTICLE CANVAS
   ───────────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 70;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x  = Math.random() * W;
      this.y  = initial ? Math.random() * H : H + 10;
      this.r  = Math.random() * 2.5 + 0.5;
      this.vx = (Math.random() - .5) * 0.4;
      this.vy = -(Math.random() * 0.5 + 0.2);
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > .5 ? '79,70,229' : '99,102,241';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset();
      if (this.x < -10 || this.x > W + 10) this.vx *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  // Draw connecting lines between nearby particles
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(79,70,229,${0.08 * (1 - dist / 110)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─────────────────────────────────────────────
   8. SCROLL REVEAL (IntersectionObserver)
   ───────────────────────────────────────────── */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger sibling cards/items
        const delay = entry.target.dataset.delay
          ? parseFloat(entry.target.dataset.delay)
          : computeStagger(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Stagger cards that share the same parent grid
  function computeStagger(el) {
    const parent = el.parentElement;
    const siblings = parent ? Array.from(parent.querySelectorAll('.reveal, .reveal-left, .reveal-right')) : [];
    const idx = siblings.indexOf(el);
    return idx >= 0 ? idx * 90 : 0;
  }

  revealEls.forEach(el => observer.observe(el));
})();

/* Hero text reveal on load (triggered after loader hides) */
function triggerHeroReveal() {
  const heroEls = document.querySelectorAll('.hero .reveal-left, .hero .reveal-right');
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 200);
  });
}

/* ─────────────────────────────────────────────
   9. SKILL BARS ANIMATION
   ───────────────────────────────────────────── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const w   = bar.dataset.width || '0';
        bar.style.width = w + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ─────────────────────────────────────────────
   10. COUNTER ANIMATION (Stats section)
   ───────────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur    = 1800;
        const start  = performance.now();

        function tick(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / dur, 1);
          // easeOutExpo
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          el.textContent = Math.round(ease * target);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

/* ─────────────────────────────────────────────
   11. RIPPLE BUTTON EFFECT
   ───────────────────────────────────────────── */
(function initRipple() {
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();

/* ─────────────────────────────────────────────
   12. PROJECT FILTER
   ───────────────────────────────────────────── */
(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity .3s ease, transform .3s ease';
        if (match) {
          card.style.opacity = '1';
          card.style.transform = '';
          card.style.pointerEvents = '';
        } else {
          card.style.opacity = '0.2';
          card.style.transform = 'scale(0.95)';
          card.style.pointerEvents = 'none';
        }
      });
    });
  });
})();

/* ─────────────────────────────────────────────
   13. FLOATING LABEL FORM
   ───────────────────────────────────────────── */
(function initFloatingLabels() {
  document.querySelectorAll('.form-input').forEach(input => {
    // Set placeholder=" " so :not(:placeholder-shown) works
    input.setAttribute('placeholder', ' ');

    function checkVal() {
      if (input.value.trim()) {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    }
    input.addEventListener('input', checkVal);
    input.addEventListener('blur',  checkVal);
    checkVal();
  });
})();

/* ─────────────────────────────────────────────
   14. CONTACT FORM SUBMIT
   ───────────────────────────────────────────── */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText   = submitBtn.querySelector('.btn-text');
    const icon      = submitBtn.querySelector('i');

    // Fake submit animation
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending…';
    if (icon)   icon.className = 'bx bx-loader-alt bx-spin';

    setTimeout(() => {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
      if (icon)   icon.className = 'bx bx-send';
      form.reset();
      // reset floating labels
      document.querySelectorAll('.form-input').forEach(i => i.classList.remove('has-value'));
      if (success) success.classList.add('show');
      setTimeout(() => success && success.classList.remove('show'), 4000);
    }, 1800);
  });
})();

/* ─────────────────────────────────────────────
   15. FOOTER YEAR
   ───────────────────────────────────────────── */
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ─────────────────────────────────────────────
   16. SKILL TAG STAGGER ANIMATION
   ───────────────────────────────────────────── */
(function initSkillTags() {
  const tags = document.querySelectorAll('.skill-tag');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tags.forEach((tag, i) => {
          setTimeout(() => {
            tag.style.transition = `all 0.4s cubic-bezier(.4,0,.2,1) ${i * 60}ms`;
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
          }, i * 60);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  if (tags.length) {
    // initial hidden state
    tags.forEach(tag => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(20px)';
    });
    observer.observe(tags[0]);
  }
})();

/* ─────────────────────────────────────────────
   17. NAVBAR transparent → scrolled on initial load
   ───────────────────────────────────────────── */
(function initNavState() {
  if (window.scrollY > 60) {
    document.getElementById('navbar')?.classList.add('scrolled');
  }
})();

/* ─────────────────────────────────────────────
   18. PARALLAX SUBTLE on hero section
   ───────────────────────────────────────────── */
(function initParallax() {
  const hero     = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-text');
  const heroImg  = document.querySelector('.hero-image');
  if (!hero || !heroText || !heroImg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight) return;
    heroText.style.transform = `translateY(${scrollY * 0.08}px)`;
    heroImg.style.transform  = `translateY(${scrollY * 0.05}px)`;
  }, { passive: true });
})();
