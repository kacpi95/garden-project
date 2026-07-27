import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const gallery = document.querySelector('.projects__gallery');

const initMasonry = () => {
  if (!gallery) return;

  imagesLoaded(gallery, () => {
    const masonry = new Masonry(gallery, {
      itemSelector: '.projects__item',
      columnWidth: '.projects__item',
      percentPosition: true,
      gutter: 32,
    });

    return masonry;
  });
};

initMasonry();
