const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

function handleBgChange(e) {
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    const divs = document.querySelectorAll('div'); 

    divs.forEach(div => {
        div.style.backgroundColor = rndCol; 
    });
}

btn.addEventListener('click', handleBgChange);
