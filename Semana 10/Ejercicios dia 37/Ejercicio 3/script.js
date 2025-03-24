const wrapper = document.querySelector('.carousel-3d-wrapper');
const items = document.querySelectorAll('.carousel-3d-item');
let currentAngle = 0;


items.forEach((item, index) => {
    item.addEventListener('click', () => {

        currentAngle = -index * 72; 
        wrapper.style.transform = `rotateY(${currentAngle}deg)`;
    });
});
