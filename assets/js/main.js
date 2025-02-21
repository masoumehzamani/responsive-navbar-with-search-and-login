const menuList = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay");

const searchForm = document.querySelector(".search-form");

function toggleMenu() {
  menuList.classList.toggle("active");

  if (menuList.classList.contains("active")) {
    toggle.innerHTML = '<i class="ri-close-fill"></i>';
  } else {
    toggle.innerHTML = '<i class="ri-menu-line"></i>';
  }
}

function showSearch() {
  overlay.classList.add("show-overlay");
  searchForm.classList.add("active");
}

function closeOverlay() {
  overlay.classList.remove("show-overlay");
  searchForm.classList.remove("active");
}
