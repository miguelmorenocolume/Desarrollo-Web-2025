// Función que abre el lightbox y muestra la imagen seleccionada
function open_img(url) {
    // Se selecciona la imagen dentro del lightbox y se actualiza su atributo 'src' con la URL proporcionada
    document.querySelector("#lightbox img").setAttribute("src", url);
    
    // Se añade la clase 'active' al contenedor del lightbox para hacerlo visible
    document.querySelector("#lightbox").classList.add("active");
}

// Función que cierra el lightbox
function close_img() {
    // Se remueve la clase 'active' del contenedor del lightbox para ocultarlo
    document.querySelector("#lightbox").classList.remove("active");
}