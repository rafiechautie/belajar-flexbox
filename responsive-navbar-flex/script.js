const hamburger = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

hamburger.addEventListener('click', function () {
    //nambahin class slide ke nav
    nav.classList.toggle("slide");
})