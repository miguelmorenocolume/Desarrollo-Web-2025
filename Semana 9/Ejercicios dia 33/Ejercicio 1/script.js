const btn = document.querySelector('button');
const p = document.querySelector('p');

function handleChangeColor() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        p.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        p.style.color = 'white';
    }
}

btn.addEventListener('click', handleChangeColor);