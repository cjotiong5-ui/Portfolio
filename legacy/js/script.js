/* ========================================
   TYPEWRITER
   ======================================== */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const words = ['Computer Engineer', 'Problem Solver', 'Embedded Systems', 'Tech Enthusiast'];
  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = words[wordIdx];

    if (deleting) {
      charIdx--;
      el.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = current.substring(0, charIdx);
    }

    let delay = deleting ? 55 : 85;

    if (!deleting && charIdx === current.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  setTimeout(tick, 1200);
})();

/* ========================================
   AVATAR FALLBACK
   ======================================== */
(function initAvatar() {
  const img = document.getElementById('avatar-img');
  const initials = document.getElementById('avatar-initials');
  if (!img || !initials) return;

  img.addEventListener('error', function () {
    img.style.display = 'none';
    initials.classList.add('visible');
  }, { once: true });
})();

/* ========================================
   SCROLL REVEAL
   ======================================== */
(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) { observer.observe(el); });
})();

/* ========================================
   SKILL BAR ANIMATION
   ======================================== */
(function initSkillBars() {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar-fill');
        bars.forEach(function (bar) {
          const fill = bar.getAttribute('data-fill');
          if (fill) bar.style.width = fill;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(function (card) { observer.observe(card); });
})();

/* ========================================
   ACTIVE NAV LINK
   ======================================== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function update() {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ========================================
   NAV SCROLL STATE
   ======================================== */
(function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function update() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ========================================
   MOBILE NAVIGATION
   ======================================== */
(function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');
  if (!toggle || !links || !overlay) return;

  function openMenu() {
    toggle.classList.add('open');
    links.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('open');
    links.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (links.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();

/* ========================================
   PROJECT FILTERING
   ======================================== */
(function initProjectFilters() {
  const filters = document.querySelectorAll('.project-filter');
  const cards = document.querySelectorAll('.project-card[data-category]');
  if (!filters.length || !cards.length) return;

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const cat = this.getAttribute('data-filter');

      filters.forEach(function (f) { f.classList.remove('active'); });
      this.classList.add('active');

      cards.forEach(function (card) {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              card.style.transition = 'opacity 0.4s, transform 0.4s';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(function () {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
})();

/* ========================================
   CONTACT FORM (mailto)
   ======================================== */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:kalixcristanjace17@gmail.com?subject=' + subject + '&body=' + body;
  });
})();

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
