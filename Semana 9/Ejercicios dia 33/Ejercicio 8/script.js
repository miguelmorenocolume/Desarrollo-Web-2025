const btn = document.querySelector('button');
const tabla = document.querySelector('table');
let celdaAnterior = null;

function handleChangeColor() {
    const celdas = tabla.getElementsByTagName('td');
    const indiceAleatorio = Math.floor(Math.random() * celdas.length);
    const celdaAleatoria = celdas[indiceAleatorio];
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    if (celdaAnterior) {
        celdaAnterior.style.backgroundColor = '';
    }

    celdaAleatoria.style.backgroundColor = colorAleatorio;
    celdaAnterior = celdaAleatoria;
}

btn.addEventListener('click', handleChangeColor);