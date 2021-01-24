"use strict";

const close = document.querySelector(".close");
const navItem = document.querySelector(".nav--item");

close.addEventListener("click", (e) => {
  if (navItem.classList.contains("open")) {
    navItem.classList.remove("open");
    close.textContent = "close";
  } else {
    navItem.classList.add("open");
    close.textContent = "open";
  }
});
