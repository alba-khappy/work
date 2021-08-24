var swiper = new Swiper(".mySwiper1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
});
  