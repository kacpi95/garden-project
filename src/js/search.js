const searchButton = document.querySelector('.header__search');
const searchWrapper = document.querySelector('.header__search-wrapper');
const searchInput = document.querySelector('.header__search-input');

searchButton?.addEventListener('click', () => {
  const isActive = searchWrapper.classList.toggle(
    'header__search-wrapper--active',
  );

  if (isActive) {
    searchInput.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!searchWrapper.contains(event.target)) {
    searchWrapper.classList.remove('header__search-wrapper--active');
  }
});
