const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");

setTimeout(function openCookieMenu() {
  cookieMenu.classList.remove("visually-hidden");
}, 5000);

closeMenuBtn.addEventListener("click", closeCookieMenu);
function closeCookieMenu(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
}
