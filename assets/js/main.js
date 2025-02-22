const menuList = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay");

const searchForm = document.querySelector(".search-form");
const loginForm = document.querySelector(".login-form");

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
  loginForm.classList.remove("active");
}

function showForm() {
  overlay.classList.add("show-overlay");
  loginForm.classList.add("active");
  searchForm.classList.remove("active");
}

function closeOverlay() {
  overlay.classList.remove("show-overlay");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
}
