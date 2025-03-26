// Espera a que el contenido del documento se cargue
document.addEventListener("DOMContentLoaded", function () {
    
    // Selecciona el overlay de fondo
    const overlay = document.querySelector(".background-overlay");
    
    // Selecciona los elementos de la lista de proyectos
    const items = document.querySelectorAll(".works-list__content li");
    
    // Almacena la imagen de fondo actual
    let currentBg = "";

    // Maneja el efecto de hover en los elementos de la lista
    function handleHoverEffect() {
        
        // Desactiva el cambio de fondo en pantallas pequeñas
        if (window.innerWidth <= 768) {
            overlay.style.backgroundImage = "none";
            return;
        }

        // Asigna eventos a cada elemento de la lista
        items.forEach(item => {
            
            // Cambia el fondo al pasar el ratón
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

        // Restaura el fondo al salir de la lista
        document.querySelector(".works-list__content").addEventListener("mouseleave", function () {
            overlay.style.transition = "opacity 0.5s ease-in-out";
            overlay.style.opacity = 0;
            currentBg = "";
        });
    }

    // Activa el efecto al cargar la página
    handleHoverEffect();
    
    // Recalcula el efecto al cambiar el tamaño de la ventana
    window.addEventListener("resize", handleHoverEffect);
});
