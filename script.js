{
    const hideMenu = () => {
        let buttonMenu = document.querySelector(".btn__menuHide--icon")
        let navigation = document.querySelector(".navigation")

        buttonMenu.addEventListener("click", () => {
            navigation.classList.toggle("navigation__hidden");
        });
    };

    const switchTheme = () => {
        let body = document.querySelector(".body")
        let button = document.querySelector(".btn__lightMode")
        let themeName = document.querySelector(".themeName")

        button.addEventListener("click", () => {
            body.classList.toggle("light");
            button.classList.toggle("dark");

            (body.classList.contains("light")) ? themeName.innerText = "Włącz tryb ciemny!" : themeName.innerText = "Włącz tryb jasny!";

        });
    };


    const init = () => {
        hideMenu()
        switchTheme()
    };

    init();
}