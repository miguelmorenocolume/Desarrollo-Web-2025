let nuevaVentana;

function abrirVentana() {
    nuevaVentana = window.open('https://www.google.com', '_blank', 'width=600,height=400');
}

function cerrarVentana() {
    if (nuevaVentana) {
        nuevaVentana.close();
    } else {
        alert("No hay una ventana abierta.");
    }
}

function mostrarURL() {
    alert("La URL actual es: " + window.location.href);
}

function moverVentana() {
    window.moveBy(50, 50);
}

function recargarPagina() {
    location.reload();
}