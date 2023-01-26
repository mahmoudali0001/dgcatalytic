let navBar = document.querySelector(".nav-bar");
let menuLinks = document.querySelector(".nav-bar .container .links");
let menuBtn = document.querySelector(".icon");

let toTopBtn = document.querySelector(".topBtn i ");

menuBtn.onclick = function () {
  menuLinks.classList.toggle("show");
  navBar.classList.toggle("show");
};

window.onscroll = function () {
  this.scrollY >= 1000 ? up.classList.add("show") : null;
};

toTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
