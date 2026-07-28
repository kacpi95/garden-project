import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

new Swiper('.hero', {
  modules: [Navigation],

  loop: true,
  speed: 700,

  navigation: {
    nextEl: '.hero__control--next',
    prevEl: '.hero__control--prev',
  },
});
