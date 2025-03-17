const btn = document.querySelector('button');
const div = document.querySelector('div');
const p = document.querySelector('p');

function handleChangeColor() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        p.style.color = 'black';
        div.style.borderColor = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        p.style.color = 'white';
        div.style.borderColor = 'white';
    }
}

function handleChangeWidth() {

    if (div.style.width === '80vw') {
        div.style.width = '20vw';
    } else {
        div.style.width = '80vw';
    }
}

btn.addEventListener('click', handleChangeWidth);

btn.addEventListener('click', handleChangeColor);