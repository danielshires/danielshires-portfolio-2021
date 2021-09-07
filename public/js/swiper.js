const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  autoHeight: true, //enable auto height
  speed: 500,
  slidesPerView: 1,
  navigation: true,
  spaceBetween: 30,
  mousewheel: true,

  // // Free Mode
  // freeMode: {
  //   enabled: true,
  //   sticky: true,
  //   minimumVelocity: 0.005,
  // },

  // mousewheel: true,


  // Crossfade
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});