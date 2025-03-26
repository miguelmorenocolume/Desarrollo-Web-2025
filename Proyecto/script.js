const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Fullstack Developer';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Software Developer';
    }, 6000);
    setTimeout(() => {
        text.textContent = 'Data Engineer';
    }, 12000);
};

textLoad();
setInterval(textLoad, 18000);
