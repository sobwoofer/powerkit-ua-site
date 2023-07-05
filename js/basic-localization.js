import { langArr } from "./translation.js";
import setCurrentDomine from "./current-domine.js";

// const allLang = ["ua", "en"];
// let currentLang = localStorage.getItem("language") || "ua";

// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (var i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }

// document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  // const dropDownList = dropDownWrapper.querySelector(".dropdown-list");
  // const dropDownListItems = dropDownList.querySelectorAll(
  //   ".dropdown-list-item"
  // );

  // dropDownListItems.forEach(function (listItem) {
  //   listItem.addEventListener("click", function (e) {
  //     e.stopPropagation();
  //     currentLang = this.dataset.value;
      // localStorage.setItem("language", this.dataset.value);
      // changeLanguage();
  //   });
  // });

//   const dropDownBtn = document.querySelector(".dropdown-button");
//   function changeLanguage() {
//     dropDownBtn.innerText = currentLang.toUpperCase();
//     if (dropDownBtn.innerText === "EN") {
//       dropDownList.classList.add("dropdown-list-reverse");
//     }
//     if (dropDownBtn.innerText === "UA") {
//       dropDownList.classList.remove("dropdown-list-reverse");
//     }
//     dropDownList.classList.remove("dropdown-list--visible");

//     for (let key in langArr) {
//       let elem = document.querySelector(`[data-lng=${key}]`);
//       if (elem) {
//         elem.innerHTML = langArr[key][currentLang];
//       }
//     }
//   }
//   changeLanguage();
// });




class languageSwitcher {
    allLang = ["ua", "en"];
    vocabluary;

    constructor(objVocabluary) {
      this.vocabluary = objVocabluary;
      
      const dropDownListItems = document.querySelectorAll(".dropdown-list-item");

      this.switchLanguageMenu();

      dropDownListItems.forEach((listItem) => {
        listItem.addEventListener("click", (event) => {
          event.stopPropagation();
          
          this.language = event.target.dataset.value;
          
          this.switchLanguageMenu();
          this.translateContent();
          setCurrentDomine();
        })
      })
      
    }
    //end of constructor

    set language(selectedLanguage){
      localStorage.setItem("language", selectedLanguage);
    } 

    get language() {
      return localStorage.getItem("language") || "ua";
    }

    translateContent() {
      for (let key in this.vocabluary) {
        let elem = document.querySelector(`[data-lng=${key}]`);
        if (elem) {
          elem.innerHTML = this.vocabluary[key][this.language];
        }
      }
    } 

    switchLanguageMenu() {
      const dropDownBtn = document.querySelector(".dropdown-button");
      const dropDownList = document.querySelector(".dropdown-list");
      dropDownBtn.innerText = this.language.toUpperCase();
      if (dropDownBtn.innerText === "EN") {
        dropDownList.classList.add("dropdown-list-reverse");
      }
      if (dropDownBtn.innerText === "UA") {
        dropDownList.classList.remove("dropdown-list-reverse");
      }

      dropDownList.classList.remove("dropdown-list--visible");
      
    }
}


const pkLangSwitcher = new languageSwitcher(langArr);

pkLangSwitcher.translateContent();

setCurrentDomine();