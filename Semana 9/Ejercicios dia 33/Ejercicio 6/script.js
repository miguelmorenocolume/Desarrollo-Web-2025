const btn = document.querySelector('button');
const div = document.querySelector('div');

function handleChangeOpacity() {
    if (div.style.opacity === '0') {
        div.style.opacity = '1';
    } else {
        div.style.opacity = '0';
    }
}

btn.addEventListener('click', handleChangeOpacity);