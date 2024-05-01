///////////////////////////////////////////////////////////1////////////////////////

let indexValue = 0;

let img = document.querySelectorAll("img");

function autoSlide() {
  setInterval(autoSlide, 4000);
  for (let i = 0; i < img.length; i += 1) {
    img[i].style.display = "none";
  }
  indexValue += 1;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
autoSlide();
//////////////////////////////////////////////////////2/////////////////////////////////////////
let indexQuote = 0;
let p = document.querySelectorAll("p");

function autoQuote() {
  setInterval(autoQuote, 5000);
  for (let i = 0; i < p.length; i += 1) {
    p[i].style.display = "none";
    p[i].style.backgroundColor = "";
  }
  indexQuote += 1;
  if (indexQuote > p.length) {
    indexQuote = 1;
  }
  let currentQuote = p[indexQuote - 1];
  currentQuote.style.display = "block";
  currentQuote.style.backgroundColor = randomColor();
}
function randomColor() {
  let num = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += num[Math.floor(Math.random() * 16)];
  }
  return color;
}
autoQuote();

///////////////////////////////////////3//////////////////////////////////////
let time = 1800;
let countDown = document.querySelector(".countdown");

function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDown.innerHTML = `${minutes} : ${seconds}`;
  time -= 1;
}

setInterval(updateCountdown, 1000);
