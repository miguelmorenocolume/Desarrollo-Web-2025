document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".nav > li > a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            let subMenu = this.nextElementSibling;

            if (subMenu && subMenu.tagName === "UL") {
                e.preventDefault();

                document.querySelectorAll(".nav ul").forEach(ul => {
                    if (ul !== subMenu) {
                        ul.style.display = "none";
                    }
                });

                subMenu.style.display = (subMenu.style.display === "block") ? "none" : "block";
            }
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav")) {
            document.querySelectorAll(".nav ul").forEach(ul => {
                ul.style.display = "none";
            });
        }
    });
});
