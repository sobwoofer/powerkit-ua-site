const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");

openMenuBtn.addEventListener("click", toggleMenu);
function toggleMenu(event) {
  event.preventDefault();
  mobileMenu.classList.toggle("visually-hidden");
}

//   window.addEventListener("keydown", closeMenu);
//   function closeMenu(event) {
//     event.preventDefault();
//     if (!event.currentTarget === event.target) {
//       mobileMenu.classList.add("visually-hidden");
//     }
//   }
