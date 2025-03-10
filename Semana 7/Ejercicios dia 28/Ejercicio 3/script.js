const alumno = {
    nombre: "Miguel",
    apellido: "Moreno Columé",
    edad: 21,
    curso: "Desarrollo Web",
    año: 2025,
    imprimirNombreCompleto: function() {
        console.log("Nombre completo:", this.nombre, this.apellido);
    }
};

const { nombre, apellido, edad, curso, año } = alumno;

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("Curso:", curso);
console.log("Año:", año);

alumno.imprimirNombreCompleto();