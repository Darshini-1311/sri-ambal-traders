document.querySelectorAll('.about-hero nav, .contact-hero nav').forEach((nav) => {
  const menu = nav.querySelector('.nav-centre');
  if (!menu) return;
  const toggle = document.createElement('button');
  toggle.className = 'mobile-menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
  nav.append(toggle);
  const destinations = {
    'ABOUT US': 'about.html',
    CONTACT: 'contact.html'
  };
  menu.querySelectorAll('a').forEach((link) => {
    link.href = destinations[link.textContent.trim().toUpperCase()] || link.href;
  });
  const renderToggle = (isOpen) => {
    toggle.innerHTML = isOpen ? '&times;' : '<span></span><span></span><span></span>';
  };
  renderToggle(false);
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    toggle.textContent = isOpen ? '×' : '☰';
  });
  toggle.addEventListener('click', () => renderToggle(toggle.getAttribute('aria-expanded') === 'true'));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    renderToggle(false);
  }));
});
