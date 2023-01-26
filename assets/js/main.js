let navBar = document.querySelector(".nav-bar");
let menuLinks = document.querySelector(".nav-bar .container .links");
let menuBtn = document.querySelector(".icon");
let headerText = document.querySelector(".header-text");
let soundOffAndOn = document.querySelector(".header i");
let bgVideo = document.querySelector(".header video");

let textArray = ["DPFs", "Catalytic Converters", "Assay/Toll Refining"];

menuBtn.onclick = function () {
  menuLinks.classList.toggle("show");
  navBar.classList.toggle("show");
};

function changeHeaderText() {
  setInterval(() => {
    let randomNumber = Math.floor(Math.random() * textArray.length);
    // change background image every 10s
    headerText.innerHTML = textArray[randomNumber];
  }, 1000);
}

changeHeaderText();

bgVideo.muted = true;

soundOffAndOn.onclick = function () {
  if (soundOffAndOn.className != "fa-solid fa-volume-xmark") {
    soundOffAndOn.className = "fa-solid fa-volume-xmark";

    bgVideo.muted = true;
  } else {
    soundOffAndOn.className = "fa-solid fa-volume-off";

    bgVideo.muted = false;
  }
};
