document.addEventListener("mousemove", function (event) {
    let windowWidth = window.innerWidth;
    let mouseX = event.clientX;

    let moveAmountSky = (mouseX - windowWidth / 2) * 0.02;
    let moveAmountMountains = (mouseX - windowWidth / 2) * 0.05; 

    document.getElementById("sky").style.transform = `translateX(${moveAmountSky}px)`;
    document.getElementById("mountains").style.transform = `translateX(${moveAmountMountains}px)`;
});
