const btn = document.querySelector('button');

function handleToggleClass(e) {
    let div = document.querySelector('div');
    div.classList.toggle('grande');
}

btn.addEventListener('click', handleToggleClass);
