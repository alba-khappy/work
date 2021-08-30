if (window.matchMedia("(max-width: 1024px)").matches) {

const list = document.querySelector('#newsList').classList.remove('news__list');

const swiper = new Swiper('.swiper-3', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  slidesPerColumn: 1,

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination-3',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },

  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
          slidesPerView:2,
        },
  }

});
}
