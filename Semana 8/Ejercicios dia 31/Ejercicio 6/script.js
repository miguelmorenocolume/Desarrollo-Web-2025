let div = document.querySelector('div');

function handleMoveMouse(e) {
    let rndCol = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(e.clientX, e.clientY);
    e.target.style.backgroundColor = rndCol;
}

function handleMouseEnter(e) {
    e.target.style.width = '200px';
    e.target.style.height = '200px';
}

function handleMouseLeave(e) {
    e.target.style.width = '100px';
    e.target.style.height = '100px';
}

div.addEventListener('click', handleMoveMouse);
div.addEventListener('mouseenter', handleMouseEnter);
div.addEventListener('mouseleave', handleMouseLeave);
