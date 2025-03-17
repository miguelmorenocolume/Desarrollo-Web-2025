const btn = document.querySelector('button');
const div = document.querySelector('div');

function handleChangeDisplay() {

    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

btn.addEventListener('click', handleChangeDisplay);