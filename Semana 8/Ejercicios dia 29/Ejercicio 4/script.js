function saludar(nombre) {
    alert("Hola " + nombre + "!");
}

function adios(nombre) {
    alert("Adios " + nombre + "!");
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Introduce tu nombre");
    callback(nombre);
}

procesarEntradaUsuario(saludar);
procesarEntradaUsuario(adios);