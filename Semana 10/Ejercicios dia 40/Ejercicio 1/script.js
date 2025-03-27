document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("miBoton");

    boton.addEventListener("click", function() {
        setTimeout(() => {
            alert("Mensaje de alerta");
        }, 1000);
    });
});
