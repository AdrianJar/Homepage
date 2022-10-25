let body = document.querySelector(".body")
let button = document.querySelector(".btn__lightMode")
let themeName = document.querySelector(".themeName")
let buttonMenu = document.querySelector(".btn__menuHide--icon")
let navigation = document.querySelector(".navigation")

button.addEventListener("click", () => {
    body.classList.toggle("light");
    button.classList.toggle("dark");

    (body.classList.contains("light")) ? themeName.innerText = "Włącz tryb ciemny!" : themeName.innerText = "Włącz tryb jasny!";

});

buttonMenu.addEventListener("click", () => {
    navigation.classList.toggle("navigation__hidden");

});