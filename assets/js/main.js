const menuList = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

function toggleMenu() {
  menuList.classList.toggle("active");

  if (menuList.classList.contains("active")) {
    toggle.innerHTML = `<i class="ri-close-fill"></i>`;
  } else {
    toggle.innerHTML = `<i class="ri-menu-line"></i>`;
  }
}
