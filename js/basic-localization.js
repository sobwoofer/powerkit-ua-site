import { langArr } from "./translation.js";
// console.log(langArr);

const allLang = ["ua", "en"];

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownList = dropDownWrapper.querySelector(".dropdown-list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown-list-item"
  );

  // Перенаправити на ulr з уточненням мови
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      let lang = this.dataset.value;
      console.log(lang);
      location.href = window.location.pathname + "#" + lang;
      location.reload();
    });
  });

  const dropDownBtn = document.querySelector(".dropdown-button");
  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    // console.log(hash);
    dropDownBtn.innerText = hash.toUpperCase();
    if (dropDownBtn.innerText === "EN") {
      dropDownList.classList.add("dropdown-list-reverse");
    }
    if (dropDownBtn.innerText === "UA") {
      dropDownList.classList.remove("dropdown-list-reverse");
    }
    dropDownList.classList.remove("dropdown-list--visible");

    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + "#ua";
      location.reload();
    }
    for (let key in langArr) {
      let elem = document.querySelector(`[data-lng=${key}]`);
      if (elem) {
        elem.innerHTML = langArr[key][hash];
      }
    }
  }
  changeLanguage();
});
