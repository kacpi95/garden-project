const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const dropdownButton = document.querySelector('.header__dropdown-toggle');
const dropdownItem = document.querySelector('.header__item--dropdown');

hamburger?.addEventListener('click', () => {
  const active = hamburger.classList.toggle('header__hamburger--active');

  nav.classList.toggle('header__nav--active');

  hamburger.setAttribute('aria-expanded', active);
});

dropdownButton?.addEventListener('click', () => {
  if (window.innerWidth < 992) {
    dropdownItem.classList.toggle('header__item--dropdown--active');
  }
});
