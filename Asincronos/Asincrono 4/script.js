document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".background-overlay");
    const items = document.querySelectorAll(".works-list__content li");
    let currentBg = "";
    let timeoutId;

    items.forEach(item => {
        item.addEventListener("mouseenter", function () {
            const bgImage = this.getAttribute("data-bg");
            if (bgImage && bgImage !== currentBg) {
                overlay.style.transition = "opacity 0.5s ease-in-out";
                overlay.style.opacity = 0;
                setTimeout(() => {
                    overlay.style.backgroundImage = `url('${bgImage}')`;
                    overlay.style.opacity = 1;
                }, 200);
                currentBg = bgImage;
            }
        });
    });

    document.querySelector(".works-list__content").addEventListener("mouseleave", function () {
        // Aquí se mejora la sincronización eliminando el retraso innecesario
        overlay.style.transition = "opacity 0.5s ease-in-out";  // Añadimos la transición
        overlay.style.opacity = 0;  // Desvanecemos la imagen inmediatamente
        currentBg = "";
    });
});
