
document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu"),
        button = dropdownMenu.querySelector(".dropdown-menu__button"),
        list = dropdownMenu.querySelector(".dropdown-menu__items");

    document.addEventListener("click", event => {
        if ([button, list].includes(event.target)) return;

        if (button.classList.contains("dropdown-menu__button_clicked")) {
            button.classList.remove("dropdown-menu__button_clicked");
        }
        if (list.classList.contains("dropdown-menu__items_showed")) {
            list.classList.remove("dropdown-menu__items_showed");
        }
    });
    button.addEventListener("click", function() {
        this.classList.toggle("dropdown-menu__button_clicked");
        list.classList.toggle("dropdown-menu__items_showed");
    });
});
