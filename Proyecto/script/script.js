(function () {

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


    // Logica para cambiar el subtítulo de la landing page
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector('body');
        const dataBtn = document.getElementById('data');
        const fullstackBtn = document.getElementById('fullstack');
        const softwareBtn = document.getElementById('software');
        const subtitle = document.querySelector('.main-page__container-subtitle');
        const allButtons = [dataBtn, fullstackBtn, softwareBtn];

        const setActive = (button) => {
            allButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        };

        dataBtn.addEventListener('click', () => {
            body.classList.remove('body--fullstack');
            body.classList.add('body--data');
            subtitle.textContent = 'Data Engineer';
            setActive(dataBtn);
        });

        fullstackBtn.addEventListener('click', () => {
            body.classList.remove('body--data');
            body.classList.add('body--fullstack');
            subtitle.textContent = 'Fullstack Developer';
            setActive(fullstackBtn);
        });

        softwareBtn.addEventListener('click', () => {
            body.classList.remove('body--data', 'body--fullstack');
            subtitle.textContent = 'Software Developer';
            setActive(softwareBtn);
        });
    });


    // Logica para el menu de hambuguesa
    document.addEventListener("DOMContentLoaded", () => {
        const menuIcon = document.querySelector(".header__icon");
        const mobileMenu = document.getElementById("mobileMenu");
        const closeButton = document.getElementById("closeMenu");
        const header = document.querySelector(".header");
        const generalContainer = document.querySelector(".general-page__container");

        menuIcon?.addEventListener("click", () => {
            mobileMenu.classList.add("open");
            header.classList.add("hiden");

            const menuWidth = window.getComputedStyle(mobileMenu).width;
            const viewportWidth = window.innerWidth + 'px';

            if (menuWidth === viewportWidth && generalContainer) {
                generalContainer.style.opacity = "0";
                generalContainer.style.visibility = "hidden";
                generalContainer.style.pointerEvents = "none";
            }
        });

        closeButton?.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            header.classList.remove("hiden");

            if (generalContainer) {
                generalContainer.style.opacity = "1";
                generalContainer.style.visibility = "visible";
                generalContainer.style.pointerEvents = "auto";
            }
        });
    });

    // Abrir el modal al hacer clic en un proyecto
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const modalId = index === 0 ? 'modal-light' : 'modal-data';
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    // Cerrar el modal al hacer clic en el botón SVG
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const targetId = closeBtn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // También cerrar al hacer clic fuera del contenido del modal
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });


})();
