const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");

openMenuBtn.addEventListener("click", toggleMenu);
function toggleMenu(event) {
  event.preventDefault();
  mobileMenu.classList.toggle("visually-hidden");
}
