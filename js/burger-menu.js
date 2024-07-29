const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const burger = document.querySelector('.burger');
const menuElements = document.querySelectorAll('.menu-list li a');

openMenuBtn.addEventListener("click", toggleMenu);
function toggleMenu(event) {
  event.preventDefault();
  burger.classList.toggle('active');
  mobileMenu.classList.toggle("visually-hidden");

  menuElements.forEach((el) => {
    el.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.add('visually-hidden');
    });
  })
}
