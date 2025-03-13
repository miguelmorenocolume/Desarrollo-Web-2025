const btn = document.querySelector('button');

function handleAddDiv(e) {

    const newDiv = document.createElement('div');
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    newDiv.style.backgroundColor = randomColor;

    document.body.appendChild(newDiv);
}

btn.addEventListener('click', handleAddDiv);
