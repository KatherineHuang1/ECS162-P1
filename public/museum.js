//Cite from https://www.w3schools.com/howto/howto_js_slideshow.asp
console.log("initialization");

// let finishTime = new Date("April 30, 2020 00:00:00");
// let today = new Date();
// console.log(finishTime - today);
// document.getElementById("counter").innerHTML = finishTime - today / 1000;

// setInterval(() => {
//   today = new Date();
//   document.getElementById("counter").innerHTML = finishTime - today / 1000;
//   console.log(counter);
// }, 1000);

//=================count down=================
let finishTime = new Date("April 30, 2020 00:00:00");
let today = new Date();
let counter = finishTime - today;
document.getElementById("counter").innerHTML = counter.toLocaleString();

setInterval(() => {
  counter--;
  document.getElementById("counter").innerHTML = counter.toLocaleString();
}, 1000);

//=================images container=================
let slideIndex = 1;
showSlides(slideIndex);

// link button with function
let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.addEventListener("click", (e) => showSlides(--slideIndex));
next.addEventListener("click", (e) => showSlides(++slideIndex));

//link dot with function
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");
dot1.addEventListener("click", (e) => {
  slideIndex = 1;
  showSlides(slideIndex);
});
dot2.addEventListener("click", (e) => {
  slideIndex = 2;
  showSlides(slideIndex);
});
dot3.addEventListener("click", (e) => {
  slideIndex = 3;
  showSlides(slideIndex);
});
dot4.addEventListener("click", (e) => {
  slideIndex = 4;
  showSlides(slideIndex);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  // create wrapper for images
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // remove display for all images
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // grey out all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // display the image we want
  slides[slideIndex - 1].style.display = "block";
  // fill out the dot
  dots[slideIndex - 1].className += " active";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
