import { langArr } from "./translation.js";

const allLang = ["ua", "en"];
let currentLang = localStorage.getItem("language") || "ua";

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

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      currentLang = this.dataset.value;
      localStorage.setItem("language", this.dataset.value);
      changeLanguage();
    });
  });

  const dropDownBtn = document.querySelector(".dropdown-button");
  function changeLanguage() {
    dropDownBtn.innerText = currentLang.toUpperCase();
    if (dropDownBtn.innerText === "EN") {
      dropDownList.classList.add("dropdown-list-reverse");
    }
    if (dropDownBtn.innerText === "UA") {
      dropDownList.classList.remove("dropdown-list-reverse");
    }
    dropDownList.classList.remove("dropdown-list--visible");

    for (let key in langArr) {
      let elem = document.querySelector(`[data-lng=${key}]`);
      if (elem) {
        elem.innerHTML = langArr[key][currentLang];
      }
    }
  }
  changeLanguage();
});
