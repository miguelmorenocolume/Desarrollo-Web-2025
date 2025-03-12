const buttons = document.querySelectorAll('.buttonChanger');

function random(number) {
    return Math.floor(Math.random() * number);
}

function handleBgChange(e) {
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;

    // target referencia al objeto al que está asociado el evento
    e.target.style.backgroundColor = rndCol;

}

buttons.forEach(button => {
    button.addEventListener('click', handleBgChange);
});

