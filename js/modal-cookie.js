const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");
const agreeBtn = document.querySelector(".modal-content-btn");

agreeBtn.addEventListener("click", setCookie);
closeMenuBtn.addEventListener("click", closeCookieMenu);


const cookieKey = document.cookie;
if (cookieKey.includes("PKCoockiesAgree")) {
  // додати скрипт у тіло сторінки:
  const string = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VK2FJHKC8D"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

  gtag('config', 'G-VK2FJHKC8D');
  </script>`;
  document.head.insertAdjacentHTML("afterend", string);
} else {
  // показати модалку
  setTimeout(function openCookieMenu() {
    cookieMenu.classList.remove("visually-hidden");
  }, 5000);
}

function setCookie() {
  // закрити модальне вікно з кукі
  cookieMenu.classList.add("visually-hidden");

  // i додати скрипт у тіло сторінки:
  const string = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VK2FJHKC8D"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

  gtag('config', 'G-VK2FJHKC8D');
  </script>`;
  document.head.insertAdjacentHTML("afterend", string);

  // встановити кукі
  const d = new Date();
  let cvalue = d.toUTCString();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  let cname = "PKCoockiesAgree";
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function closeCookieMenu(event) {
  event.preventDefault();
  cookieMenu.classList.add("visually-hidden");
}
