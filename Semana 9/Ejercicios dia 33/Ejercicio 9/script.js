const btn = document.querySelector('button');
const div = document.querySelector('div');

function handleChangePositionRandom() {

    const maxX = window.innerWidth - div.offsetWidth;
    const maxY = window.innerHeight - div.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    div.style.left = `${randomX}px`;
    div.style.top = `${randomY}px`;
}

btn.addEventListener('click', handleChangePositionRandom);
