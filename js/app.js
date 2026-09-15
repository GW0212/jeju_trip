(() => {
  'use strict';

  const ready = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  ready(() => {
    // -------------------------------------------------------
    // Main category tabs
    // -------------------------------------------------------
    const tabs = [...document.querySelectorAll('.tab')];
    const categories = [...document.querySelectorAll('.category')];

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        if (!target) return;

        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        categories.forEach((section) => {
          section.classList.toggle('active', section.id === target);
        });
      });
    });

    // -------------------------------------------------------
    // DAY 1 / DAY 2 / DAY 3 selector
    // -------------------------------------------------------
    const dayTabs = [...document.querySelectorAll('.day-schedule-tab')];
    const dayPanels = [...document.querySelectorAll('.schedule-panel')];

    dayTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.schedule;
        if (!targetId) return;

        dayTabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        dayPanels.forEach((panel) => {
          const active = panel.id === targetId;
          panel.classList.toggle('active', active);
          panel.hidden = !active;
        });
      });
    });

    // -------------------------------------------------------
    // Full schedule card = accordion toggle
    // -------------------------------------------------------
    const scheduleToggles = [...document.querySelectorAll('.schedule-card-toggle')];

    scheduleToggles.forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = button.dataset.collapseTarget;
        const timeline = targetId ? document.getElementById(targetId) : null;
        const panel = button.closest('.schedule-panel');
        const label = button.querySelector('.collapse-label');

        if (!timeline || !panel) return;

        const nextExpanded = button.getAttribute('aria-expanded') !== 'true';

        button.setAttribute('aria-expanded', String(nextExpanded));
        timeline.hidden = !nextExpanded;
        panel.classList.toggle('collapsed', !nextExpanded);

        if (label) {
          label.textContent = nextExpanded ? '접기' : '펼치기';
        }
      });
    });

    // -------------------------------------------------------
    // Back to top
    // -------------------------------------------------------
    const topButton = document.createElement('button');
    topButton.type = 'button';
    topButton.className = 'back-to-top';
    topButton.setAttribute('aria-label', '페이지 맨 위로 이동');
    topButton.title = '맨 위로';
    topButton.textContent = '↑';
    document.body.appendChild(topButton);

    const syncTopButton = () => {
      topButton.classList.toggle('show', window.scrollY > 520);
    };

    window.addEventListener('scroll', syncTopButton, { passive: true });
    syncTopButton();

    topButton.addEventListener('click', () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    });

    // -------------------------------------------------------
    // Keyboard quality-of-life: Escape collapses opened detail
    // -------------------------------------------------------
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;

      scheduleToggles.forEach((button) => {
        if (button.getAttribute('aria-expanded') !== 'true') return;

        const targetId = button.dataset.collapseTarget;
        const timeline = targetId ? document.getElementById(targetId) : null;
        const panel = button.closest('.schedule-panel');
        const label = button.querySelector('.collapse-label');

        button.setAttribute('aria-expanded', 'false');
        if (timeline) timeline.hidden = true;
        if (panel) panel.classList.add('collapsed');
        if (label) label.textContent = '펼치기';
      });
    });
  });
})();
