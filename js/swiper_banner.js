var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  grabCursor: true
});
