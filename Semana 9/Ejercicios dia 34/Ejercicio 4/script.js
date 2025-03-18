function open_img(url) {
    document.querySelector("#lightbox img").setAttribute("src", url);
    document.querySelector("#lightbox").classList.add("active");
}

function close_img() {
    document.querySelector("#lightbox").classList.remove("active");
}
