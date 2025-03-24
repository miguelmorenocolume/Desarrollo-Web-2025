'use strict';

// Selecciona todos los elementos <h2> dentro de los elementos con la clase "bloque".
document.querySelectorAll('.bloque h2').forEach(titulo => {

    // Añade un evento de clic a cada título <h2>.
    titulo.addEventListener('click', () => {

        // Obtiene el contenedor padre del <h2>, que es el "bloque".
        const bloque = titulo.parentElement;

        // Selecciona el elemento con la clase "contenido" dentro de este bloque.
        const contenido = bloque.querySelector('.contenido');

        // Comprueba si el bloque ya está activo (es decir, si está expandido).
        if (bloque.classList.contains('activo')) {
            // Si el bloque ya está abierto, lo cierra:
            bloque.classList.remove('activo');
            contenido.style.maxHeight = '0';
            contenido.style.padding = '0 15px';
        } else {
            // Si el bloque está cerrado, primero cierra todos los bloques abiertos:
            document.querySelectorAll('.bloque').forEach(b => {
                b.classList.remove('activo');
                b.querySelector('.contenido').style.maxHeight = '0';
                b.querySelector('.contenido').style.padding = '0 15px';
            });

            // Activa el bloque que se ha clicado:
            bloque.classList.add('activo')
            contenido.style.maxHeight = contenido.scrollHeight + 'px';
            contenido.style.padding = '15px';
        }
    });
});
