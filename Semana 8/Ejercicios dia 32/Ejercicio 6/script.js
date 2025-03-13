const btn = document.querySelector('button');

function handleAddDiv(e) {
    const newDiv = document.createElement('div');
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    newDiv.style.backgroundColor = randomColor;
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.margin = '10px';
    newDiv.style.cursor = 'pointer';    

    newDiv.addEventListener('click', () => {
        newDiv.remove();
    });

    document.body.appendChild(newDiv);
}

btn.addEventListener('click', handleAddDiv);
