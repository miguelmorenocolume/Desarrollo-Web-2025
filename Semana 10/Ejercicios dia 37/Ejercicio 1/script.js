const swiper = new Swiper('.swiper-container', {
    loop: true, // Hace que el carrusel sea infinito
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Cambia de slide automáticamente cada 3 segundos
    },
  });

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

const updateCarousel = () => {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
};

prev.addEventListener('click', () => {
  index = (index === 0) ? items.length - 1 : index - 1;
  updateCarousel();
});

next.addEventListener('click', () => {
  index = (index === items.length - 1) ? 0 : index + 1;
  updateCarousel();
});