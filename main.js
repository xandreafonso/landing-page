(function () {
  "use strict";

  // ----- Scroll restoration -----
  // Impede o browser de restaurar uma posição no meio da página antes do
  // ScrollTrigger montar o pin do hero — o que deixava um vão vazio no topo
  // ao dar F5 com a página rolada. Sem hash na URL, sempre começa no topo.
  if (window.history && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  if (!window.location.hash) window.scrollTo(0, 0);

  // ----- Lucide icons -----
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // ----- Year footer -----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Mobile menu -----
  var menuBtn = document.querySelector(".nav-menu-btn");
  var mobileNav = document.querySelector(".nav-mobile");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
      mobileNav.hidden = !open;
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      }
    });
  }

  // ----- FAQ single-expanded -----
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) { if (other !== item) other.open = false; });
      }
    });
  });

  // ============================================================
  // GSAP / ScrollTrigger
  // ============================================================
  if (!window.gsap) return;
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // Recalcula posições depois que imagens/fontes carregam, para o pin do hero
  // usar as alturas reais (evita o vão vazio no topo em reload).
  if (ScrollTrigger) {
    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  }

  // ----- Word splitter (preserves <em> and other inline children) -----
  function splitWords(root) {
    if (!root || root.dataset.split === "1") return;
    function process(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var parts = child.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) {
              frag.appendChild(document.createTextNode(p));
            } else {
              var w = document.createElement("span");
              w.className = "word";
              var i = document.createElement("span");
              i.className = "word-inner";
              i.textContent = p;
              w.appendChild(i);
              frag.appendChild(w);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          process(child);
        }
      });
    }
    process(root);
    root.dataset.split = "1";
  }

  splitWords(document.querySelector(".hero-title"));
  document.querySelectorAll(".manifesto-quote").forEach(splitWords);

  // ----- Mark generic reveal targets -----
  var revealSelectors = [
    ".section-head",
    ".pillar",
    ".profile",
    ".bento-card",
    ".deliverable",
    ".timeline-item",
    ".pricing-card",
    ".faq-item",
    ".cta-final-inner",
    ".footer-top",
    ".footer-bottom"
  ];
  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.setAttribute("data-reveal", ""); });
  });
  document.querySelectorAll(".hero-eyebrow, .hero-title, .hero-lede, .hero-ctas, .hero-portrait")
    .forEach(function (el) { el.setAttribute("data-hero-anim", ""); });

  document.documentElement.classList.add("js-ready");

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    gsap.set("[data-hero-anim], [data-reveal]", { opacity: 1, clearProps: "all" });
    document.querySelectorAll("[data-count-to]").forEach(function (el) {
      el.textContent = el.getAttribute("data-count-to");
    });
    return;
  }

  // ============================================================
  // 1) HERO ENTRANCE (auto-play, antes do pin)
  // ============================================================
  var heroTitleWords = gsap.utils.toArray(".hero-title .word .word-inner");
  var heroEmWords = gsap.utils.toArray(".hero-title em .word");

  var entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
  entrance
    .fromTo(".hero-eyebrow", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
    .fromTo(".hero-title", { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=0.4")
    .fromTo(heroTitleWords,
      { yPercent: 60, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.045 },
      "-=0.05")
    .to(heroEmWords,
      { "--underline": 1, duration: 0.6, stagger: 0.12, ease: "power2.out" },
      "-=0.4")
    .fromTo(".hero-lede", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    .fromTo(".hero-ctas", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.6")
    .fromTo(".hero-portrait", { y: 28, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 1.0 }, "-=1.1");

  // KPIs começam ocultos — eles entram no pin scrub abaixo
  gsap.set(".hero-kpis .kpi", { opacity: 0, y: 40 });

  // ============================================================
  // 2) PINNED HERO — KPIs revelam + parallax conforme scroll
  // ============================================================
  var heroPinAvailable = window.innerWidth >= 900;
  if (heroPinAvailable) {
    var pinned = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=60%",
        pin: true,
        scrub: 0.7,
        anticipatePin: 1
      }
    });
    pinned
      .fromTo(".hero-kpis .kpi",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1 }, 0)
      .to(".hero-portrait-img",   { yPercent: -8, scale: 1.03 }, 0)
      .to(".hero-grid",           { yPercent: 14 }, 0)
      .to(".hero-text",           { y: -16, opacity: 0.92 }, 0.15);

    // Count-up scrubbed contra o mesmo trigger
    document.querySelectorAll("[data-count-to]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10);
      if (isNaN(target)) return;
      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "+=60%",
        scrub: 0.7,
        onUpdate: function (self) { el.textContent = Math.round(target * self.progress); }
      });
    });
  } else {
    // Mobile/tablet: sem pin, KPIs revelam com onEnter normal e count-up dispara uma vez
    gsap.fromTo(".hero-kpis .kpi",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".hero-kpis", start: "top 85%", once: true } });
    document.querySelectorAll("[data-count-to]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10);
      if (isNaN(target)) return;
      var obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: "top 85%", once: true,
        onEnter: function () {
          gsap.to(obj, {
            v: target, duration: 1.4, ease: "power2.out",
            onUpdate: function () { el.textContent = Math.round(obj.v); }
          });
        }
      });
    });
  }

  // ============================================================
  // 3) MANIFESTO — palavras acendem com scrub
  // ============================================================
  document.querySelectorAll(".manifesto").forEach(function (section) {
    var quote = section.querySelector(".manifesto-quote");
    if (!quote) return;
    var allWordInners = quote.querySelectorAll(".word .word-inner");
    var emWordInners  = quote.querySelectorAll("em .word .word-inner");

    // Estado inicial: bem esmaecido (sem cair em invisível)
    gsap.set(allWordInners, { color: "rgba(169,180,200,0.22)" });

    gsap.to(allWordInners, {
      color: "rgba(238,242,249,1)",
      ease: "none",
      stagger: { each: 0.06, from: "start" },
      scrollTrigger: {
        trigger: quote,
        start: "top 78%",
        end: "bottom 55%",
        scrub: 0.5
      }
    });

    // Palavras dentro de <em> terminam em âmbar
    if (emWordInners.length) {
      gsap.to(emWordInners, {
        color: "rgb(245,158,11)",
        ease: "none",
        stagger: { each: 0.06, from: "start" },
        scrollTrigger: {
          trigger: quote,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 0.5
        }
      });
    }
  });

  // ============================================================
  // 4) CURSOR SPOTLIGHT (desktop / pointer:fine apenas)
  // ============================================================
  if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
    var spotSelectors = [".hero", ".manifesto"];
    spotSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (sec) {
        var raf = null;
        var px = 50, py = 50;
        sec.addEventListener("pointermove", function (e) {
          var rect = sec.getBoundingClientRect();
          px = ((e.clientX - rect.left) / rect.width) * 100;
          py = ((e.clientY - rect.top) / rect.height) * 100;
          if (raf) return;
          raf = requestAnimationFrame(function () {
            sec.style.setProperty("--mx", px + "%");
            sec.style.setProperty("--my", py + "%");
            sec.classList.add("has-spotlight");
            raf = null;
          });
        });
        sec.addEventListener("pointerleave", function () {
          sec.classList.remove("has-spotlight");
        });
      });
    });
  }

  // ============================================================
  // GENERIC REVEALS para o resto da página
  // ============================================================
  function revealGroup(parentSel, itemSel, opts) {
    opts = opts || {};
    document.querySelectorAll(parentSel).forEach(function (parent) {
      var items = parent.querySelectorAll(itemSel);
      if (!items.length) return;
      gsap.fromTo(items,
        { y: opts.y || 18, opacity: 0 },
        {
          scrollTrigger: { trigger: parent, start: "top 82%", once: true },
          y: 0, opacity: 1,
          duration: opts.duration || 0.8,
          ease: "power3.out",
          stagger: opts.stagger || 0.08
        });
    });
  }
  function revealOne(sel, opts) {
    opts = opts || {};
    document.querySelectorAll(sel).forEach(function (el) {
      gsap.fromTo(el,
        { y: opts.y || 16, opacity: 0 },
        {
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          y: 0, opacity: 1,
          duration: opts.duration || 0.85,
          ease: "power3.out"
        });
    });
  }
  revealOne(".section-head");
  revealOne(".cta-final-inner", { y: 18 });
  revealOne(".footer-top");
  revealOne(".footer-bottom");
  revealGroup(".pillars", ".pillar", { stagger: 0.1 });
  revealGroup(".profiles-grid", ".profile", { stagger: 0.1 });
  revealGroup(".bento", ".bento-card", { stagger: 0.07 });
  revealGroup(".deliverables", ".deliverable", { stagger: 0.08 });
  revealGroup(".pricing", ".pricing-card", { stagger: 0.12 });
  revealGroup(".faq", ".faq-item", { stagger: 0.05, y: 10 });

  // Timeline: items + linha âmbar + dots
  document.querySelectorAll(".timeline").forEach(function (tl) {
    var items = tl.querySelectorAll(".timeline-item");
    gsap.fromTo(items,
      { y: 18, opacity: 0 },
      {
        scrollTrigger: { trigger: tl, start: "top 80%", once: true },
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12
      });

    ScrollTrigger.create({
      trigger: tl,
      start: "top 75%",
      end: "bottom 60%",
      onUpdate: function (self) {
        tl.style.setProperty("--tl-progress", self.progress.toFixed(3));
      }
    });

    items.forEach(function (item) {
      var dot = item.querySelector(".timeline-dot");
      if (!dot) return;
      ScrollTrigger.create({
        trigger: item, start: "top 75%", once: true,
        onEnter: function () {
          gsap.to(dot, {
            backgroundColor: "rgb(245,158,11)",
            borderColor: "rgb(245,158,11)",
            boxShadow: "0 0 0 3px rgba(245,158,11,0.18)",
            duration: 0.4, ease: "power2.out"
          });
        }
      });
    });
  });

})();
