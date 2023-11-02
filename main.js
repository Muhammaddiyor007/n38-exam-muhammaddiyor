const close_btn = document.querySelector(".close-btn");
const open_btn = document.querySelector(".open-btn");
const inner_nav_btns = document.querySelectorAll(".inner-nav-link");

const nav = document.querySelector(".inner-nav");

open_btn.addEventListener("click", () => {
  nav.style.transform = "translateX(100%)";
  open_btn.style.display = "none";
  close_btn.style.display = "block";
});
close_btn.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
  close_btn.style.display = "none";
  open_btn.style.display = "block";
});

inner_nav_btns.forEach((item) => {
  item.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
  });
});
