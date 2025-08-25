// Mobile navigation toggle
(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!navToggle || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when clicking a link (mobile)
  nav.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName === 'A') {
      closeNav();
    }
  });

  // Close on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();

// Footer year
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

