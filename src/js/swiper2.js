
  const swiper = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 1,

    // // If we need pagination
    pagination: {
      el: '.swiper-pagination-2',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
            slidesPerView:3,
          },
    }

});

