const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");

openMenuBtn.addEventListener("click", openMenu);
window.addEventListener("keydown", closeMenu);

function openMenu(event) {
  event.preventDefault();
  mobileMenu.classList.remove("visually-hidden");
}

function closeMenu(event) {
  event.preventDefault();
  if (event.code === "Escape" || event.currentTarget === event.target) {
    mobileMenu.classList.add("visually-hidden");
  }
}
