const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");
const agreeBtn = document.querySelector(".modal-content-btn");

agreeBtn.addEventListener("click", setCookie);
closeMenuBtn.addEventListener("click", closeCookieMenu);

if (document.cookie.PKCoockiesAgree) {
  setTimeout(function openCookieMenu() {
    cookieMenu.classList.remove("visually-hidden");
  }, 5000);
}

function setCookie(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
  document.cookie = `PKCoockiesAgree=${Date.now()}; expires=Thu, 18 Dec 2024 12:00:00 UTC;`;
  // i додати скрипт у тіло сторінки
  //   Тег для Google Analytics

  // <!-- Google tag (gtag.js) -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-VK2FJHKC8D"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-VK2FJHKC8D');
  // </script>
}

function closeCookieMenu(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
}
