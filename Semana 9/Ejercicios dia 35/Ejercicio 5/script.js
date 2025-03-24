'use strict'

const li = document.querySelectorAll('.li');
const bloques = document.querySelectorAll('.bloque');

// Recorre todos los li y les añade un evento click
li.forEach((cadaLi, i) => {
    cadaLi.addEventListener('click', () => {

        // Recorre todos los li y bloques y les quita la clase activo
        li.forEach((cadaLi) => {
            cadaLi.classList.remove('activo');
        });

        // Quita la clase activo de cada bloque
        bloques.forEach((bloque) => {
            bloque.classList.remove('activo');
        });
        
        // Añade la clase activo al li y al bloque que hemos clicado
        cadaLi.classList.add('activo');
        bloques[i].classList.add('activo');
    });
});

function checkNumber() {
    const userNumber = parseInt(document.getElementById('userInput').value, 10);
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const message = document.getElementById('resultMessage');

    if (userNumber < 1 || userNumber > 9 || isNaN(userNumber)) {
        message.textContent = "Por favor, introduce un número válido entre 1 y 9.";
        message.style.color = "red";
        return;
    }

    if (userNumber === randomNumber) {
        message.textContent = `Has acertado. El número era ${randomNumber}.`;
        message.style.color = "green";
    } else {
        message.textContent = `Has perdido. El número era ${randomNumber}.`;
        message.style.color = "red";
    }
}


 particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 5,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "out_mode": "bounce"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                }
            },
            "retina_detect": true
        });

