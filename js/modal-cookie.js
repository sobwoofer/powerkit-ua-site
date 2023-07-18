const cookieMenu = document.querySelector(".modal-cookie");
if (cookieMenu) {
  const agreeBtn = document.querySelector(".modal-content-btn");

  const cookieKey = document.cookie;
  if (cookieKey.includes("PKCoockiesAgree")) {
    // add the script to the body of the page:
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
    // show the modal
    setTimeout(function openCookieMenu() {
      agreeBtn.addEventListener("click", setCookie);
      cookieMenu.classList.remove("visually-hidden");
    }, 5000);
  }

  function setCookie() {
    // close the modal window with the cookie
    cookieMenu.classList.add("visually-hidden");

    // and add the script to the body of the page:
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

    // set cookies
    const d = new Date();
    let cvalue = d.toUTCString();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    let cname = "PKCoockiesAgree";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}
