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
