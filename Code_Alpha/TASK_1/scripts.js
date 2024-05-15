const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
  element.style.animation = 'fadeIn 1s ease-out forwards';
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const targetElement = document.querySelector(href);
    const sectionTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });
});
const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && (sectionTop + sectionHeight) > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});