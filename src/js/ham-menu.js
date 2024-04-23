document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu__toggle");
    const menuOverlay = document.getElementById("menu__overlay");
    const menuLinks = document.querySelectorAll(".menu__item");

    // Додавання обробника подій для чекбоксу гамбургерного меню
    menuToggle.addEventListener("change", function () {
        document.body.classList.toggle("menu-open", menuToggle.checked);
    });

    // Додавання обробника подій для оверлею меню
    menuOverlay.addEventListener("click", function () {
        menuToggle.checked = false;
        document.body.classList.remove("menu-open");
    });

    // Додавання обробника подій для кожного посилання меню
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menuToggle.checked = false;
            document.body.classList.remove("menu-open");
        });
    });
});
