var targetDrop = document.querySelector(".target-drop")

var dropdown = document.querySelector(".dropdown");

targetDrop.addEventListener("click", function () {
    if (dropdown.classList.contains("open-drop")) {
        dropdown.classList.remove("open-drop")
    } else {
        dropdown.classList.add("open-drop");
    }
});

// window.onclick = function (event) {
//     if (!event.target.matches(".dropdown")) {
//         if (dropdown.classList.contains("open-drop")) {
//             dropdown.classList.remove("open-srop");
//         }
//     }
// };

// window.addEventListener("click", function (event) {
//     this.console.log("oll")
//     if (!event.target.matches(".dropdown")) {
//         if (dropdown.classList.contains("open-drop")) {
//             dropdown.classList.remove("open-drop");
//         }
//     }
// });