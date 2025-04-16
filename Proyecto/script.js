(function() {

    // Seleccionamos el elemento de fondo una sola vez
    const background = document.getElementById("background");

    // Parallax effect
    document.addEventListener("mousemove", function (event) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let moveAmountX = (mouseX - windowWidth / 2) * 0.01; // Reduced movement
        let moveAmountY = (mouseY - windowHeight / 2) * 0.01; // Reduced movement

        // Usamos requestAnimationFrame para mejorar la fluidez
        requestAnimationFrame(() => {
            background.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
        });
    });

})();
