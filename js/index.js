"use strict";

const nav = document.querySelector(".navigation__nav");
const navBtn = document.querySelector(".navigation__button");
const navIcon = document.querySelector(".navigation__icon");
const navBackground = document.querySelector(".navigation__background");
const navList = document.querySelector(".navigation__list");
const navLinks = document.querySelectorAll(".navigation__item > a");
const scrollBtn = document.getElementById("btnScroll");

navBtn.addEventListener("click", () => {
  navBackground.style.transform = "scale(80)";
  nav.style.opacity = "1";
  nav.style.width = "100%";
});

navList.addEventListener("click", () => {
  navBackground.style.transform = "scale(0)";
  nav.style.opacity = "0";
  nav.style.width = "0";
});

// COPYRIGHT
document.getElementById("year").textContent = new Date().getFullYear();

// SCROLL TO TOP

// Scroll btn
window.onscroll = function () {
  scrollFunction();
  scrollBtn.style.transition = "opacity 0.5s";
};

// Scroll btn appear
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
