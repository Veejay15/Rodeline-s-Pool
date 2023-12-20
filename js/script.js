var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Add this JavaScript code to toggle the 'scrolled' class on scroll | Hamburger menu on mobile */
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
});

