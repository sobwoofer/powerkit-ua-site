const cookieMenu = document.querySelector(".modal-cookie");
const closeMenuBtn = document.querySelector(".modal-button-close");
const agreeBtn = document.querySelector(".modal-content-btn");

agreeBtn.addEventListener("click", setCookie);
closeMenuBtn.addEventListener("click", closeCookieMenu);
const cookieKey = document.cookie.split(/\=|;/);

// console.log(cookieKey);
// console.log(cookieKey.includes("PKCoockiesAgree"));

if (cookieKey.includes("PKCoockiesAgree")) {
  // додати скрипт у тіло сторінки:
  const string = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-VK2FJHKC8D"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-VK2FJHKC8D');
  </script>`;
  document.body.insertAdjacentHTML("beforeend", string);
} else {
  {
    // показати модалку
    setTimeout(function openCookieMenu() {
      cookieMenu.classList.remove("visually-hidden");
    }, 5000);
  }
}

function setCookie() {
  // закрити модальне вікно з кукі
  cookieMenu.classList.add("visually-hidden");

  //   Тег для Google Analytics
  // <!-- Google tag (gtag.js) -->

  // i додати скрипт у тіло сторінки:
  const string = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-VK2FJHKC8D"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-VK2FJHKC8D');
  </script>`;
  document.body.insertAdjacentHTML("beforeend", string);

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
