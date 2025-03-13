const btn = document.querySelector('button');

function handleToggleClass(e) {
    let div = document.querySelector('div');
    div.classList.toggle('grande');
}

function handleRemoveClass(e) {
    let p = document.querySelector('p');
    p.classList.remove('parrafo');
    p.style.color = 'blue';
}

btn.addEventListener('click', handleToggleClass);
btn.addEventListener('click', handleRemoveClass);





