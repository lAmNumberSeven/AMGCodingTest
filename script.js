const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  image = document.getElementById("logo");

var imgArray = ["./images/AMG_2013_4C_logoHR.png", "./images/AMG_-1.png"];
var pointerArray = [
  "fas fa-circle-chevron-right toggle icons fa-lg",
  "fas fa-circle-chevron-left toggle icons fa-lg",
];
var i = 0;

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  i++;
  image.src = imgArray[i];
  toggle.className = pointerArray[i];
  if (i == imgArray.length - 1) {
    i = -1;
  }
});

const cards = [...document.querySelectorAll(".cards")];

const next = [...document.querySelectorAll(".next")];

const prev = [...document.querySelectorAll(".prev")];

cards.forEach((item, i) => {
  let containerD = item.getBoundingClientRect();
  let containerW = containerD.width;

  next[i].addEventListener("click", () => {
    item.scrollLeft += containerW;
    console.log("next");
  });
  prev[i].addEventListener("click", () => {
    item.scrollLeft -= containerW;
    console.log("prev");
  });
});
