if (window.matchMedia("(max-width: 1024px)").matches) {

    const list = document.querySelector('#servicesList').classList.remove('services__list');
    
    const swiper = new Swiper('.swiper-4', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 2,
      slidesPerColumn: 1,
    
      // // If we need pagination
      pagination: {
        el: '.swiper-pagination-4',
        type: 'bullets',
        clickable: true,
      },
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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