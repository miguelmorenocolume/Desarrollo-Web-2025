const swiper = new Swiper('.swiper', {
    loop: true, // Desplazamiento infinito
    autoplay: {
        delay: 2500, // Cambia cada 2.5 segundos
        disableOnInteraction: false, // No se detiene al interactuar
    },
    effect: 'coverflow', // Efecto Coverflow
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50, // Rotación de las imágenes
        stretch: 0, // Espaciado entre imágenes
        depth: 100, // Profundidad del efecto
        modifier: 1, // Intensidad del efecto
        slideShadows: true, // Sombras en los slides
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
