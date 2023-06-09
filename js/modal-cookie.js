const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");
const agreeBtn = document.querySelector(".modal-content-btn");

agreeBtn.addEventListener("click", setCookie);
closeMenuBtn.addEventListener("click", closeCookieMenu);

setTimeout(function openCookieMenu() {
  cookieMenu.classList.remove("visually-hidden");
}, 5000);

function setCookie(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
  document.cookie = `PKCoockiesAgree=${Date.now()}; expires=Thu, 18 Dec 2024 12:00:00 UTC;`;
}

function closeCookieMenu(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
}
