const btn = document.querySelector('button');
const div = document.querySelector('div');

function handleChangeWidth() {

    if (div.style.width === '80vw') {
        div.style.width = '20vw';
    } else {
        div.style.width = '80vw';
    }
}

btn.addEventListener('click', handleChangeWidth);