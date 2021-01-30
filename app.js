const nav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".header__toggle-menu");
const toggleBar1 = document.querySelector(".header__toggle-bar1");
const toggleBar2 = document.querySelector(".header__toggle-bar2");
const toggleBar3 = document.querySelector(".header__toggle-bar3");


toggleMenu.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
    toggleBar1.classList.toggle("animate-bar1");
    toggleBar2.classList.toggle("animate-bar2");
    toggleBar3.classList.toggle("animate-bar3");

});