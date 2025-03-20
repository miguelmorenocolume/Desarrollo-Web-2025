let slideIndex = 0;
const slides = document.querySelectorAll(".my-slides");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    slideIndex = (n + slides.length) % slides.length;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n - 1);
}

showSlides(slideIndex);
