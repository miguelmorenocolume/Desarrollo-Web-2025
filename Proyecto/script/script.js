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
        const mainContainer = document.querySelector(".main-page__container");
        const aboutContainer = document.querySelector(".about-page__container");
    
        menuIcon?.addEventListener("click", () => {
            mobileMenu.classList.add("open");
            header.classList.add("hiden");
    
            const menuWidth = window.getComputedStyle(mobileMenu).width;
            const viewportWidth = window.innerWidth + 'px';
    
            if (menuWidth === viewportWidth) {
                if (mainContainer) {
                    mainContainer.style.opacity = "0";
                    mainContainer.style.visibility = "hidden";
                    mainContainer.style.pointerEvents = "none";
                }
    
                if (aboutContainer) {
                    aboutContainer.style.visibility = "hidden";
                    aboutContainer.style.pointerEvents = "none";
                }
            }
        });
    
        closeButton?.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            header.classList.remove("hiden");
    
            if (mainContainer) {
                mainContainer.style.opacity = "1";
                mainContainer.style.visibility = "visible";
                mainContainer.style.pointerEvents = "auto";
            }
    
            if (aboutContainer) {
                aboutContainer.style.visibility = "visible";
                aboutContainer.style.pointerEvents = "auto";
            }
        });
    });
    




})();
