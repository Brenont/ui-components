var nav = document.querySelector(".nav-mobile");

var showMenu = document.querySelector(".openMenu");

var hideMenu = document.querySelector(".closeMenu");

showMenu.addEventListener("click", function () {
    verificarMenu();
});

hideMenu.addEventListener("click", function(){
    verificarMenu();
});

function verificarMenu(){
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        nav.classList.add("hide");
    }
    else {
        nav.classList.remove("hide");
        nav.classList.add("show");
    }
}