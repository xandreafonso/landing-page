(function () {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  function initHeroEntrance() {
    var badge = document.querySelector('.hero-badge');
    var title = document.querySelector('.hero-title');
    var desc = document.querySelector('.hero-desc');
    var ctaGroup = document.querySelector('.hero-cta-group');
    var visual = document.querySelector('.hero-illustration');

    var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(badge, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.05)
      .fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.15)
      .fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .fromTo(ctaGroup, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.45);

    if (visual) {
      gsap.fromTo(visual, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.3 });

      var rings = visual.querySelectorAll('.hero-ring');
      var chips = visual.querySelectorAll('.hero-chip');
      gsap.fromTo(rings, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.12, duration: 0.7, ease: 'power2.out', delay: 0.5 });
      gsap.fromTo(chips, { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.7 });
    }

    var glow = document.querySelector('.hero-glow');
    if (glow) {
      gsap.to(glow, {
        opacity: 0.45,
        scale: 1.2,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }

  function initScrollReveal() {
    var groupSelectors = [
      '.stats-grid .stat-card',
      '.profiles-grid .profile-card',
      '.bento-grid .bento-card',
      '.deliverables-grid .deliverable-card',
      '.timeline-list .timeline-item',
      '.pricing-grid .pricing-card',
    ];

    var groupElements = [];
    groupSelectors.forEach(function (sel) {
      gsap.utils.toArray(sel).forEach(function (el) { groupElements.push(el); });
    });

    gsap.utils.toArray('.scroll-reveal').forEach(function (el) {
      if (groupElements.indexOf(el) !== -1) return;
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    groupSelectors.forEach(function (selector) {
      var items = gsap.utils.toArray(selector);
      if (!items.length) return;
      gsap.fromTo(items, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: items[0].parentElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }

  function initWordReveal() {
    var section = document.querySelector('.word-reveal-section');
    var textEl = section ? section.querySelector('[data-word-reveal]') : null;
    if (!section || !textEl) return;

    var grid = document.getElementById('wordRevealGrid');
    if (grid) {
      var cols = Math.ceil(window.innerWidth / 38);
      var rows = Math.ceil(window.innerHeight / 38);
      var chars = '0100101001110010101000111010010100101010010110100101010010010101001011010010100101';
      for (var i = 0; i < rows * cols; i++) {
        var cell = document.createElement('span');
        cell.className = 'word-reveal-cell';
        cell.textContent = chars[Math.floor(Math.random() * chars.length)];
        grid.appendChild(cell);
      }
    }

    var text = textEl.textContent.trim();
    var words = text.split(/\s+/);
    textEl.innerHTML = '';

    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word-reveal-word';
      span.textContent = word;
      span.style.color = 'rgba(255, 255, 255, 0.15)';
      textEl.appendChild(span);
      if (i < words.length - 1) {
        textEl.appendChild(document.createTextNode(' '));
      }
    });

    var wordSpans = textEl.querySelectorAll('.word-reveal-word');

    gsap.to(wordSpans, {
      color: 'rgba(255, 255, 255, 1)',
      stagger: 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      },
    });

    var cells = section.querySelectorAll('.word-reveal-cell');
    if (cells.length) {
      gsap.to(cells, {
        color: 'rgba(255, 255, 255, 0.18)',
        stagger: { each: 0.02, from: 'random' },
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
        },
      });
    }
  }

  function initStatCounters() {
    var statElements = gsap.utils.toArray('[data-count]');
    if (!statElements.length) return;

    statElements.forEach(function (el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      var obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          el.textContent = prefix + Math.floor(obj.val) + suffix;
        },
        onComplete: function () {
          el.textContent = prefix + target + suffix;
        },
      });
    });
  }

  function initTabsTransition() {
    var tabGroups = document.querySelectorAll('[data-tabs]');
    tabGroups.forEach(function (group) {
      var btns = group.querySelectorAll('[data-tab]');
      var panels = group.querySelectorAll('[data-panel]');

      panels.forEach(function (p) {
        p.style.display = 'none';
        p.style.opacity = '0';
      });

      var activePanel = group.querySelector('[data-panel].active') || group.querySelector('[data-panel="' + btns[0].dataset.tab + '"]');
      if (activePanel) {
        activePanel.style.display = '';
        activePanel.style.opacity = '1';
      }

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.dataset.tab;
          btns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');

          var newPanel = group.querySelector('[data-panel="' + target + '"]');
          if (!newPanel) return;

          panels.forEach(function (p) { p.classList.remove('active'); });
          newPanel.classList.add('active');

          var currentVisible = null;
          panels.forEach(function (p) {
            if (p !== newPanel && p.style.display !== 'none' && p.style.opacity !== '0') {
              currentVisible = p;
            }
          });

          if (currentVisible) {
            gsap.to(currentVisible, {
              opacity: 0,
              y: 8,
              duration: 0.2,
              ease: 'power2.in',
              onComplete: function () {
                currentVisible.style.display = 'none';
                newPanel.style.display = '';
                gsap.fromTo(newPanel,
                  { opacity: 0, y: 10 },
                  { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                );
              },
            });
          } else {
            newPanel.style.display = '';
            gsap.fromTo(newPanel,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
          }
        });
      });
    });
  }

  function initAccordionAnimation() {
    var items = document.querySelectorAll('.accordion-item');
    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion-trigger');
      var content = item.querySelector('.accordion-content');
      if (!trigger || !content) return;

      if (!item.classList.contains('open')) {
        gsap.set(content, { maxHeight: 0, opacity: 0 });
      }

      content.style.overflow = 'hidden';

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        items.forEach(function (otherItem) {
          if (otherItem === item) return;
          if (!otherItem.classList.contains('open')) return;
          otherItem.classList.remove('open');
          var otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent) {
            gsap.to(otherContent, {
              maxHeight: 0,
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut',
            });
            var otherIcon = otherItem.querySelector('.accordion-icon');
            if (otherIcon) gsap.to(otherIcon, { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
          }
        });

        if (!isOpen) {
          item.classList.add('open');
          gsap.set(content, { maxHeight: 'none' });
          var fullHeight = content.scrollHeight;
          gsap.fromTo(content,
            { maxHeight: 0, opacity: 0 },
            { maxHeight: fullHeight, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
          var icon = item.querySelector('.accordion-icon');
          if (icon) gsap.to(icon, { rotation: 180, duration: 0.3, ease: 'power2.inOut' });
        } else {
          item.classList.remove('open');
          gsap.to(content, {
            maxHeight: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.inOut',
          });
          var icon2 = item.querySelector('.accordion-icon');
          if (icon2) gsap.to(icon2, { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
        }
      });
    });
  }

  function initHeroParallax() {
    var gridOverlay = document.querySelector('.hero-grid-overlay');
    var glow = document.querySelector('.hero-glow');
    var hero = document.querySelector('.hero');
    if (!hero) return;

    if (gridOverlay) {
      gsap.to(gridOverlay, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    if (glow) {
      gsap.to(glow, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }

  function initCTAShimmer() {
    var ctaCard = document.querySelector('.cta-final');
    if (!ctaCard) return;

    gsap.fromTo(ctaCard,
      { scale: 0.98, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaCard,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  function init() {
    initHeroEntrance();
    initScrollReveal();
    initWordReveal();
    initStatCounters();
    initTabsTransition();
    initAccordionAnimation();
    initHeroParallax();
    initCTAShimmer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();