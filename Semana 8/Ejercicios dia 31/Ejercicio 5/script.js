div = document.querySelector('div');

function handleMoveMouse(e) {
    let rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(e.clientX, e.clientY);
    e.target.style.backgroundColor = rndCol;
}

div.addEventListener('mouseenter', handleMoveMouse);
div.addEventListener('mouseout', handleMoveMouse);