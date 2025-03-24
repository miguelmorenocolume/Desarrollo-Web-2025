var container = document.querySelector('.carrousel-container');
var carrousel = document.querySelector('.carrousel-wrapper');
var carrouselItems = document.getElementsByClassName('carrousel-item').length;
var buttons = document.getElementsByClassName('carrousel-btn');

var currentPosition = 0;
var currentMargin = 0;
var carrouselsPerPage = 0;
var carrouselItemsCount = carrouselItems - carrouselsPerPage;
var containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        carrouselsPerPage = 1;
    } else if (w < 901) {
        carrouselsPerPage = 2;
    } else if (w < 1101) {
        carrouselsPerPage = 3;
    } else {
        carrouselsPerPage = 4;
    }

    carrouselItemsCount = carrouselItems - carrouselsPerPage;
    if (currentPosition > carrouselItemsCount) {
        currentPosition = carrouselItemsCount;
    }

    currentMargin = - (100 / carrouselsPerPage) * currentPosition;
    carrousel.style.transform = `translateX(${currentMargin}%)`;

    updateButtons();
}

function updateButtons() {
    buttons[0].classList.toggle('inactive', currentPosition === 0);
    buttons[1].classList.toggle('inactive', currentPosition === carrouselItemsCount);
}

function carrouselRight() {
    if (currentPosition < carrouselItemsCount) {
        currentPosition++;
        currentMargin = - (100 / carrouselsPerPage) * currentPosition;
        carrousel.style.transform = `translateX(${currentMargin}%)`;
        updateButtons();
    }
}

function carrouselLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        currentMargin = - (100 / carrouselsPerPage) * currentPosition;
        carrousel.style.transform = `translateX(${currentMargin}%)`;
        updateButtons();
    }
}

setParams(container.offsetWidth);
