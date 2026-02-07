document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  function setActive() {
    const offset = window.scrollY + 120;
    let current = 'home';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (offset >= top && offset < top + height) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', setActive);
  setActive();

  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track && prevBtn && nextBtn) {
    const scrollByAmount = 300;
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollByAmount, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollByAmount, behavior: 'smooth' }));
  }
});
