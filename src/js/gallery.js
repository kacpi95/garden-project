import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const gallery = document.querySelector('.projects__gallery');
const button = document.querySelector('.projects__button');
const overlay = document.querySelector('.projects__overlay');

let masonry;

const initLightbox = () => {
  GLightbox({
    selector: '.glightbox',
  });
};

const initMasonry = () => {
  if (!gallery) return;

  imagesLoaded(gallery, () => {
    masonry = new Masonry(gallery, {
      itemSelector: '.projects__item',
      columnWidth: '.projects__item',
      percentPosition: true,
      gutter: 32,
    });
  });
};

const initGallery = () => {
  if (!gallery || !button || !overlay) return;

  button.addEventListener('click', () => {
    gallery.querySelectorAll('.is-hidden').forEach((item) => {
      item.classList.remove('is-hidden');
    });

    imagesLoaded(gallery, () => {
      masonry?.reloadItems();
      masonry?.layout();
    });

    overlay.classList.add('is-hidden');
  });
};

const init = () => {
  initLightbox();
  initMasonry();
  initGallery();
};

init();
