const btn = document.querySelector('button');

function handleAddAnimation(e) {
    let div = document.querySelector('div');
    div.classList.add('animation');
}

btn.addEventListener('click', handleAddAnimation);
