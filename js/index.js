"use strict";

// Navigation
const nav = document.querySelector(".navigation__nav");
// Burger btn
const burgerBtn = document.querySelector(".navigation__button");
// Burger line
const burgerLine = document.querySelector(".navigation__icon");
// Navigation background
const navBackground = document.querySelector(".navigation__background");
// Navigation link
const navLink = document.querySelectorAll(".navigation__link");
// Scroll to top btn
const scrollBtn = document.getElementById("btnScroll");

// BURGER BTN FUNCTIONALITY
burgerBtn.addEventListener("click", () => {
  navBackground.classList.toggle("active-background");
  nav.classList.toggle("active-nav");
  burgerLine.classList.toggle("active-line");
});

// TOGGLE OFF NAV MENU WHEN CLICK ON LINK
navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navBackground.classList.remove("active-background");
    nav.classList.remove("active-nav");
    burgerLine.classList.remove("active-line");
  });
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
