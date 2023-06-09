const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");


setTimeout(function openCookieMenu() {
  cookieMenu.classList.remove("visually-hidden");
}, 5000);
document.cookie = `PKCoockiesAgree=${Date.now()}; expires=Thu, 18 Dec 2024 12:00:00 UTC;`;

closeMenuBtn.addEventListener("click", closeCookieMenu);
function closeCookieMenu(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
}
