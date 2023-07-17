const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const burger = document.querySelector('.burger');

openMenuBtn.addEventListener("click", toggleMenu);
function toggleMenu(event) {
  event.preventDefault();
  burger.classList.toggle('active');
  mobileMenu.classList.toggle("visually-hidden");
}
