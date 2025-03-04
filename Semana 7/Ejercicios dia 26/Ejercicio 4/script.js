let p = document.querySelector('p');

const mascota = "perro";

switch (mascota) {
    case "perro":
        p.textContent = "Tu mascota es un perro";
        break;
    case "gato":
        p.textContent = "Tu mascota es un gato";
        break;
    case "loro":
        p.textContent = "Tu mascota es un loro";
        break;
    default:
        p.textContent = "No tienes mascota";
        break;
}
