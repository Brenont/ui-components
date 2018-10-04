var nav = document.querySelector(".nav-mobile");

var showMenu = document.querySelector(".openMenu");

var hideMenu = document.querySelector(".closeMenu");

showMenu.addEventListener("click", function () {
    verificarMenu();
    showUl()
});

hideMenu.addEventListener("click", function () {
    verificarMenu();
    showUl();
});

function verificarMenu() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
        nav.classList.add("show");
    }
};

function showUl() {
    var menuList = document.querySelector(".menuList");

    if (nav.classList.contains("hide")) {
        menuList.style.display = "none";
    }
    if (nav.classList.contains("show")) {
        menuList.style.display = "flex";
    }
}