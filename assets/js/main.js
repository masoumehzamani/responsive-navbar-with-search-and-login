const openBtn = document.querySelector(".bars");
const closebtn = document.querySelector(".close");
const menu = document.querySelector(".menu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("hide-menu");
  menu.classList.add("show-menu");
});

closebtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");

  setTimeout(() => {
    menu.classList.add("hide-menu");
  }, 300);
});
