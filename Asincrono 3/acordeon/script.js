'use strict'; // Habilita el modo estricto para escribir código más seguro y evitar errores comunes.

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
            bloque.classList.remove('activo'); // Elimina la clase "activo".
            contenido.style.maxHeight = '0'; // Contrae el contenido suavemente.
            contenido.style.padding = '0 15px'; // Quita el padding vertical para que desaparezca correctamente.
        } else {
            // Si el bloque está cerrado, primero cierra todos los bloques abiertos:
            document.querySelectorAll('.bloque').forEach(b => {
                b.classList.remove('activo'); // Quita la clase "activo" de todos los bloques.
                b.querySelector('.contenido').style.maxHeight = '0'; // Contrae su contenido.
                b.querySelector('.contenido').style.padding = '0 15px'; // Quita su padding vertical.
            });

            // Activa el bloque que se ha clicado:
            bloque.classList.add('activo'); // Agrega la clase "activo" para indicar que está abierto.
            contenido.style.maxHeight = contenido.scrollHeight + 'px'; // Ajustaa dinámicamente la altura del contenido.
            contenido.style.padding = '15px'; // Restaura el padding para que se vea correctamente.
        }
    });
});
