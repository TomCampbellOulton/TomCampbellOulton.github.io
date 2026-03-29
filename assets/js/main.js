// ================================================================
//  MAIN.JS  —  theme · nav · typing · reveal · skills · filters
// ================================================================

'use strict';

// ── Theme ─────────────────────────────────────────────────────────
const Theme = (() => {
  const KEY  = 'pf-theme';
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');

  const apply = t => {
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
  };

  const init = () => {
    const saved   = localStorage.getItem(KEY);
    const prefers = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(saved ?? prefers);
    btn?.addEventListener('click', () =>
      apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
    );
  };

  return { init };
})();

// ── Navigation ────────────────────────────────────────────────────
const Nav = (() => {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  let open = false;

  const close = () => {
    open = false;
    menu?.classList.remove('open');
    toggle?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  const init = () => {
    // Scroll glass effect
    const onScroll = () => header?.classList.toggle('scrolled', scrollY > 16);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile hamburger
    toggle?.addEventListener('click', () => {
      open = !open;
      menu?.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    menu?.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', close));

    // Highlight active link
    const path = location.pathname.replace(/\/$/, '');
    menu?.querySelectorAll('.nav-link').forEach(l => {
      const href = (l.getAttribute('href') || '').replace(/\/$/, '');
      l.classList.toggle('active',
        href === path || (href.length > 1 && path.startsWith(href))
      );
    });
  };

  return { init };
})();

// ── Typing animation ──────────────────────────────────────────────
class Typer {
  constructor(el, phrases, opts = {}) {
    this.el      = el;
    this.phrases = phrases;
    this.type    = opts.type    ?? 75;
    this.del     = opts.del     ?? 40;
    this.pause   = opts.pause   ?? 2000;
    this.idx = 0; this.char = 0; this.deleting = false;
    this._tick();
  }

  _tick() {
    const phrase = this.phrases[this.idx];

    if (!this.deleting) {
      this.el.textContent = phrase.slice(0, ++this.char);
      if (this.char === phrase.length) {
        this.deleting = true;
        return setTimeout(() => this._tick(), this.pause);
      }
    } else {
      this.el.textContent = phrase.slice(0, --this.char);
      if (this.char === 0) {
        this.deleting = false;
        this.idx = (this.idx + 1) % this.phrases.length;
      }
    }

    setTimeout(() => this._tick(), this.deleting ? this.del : this.type);
  }
}

// ── Scroll reveal ─────────────────────────────────────────────────
const Reveal = (() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const init = () => document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  return { init };
})();

// ── Skill bars ────────────────────────────────────────────────────
const Skills = (() => {
  const tabsEl   = document.querySelector('.skill-tabs');
  const panels   = [...document.querySelectorAll('.skill-panel')];
  const animated = new Set();

  const fill = panel => {
    if (animated.has(panel)) return;
    animated.add(panel);
    panel.querySelectorAll('.skill-item__bar').forEach(bar => {
      requestAnimationFrame(() => { bar.style.width = (bar.dataset.level || 0) + '%'; });
    });
  };

  const show = name => {
    panels.forEach(p => {
      const on = p.dataset.tab === name;
      p.classList.toggle('active', on);
      if (on) fill(p);
    });
    tabsEl?.querySelectorAll('.skill-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab === name)
    );
  };

  const init = () => {
    if (!tabsEl) return;
    tabsEl.addEventListener('click', e => {
      const tab = e.target.closest('.skill-tab');
      if (tab) show(tab.dataset.tab);
    });

    // Animate first visible panel on scroll
    const first = document.querySelector('.skill-panel.active');
    if (first) {
      const o = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { fill(first); o.disconnect(); }
      }, { threshold: 0.25 });
      o.observe(first);
    }
  };

  return { init };
})();

// ── Generic filter (projects + certs) ────────────────────────────
const Filter = (() => {
  const setup = (gridSel, wrapSel, btnSel, key = 'tags') => {
    const grid = document.querySelector(gridSel);
    if (!grid) return;

    const items = [...grid.querySelectorAll(wrapSel)];
    const btns  = [...document.querySelectorAll(btnSel)];

    const apply = val => {
      items.forEach(item => {
        const data  = (item.dataset[key] || '').toLowerCase();
        const match = val === 'all' || data.includes(val.toLowerCase());
        item.style.display = match ? '' : 'none';
      });
      btns.forEach(b => b.classList.toggle('active', b.dataset.filter === val));
    };

    btns.forEach(b => b.addEventListener('click', () => apply(b.dataset.filter ?? 'all')));
    apply('all');
  };

  const init = () => {
    setup('.projects-grid', '.project-card-wrap', '.projects-filter .filter-btn', 'tags');
    setup('.certs-grid',    '.cert-card-wrap',    '.certs-filter .filter-btn',    'category');
  };

  return { init };
})();

// ── Smooth anchor scroll ──────────────────────────────────────────
const Anchors = (() => {
  const init = () => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const off = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        scrollTo({ top: target.offsetTop - off, behavior: 'smooth' });
      });
    });
  };
  return { init };
})();

// ── Boot ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Nav.init();
  Reveal.init();
  Skills.init();
  Filter.init();
  Anchors.init();

  // Typing
  const el = document.getElementById('typed');
  if (el) {
    const phrases = el.dataset.phrases
      ? JSON.parse(el.dataset.phrases)
      : ['CS & AI Student', 'ML Engineer', 'Full-Stack Developer', 'Problem Solver'];
    new Typer(el, phrases);
  }
});
