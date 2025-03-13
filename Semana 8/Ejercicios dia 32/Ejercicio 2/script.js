const btn = document.querySelector('button');

function handleRemoveClass(e) {
    let p = document.querySelector('p');
    p.classList.remove('parrafo');
    p.style.color = 'blue';
}

btn.addEventListener('click', handleRemoveClass);
