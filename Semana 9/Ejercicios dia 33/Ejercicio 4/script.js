const btn = document.querySelector('button');
const div = document.querySelector('div');

function handleChangeAnimation() {
    div.style.transition = 'all 0.5s ease-in-out'; 
    div.style.transform = div.style.transform === 'scale(1)' ? 'scale(1.5)' : 'scale(1)'; 
    div.style.backgroundColor = div.style.backgroundColor === 'blue' ? 'red' : 'blue'; 
    div.style.borderRadius = div.style.borderRadius === '0%' ? '50%' : '0%'; // 
}

btn.addEventListener('click', handleChangeAnimation);
