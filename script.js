const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('#sidebar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.querySelector('#backToTop');
const tabs = document.querySelectorAll('.tab');
const publicationLists = document.querySelectorAll('.publication-list');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });

  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    publicationLists.forEach((list) => list.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});
