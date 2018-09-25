var target = document.querySelector(".target-drop")

var dropdown = document.querySelector(".dropdown");

target.addEventListener("click", function () {
    if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open")
    } else {
        dropdown.classList.add("open");
    }
});