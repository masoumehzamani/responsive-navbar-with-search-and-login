const menuList = document.querySelector(".menu-list");
const bars = document.querySelector(".bars");
const closeBtn = document.querySelector(".closeBtn");

bars.addEventListener("click", () => {
  menuList.classList.remove("hide-menu");
  menuList.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
  menuList.classList.remove("show-menu");
  menuList.classList.add("hide-menu");
});

// Prevent menu transition glitches during window resize
// This temporarily disables CSS transitions when resizing to avoid
// a flicker where the mobile menu briefly appears due to transform changes.
window.addEventListener("resize", () => {
  menuList.classList.add("no-transition");

  if (window.innerWidth > 1024) {
    menuList.classList.remove("show-menu", "hide-menu");
  } else {
    menuList.classList.add("hide-menu");
  }

  setTimeout(() => {
    menuList.classList.remove("no-transition");
  }, 100);
});
