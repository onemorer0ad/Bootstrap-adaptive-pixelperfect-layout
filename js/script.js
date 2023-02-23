let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav");
let links = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("stop-scroll");
});

links.forEach((element) => {
  element.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
